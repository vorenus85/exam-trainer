import { GRADING_SCALE } from "../config/practice.ts";
import type { ExamQuestion } from "../types/question.ts";
import type { AnswerStore } from "./answers.ts";
import { areAnswersCorrect, hasAnswer } from "./questionEvaluation.ts";

export function calculatePercent(count: number, total: number): number {
  return total === 0 ? 0 : Math.round((count / total) * 100);
}

export function getGrade(scorePercent: number) {
  return (GRADING_SCALE.find((grade) => scorePercent >= grade.minPercent) ?? GRADING_SCALE[GRADING_SCALE.length - 1]!).label;
}

export function getGradeRanges(total: number) {
  return GRADING_SCALE.map((grade, index) => {
    const points = Array.from({ length: total + 1 }, (_, count) => count)
      .filter((count) => getGrade(calculatePercent(count, total)) === grade.label);
    return {
      ...grade,
      maxPercent: index === 0 ? 100 : GRADING_SCALE[index - 1]!.minPercent - 1,
      minPoints: points.length > 0 ? points[0]! : null,
      maxPoints: points.length > 0 ? points[points.length - 1]! : null,
    };
  });
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

export type PracticeResult = ReturnType<typeof getPracticeResult>;
