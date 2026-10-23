import { computed, ref, shallowRef, watch } from "vue";
import type { ExamQuestion, QuestionAnswer, QuestionType } from "../types/question.ts";
import { PRACTICE_TIME_LIMIT_SECONDS } from "../config/practice.ts";
import type { PracticeMode, PracticeSettings } from "../config/practice.ts";
import { getAllQuestionTypes } from "../config/questionTypes.ts";
import { createAnswers } from "../domain/answers.ts";
import type { Answers } from "../domain/answers.ts";
import { calculatePercent, getPracticeResult } from "../domain/grading.ts";
import { hasAnswer } from "../domain/questionEvaluation.ts";
import { createOptionOrders, filterQuestions, selectQuestions } from "../domain/questionSelection.ts";
import { useCountdown } from "./useCountdown.ts";

export function usePracticeSession(questionBank: readonly ExamQuestion[], random: () => number = Math.random) {
  const stage = ref<"setup" | "practice" | "results">("setup");
  const selectedMode = ref<PracticeMode | null>(null);
  const selectedTopicId = ref<string | null>(null);
  const selectedQuestionTypes = ref<QuestionType[]>(getAllQuestionTypes());
  const activeMode = ref<PracticeMode | null>(null);
  const questions = shallowRef<ExamQuestion[]>([]);
  const currentIndex = ref(0);
  const answers = ref<Answers>({});
  const optionOrders = ref<Record<string, string[]>>({});
  const countdown = useCountdown(PRACTICE_TIME_LIMIT_SECONDS, finishPractice);

  const settings = computed<PracticeSettings>(() => ({
    mode: selectedMode.value, topicId: selectedTopicId.value, questionTypes: selectedQuestionTypes.value,
  }));
  const availableCount = computed(() => filterQuestions(questionBank, settings.value).length);
  const canStart = computed(() => stage.value === "setup" && availableCount.value > 0);
  const currentQuestion = computed(() => questions.value[currentIndex.value]);
  const currentAnswer = computed(() => currentQuestion.value ? answers.value[currentQuestion.value.id] : undefined);
  const result = computed(() => getPracticeResult(questions.value, answers.value));
  const progressPercent = computed(() => calculatePercent(result.value.answeredCount, questions.value.length));

  watch(selectedMode, (mode) => {
    if (mode === "exam") selectedTopicId.value = null;
  }, { flush: "sync" });

  function startPractice() {
    if (!canStart.value) return;
    const selected = selectQuestions(questionBank, settings.value, random);
    if (selected.length === 0) return;
    answers.value = createAnswers(selected);
    questions.value = selected;
    optionOrders.value = createOptionOrders(selected, random);
    activeMode.value = selectedMode.value;
    currentIndex.value = 0;
    stage.value = "practice";
    countdown.start();
  }

  function updateAnswer(answer: QuestionAnswer) {
    const question = currentQuestion.value;
    if (stage.value === "practice" && question && question.type === answer.type) {
      answers.value[question.id] = answer;
    }
  }

  function previousQuestion() {
    if (stage.value === "practice" && currentIndex.value > 0) currentIndex.value -= 1;
  }

  function nextQuestion() {
    const question = currentQuestion.value;
    if (stage.value !== "practice" || !question || !hasAnswer(question, answers.value)) return;
    if (currentIndex.value < questions.value.length - 1) currentIndex.value += 1;
    else finishPractice();
  }

  function finishPractice() {
    if (stage.value !== "practice") return;
    countdown.stop();
    stage.value = "results";
  }

  function restartPractice() {
    countdown.reset();
    answers.value = {};
    questions.value = [];
    optionOrders.value = {};
    currentIndex.value = 0;
    activeMode.value = null;
    selectedMode.value = null;
    selectedTopicId.value = null;
    selectedQuestionTypes.value = getAllQuestionTypes();
    stage.value = "setup";
  }

  return {
    stage, selectedMode, selectedTopicId, selectedQuestionTypes, activeMode, questions, currentIndex,
    answers, currentQuestion, currentAnswer, optionOrders, availableCount, canStart, result, progressPercent,
    timeRemaining: countdown.timeRemaining, formattedTimeRemaining: countdown.formattedTimeRemaining,
    startPractice, updateAnswer, previousQuestion, nextQuestion, restartPractice,
  };
}
