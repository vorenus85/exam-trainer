<script setup lang="ts">
import { computed, useId } from "vue";
import Select from "primevue/select";
import type { GroupingQuestion, QuestionAnswer } from "../../types/question";

const props = defineProps<{ question: GroupingQuestion; optionOrder?: string[] }>();
const answer = defineModel<Extract<QuestionAnswer, { type: "grouping" }>>({ required: true });
const inputId = useId();
const items = computed(() => props.optionOrder
  ? props.optionOrder.flatMap((id) => props.question.items.filter((item) => item.id === id))
  : props.question.items);
function select(itemId: string, value: string | null) {
  answer.value = { type: "grouping", groups: { ...answer.value.groups, [itemId]: value } };
}
</script>

<template>
  <div class="grid gap-4">
    <p class="text-sm text-slate-600">Válaszd ki minden elem csoportját! Egy csoportba több elem is kerülhet.</p>
    <div v-for="(item, index) in items" :key="item.id"
      class="flex flex-col gap-3 rounded-md border border-slate-200 p-3 sm:flex-row sm:items-center sm:justify-between">
      <label :for="`${inputId}-${index}`" class="flex-1 font-medium">{{ index + 1 }}. {{ item.text }}</label>
      <Select :model-value="answer.groups[item.id]" :input-id="`${inputId}-${index}`" :options="question.groups"
        option-label="text" option-value="id" placeholder="Válassz csoportot" show-clear class="w-full sm:w-64"
        @update:model-value="select(item.id, $event)" />
    </div>
  </div>
</template>
