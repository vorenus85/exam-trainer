import type { QuestionType } from "../types/question.ts";

export const QUESTION_TYPE_LABELS: Readonly<Record<QuestionType, string>> = {
  single_choice: "Egy helyes válasz",
  multiple_choice: "Több helyes válasz",
  true_false: "Igaz / hamis",
  matching: "Párosítás",
  grouping: "Csoportosítás",
  ordering: "Sorbarendezés",
  fill_in: "Mondatkiegészítés (választás)",
};

export const questionTypes = Object.entries(QUESTION_TYPE_LABELS).map(([id, name]) => ({ id: id as QuestionType, name }));
export const getAllQuestionTypes = (): QuestionType[] => questionTypes.map((type) => type.id);
