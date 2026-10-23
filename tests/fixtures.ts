import type { ChoiceQuestion, FillInQuestion, GroupingQuestion, MatchingQuestion, OrderingQuestion, TrueFalseQuestion } from "../src/types/question.ts";
import type { AnswerStore } from "../src/domain/answers.ts";
import { getFillInAnswerKey, getGroupingAnswerKey, getMatchingAnswerKey, getTrueFalseAnswerKey } from "../src/domain/answers.ts";

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
  { question: single, correct: { single: "b" }, wrong: { single: "a" }, incomplete: { single: null } },
  { question: multiple, correct: { multiple: ["c", "a"] }, wrong: { multiple: ["a", "b"] }, incomplete: { multiple: [] } },
  { question: trueFalse,
    correct: { [getTrueFalseAnswerKey(trueFalse, "a")]: false, [getTrueFalseAnswerKey(trueFalse, "b")]: true },
    wrong: { [getTrueFalseAnswerKey(trueFalse, "a")]: true, [getTrueFalseAnswerKey(trueFalse, "b")]: true },
    incomplete: { [getTrueFalseAnswerKey(trueFalse, "a")]: false } },
  { question: matching,
    correct: { [getMatchingAnswerKey(matching, "a")]: "a", [getMatchingAnswerKey(matching, "b")]: "b" },
    wrong: { [getMatchingAnswerKey(matching, "a")]: "b", [getMatchingAnswerKey(matching, "b")]: "a" },
    incomplete: { [getMatchingAnswerKey(matching, "a")]: "a" } },
  { question: grouping,
    correct: { [getGroupingAnswerKey(grouping, "one")]: "a", [getGroupingAnswerKey(grouping, "two")]: "a", [getGroupingAnswerKey(grouping, "three")]: "b" },
    wrong: { [getGroupingAnswerKey(grouping, "one")]: "b", [getGroupingAnswerKey(grouping, "two")]: "a", [getGroupingAnswerKey(grouping, "three")]: "b" },
    incomplete: { [getGroupingAnswerKey(grouping, "one")]: "a" } },
  { question: ordering, correct: { ordering: ["a", "b", "c"] }, wrong: { ordering: ["b", "a", "c"] }, incomplete: { ordering: ["a", "b"] } },
  { question: fillIn,
    correct: { [getFillInAnswerKey(fillIn, "first", "blank")]: "a", [getFillInAnswerKey(fillIn, "first", "other")]: "c", [getFillInAnswerKey(fillIn, "second", "blank")]: "b" },
    wrong: { [getFillInAnswerKey(fillIn, "first", "blank")]: "b", [getFillInAnswerKey(fillIn, "first", "other")]: "c", [getFillInAnswerKey(fillIn, "second", "blank")]: "b" },
    incomplete: { [getFillInAnswerKey(fillIn, "first", "blank")]: "a", [getFillInAnswerKey(fillIn, "first", "other")]: "c" } },
];
