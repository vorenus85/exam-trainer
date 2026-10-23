import { test } from "node:test";
import assert from "node:assert/strict";
import { computed, reactive } from "vue";
import { createAnswer, createAnswers } from "../src/domain/answers.ts";
import { areAnswersCorrect, hasAnswer } from "../src/domain/questionEvaluation.ts";
import type { Answers } from "../src/domain/answers.ts";
import { cases, fillIn, multiple, single, trueFalse } from "./fixtures.ts";

for (const { question } of cases) {
  test(`${question.type}: creates one typed unanswered object under the question ID`, () => {
    const before = structuredClone(question);
    const answers = createAnswers([question]);
    assert.deepEqual(Object.keys(answers), [question.id]);
    assert.equal(answers[question.id]?.type, question.type);
    assert.equal(hasAnswer(question, answers), false);
    assert.equal(areAnswersCorrect(question, answers), false);
    assert.deepEqual(question, before);
  });
}

test("true-false initializes every statement separately and preserves false as an answer", () => {
  const answer = createAnswer(trueFalse);
  assert.ok(answer.type === "true_false");
  assert.deepEqual(structuredClone(answer.statements), { a: null, b: null });
  answer.statements.a = false;
  assert.equal(hasAnswer(trueFalse, { [trueFalse.id]: answer }), false);
  answer.statements.b = true;
  assert.equal(hasAnswer(trueFalse, { [trueFalse.id]: answer }), true);
  assert.equal(areAnswersCorrect(trueFalse, { [trueFalse.id]: answer }), true);
});

test("fill-in initializes nested maps; identical blank IDs in separate statements remain independent", () => {
  const answer = createAnswer(fillIn);
  assert.ok(answer.type === "fill_in");
  assert.deepEqual(structuredClone(answer.values), { first: { blank: null, other: null }, second: { blank: null } });
  answer.values.first!.blank = "a";
  answer.values.first!.other = "c";
  assert.equal(answer.values.second!.blank, null);
  assert.equal(hasAnswer(fillIn, { [fillIn.id]: answer }), false);
  answer.values.second!.blank = "b";
  assert.equal(areAnswersCorrect(fillIn, { [fillIn.id]: answer }), true);
});

test("new sessions do not share nested objects or arrays with old sessions", () => {
  const questions = cases.map(c => c.question);
  const first = createAnswers(questions);
  const second = createAnswers(questions);
  const before = structuredClone(second);
  for (const { question, correct } of cases) {
    assert.notEqual(first[question.id], second[question.id]);
    Object.assign(first[question.id]!, structuredClone(correct[question.id]));
  }
  assert.deepEqual(second, before);

  const original = createAnswer(fillIn);
  const other = createAnswer(fillIn);
  assert.ok(original.type === "fill_in" && other.type === "fill_in");
  original.values.first!.blank = "a";
  assert.equal(other.values.first!.blank, null);

  const originalMultiple = createAnswer(multiple);
  const otherMultiple = createAnswer(multiple);
  assert.ok(originalMultiple.type === "multiple_choice" && otherMultiple.type === "multiple_choice");
  originalMultiple.selectedOptionIds.push("a");
  assert.deepEqual(otherMultiple.selectedOptionIds, []);
});

test("question IDs and nested statement IDs need no concatenated storage keys", () => {
  const first = { ...trueFalse, id: "question:statement" };
  const second = { ...trueFalse, id: "question", statements: [{ id: "statement:a", text: "Other", correct: true }] };
  const answers = createAnswers([first, second]);
  const firstAnswer = answers[first.id];
  const secondAnswer = answers[second.id];
  assert.ok(firstAnswer?.type === "true_false" && secondAnswer?.type === "true_false");
  firstAnswer.statements.a = false;
  secondAnswer.statements["statement:a"] = true;
  assert.equal(firstAnswer.statements.a, false);
  assert.equal(secondAnswer.statements["statement:a"], true);
  assert.deepEqual(Object.keys(answers), [first.id, second.id]);
});

test("reactive typed answers preserve edits across navigation, clearing and a fresh session", () => {
  const answers = reactive<Answers>(createAnswers([single, fillIn]));
  const selection = reactive({ id: single.id });
  const current = computed(() => answers[selection.id]);
  const complete = computed(() => hasAnswer(selection.id === single.id ? single : fillIn, answers));
  const first = current.value;
  assert.ok(first?.type === "single_choice");
  assert.equal(complete.value, false);
  first.selectedOptionId = "b";
  assert.equal(complete.value, true);

  selection.id = fillIn.id;
  const sentence = current.value;
  assert.ok(sentence?.type === "fill_in");
  sentence.values.first!.blank = "a";
  sentence.values.first!.other = "c";
  sentence.values.second!.blank = "b";
  assert.equal(complete.value, true);
  sentence.values.first!.blank = null;
  assert.equal(complete.value, false);

  selection.id = single.id;
  assert.equal(current.value, first);
  assert.equal(complete.value, true);
  Object.assign(answers, createAnswers([single, fillIn]));
  assert.equal(complete.value, false);
  assert.notEqual(current.value, first);
});
