import { test } from "node:test";
import assert from "node:assert/strict";
import { areAnswersCorrect, hasAnswer } from "../src/domain/questionEvaluation.ts";
import { cases, fillIn, grouping, matching, multiple, ordering, single } from "./fixtures.ts";

for (const { question, correct, wrong, incomplete } of cases) {
  test(`${question.type}: correct answers are complete and correct`, () => {
    assert.equal(hasAnswer(question, correct), true);
    assert.equal(areAnswersCorrect(question, correct), true);
  });
  test(`${question.type}: complete wrong answers remain incorrect`, () => {
    assert.equal(hasAnswer(question, wrong), true);
    assert.equal(areAnswersCorrect(question, wrong), false);
  });
  test(`${question.type}: missing and incomplete answers are not accepted`, () => {
    for (const answers of [{}, incomplete]) {
      assert.equal(hasAnswer(question, answers), false);
      assert.equal(areAnswersCorrect(question, answers), false);
    }
  });
}

test("multiple choice evaluation does not reorder frozen answers or the correct solution", () => {
  const selected = ["c", "a"];
  Object.freeze(selected);
  const question = structuredClone(multiple);
  Object.freeze(question.correctOptionIds);
  assert.equal(areAnswersCorrect(question, { multiple: { type: "multiple_choice", selectedOptionIds: selected } }), true);
  assert.deepEqual(selected, ["c", "a"]);
  assert.deepEqual(question.correctOptionIds, ["a", "c"]);
});

test("multiple choice rejects omitted correct options, extras and duplicates", () => {
  for (const value of [["a"], ["a", "b", "c"], ["a", "a"]]) {
    assert.equal(areAnswersCorrect(multiple, { multiple: { type: "multiple_choice", selectedOptionIds: value } }), false);
  }
});

test("matching forbids reusing a right-hand item", () => {
  const answers = { matching: { type: "matching" as const, pairs: { a: "a", b: "a" } } };
  assert.equal(hasAnswer(matching, answers), false);
  assert.equal(areAnswersCorrect(matching, answers), false);
});

test("grouping allows multiple items in one group but rejects nonexistent groups", () => {
  const fixture = cases.find(({ question }) => question.id === grouping.id)!;
  assert.equal(areAnswersCorrect(grouping, fixture.correct), true);
  assert.equal(hasAnswer(grouping, { grouping: { type: "grouping", groups: { one: "missing", two: "a", three: "b" } } }), false);
});

test("ordering rejects duplicate, extra and unknown items", () => {
  for (const value of [["a", "a", "c"], ["a", "b", "c", "d"], ["a", "b", "missing"]]) {
    assert.equal(hasAnswer(ordering, { ordering: { type: "ordering", orderIds: value } }), false);
    assert.equal(areAnswersCorrect(ordering, { ordering: { type: "ordering", orderIds: value } }), false);
  }
});

test("a response of the wrong question type is never complete or correct", () => {
  for (const { question } of cases) {
    for (const other of cases.filter(c => c.question.type !== question.type)) {
      const answers = { [question.id]: other.correct[other.question.id] };
      assert.equal(hasAnswer(question, answers), false);
      assert.equal(areAnswersCorrect(question, answers), false);
    }
  }
});

test("unknown choice options and duplicate selections are not treated as complete", () => {
  assert.equal(hasAnswer(single, { single: { type: "single_choice", selectedOptionId: "unknown" } }), false);
  for (const selectedOptionIds of [["a", "a"], ["unknown"]]) {
    assert.equal(hasAnswer(multiple, { multiple: { type: "multiple_choice", selectedOptionIds } }), false);
  }
});

test("clearing a fill-in selection or using an unknown option makes it incomplete", () => {
  for (const value of [null, "unknown"]) {
    const answers = { "fill-in": { type: "fill_in" as const, values: { first: { blank: value, other: "c" }, second: { blank: "b" } } } };
    assert.equal(hasAnswer(fillIn, answers), false);
    assert.equal(areAnswersCorrect(fillIn, answers), false);
  }
});
