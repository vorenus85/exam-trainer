import { test } from "node:test";
import assert from "node:assert/strict";
import { shuffle } from "../src/utils/shuffle.ts";

test("shuffle is deterministic with an injected random source and preserves its input", () => {
  const items = Object.freeze([1, 2, 3, 4]);
  const result = shuffle(items, () => 0);
  assert.deepEqual(result, [2, 3, 4, 1]);
  assert.deepEqual(items, [1, 2, 3, 4]);
  assert.notEqual(result, items);
});

test("shuffle preserves duplicates and all values", () => {
  const items = [1, 1, 2, 3, 3];
  assert.deepEqual(shuffle(items, () => 0.5).sort(), items);
});

test("empty and singleton inputs need no random number and return a copy", () => {
  const unexpected = () => { throw new Error("Random source must not be called"); };
  for (const items of [[], [1]]) {
    const result = shuffle(items, unexpected);
    assert.deepEqual(result, items);
    assert.notEqual(result, items);
  }
});

test("a random source close to one is supported", () => {
  assert.deepEqual(shuffle([1, 2, 3], () => 0.999999), [1, 2, 3]);
});
