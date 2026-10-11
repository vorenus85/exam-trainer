import type { ExamQuestion } from "../types/question";

export const vitalisQuestions: ExamQuestion[] = [
  {
    id: "vitalis-001",
    topicId: "vitalis",
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
    id: "vitalis-002",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Melyik érték tekinthető általában normális nyugalmi felnőtt pulzusnak?",
    options: [
      { id: "a", text: "20-40/perc" },
      { id: "b", text: "60-100/perc" },
      { id: "c", text: "120-160/perc" },
      { id: "d", text: "180-220/perc" },
    ],
    correctOptionIds: ["b"],
    explanation:
      "Felnőtteknél a nyugalmi pulzus általában 60-100/perc közötti.",
  },
  {
    id: "vitalis-003",
    topicId: "vitalis",
    type: "single_choice",
    prompt: "Melyik eszközzel mérjük leggyakrabban a vérnyomást?",
    options: [
      { id: "a", text: "Lázmérővel" },
      { id: "b", text: "Fonendoszkóppal és vérnyomásmérővel" },
      { id: "c", text: "Pulzoximéterrel" },
      { id: "d", text: "Vizeletgyűjtő edénnyel" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "vitalis-004",
    topicId: "vitalis",
    type: "single_choice",
    prompt: "Mit jelezhet a testhőmérséklet emelkedése?",
    options: [
      { id: "a", text: "Fertőzés vagy gyulladás lehetőségét" },
      { id: "b", text: "Mindig normális állapotot" },
      { id: "c", text: "Csak éhséget" },
      { id: "d", text: "A légzés teljes leállását" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "vitalis-005",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Melyik vitális paraméterhez kapcsolódik a percenkénti légzésszám megfigyelése?",
    options: [
      { id: "a", text: "Pulzus" },
      { id: "b", text: "Légzés" },
      { id: "c", text: "Vérnyomás" },
      { id: "d", text: "Testtömeg" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "vitalis-006",
    topicId: "vitalis",
    type: "single_choice",
    prompt: "Mit mér a pulzoximéter?",
    options: [
      { id: "a", text: "A vér oxigéntelítettségét és gyakran a pulzust" },
      { id: "b", text: "A testmagasságot" },
      { id: "c", text: "A vizelet fajsúlyát" },
      { id: "d", text: "A vércukorszintet minden esetben" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "vitalis-007",
    topicId: "vitalis",
    type: "single_choice",
    prompt: "Miért fontos a vitális paraméterek rendszeres dokumentálása?",
    options: [
      { id: "a", text: "Mert segít követni a beteg állapotának változásait" },
      { id: "b", text: "Mert helyettesíti az orvosi vizsgálatot" },
      { id: "c", text: "Mert így nem kell kommunikálni a beteggel" },
      { id: "d", text: "Mert csak adminisztratív formalitás" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "vitalis-008",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Melyik állapot igényelhet fokozott figyelmet a betegmegfigyelés során?",
    options: [
      { id: "a", text: "Hirtelen kialakuló nehézlégzés" },
      { id: "b", text: "Jó étvágy változatlan közérzettel" },
      { id: "c", text: "Nyugodt alvás panasz nélkül" },
      { id: "d", text: "Normális testhőmérséklet" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "vitalis-009",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Melyik megfigyelés kapcsolódik közvetlenül a keringés állapotához?",
    options: [
      { id: "a", text: "Pulzus tapintása és értékelése" },
      { id: "b", text: "Hajszín megfigyelése" },
      { id: "c", text: "Ruhaméret feljegyzése" },
      { id: "d", text: "Cipőméret megkérdezése" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "vitalis-010",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Mit kell tenni, ha a mért vitális paraméter jelentősen eltér a megszokottól?",
    options: [
      {
        id: "a",
        text: "Jelezni kell az illetékes egészségügyi szakembernek és dokumentálni kell",
      },
      { id: "b", text: "El kell hallgatni, ha a beteg nem panaszkodik" },
      { id: "c", text: "A mérési eredményt ki kell törölni" },
      { id: "d", text: "Csak a műszak végén szabad foglalkozni vele" },
    ],
    correctOptionIds: ["a"],
  },
];
