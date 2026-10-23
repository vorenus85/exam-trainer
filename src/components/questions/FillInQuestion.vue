<script setup lang="ts">
import { useId } from "vue";
import Select from "primevue/select";
import type { FillInQuestion, QuestionAnswer } from "../../types/question";

defineProps<{ question: FillInQuestion }>();
const answer = defineModel<Extract<QuestionAnswer, { type: "fill_in" }>>({ required: true });
const inputId = useId();
function select(statementId: string, blankId: string, value: string | null) {
  answer.value = { type: "fill_in", values: {
    ...answer.value.values,
    [statementId]: { ...answer.value.values[statementId], [blankId]: value },
  } };
}
</script>

<template>
  <div class="grid gap-4">
    <p class="text-sm text-slate-600">Egészítsd ki az összes mondatot a megfelelő válaszok kiválasztásával!</p>
    <div v-for="(statement, statementIndex) in question.statements" :key="statement.id"
      class="rounded-md border border-slate-200 p-4 leading-loose">
      <template v-for="(part, partIndex) in statement.parts" :key="typeof part === 'string' ? `text-${partIndex}` : part.id">
        <span v-if="typeof part === 'string'" class="whitespace-pre-wrap">{{ part }}</span>
        <Select v-else :model-value="answer.values[statement.id]?.[part.id]" :input-id="`${inputId}-${statementIndex}-${partIndex}`"
          :aria-label="`${statementIndex + 1}. állítás: ${part.label}`" :options="part.options" option-label="text" option-value="id"
          placeholder="Válassz…" show-clear class="mx-1 inline-flex max-w-full align-middle"
          @update:model-value="select(statement.id, part.id, $event)" />
      </template>
    </div>
  </div>
</template>
