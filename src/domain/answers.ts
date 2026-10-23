import type { FillInQuestion, GroupingQuestion, MatchingQuestion, TrueFalseQuestion } from "../types/question.ts";

export type AnswerValue = string | string[] | boolean | null | undefined;
export type AnswerStore = Readonly<Record<string, AnswerValue>>;

export function getFillInAnswerKey(question: FillInQuestion, statementId: string, blankId: string) {
  return JSON.stringify([question.id, "fill_in", statementId, blankId]);
}

export function getGroupingAnswerKey(question: GroupingQuestion, itemId: string) {
  return JSON.stringify([question.id, "grouping", itemId]);
}

export function getMatchingAnswerKey(question: MatchingQuestion, pairId: string) {
  return JSON.stringify([question.id, "matching", pairId]);
}

export function getTrueFalseAnswerKey(
  question: TrueFalseQuestion,
  statementId: string,
) {
  return `${question.id}:${statementId}`;
}
