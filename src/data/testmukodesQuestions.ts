import type { ExamQuestion } from "../types/question.ts";

export const testmukodesQuestions: ExamQuestion[] = [
  {
    id: "testmukodes-001",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítás igaz vagy hamis!",
    statements: [
      {
        id: "a",
        text: "A mozgás passzív szerve az izom.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-002",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbiak közül a kéttengelyű, ellipszoid ízületre jellemző mozgásokat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "Hajlítás-feszítés" },
      { id: "b", text: "Közelítés-távolítás" },
      { id: "c", text: "Forgómozgás" },
      { id: "d", text: "Oppozíció" },
    ],
    correctOptionIds: ["a", "b"],
  },
  {
    id: "testmukodes-003",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Válassza ki azt az ízülettípust, amelyre a hajlítás-feszítés, a közelítés-távolítás és a forgómozgás is jellemző!",
    options: [
      { id: "a", text: "Nyeregízület" },
      { id: "b", text: "Gömbízület" },
      { id: "c", text: "Lapos ízület" },
      { id: "d", text: "Ellipszoid ízület" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "testmukodes-004",
    topicId: "testmukodes",
    type: "matching",
    prompt: "Párosítsa az ízületeket és az ízülettípusokat!",
    pairs: [
      {
        id: "kereszt_csipocsont_izulet",
        left: "Kereszt-csípőcsont ízület",
        right: "Lapos ízület",
      },
      {
        id: "vallizulet",
        left: "Vállízület",
        right: "Gömbízület",
      },
      {
        id: "nagyujj_izulet",
        left: "Nagyujj kéztő és kézközép közötti ízület",
        right: "Nyeregízület",
      },
      {
        id: "csukloizulet",
        left: "Csuklóízület",
        right: "Ellipszoid ízület",
      },
    ],
  },
  {
    id: "testmukodes-005",
    topicId: "testmukodes",
    type: "single_choice",
    prompt: "Válassza ki az alábbiak közül a csuklóízület típusát!",
    options: [
      { id: "a", text: "Nyeregízület" },
      { id: "b", text: "Lapos ízület" },
      { id: "c", text: "Ellipszoid ízület" },
      { id: "d", text: "Gömbízület" },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "testmukodes-006",
    topicId: "testmukodes",
    type: "single_choice",
    prompt: "Válassza ki az alábbiak közül a vállízület típusát!",
    options: [
      { id: "a", text: "Gömbízület" },
      { id: "b", text: "Nyeregízület" },
      { id: "c", text: "Lapos ízület" },
      { id: "d", text: "Ellipszoid ízület" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "testmukodes-007",
    topicId: "testmukodes",
    type: "single_choice",
    prompt: "Válassza ki az alábbiak közül a csípőízület típusát!",
    options: [
      { id: "a", text: "Gömbízület" },
      { id: "b", text: "Nyeregízület" },
      { id: "c", text: "Lapos ízület" },
      { id: "d", text: "Ellipszoid ízület" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "testmukodes-008",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbiak közül a törzs csontjait! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "Csípőcsont" },
      { id: "b", text: "Bordák" },
      { id: "c", text: "Szegycsont" },
      { id: "d", text: "Ülőcsont" },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "testmukodes-009",
    topicId: "testmukodes",
    type: "single_choice",
    prompt: "Jelölje be az alábbiak közül azt, amelyik NEM a csigolya része!",
    options: [
      { id: "a", text: "Harántnyúlvány" },
      { id: "b", text: "Kardnyúlvány" },
      { id: "c", text: "Ízületi nyúlvány" },
      { id: "d", text: "Tövisnyúlvány" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "testmukodes-010",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Válassza ki a helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "A csontos mellkast a hátcsigolyák, a bordák és a szegycsont alkotja.",
      },
      {
        id: "b",
        text: "Az orsócsont a lábszár csontja.",
      },
      {
        id: "c",
        text: "A 12 hátcsigolyához 12 pár borda kapcsolódik.",
      },
      {
        id: "d",
        text: "A sípcsont az emberi test leghosszabb csöves csontja.",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "testmukodes-011",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A felső végtag a vállövből és a szabad felső végtagból áll.",
        correct: true,
      },
      {
        id: "b",
        text: "A törzs csontjait a felkar, az alkar és a kéz csontjai alkotják.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-012",
    topicId: "testmukodes",
    type: "single_choice",
    prompt: "Válassza ki az alábbiak közül a felső végtag csontját!",
    options: [
      { id: "a", text: "Sípcsont" },
      { id: "b", text: "Szegycsont" },
      { id: "c", text: "Singcsont" },
      { id: "d", text: "Keresztcsont" },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "testmukodes-013",
    topicId: "testmukodes",
    type: "matching",
    prompt: "Párosítsa az alkar és a lábszár csontjaihoz jellemzőiket!",
    pairs: [
      {
        id: "orsocsont",
        left: "Orsócsont",
        right: "Az alkar csontja, a hüvelykujj felől található.",
      },
      {
        id: "singcsont",
        left: "Singcsont",
        right: "Az alkar csontja, a kisujj felől található.",
      },
      {
        id: "sipcsont",
        left: "Sípcsont",
        right:
          "A lábszár csontja, elöl, a belső oldalon közvetlenül a bőr alatt helyezkedik el.",
      },
      {
        id: "szarkapocscsont",
        left: "Szárkapocscsont",
        right: "A lábszár csontja, alsó nyúlványa a külső bokát alkotja.",
      },
    ],
  },
  {
    id: "testmukodes-014",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Válassza ki az alábbiak közül azt, amelyik NEM tartozik a felső végtag csontjai közé!",
    options: [
      { id: "a", text: "Felkarcsont" },
      { id: "b", text: "Szegycsont" },
      { id: "c", text: "Kulcscsont" },
      { id: "d", text: "Lapockacsont" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "testmukodes-015",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A kéztő nyolc apró csontból áll, melyek két sorban helyezkednek el.",
        correct: true,
      },
      {
        id: "b",
        text: "A medencecsont három csontból csontosodott össze.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-017",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A medenceöv három nagy csontból áll: a keresztcsontból és a két medencecsontból.",
        correct: true,
      },
      {
        id: "b",
        text: "A fej csontos váza a koponya.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-018",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A nyakszirtcsont, a homlokcsont és az ékcsont az arckoponyacsontokhoz tartoznak.",
        correct: false,
      },
      {
        id: "b",
        text: "A rostacsont, ekecsont az arckoponya csontjaihoz tartozik.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-019",
    topicId: "testmukodes",
    type: "grouping",
    prompt: "Csoportosítsa a koponya csontjait elhelyezkedésük szerint!",
    groups: [
      { id: "agykoponya", text: "Agykoponya csontjai" },
      { id: "arckoponya", text: "Arckoponya csontjai" },
    ],
    items: [
      {
        id: "falcsont",
        text: "Falcsont",
        correctGroupId: "agykoponya",
      },
      {
        id: "jaromcsont",
        text: "Járomcsont",
        correctGroupId: "arckoponya",
      },
      {
        id: "felso_allcsont",
        text: "Felső állcsont",
        correctGroupId: "arckoponya",
      },
      {
        id: "halantekcsont",
        text: "Halántékcsont",
        correctGroupId: "agykoponya",
      },
    ],
  },
  {
    id: "testmukodes-020",
    topicId: "testmukodes",
    type: "ordering",
    prompt:
      "Tegye sorrendbe álló emberi testben (lentről felfelé haladva) az alábbi csontokat!",
    items: [
      { id: "labtocsontok", text: "Lábtőcsontok" },
      { id: "homlokcsont", text: "Homlokcsont" },
      { id: "szegycsont", text: "Szegycsont" },
      { id: "sipcsont", text: "Sípcsont" },
      { id: "kulcscsont", text: "Kulcscsont" },
    ],
    correctOrderIds: [
      "labtocsontok",
      "sipcsont",
      "szegycsont",
      "kulcscsont",
      "homlokcsont",
    ],
  },
  {
    id: "testmukodes-021",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Válassza ki az emberi testet alkotó csontok számát! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "226 db" },
      { id: "b", text: "206 db" },
      { id: "c", text: "266 db" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "testmukodes-022",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítás igaz vagy hamis!",
    statements: [
      {
        id: "a",
        text: "Működés szerint az izmok lehetnek: hajlítók, feszítők, közelítők, távolítók és szűkítők.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-023",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Válassza ki az alábbiak közül azt, amely nem tartozik az izmok működés szerinti csoportosításába! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "hajlítók" },
      { id: "b", text: "közelítők" },
      { id: "c", text: "szűkítők" },
      { id: "d", text: "tágítók" },
    ],
    correctOptionIds: ["d"],
  },
  {
    id: "testmukodes-024",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Válassza ki az alábbiak közül a helyes megállapítást! (Csak egy válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Működés szerint az izmok lehetnek: feszítők, közelítők, távolítók és szűkítők, körzőmozgást végzők.",
      },
      {
        id: "b",
        text: "Működés szerint az izmok lehetnek: hajlítók, feszítők, közelítők, távolítók és szűkítők.",
      },
      {
        id: "c",
        text: "Működés szerint az izmok lehetnek: hajlítók, feszítők, közelítők, távolítók és szűkítők, forgók.",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "testmukodes-025",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Válassza ki az alábbiak közül azt, amely NEM az izom része! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "izomhas" },
      { id: "b", text: "inas részek (eredés, tapadás)" },
      { id: "c", text: "izomnyak" },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "testmukodes-029",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbiak közül a törzs izomzatát alkotó izomcsoportokat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "csípőizmok" },
      { id: "b", text: "hátizmok" },
      { id: "c", text: "lábszárizmok" },
      { id: "d", text: "mellizmok" },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "testmukodes-030",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Válassza ki az alábbiak közül azt az izomcsoportot, amely NEM tartozik a törzs izmai közé! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "mellizmok" },
      { id: "b", text: "hasizmok" },
      { id: "c", text: "csípőizmok" },
      { id: "d", text: "hátizmok" },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "testmukodes-031",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbiak közül az alsó végtag izomzatához tartozó izmokat, izomcsoportokat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "egyenes hasizom" },
      { id: "b", text: "lábszárizmok" },
      { id: "c", text: "rombuszizom" },
      { id: "d", text: "lábizmok" },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "testmukodes-032",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbiak közül a felső végtag izomzatához tartozó izmokat/izomcsoportokat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "kézizmok" },
      { id: "b", text: "trapézizom" },
      { id: "c", text: "kétfejű karizom" },
      { id: "d", text: "rekeszizom" },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "testmukodes-034",
    topicId: "testmukodes",
    type: "matching",
    prompt: "Párosítsa az izmokhoz funkciójukat/működésüket!",
    pairs: [
      {
        id: "bordakozti_izmok",
        left: "külső és belső bordaközti izmok",
        right: "légzőizmok",
      },
      {
        id: "negyfeju_comb izom",
        left: "négyfejű combizom",
        right: "feszítő izom",
      },
      {
        id: "nyakizmok",
        left: "nyakizmok egy része (nehezített légzés esetén)",
        right: "légzési segédizmok",
      },
      {
        id: "ketfeju_karizom",
        left: "kétfejű karizom",
        right: "hajlító izom",
      },
    ],
  },
  {
    id: "testmukodes-035",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A fej és a nyak izomzatát elsősorban a mimikai izmok, a rágóizmok és a nyakizmok képezik.",
        correct: true,
      },
      {
        id: "b",
        text: "Az alsó végtag izomzatához nem tartoznak a csípőizmok.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-036",
    topicId: "testmukodes",
    type: "matching",
    prompt:
      "Párosítsa a megadott izmokat elhelyezkedésük alapján a megfelelő izomcsoporthoz!",
    pairs: [
      {
        id: "trombitasizom",
        left: "trombitásizom",
        right: "arcizmok",
      },
      {
        id: "fureszizom",
        left: "fűrészizom",
        right: "mellizmok",
      },
      {
        id: "rombuszizom",
        left: "rombuszizom",
        right: "hátizmok",
      },
      {
        id: "nagy_farizom",
        left: "nagy farizom",
        right: "csípőizmok",
      },
    ],
  },
  {
    id: "testmukodes-037",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Válassza ki az alábbiak közül azt, amely NEM tartozik az arcizmokhoz! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "szem körüli izmok" },
      { id: "b", text: "fül körüli izmok" },
      { id: "c", text: "orr körüli izmok" },
      { id: "d", text: "száj körüli izmok" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "testmukodes-038",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbiak közül a fejtetőizmokhoz tartozó izmokat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "tarkóizom" },
      { id: "b", text: "szem körüli izmok" },
      { id: "c", text: "homlokizom" },
      { id: "d", text: "száj körüli izmok" },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "testmukodes-039",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A kis vérkör a jobb kamrából indul és a bal pitvarban végződik.",
        correct: true,
      },
      {
        id: "b",
        text: "Az a. pulmonalis artériás vért szállít a tüdőbe.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-040",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "Az aortaívnek két ága van.",
        correct: false,
      },
      {
        id: "b",
        text: "A jobb szívfélben található a háromhegyű billentyű.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-041",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A kis vérkör feladata a vénás vér eljuttatása a tüdőbe.",
        correct: true,
      },
      {
        id: "b",
        text: "A kis vérkör a bal kamrából indul ki.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-042",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A légcsere a tüdőléghólyagok segítségével zajlik.",
        correct: true,
      },
      {
        id: "b",
        text: "A négy v. pulmonalis a bal pitvarba ömlik.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-043",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "Élettanilag a vér alvadási ideje szobahőmérsékleten 5–7 perc.",
        correct: true,
      },
      {
        id: "b",
        text: "A vér enyhén sós ízű, gyengén savas vegyhatású.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-044",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A perctérfogat az egy kamrai összehúzódás alkalmával kilökött vérmennyiség.",
        correct: false,
      },
      {
        id: "b",
        text: "A szív izomzatának ritmusos összehúzódása a diasztole, az elernyedése a szisztole.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-045",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "Az a. pulmonalis a jobb pitvarból indul ki.",
        correct: false,
      },
      {
        id: "b",
        text: "A vér folyékony kötőszövet.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-046",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Válassza ki a végartériákra vonatkozó helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "A felületes-, a mélyvénás-, és az artériás rendszer között létrejövő érösszeköttetés.",
      },
      {
        id: "b",
        text: "Az egymással szomszédos területet ellátó artériák között nincs összeköttetés.",
      },
      {
        id: "c",
        text: "Az értörzs felső szakaszát az ér alsó részének ágaival köti össze.",
      },
      {
        id: "d",
        text: "Ha az artéria elzáródik, az általa ellátott terület elhal.",
      },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "testmukodes-048",
    topicId: "testmukodes",
    type: "matching",
    prompt: "Párosítsa a vér egyes alkotórészeit a rájuk jellemző funkciókkal!",
    pairs: [
      {
        id: "vorosversejt",
        left: "vörösvérsejt (hemoglobin)",
        right: "oxigén megkötése",
      },
      {
        id: "feherversejt",
        left: "fehérvérsejt",
        right: "immunvédekezés",
      },
      {
        id: "verlemezkek",
        left: "vérlemezkék",
        right: "véralvadás",
      },
      {
        id: "verplazma",
        left: "vérplazma",
        right: "hormonok szállítása",
      },
    ],
  },
  {
    id: "testmukodes-049",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Válassza ki a helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "A B-lymphocyta feladata a szervezetben az ellenanyagok (immunglobulinok) termelése.",
      },
      {
        id: "b",
        text: "A T-lymphocyta feladata a szervezetben az ellenanyagok (immunglobulinok) termelése.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "testmukodes-050",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Válassza ki a helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "A B-lymphocyták feladata a szervezetben az idegen anyagok felismerése, elpusztítása.",
      },
      {
        id: "b",
        text: "A T-lymphocyták szerepet játszanak az idegen anyagok felismerésében, elpusztításában.",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "testmukodes-051",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt: "Húzza alá a nagyvérkör ereit! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "aorta" },
      { id: "b", text: "vena cava superior" },
      { id: "c", text: "arteria pulmonalis" },
      { id: "d", text: "vena pulmonalis" },
    ],
    correctOptionIds: ["a", "b"],
  },
  {
    id: "testmukodes-053",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Jelölje be az alábbiak közül a keringés szervrendszerére vonatkozó helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "a vérnyomás értéke a felkaron mérve megegyezik az arteria brachialisban uralkodó nyomással",
      },
      { id: "b", text: "a pulzust a vena radialison számoljuk" },
      {
        id: "c",
        text: "a pulzus száma megegyezik a szívösszehúzódások számával",
      },
      {
        id: "d",
        text: "a nagyvérkör a bal pitvarból indul ki, és a jobb pitvarba érkezik",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "testmukodes-054",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Jelölje be az alábbiak közül a keringés szervrendszerére vonatkozó helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "a kisvérkör a jobb kamrából indul ki, és a bal pitvarba érkezik",
      },
      { id: "b", text: "a vénák oxigéndús vért szállítanak" },
      { id: "c", text: "a vér pH-értéke: 7,34–7,42 között mozog" },
      { id: "d", text: "a vörösvértestek élettartama 220 nap" },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "testmukodes-060",
    topicId: "testmukodes",
    type: "matching",
    prompt: "Párosítsa a fehérvérsejt formáihoz a megfelelő feladatot!",
    pairs: [
      {
        id: "neutrofil_granulocyta",
        left: "neutrofil granulocyta",
        right: "baktériumok elleni védekezés fagocitózissal",
      },
      {
        id: "eosinophil_granulocyta",
        left: "eosinophil granulocyta",
        right: "allergiás reakciók",
      },
      {
        id: "t_lymphocyta",
        left: "T-lymphocyta",
        right: "celluláris immunválasz",
      },
      {
        id: "b_lymphocyta",
        left: "B-lymphocyta",
        right: "humorális immunválasz",
      },
      {
        id: "monocyta",
        left: "monocyta",
        right: "fagocitózis és antigén prezentálás",
      },
    ],
  },
  {
    id: "testmukodes-064",
    topicId: "testmukodes",
    type: "matching",
    prompt: "Rendezze a jellemzőket, leírásokat a megadottak szerint!",
    pairs: [
      {
        id: "veroerek",
        left: "Verőerek jellemzői",
        right: "A vért a szívből a periféria felé juttatják.",
      },
      {
        id: "visszerek",
        left: "Visszerek jellemzői",
        right:
          "A periféria felől, a hajszálér területéről a szív irányába szállítják a vért.",
      },
      {
        id: "hajszalerek",
        left: "Hajszálerek jellemzői",
        right: "Faluk rendkívül vékony, csak endothel sejtekből állnak.",
      },
    ],
  },
  {
    id: "testmukodes-065",
    topicId: "testmukodes",
    type: "matching",
    prompt: "Rendezze a jellemzőket, leírásokat a megadottak szerint!",
    pairs: [
      {
        id: "veroerek",
        left: "Verőerek jellemzői",
        right:
          "Erőteljes összehúzódásra képesek, így továbbítják a vért a periféria felé.",
      },
      {
        id: "hajszalerek",
        left: "Hajszálerek jellemzői",
        right:
          "Itt történik meg az oxigén és a tápanyagok leadása a sejtek felé a sejt közötti térbe, valamint a szén-dioxid és az anyagcseretermékek felvétele.",
      },
    ],
  },
  {
    id: "testmukodes-066",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Válassza ki a helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "A vena pulmonalis a szív jobb kamrájából indul ki, majd két ágra oszlik és behatol a tüdőbe.",
      },
      {
        id: "b",
        text: "A vénák a periféria felől a szív felé szállítják a vért.",
      },
      {
        id: "c",
        text: "A szívet ellátó saját tápláló erek, a coronariák az arcus aortae kezdeti szakaszából erednek.",
      },
      {
        id: "d",
        text: "A vér áramlásának sebessége az érrendszer különböző szakaszain más és más.",
      },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "testmukodes-067",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A szívizom refrakter stádiuma a vázizmokéhoz képest lényegesen rövidebb.",
        correct: false,
      },
      {
        id: "b",
        text: "A vena cava superior a felső végtag, a fej, a nyak vénáit gyűjti össze.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-068",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt: "Jelölje be a lép feladatait! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "lymphocyták képzése" },
      { id: "b", text: "vörösvérsejtek lebontása" },
      { id: "c", text: "glükogén raktározása" },
      { id: "d", text: "maltáz termelése" },
    ],
    correctOptionIds: ["a", "b"],
  },
  {
    id: "testmukodes-069",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt: "Jelölje be a lép feladatait! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "vér raktározása" },
      { id: "b", text: "C-vitamin tárolása" },
      { id: "c", text: "méreganyagok kiválasztása" },
      { id: "d", text: "vérlemezkék lebontása" },
    ],
    correctOptionIds: ["a", "d"],
  },
  {
    id: "testmukodes-070",
    topicId: "testmukodes",
    type: "ordering",
    prompt: "Rendezze helyes sorrendbe a légút anatómiai felépítését!",
    items: [
      { id: "horgo", text: "Hörgő" },
      { id: "legcso", text: "Légcső" },
      { id: "gege", text: "Gége" },
      { id: "horgocske", text: "Hörgőcske" },
      { id: "fohorgo", text: "Főhörgő" },
      { id: "legholyag", text: "Léghólyag" },
    ],
    correctOrderIds: [
      "gege",
      "legcso",
      "fohorgo",
      "horgo",
      "horgocske",
      "legholyag",
    ],
  },
  {
    id: "testmukodes-071",
    topicId: "testmukodes",
    type: "ordering",
    prompt: "Tegye helyes sorrendbe a belégzés folyamatának lépéseit!",
    items: [
      {
        id: "a",
        text: "A külső környezethez viszonyítva csökken a nyomás a tüdőkben.",
      },
      { id: "b", text: "Megnő a mellkas térfogata." },
      {
        id: "c",
        text: "Megemelkednek a bordák és lesüllyed a rekeszizom.",
      },
      {
        id: "d",
        text: "A külső bordaközti izmok és a rekeszizom összehúzódik.",
      },
      { id: "e", text: "A külső környezetből levegő áramlik a tüdőkbe." },
    ],
    correctOrderIds: ["d", "c", "b", "a", "e"],
  },
  {
    id: "testmukodes-083",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Jelölje be az alábbi felsorolásból az orr feladatait! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "a belégzett levegő előmelegítése" },
      { id: "b", text: "oxigéncsere" },
      { id: "c", text: "a belégzett levegő párásítása" },
      { id: "d", text: "hőháztartás fenntartása" },
      { id: "e", text: "hangok képzése" },
    ],
    correctOptionIds: ["a", "c", "e"],
  },
  {
    id: "testmukodes-084",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Fejezze be a mondatot a helyes válaszokkal! (Több válasz is lehetséges!) A légzés ingere:",
    options: [
      {
        id: "a",
        text: "a légzőközponton áthaladó vér szén-dioxid szintjének növekedése",
      },
      {
        id: "b",
        text: "a légzőközponton áthaladó vér szén-dioxid szintjének csökkenése",
      },
      { id: "c", text: "a vér pH-jának lúgos irányba tolódása" },
      { id: "d", text: "a vér pH-jának savas irányba tolódása" },
    ],
    correctOptionIds: ["a", "d"],
  },
  {
    id: "testmukodes-085",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Válassza ki a gátorüregben elhelyezkedő szerveket! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "nyelőcső" },
      { id: "b", text: "máj" },
      { id: "c", text: "hörgők" },
      { id: "d", text: "csecsemőmirigy" },
      { id: "e", text: "tüdők" },
      { id: "f", text: "szív" },
    ],
    correctOptionIds: ["a", "d", "f"],
  },
  {
    id: "testmukodes-086",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Jelölje be az orrmelléküregek feladatait! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "a belégzett levegő előmelegítése" },
      { id: "b", text: "oxigéncsere" },
      { id: "c", text: "a belégzett levegő párásítása" },
      { id: "d", text: "hőháztartás fenntartása" },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "testmukodes-087",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Jelölje be az orrmelléküregek feladatait! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "hangképzésnél a hangnak egyéni színezetet adnak (rezonátorok)",
      },
      { id: "b", text: "a koponya súlyának csökkentése" },
      { id: "c", text: "légnyomás biztosítása" },
      { id: "d", text: "a belégzett levegő hűtése" },
    ],
    correctOptionIds: ["a", "b"],
  },
  {
    id: "testmukodes-088",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A gége a hangadás szerve.",
        correct: true,
      },
      {
        id: "b",
        text: "A kannaporcok kiemelkedő szöglete az „ádámcsutka”.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-089",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A hangszalagok a gégefedő és a gyűrűporc között feszülnek.",
        correct: false,
      },
      {
        id: "b",
        text: "A hangszalagok között hangrés található.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-090",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A gége a nyelés szerve.",
        correct: false,
      },
      {
        id: "b",
        text: "A gége egyik porca a gégefedő.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-091",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Jelölje be az alábbiak közül a helyes választ! (Csak egy helyes válasz lehetséges!) Nyugodt légzés során felnőttekben az úgynevezett légzési respirációs levegő:",
    options: [
      { id: "a", text: "1000 cm³" },
      { id: "b", text: "750 cm³" },
      { id: "c", text: "500 cm³" },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "testmukodes-092",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Jelölje be az alábbiak közül a helyes választ! (Csak egy helyes válasz lehetséges!) Erőltetett egyetlen mély be- és kilégzés alatt egy átlagos felnőttnél mennyi levegő fordul meg a tüdőben?",
    options: [
      { id: "a", text: "9000 cm³" },
      { id: "b", text: "4500 cm³" },
      { id: "c", text: "2000 cm³" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "testmukodes-093",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Jelölje be az alábbiak közül a helyes választ! (Csak egy helyes válasz lehetséges!) Nyugodt állapotban a felnőttek percenkénti légzésszáma:",
    options: [
      { id: "a", text: "12–16" },
      { id: "b", text: "18–25" },
      { id: "c", text: "20–30" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "testmukodes-095",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Jelölje be a légzésszámot növelő tényezőket! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "a légzőközponton áthaladó vér szén-dioxid-nyomásának emelkedése",
      },
      { id: "b", text: "a vér vegyhatásának savas irányba tolódása" },
      { id: "c", text: "a légzés akaratlagos visszatartása" },
      { id: "d", text: "mély alvás állapota" },
    ],
    correctOptionIds: ["a", "b"],
  },
  {
    id: "testmukodes-096",
    topicId: "testmukodes",
    type: "matching",
    prompt: "Párosítsa a légzéssel kapcsolatos fogalmakat meghatározásaikkal!",
    pairs: [
      {
        id: "kulso_legzes",
        left: "külső légzés",
        right:
          "a léghólyagocskák falában futó erecskékből a szén-dioxid kilép az alveoláris térbe, és az oxigén bediffundál az érbe",
      },
      {
        id: "residualis_levego",
        left: "residualis levegő",
        right:
          "a tüdőben, a teljes kilégzés után visszamaradó kb. 1200 cm³ levegő",
      },
      {
        id: "respiracios_levego",
        left: "respirációs levegő",
        right: "nyugodt belégzéskor felnőtt ember 500 cm³ levegőt szív be",
      },
    ],
  },
  {
    id: "testmukodes-097",
    topicId: "testmukodes",
    type: "matching",
    prompt: "Párosítsa a légzéssel kapcsolatos fogalmakat meghatározásaikkal!",
    pairs: [
      {
        id: "belso_legzes",
        left: "belső légzés",
        right: "a szövetek és a vér közti gázcsere",
      },
      {
        id: "vitalkapacitas",
        left: "vitálkapacitás",
        right:
          "maximális belégzés után maximális kilégzéssel kifújt levegő mennyisége 4500 cm³",
      },
      {
        id: "komplementer_levego",
        left: "komplementer levegő",
        right:
          "mély belégzéskor még további, mintegy 2000 cm³ belélegezhető levegő",
      },
    ],
  },
  {
    id: "testmukodes-098",
    topicId: "testmukodes",
    type: "matching",
    prompt: "Párosítsa az anatómiai képleteket jellemzőikkel!",
    pairs: [
      {
        id: "orrmandula",
        left: "orrmandula",
        right: "a garatban helyezkedik el",
      },
      {
        id: "gege",
        left: "gége",
        right: "a hangadás szerve",
      },
      {
        id: "legcso",
        left: "légcső",
        right: "felszínét csillószőrös hengerhám borítja",
      },
      {
        id: "garat",
        left: "garat",
        right: "ide nyílik a fülkürt",
      },
    ],
  },
  {
    id: "testmukodes-099",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A vér kisebb szén-dioxid koncentrációjának hatására csökken a légzésszám.",
        correct: true,
      },
      {
        id: "b",
        text: "Belégzéskor a rekeszizom a mellüreg felé felemelkedik.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-100",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A gyűrűporc kiemelkedő szöglete az ádámcsutka.",
        correct: false,
      },
      {
        id: "b",
        text: "A légzés idegi szabályozásának a központja a nyúltvelőben található.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-101",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A tüdő saját vérellátását az arteria és vena pulmonalis biztosítja.",
        correct: false,
      },
      {
        id: "b",
        text: "A paraszimpatikus idegrendszer hatására a légzésszám csökken.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-102",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "Az orr nyálkahártyáját izgató anyagok eltávolítását a köhögés biztosítja.",
        correct: false,
      },
      {
        id: "b",
        text: "A külső légzés a légköri levegő és a tüdő léghólyagocskái között történik, diffúzió útján.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-103",
    topicId: "testmukodes",
    type: "ordering",
    prompt:
      "Állítsa a tápcsatorna megadott részeit helyes sorrendbe a szájüregtől kezdődően a táplálék útjának megfelelően haladva!",
    items: [
      { id: "szajureg", text: "Szájüreg" },
      { id: "vastagbel", text: "Vastagbél" },
      { id: "gyomor", text: "Gyomor" },
      { id: "nyelocso", text: "Nyelőcső" },
      { id: "vekonybel", text: "Vékonybél" },
    ],
    correctOrderIds: [
      "szajureg",
      "nyelocso",
      "gyomor",
      "vekonybel",
      "vastagbel",
    ],
  },
  {
    id: "testmukodes-104",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbiak közül a tápanyagokat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "szénhidrátok" },
      { id: "b", text: "vitaminok" },
      { id: "c", text: "fehérjék" },
      { id: "d", text: "ásványi sók" },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "testmukodes-105",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "Az emésztőrendszer felső szakaszához tartozik a szájüreg, garat, nyelőcső.",
        correct: true,
      },
      {
        id: "b",
        text: "Az emésztőrendszer középső szakaszához tartozik a végbél, szigmabél és a vakbél.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-106",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A nyelőcső feladata a táplálék továbbítása garattól a gyomorba.",
        correct: true,
      },
      {
        id: "b",
        text: "A tejfogak száma 20.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-107",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "Az emésztés mechanikai (táplálék felaprítása, továbbítása) és kémiai (enzimek működése) folyamatokból áll.",
        correct: true,
      },
      {
        id: "b",
        text: "A tápcsatorna alsó szakasza (vastagbél), ahol a táplálék lebontása és felszívása történik.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-108",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A mandulák, mint nyirokszervek védik a szervezetet a fertőzésekkel szemben.",
        correct: true,
      },
      {
        id: "b",
        text: "A patkóbélben az emésztésnek a lebontás mellett új fázisa is kezdődik: a felszívódás.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-109",
    topicId: "testmukodes",
    type: "true_false",
    prompt:
      "Döntse el, hogy a vastagbélre vonatkozó megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A vastagbél az emésztőszervrendszer alsó szakaszához tartozik.",
        correct: true,
      },
      {
        id: "b",
        text: "A vastagbél a vékonybeleket keretszerűen veszi körül.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-110",
    topicId: "testmukodes",
    type: "true_false",
    prompt:
      "Döntse el, hogy a vastagbélre vonatkozó megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A vastagbél három szakaszból áll.",
        correct: true,
      },
      {
        id: "b",
        text: "A végbél a vastagbél első szakasza.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-111",
    topicId: "testmukodes",
    type: "ordering",
    prompt: "Tegye helyes sorrendbe a nyelés folyamatát!",
    items: [
      {
        id: "a",
        text: "A garatizmok összehúzódnak, majd a nyelőcsőizomzaton végighaladó perisztaltikus mozgás révén a falat a gyomorba jut.",
      },
      {
        id: "b",
        text: "A lágyszájpad felemelkedik, ezáltal a szájgarat az orrgarat felé záródik.",
      },
      { id: "c", text: "A gége felemelkedik." },
      { id: "d", text: "A nyelvgyök és a gégefedő hátrafelé mozdul." },
    ],
    correctOrderIds: ["d", "b", "c", "a"],
  },
  {
    id: "testmukodes-113",
    topicId: "testmukodes",
    type: "matching",
    prompt: "Párosítsa a gyomor mirigyeihez váladékaikat!",
    pairs: [
      {
        id: "fundus-mirigyek",
        left: "fundus-mirigyek",
        right: "enzim és sósav",
      },
      {
        id: "pylorus-mirigyek",
        left: "pylorus-mirigyek",
        right: "nyák",
      },
    ],
  },
  {
    id: "testmukodes-114",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A vékonybélnek három szakasza van: a patkóbél, az éhbél és a csípőbél.",
        correct: true,
      },
      {
        id: "b",
        text: "A patkóbélbe ugyanazon a helyen nyílik be a közös epevezeték és a hasnyálmirigy-vezeték.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-115",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A patkóbél, az éhbél és a csípőbél nyálkahártyája egyforma sűrűn, körkörösen redőzött.",
        correct: false,
      },
      {
        id: "b",
        text: "A vékonybél mindhárom szakaszának belső felszínét bélbolyhok borítják.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-117",
    topicId: "testmukodes",
    type: "matching",
    prompt: "Párosítsa a szervekhez jellemzőiket!",
    pairs: [
      {
        id: "maj",
        left: "máj",
        right:
          "szerepe van a vitaminok képzésében, így A-vitamint, D-vitamint képez",
      },
      {
        id: "hasnyalmirigy",
        left: "hasnyálmirigy",
        right: "kettős elválasztású mirigy",
      },
      {
        id: "hashartya",
        left: "hashártya",
        right: "része, képződménye a nagycseplesz és a Douglas-üreg is",
      },
      {
        id: "nyelocso",
        left: "nyelőcső",
        right: "feladata a táplálék továbbítása a garattól a gyomorba",
      },
    ],
  },
  {
    id: "testmukodes-118",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Válassza ki a májra vonatkozó helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Két egyenlőtlen lebenyből, egy nagyobb jobb és egy kisebb bal lebenyből áll.",
      },
      { id: "b", text: "Részben külső, részben belső elválasztású mirigy." },
      { id: "c", text: "Állandóan termeli a sárgásbarna, híg májepét." },
      { id: "d", text: "A legmélyebb pontja a Douglas-üreg." },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "testmukodes-119",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Válassza ki az alábbiak közül a hasnyálmirigy részeit! (Csak egy válasz lehetséges!)",
    options: [
      { id: "a", text: "fali lemez, zsigeri lemez" },
      { id: "b", text: "fej, test, farok" },
      { id: "c", text: "jobb oldali nagyobb lebeny, bal oldali kisebb lebeny" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "testmukodes-120",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Válassza ki a hasnyálmirigyre vonatkozó helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "A-vitamint képez karotinból." },
      {
        id: "b",
        text: "Termelt váladéka a hasnyál, amely fontos fehérje-, szénhidrát- és zsírbontó enzimeket tartalmaz.",
      },
      {
        id: "c",
        text: "A hasnyálmirigy feje a patkóbél homorulatába illeszkedik.",
      },
      { id: "d", text: "Egyik fő feladata a méregtelenítés." },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "testmukodes-121",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbiak közül a hashártya részeit/képződményeit! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "kiscseplesz" },
      { id: "b", text: "nagycseplesz" },
      { id: "c", text: "nagylebeny" },
      { id: "d", text: "nagygörbület" },
    ],
    correctOptionIds: ["a", "b"],
  },
  {
    id: "testmukodes-122",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Válassza ki a helyes megállapítást! (Csak egy helyes válasz lehetséges!) A hashártya:",
    options: [
      { id: "a", text: "hormonokat termel" },
      {
        id: "b",
        text: "szerepe a hasi szervek mechanikai védelme, a fertőzések kivédése",
      },
      {
        id: "c",
        text: "részt vesz a fehérje-, szénhidrát-, és zsíranyagcserében",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "testmukodes-123",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A hasüreg falait és zsigereit borító vékony savós hártya a hashártya.",
        correct: true,
      },
      {
        id: "b",
        text: "A hashártyalemezek között normál körülmények esetén több liter folyadék található.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-124",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "Hashártyán belüli szervek a máj, a gyomor, a vékony- és vastagbelek, a lép.",
        correct: true,
      },
      {
        id: "b",
        text: "A hashártya három lemezből áll.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-125",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A vesét három tok veszi körül.",
        correct: true,
      },
      {
        id: "b",
        text: "A vese homloksíkú metszetén kéregállományt, velőállományt, vesekelyheket és vesemedencét látunk.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-126",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A vese alaki, működési és fejlődési egysége a nefron.",
        correct: true,
      },
      {
        id: "b",
        text: "A vizeletkiválasztást hormonok és idegrendszeri hatások nem befolyásolják.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-128",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Válassza ki az alábbiak közül a nefron részét! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "vesekelyhek" },
      { id: "b", text: "vesemedence" },
      { id: "c", text: "vesetestecskék (Malphigi-testecskék)" },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "testmukodes-129",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbiak közül a Malpighi-testecskék részeit! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "nefron" },
      { id: "b", text: "érgomolyag" },
      { id: "c", text: "Bowman-tok" },
      { id: "d", text: "Henle-kacs" },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "testmukodes-130",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbiak közül a nefron csatornarendszerének a részeit! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "Bowman-tok" },
      { id: "b", text: "elsődleges kanyarulatos csatorna" },
      { id: "c", text: "Malpighi-féle testek" },
      { id: "d", text: "Henle-kacs" },
      { id: "e", text: "vesekelyhek" },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "testmukodes-131",
    topicId: "testmukodes",
    type: "matching",
    prompt: "Párosítsa a vese mikroszkópos részeihez jellemzőiket!",
    pairs: [
      {
        id: "juxtaglomerularis-apparatus",
        left: "juxtaglomeruláris apparátus",
        right: "a Malpighi-test érpólusánál található",
      },
      {
        id: "henle-kacs",
        left: "Henle-kacs",
        right: "az elsődleges kanyarulatos csatorna folytatása",
      },
      {
        id: "vizeleti-polus",
        left: "vizeleti pólus",
        right: "a vesetestecske érpólussal szemben lévő része",
      },
      {
        id: "bowman-tok",
        left: "Bowman-tok",
        right: "kehelyként veszi körül a hajszálérgomolyagot",
      },
    ],
  },
  {
    id: "testmukodes-132",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Válassza ki az alábbiak közül a renin termelődésének helyét! (Csak egy válasz lehetséges!)",
    options: [
      { id: "a", text: "Malphigi-test" },
      { id: "b", text: "Henle-kacs" },
      { id: "c", text: "juxtaglomeruláris apparátus" },
      { id: "d", text: "Bowman-tok" },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "testmukodes-135",
    topicId: "testmukodes",
    type: "ordering",
    prompt:
      "Állítsa helyes sorrendbe a vizeletképződés és vizeletelvezető rendszer részeit a vizeletkiválasztás menete alapján!",
    items: [
      { id: "hugycso", text: "Húgycső" },
      { id: "hugyvezetek", text: "Húgyvezeték" },
      { id: "vese", text: "Vese" },
      { id: "hugyholyag", text: "Húgyhólyag" },
    ],
    correctOrderIds: ["vese", "hugyvezetek", "hugyholyag", "hugycso"],
  },
  {
    id: "testmukodes-136",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A húgyvezeték feladata a vizelet eljuttatása a vesemedencéből a hólyagba.",
        correct: true,
      },
      {
        id: "b",
        text: "A húgyhólyag köbhám sejtjei „ernyősejtek”, amelyek a hólyag tágulását jól követik.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-137",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A húgycső keresztmetszete csillag alakú.",
        correct: false,
      },
      {
        id: "b",
        text: "A női húgycső mintegy 20 cm hosszú.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-138",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbiak közül a női belső nemi szerveket! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "kisajkak" },
      { id: "b", text: "petefészek" },
      { id: "c", text: "petevezeték" },
      { id: "d", text: "szeméremdomb" },
      { id: "e", text: "gát" },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "testmukodes-139",
    topicId: "testmukodes",
    type: "matching",
    prompt: "Párosítsa a női nemi szervekhez jellemzőiket, leírásukat!",
    pairs: [
      {
        id: "meh",
        left: "méh",
        right: "Fordított körte alakú, páratlan üreges szerv.",
      },
      {
        id: "petevezetek",
        left: "petevezeték",
        right:
          "Kb. 12 cm hosszú, páros, hullámos lefutású csatorna, a petesejt továbbítására szolgál.",
      },
      {
        id: "nagyajkak",
        left: "nagyajkak",
        right:
          "A hüvelybemenetet két oldalról körülvevő, főként zsírszövetből álló bőrredők.",
      },
      {
        id: "huvely",
        left: "hüvely",
        right: "A női genitális csatornának kb. 10 cm hosszú alsó szakasza.",
      },
    ],
  },
  {
    id: "testmukodes-141",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "Az újszülött leánygyermek petefészke már valamennyi tüszőt, illetve benne lévő petesejtet tartalmazza éretlen formában.",
        correct: true,
      },
      {
        id: "b",
        text: "A Graaf-tüszőt alkotó sejtek termelik a tüszőhormont (ösztrogént).",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-142",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A hüvelyben élettani körülmények között nincsenek Döderlein-bacilusok.",
        correct: false,
      },
      {
        id: "b",
        text: "A tüszőrepedés rendszerint a ciklus 28. napján következik be.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-143",
    topicId: "testmukodes",
    type: "ordering",
    prompt: "Tegye helyes sorrendbe a menstruációs ciklus szakaszait!",
    items: [
      { id: "menstruacio", text: "Menstruáció" },
      { id: "kiepules", text: "Kiépülési, növekedési szakasz" },
      { id: "gyogyulas", text: "Gyógyulás, regenerációs szakasz" },
      { id: "raktarozas", text: "Raktározási, kiválasztási szakasz" },
      { id: "ismet-menstruacio", text: "Ismét menstruáció" },
    ],
    correctOrderIds: [
      "menstruacio",
      "gyogyulas",
      "kiepules",
      "raktarozas",
      "ismet-menstruacio",
    ],
  },
  {
    id: "testmukodes-147",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbiak közül a férfi belső nemi szerveket! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "ondóhólyag" },
      { id: "b", text: "petefészek" },
      { id: "c", text: "mellékhere" },
      { id: "d", text: "hímvessző" },
      { id: "e", text: "dülmirigy" },
    ],
    correctOptionIds: ["a", "c", "e"],
  },
  {
    id: "testmukodes-148",
    topicId: "testmukodes",
    type: "matching",
    prompt: "Párosítsa a férfi nemi szervekhez jellemzőiket!",
    pairs: [
      {
        id: "here",
        left: "here",
        right: "A hím ivarsejteket termeli.",
      },
      {
        id: "ondovezetek",
        left: "ondóvezeték",
        right:
          "Erős izomzatú cső, nyálkahártyája hosszanti irányú redőket képez; izomzata a nemi váladék továbbjutását biztosítja.",
      },
      {
        id: "dulmirigy",
        left: "dülmirigy",
        right:
          "Váladéka adja a hím nemi váladék folyékony részének jelentős mennyiségét.",
      },
      {
        id: "mellekhere",
        left: "mellékhere",
        right: "A spermiumtároló és -elvezető rendszerhez tartozik.",
      },
    ],
  },
  {
    id: "testmukodes-149",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A másodlagos nemi jellegek a serülőkor idején mutatkoznak meg.",
        correct: true,
      },
      {
        id: "b",
        text: "A másodlagos nemi jellegek a két nemnél lelki, érzelmi különbségekben egyáltalán nem, kizárólag alkati tulajdonságokban mutatkoznak meg.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-150",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A másodlagos nemi jellegeket az ivarmirigyek által termelt hormonok alakítják ki és tartják fenn.",
        correct: true,
      },
      {
        id: "b",
        text: "A másodlagos nemi jellegek a két nemnél lelki, érzelmi különbségekben egyáltalán nem, kizárólag alkati tulajdonságokban mutatkoznak meg.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-151",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbiak közül azokat, amelyben kifejezésre jut a másodlagos nemi jelleg! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "csontozat és izomzat" },
      { id: "b", text: "hang" },
      { id: "c", text: "emlők" },
      { id: "d", text: "látás" },
      { id: "e", text: "hajszín" },
    ],
    correctOptionIds: ["a", "b", "c"],
  },
  {
    id: "testmukodes-153",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt: "Jelölje be az agyféltekék lebenyeit! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "homloklebeny" },
      { id: "b", text: "ékcsonti lebeny" },
      { id: "c", text: "fali lebeny" },
      { id: "d", text: "rostacsonti lebeny" },
      { id: "e", text: "nyakszirti lebeny" },
      { id: "f", text: "alsó lebeny" },
    ],
    correctOptionIds: ["a", "c", "e"],
  },
  {
    id: "testmukodes-154",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Jelölje be az alábbiak közül a helyes választ! (Csak egy helyes válasz lehetséges!) A hypothalamus hol helyezkedik el?",
    options: [
      { id: "a", text: "a kisagyban" },
      { id: "b", text: "a köztiagyban" },
      { id: "c", text: "a halántéki lebenyben" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "testmukodes-155",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Jelölje be az alábbiak közül a helyes választ! (Csak egy helyes válasz lehetséges!) A látóközpontok hol találhatók?",
    options: [
      { id: "a", text: "a nyakszirti lebenyben" },
      { id: "b", text: "a halánték lebenyben" },
      { id: "c", text: "a nyúltvelőben" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "testmukodes-156",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Jelölje be az alábbiak közül a helyes választ! (Csak egy helyes válasz lehetséges!) A hallás kérgi központja hol helyezkedik el?",
    options: [
      { id: "a", text: "a kisagyban" },
      { id: "b", text: "a köztiagyban" },
      { id: "c", text: "a halántéki lebenyben" },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "testmukodes-157",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A beszéd motoros központja a nyúltvelőben található.",
        correct: false,
      },
      {
        id: "b",
        text: "A neuroglia az idegszövet sejtközötti állománya, az idegrendszer támasztó eleme.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-158",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A piramispálya nagy része a nyakszirti lebenyben kereszteződik.",
        correct: false,
      },
      {
        id: "b",
        text: "Az idegrendszer támasztószövete a neuroglia.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-159",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "Az I. agyideg a szaglóideg.",
        correct: true,
      },
      {
        id: "b",
        text: "Az agytörzset a nyúltvelő, a híd és a középagy alkotja.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-160",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "Az idegsejtek csak egynyúlványúak lehetnek.",
        correct: false,
      },
      {
        id: "b",
        text: "A gerincvelő körülbelül ujjnyi vastagságú, puha köteg.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-161",
    topicId: "testmukodes",
    type: "ordering",
    prompt: "Tegye helyes sorrendbe a fiziológiás alvás fázisait!",
    items: [
      { id: "rem", text: "REM alvás" },
      { id: "atmenet", text: "A mély alvásba való átmenet szakasza" },
      { id: "mely-alvas", text: "Cerebrális vagy mély alvás" },
      { id: "szenderges", text: "Szendergés" },
      { id: "feluletes-alvas", text: "Felületes alvás" },
    ],
    correctOrderIds: [
      "szenderges",
      "feluletes-alvas",
      "atmenet",
      "mely-alvas",
      "rem",
    ],
  },
  {
    id: "testmukodes-162",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Jelölje be az alacsony pulzus lehetséges okait! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "a paraszimpatikus idegrendszer aktiválódása" },
      { id: "b", text: "emelkedett testhőmérséklet" },
      { id: "c", text: "fekvés, pihenés" },
      { id: "d", text: "pajzsmirigy-túlműködés" },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "testmukodes-163",
    topicId: "testmukodes",
    type: "matching",
    prompt: "Párosítsa az anatómiai képleteket jellemzőikkel!",
    pairs: [
      {
        id: "nyultagy",
        left: "nyúltagy",
        right:
          "A légzés és keringés, valamint a nyelés, hányás, köhögés, tüsszentés szabályozó központjai találhatók itt.",
      },
      {
        id: "hid",
        left: "híd",
        right:
          "A mozgási és felsőbb légzésszabályozási központok találhatóak itt.",
      },
      {
        id: "kozepagy",
        left: "középagy",
        right:
          "A szemmozgásokkal, látással, hallással kapcsolatos reflexek központja.",
      },
    ],
  },
  {
    id: "testmukodes-171",
    topicId: "testmukodes",
    type: "matching",
    prompt: "Párosítsa az összetartozó fogalmakat!",
    pairs: [
      {
        id: "cerebrospinalis_idegrendszer",
        left: "cerebrospinalis idegrendszer",
        right: "Az idegrendszer szomatikus, akaratunktól függő része.",
      },
      {
        id: "vegetativ_idegrendszer",
        left: "vegetatív idegrendszer",
        right: "Az idegrendszer autonóm, akaratunktól független része.",
      },
    ],
  },
  {
    id: "testmukodes-172",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Jelölje be az alábbiak közül a helyes választ! (Csak egy helyes válasz lehetséges!) Az agyvelőt és a gerincvelőt hány kötőszöveti burok veszi körül?",
    options: [
      { id: "a", text: "két" },
      { id: "b", text: "három" },
      { id: "c", text: "négy" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "testmukodes-173",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Jelölje be az alábbiak közül a helyes választ! (Csak egy helyes válasz lehetséges!) A kemény agyburok:",
    options: [
      { id: "a", text: "az agyvelőt kívülről borítja be" },
      { id: "b", text: "szorosan rátapad az agy és a gerincvelő felszínére" },
      { id: "c", text: "érhordozó hártya" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "testmukodes-174",
    topicId: "testmukodes",
    type: "matching",
    prompt: "Párosítsa az agyidegek számát elnevezésükkel!",
    pairs: [
      {
        id: "i_agyideg",
        left: "I. agyideg",
        right: "szaglóideg",
      },
      {
        id: "v_agyideg",
        left: "V. agyideg",
        right: "háromosztatú ideg",
      },
      {
        id: "viii_agyideg",
        left: "VIII. agyideg",
        right: "egyensúlyozó és hallóideg",
      },
    ],
  },
  {
    id: "testmukodes-175",
    topicId: "testmukodes",
    type: "matching",
    prompt: "Párosítsa az agyidegek számát elnevezésükkel!",
    pairs: [
      {
        id: "iv_agyideg",
        left: "IV. agyideg",
        right: "sodorideg",
      },
      {
        id: "vi_agyideg",
        left: "VI. agyideg",
        right: "távolító ideg",
      },
      {
        id: "ix_agyideg",
        left: "IX. agyideg",
        right: "nyelv-garat ideg",
      },
    ],
  },
  {
    id: "testmukodes-178",
    topicId: "testmukodes",
    type: "matching",
    prompt:
      "Párosítsa az agyidegek számát elnevezésükkel! Írja a sorszámok mellé a helyes válasz betűjelét!",
    pairs: [
      {
        id: "ii-agyideg",
        left: "II. agyideg",
        right: "látóideg",
      },
      {
        id: "x-agyideg",
        left: "X. agyideg",
        right: "bolygóideg",
      },
      {
        id: "xii-agyideg",
        left: "XII. agyideg",
        right: "nyelv alatti ideg",
      },
    ],
  },
  {
    id: "testmukodes-179",
    topicId: "testmukodes",
    type: "matching",
    prompt:
      "Párosítsa az agyidegek számát elnevezésükkel! Írja a sorszámok mellé a helyes válasz betűjelét!",
    pairs: [
      {
        id: "iii-agyideg",
        left: "III. agyideg",
        right: "szemmozgató ideg",
      },
      {
        id: "vii-agyideg",
        left: "VII. agyideg",
        right: "arcideg",
      },
      {
        id: "xi-agyideg",
        left: "XI. agyideg",
        right: "járulékos ideg",
      },
    ],
  },
  {
    id: "testmukodes-180",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A gerincvelőből 28 pár gerincvelői ideg lép ki.",
        correct: false,
      },
      {
        id: "b",
        text: "A környéki idegrendszer ingerületvezető funkciót tölt be.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-181",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A kisagy a hátsó koponyagödörben helyezkedik el.",
        correct: true,
      },
      {
        id: "b",
        text: "Az idegrendszer elektromos tevékenységéről az EKG ad tájékoztatást.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-182",
    topicId: "testmukodes",
    type: "matching",
    prompt: "Párosítsa az alábbi hormonokat termelődési helyükkel!",
    pairs: [
      {
        id: "sth",
        left: "STH",
        right: "agyalapi mirigy",
      },
      {
        id: "tiroxin",
        left: "tiroxin",
        right: "pajzsmirigy",
      },
      {
        id: "parathormon",
        left: "parathormon",
        right: "mellékpajzsmirigy",
      },
      {
        id: "osztrogen",
        left: "ösztrogén",
        right: "petefészek",
      },
      {
        id: "inzulin",
        left: "inzulin",
        right: "hasnyálmirigy",
      },
    ],
  },
  {
    id: "testmukodes-183",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Jelölje be azokat a hormonokat, amelyek a vércukorszintet emelik! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "inzulin" },
      { id: "b", text: "glükagon" },
      { id: "c", text: "adrenalin" },
      { id: "d", text: "szomatosztatin" },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "testmukodes-188",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A csecsemőmirigy egy belső elválasztású mirigy.",
        correct: true,
      },
      {
        id: "b",
        text: "A belső elválasztású mirigyek biztosítják a szervezet hormonális egyensúlyát.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-189",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A másodlagos férfi nemi jelleg kialakításáért a tesztoron és a progeszteron a felelős.",
        correct: false,
      },
      {
        id: "b",
        text: "A külső elválasztású mirigyek hormonokat termelnek.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-190",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A külső elválasztású mirigyeknek kivezető csövük van.",
        correct: true,
      },
      {
        id: "b",
        text: "A hormontermelés az idegrendszer közvetlen irányítása alatt áll.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-191",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A hormonok csak a nyirokrendszer útján jutnak el a szervekhez.",
        correct: false,
      },
      {
        id: "b",
        text: "A hormonelválasztást egy rendkívül pontosan működő önszabályozó (regulációs) rendszer biztosítja.",
        correct: true,
      },
    ],
  },
  {
    id: "testmukodes-192",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Jelölje be az alábbiak közül a helyes választ! (Csak egy helyes válasz lehetséges!) A hormonok:",
    options: [
      { id: "a", text: "speciális felépítésű kémiai anyagok" },
      { id: "b", text: "speciális felépítésű fizikai anyagok" },
      { id: "c", text: "külső elválasztású mirigyek által termelődnek" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "testmukodes-193",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Jelölje be az alábbiak közül a helyes választ! (Csak egy helyes válasz lehetséges!) A növekedési hormon:",
    options: [
      { id: "a", text: "termelődése leáll a pubertás után" },
      { id: "b", text: "egész életen át termelődik" },
      { id: "c", text: "termelődése a pubertás után kifejezett" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "testmukodes-194",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Jelölje be az alábbiak közül a helyes választ! (Csak egy helyes válasz lehetséges!) A hipofízis:",
    options: [
      { id: "a", text: "a hátsó koponya gödörben helyezkedik el" },
      { id: "b", text: "nem kapcsolódik a hypothalamushoz" },
      { id: "c", text: "bab alakú és nagyságú mirigy" },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "testmukodes-195",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Jelölje be azt a hormont, amely a vércukorszintet csökkenti! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "inzulin" },
      { id: "b", text: "glükagon" },
      { id: "c", text: "adrenalin" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "testmukodes-196",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A növekedési hormon hatására a csontok hosszirányban növekednek.",
        correct: true,
      },
      {
        id: "b",
        text: "A progeszteront a hasnyálmirigy termeli.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-197",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A mellékvese egy belső elválasztású mirigy.",
        correct: true,
      },
      {
        id: "b",
        text: "Az inzulin a pajzsmirigyben termelődik.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-198",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A tiroxin a pajzsmirigy hormonja.",
        correct: true,
      },
      {
        id: "b",
        text: "Az antidiuretikus hormon (ADH) csökkenti a vízvisszaszívást a vese gyűjtőcsatornáiban.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-201",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Jelölje be az alábbiak közül a tiroxin és a trijód-tironin hormonokra vonatkozó helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "lassítják az anyagcsere-folyamatokat" },
      { id: "b", text: "fokozzák az anyagcsere-folyamatokat" },
      { id: "c", text: "emelik a légzésszámot és fokozzák a szívműködést" },
      {
        id: "d",
        text: "csökkentik a légzésszámot és lassítják a szívműködést",
      },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "testmukodes-202",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Jelölje be az alábbiak közül a progeszteronra vonatkozó helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "a petefészekben termelődik" },
      { id: "b", text: "a herecsatornákban termelődik" },
      { id: "c", text: "másodlagos férfi nemi jelleg kialakításáért felelős" },
      {
        id: "d",
        text: "a méhnyálkahártyáját készíti elő a megtermékenyített petesejt befogadására",
      },
    ],
    correctOptionIds: ["a", "d"],
  },
  {
    id: "testmukodes-203",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Jelölje be az alábbiak közül a hasnyálmirigyre vonatkozó helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "a hasüregben, a máj és a gerincoszlop között helyezkedik el nyílirányban",
      },
      {
        id: "b",
        text: "a hasüregben, a gyomor és a gerincoszlop között helyezkedik el harántirányban",
      },
      { id: "c", text: "belső és külső elválasztású mirigyként is működik" },
      { id: "d", text: "csak külső elválasztású mirigyként működik" },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "testmukodes-204",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Jelölje be az alábbiak közül az endokrin rendszerre vonatkozó helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "a hasnyálmirigy hormonjai a glükagon, az inzulin és a szomatosztatin",
      },
      {
        id: "b",
        text: "a pajzsmirigy két lebenyből álló belső elválasztású mirigy",
      },
      {
        id: "c",
        text: "a külső elválasztású mirigyek váladékait nevezzük hormonoknak",
      },
      {
        id: "d",
        text: "a vérben a hormonszint növekedése fokozott hormonelválasztást vált ki minden endokrin mirigyben",
      },
    ],
    correctOptionIds: ["a", "b"],
  },
  {
    id: "testmukodes-205",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Jelölje be az alábbiak közül a hypothalamusra vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "A hypothalamus a köztiagynak a thalamus alatti részén található, az I. agykamra oldalfalát képezi.",
      },
      {
        id: "b",
        text: "A hypothalamus a köztiagynak a thalamus alatti részén található, a III. agykamra oldalfalát képezi.",
      },
      {
        id: "c",
        text: "A hypothalamus bab alakú és nagyságú mirigy.",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "testmukodes-206",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt: "Jelölje be a belsőfül részeit! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "dobüreg" },
      { id: "b", text: "ívjáratok" },
      { id: "c", text: "Corti-szerv" },
      { id: "d", text: "hallócsontok" },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "testmukodes-207",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt: "Jelölje be a belsőfül részeit! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "hallóideg" },
      { id: "b", text: "kengyel" },
      { id: "c", text: "csiga" },
      { id: "d", text: "dobhártya" },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "testmukodes-208",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt: "Jelölje be a szem részeit! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "szemgolyó" },
      { id: "b", text: "szemtengely" },
      { id: "c", text: "szemmozgató izmok" },
      { id: "d", text: "látótér" },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "testmukodes-209",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt: "Jelölje be a szem részeit! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "a szem védőkészülékei" },
      { id: "b", text: "szemcsatorna" },
      { id: "c", text: "könnykészülék" },
      { id: "d", text: "pupilla-váz" },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "testmukodes-210",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Jelölje be a szem középső burkának részeit! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "szivárványhártya" },
      { id: "b", text: "sugártest" },
      { id: "c", text: "szaruhártya" },
      { id: "d", text: "ideghártya" },
    ],
    correctOptionIds: ["a", "b"],
  },
  {
    id: "testmukodes-211",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Jelölje be az alábbiak közül a szem fénytörő közegeit! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "könnykészülék" },
      { id: "b", text: "sárgafolt" },
      { id: "c", text: "szemlencse" },
      { id: "d", text: "üvegtest" },
    ],
    correctOptionIds: ["c", "d"],
  },
  {
    id: "testmukodes-212",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Jelölje be az alábbiak közül a helyes választ! (Csak egy helyes válasz lehetséges!) Az egyensúlyozó készülék:",
    options: [
      { id: "a", text: "a hátsó koponya gödörben helyezkedik el" },
      { id: "b", text: "a belső fülben helyezkedik el" },
      { id: "c", text: "középfülben helyezkedik el" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "testmukodes-213",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Jelölje be az alábbiak közül a helyes választ! (Csak egy helyes válasz lehetséges!) Az üvegtest feladata:",
    options: [
      { id: "a", text: "a szem állandó alakjának biztosítása" },
      { id: "b", text: "a szem védőkészüléke" },
      { id: "c", text: "az ideghártya táplálása" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "testmukodes-214",
    topicId: "testmukodes",
    type: "matching",
    prompt: "Párosítsa a szem alkotórészeihez a feladatukat!",
    pairs: [
      {
        id: "kotohartya",
        left: "kötőhártya",
        right: "a szem védőkészüléke",
      },
      {
        id: "sargafolt",
        left: "sárgafolt",
        right: "az éleslátás helye",
      },
      {
        id: "szemlencse",
        left: "szemlencse",
        right: "a szem fénytörő közege",
      },
    ],
  },
  {
    id: "testmukodes-215",
    topicId: "testmukodes",
    type: "matching",
    prompt: "Párosítsa a bőr rétegeit jellemzőikkel!",
    pairs: [
      {
        id: "felham",
        left: "felhám",
        right: "többrétegű elszarusodó laphám",
      },
      {
        id: "irha",
        left: "irha",
        right: "kötőszöveti rostokból épül fel",
      },
      {
        id: "bor-alatti-kotoszovet",
        left: "bőr alatti kötőszövet",
        right: "sok kötőszöveti rostot és zsírt tartalmaz",
      },
    ],
  },
  {
    id: "testmukodes-218",
    topicId: "testmukodes",
    type: "single_choice",
    prompt:
      "Jelölje be az alábbiak közül a helyes választ! (Csak egy helyes válasz lehetséges!) A bőr:",
    options: [
      { id: "a", text: "két rétegből épül fel" },
      { id: "b", text: "három rétegből épül fel" },
      { id: "c", text: "irha rétege a szervezet egyik zsírraktára" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "testmukodes-219",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A verejtékmirigyek bőr járulékos részei.",
        correct: true,
      },
      {
        id: "b",
        text: "A szőrszálak a bőr irharétegében helyezkednek el.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-220",
    topicId: "testmukodes",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A verejtékmirigyek a bőr alatti kötőszövetbe vannak beágyazva.",
        correct: false,
      },
      {
        id: "b",
        text: "A köröm nem tartozik bőr járulékos részeihez.",
        correct: false,
      },
    ],
  },
  {
    id: "testmukodes-227",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Jelölje be azokat a képleteket, amelyek részt vesznek az egyensúly-érzékelés folyamatában! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "zsákocska" },
      { id: "b", text: "hártyás ívjárat" },
      { id: "c", text: "VII. agyideg" },
      { id: "d", text: "talamusz" },
    ],
    correctOptionIds: ["a", "b", "d"],
  },
  {
    id: "testmukodes-228",
    topicId: "testmukodes",
    type: "multiple_choice",
    prompt:
      "Jelölje be azokat a képleteket, amelyek részt vesznek az egyensúly-érzékelés folyamatában! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "tömlőcske" },
      { id: "b", text: "fülkagyló" },
      { id: "c", text: "VIII. agyideg" },
      { id: "d", text: "I. agyideg" },
      { id: "e", text: "IX. agyideg" },
    ],
    correctOptionIds: ["a", "c"],
  },
];
