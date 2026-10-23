import { test } from "node:test";
import assert from "node:assert/strict";
import { areAnswersCorrect, hasAnswer } from "../src/domain/questionEvaluation.ts";
import { getFillInAnswerKey, getGroupingAnswerKey, getMatchingAnswerKey } from "../src/domain/answers.ts";
import { cases, fillIn, grouping, matching, multiple, ordering } from "./fixtures.ts";

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
  assert.equal(areAnswersCorrect(question, { multiple: selected }), true);
  assert.deepEqual(selected, ["c", "a"]);
  assert.deepEqual(question.correctOptionIds, ["a", "c"]);
});

test("multiple choice rejects omitted correct options, extras and duplicates", () => {
  for (const value of [["a"], ["a", "b", "c"], ["a", "a"]]) {
    assert.equal(areAnswersCorrect(multiple, { multiple: value }), false);
  }
});

test("matching forbids reusing a right-hand item", () => {
  const answers = { [getMatchingAnswerKey(matching, "a")]: "a", [getMatchingAnswerKey(matching, "b")]: "a" };
  assert.equal(hasAnswer(matching, answers), false);
  assert.equal(areAnswersCorrect(matching, answers), false);
});

test("grouping allows multiple items in one group but rejects nonexistent groups", () => {
  const fixture = cases.find(({ question }) => question.id === grouping.id)!;
  assert.equal(areAnswersCorrect(grouping, fixture.correct), true);
  assert.equal(hasAnswer(grouping, { ...fixture.correct, [getGroupingAnswerKey(grouping, "one")]: "missing" }), false);
});

test("ordering rejects duplicate, extra and unknown items", () => {
  for (const value of [["a", "a", "c"], ["a", "b", "c", "d"], ["a", "b", "missing"]]) {
    assert.equal(hasAnswer(ordering, { ordering: value }), false);
    assert.equal(areAnswersCorrect(ordering, { ordering: value }), false);
  }
});

test("fill-in keys distinguish the same blank ID in different statements and questions", () => {
  const first = getFillInAnswerKey(fillIn, "first", "blank");
  assert.notEqual(first, getFillInAnswerKey(fillIn, "second", "blank"));
  assert.notEqual(first, getFillInAnswerKey({ ...fillIn, id: "another" }, "first", "blank"));
  assert.notEqual(getFillInAnswerKey(fillIn, 'a","b', "c"), getFillInAnswerKey(fillIn, "a", 'b","c'));
});

test("clearing a fill-in selection or using an unknown option makes it incomplete", () => {
  const fixture = cases.find(({ question }) => question.id === fillIn.id)!;
  for (const value of [null, "unknown"]) {
    const answers = { ...fixture.correct, [getFillInAnswerKey(fillIn, "first", "blank")]: value };
    assert.equal(hasAnswer(fillIn, answers), false);
    assert.equal(areAnswersCorrect(fillIn, answers), false);
  }
});
