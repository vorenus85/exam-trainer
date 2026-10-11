import type { ExamQuestion } from "../types/question";

export const tarsadalomtudomanyiQuestions: ExamQuestion[] = [
  {
    id: "tarsadalomtudomanyi-001",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt: "Mit jelent az empátia az egészségügyi ellátásban?",
    options: [
      {
        id: "a",
        text: "A beteg érzéseinek és helyzetének megértésére való törekvést",
      },
      { id: "b", text: "A beteg panaszainak figyelmen kívül hagyását" },
      { id: "c", text: "A beteg helyett történő döntést minden helyzetben" },
      { id: "d", text: "A kommunikáció teljes mellőzését" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-002",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt: "Miért fontos a hatékony kommunikáció a betegellátásban?",
    options: [
      {
        id: "a",
        text: "Mert segíti a bizalom kialakulását és az információk pontos átadását",
      },
      { id: "b", text: "Mert helyettesíti a szakmai tudást" },
      { id: "c", text: "Mert így nem szükséges dokumentálni" },
      {
        id: "d",
        text: "Mert csak a hozzátartozókkal való beszélgetésnél fontos",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-003",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt: "Mit jelent a titoktartási kötelezettség?",
    options: [
      { id: "a", text: "A beteggel kapcsolatos bizalmas információk védelmét" },
      { id: "b", text: "A beteg adatainak szabad megosztását bárkivel" },
      { id: "c", text: "Csak a gyógyszerek nevének titokban tartását" },
      { id: "d", text: "A dokumentáció elhagyását" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-004",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Melyik magatartás felel meg a beteg emberi méltóságának tiszteletben tartásának?",
    options: [
      {
        id: "a",
        text: "A beteg intimitásának és személyiségi jogainak védelme",
      },
      { id: "b", text: "A beteg megszégyenítése mások előtt" },
      { id: "c", text: "A beteg kérdéseinek elutasítása" },
      {
        id: "d",
        text: "A beteg véleményének figyelmen kívül hagyása minden esetben",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-005",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt: "Mit jelent az együttműködés az egészségügyi csapatban?",
    options: [
      {
        id: "a",
        text: "A feladatok összehangolt végzését és az információk megfelelő átadását",
      },
      { id: "b", text: "A munkatársak tájékoztatásának mellőzését" },
      { id: "c", text: "A szakmai szerepek figyelmen kívül hagyását" },
      { id: "d", text: "A beteg kizárását minden döntésből" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-006",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt: "Miért fontos a betegjogok ismerete?",
    options: [
      {
        id: "a",
        text: "Mert segíti a jogszerű és tiszteletteljes betegellátást",
      },
      {
        id: "b",
        text: "Mert így az ellátó figyelmen kívül hagyhatja a beteg akaratát",
      },
      { id: "c", text: "Mert csak jogászoknak szükséges" },
      { id: "d", text: "Mert a betegjogok nem kapcsolódnak az egészségügyhöz" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-007",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt: "Mit jelent a kulturális érzékenység a betegellátásban?",
    options: [
      {
        id: "a",
        text: "A beteg kulturális hátterének és szokásainak tiszteletben tartását",
      },
      { id: "b", text: "A beteg szokásainak kigúnyolását" },
      { id: "c", text: "A kommunikáció kerülését eltérő kultúrájú betegnél" },
      { id: "d", text: "A beteg azonos ellátásának megtagadását" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-008",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt: "Melyik példa mutat asszertív kommunikációt?",
    options: [
      {
        id: "a",
        text: "A saját álláspont udvarias, egyértelmű kifejezése mások tiszteletben tartásával",
      },
      { id: "b", text: "A másik fél lekiabálása" },
      { id: "c", text: "A vélemény teljes elhallgatása félelemből" },
      { id: "d", text: "A beteg hibáztatása kérdés esetén" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-009",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt: "Mi tartozik a konfliktuskezelés alapjai közé?",
    options: [
      {
        id: "a",
        text: "A probléma nyugodt megbeszélése és a megoldás keresése",
      },
      { id: "b", text: "A konfliktus szándékos fokozása" },
      { id: "c", text: "A másik fél megszégyenítése" },
      { id: "d", text: "Az információk eltitkolása minden érintett elől" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-010",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt: "Melyik állítás igaz az egészségügyi dolgozó felelősségére?",
    options: [
      {
        id: "a",
        text: "Feladatait szakmai szabályok és etikai elvek szerint kell végeznie",
      },
      { id: "b", text: "Nem kell figyelembe vennie a beteg biztonságát" },
      { id: "c", text: "A dokumentációt tetszés szerint elhagyhatja" },
      { id: "d", text: "A beteg adatait szabadon megoszthatja ismerősökkel" },
    ],
    correctOptionIds: ["a"],
  },
];
