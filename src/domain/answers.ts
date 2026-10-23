import type { ExamQuestion, QuestionAnswer } from "../types/question.ts";

export type Answers = Partial<Record<string, QuestionAnswer>>;
export type AnswerStore = Readonly<Answers>;

export function createAnswer(question: ExamQuestion): QuestionAnswer {
  switch (question.type) {
    case "single_choice":
      return { type: question.type, selectedOptionId: null };
    case "multiple_choice":
      return { type: question.type, selectedOptionIds: [] };
    case "true_false":
      return { type: question.type, statements: Object.fromEntries(question.statements.map((statement) => [statement.id, null])) };
    case "matching":
      return { type: question.type, pairs: Object.fromEntries(question.pairs.map((pair) => [pair.id, null])) };
    case "grouping":
      return { type: question.type, groups: Object.fromEntries(question.items.map((item) => [item.id, null])) };
    case "ordering":
      return { type: question.type, orderIds: [] };
    case "fill_in":
      return {
        type: question.type,
        values: Object.fromEntries(question.statements.map((statement) => [
          statement.id,
          Object.fromEntries(statement.parts.filter((part) => typeof part !== "string").map((blank) => [blank.id, null])),
        ])),
      };
  }
}

export function createAnswers(questions: readonly ExamQuestion[]): Answers {
  return Object.fromEntries(questions.map((question) => [question.id, createAnswer(question)]));
}
