import { test } from "node:test";
import assert from "node:assert/strict";
import { assertValidQuestionBank, validateQuestionBank } from "../src/domain/questionValidation.ts";
import { sampleQuestions, topics as actualTopics } from "../src/data/sampleQuestions.ts";
import type { ExamQuestion, FillInBlank } from "../src/types/question.ts";
import { cases, fillIn, grouping, matching, multiple, ordering, single, trueFalse } from "./fixtures.ts";

const topics = [{ id: "apolastan", name: "Ápolástan" }];
const blank = fillIn.statements[0]!.parts.find((part): part is FillInBlank => typeof part !== "string")!;
const fillWith = (parts: (string | FillInBlank)[]): ExamQuestion => ({
  ...fillIn, statements: [{ id: "first", parts }],
});

test("the complete production question bank passes validation without modifying data", () => {
  const before = structuredClone(sampleQuestions);
  assert.ok(sampleQuestions.length > 0);
  assert.deepEqual(validateQuestionBank(sampleQuestions, actualTopics), []);
  assert.doesNotThrow(() => assertValidQuestionBank(sampleQuestions, actualTopics));
  assert.deepEqual(sampleQuestions, before);
});

test("all seven fixture types are valid, including false statements and repeated blank IDs in separate statements", () => {
  assert.deepEqual(validateQuestionBank(cases.map(c => c.question), topics), []);
});

test("question IDs must be unique across the entire bank", () => {
  const issues = validateQuestionBank([single, { ...multiple, id: single.id }], topics);
  assert.ok(issues.some(issue => issue.path === "questions[1].id"));
});

test("topic IDs and names are required and topic IDs cannot be repeated", () => {
  const issues = validateQuestionBank([single], [topics[0]!, topics[0]!, { id: " ", name: "" }]);
  for (const path of ["topics[1].id", "topics[2].id", "topics[2].name"]) {
    assert.ok(issues.some(issue => issue.path === path), path);
  }
});

test("empty question banks and topic lists are rejected", () => {
  const issues = validateQuestionBank([], []);
  assert.deepEqual(issues.map(issue => issue.path), ["topics", "questions"]);
});

