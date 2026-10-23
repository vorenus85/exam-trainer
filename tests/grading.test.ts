import { test } from "node:test";
import assert from "node:assert/strict";
import { calculatePercent, getGrade, getGradeRanges, getPracticeResult } from "../src/domain/grading.ts";
import { cases } from "./fixtures.ts";

for (const [percent, expected] of [
  [100, "jeles"], [88, "jeles"], [87, "jó"], [75, "jó"], [74, "közepes"],
  [62, "közepes"], [61, "elégséges"], [51, "elégséges"], [50, "elégtelen"], [0, "elégtelen"],
] as const) {
  test(`grade boundary ${percent}%: ${expected}`, () => assert.equal(getGrade(percent), expected));
}

test("percentages are rounded as before, including the existing 26/30 grading rule", () => {
  assert.equal(calculatePercent(26, 30), 87);
  assert.equal(getGrade(calculatePercent(26, 30)), "jó");
  assert.equal(calculatePercent(27, 30), 90);
  assert.equal(getGrade(calculatePercent(27, 30)), "jeles");
  assert.equal(calculatePercent(1, 3), 33);
  assert.equal(calculatePercent(2, 3), 67);
});

test("empty practice has finite zero counts and score", () => {
  assert.equal(calculatePercent(0, 0), 0);
  assert.deepEqual(getPracticeResult([], {}), {
    answeredCount: 0, correctCount: 0, incorrectQuestions: [], scorePercent: 0, grade: "elégtelen",
  });
});

test("mixed results distinguish wrong answers from missing answers", () => {
  const questions = cases.map(({ question }) => question);
  const answers = { ...cases[0]!.correct, ...cases[1]!.wrong, ...cases[2]!.correct };
  const before = structuredClone(answers);
  const result = getPracticeResult(questions, answers);
  assert.equal(result.answeredCount, 3);
  assert.equal(result.correctCount, 2);
  assert.equal(result.scorePercent, 29);
  assert.equal(result.grade, "elégtelen");
  assert.deepEqual(result.incorrectQuestions.map(q => q.id), questions.filter((_, i) => i !== 0 && i !== 2).map(q => q.id));
  assert.deepEqual(answers, before);
});

test("all question types can earn full marks together", () => {
  const questions = cases.map(({ question }) => question);
  const answers = Object.assign({}, ...cases.map(({ correct }) => correct));
  const result = getPracticeResult(questions, answers);
  assert.equal(result.answeredCount, 7);
  assert.equal(result.correctCount, 7);
  assert.equal(result.scorePercent, 100);
  assert.equal(result.grade, "jeles");
  assert.deepEqual(result.incorrectQuestions, []);
});

test("displayed grading ranges use the same thresholds and rounding as the result", () => {
  for (const total of [1, 2, 7, 30]) {
    const ranges = getGradeRanges(total);
    for (let points = 0; points <= total; points += 1) {
      const actual = ranges.filter((range) => range.minPoints !== null && range.maxPoints !== null
        && points >= range.minPoints && points <= range.maxPoints);
      assert.equal(actual.length, 1);
      assert.equal(actual[0]!.label, getGrade(calculatePercent(points, total)));
    }
  }
  assert.equal(getGradeRanges(30).find(range => range.label === "jeles")?.minPoints, 27);
});
