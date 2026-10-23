import { test } from "node:test";
import assert from "node:assert/strict";
import { createOptionOrders, EXAM_QUESTIONS_PER_TOPIC, filterQuestions, selectQuestions } from "../src/domain/questionSelection.ts";
import type { PracticeSettings } from "../src/domain/questionSelection.ts";
import type { ChoiceQuestion } from "../src/types/question.ts";
import { cases, single } from "./fixtures.ts";

const exam: PracticeSettings = { mode: "exam", topicId: null };
const moduleSettings: PracticeSettings = { mode: "module", topicId: "apolastan" };
const bank: ChoiceQuestion[] = Object.keys(EXAM_QUESTIONS_PER_TOPIC).flatMap(topicId =>
  Array.from({ length: 40 }, (_, i) => ({ ...single, id: `${topicId}-${i}`, topicId })),
);

test("module practice selects 30 distinct questions from only the selected topic", () => {
  const selected = selectQuestions(bank, moduleSettings, () => 0);
  assert.equal(selected.length, 30);
  assert.equal(new Set(selected.map(q => q.id)).size, 30);
  assert.ok(selected.every(q => q.topicId === "apolastan"));
});

test("exam selection respects every topic quota and totals 30 questions", () => {
  const selected = selectQuestions(bank, exam, () => 0);
  assert.equal(selected.length, 30);
  assert.equal(new Set(selected.map(q => q.id)).size, 30);
  for (const [topic, count] of Object.entries(EXAM_QUESTIONS_PER_TOPIC)) {
    assert.equal(selected.filter(q => q.topicId === topic).length, count);
  }
});

test("type filtering is applied before the module limit and exam quotas", () => {
  const mixed = bank.map((q, i) => i % 2 === 0 ? { ...q, type: "multiple_choice" as const } : q);
  for (const settings of [exam, moduleSettings]) {
    const selected = selectQuestions(mixed, { ...settings, questionTypes: ["multiple_choice"] }, () => 0);
    assert.ok(selected.length > 0);
    assert.ok(selected.every(q => q.type === "multiple_choice"));
  }
});

test("unfiltered and explicitly selected all types include every question type", () => {
  const questions = cases.map(c => c.question);
  assert.deepEqual(filterQuestions(questions, exam), questions);
  assert.deepEqual(filterQuestions(questions, { ...exam, questionTypes: questions.map(q => q.type) }), questions);
  assert.equal(filterQuestions(questions, { ...exam, questionTypes: ["grouping", "fill_in"] }).length, 2);
});

test("no type selected, nonexistent topic or no practice mode yields no questions", () => {
  for (const settings of [
    { ...exam, questionTypes: [] }, { ...moduleSettings, topicId: "missing" },
    { ...moduleSettings, topicId: null }, { ...exam, mode: null },
  ]) {
    assert.deepEqual(selectQuestions(bank, settings, () => 0), []);
  }
});

test("small banks return available questions without repetition or filling from another topic", () => {
  const small = bank.filter(q => q.topicId === "apolastan").slice(0, 2);
  for (const settings of [exam, moduleSettings]) {
    assert.deepEqual(new Set(selectQuestions(small, settings, () => 0).map(q => q.id)), new Set(small.map(q => q.id)));
  }
  assert.deepEqual(selectQuestions([], exam), []);
});

test("selection and generated display orders do not mutate source questions", () => {
  const questions = cases.map(c => structuredClone(c.question));
  const before = structuredClone(questions);
  const selected = selectQuestions(questions, moduleSettings, () => 0);
  const orders = createOptionOrders(selected, () => 0);
  assert.deepEqual(questions, before);
  for (const q of questions) {
    const expected = "options" in q ? q.options.map(o => o.id)
      : q.type === "matching" ? q.pairs.map(p => p.id)
      : q.type === "grouping" || q.type === "ordering" ? q.items.map(i => i.id) : undefined;
    if (expected) {
      assert.deepEqual(new Set(orders[q.id]), new Set(expected));
      assert.equal(orders[q.id]!.length, expected.length);
    } else assert.equal(orders[q.id], undefined);
  }
});

test("the same random source reproduces selection and display orders", () => {
  assert.deepEqual(selectQuestions(bank, exam, () => 0.5), selectQuestions(bank, exam, () => 0.5));
  const questions = cases.map(c => c.question);
  assert.deepEqual(createOptionOrders(questions, () => 0), createOptionOrders(questions, () => 0));
});
