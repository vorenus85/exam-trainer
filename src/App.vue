<script setup lang="ts">
import { computed, onUnmounted, reactive, ref } from "vue";
import Button from "primevue/button";
import Card from "primevue/card";
import Checkbox from "primevue/checkbox";
import Message from "primevue/message";
import ProgressBar from "primevue/progressbar";
import RadioButton from "primevue/radiobutton";
import Select from "primevue/select";
import Tag from "primevue/tag";
import { sampleQuestions, topics } from "./data/sampleQuestions";
import type { ChoiceQuestion, ExamQuestion, GroupingQuestion, MatchingQuestion, OrderingQuestion } from "./types/question";
import { getFillInAnswerKey, getGroupingAnswerKey, getMatchingAnswerKey, getTrueFalseAnswerKey } from "./domain/answers";
import { hasAnswer as evaluateHasAnswer } from "./domain/questionEvaluation";
import { getCorrectAnswerText as formatCorrectAnswer } from "./domain/answerFormatting";
import { calculatePercent, getPracticeResult } from "./domain/grading";
import { createOptionOrders, filterQuestions, selectQuestions } from "./domain/questionSelection";
import type { PracticeMode, PracticeSettings } from "./domain/questionSelection";

const PRACTICE_TIME_LIMIT_SECONDS = 30 * 60;
type PracticeQuestion = ExamQuestion;

const practiceModes = [
  { id: "exam" as const, name: "Vizsga gyakorlása" },
  { id: "module" as const, name: "Egy modul gyakorlása" },
];

const questionTypes: { id: PracticeQuestion["type"]; name: string }[] = [
  { id: "single_choice", name: "Egy helyes válasz" },
  { id: "multiple_choice", name: "Több helyes válasz" },
  { id: "true_false", name: "Igaz / hamis" },
  { id: "matching", name: "Párosítás" },
  { id: "grouping", name: "Csoportosítás" },
  { id: "ordering", name: "Sorbarendezés" },
  { id: "fill_in", name: "Mondatkiegészítés (választás)" },
];
const selectedQuestionTypes = ref<PracticeQuestion["type"][]>(questionTypes.map((type) => type.id));
const allQuestionTypesSelected = computed({
  get: () => questionTypes.every((type) => selectedQuestionTypes.value.includes(type.id)),
  set: (selected: boolean) => {
    selectedQuestionTypes.value = selected ? questionTypes.map((type) => type.id) : [];
  },
});

const currentIndex = ref(0);
const isFinished = ref(false);
const isStarted = ref(false);
const selectedMode = ref<PracticeMode | null>(null);
const selectedTopicId = ref<string | null>(null);
const shuffledQuestionIds = ref<string[]>([]);
const shuffledOptionIds = ref<Record<string, string[]>>({});
const timeRemaining = ref(PRACTICE_TIME_LIMIT_SECONDS);
let timerId: ReturnType<typeof setInterval> | null = null;

const answers = reactive<Record<string, string | string[] | boolean | null>>(
  {},
);

const practiceSettings = computed<PracticeSettings>(() => ({
  mode: selectedMode.value,
  topicId: selectedTopicId.value,
  questionTypes: selectedQuestionTypes.value,
}));

const questions = computed<PracticeQuestion[]>(() => {
  if (shuffledQuestionIds.value.length === 0) {
    return filterQuestions(sampleQuestions, practiceSettings.value);
  }
  const questionsById = new Map(sampleQuestions.map((question) => [question.id, question]));
  return shuffledQuestionIds.value
    .map((id) => questionsById.get(id))
    .filter((question): question is PracticeQuestion => question !== undefined);
});

const currentQuestion = computed(() => questions.value[currentIndex.value]);

const result = computed(() => getPracticeResult(questions.value, answers));
const answeredCount = computed(() => result.value.answeredCount);
const progressPercent = computed(() => calculatePercent(answeredCount.value, questions.value.length));

const formattedTimeRemaining = computed(() => {
  const minutes = Math.floor(timeRemaining.value / 60);
  const seconds = timeRemaining.value % 60;

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
});

