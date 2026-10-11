import type { ExamQuestion, Topic } from "../types/question";

import { apolastanQuestions } from "./apolastanQuestions";
import { testmukodesQuestions } from "./testmukodesQuestions";
import { vitalisQuestions } from "./vitalisQuestions";
export const topics: Topic[] = [
  { id: "apolastan", name: "Ápolástani ismeretek" },
  { id: "vitalis", name: "Betegmegfigyelés és vitális paraméterek" },
  { id: "testmukodes", name: "Emberi test működése" },
];

export const sampleQuestions: ExamQuestion[] = [
  ...apolastanQuestions,
  ...vitalisQuestions,
  ...testmukodesQuestions,
];
