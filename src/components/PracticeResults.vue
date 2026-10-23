<script setup lang="ts">
import { computed } from "vue";
import Button from "primevue/button";
import Card from "primevue/card";
import Message from "primevue/message";
import Tag from "primevue/tag";
import type { ExamQuestion, Topic } from "../types/question";
import type { AnswerStore } from "../domain/answers";
import type { PracticeMode } from "../config/practice";
import { GRADING_SCALE } from "../config/practice";
import { getGradeRanges } from "../domain/grading";
import type { PracticeResult } from "../domain/grading";
import { hasAnswer as evaluateHasAnswer } from "../domain/questionEvaluation";
import { getCorrectAnswerText as formatCorrectAnswer } from "../domain/answerFormatting";

const props = defineProps<{
  mode: PracticeMode | null; result: PracticeResult; totalCount: number; timeRemaining: number;
  answers: AnswerStore; optionOrders: Record<string, string[]>; topics: Topic[];
}>();
const emit = defineEmits<{ restart: [] }>();
const gradeClass = computed(() => GRADING_SCALE.find((grade) => grade.label === props.result.grade)?.className);
const gradeRanges = computed(() => getGradeRanges(props.totalCount));
function getTopicName(id: string) { return props.topics.find((topic) => topic.id === id)?.name ?? "Ismeretlen témakör"; }
function hasAnswer(question: ExamQuestion) { return evaluateHasAnswer(question, props.answers); }
function getCorrectAnswerText(question: ExamQuestion) { return formatCorrectAnswer(question, props.optionOrders[question.id]); }
</script>

<template>
  <Card>
    <template #content>
      <div class="flex flex-col gap-5">
        <div
          v-if="mode === 'exam'"
          class="rounded-lg border p-4"
          :class="gradeClass"
        >
          <h2 class="text-xl font-bold">Értékelés</h2>
          <p class="mt-2 text-lg font-semibold text-slate-900">
            Eredmény: {{ result.scorePercent }}% — {{ result.grade }}
          </p>

          <ul class="mt-3 grid gap-1 text-sm text-slate-700">
            <li v-for="range in gradeRanges" :key="range.label">
              {{ range.maxPercent }}–{{ range.minPercent }}% — {{ range.label }}
              <span v-if="range.minPoints !== null">({{ range.maxPoints }}–{{ range.minPoints }} pont)</span>
            </li>
          </ul>
        </div>
        <template v-if="mode === 'module'">
          <h2 class="text-xl font-bold">Értékelés</h2>
          <Message
            :severity="
              result.correctCount === totalCount ? 'success' : 'warn'
            "
            :closable="false"
          >
            {{ result.correctCount }} / {{ totalCount }} helyes válasz
          </Message>
        </template>

        <Message
          v-if="timeRemaining === 0"
          severity="warn"
          :closable="false"
        >
          Az idő lejárt, a meg nem válaszolt kérdések hiányosnak számítanak.
        </Message>

        <div v-if="result.incorrectQuestions.length" class="grid gap-4">
          <h2 class="text-xl font-bold text-slate-950">
            Hibás válaszok áttekintése
          </h2>

          <article
            v-for="question in result.incorrectQuestions"
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
          @click="emit('restart')"
        />
      </div>
    </template>
  </Card>
</template>
