import type { QuestionAnswer } from "../src/types/question.ts";

// Checked by tsc as part of npm test. These invalid shapes must stay invalid.
// @ts-expect-error A single-choice answer cannot be a primitive string.
const primitive: QuestionAnswer = "a";
// @ts-expect-error A multiple-choice answer needs selectedOptionIds, not selectedOptionId.
const mismatchedFields: QuestionAnswer = { type: "multiple_choice", selectedOptionId: "a" };
// @ts-expect-error True-false answers must store each statement separately.
const legacyTrueFalse: QuestionAnswer = { type: "true_false", value: true };
// @ts-expect-error Fill-in answers must nest blanks under their statement ID.
const flatFillIn: QuestionAnswer = { type: "fill_in", values: { blank: "a" } };

void [primitive, mismatchedFields, legacyTrueFalse, flatFillIn];
