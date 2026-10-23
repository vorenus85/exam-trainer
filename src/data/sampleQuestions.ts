import type { ExamQuestion, Topic } from "../types/question.ts";

import { apolastanQuestions } from "./apolastanQuestions.ts";
import { gyogyszerelesiQuestions } from "./gyogyszerelesiQuestions.ts";
import { testmukodesQuestions } from "./testmukodesQuestions.ts";
import { vitalisQuestions } from "./vitalisQuestions.ts";
import { tarsadalomtudomanyiQuestions } from "./tarsadalomtudomanyiQuestions.ts";

export const topics: Topic[] = [
  { id: "apolastan", name: "Ápolástani ismeretek" },
  { id: "vitalis", name: "Betegmegfigyelés és vitális paraméterek" },
  { id: "testmukodes", name: "Emberi test működése" },
  { id: "gyogyszerelesi_ismeretek", name: "Gyógyszerelési ismeretek" },
  {
    id: "tarsadalomtudomanyi_ismeretek",
    name: "Társadalomtudományi ismeretek",
  },
];

export const sampleQuestions: ExamQuestion[] = [
  ...apolastanQuestions,
  ...vitalisQuestions,
  ...testmukodesQuestions,
  ...gyogyszerelesiQuestions,
  ...tarsadalomtudomanyiQuestions,
];
