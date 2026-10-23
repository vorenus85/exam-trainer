<script setup lang="ts">
import { computed } from "vue";
import Button from "primevue/button";
import Card from "primevue/card";
import Tag from "primevue/tag";
import type { ExamQuestion, QuestionAnswer } from "../types/question";
import { QUESTION_TYPE_LABELS } from "../config/questionTypes";
import { hasAnswer } from "../domain/questionEvaluation";
import ChoiceQuestion from "./questions/ChoiceQuestion.vue";
import TrueFalseQuestion from "./questions/TrueFalseQuestion.vue";
import MatchingQuestion from "./questions/MatchingQuestion.vue";
import GroupingQuestion from "./questions/GroupingQuestion.vue";
import OrderingQuestion from "./questions/OrderingQuestion.vue";
import FillInQuestion from "./questions/FillInQuestion.vue";

const props = defineProps<{ question: ExamQuestion; index: number; totalCount: number; topicName: string; optionOrder?: string[] }>();
const answer = defineModel<QuestionAnswer>({ required: true });
const emit = defineEmits<{ previous: []; next: [] }>();
const complete = computed(() => hasAnswer(props.question, { [props.question.id]: answer.value }));
</script>

<template>
  <Card>
    <template #title>
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span>{{ index + 1 }}. kérdés</span>
        <div class="flex flex-wrap gap-2">
          <Tag :value="topicName" severity="info" />
          <Tag :value="QUESTION_TYPE_LABELS[question.type]" severity="secondary" />
        </div>
      </div>
    </template>
    <template #content>
      <div class="flex flex-col gap-5">
        <p class="text-lg font-semibold leading-relaxed text-slate-900">{{ question.prompt }}</p>
        <ChoiceQuestion v-if="(question.type === 'single_choice' || question.type === 'multiple_choice') && (answer.type === 'single_choice' || answer.type === 'multiple_choice')"
          v-model="answer" :question="question" :option-order="optionOrder" />
        <TrueFalseQuestion v-else-if="question.type === 'true_false' && answer.type === 'true_false'" v-model="answer" :question="question" />
        <MatchingQuestion v-else-if="question.type === 'matching' && answer.type === 'matching'" v-model="answer" :question="question" :option-order="optionOrder" />
        <GroupingQuestion v-else-if="question.type === 'grouping' && answer.type === 'grouping'" v-model="answer" :question="question" :option-order="optionOrder" />
        <OrderingQuestion v-else-if="question.type === 'ordering' && answer.type === 'ordering'" v-model="answer" :question="question" :option-order="optionOrder" />
        <FillInQuestion v-else-if="question.type === 'fill_in' && answer.type === 'fill_in'" v-model="answer" :question="question" />
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Button label="Előző" severity="secondary" outlined :disabled="index === 0" @click="emit('previous')" />
          <Button :label="index === totalCount - 1 ? 'Eredmény megnézése' : 'Következő'" icon="pi pi-arrow-right" icon-pos="right"
            :disabled="!complete" @click="emit('next')" />
        </div>
      </div>
    </template>
  </Card>
</template>
