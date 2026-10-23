<script setup lang="ts">
import { useId } from "vue";
import RadioButton from "primevue/radiobutton";
import type { QuestionAnswer, TrueFalseQuestion } from "../../types/question";

defineProps<{ question: TrueFalseQuestion }>();
const answer = defineModel<Extract<QuestionAnswer, { type: "true_false" }>>({ required: true });
const inputId = useId();
function select(statementId: string, value: boolean) {
  answer.value = { type: "true_false", statements: { ...answer.value.statements, [statementId]: value } };
}
</script>

<template>
  <div class="grid gap-3">
    <div v-for="(statement, index) in question.statements" :key="statement.id" class="rounded-md border border-slate-200 p-3">
      <p class="mb-3 font-medium text-slate-900">{{ statement.text }}</p>
      <div class="flex flex-wrap gap-4">
        <label v-for="value in [true, false]" :key="String(value)" class="flex cursor-pointer items-center gap-2">
          <RadioButton :model-value="answer.statements[statement.id]" :input-id="`${inputId}-${index}-${value}`"
            :value="value" :name="`${inputId}-${index}`" @update:model-value="select(statement.id, $event)" />
          <span>{{ value ? "Igaz" : "Hamis" }}</span>
        </label>
      </div>
    </div>
  </div>
</template>
