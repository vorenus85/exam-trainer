import type { ExamQuestion } from "../types/question.ts";

export function getCorrectAnswerText(question: ExamQuestion, matchingOptionIds?: readonly string[]) {
  if (question.type === "fill_in") {
    return question.statements.map((statement) => statement.parts.map((part) =>
      typeof part === "string" ? part : part.options.find((option) => option.id === part.correctOptionId)?.text,
    ).join("")).join(" ");
  }
  if (question.type === "ordering") {
    return question.correctOrderIds.map((id, index) =>
      `${index + 1}. ${question.items.find((item) => item.id === id)?.text}`,
    ).join(" → ");
  }
  if (question.type === "grouping") {
    return question.groups.map((group) =>
      `${group.text}: ${question.items.filter((item) => item.correctGroupId === group.id).map((item) => item.text).join(", ")}`,
    ).join("; ");
  }
  if (question.type === "matching") {
    const order = matchingOptionIds ?? question.pairs.map((pair) => pair.id);
    return question.pairs.map((pair, index) =>
      `${index + 1}–${String.fromCharCode(65 + order.indexOf(pair.id))}: ${pair.left} — ${pair.right}`,
    ).join("; ");
  }
  if (question.type === "true_false") {
    return question.statements
      .map(
        (statement) =>
          `${statement.text} — ${statement.correct ? "Igaz" : "Hamis"}`,
      )
      .join("; ");
  }

  return question.options
    .filter((option) => question.correctOptionIds.includes(option.id))
    .map((option) => option.text)
    .join(", ");
}
