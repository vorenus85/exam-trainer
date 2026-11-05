import type { ExamQuestion } from "../types/question.ts";

export const apolastanQuestions: ExamQuestion[] = [
  {
    id: "apolastan-090",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      {
        id: "a",
        text: "A beteg környezetének rendbetétele mindig kötelező étkezés előtt.",
        correct: true,
      },
      {
        id: "b",
        text: "Étkezéshez helyezzük kényelmes helyzetbe a beteget.",
        correct: true,
      },
    ],
    prompt:
      "Döntse el, hogy a beteg táplálására vonatkozó megállapítások igazak, vagy hamisak!",
  },
  {
    id: "apolastan-091",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      {
        id: "a",
        text: "Az ételt úgy helyezzük el, hogy ne lássa a beteg.",
        correct: false,
      },
      {
        id: "b",
        text: "Lassú tempóban etessük.",
        correct: true,
      },
    ],
    prompt:
      "Döntse el, hogy a beteg táplálására vonatkozó megállapítások igazak, vagy hamisak!",
  },
  {
    id: "apolastan-092",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      {
        id: "a",
        text: "Az ételt úgy helyezzük el, hogy lássa a beteg.",
        correct: true,
      },
      {
        id: "b",
        text: "Gyors tempóban etessük.",
        correct: false,
      },
    ],
    prompt:
      "Döntse el, hogy a beteg táplálására vonatkozó megállapítások igazak, vagy hamisak!",
  },
  {
    id: "apolastan-093",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      { id: "a", text: "Megfelelő nagyságú falatokat adjunk.", correct: true },
      { id: "b", text: "Étkezés után soha ne adjunk folyadékot.", correct: false },
    ],
    prompt: "Döntse el, hogy a beteg táplálására vonatkozó megállapítások igazak, vagy hamisak!",
  },
  {
    id: "apolastan-101",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      { id: "a", text: "Az időseknél elhanyagolható a személyre szabott ápolás.", correct: false },
      { id: "b", text: "Idősek esetén fokozottan figyelni kell a folyadékbevitelre.", correct: true },
    ],
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
  },
  {
    id: "apolastan-102",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      { id: "a", text: "A higiénés szükségletek kielégítése a beteg komfortérzetének biztosítását szolgálja.", correct: true },
      { id: "b", text: "A higiénés szükségletek kielégítése az ápoló nem önálló döntésének körébe tartozó tevékenység.", correct: false },
    ],
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
  },
  {
    id: "apolastan-104",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      { id: "a", text: "Mozgássérültség, vagy mozgáskorlátozottság főbb típusai: agykárosodás következtében kialakult rendellenességek, bénulások, ortopédiai elváltozások, amputációk, végtaghiányos fejlődési rendellenességek.", correct: true },
      { id: "b", text: "Mozgássérültség vagy mozgáskorlátozottság főbb típusai: mozgásszervi megbetegedések pl. ízületi gyulladás, végtagtörések stb. és az enyhe strukturális elváltozások pl. lúdtalp, gerincferdülés, „X” vagy „O” láb.", correct: false },
    ],
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
  },
  {
    id: "apolastan-105",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      { id: "a", text: "A látászavar aszerint értékelhető, hogy gondot okoz-e az olvasásban, a tájékozódásban, vagy a cselekvésben.", correct: true },
      { id: "b", text: "Vakság a látásélesség teljes hiánya.", correct: true },
    ],
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
  },
  {
    id: "apolastan-106",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      { id: "a", text: "A normál beszéd hangereje 40 dB.", correct: false },
      { id: "b", text: "A hallás károsodásának, illetve csökkenésének mértéke alapján beszélhetünk a nagyothallókról és siketekről.", correct: true },
    ],
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
  },
  {
    id: "apolastan-107",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      { id: "a", text: "Beszédhibák közé tartozik pl. a dadogás és a pöszeség.", correct: true },
      { id: "b", text: "A tartós beszédképtelenség a némaság.", correct: true },
    ],
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
  },
  {
    id: "apolastan-108",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      { id: "a", text: "Az értelmi sérültek két csoportra oszthatók súlyosság szerint: tanulásban akadályozottak és értelmileg akadályozottak.", correct: false },
      { id: "b", text: "Az értelmi szint csökkenése az IQ-val mérhető.", correct: true },
    ],
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
  },
  {
    id: "apolastan-114",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      { id: "a", text: "Az esélyegyenlőség alapja maga az integrációmentesség.", correct: false },
      { id: "b", text: "Infokommunikációs akadálynak nevezzük azokat az akadályokat, amelyek gátolják a hallásfogyatékos, látásfogyatékos, illetve intellektuális fogyatékossággal élő emberek megfelelő információhoz jutását.", correct: true },
    ],
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
  },
  {
    id: "apolastan-130",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      { id: "a", text: "Üzemi baleset esetén kiemelt táppénz jár a sérült munkavállalónak.", correct: true },
      { id: "b", text: "Úti balesetnek nevezzük, de ugyanúgy munkabalesetnek minősül, ha munkába menet, vagy munkából hazafelé éri baleset a sérültet.", correct: false },
    ],
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
  },
];
