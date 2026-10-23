<script setup lang="ts">
import { computed } from "vue";
import Button from "primevue/button";
import type { OrderingQuestion, QuestionAnswer } from "../../types/question";

const props = defineProps<{ question: OrderingQuestion; optionOrder?: string[] }>();
const answer = defineModel<Extract<QuestionAnswer, { type: "ordering" }>>({ required: true });
const items = computed(() => {
  const order = answer.value.orderIds.length > 0 ? answer.value.orderIds : props.optionOrder;
  return order ? order.flatMap((id) => props.question.items.filter((item) => item.id === id)) : props.question.items;
});
function confirm() {
  answer.value = { type: "ordering", orderIds: items.value.map((item) => item.id) };
}
function move(index: number, direction: -1 | 1) {
  const order = items.value.map((item) => item.id);
  const target = index + direction;
  if (index < 0 || index >= order.length || target < 0 || target >= order.length) return;
  [order[index], order[target]] = [order[target]!, order[index]!];
  answer.value = { type: "ordering", orderIds: order };
}
</script>

<template>
  <div class="grid gap-4">
    <p class="text-sm text-slate-600">A nyilakkal mozgasd az elemeket a kért sorrendbe! Ha a kezdeti sorrendet szeretnéd megtartani, hagyd jóvá.</p>
    <ol class="grid gap-3" aria-label="Az elemek jelenlegi sorrendje">
      <li v-for="(item, index) in items" :key="item.id" class="flex items-center gap-3 rounded-md border border-slate-200 p-3">
        <span class="font-semibold tabular-nums">{{ index + 1 }}.</span><span class="flex-1">{{ item.text }}</span>
        <Button icon="pi pi-arrow-up" severity="secondary" outlined :aria-label="`${item.text} feljebb mozgatása`"
          :disabled="index === 0" @click="move(index, -1)" />
        <Button icon="pi pi-arrow-down" severity="secondary" outlined :aria-label="`${item.text} lejjebb mozgatása`"
          :disabled="index === items.length - 1" @click="move(index, 1)" />
      </li>
    </ol>
    <Button v-if="answer.orderIds.length === 0" label="Sorrend jóváhagyása" severity="secondary" outlined class="self-start" @click="confirm" />
  </div>
</template>
