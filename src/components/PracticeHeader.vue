<script setup lang="ts">
import Button from "primevue/button";
import ProgressBar from "primevue/progressbar";
defineProps<{
  isStarted: boolean;
  progressPercent: number;
  timeRemaining: number;
  formattedTimeRemaining: string;
  answeredCount: number;
  totalCount: number;
}>();
const emit = defineEmits<{ restart: [] }>();
</script>

<template>
  <header class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
    <div
      class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between"
    >
      <div>
        <p class="text-sm font-semibold uppercase tracking-wide text-blue-700">
          Vizsga Tréner
        </p>

        <h1 class="mt-1 text-3xl font-bold text-slate-950">
          Vizsgakérdések gyakorlása
        </h1>

        <p class="mt-2 max-w-2xl text-slate-600">
          Az applikáció segítségével gyakorolhatod a vizsgakérdéseket, és
          felmérheted a tudásodat. A gyakorlás során a kérdések véletlenszerű
          sorrendben jelennek meg, és a válaszok rögzítésre kerülnek. A
          gyakorlás végén részletes eredményeket kapsz, amelyek segítenek az
          erősségeid és gyengeségeid azonosításában.
        </p>
      </div>

      <Button
        v-if="isStarted"
        label="Újrakezdés"
        icon="pi pi-refresh"
        severity="secondary"
        outlined
        @click="emit('restart')"
      />
    </div>

    <div
      v-if="isStarted"
      class="mt-5 grid gap-3 md:grid-cols-[1fr_auto_auto] md:items-center"
    >
      <ProgressBar :value="progressPercent" class="h-3" />

      <span
        class="text-sm font-semibold tabular-nums"
        :class="timeRemaining <= 10 ? 'text-red-600' : 'text-slate-600'"
        aria-live="polite"
      >
        Idő: {{ formattedTimeRemaining }}
      </span>

      <span class="text-sm font-medium text-slate-600">
        {{ answeredCount }} / {{ totalCount }} megválaszolva
      </span>
    </div>
  </header>
</template>
