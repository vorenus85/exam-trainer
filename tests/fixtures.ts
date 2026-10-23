import type { ChoiceQuestion, FillInQuestion, GroupingQuestion, MatchingQuestion, OrderingQuestion, TrueFalseQuestion } from "../src/types/question.ts";
import type { AnswerStore } from "../src/domain/answers.ts";

const base = { topicId: "apolastan", prompt: "Test question" };
export const single: ChoiceQuestion = {
  ...base, id: "single", type: "single_choice",
  options: [{ id: "a", text: "Alpha" }, { id: "b", text: "Beta" }], correctOptionIds: ["b"],
};
export const multiple: ChoiceQuestion = {
  ...single, id: "multiple", type: "multiple_choice",
  options: [...single.options, { id: "c", text: "Gamma" }], correctOptionIds: ["a", "c"],
};
export const trueFalse: TrueFalseQuestion = {
  ...base, id: "true-false", type: "true_false",
  statements: [{ id: "a", text: "First", correct: false }, { id: "b", text: "Second", correct: true }],
};
export const matching: MatchingQuestion = {
  ...base, id: "matching", type: "matching",
  pairs: [{ id: "a", left: "One", right: "Alpha" }, { id: "b", left: "Two", right: "Beta" }],
};
export const grouping: GroupingQuestion = {
  ...base, id: "grouping", type: "grouping",
  groups: [{ id: "a", text: "Group A" }, { id: "b", text: "Group B" }],
  items: [
    { id: "one", text: "One", correctGroupId: "a" },
    { id: "two", text: "Two", correctGroupId: "a" },
    { id: "three", text: "Three", correctGroupId: "b" },
  ],
};
export const ordering: OrderingQuestion = {
  ...base, id: "ordering", type: "ordering",
  items: [{ id: "b", text: "Second" }, { id: "a", text: "First" }, { id: "c", text: "Third" }],
  correctOrderIds: ["a", "b", "c"],
};
export const fillIn: FillInQuestion = {
  ...base, id: "fill-in", type: "fill_in",
  statements: [
    { id: "first", parts: ["The ", { id: "blank", label: "First blank", options: single.options, correctOptionId: "a" },
      " and ", { id: "other", label: "Second blank", options: multiple.options, correctOptionId: "c" }, "."] },
    { id: "second", parts: ["Then ", { id: "blank", label: "Third blank", options: single.options, correctOptionId: "b" }, "."] },
  ],
};

export const cases: { question: typeof single | typeof trueFalse | typeof matching | typeof grouping | typeof ordering | typeof fillIn; correct: AnswerStore; wrong: AnswerStore; incomplete: AnswerStore }[] = [
  { question: single,
    correct: { single: { type: "single_choice", selectedOptionId: "b" } },
    wrong: { single: { type: "single_choice", selectedOptionId: "a" } },
    incomplete: { single: { type: "single_choice", selectedOptionId: null } } },
  { question: multiple,
    correct: { multiple: { type: "multiple_choice", selectedOptionIds: ["c", "a"] } },
    wrong: { multiple: { type: "multiple_choice", selectedOptionIds: ["a", "b"] } },
    incomplete: { multiple: { type: "multiple_choice", selectedOptionIds: [] } } },
  { question: trueFalse,
    correct: { "true-false": { type: "true_false", statements: { a: false, b: true } } },
    wrong: { "true-false": { type: "true_false", statements: { a: true, b: true } } },
    incomplete: { "true-false": { type: "true_false", statements: { a: false } } } },
  { question: matching,
    correct: { matching: { type: "matching", pairs: { a: "a", b: "b" } } },
    wrong: { matching: { type: "matching", pairs: { a: "b", b: "a" } } },
    incomplete: { matching: { type: "matching", pairs: { a: "a" } } } },
  { question: grouping,
    correct: { grouping: { type: "grouping", groups: { one: "a", two: "a", three: "b" } } },
    wrong: { grouping: { type: "grouping", groups: { one: "b", two: "a", three: "b" } } },
    incomplete: { grouping: { type: "grouping", groups: { one: "a" } } } },
  { question: ordering,
    correct: { ordering: { type: "ordering", orderIds: ["a", "b", "c"] } },
    wrong: { ordering: { type: "ordering", orderIds: ["b", "a", "c"] } },
    incomplete: { ordering: { type: "ordering", orderIds: ["a", "b"] } } },
  { question: fillIn,
    correct: { "fill-in": { type: "fill_in", values: { first: { blank: "a", other: "c" }, second: { blank: "b" } } } },
    wrong: { "fill-in": { type: "fill_in", values: { first: { blank: "b", other: "c" }, second: { blank: "b" } } } },
    incomplete: { "fill-in": { type: "fill_in", values: { first: { blank: "a", other: "c" } } } } },
];
