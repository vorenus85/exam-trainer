import { test } from "node:test";
import type { TestContext } from "node:test";
import assert from "node:assert/strict";
import { effectScope } from "vue";
import { useCountdown } from "../src/composables/useCountdown.ts";

function setup(t: TestContext, seconds: number) {
  t.mock.timers.enable({ apis: ["Date", "setInterval"] });
  const expired = t.mock.fn();
  const scope = effectScope();
  const countdown = scope.run(() => useCountdown(seconds, expired))!;
  t.after(() => scope.stop());
  return { countdown, expired, scope };
}

test("countdown starts idle, formats minutes and decrements after starting", (t) => {
  const { countdown } = setup(t, 65);
  assert.equal(countdown.formattedTimeRemaining.value, "1:05");
  t.mock.timers.tick(2000);
  assert.equal(countdown.timeRemaining.value, 65);
  countdown.start();
  t.mock.timers.tick(6000);
  assert.equal(countdown.timeRemaining.value, 59);
  assert.equal(countdown.formattedTimeRemaining.value, "0:59");
});

test("expiry stops at zero and notifies exactly once", (t) => {
  const { countdown, expired } = setup(t, 2);
  countdown.start();
  t.mock.timers.tick(1000);
  assert.equal(expired.mock.callCount(), 0);
  t.mock.timers.tick(1000);
  assert.equal(countdown.timeRemaining.value, 0);
  assert.equal(expired.mock.callCount(), 1);
  t.mock.timers.tick(10000);
  assert.equal(expired.mock.callCount(), 1);
});

test("stop freezes the displayed value and reset restores the duration", (t) => {
  const { countdown, expired } = setup(t, 4);
  countdown.start();
  t.mock.timers.tick(1000);
  countdown.stop();
  t.mock.timers.tick(10000);
  assert.equal(countdown.timeRemaining.value, 3);
  assert.equal(expired.mock.callCount(), 0);
  countdown.reset();
  assert.equal(countdown.timeRemaining.value, 4);
});

test("starting twice replaces the old timer", (t) => {
  const { countdown, expired } = setup(t, 4);
  countdown.start();
  t.mock.timers.tick(2000);
  countdown.start();
  t.mock.timers.tick(3000);
  assert.equal(countdown.timeRemaining.value, 1);
  assert.equal(expired.mock.callCount(), 0);
  t.mock.timers.tick(1000);
  assert.equal(expired.mock.callCount(), 1);
});

test("disposing the Vue scope cancels the timer", (t) => {
  const { countdown, expired, scope } = setup(t, 2);
  countdown.start();
  scope.stop();
  t.mock.timers.tick(10000);
  assert.equal(countdown.timeRemaining.value, 2);
  assert.equal(expired.mock.callCount(), 0);
});

test("a late tick uses elapsed wall time instead of counting callbacks", (t) => {
  const { countdown, expired } = setup(t, 10);
  countdown.start();
  t.mock.timers.setTime(Date.now() + 12000);
  t.mock.timers.tick(1000);
  assert.equal(countdown.timeRemaining.value, 0);
  assert.equal(expired.mock.callCount(), 1);
});
