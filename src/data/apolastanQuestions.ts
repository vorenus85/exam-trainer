import type { ExamQuestion } from "../types/question";

export const apolastanQuestions: ExamQuestion[] = [
  {
    id: "apolastan-001",
    topicId: "apolastan",
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
    id: "apolastan-002",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Mi az ápolás egyik alapvető célja?",
    options: [
      { id: "a", text: "A beteg állapotának figyelmen kívül hagyása" },
      { id: "b", text: "A beteg szükségleteinek felismerése és támogatása" },
      { id: "c", text: "Csak az orvosi dokumentáció kitöltése" },
      { id: "d", text: "A beteg önállóságának csökkentése" },
    ],
    correctOptionIds: ["b"],
    explanation:
      "Az ápolás célja a beteg szükségleteinek felismerése, támogatása és az állapotának megfelelő ellátás segítése.",
  },
  {
    id: "apolastan-003",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Melyik tartozik az alapvető betegmegfigyelési feladatok közé?",
    options: [
      {
        id: "a",
        text: "A beteg közérzetének és állapotváltozásainak észlelése",
      },
      { id: "b", text: "A beteg panaszainak figyelmen kívül hagyása" },
      { id: "c", text: "A gyógyszerelés önálló megváltoztatása" },
      { id: "d", text: "A kórlap megsemmisítése" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-004",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Mit jelent a beteg biztonságos mozgatása?",
    options: [
      { id: "a", text: "A beteg gyors, előkészítés nélküli áthelyezését" },
      {
        id: "b",
        text: "A beteg és az ápoló testi épségének védelmét mozgatás közben",
      },
      {
        id: "c",
        text: "A beteg mozgatásának teljes mellőzését minden esetben",
      },
      { id: "d", text: "A beteg utasításainak figyelmen kívül hagyását" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-005",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Melyik eszköz használható a beteg testhőmérsékletének mérésére?",
    options: [
      { id: "a", text: "Fonendoszkóp" },
      { id: "b", text: "Vérnyomásmérő mandzsetta" },
      { id: "c", text: "Lázmérő" },
      { id: "d", text: "Pulzoximéter" },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "apolastan-006",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Miért fontos a kézhigiéné a betegellátás során?",
    options: [
      { id: "a", text: "Mert csökkenti a kórokozók terjedésének esélyét" },
      { id: "b", text: "Mert helyettesíti az összes védőeszközt" },
      { id: "c", text: "Mert csak adminisztratív előírás" },
      { id: "d", text: "Mert csak műtétek előtt szükséges" },
    ],
    correctOptionIds: ["a"],
    explanation:
      "A megfelelő kézhigiéné az egyik legfontosabb fertőzésmegelőzési lépés.",
  },
  {
    id: "apolastan-007",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Mit kell tenni, ha a beteg állapotában hirtelen romlás észlelhető?",
    options: [
      { id: "a", text: "Meg kell várni a következő műszakot" },
      { id: "b", text: "Értesíteni kell az illetékes egészségügyi szakembert" },
      { id: "c", text: "A beteget magára kell hagyni pihenni" },
      { id: "d", text: "Nem szükséges dokumentálni az eseményt" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-008",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Melyik állítás igaz a beteg méltóságának megőrzésére?",
    options: [
      { id: "a", text: "Csak súlyos állapotú betegnél fontos" },
      {
        id: "b",
        text: "A beteg személyiségi jogait és intimitását tiszteletben kell tartani",
      },
      { id: "c", text: "Az ápolási feladatok közben nem számít" },
      { id: "d", text: "Csak hozzátartozó jelenlétében szükséges" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-009",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Mi tartozik az ápolási dokumentáció céljai közé?",
    options: [
      { id: "a", text: "Az ellátás folyamatának követhető rögzítése" },
      { id: "b", text: "A beteg adatainak nyilvánosságra hozatala" },
      { id: "c", text: "A megfigyelések kihagyása" },
      { id: "d", text: "A szakmai felelősség elrejtése" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-010",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Melyik helyzetben indokolt egyéni védőeszköz használata?",
    options: [
      {
        id: "a",
        text: "Ha fertőzésveszély vagy testváladékkal való érintkezés lehetősége áll fenn",
      },
      { id: "b", text: "Csak akkor, ha a beteg kéri" },
      { id: "c", text: "Csak adminisztráció közben" },
      { id: "d", text: "Soha, mert akadályozza az ellátást" },
    ],
    correctOptionIds: ["a"],
  },
];