const correctCount = computed(() => result.value.correctCount);
const incorrectQuestions = computed(() => result.value.incorrectQuestions);
const scorePercent = computed(() => result.value.scorePercent);
const grade = computed(() => result.value.grade);

const gradeClass = computed(() => {
  if (grade.value === "jeles") {
    return "border-green-200 bg-green-50 text-green-800";
  }

  if (grade.value === "jó") {
    return "border-blue-200 bg-blue-50 text-blue-800";
  }

  if (grade.value === "közepes") {
    return "border-yellow-200 bg-yellow-50 text-yellow-800";
  }

  if (grade.value === "elégséges") {
    return "border-orange-200 bg-orange-50 text-orange-800";
  }

  return "border-red-200 bg-red-50 text-red-800";
});

function getTopicName(topicId: string) {
  return (
    topics.find((topic) => topic.id === topicId)?.name ?? "Ismeretlen témakör"
  );
}

function goToPreviousQuestion() {
  if (currentIndex.value === 0) return;

  currentIndex.value -= 1;
}

function goToNextQuestion() {
  if (currentIndex.value < questions.value.length - 1) {
    currentIndex.value += 1;
    return;
  }

  finishExam();
}

function startExam() {
  if (!selectedMode.value || questions.value.length === 0) return;
  if (selectedMode.value === "module" && !selectedTopicId.value) return;

  const selectedQuestions = selectQuestions(sampleQuestions, practiceSettings.value);
  if (selectedQuestions.length === 0) return;
  shuffledQuestionIds.value = selectedQuestions.map((question) => question.id);
  shuffledOptionIds.value = createOptionOrders(selectedQuestions);
  currentIndex.value = 0;
  isFinished.value = false;
  isStarted.value = true;
  startTimer();
}

function handleModeChange() {
  if (selectedMode.value === "exam") {
    selectedTopicId.value = null;
  }
}

function startTimer() {
  stopTimer();
  timeRemaining.value = PRACTICE_TIME_LIMIT_SECONDS;

  timerId = setInterval(() => {
    if (timeRemaining.value <= 1) {
      timeRemaining.value = 0;
      finishExam();
      return;
    }

    timeRemaining.value -= 1;
  }, 1000);
}

function stopTimer() {
  if (timerId === null) return;

  clearInterval(timerId);
  timerId = null;
}

function finishExam() {
  isFinished.value = true;
  stopTimer();
}

function hasAnswer(question: PracticeQuestion) {
  return evaluateHasAnswer(question, answers);
}

function getCorrectAnswerText(question: PracticeQuestion) {
  return formatCorrectAnswer(question, shuffledOptionIds.value[question.id]);
}

function getQuestionOptions(question: ChoiceQuestion) {
  const optionOrder = shuffledOptionIds.value[question.id];
  if (!optionOrder) return question.options;

  const optionsById = new Map(
    question.options.map((option) => [option.id, option]),
  );

  return optionOrder
    .map((optionId) => optionsById.get(optionId))
    .filter(
      (option): option is ChoiceQuestion["options"][number] =>
        option !== undefined,
    );
}

function restartPractice() {
  stopTimer();

  Object.keys(answers).forEach((questionId) => {
    delete answers[questionId];
  });

  currentIndex.value = 0;
  isFinished.value = false;
  isStarted.value = false;
  selectedMode.value = null;
  selectedTopicId.value = null;
  selectedQuestionTypes.value = questionTypes.map((type) => type.id);
  shuffledQuestionIds.value = [];
  shuffledOptionIds.value = {};
  timeRemaining.value = PRACTICE_TIME_LIMIT_SECONDS;
}

onUnmounted(stopTimer);

function getOrderingItems(question: OrderingQuestion) {
  const answer = answers[question.id];
  const order = Array.isArray(answer) ? answer : shuffledOptionIds.value[question.id];
  if (!order) return question.items;
  const itemsById = new Map(question.items.map((item) => [item.id, item]));
  return order.map((id) => itemsById.get(id)!).filter(Boolean);
}

function moveOrderingItem(question: OrderingQuestion, index: number, direction: -1 | 1) {
  const order = getOrderingItems(question).map((item) => item.id);
  const targetIndex = index + direction;
  if (index < 0 || index >= order.length || targetIndex < 0 || targetIndex >= order.length) return;
  [order[index], order[targetIndex]] = [order[targetIndex]!, order[index]!];
  answers[question.id] = order;
}

