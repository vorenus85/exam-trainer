import type { ExamQuestion, Topic } from "../types/question";

import { apolastanQuestions } from "./apolastanQuestions";
import { gyogyszerelesiQuestions } from "./gyogyszerelesiQuestions";
import { testmukodesQuestions } from "./testmukodesQuestions";
import { vitalisQuestions } from "./vitalisQuestions";
import { tarsadalomtudomanyiQuestions } from "./tarsadalomtudomanyiQuestions";

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
