<script setup lang="ts">
import { computed, useId } from "vue";
import Button from "primevue/button";
import Card from "primevue/card";
import Checkbox from "primevue/checkbox";
import Message from "primevue/message";
import Select from "primevue/select";
import type { QuestionType, Topic } from "../types/question";
import { moduleQuestionCounts, practiceModes } from "../config/practice";
import type { PracticeMode } from "../config/practice";
import { getAllQuestionTypes, questionTypes } from "../config/questionTypes";

defineProps<{ topics: Topic[]; availableCount: number; canStart: boolean }>();
const selectedMode = defineModel<PracticeMode | null>("selectedMode", { required: true });
const selectedTopicId = defineModel<string | null>("selectedTopicId", { required: true });
const selectedQuestionTypes = defineModel<QuestionType[]>("selectedQuestionTypes", { required: true });
const selectedQuestionCount = defineModel<number>("selectedQuestionCount", { required: true });
const questionCountInputId = useId();
const emit = defineEmits<{ start: [] }>();
const allQuestionTypesSelected = computed({
  get: () => getAllQuestionTypes().every((type) => selectedQuestionTypes.value.includes(type)),
  set: (selected: boolean) => { selectedQuestionTypes.value = selected ? getAllQuestionTypes() : []; },
});
</script>

<template>
  <Card>
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

        <div v-if="selectedMode === 'module'" class="flex flex-col gap-2">
          <label :for="questionCountInputId" class="font-semibold">Kérdések száma</label>
          <Select v-model="selectedQuestionCount" :input-id="questionCountInputId" :options="moduleQuestionCounts"
            option-label="label" option-value="value" class="w-full" />
          <p v-if="selectedTopicId && availableCount > 0" class="text-sm text-slate-500">
            A teszt {{ Math.min(selectedQuestionCount, availableCount) }} kérdést tartalmaz majd
            ({{ availableCount }} kérdés érhető el a kiválasztott szűréssel).
          </p>
        </div>

        <fieldset class="rounded-md border border-slate-200 p-4">
          <legend class="px-1 font-semibold">Kérdésfajták</legend>
          <label class="mb-3 flex cursor-pointer items-center gap-2">
            <Checkbox v-model="allQuestionTypesSelected" input-id="question-types-all" binary />
            <span>Mind (nincs szűrés)</span>
          </label>
          <div class="grid gap-3 sm:grid-cols-2">
            <label v-for="type in questionTypes" :key="type.id" class="flex cursor-pointer items-center gap-2">
              <Checkbox v-model="selectedQuestionTypes" :input-id="`question-type-${type.id}`" :value="type.id" />
              <span>{{ type.name }}</span>
            </label>
          </div>
        </fieldset>

        <p v-if="selectedMode === 'exam'" class="text-sm text-slate-500">
          A vizsgakör témakörönként a beállított keretig választ a kijelölt kérdésfajtákból.
        </p>

        <Message v-if="selectedMode && (selectedMode === 'exam' || selectedTopicId) && availableCount === 0"
          severity="warn" :closable="false">
          A kiválasztott beállításokkal nincs elérhető kérdés. Válassz más kérdésfajtát vagy modult!
        </Message>

        <Button
          label="Gyakorlás indítása"
          icon="pi pi-play"
          class="self-start"
          :disabled="!canStart"
          @click="emit('start')"
        />
      </div>
    </template>
  </Card>
</template>
