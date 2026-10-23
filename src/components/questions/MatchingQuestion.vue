<script setup lang="ts">
import { computed, useId } from "vue";
import Select from "primevue/select";
import type { MatchingQuestion, QuestionAnswer } from "../../types/question";

const props = defineProps<{ question: MatchingQuestion; optionOrder?: string[] }>();
const answer = defineModel<Extract<QuestionAnswer, { type: "matching" }>>({ required: true });
const inputId = useId();
const options = computed(() => (props.optionOrder ?? props.question.pairs.map((pair) => pair.id)).map((id, index) => ({
  id, label: String.fromCharCode(65 + index), text: props.question.pairs.find((pair) => pair.id === id)!.right,
})));
function getOptions(pairId: string) {
  return options.value.map((option) => ({ ...option, disabled: props.question.pairs.some((pair) =>
    pair.id !== pairId && answer.value.pairs[pair.id] === option.id,
  ) }));
}
function select(pairId: string, value: string | null) {
  answer.value = { type: "matching", pairs: { ...answer.value.pairs, [pairId]: value } };
}
</script>

<template>
  <div class="grid gap-4">
    <p class="text-sm text-slate-600">Párosítsd a számozott elemeket a betűjelű válaszokkal! Minden betűt egyszer használhatsz fel.</p>
    <div class="grid gap-3 rounded-md border border-slate-200 bg-slate-50 p-4">
      <p v-for="option in options" :key="option.id" class="flex gap-3"><strong>{{ option.label }}:</strong><span>{{ option.text }}</span></p>
    </div>
    <div v-for="(pair, index) in question.pairs" :key="pair.id"
      class="flex flex-wrap items-center justify-between gap-3 rounded-md border border-slate-200 p-3">
      <label :for="`${inputId}-${index}`" class="flex-1 font-medium">{{ index + 1 }}. {{ pair.left }}</label>
      <Select :model-value="answer.pairs[pair.id]" :input-id="`${inputId}-${index}`" :options="getOptions(pair.id)"
        option-label="label" option-value="id" option-disabled="disabled" placeholder="Válassz betűt" show-clear class="w-44"
        @update:model-value="select(pair.id, $event)" />
    </div>
  </div>
</template>
