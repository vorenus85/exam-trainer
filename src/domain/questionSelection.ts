import type { ExamQuestion } from "../types/question.ts";
import { shuffle } from "../utils/shuffle.ts";

import { MODULE_QUESTIONS_PER_PRACTICE, EXAM_QUESTIONS_PER_TOPIC } from "../config/practice.ts";
import type { PracticeSettings } from "../config/practice.ts";
export { MODULE_QUESTIONS_PER_PRACTICE, EXAM_QUESTIONS_PER_TOPIC } from "../config/practice.ts";
export type { PracticeMode, PracticeSettings } from "../config/practice.ts";

export function filterQuestions(questions: readonly ExamQuestion[], settings: PracticeSettings): ExamQuestion[] {
  if (!settings.mode || (settings.mode === "module" && !settings.topicId)) return [];
  return questions.filter((question) =>
    (settings.questionTypes === undefined || settings.questionTypes.includes(question.type))
    && (settings.mode === "exam" || question.topicId === settings.topicId),
  );
}

export function selectQuestions(
  questions: readonly ExamQuestion[],
  settings: PracticeSettings,
  random: () => number = Math.random,
): ExamQuestion[] {
  const available = filterQuestions(questions, settings);
  if (settings.mode === "module") return shuffle(available, random).slice(0, MODULE_QUESTIONS_PER_PRACTICE);
  return shuffle(Object.entries(EXAM_QUESTIONS_PER_TOPIC).flatMap(([topicId, count]) =>
    shuffle(available.filter((question) => question.topicId === topicId), random).slice(0, count),
  ), random);
}

export function createOptionOrders(questions: readonly ExamQuestion[], random: () => number = Math.random) {
  const orders: Record<string, string[]> = {};
  for (const question of questions) {
    switch (question.type) {
      case "single_choice":
      case "multiple_choice":
        orders[question.id] = shuffle(question.options.map((option) => option.id), random);
        break;
      case "matching":
        orders[question.id] = shuffle(question.pairs.map((pair) => pair.id), random);
        break;
      case "grouping":
      case "ordering":
        orders[question.id] = shuffle(question.items.map((item) => item.id), random);
        break;
    }
  }
  return orders;
}
