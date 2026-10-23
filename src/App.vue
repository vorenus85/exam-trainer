<script setup lang="ts">
import PracticeHeader from "./components/PracticeHeader.vue";
import PracticeSetup from "./components/PracticeSetup.vue";
import QuestionCard from "./components/QuestionCard.vue";
import PracticeResults from "./components/PracticeResults.vue";
import { sampleQuestions, topics } from "./data/sampleQuestions";
import { usePracticeSession } from "./composables/usePracticeSession";

const {
  stage, selectedMode, selectedTopicId, selectedQuestionTypes, activeMode, questions, currentIndex,
  answers, currentQuestion, currentAnswer, optionOrders, availableCount, canStart, result, progressPercent,
  timeRemaining, formattedTimeRemaining, startPractice, updateAnswer, previousQuestion, nextQuestion, restartPractice,
} = usePracticeSession(sampleQuestions);
</script>

<template>
  <main class="min-h-screen bg-slate-50 px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
    <section class="mx-auto flex max-w-4xl flex-col gap-6">
      <PracticeHeader :is-started="stage !== 'setup'" :progress-percent="progressPercent" :time-remaining="timeRemaining"
        :formatted-time-remaining="formattedTimeRemaining" :answered-count="result.answeredCount" :total-count="questions.length"
        @restart="restartPractice" />
      <PracticeSetup v-if="stage === 'setup'" v-model:selected-mode="selectedMode" v-model:selected-topic-id="selectedTopicId"
        v-model:selected-question-types="selectedQuestionTypes" :topics="topics" :available-count="availableCount" :can-start="canStart"
        @start="startPractice" />
      <QuestionCard v-else-if="stage === 'practice' && currentQuestion && currentAnswer" :key="currentQuestion.id"
        :question="currentQuestion" :model-value="currentAnswer" :index="currentIndex" :total-count="questions.length"
        :topic-name="topics.find((topic) => topic.id === currentQuestion.topicId)?.name ?? ''"
        :option-order="optionOrders[currentQuestion.id]" @update:model-value="updateAnswer"
        @previous="previousQuestion" @next="nextQuestion" />
      <PracticeResults v-else-if="stage === 'results'" :mode="activeMode" :result="result" :total-count="questions.length"
        :time-remaining="timeRemaining" :answers="answers" :option-orders="optionOrders" :topics="topics" @restart="restartPractice" />
    </section>
  </main>
</template>
