import { test } from "node:test";
import assert from "node:assert/strict";
import { getCorrectAnswerText } from "../src/domain/answerFormatting.ts";
import { fillIn, grouping, matching, multiple, ordering, single, trueFalse } from "./fixtures.ts";

const examples = [
  [single, "Beta"],
  [multiple, "Alpha, Gamma"],
  [trueFalse, "First — Hamis; Second — Igaz"],
  [matching, "1–A: One — Alpha; 2–B: Two — Beta"],
  [grouping, "Group A: One, Two; Group B: Three"],
  [ordering, "1. First → 2. Second → 3. Third"],
  [fillIn, "The Alpha and Gamma. Then Beta."],
] as const;

for (const [question, expected] of examples) {
  test(`${question.type}: solution text preserves the correct order and surrounding sentence`, () => {
    const before = structuredClone(question);
    assert.equal(getCorrectAnswerText(question), expected);
    assert.deepEqual(question, before);
  });
}

test("matching solution letters follow the shuffled display order", () => {
  const displayOrder = ["b", "a"];
  Object.freeze(displayOrder);
  assert.equal(getCorrectAnswerText(matching, displayOrder), "1–B: One — Alpha; 2–A: Two — Beta");
  assert.deepEqual(displayOrder, ["b", "a"]);
});
