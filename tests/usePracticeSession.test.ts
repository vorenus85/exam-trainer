import { test } from "node:test";
import type { TestContext } from "node:test";
import assert from "node:assert/strict";
import { effectScope, toRaw } from "vue";
import { usePracticeSession } from "../src/composables/usePracticeSession.ts";
import { getAllQuestionTypes } from "../src/config/questionTypes.ts";
import { PRACTICE_TIME_LIMIT_SECONDS, SECONDS_PER_QUESTION } from "../src/config/practice.ts";
import type { ExamQuestion } from "../src/types/question.ts";
import { cases, single } from "./fixtures.ts";

function setup(t: TestContext, bank: readonly ExamQuestion[] = cases.map(c => c.question)) {
  t.mock.timers.enable({ apis: ["Date", "setInterval"] });
  const scope = effectScope();
  const session = scope.run(() => usePracticeSession(bank, () => 0))!;
  t.after(() => scope.stop());
  return { session, scope };
}

function startModule(session: ReturnType<typeof usePracticeSession>) {
  session.selectedMode.value = "module";
  session.selectedTopicId.value = "apolastan";
  session.startPractice();
}

function correctCurrent(session: ReturnType<typeof usePracticeSession>) {
  const question = session.currentQuestion.value!;
  const fixture = cases.find(c => c.question.id === question.id)!;
  session.updateAnswer(structuredClone(fixture.correct[question.id]!));
}

test("setup requires a mode, module and matching available question types", (t) => {
  const { session } = setup(t);
  assert.equal(session.stage.value, "setup");
  assert.equal(session.canStart.value, false);
  session.startPractice();
  assert.equal(session.questions.value.length, 0);
  session.selectedMode.value = "module";
  assert.equal(session.canStart.value, false);
  session.selectedTopicId.value = "apolastan";
  assert.equal(session.availableCount.value, 7);
  session.selectedQuestionTypes.value = [];
  assert.equal(session.canStart.value, false);
  session.selectedQuestionTypes.value = ["fill_in"];
  assert.equal(session.availableCount.value, 1);
  assert.equal(session.canStart.value, true);
});

test("starting initializes answers and display orders and locks the selected question list", (t) => {
  const { session } = setup(t);
  startModule(session);
  assert.equal(session.stage.value, "practice");
  assert.equal(session.activeMode.value, "module");
  assert.equal(session.result.value.answeredCount, 0);
  assert.equal(session.progressPercent.value, 0);
  for (const question of session.questions.value) assert.equal(session.answers.value[question.id]?.type, question.type);
  const ids = session.questions.value.map(q => q.id);
  const orders = structuredClone(toRaw(session.optionOrders.value));
  session.selectedQuestionTypes.value = [];
  session.selectedMode.value = "exam";
  session.startPractice();
  assert.deepEqual(session.questions.value.map(q => q.id), ids);
  assert.deepEqual(session.optionOrders.value, orders);
  assert.equal(session.activeMode.value, "module");
});

test("exam mode clears the module selection and module practice selects 30 questions", (t) => {
  const bank = Array.from({ length: 40 }, (_, i) => ({ ...single, id: `q-${i}` }));
  const { session } = setup(t, bank);
  session.selectedMode.value = "module";
  session.selectedTopicId.value = "apolastan";
  session.selectedMode.value = "exam";
  assert.equal(session.selectedTopicId.value, null);
  startModule(session);
  assert.equal(session.questions.value.length, 30);
  assert.equal(new Set(session.questions.value.map(q => q.id)).size, 30);
});

test("chosen module count is used at start, remains fixed during practice and resets for a new round", (t) => {
  const bank = Array.from({ length: 40 }, (_, i) => ({ ...single, id: `q-${i}` }));
  const { session } = setup(t, bank);
  assert.equal(session.selectedQuestionCount.value, 30);
  session.selectedQuestionCount.value = 10;
  startModule(session);
  assert.equal(session.questions.value.length, 10);
  assert.equal(session.timeRemaining.value, 10 * 60);
  session.selectedQuestionCount.value = 5;
  assert.equal(session.questions.value.length, 10);
  assert.equal(session.timeRemaining.value, 10 * 60);
  session.restartPractice();
  assert.equal(session.selectedQuestionCount.value, 30);
  startModule(session);
  assert.equal(session.questions.value.length, 30);
  assert.equal(session.timeRemaining.value, 30 * 60);
});

for (const count of [10, 20, 30]) {
  test(`${count} module questions receive ${count} minutes`, (t) => {
    const bank = Array.from({ length: 40 }, (_, i) => ({ ...single, id: `q-${i}` }));
    const { session } = setup(t, bank);
    session.selectedQuestionCount.value = count;
    startModule(session);
    assert.equal(session.questions.value.length, count);
    assert.equal(session.timeRemaining.value, count * 60);
    assert.equal(session.formattedTimeRemaining.value, `${count}:00`);
  });
}

