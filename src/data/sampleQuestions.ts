import type { ExamQuestion, Topic } from "../types/question";

export const topics: Topic[] = [
  { id: "apolastan", name: "Ápolástani ismeretek" },
  { id: "vitalis", name: "Betegmegfigyelés és vitális paraméterek" },
  { id: "testmukodes", name: "Emberi test működése" },
];

export const sampleQuestions: ExamQuestion[] = [
  {
    id: "q1",
    topicId: "vitalis",
    type: "single_choice",
    prompt: "Melyik érték tekinthető normális nyugalmi felnőtt pulzusnak?",
    options: [
      { id: "a", text: "20-40/perc" },
      { id: "b", text: "60-100/perc" },
      { id: "c", text: "120-160/perc" },
      { id: "d", text: "180-220/perc" },
    ],
    correctOptionIds: ["b"],
    explanation:
      "Felnőtt nyugalmi pulzusnál általánosan a 60-100/perc tartományt tanítják.",
  },
  {
    id: "q2",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Melyik tevékenység tartozik az alapvető higiénés szabályok közé?",
    options: [
      { id: "a", text: "Kézfertőtlenítés betegellátás előtt és után" },
      {
        id: "b",
        text: "Védőkesztyű használata minden helyzetben kézmosás helyett",
      },
      {
        id: "c",
        text: "Szennyezett eszközök tárolása tiszta eszközök mellett",
      },
      { id: "d", text: "Kézmosás elhagyása, ha gyorsan dolgozunk" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "q3",
    topicId: "testmukodes",
    type: "single_choice",
    prompt: "Melyik állítás igaz az artériás vérre?",
    options: [
      { id: "a", text: "Általában oxigéndúsabb, mint a vénás vér" },
      { id: "b", text: "Mindig sötétebb színű, mint a vénás vér" },
      { id: "c", text: "Csak a májban található" },
      { id: "d", text: "Nem vesz részt az oxigénszállításban" },
    ],
    correctOptionIds: ["a"],
  },
];
