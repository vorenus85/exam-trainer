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
  {
    id: "apolastan-011",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Miért fontos a beteg azonosítása ellátás előtt?",
    options: [
      { id: "a", text: "A megfelelő beteg biztonságos ellátása érdekében" },
      {
        id: "b",
        text: "Csak adminisztrációs okokból, az ellátás szempontjából nem fontos",
      },
      { id: "c", text: "Hogy a betegnek ne kelljen kérdéseket feltenni" },
      { id: "d", text: "Csak lázas beteg esetén szükséges" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-012",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Mi segíthet a felfekvés megelőzésében?",
    options: [
      {
        id: "a",
        text: "A beteg rendszeres helyzetváltoztatása és a bőr megfigyelése",
      },
      { id: "b", text: "A beteg mozdulatlanul tartása" },
      { id: "c", text: "A bőr kipirosodott területének erős dörzsölése" },
      { id: "d", text: "A folyadékbevitel teljes megvonása" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-013",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Mit kell figyelembe venni a beteg személyes higiénéjének segítésekor?",
    options: [
      {
        id: "a",
        text: "A beteg intimitását, személyes szükségleteit és önállóságát",
      },
      { id: "b", text: "Csak az ellátás gyorsaságát" },
      {
        id: "c",
        text: "A beteg kéréseit minden esetben figyelmen kívül kell hagyni",
      },
      { id: "d", text: "Csak a hozzátartozók véleményét" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-014",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Mikor kell az ápolási beavatkozást dokumentálni?",
    options: [
      {
        id: "a",
        text: "A beavatkozás után a lehető leghamarabb, a tényeknek megfelelően",
      },
      { id: "b", text: "Csak a hónap végén" },
      { id: "c", text: "Csak akkor, ha komplikáció történt" },
      { id: "d", text: "Soha, ha a beteg állapota nem változott" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-015",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Hová kell helyezni a használt egyszer használatos kesztyűt?",
    options: [
      { id: "a", text: "A megfelelő hulladékgyűjtő edénybe" },
      { id: "b", text: "A tiszta eszközök közé" },
      { id: "c", text: "A beteg ágya mellé" },
      { id: "d", text: "Zsebben kell tárolni a műszak végéig" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-mc-001",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Melyek tartoznak a beteg alapvető életjelenségei közé? (Több válasz is helyes.)",
    options: [
      { id: "a", text: "Pulzus" },
      { id: "b", text: "Vérnyomás" },
      { id: "c", text: "Testhőmérséklet" },
      { id: "d", text: "Hajszín" },
    ],
    correctOptionIds: ["a", "b", "c"],
    explanation:
      "A pulzus, a vérnyomás és a testhőmérséklet a beteg megfigyelésének alapvető paraméterei.",
  },
  {
    id: "apolastan-mc-002",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Mely intézkedések segítik a fertőzések megelőzését az ellátás során? (Több válasz is helyes.)",
    options: [
      { id: "a", text: "Megfelelő kézhigiéné" },
      { id: "b", text: "Az egyéni védőeszközök helyes használata" },
      { id: "c", text: "A használt eszközök szabályos kezelése" },
      { id: "d", text: "A kézfertőtlenítés elhagyása kesztyűviseléskor" },
    ],
    correctOptionIds: ["a", "b", "c"],
  },
  {
    id: "apolastan-mc-003",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Melyek tartoznak a beteg azonosításának biztonságos gyakorlatához? (Több válasz is helyes.)",
    options: [
      { id: "a", text: "Legalább két azonosító adat ellenőrzése" },
      { id: "b", text: "Az adatokat a beteg dokumentációjával összevetni" },
      { id: "c", text: "Csak a beteg ágyszáma alapján dönteni" },
      {
        id: "d",
        text: "Az azonosítást minden releváns beavatkozás előtt elvégezni",
      },
    ],
    correctOptionIds: ["a", "b", "d"],
    explanation:
      "A megfelelő azonosítás csökkenti a téves betegnek adott ellátás kockázatát.",
  },
  {
    id: "apolastan-mc-004",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Mely szempontokat kell figyelembe venni a beteg mozgatásakor? (Több válasz is helyes.)",
    options: [
      { id: "a", text: "A beteg aktuális állapotát és terhelhetőségét" },
      { id: "b", text: "A beteg előzetes tájékoztatását" },
      { id: "c", text: "A megfelelő segédeszköz használatát" },
      { id: "d", text: "A beteg fájdalmának figyelmen kívül hagyását" },
    ],
    correctOptionIds: ["a", "b", "c"],
  },
  {
    id: "apolastan-mc-005",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Melyek a szakszerű ápolási dokumentáció jellemzői? (Több válasz is helyes.)",
    options: [
      { id: "a", text: "Tényszerű és pontos" },
      { id: "b", text: "Időben vezetett" },
      { id: "c", text: "A beteg állapotának változásait is rögzíti" },
      { id: "d", text: "Utólag emlékezetből, időpont nélkül készül" },
    ],
    correctOptionIds: ["a", "b", "c"],
    explanation:
      "A dokumentációnak pontosan, tényszerűen és időrendben kell tükröznie az ellátást.",
  },
  {
    id: "apolastan-mc-006",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Mely intézkedések segítik a felfekvés megelőzését? (Több válasz is helyes.)",
    options: [
      { id: "a", text: "A beteg rendszeres helyzetváltoztatása" },
      { id: "b", text: "A bőr rendszeres megfigyelése" },
      { id: "c", text: "A bőr tisztán és szárazon tartása" },
      { id: "d", text: "A kipirosodott terület erős dörzsölése" },
    ],
    correctOptionIds: ["a", "b", "c"],
    explanation:
      "A rendszeres tehermentesítés, a bőr megfigyelése és a megfelelő bőrápolás csökkenti a felfekvés kockázatát.",
  },
  {
    id: "apolastan-mc-007",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Melyek tartoznak a beteg állapotának folyamatos megfigyeléséhez? (Több válasz is helyes.)",
    options: [
      { id: "a", text: "A beteg panaszainak meghallgatása" },
      { id: "b", text: "Az általános állapot változásainak észlelése" },
      { id: "c", text: "A vitális paraméterek szükség szerinti ellenőrzése" },
      { id: "d", text: "A változások szándékos figyelmen kívül hagyása" },
    ],
    correctOptionIds: ["a", "b", "c"],
  },
  {
    id: "apolastan-mc-008",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Mely alapelvek fontosak a beteg személyes higiénéjének segítésekor? (Több válasz is helyes.)",
    options: [
      { id: "a", text: "A beteg intimitásának védelme" },
      { id: "b", text: "A beteg önállóságának támogatása" },
      {
        id: "c",
        text: "A beteg szükségleteinek és kívánságainak figyelembevétele",
      },
      { id: "d", text: "A beteget minden esetben teljesen passzívvá tenni" },
    ],
    correctOptionIds: ["a", "b", "c"],
    explanation:
      "A személyes higiéné segítésekor a méltóság, az intimitás és a lehető legnagyobb önállóság megőrzése a cél.",
  },
  {
    id: "apolastan-tf-001",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      {
        id: "a",
        text: "A kézhigiéné fontos szerepet játszik a fertőzések megelőzésében.",
        correct: true,
      },
      {
        id: "b",
        text: "A beteg alapvető higiénés szükségleteit nem kell figyelembe venni.",
        correct: false,
      },
      {
        id: "c",
        text: "Az ápolási beavatkozásokat tényszerűen dokumentálni kell.",
        correct: true,
      },
    ],
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    explanation:
      "A megfelelő kézhigiéné csökkenti a kórokozók továbbadásának kockázatát.",
  },
  {
    id: "apolastan-tf-002",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      {
        id: "a",
        text: "A beteg személyes adatait az egészségügyi dolgozó bárkivel megoszthatja.",
        correct: false,
      },
      {
        id: "b",
        text: "A beteg adatait bizalmasan kell kezelni.",
        correct: true,
      },
      {
        id: "c",
        text: "A beteget az ellátás előtt megfelelően azonosítani kell.",
        correct: true,
      },
    ],
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    explanation:
      "A beteg személyes adatait bizalmasan kell kezelni, és csak jogosult személynek adhatók át.",
  },
  {
    id: "apolastan-tf-003",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      {
        id: "a",
        text: "A beteg méltóságát és intimitását az ápolási beavatkozások során is tiszteletben kell tartani.",
        correct: true,
      },
      {
        id: "b",
        text: "A beteg intimitása ápolási feladatok közben nem számít.",
        correct: false,
      },
      {
        id: "c",
        text: "A beteg helyzetét a felfekvés megelőzése érdekében szükség szerint változtatni kell.",
        correct: true,
      },
    ],
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
  },
  {
    id: "apolastan-tf-004",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      {
        id: "a",
        text: "Hirtelen állapotromlás esetén elegendő megvárni a következő műszakot.",
        correct: false,
      },
      {
        id: "b",
        text: "A hirtelen állapotromlást azonnal jelezni kell az illetékes szakembernek.",
        correct: true,
      },
      {
        id: "c",
        text: "A beteg vitális paramétereit az állapotának megfelelően ellenőrizni kell.",
        correct: true,
      },
    ],
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    explanation:
      "A hirtelen állapotromlást azonnal jelezni kell az illetékes egészségügyi szakembernek.",
  },
  {
    id: "apolastan-tf-005",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      {
        id: "a",
        text: "Az ápolási beavatkozásokat a lehető leghamarabb, tényszerűen dokumentálni kell.",
        correct: true,
      },
      {
        id: "b",
        text: "Az ápolási dokumentációt csak a hónap végén kell elkészíteni.",
        correct: false,
      },
      {
        id: "c",
        text: "A beteg panaszait és állapotváltozásait az ápolás során figyelembe kell venni.",
        correct: true,
      },
    ],
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
  },
  {
    id: "apolastan-tf-006",
    topicId: "apolastan",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak",
    statements: [
      {
        id: "a",
        text: "A beteg mozgatása előtt tájékoztatni kell a beteget a tervezett műveletről.",
        correct: true,
      },
      {
        id: "b",
        text: "A beteg mozgatásakor nem kell figyelembe venni az aktuális állapotát.",
        correct: false,
      },
      {
        id: "c",
        text: "Mozgatáskor a beteg és az ápoló testi épségét egyaránt védeni kell.",
        correct: true,
      },
    ],
  },
  {
    id: "apolastan-tf-007",
    topicId: "apolastan",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak",
    statements: [
      {
        id: "a",
        text: "A beteg állapotának hirtelen változását dokumentálni kell.",
        correct: true,
      },
      {
        id: "b",
        text: "A beteg panaszait minden esetben figyelmen kívül kell hagyni.",
        correct: false,
      },
      {
        id: "c",
        text: "A kézhigiéné az ellátás biztonságának fontos része.",
        correct: true,
      },
    ],
  },
  {
    id: "apolastan-tf-008",
    topicId: "apolastan",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak",
    statements: [
      {
        id: "a",
        text: "A beteg önállóságát az ápolás során a lehetőségekhez mérten támogatni kell.",
        correct: true,
      },
      {
        id: "b",
        text: "Az ápoló minden feladatot automatikusan elvégez a beteg helyett.",
        correct: false,
      },
      {
        id: "c",
        text: "A beteg állapotának hirtelen romlását azonnal jelezni kell.",
        correct: true,
      },
    ],
  },
];
