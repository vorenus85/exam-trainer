import type { ChoiceQuestion, ExamQuestion } from "../types/question.ts";
import { getFillInAnswerKey, getGroupingAnswerKey, getMatchingAnswerKey, getTrueFalseAnswerKey } from "./answers.ts";
import type { AnswerStore } from "./answers.ts";

export function hasAnswer(question: ExamQuestion, answers: AnswerStore) {
  if (question.type === "fill_in") {
    return question.statements.every((statement) => statement.parts.every((part) =>
      typeof part === "string" || part.options.some((option) =>
        option.id === answers[getFillInAnswerKey(question, statement.id, part.id)],
      ),
    ));
  }
  if (question.type === "ordering") {
    const answer = answers[question.id];
    return Array.isArray(answer) && answer.length === question.items.length
      && new Set(answer).size === question.items.length
      && answer.every((id) => question.items.some((item) => item.id === id));
  }
  if (question.type === "grouping") {
    return question.items.every((item) => question.groups.some(
      (group) => group.id === answers[getGroupingAnswerKey(question, item.id)],
    ));
  }
  if (question.type === "matching") {
    const selected = question.pairs.map((pair) => answers[getMatchingAnswerKey(question, pair.id)]);
    return selected.every((id) => typeof id === "string" && question.pairs.some((pair) => pair.id === id))
      && new Set(selected).size === question.pairs.length;
  }
  if (question.type === "true_false") {
    return question.statements.every(
      (statement) =>
        typeof answers[getTrueFalseAnswerKey(question, statement.id)] ===
        "boolean",
    );
  }

  const answer = answers[question.id];
  if (typeof answer === "boolean") return true;

  return Array.isArray(answer) ? answer.length > 0 : Boolean(answer);
}

export function getSelectedOptionIds(question: ChoiceQuestion, answers: AnswerStore) {
  const answer = answers[question.id];
  return Array.isArray(answer) ? [...answer] : typeof answer === "string" ? [answer] : [];
}

export function areAnswersCorrect(question: ExamQuestion, answers: AnswerStore) {
  if (question.type === "fill_in") {
    return question.statements.every((statement) => statement.parts.every((part) =>
      typeof part === "string" || answers[getFillInAnswerKey(question, statement.id, part.id)] === part.correctOptionId,
    ));
  }
  if (question.type === "ordering") {
    const answer = answers[question.id];
    return hasAnswer(question, answers) && Array.isArray(answer)
      && answer.every((id, index) => id === question.correctOrderIds[index]);
  }
  if (question.type === "grouping") {
    return question.items.every((item) => answers[getGroupingAnswerKey(question, item.id)] === item.correctGroupId);
  }
  if (question.type === "matching") {
    return question.pairs.every((pair) => answers[getMatchingAnswerKey(question, pair.id)] === pair.id);
  }
  if (question.type === "true_false") {
    return question.statements.every(
      (statement) =>
        answers[getTrueFalseAnswerKey(question, statement.id)] ===
        statement.correct,
    );
  }

  const selected = getSelectedOptionIds(question, answers).sort();
  const correct = [...question.correctOptionIds].sort();

  return (
    selected.length === correct.length &&
    selected.every((optionId, index) => optionId === correct[index])
  );
}
