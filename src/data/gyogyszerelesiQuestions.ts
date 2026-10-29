import type { ExamQuestion } from "../types/question.ts";

export const gyogyszerelesiQuestions: ExamQuestion[] = [
  {
    id: "gyogyszerelesi-013",
    topicId: "gyogyszerelesi_ismeretek",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítás igaz, vagy hamis!",
    statements: [
      {
        id: "a",
        text: "A gyógyszer biológiai felezési ideje az az idő, amely alatt a vér, illetve a szöveti koncentráció a kiindulási érték harmadára csökken.",
        correct: false,
      },
    ],
  },
  {
    id: "gyogyszerelesi-014",
    topicId: "gyogyszerelesi_ismeretek",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítás igaz, vagy hamis!",
    statements: [
      {
        id: "a",
        text: "Gyógyszer eliminációnak nevezzük mindazon folyamatok összességét, amelyek a gyógyszer hatástalanításához hozzájárulnak.",
        correct: true,
      },
    ],
  },
  {
    id: "gyogyszerelesi-026",
    topicId: "gyogyszerelesi_ismeretek",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi állítás igaz-e, vagy hamis!",
    statements: [
      {
        id: "a",
        text: "A gyógyszer beadásának módja függ a szer tulajdonságaitól és a kívánt hatástól, valamint a páciens fizikai és mentális állapotától.",
        correct: true,
      },
    ],
  },
  {
    id: "gyogyszerelesi-046",
    topicId: "gyogyszerelesi_ismeretek",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A felirat nélküli tárolóedényben gyógyszert tartani tilos.",
        correct: true,
      },
      {
        id: "b",
        text: "A gyógyszertároló szekrény hűvös helyen legyen.",
        correct: true,
      },
    ],
  },
  {
    id: "gyogyszerelesi-047",
    topicId: "gyogyszerelesi_ismeretek",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A régebben gyártott gyógyszerek később kerüljenek felhasználásra.",
        correct: false,
      },
      {
        id: "b",
        text: "A gyógyszertároló szekrény fényvédett helyen legyen.",
        correct: true,
      },
    ],
  },
  {
    id: "gyogyszerelesi-048",
    topicId: "gyogyszerelesi_ismeretek",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "Az injekciókat külön szekrényben, elzártan kell tárolni.",
        correct: true,
      },
      {
        id: "b",
        text: "A kétkeresztes szereket nem szükséges zárható szekrényben tárolni.",
        correct: false,
      },
    ],
  },
  {
    id: "gyogyszerelesi-049",
    topicId: "gyogyszerelesi_ismeretek",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A kábítószereket biztonsági zárral ellátott külön ládában, a kábítószer kezelési szabályzat szerint kell tárolni.",
        correct: true,
      },
      {
        id: "b",
        text: "A gyógyszerszekrényben tárolt gyógyszereket gyári dobozukban tartjuk, de amennyiben szükséges, másik dobozba áttehető.",
        correct: false,
      },
    ],
  },
  {
    id: "gyogyszerelesi-060",
    topicId: "gyogyszerelesi_ismeretek",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A kúp behelyezése után a csecsemő vagy kisgyermek farpofáit célszerű néhány másodpercre kézzel enyhén összeszorítani, hogy a kúp a kívánt helyen maradjon.",
        correct: true,
      },
      {
        id: "b",
        text: "A lázas csecsemőnek hányás esetén szirupot, hasmenés esetén pedig kúpot kell adni.",
        correct: false,
      },
    ],
  },
  {
    id: "gyogyszerelesi-061",
    topicId: "gyogyszerelesi_ismeretek",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "Az orvos által rendelt, személyre szabott összetételű kúpokat a gyógyszerész készíti el a gyógyszertárban.",
        correct: true,
      },
      {
        id: "b",
        text: "A felhasználásig előírásszerűen kell tárolni a kúpokat. Ez általában hűtőszekrényben (nem fagyasztóban) való tárolást jelent.",
        correct: true,
      },
    ],
  },
  {
    id: "gyogyszerelesi-062",
    topicId: "gyogyszerelesi_ismeretek",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A felnőttek és a gyermekek számára készített kúpok nemcsak hatóanyag-tartalmukban, de méretükben is különböznek egymástól.",
        correct: true,
      },
      {
        id: "b",
        text: "A kúp előnye, hogy a vékonybélből felszívódó hatóanyag gyorsan eljut a véráramba.",
        correct: false,
      },
    ],
  },
  {
    id: "gyogyszerelesi-063",
    topicId: "gyogyszerelesi_ismeretek",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A kúpok vivőanyaga, a végbélbe juttatáskor feloldódik, a hatóanyag pedig a végbél belső falán lévő, vékony ereken keresztül jut a véráramba.",
        correct: true,
      },
      {
        id: "b",
        text: "Akkor célszerű rectalisan adagolni, ha a beteg nem tudja bevenni tablettát hányinger miatt, nem tud nyelni, vagy nem ehet például műtét után.",
        correct: true,
      },
      {
        id: "c",
        text: "A kúp előnye, hogy a vékonybélből felszívódó hatóanyag gyorsan eljut a véráramba.",
        correct: false,
      },
    ],
  },
];
