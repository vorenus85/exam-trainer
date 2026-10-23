import type { QuestionType } from "../types/question.ts";

export const MODULE_QUESTIONS_PER_PRACTICE = 30;
export const PRACTICE_TIME_LIMIT_SECONDS = 30 * 60;
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
