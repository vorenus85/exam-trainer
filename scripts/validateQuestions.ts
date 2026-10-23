import { sampleQuestions, topics } from "../src/data/sampleQuestions.ts";
import { assertValidQuestionBank } from "../src/domain/questionValidation.ts";

assertValidQuestionBank(sampleQuestions, topics);
console.log(`Kérdésbank rendben: ${sampleQuestions.length} kérdés, ${topics.length} témakör.`);
