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
import type { ChoiceQuestion, TrueFalseQuestion } from "./types/question";

const MODULE_QUESTIONS_PER_PRACTICE = 10;
const PRACTICE_TIME_LIMIT_SECONDS = 30 * 60;
const EXAM_QUESTIONS_PER_TOPIC: Record<string, number> = {
  testmukodes: 9,
  vitalis: 6,
  gyogyszerelesi_ismeretek: 3,
  apolastan: 9,
  tarsadalomtudomanyi_ismeretek: 3,
};
type PracticeMode = "exam" | "module";
type PracticeQuestion = ChoiceQuestion | TrueFalseQuestion;

const practiceModes = [
  { id: "exam" as const, name: "Vizsga gyakorlása" },
  { id: "module" as const, name: "Egy modul gyakorlása" },
];

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

const questions = computed<PracticeQuestion[]>(() => {
  const availableQuestions = sampleQuestions.filter(
    (question): question is PracticeQuestion =>
      question.type === "single_choice" ||
      question.type === "multiple_choice" ||
      question.type === "true_false",
  );

  if (shuffledQuestionIds.value.length === 0) {
    if (selectedMode.value === "exam") return availableQuestions;

    return selectedTopicId.value
      ? availableQuestions.filter(
          (question) => question.topicId === selectedTopicId.value,
        )
      : [];
  }

  const questionsById = new Map(
    availableQuestions.map((question) => [question.id, question]),
  );

  return shuffledQuestionIds.value
    .map((questionId) => questionsById.get(questionId))
    .filter((question): question is PracticeQuestion => question !== undefined);
});

const currentQuestion = computed(() => questions.value[currentIndex.value]);

const answeredCount = computed(() => {
  return questions.value.filter((question) => hasAnswer(question)).length;
});

const progressPercent = computed(() => {
  return Math.round((answeredCount.value / questions.value.length) * 100);
});

const formattedTimeRemaining = computed(() => {
  const minutes = Math.floor(timeRemaining.value / 60);
  const seconds = timeRemaining.value % 60;

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
});

const correctCount = computed(() => {
  return questions.value.filter((question) => {
    return areAnswersCorrect(question);
  }).length;
});

const incorrectQuestions = computed(() => {
  return questions.value.filter((question) => {
    return !areAnswersCorrect(question);
  });
});

const scorePercent = computed(() => {
  if (questions.value.length === 0) return 0;

  return Math.round((correctCount.value / questions.value.length) * 100);
});

const grade = computed(() => {
  if (scorePercent.value >= 88) return "jeles";
  if (scorePercent.value >= 75) return "jó";
  if (scorePercent.value >= 62) return "közepes";
  if (scorePercent.value >= 51) return "elégséges";
  return "elégtelen";
});

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

  const selectedQuestions =
    selectedMode.value === "exam"
      ? shuffle(
          Object.entries(EXAM_QUESTIONS_PER_TOPIC).flatMap(
            ([topicId, questionCount]) =>
              shuffle(
                questions.value.filter(
                  (question) => question.topicId === topicId,
                ),
              ).slice(0, questionCount),
          ),
        )
      : shuffle(questions.value).slice(0, MODULE_QUESTIONS_PER_PRACTICE);
  const questionIds = selectedQuestions.map((question) => question.id);

  shuffledQuestionIds.value = questionIds;
  shuffledOptionIds.value = Object.fromEntries(
    selectedQuestions
      .filter((question): question is ChoiceQuestion => "options" in question)
      .map((question) => [
        question.id,
        shuffle(question.options.map((option) => option.id)),
      ]),
  );
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

function shuffle<T>(items: T[]) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
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

function hasAnswer(question: PracticeQuestion) {
  if (question.type === "true_false") {
    return question.statements.every(
      (statement) =>
        typeof answers[getTrueFalseAnswerKey(question, statement.id)] ===
        "boolean",
    );
  }

  const answer = answers[question.id];
  if (typeof answer === "boolean") return true;

  return Array.isArray(answer) ? answer.length > 0 : Boolean(answer);
}

function getSelectedOptionIds(question: ChoiceQuestion) {
  const answer = answers[question.id];
  return Array.isArray(answer) ? answer : answer ? [answer] : [];
}

function areAnswersCorrect(question: PracticeQuestion) {
  if (question.type === "true_false") {
    return question.statements.every(
      (statement) =>
        answers[getTrueFalseAnswerKey(question, statement.id)] ===
        statement.correct,
    );
  }

  const selected = getSelectedOptionIds(question).sort();
  const correct = [...question.correctOptionIds].sort();

  return (
    selected.length === correct.length &&
    selected.every((optionId, index) => optionId === correct[index])
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
  shuffledQuestionIds.value = [];
  shuffledOptionIds.value = {};
  timeRemaining.value = PRACTICE_TIME_LIMIT_SECONDS;
}

onUnmounted(stopTimer);

function getCorrectAnswerText(question: PracticeQuestion) {
  if (question.type === "true_false") {
    return question.statements
      .map(
        (statement) =>
          `${statement.text} — ${statement.correct ? "Igaz" : "Hamis"}`,
      )
      .join("; ");
  }

  return question.options
    .filter((option) => question.correctOptionIds.includes(option.id))
    .map((option) => option.text)
    .join(", ");
}

function getTrueFalseAnswerKey(
  question: TrueFalseQuestion,
  statementId: string,
) {
  return `${question.id}:${statementId}`;
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
              Single choice gyakorlás
            </h1>

            <p class="mt-2 max-w-2xl text-slate-600">
              Első lépésben csak egy helyes válaszos kérdéseket kezelünk.
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

            <p v-if="selectedMode === 'exam'" class="text-sm text-slate-500">
              A vizsgakör minden témakörből egy kérdést választ.
            </p>

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
              v-if="currentQuestion.type !== 'true_false'"
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

            <div v-else class="grid gap-3">
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
                      answers[question.id] ? 'Hibás válasz' : 'Hiányos válasz'
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
