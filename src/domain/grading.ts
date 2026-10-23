import type { ExamQuestion } from "../types/question.ts";
import type { AnswerStore } from "./answers.ts";
import { areAnswersCorrect, hasAnswer } from "./questionEvaluation.ts";

export function calculatePercent(count: number, total: number): number {
  return total === 0 ? 0 : Math.round((count / total) * 100);
}

export function getGrade(scorePercent: number) {
  if (scorePercent >= 88) return "jeles";
  if (scorePercent >= 75) return "jó";
  if (scorePercent >= 62) return "közepes";
  if (scorePercent >= 51) return "elégséges";
  return "elégtelen";
}

export function getPracticeResult(questions: readonly ExamQuestion[], answers: AnswerStore) {
  let answeredCount = 0;
  let correctCount = 0;
  const incorrectQuestions: ExamQuestion[] = [];

  for (const question of questions) {
    if (hasAnswer(question, answers)) answeredCount += 1;
    if (areAnswersCorrect(question, answers)) correctCount += 1;
    else incorrectQuestions.push(question);
  }

  const scorePercent = calculatePercent(correctCount, questions.length);
  return { answeredCount, correctCount, incorrectQuestions, scorePercent, grade: getGrade(scorePercent) };
}
