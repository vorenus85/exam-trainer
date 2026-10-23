import type { ExamQuestion } from "../types/question.ts";
import type { AnswerStore } from "./answers.ts";

export function hasAnswer(question: ExamQuestion, answers: AnswerStore): boolean {
  const answer = answers[question.id];
  if (!answer) return false;

  switch (question.type) {
    case "single_choice":
      return answer.type === "single_choice"
        && question.options.some((option) => option.id === answer.selectedOptionId);
    case "multiple_choice":
      return answer.type === "multiple_choice" && answer.selectedOptionIds.length > 0
        && new Set(answer.selectedOptionIds).size === answer.selectedOptionIds.length
        && answer.selectedOptionIds.every((id) => question.options.some((option) => option.id === id));
    case "true_false":
      return answer.type === "true_false"
        && question.statements.every((statement) => typeof answer.statements[statement.id] === "boolean");
    case "matching": {
      if (answer.type !== "matching") return false;
      const selected = question.pairs.map((pair) => answer.pairs[pair.id]);
      return selected.every((id) => question.pairs.some((pair) => pair.id === id))
        && new Set(selected).size === question.pairs.length;
    }
    case "grouping":
      return answer.type === "grouping" && question.items.every((item) =>
        question.groups.some((group) => group.id === answer.groups[item.id]),
      );
    case "ordering":
      return answer.type === "ordering" && answer.orderIds.length === question.items.length
        && new Set(answer.orderIds).size === question.items.length
        && answer.orderIds.every((id) => question.items.some((item) => item.id === id));
    case "fill_in":
      return answer.type === "fill_in" && question.statements.every((statement) =>
        statement.parts.every((part) => typeof part === "string"
          || part.options.some((option) => option.id === answer.values[statement.id]?.[part.id])),
      );
  }
}

export function areAnswersCorrect(question: ExamQuestion, answers: AnswerStore): boolean {
  const answer = answers[question.id];
  if (!answer || !hasAnswer(question, answers)) return false;

  switch (question.type) {
    case "single_choice":
      return answer.type === "single_choice" && question.correctOptionIds.length === 1
        && answer.selectedOptionId === question.correctOptionIds[0];
    case "multiple_choice":
      return answer.type === "multiple_choice"
        && answer.selectedOptionIds.length === question.correctOptionIds.length
        && question.correctOptionIds.every((id) => answer.selectedOptionIds.includes(id));
    case "true_false":
      return answer.type === "true_false"
        && question.statements.every((statement) => answer.statements[statement.id] === statement.correct);
    case "matching":
      return answer.type === "matching" && question.pairs.every((pair) => answer.pairs[pair.id] === pair.id);
    case "grouping":
      return answer.type === "grouping" && question.items.every((item) => answer.groups[item.id] === item.correctGroupId);
    case "ordering":
      return answer.type === "ordering" && answer.orderIds.every((id, index) => id === question.correctOrderIds[index]);
    case "fill_in":
      return answer.type === "fill_in" && question.statements.every((statement) =>
        statement.parts.every((part) => typeof part === "string"
          || answer.values[statement.id]?.[part.id] === part.correctOptionId),
      );
  }
}
