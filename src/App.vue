<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import Button from "primevue/button";
import Card from "primevue/card";
import Message from "primevue/message";
import ProgressBar from "primevue/progressbar";
import RadioButton from "primevue/radiobutton";
import Tag from "primevue/tag";
import { sampleQuestions, topics } from "./data/sampleQuestions";

const currentIndex = ref(0);
const isFinished = ref(false);

const answers = reactive<Record<string, string | null>>({});

const questions = sampleQuestions;

const currentQuestion = computed(() => questions[currentIndex.value]);

const answeredCount = computed(() => {
  return questions.filter((question) => answers[question.id]).length;
});

const progressPercent = computed(() => {
  return Math.round((answeredCount.value / questions.length) * 100);
});

const correctCount = computed(() => {
  return questions.filter((question) => {
    return answers[question.id] === question.correctOptionIds[0];
  }).length;
});

const incorrectQuestions = computed(() => {
  return questions.filter((question) => {
    return answers[question.id] !== question.correctOptionIds[0];
  });
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
  if (currentIndex.value < questions.length - 1) {
    currentIndex.value += 1;
    return;
  }

  isFinished.value = true;
}

function restartPractice() {
  Object.keys(answers).forEach((questionId) => {
    delete answers[questionId];
  });

  currentIndex.value = 0;
  isFinished.value = false;
}

function getCorrectAnswerText(question: (typeof questions)[number]) {
  const correctOptionId = question.correctOptionIds[0];
  return (
    question.options.find((option) => option.id === correctOptionId)?.text ?? ""
  );
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
            label="Újrakezdés"
            icon="pi pi-refresh"
            severity="secondary"
            outlined
            @click="restartPractice"
          />
        </div>

        <div class="mt-5 grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
          <ProgressBar :value="progressPercent" class="h-3" />

          <span class="text-sm font-medium text-slate-600">
            {{ answeredCount }} / {{ questions.length }} megválaszolva
          </span>
        </div>
      </header>

      <Card v-if="!isFinished">
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
              <Tag value="Csak egy helyes" severity="secondary" />
            </div>
          </div>
        </template>

        <template #content>
          <div class="flex flex-col gap-5">
            <p class="text-lg font-semibold leading-relaxed text-slate-900">
              {{ currentQuestion.prompt }}
            </p>

            <div class="grid gap-3">
              <label
                v-for="option in currentQuestion.options"
                :key="option.id"
                class="flex cursor-pointer items-center gap-3 rounded-md border border-slate-200 p-3 hover:border-blue-300"
              >
                <RadioButton
                  v-model="answers[currentQuestion.id]"
                  :input-id="`${currentQuestion.id}-${option.id}`"
                  :value="option.id"
                  name="single-choice"
                />

                <span>{{ option.text }}</span>
              </label>
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
                :disabled="!answers[currentQuestion.id]"
                @click="goToNextQuestion"
              />
            </div>
          </div>
        </template>
      </Card>

      <Card v-else>
        <template #title> Eredmény </template>

        <template #content>
          <div class="flex flex-col gap-5">
            <Message
              :severity="correctCount === questions.length ? 'success' : 'warn'"
              :closable="false"
            >
              {{ correctCount }} / {{ questions.length }} helyes válasz
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
                  <Tag value="Csak egy helyes" severity="warn" />
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
