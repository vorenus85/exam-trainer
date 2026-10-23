<script setup lang="ts">
import { computed, useId } from "vue";
import Checkbox from "primevue/checkbox";
import RadioButton from "primevue/radiobutton";
import type { ChoiceQuestion, QuestionAnswer } from "../../types/question";

const props = defineProps<{ question: ChoiceQuestion; optionOrder?: string[] }>();
const answer = defineModel<Extract<QuestionAnswer, { type: "single_choice" | "multiple_choice" }>>({ required: true });
const inputId = useId();
const options = computed(() => props.optionOrder
  ? props.optionOrder.flatMap((id) => props.question.options.filter((option) => option.id === id))
  : props.question.options);

function selectSingle(value: string) {
  answer.value = { type: "single_choice", selectedOptionId: value };
}
function selectMultiple(values: string[]) {
  answer.value = { type: "multiple_choice", selectedOptionIds: [...values] };
}
</script>

<template>
  <div class="grid gap-3">
    <label v-for="(option, index) in options" :key="option.id"
      class="flex cursor-pointer items-center gap-3 rounded-md border border-slate-200 p-3 hover:border-blue-300">
      <RadioButton v-if="answer.type === 'single_choice'" :model-value="answer.selectedOptionId"
        :input-id="`${inputId}-${index}`" :value="option.id" :name="inputId" @update:model-value="selectSingle" />
      <Checkbox v-else :model-value="answer.selectedOptionIds" :input-id="`${inputId}-${index}`"
        :value="option.id" @update:model-value="selectMultiple" />
      <span>{{ option.text }}</span>
    </label>
  </div>
</template>