function getGroupingItems(question: GroupingQuestion) {
  const order = shuffledOptionIds.value[question.id];
  if (!order) return question.items;
  return [...question.items].sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
}

function getMatchingOptions(question: MatchingQuestion, currentPairId?: string) {
  const order = shuffledOptionIds.value[question.id] ?? question.pairs.map((pair) => pair.id);
  return order.map((id, index) => ({
    id,
    label: String.fromCharCode(65 + index),
    text: question.pairs.find((pair) => pair.id === id)!.right,
    disabled: question.pairs.some((pair) => pair.id !== currentPairId
      && answers[getMatchingAnswerKey(question, pair.id)] === id),
  }));
}

</script>

<template>
  <main
    class="min-h-screen bg-slate-50 px-4 py-6 text-slate-900 sm:px-6 lg:px-8"
  >
    <section class="mx-auto flex max-w-4xl flex-col gap-6">
      <header class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div
          class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between"
        >
          <div>
            <p
              class="text-sm font-semibold uppercase tracking-wide text-blue-700"
            >
              Vizsga Tréner
            </p>

            <h1 class="mt-1 text-3xl font-bold text-slate-950">
              Vizsgakérdések gyakorlása
            </h1>

            <p class="mt-2 max-w-2xl text-slate-600">
              Választós, igaz–hamis, párosító, csoportosító, sorbarendező és mondatkiegészítő feladatok.
            </p>
          </div>

          <Button
            v-if="isStarted"
            label="Újrakezdés"
            icon="pi pi-refresh"
            severity="secondary"
            outlined
            @click="restartPractice"
          />
        </div>

        <div
          v-if="isStarted"
          class="mt-5 grid gap-3 md:grid-cols-[1fr_auto_auto] md:items-center"
        >
          <ProgressBar :value="progressPercent" class="h-3" />

          <span
            class="text-sm font-semibold tabular-nums"
            :class="timeRemaining <= 10 ? 'text-red-600' : 'text-slate-600'"
            aria-live="polite"
          >
            Idő: {{ formattedTimeRemaining }}
          </span>

          <span class="text-sm font-medium text-slate-600">
            {{ answeredCount }} / {{ questions.length }} megválaszolva
          </span>
        </div>
      </header>

      <Card v-if="!isStarted">
        <template #title> Gyakorlási mód </template>

        <template #content>
          <div class="flex flex-col gap-5">
            <Select
              v-model="selectedMode"
              :options="practiceModes"
              option-label="name"
              option-value="id"
              placeholder="Válassz gyakorlási módot"
              class="w-full"
              @change="handleModeChange"
            />

            <Select
              v-if="selectedMode === 'module'"
              v-model="selectedTopicId"
              :options="topics"
              option-label="name"
              option-value="id"
              placeholder="Válassz egy modult"
              class="w-full"
            />

            <fieldset class="rounded-md border border-slate-200 p-4">
              <legend class="px-1 font-semibold">Kérdésfajták</legend>
              <label class="mb-3 flex cursor-pointer items-center gap-2">
                <Checkbox v-model="allQuestionTypesSelected" input-id="question-types-all" binary />
                <span>Mind (nincs szűrés)</span>
              </label>
              <div class="grid gap-3 sm:grid-cols-2">
                <label v-for="type in questionTypes" :key="type.id" class="flex cursor-pointer items-center gap-2">
                  <Checkbox v-model="selectedQuestionTypes" :input-id="`question-type-${type.id}`" :value="type.id" />
                  <span>{{ type.name }}</span>
                </label>
              </div>
            </fieldset>

            <p v-if="selectedMode === 'exam'" class="text-sm text-slate-500">
              A vizsgakör témakörönként a beállított keretig választ a kijelölt kérdésfajtákból.
            </p>

            <Message v-if="selectedMode && (selectedMode === 'exam' || selectedTopicId) && questions.length === 0"
              severity="warn" :closable="false">
              A kiválasztott beállításokkal nincs elérhető kérdés. Válassz más kérdésfajtát vagy modult!
            </Message>

            <Button
              label="Gyakorlás indítása"
              icon="pi pi-play"
              class="self-start"
              :disabled="
                !selectedMode ||
                (selectedMode === 'module' && !selectedTopicId) ||
                questions.length === 0
              "
              @click="startExam"
            />
          </div>
        </template>
      </Card>

      <!--
        <template #title> Témakör kiválasztása </template>

        <template #content>
          <div class="flex flex-col gap-5">
            <p class="text-slate-600">
              Válaszd ki, melyik témakör kérdéseiből szeretnél vizsgázni.
            </p>

            <Select
              v-model="selectedTopicId"
              :options="topics"
              option-label="name"
              option-value="id"
              placeholder="Válassz egy témakört"
              class="w-full"
            />

            <p v-if="selectedTopicId" class="text-sm text-slate-500">
              {{ questions.length }} kérdés érhető el ebben a témakörben.
            </p>

            <Button
              label="Vizsga indítása"
              icon="pi pi-play"
              class="self-start"
              :disabled="!selectedTopicId || questions.length === 0"
              @click="startExam"
            />
          </div>
        </template>
      </Card>

        -->

      <Card v-else-if="!isFinished">
        <template #title>
          <div
            class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <span>{{ currentIndex + 1 }}. kérdés</span>

            <div class="flex flex-wrap gap-2">
              <Tag
                :value="getTopicName(currentQuestion.topicId)"
                severity="info"
              />
              <Tag
                :value="
                  currentQuestion.type === 'true_false'
                    ? 'Igaz / hamis'
                    : currentQuestion.type === 'matching'
                      ? 'Párosítás'
                    : currentQuestion.type === 'grouping'
                      ? 'Csoportosítás'
                    : currentQuestion.type === 'ordering'
                      ? 'Sorbarendezés'
                    : currentQuestion.type === 'fill_in'
                      ? 'Mondatkiegészítés'
                    : currentQuestion.type === 'multiple_choice'
                      ? 'Több helyes válasz'
                      : 'Egy helyes válasz'
                "
                severity="secondary"
              />
            </div>
          </div>
        </template>

        <template #content>
          <div class="flex flex-col gap-5">
            <p class="text-lg font-semibold leading-relaxed text-slate-900">
              {{ currentQuestion.prompt }}
            </p>

            <div
              v-if="currentQuestion.type === 'single_choice' || currentQuestion.type === 'multiple_choice'"
              class="grid gap-3"
            >
              <label
                v-for="option in getQuestionOptions(currentQuestion)"
                :key="option.id"
                class="flex cursor-pointer items-center gap-3 rounded-md border border-slate-200 p-3 hover:border-blue-300"
              >
                <RadioButton
                  v-if="currentQuestion.type === 'single_choice'"
                  v-model="answers[currentQuestion.id]"
                  :input-id="`${currentQuestion.id}-${option.id}`"
                  :value="option.id"
                  name="single-choice"
                />

                <Checkbox
                  v-else
                  v-model="answers[currentQuestion.id]"
                  :input-id="`${currentQuestion.id}-${option.id}`"
                  :value="option.id"
                />

                <span>{{ option.text }}</span>
              </label>
            </div>

            <div v-else-if="currentQuestion.type === 'matching'" class="grid gap-4">
              <p class="text-sm text-slate-600">
                Párosítsd a számozott elemeket a betűjelű válaszokkal! Minden betűt egyszer használhatsz fel.
              </p>
              <div class="grid gap-3 rounded-md border border-slate-200 bg-slate-50 p-4">
                <p v-for="option in getMatchingOptions(currentQuestion)" :key="option.id" class="flex gap-3">
                  <strong>{{ option.label }}:</strong>
                  <span>{{ option.text }}</span>
                </p>
              </div>
              <div v-for="(pair, index) in currentQuestion.pairs" :key="pair.id"
                class="flex flex-wrap items-center justify-between gap-3 rounded-md border border-slate-200 p-3">
                <label :for="`matching-pair-${index}`" class="flex-1 font-medium">
                  {{ index + 1 }}. {{ pair.left }}
                </label>
                <Select
                  v-model="answers[getMatchingAnswerKey(currentQuestion, pair.id)]"
                  :input-id="`matching-pair-${index}`"
                  :options="getMatchingOptions(currentQuestion, pair.id)"
                  option-label="label" option-value="id" option-disabled="disabled"
                  placeholder="Válassz betűt" show-clear class="w-44"
                />
              </div>
            </div>

            <div v-else-if="currentQuestion.type === 'fill_in'" class="grid gap-4">
              <p class="text-sm text-slate-600">Egészítsd ki az összes mondatot a megfelelő válaszok kiválasztásával!</p>
              <div v-for="(statement, statementIndex) in currentQuestion.statements" :key="statement.id"
                class="rounded-md border border-slate-200 p-4 leading-loose">
                <template v-for="(part, partIndex) in statement.parts" :key="typeof part === 'string' ? `text-${partIndex}` : part.id">
                  <span v-if="typeof part === 'string'" class="whitespace-pre-wrap">{{ part }}</span>
                  <Select v-else
                    v-model="answers[getFillInAnswerKey(currentQuestion, statement.id, part.id)]"
                    :input-id="`fill-in-${statementIndex}-${partIndex}`"
                    :aria-label="`${statementIndex + 1}. állítás: ${part.label}`"
                    :options="part.options" option-label="text" option-value="id"
                    placeholder="Válassz…" show-clear class="mx-1 inline-flex max-w-full align-middle"
                  />
                </template>
              </div>
            </div>

            <div v-else-if="currentQuestion.type === 'ordering'" class="grid gap-4">
              <p class="text-sm text-slate-600">
                A nyilakkal mozgasd az elemeket a kért sorrendbe! Ha a kezdeti sorrendet szeretnéd megtartani, hagyd jóvá.
              </p>
              <ol class="grid gap-3" aria-label="Az elemek jelenlegi sorrendje">
                <li v-for="(item, index) in getOrderingItems(currentQuestion)" :key="item.id"
                  class="flex items-center gap-3 rounded-md border border-slate-200 p-3">
                  <span class="font-semibold tabular-nums">{{ index + 1 }}.</span>
                  <span class="flex-1">{{ item.text }}</span>
                  <Button icon="pi pi-arrow-up" severity="secondary" outlined
                    :aria-label="`${item.text} feljebb mozgatása`" :disabled="index === 0"
                    @click="moveOrderingItem(currentQuestion, index, -1)" />
                  <Button icon="pi pi-arrow-down" severity="secondary" outlined
                    :aria-label="`${item.text} lejjebb mozgatása`" :disabled="index === currentQuestion.items.length - 1"
                    @click="moveOrderingItem(currentQuestion, index, 1)" />
                </li>
              </ol>
              <Button v-if="!hasAnswer(currentQuestion)" label="Sorrend jóváhagyása" severity="secondary" outlined class="self-start"
                @click="answers[currentQuestion.id] = getOrderingItems(currentQuestion).map((item) => item.id)" />
            </div>

            <div v-else-if="currentQuestion.type === 'grouping'" class="grid gap-4">
              <p class="text-sm text-slate-600">
                Válaszd ki minden elem csoportját! Egy csoportba több elem is kerülhet.
              </p>
              <div v-for="(item, index) in getGroupingItems(currentQuestion)" :key="item.id"
                class="flex flex-col gap-3 rounded-md border border-slate-200 p-3 sm:flex-row sm:items-center sm:justify-between">
                <label :for="`grouping-item-${index}`" class="flex-1 font-medium">
                  {{ index + 1 }}. {{ item.text }}
                </label>
                <Select
                  v-model="answers[getGroupingAnswerKey(currentQuestion, item.id)]"
                  :input-id="`grouping-item-${index}`"
                  :options="currentQuestion.groups" option-label="text" option-value="id"
                  placeholder="Válassz csoportot" show-clear class="w-full sm:w-64"
                />
              </div>
            </div>

            <div v-else-if="currentQuestion.type === 'true_false'" class="grid gap-3">
              <div
                v-for="statement in currentQuestion.statements"
                :key="statement.id"
                class="rounded-md border border-slate-200 p-3"
              >
                <p class="mb-3 font-medium text-slate-900">
                  {{ statement.text }}
                </p>

                <div class="flex flex-wrap gap-4">
                  <label
                    v-for="value in [true, false]"
                    :key="String(value)"
                    class="flex cursor-pointer items-center gap-2"
                  >
                    <RadioButton
                      v-model="
                        answers[
                          getTrueFalseAnswerKey(currentQuestion, statement.id)
                        ]
                      "
                      :input-id="`${currentQuestion.id}-${statement.id}-${value}`"
                      :value="value"
                      :name="`${currentQuestion.id}-${statement.id}`"
                    />

                    <span>{{ value ? "Igaz" : "Hamis" }}</span>
                  </label>
                </div>
              </div>
            </div>

            <div
              class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <Button
                label="Előző"
                severity="secondary"
                outlined
                :disabled="currentIndex === 0"
                @click="goToPreviousQuestion"
              />

              <Button
                :label="
                  currentIndex === questions.length - 1
                    ? 'Eredmény megnézése'
                    : 'Következő'
                "
                icon="pi pi-arrow-right"
                icon-pos="right"
                :disabled="!hasAnswer(currentQuestion)"
                @click="goToNextQuestion"
              />
            </div>
          </div>
        </template>
      </Card>

      <Card v-else>
        <template #content>
          <div class="flex flex-col gap-5">
            <div
              v-if="selectedMode === 'exam'"
              class="rounded-lg border p-4"
              :class="gradeClass"
            >
              <h2 class="text-xl font-bold">Értékelés</h2>
              <p class="mt-2 text-lg font-semibold text-slate-900">
                Eredmény: {{ scorePercent }}% — {{ grade }}
              </p>

              <ul class="mt-3 grid gap-1 text-sm text-slate-700">
                <li>100–88% — jeles (30–26 pont)</li>
                <li>87–75% — jó (25–23 pont)</li>
                <li>74–62% — közepes (22–19 pont)</li>
                <li>61–51% — elégséges (18–16 pont)</li>
                <li>50–0% — elégtelen (15–0 pont)</li>
              </ul>
            </div>
            <template v-if="selectedMode === 'module'">
              <h2 class="text-xl font-bold">Értékelés</h2>
              <Message
                :severity="
                  correctCount === questions.length ? 'success' : 'warn'
                "
                :closable="false"
              >
                {{ correctCount }} / {{ questions.length }} helyes válasz
              </Message>
            </template>

            <Message
              v-if="timeRemaining === 0"
              severity="warn"
              :closable="false"
            >
              Az idő lejárt, a meg nem válaszolt kérdések hiányosnak számítanak.
            </Message>

            <div v-if="incorrectQuestions.length" class="grid gap-4">
              <h2 class="text-xl font-bold text-slate-950">
                Hibás válaszok áttekintése
              </h2>

              <article
                v-for="question in incorrectQuestions"
                :key="question.id"
                class="rounded-lg border border-amber-200 bg-amber-50 p-4"
              >
                <div class="mb-2 flex flex-wrap gap-2">
                  <Tag
                    :value="getTopicName(question.topicId)"
                    severity="info"
                  />
                  <Tag
                    :value="
                      hasAnswer(question) ? 'Hibás válasz' : 'Hiányos válasz'
                    "
                    severity="warn"
                  />
                </div>

                <h3 class="font-semibold text-slate-950">
                  {{ question.prompt }}
                </h3>

                <p class="mt-2 text-sm text-slate-700">
                  <strong>Helyes válasz:</strong>
                  {{ getCorrectAnswerText(question) }}
                </p>

                <p
                  v-if="question.explanation"
                  class="mt-2 text-sm text-slate-600"
                >
                  {{ question.explanation }}
                </p>
              </article>
            </div>

            <Message v-else severity="success" :closable="false">
              Minden válasz helyes lett.
            </Message>

            <Button
              label="Új gyakorlási kör"
              icon="pi pi-refresh"
              class="self-start"
              @click="restartPractice"
            />
          </div>
        </template>
      </Card>
    </section>
  </main>
</template>
