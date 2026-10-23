import type { QuestionType } from "../types/question.ts";

export const MODULE_QUESTIONS_PER_PRACTICE = 30;
export const moduleQuestionCounts = [10, 20, 30].map((value) => ({
  value, label: `${value} kérdés`,
}));
export const SECONDS_PER_QUESTION = 60;
export const PRACTICE_TIME_LIMIT_SECONDS = MODULE_QUESTIONS_PER_PRACTICE * SECONDS_PER_QUESTION;
export const EXAM_QUESTIONS_PER_TOPIC: Readonly<Record<string, number>> = {
  testmukodes: 9,
  vitalis: 6,
  gyogyszerelesi_ismeretek: 3,
  apolastan: 9,
  tarsadalomtudomanyi_ismeretek: 3,
};

export type PracticeMode = "exam" | "module";
export type PracticeSettings = {
  mode: PracticeMode | null;
  topicId: string | null;
  questionTypes?: readonly QuestionType[];
  moduleQuestionCount?: number;
};

export const practiceModes = [
  { id: "exam", name: "Vizsga gyakorlása" },
  { id: "module", name: "Egy modul gyakorlása" },
] satisfies { id: PracticeMode; name: string }[];

export const GRADING_SCALE = [
  { minPercent: 88, label: "jeles", className: "border-green-200 bg-green-50 text-green-800" },
  { minPercent: 75, label: "jó", className: "border-blue-200 bg-blue-50 text-blue-800" },
  { minPercent: 62, label: "közepes", className: "border-yellow-200 bg-yellow-50 text-yellow-800" },
  { minPercent: 51, label: "elégséges", className: "border-orange-200 bg-orange-50 text-orange-800" },
  { minPercent: 0, label: "elégtelen", className: "border-red-200 bg-red-50 text-red-800" },
] as const;