test("time limit follows the actual number of questions after filtering", (t) => {
  const { session } = setup(t);
  session.selectedQuestionTypes.value = ["fill_in"];
  startModule(session);
  assert.equal(session.questions.value.length, 1);
  assert.equal(session.timeRemaining.value, 60);
});

test("a full exam receives 30 minutes independently of the module count", (t) => {
  const bank = ["testmukodes", "vitalis", "gyogyszerelesi_ismeretek", "apolastan", "tarsadalomtudomanyi_ismeretek"]
    .flatMap(topicId => Array.from({ length: 10 }, (_, i) => ({ ...single, id: `${topicId}-${i}`, topicId })));
  const { session } = setup(t, bank);
  session.selectedMode.value = "exam";
  session.selectedQuestionCount.value = 10;
  session.startPractice();
  assert.equal(session.questions.value.length, 30);
  assert.equal(session.timeRemaining.value, 30 * 60);
});

test("navigation requires a complete answer and preserves the previous answer", (t) => {
  const { session } = setup(t);
  startModule(session);
  session.previousQuestion();
  assert.equal(session.currentIndex.value, 0);
  session.nextQuestion();
  assert.equal(session.currentIndex.value, 0);
  correctCurrent(session);
  const answer = session.currentAnswer.value;
  session.nextQuestion();
  assert.equal(session.currentIndex.value, 1);
  session.previousQuestion();
  assert.equal(session.currentAnswer.value, answer);
  assert.equal(session.result.value.answeredCount, 1);
});

test("a wrong answer type does not overwrite the current answer", (t) => {
  const { session } = setup(t, [single]);
  startModule(session);
  const before = session.currentAnswer.value;
  session.updateAnswer({ type: "ordering", orderIds: ["a"] });
  assert.equal(session.currentAnswer.value, before);
});

test("answering every question finishes once and stops the timer", (t) => {
  const { session } = setup(t);
  startModule(session);
  for (let index = 0; index < cases.length; index += 1) {
    correctCurrent(session);
    session.nextQuestion();
  }
  assert.equal(session.stage.value, "results");
  assert.equal(session.result.value.scorePercent, 100);
  assert.equal(session.progressPercent.value, 100);
  const answer = session.currentAnswer.value;
  const remaining = session.timeRemaining.value;
  const index = session.currentIndex.value;
  correctCurrent(session);
  session.previousQuestion();
  session.nextQuestion();
  t.mock.timers.tick(10000);
  assert.equal(session.currentAnswer.value, answer);
  assert.equal(session.currentIndex.value, index);
  assert.equal(session.timeRemaining.value, remaining);
});

test("expiry finishes incomplete work and prevents later answer edits", (t) => {
  const { session } = setup(t);
  startModule(session);
  correctCurrent(session);
  t.mock.timers.tick((session.questions.value.length * SECONDS_PER_QUESTION - 1) * 1000);
  assert.equal(session.stage.value, "practice");
  assert.equal(session.timeRemaining.value, 1);
  t.mock.timers.tick(1000);
  assert.equal(session.stage.value, "results");
  assert.equal(session.timeRemaining.value, 0);
  assert.equal(session.result.value.correctCount, 1);
  assert.equal(session.result.value.incorrectQuestions.length, 6);
});

test("restart clears answers, navigation, filters and the previous timer", (t) => {
  const { session } = setup(t);
  startModule(session);
  correctCurrent(session);
  session.nextQuestion();
  t.mock.timers.tick(1000);
  session.restartPractice();
  assert.equal(session.stage.value, "setup");
  assert.equal(session.currentIndex.value, 0);
  assert.equal(session.selectedMode.value, null);
  assert.equal(session.selectedTopicId.value, null);
  assert.deepEqual(session.selectedQuestionTypes.value, getAllQuestionTypes());
  assert.deepEqual(session.answers.value, {});
  assert.deepEqual(session.optionOrders.value, {});
  assert.deepEqual(session.questions.value, []);
  t.mock.timers.tick(PRACTICE_TIME_LIMIT_SECONDS * 1000);
  assert.equal(session.stage.value, "setup");
  assert.equal(session.timeRemaining.value, PRACTICE_TIME_LIMIT_SECONDS);
  startModule(session);
  assert.equal(session.result.value.answeredCount, 0);
});

test("disposing a session releases its timer", (t) => {
  const { session, scope } = setup(t);
  startModule(session);
  const initialTime = session.timeRemaining.value;
  scope.stop();
  t.mock.timers.tick(PRACTICE_TIME_LIMIT_SECONDS * 1000);
  assert.equal(session.timeRemaining.value, initialTime);
  assert.equal(session.stage.value, "practice");
});