const invalidCases: { name: string; question: ExamQuestion; field: string }[] = [
  { name: "empty question ID", question: { ...single, id: " " }, field: "id" },
  { name: "empty question prompt", question: { ...single, prompt: "\n " }, field: "prompt" },
  { name: "unknown topic", question: { ...single, topicId: "missing" }, field: "topicId" },
  { name: "choice with too few options", question: { ...single, options: single.options.slice(0, 1) }, field: "options" },
  { name: "duplicate choice IDs", question: { ...single, options: [single.options[0]!, single.options[0]!] }, field: "options[1].id" },
  { name: "empty option ID", question: { ...single, options: [{ id: "", text: "Empty ID" }, single.options[1]!] }, field: "options[0].id" },
  { name: "empty option label", question: { ...single, options: [{ id: "a", text: " " }, single.options[1]!] }, field: "options[0].text" },
  { name: "missing single-choice solution", question: { ...single, correctOptionIds: [] }, field: "correctOptionIds" },
  { name: "multiple single-choice solutions", question: { ...single, correctOptionIds: ["a", "b"] }, field: "correctOptionIds" },
  { name: "nonexistent choice solution", question: { ...single, correctOptionIds: ["missing"] }, field: "correctOptionIds[0]" },
  { name: "missing multiple-choice solution", question: { ...multiple, correctOptionIds: [] }, field: "correctOptionIds" },
  { name: "duplicate multiple-choice solution", question: { ...multiple, correctOptionIds: ["a", "a"] }, field: "correctOptionIds" },
  { name: "empty true-false question", question: { ...trueFalse, statements: [] }, field: "statements" },
  { name: "duplicate true-false statement", question: { ...trueFalse, statements: [trueFalse.statements[0]!, trueFalse.statements[0]!] }, field: "statements[1].id" },
  { name: "empty statement text", question: { ...trueFalse, statements: [{ id: "a", text: "", correct: false }] }, field: "statements[0].text" },
  { name: "too few matching pairs", question: { ...matching, pairs: [] }, field: "pairs" },
  { name: "duplicate matching IDs", question: { ...matching, pairs: [matching.pairs[0]!, matching.pairs[0]!] }, field: "pairs[1].id" },
  { name: "empty matching left side", question: { ...matching, pairs: [{ ...matching.pairs[0]!, left: "" }, matching.pairs[1]!] }, field: "pairs[0].left" },
  { name: "empty matching right side", question: { ...matching, pairs: [{ ...matching.pairs[0]!, right: "" }, matching.pairs[1]!] }, field: "pairs[0].right" },
  { name: "too few groups", question: { ...grouping, groups: [] }, field: "groups" },
  { name: "duplicate group IDs", question: { ...grouping, groups: [grouping.groups[0]!, grouping.groups[0]!] }, field: "groups[1].id" },
  { name: "empty grouping task", question: { ...grouping, items: [] }, field: "items" },
  { name: "unknown target group", question: { ...grouping, items: [{ id: "a", text: "Item", correctGroupId: "missing" }] }, field: "items[0].correctGroupId" },
  { name: "duplicate grouping items", question: { ...grouping, items: [grouping.items[0]!, grouping.items[0]!] }, field: "items[1].id" },
  { name: "empty grouping item text", question: { ...grouping, items: [{ ...grouping.items[0]!, text: " " }] }, field: "items[0].text" },
  { name: "too few ordering items", question: { ...ordering, items: [] }, field: "items" },
  { name: "duplicate ordering item IDs", question: { ...ordering, items: [ordering.items[0]!, ordering.items[0]!] }, field: "items[1].id" },
  { name: "missing ordering solution item", question: { ...ordering, correctOrderIds: ["a", "b"] }, field: "correctOrderIds" },
  { name: "duplicate ordering solution item", question: { ...ordering, correctOrderIds: ["a", "a", "c"] }, field: "correctOrderIds" },
  { name: "unknown ordering solution item", question: { ...ordering, correctOrderIds: ["a", "b", "missing"] }, field: "correctOrderIds[2]" },
  { name: "empty fill-in question", question: { ...fillIn, statements: [] }, field: "statements" },
  { name: "duplicate fill-in statement IDs", question: { ...fillIn, statements: [fillIn.statements[0]!, fillIn.statements[0]!] }, field: "statements[1].id" },
  { name: "fill-in statement without blanks", question: fillWith(["Text only"]), field: "statements[0].parts" },
  { name: "duplicate blank IDs within a statement", question: fillWith([blank, blank]), field: "statements[0].parts[1].id" },
  { name: "empty blank ID", question: fillWith([{ ...blank, id: " " }]), field: "statements[0].parts[0].id" },
  { name: "empty blank accessibility label", question: fillWith([{ ...blank, label: " " }]), field: "statements[0].parts[0].label" },
  { name: "blank with too few options", question: fillWith([{ ...blank, options: [] }]), field: "statements[0].parts[0].options" },
  { name: "unknown blank solution", question: fillWith([{ ...blank, correctOptionId: "missing" }]), field: "statements[0].parts[0].correctOptionId" },
];

for (const { name, question, field } of invalidCases) {
  test(`rejects ${name} and reports its exact location`, () => {
    const issues = validateQuestionBank([question], topics);
    assert.ok(issues.some(issue => issue.path === `questions[0].${field}`), JSON.stringify(issues));
    if (field !== "id") assert.ok(issues.some(issue => issue.questionId === question.id));
  });
}

test("runtime boolean and question-type checks report invalid typed data", () => {
  const invalidBoolean = { ...trueFalse, statements: [{ id: "a", text: "Statement", correct: "false" }] } as unknown as ExamQuestion;
  assert.ok(validateQuestionBank([invalidBoolean], topics).some(issue => issue.path.endsWith(".correct")));
  const invalidType = { ...single, type: "unsupported" } as unknown as ExamQuestion;
  assert.ok(validateQuestionBank([invalidType], topics).some(issue => issue.path.endsWith(".type")));
});

test("validation collects multiple errors and the assertion includes actionable locations", () => {
  const question = { ...single, prompt: "", topicId: "missing", correctOptionIds: ["unknown"] };
  const issues = validateQuestionBank([question], topics);
  assert.equal(issues.length, 3);
  assert.throws(() => assertValidQuestionBank([question], topics), (error: unknown) => {
    assert.ok(error instanceof Error);
    assert.ok(error.message.includes("[single] questions[0].prompt"));
    assert.ok(error.message.includes("questions[0].topicId"));
    assert.ok(error.message.includes("questions[0].correctOptionIds[0]"));
    return true;
  });
});
