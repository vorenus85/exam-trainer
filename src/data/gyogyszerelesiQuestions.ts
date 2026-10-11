import type { ExamQuestion } from "../types/question";

export const gyogyszerelesiQuestions: ExamQuestion[] = [
  {
    id: "gyogyszerelesi-001",
    topicId: "gyogyszerelesi_ismeretek",
    type: "single_choice",
    prompt: "Mit jelent a gyógyszerelés során a „megfelelő beteg” elve?",
    options: [
      {
        id: "a",
        text: "A gyógyszert annak a betegnek kell beadni, akinek rendelték",
      },
      { id: "b", text: "A gyógyszert annak kell beadni, aki először kéri" },
      {
        id: "c",
        text: "A gyógyszert bármelyik hasonló panaszú beteg megkaphatja",
      },
      {
        id: "d",
        text: "A gyógyszert csak a hozzátartozó kérésére kell beadni",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "gyogyszerelesi-002",
    topicId: "gyogyszerelesi_ismeretek",
    type: "single_choice",
    prompt: "Miért fontos a gyógyszer nevének ellenőrzése beadás előtt?",
    options: [
      { id: "a", text: "Mert segít megelőzni a téves gyógyszer beadását" },
      { id: "b", text: "Mert így gyorsabban el lehet hagyni a dokumentálást" },
      { id: "c", text: "Mert csak a gyógyszer színe számít" },
      {
        id: "d",
        text: "Mert a név ellenőrzése csak adminisztratív formalitás",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "gyogyszerelesi-003",
    topicId: "gyogyszerelesi_ismeretek",
    type: "single_choice",
    prompt: "Mit kell ellenőrizni a gyógyszer beadása előtt?",
    options: [
      {
        id: "a",
        text: "A beteg azonosítását, a gyógyszert, az adagot, az időpontot és a beadási módot",
      },
      { id: "b", text: "Csak a gyógyszer dobozának színét" },
      { id: "c", text: "Csak azt, hogy a beteg éhes-e" },
      { id: "d", text: "Csak a szoba számát" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "gyogyszerelesi-004",
    topicId: "gyogyszerelesi_ismeretek",
    type: "single_choice",
    prompt: "Mit jelent a per os gyógyszerbevitel?",
    options: [
      { id: "a", text: "Szájon át történő gyógyszerbevitel" },
      { id: "b", text: "Bőr alá adott injekció" },
      { id: "c", text: "Vénába adott injekció" },
      { id: "d", text: "Belégzéssel történő gyógyszerbevitel" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "gyogyszerelesi-005",
    topicId: "gyogyszerelesi_ismeretek",
    type: "single_choice",
    prompt: "Miért kell figyelni a gyógyszer lejárati idejét?",
    options: [
      {
        id: "a",
        text: "Mert lejárt gyógyszer hatása és biztonságossága nem garantálható",
      },
      { id: "b", text: "Mert a lejárati idő csak díszítő adat" },
      { id: "c", text: "Mert a lejárt gyógyszer mindig erősebb hatású" },
      { id: "d", text: "Mert csak a csomagolás miatt fontos" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "gyogyszerelesi-006",
    topicId: "gyogyszerelesi_ismeretek",
    type: "single_choice",
    prompt:
      "Mit kell tenni, ha a beteg gyógyszerbeadás után rosszullétet jelez?",
    options: [
      {
        id: "a",
        text: "Jelezni kell az illetékes egészségügyi szakembernek és meg kell figyelni a beteget",
      },
      {
        id: "b",
        text: "Figyelmen kívül kell hagyni, mert minden gyógyszer okoz rosszullétet",
      },
      {
        id: "c",
        text: "Azonnal újabb adagot kell beadni ugyanabból a gyógyszerből",
      },
      { id: "d", text: "A dokumentációt ki kell törölni" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "gyogyszerelesi-007",
    topicId: "gyogyszerelesi_ismeretek",
    type: "single_choice",
    prompt: "Mit jelent a gyógyszer adagolása?",
    options: [
      {
        id: "a",
        text: "A beadandó gyógyszermennyiség meghatározását és alkalmazását az előírás szerint",
      },
      {
        id: "b",
        text: "A gyógyszer tetszőleges mennyiségben történő beadását",
      },
      { id: "c", text: "A gyógyszer csomagolásának kiválasztását" },
      { id: "d", text: "A gyógyszer színének megfigyelését" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "gyogyszerelesi-008",
    topicId: "gyogyszerelesi_ismeretek",
    type: "single_choice",
    prompt: "Miért fontos a gyógyszerbeadás dokumentálása?",
    options: [
      {
        id: "a",
        text: "Mert követhetővé teszi, hogy a beteg mikor és milyen gyógyszert kapott",
      },
      { id: "b", text: "Mert így nem kell ellenőrizni a beteg állapotát" },
      {
        id: "c",
        text: "Mert a dokumentáció helyettesíti a gyógyszer beadását",
      },
      { id: "d", text: "Mert csak akkor fontos, ha hiba történt" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "gyogyszerelesi-009",
    topicId: "gyogyszerelesi_ismeretek",
    type: "single_choice",
    prompt: "Melyik beadási mód történik a bőr alatti kötőszövetbe?",
    options: [
      { id: "a", text: "Subcutan beadás" },
      { id: "b", text: "Per os beadás" },
      { id: "c", text: "Inhaláció" },
      { id: "d", text: "Szemcsepp alkalmazása" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "gyogyszerelesi-010",
    topicId: "gyogyszerelesi_ismeretek",
    type: "single_choice",
    prompt: "Mit kell tenni, ha nem egyértelmű a gyógyszerrendelés?",
    options: [
      {
        id: "a",
        text: "Tisztázni kell az illetékes szakemberrel a beadás előtt",
      },
      { id: "b", text: "Találomra kell kiválasztani az adagot" },
      { id: "c", text: "A betegre kell bízni a döntést" },
      { id: "d", text: "Be kell adni azt, ami kéznél van" },
    ],
    correctOptionIds: ["a"],
  },
];
