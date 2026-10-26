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
  {
    id: "testmukodes-026",
    topicId: "testmukodes",
    type: "fill_in",
    prompt:
      "Egészítse ki az izomösszehúzódást kiváltó ingerekkel kapcsolatos mondatokat!",
    statements: [
      {
        id: "gyenge-inger",
        parts: [
          "Azt a gyenge ingert, amely nem vált ki összehúzódást, ",
          {
            id: "inger",
            label: "Az összehúzódást nem kiváltó inger neve",
            options: [
              { id: "kuszob-alatti", text: "küszöb alatti" },
              { id: "kuszob", text: "küszöb" },
              { id: "maximalis", text: "maximális" },
            ],
            correctOptionId: "kuszob-alatti",
          },
          " ingernek nevezzük.",
        ],
      },
      {
        id: "minimalis-inger",
        parts: [
          "A minimális ingererősség, amelyre az izom összehúzódással válaszol, a ",
          {
            id: "inger",
            label: "Az összehúzódást már kiváltó minimális inger neve",
            options: [
              { id: "kuszob-alatti", text: "küszöb alatti" },
              { id: "kuszob", text: "küszöb" },
              { id: "maximalis", text: "maximális" },
            ],
            correctOptionId: "kuszob",
          },
          "inger.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-028",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki az izmok elhelyezkedésével kapcsolatos mondatokat!",
    statements: [
      {
        id: "mellureg-hasureg",
        parts: [
          "A ",
          {
            id: "izom",
            label: "A mellüreget és a hasüreget határoló izom",
            options: [
              { id: "rekeszizom", text: "rekeszizom" },
              { id: "harant-hasizom", text: "haránt hasizom" },
              { id: "nagy-mellizom", text: "nagy mellizom" },
            ],
            correctOptionId: "rekeszizom",
          },
          " a mellüreget és a hasüreget határolja.",
        ],
      },
      {
        id: "legyezo-alaku-izom",
        parts: [
          "A ",
          {
            id: "izom",
            label:
              "A mellkastól a felső végtag felé húzódó, legyező alakú izom",
            options: [
              { id: "rekeszizom", text: "rekeszizom" },
              { id: "harant-hasizom", text: "haránt hasizom" },
              { id: "nagy-mellizom", text: "nagy mellizom" },
            ],
            correctOptionId: "nagy-mellizom",
          },
          " legyező alakú izom, a mellkastól a felső végtag felé húzódik.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-055",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki a keringés szervrendszerére vonatkozó mondatot!",
    statements: [
      {
        id: "ingerkepzo-kozpontok",
        parts: [
          "A szív ",
          {
            id: "elso-pitvar",
            label: "Az elsődleges ingerképző központot tartalmazó pitvar",
            options: [
              { id: "jobb", text: "jobb" },
              { id: "bal", text: "bal" },
            ],
            correctOptionId: "jobb",
          },
          " pitvarának falában található az elsődleges ingerképző központ, a ",
          {
            id: "elsodleges-kozpont",
            label: "Az elsődleges ingerképző központ neve",
            options: [
              { id: "sinuscsomo", text: "sinuscsomó" },
              { id: "pitvarkamrai-csomo", text: "pitvarkamrai csomó" },
            ],
            correctOptionId: "sinuscsomo",
          },
          ", a ",
          {
            id: "masodik-pitvar",
            label: "A másodlagos ingerképző központot tartalmazó pitvar",
            options: [
              { id: "bal", text: "bal" },
              { id: "jobb", text: "jobb" },
            ],
            correctOptionId: "jobb",
          },
          " pitvarnak a jobb kamrához közeli részében van a másodlagos ingerképző központja, a ",
          {
            id: "masodlagos-kozpont",
            label: "A másodlagos ingerképző központ neve",
            options: [
              { id: "sinuscsomo", text: "sinuscsomó" },
              { id: "pitvarkamrai-csomo", text: "pitvarkamrai csomó" },
            ],
            correctOptionId: "pitvarkamrai-csomo",
          },
          ".",
        ],
      },
    ],
  },
  {
    id: "testmukodes-056",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki a keringés szervrendszerére vonatkozó mondatot!",
    statements: [
      {
        id: "sziv-ingeruletvezetes",
        parts: [
          "A szív két ingerképző központjában keletkezett ingerületet a ",
          {
            id: "his-koteg",
            label: "Az ingerületvezető rendszer első képlete",
            options: [
              { id: "his-koteg", text: "His-köteg" },
              { id: "tawara-szarak", text: "Tawara-szárak" },
              { id: "purkinje-rostok", text: "Purkinje-rostok" },
            ],
            correctOptionId: "his-koteg",
          },
          ", a ",
          {
            id: "tawara-szarak",
            label: "Az ingerületvezető rendszer második képlete",
            options: [
              { id: "his-koteg", text: "His-köteg" },
              { id: "tawara-szarak", text: "Tawara-szárak" },
              { id: "purkinje-rostok", text: "Purkinje-rostok" },
            ],
            correctOptionId: "tawara-szarak",
          },
          " és a ",
          {
            id: "purkinje-rostok",
            label: "Az ingerületvezető rendszer harmadik képlete",
            options: [
              { id: "his-koteg", text: "His-köteg" },
              { id: "tawara-szarak", text: "Tawara-szárak" },
              { id: "purkinje-rostok", text: "Purkinje-rostok" },
            ],
            correctOptionId: "purkinje-rostok",
          },
          " továbbítják a kamrák izomzatához.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-057",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki a keringés szervrendszerére vonatkozó mondatot!",
    statements: [
      {
        id: "erek-elagazodasa",
        parts: [
          "Az ",
          {
            id: "erek",
            label: "A szívtől haladva egyre finomabb ágakra oszló erek",
            options: [
              { id: "arteriak", text: "artériák" },
              { id: "venak", text: "vénák" },
            ],
            correctOptionId: "arteriak",
          },
          " a szívtől haladva egyre finomabb ágakra oszlanak.",
        ],
      },
      {
        id: "anyagcsere",
        parts: [
          "Vékony falukon át történik a tápanyagok és az oxigén ",
          {
            id: "tapanyag-oxigen",
            label: "A tápanyagok és az oxigén átadásának iránya",
            options: [
              { id: "felvetele", text: "felvétele" },
              { id: "leadasa", text: "leadása" },
            ],
            correctOptionId: "leadasa",
          },
          ", a bomlástermékek és a szén-dioxid ",
          {
            id: "bomlastermek-szendioxid",
            label: "A bomlástermékek és a szén-dioxid átadásának iránya",
            options: [
              { id: "felvetele", text: "felvétele" },
              { id: "leadasa", text: "leadása" },
            ],
            correctOptionId: "felvetele",
          },
          ".",
        ],
      },
    ],
  },
  {
    id: "testmukodes-058",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki a keringés szervrendszerére vonatkozó mondatokat!",
    statements: [
      {
        id: "arteriak-tagulasa",
        parts: [
          "Az artériák ",
          {
            id: "sebesseg",
            label: "Az artériák tágulásának és szűkülésének sebessége",
            options: [
              { id: "gyorsan", text: "gyorsan" },
              { id: "lassan", text: "lassan" },
            ],
            correctOptionId: "gyorsan",
          },
          " tágulnak és szűkülnek.",
        ],
      },
      {
        id: "ver-szallitasa",
        parts: [
          {
            id: "erek",
            label: "A vért a szív felől a periféria felé szállító erek",
            options: [
              { id: "arteriak", text: "Az artériák" },
              { id: "venak", text: "A vénák" },
            ],
            correctOptionId: "arteriak",
          },
          " a szív felől szállítják a vért a periféria felé.",
        ],
      },
      {
        id: "aorta",
        parts: [
          {
            id: "erek",
            label: "Az aortával a szívből induló erek",
            options: [
              { id: "veroerek", text: "A verőerek" },
              { id: "gyujtoerek", text: "A gyűjtőerek" },
            ],
            correctOptionId: "veroerek",
          },
          " a szívből egy hatalmas törzzsel indulnak, ez az aorta.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-059",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Határozza meg a szívbillentyűk elhelyezkedését!",
    statements: [
      {
        id: "zsebes-billentyuk",
        parts: [
          "A zsebes billentyűk ",
          {
            id: "elhelyezkedes",
            label: "A zsebes billentyűk elhelyezkedése",
            options: [
              {
                id: "bal-pitvar-kamra",
                text: "a bal pitvar és a bal kamra között",
              },
              {
                id: "nagyarteriak-fo-visszerek",
                text: "a kamrákból kiinduló nagyartériák szájadékában és a fő visszerekben",
              },
              {
                id: "jobb-pitvar-kamra",
                text: "a jobb pitvar és a jobb kamra között",
              },
            ],
            correctOptionId: "nagyarteriak-fo-visszerek",
          },
          " helyezkednek el.",
        ],
      },
      {
        id: "haromhegyu-vitorlas-billentyu",
        parts: [
          "A háromhegyű vitorlás billentyű ",
          {
            id: "elhelyezkedes",
            label: "A háromhegyű vitorlás billentyű elhelyezkedése",
            options: [
              {
                id: "bal-pitvar-kamra",
                text: "a bal pitvar és a bal kamra között",
              },
              {
                id: "nagyarteriak-fo-visszerek",
                text: "a kamrákból kiinduló nagyartériák szájadékában és a fő visszerekben",
              },
              {
                id: "jobb-pitvar-kamra",
                text: "a jobb pitvar és a jobb kamra között",
              },
            ],
            correctOptionId: "jobb-pitvar-kamra",
          },
          " helyezkedik el.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-061",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Válassza ki a helyes választ!",
    statements: [
      {
        id: "sinuscsomo-helye",
        parts: [
          "Hol található a sinuscsomó? ",
          {
            id: "elhelyezkedes",
            label: "A sinuscsomó elhelyezkedése",
            options: [
              { id: "jobb-pitvar", text: "a jobb pitvar falában" },
              { id: "bal-pitvar", text: "a bal pitvar falában" },
            ],
            correctOptionId: "jobb-pitvar",
          },
          ".",
        ],
      },
      {
        id: "jobb-kamra-ere",
        parts: [
          "Melyik ér indul ki a jobb kamrából? ",
          {
            id: "er",
            label: "A jobb kamrából kiinduló ér",
            options: [
              { id: "arteria-pulmonalis", text: "artéria pulmonalis" },
              { id: "aorta", text: "aorta" },
            ],
            correctOptionId: "arteria-pulmonalis",
          },
          ".",
        ],
      },
    ],
  },
  {
    id: "testmukodes-073",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Válassza ki a helyes választ!",
    statements: [
      {
        id: "taplalek-levego-utja",
        parts: [
          "Melyik szervben közös a táplálék és a levegő útja? ",
          {
            id: "szerv",
            label: "A táplálék és a levegő közös útjának szerve",
            options: [
              { id: "garat", text: "garat" },
              { id: "gege", text: "gége" },
            ],
            correctOptionId: "garat",
          },
        ],
      },
      {
        id: "jobb-tudofel-lebenyei",
        parts: [
          "Hány lebenyből áll a jobboldali tüdőfél? ",
          {
            id: "lebenyek-szama",
            label: "A jobboldali tüdőfél lebenyeinek száma",
            options: [
              { id: "ketto", text: "kettő" },
              { id: "harom", text: "három" },
            ],
            correctOptionId: "harom",
          },
        ],
      },
    ],
  },
  {
    id: "testmukodes-074",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki a légzőrendszerre vonatkozó mondatokat!",
    statements: [
      {
        id: "garat",
        parts: [
          "Az orr és a szájüreg között elhelyezkedő függőleges, izmos falú cső ",
          {
            id: "szerv",
            label: "A függőleges, izmos falú cső neve",
            options: [
              { id: "garat", text: "a garat" },
              { id: "gege", text: "a gége" },
            ],
            correctOptionId: "garat",
          },
          ". Az orri szakaszban található ",
          {
            id: "mandula",
            label: "A garat orri szakaszában található mandula",
            options: [
              { id: "orrmandula", text: "az orrmandula" },
              { id: "garatmandula", text: "a garatmandula" },
            ],
            correctOptionId: "orrmandula",
          },
          ", és ide nyílik a fülkürt, mely a ",
          {
            id: "fulkurt-kapcsolat",
            label: "A fülkürt által a dobüreggel összekötött szerv",
            options: [
              { id: "garat", text: "garat" },
              { id: "gege", text: "gége" },
            ],
            correctOptionId: "garat",
          },
          " orri szakaszát köti össze a dobüreggel.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-075",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki a légzőrendszerre vonatkozó mondatot!",
    statements: [
      {
        id: "garat-szaji-szakasza",
        parts: [
          {
            id: "szakasz",
            label: "A garat torkot befogadó szakasza",
            options: [
              { id: "szaji", text: "A száji" },
              { id: "orri", text: "Az orri" },
            ],
            correctOptionId: "szaji",
          },
          " szakaszba nyílik a torok, itt a levegő és a táplálék útja közös, ebben a szakaszban található ",
          {
            id: "mandula",
            label: "A garat száji szakaszában található mandula",
            options: [
              { id: "orrmandula", text: "az orrmandula" },
              { id: "torokmandula", text: "a torokmandula" },
            ],
            correctOptionId: "torokmandula",
          },
          ", mely ",
          {
            id: "masik-mandula",
            label:
              "A torokmandulával együtt a védekező rendszerhez tartozó mandula",
            options: [
              { id: "orrmandulaval", text: "az orrmandulával" },
              { id: "torokmandulaval", text: "a torokmandulával" },
            ],
            correctOptionId: "orrmandulaval",
          },
          " együtt a szervezet védekező rendszerének része.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-076",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki a légzőrendszerre vonatkozó mondatokat!",
    statements: [
      {
        id: "garat-szakasza",
        parts: [
          "A garat ",
          {
            id: "szakasz",
            label: "A garat megfelelő szakasza",
            options: [
              { id: "gegei", text: "gégei" },
              { id: "orri", text: "orri" },
            ],
            correctOptionId: "gegei",
          },
          " szakaszából indul a gége, amely nyelőcsőben folytatódik.",
        ],
      },
      {
        id: "tapinthato-szerv",
        parts: [
          {
            id: "szerv",
            label: "A nyak középső részén tapintható szerv",
            options: [
              { id: "gege", text: "A gége" },
              { id: "garat", text: "A garat" },
            ],
            correctOptionId: "gege",
          },
          " a nyak középső részén, a nyelvcsont alatt, mint kemény, de rugalmas test tapintható.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-077",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki a légzőrendszerre vonatkozó mondatokat!",
    statements: [
      {
        id: "gege-felepitese",
        parts: [
          "A gége ",
          {
            id: "gege-resze",
            label: "A gégefő elhelyezkedése",
            options: [
              { id: "felso", text: "felső" },
              { id: "also", text: "alsó" },
            ],
            correctOptionId: "felso",
          },
          " része a gégefő, ami a hangadás szerve. A gégét a nyelvcsonthoz széles ",
          {
            id: "rogzito-keplet",
            label: "A gégét a nyelvcsonthoz rögzítő képlet",
            options: [
              { id: "szalag", text: "szalag" },
              { id: "izom", text: "izom" },
            ],
            correctOptionId: "szalag",
          },
          " rögzíti. A gége üreges, éles határ nélkül folytatódik a ",
          {
            id: "folytatas",
            label: "A gége folytatása",
            options: [
              { id: "legcsobe", text: "légcsőbe" },
              { id: "nyelocsobe", text: "nyelőcsőbe" },
            ],
            correctOptionId: "legcsobe",
          },
          ".",
        ],
      },
    ],
  },
  {
    id: "testmukodes-078",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki a légzőrendszerre vonatkozó mondatot!",
    statements: [
      {
        id: "fohorgok",
        parts: [
          "A ",
          {
            id: "tagabb-fohorgo",
            label: "A tágabb és meredekebb lefutású főhörgő oldala",
            options: [
              { id: "jobb", text: "jobb" },
              { id: "bal", text: "bal" },
            ],
            correctOptionId: "jobb",
          },
          " oldali főhörgő tágabb és meredekebb lefutású, mint a ",
          {
            id: "masik-fohorgo",
            label: "A szűkebb és kevésbé meredek lefutású főhörgő oldala",
            options: [
              { id: "jobb", text: "jobb" },
              { id: "bal", text: "bal" },
            ],
            correctOptionId: "bal",
          },
          ", ezért a gyermekeknél a légutakba került idegen testek legnagyobb része a ",
          {
            id: "idegen-test",
            label: "Az idegen testeket leggyakrabban befogadó főhörgő oldala",
            options: [
              { id: "bal", text: "bal" },
              { id: "jobb", text: "jobb" },
            ],
            correctOptionId: "jobb",
          },
          " főhörgőbe kerül.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-079",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki a légzőrendszerre vonatkozó mondatokat!",
    statements: [
      {
        id: "leguti-ham",
        parts: [
          "A légcső és a hörgők nyálkahártyahámját csillószőrös ",
          {
            id: "hamtipus",
            label: "A légcső és a hörgők hámjának típusa",
            options: [
              { id: "lapham", text: "laphám" },
              { id: "hengerham", text: "hengerhám" },
            ],
            correctOptionId: "hengerham",
          },
          " alkotja.",
        ],
      },
      {
        id: "leguti-mirigyek",
        parts: [
          "Itt számos ",
          {
            id: "mirigytipus",
            label: "A légutakban található mirigyek típusa",
            options: [
              { id: "nyaktermelo", text: "nyáktermelő" },
              { id: "hormontermelo", text: "hormontermelő" },
            ],
            correctOptionId: "nyaktermelo",
          },
          " mirigyet találunk.",
        ],
      },
      {
        id: "fohorgo-agak-es-tudolebenyek",
        parts: [
          "A főhörgő a jobb tüdőfélbe ",
          {
            id: "jobb-agak",
            label: "A jobb tüdőfélbe tartó főhörgőágak száma",
            options: [
              { id: "3", text: "3" },
              { id: "2", text: "2" },
            ],
            correctOptionId: "3",
          },
          ", a bal tüdőfélbe ",
          {
            id: "bal-agak",
            label: "A bal tüdőfélbe tartó főhörgőágak száma",
            options: [
              { id: "3", text: "3" },
              { id: "2", text: "2" },
            ],
            correctOptionId: "2",
          },
          " ágat ad, ennek megfelelően a jobb oldalon ",
          {
            id: "jobb-lebenyek",
            label: "A jobb oldali tüdőlebenyek száma",
            options: [
              { id: "3", text: "3" },
              { id: "2", text: "2" },
            ],
            correctOptionId: "3",
          },
          ", a bal oldalon ",
          {
            id: "bal-lebenyek",
            label: "A bal oldali tüdőlebenyek száma",
            options: [
              { id: "3", text: "3" },
              { id: "2", text: "2" },
            ],
            correctOptionId: "2",
          },
          " tüdőlebeny helyezkedik el.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-080",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki a légzőrendszerre vonatkozó mondatot!",
    statements: [
      {
        id: "tudofelek-jellemzoi",
        parts: [
          "A két tüdőfél nagy kiterjedésű, ",
          {
            id: "tapintas",
            label: "A tüdő tapintása",
            options: [
              { id: "szivacsos", text: "szivacsos" },
              { id: "merev", text: "merev" },
            ],
            correctOptionId: "szivacsos",
          },
          " tapintású, ",
          {
            id: "rugalmassag",
            label: "A tüdő rugalmassága",
            options: [
              { id: "rugalmas", text: "rugalmas" },
              { id: "rugalmatlan", text: "rugalmatlan" },
            ],
            correctOptionId: "rugalmas",
          },
          " szerv, a mellüregben, egymástól a ",
          {
            id: "elvalaszto-szerv",
            label: "A két tüdőfelet a nagyerekkel együtt elválasztó szerv",
            options: [
              { id: "maj", text: "máj" },
              { id: "sziv", text: "szív" },
            ],
            correctOptionId: "sziv",
          },
          " és a nagyerek által elválasztva helyezkednek el.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-081",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki a légzőrendszerre vonatkozó mondatot!",
    statements: [
      {
        id: "tudo-szine",
        parts: [
          "A tüdő gyermekkorban ",
          {
            id: "szin",
            label: "A tüdő színe gyermekkorban",
            options: [
              { id: "kekes", text: "kékes" },
              { id: "rozsaszinu", text: "rózsaszínű" },
            ],
            correctOptionId: "rozsaszinu",
          },
          ", később a lerakódott por- és koromszemcsék folytán palaszürkévé válik, nagyvárosban, illetve dohányzás hatására feketévé.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-082",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki a légzőrendszerre vonatkozó mondatot!",
    statements: [
      {
        id: "tudofelek-nagysaga",
        parts: [
          "A két tüdőfél ",
          {
            id: "nagysag",
            label: "A két tüdőfél nagyságának összehasonlítása",
            options: [
              { id: "nem-egyforma", text: "nem egyforma" },
              { id: "egyforma", text: "egyforma" },
            ],
            correctOptionId: "nem-egyforma",
          },
          " nagyságú, mert a mellüreg bal oldalának egy részét a ",
          {
            id: "szerv",
            label: "A mellüreg bal oldalának egy részét elfoglaló szerv",
            options: [
              { id: "maj", text: "máj" },
              { id: "sziv", text: "szív" },
            ],
            correctOptionId: "sziv",
          },
          " foglalja el.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-127",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki a vese szerkezetére vonatkozó mondatot!",
    statements: [
      {
        id: "vese-allomanyai",
        parts: [
          "A vese külső, szemcsés részét ",
          {
            id: "kulso-resz",
            label: "A vese külső, szemcsés részének neve",
            options: [
              { id: "keregallomany", text: "kéregállománynak" },
              { id: "veloallomany", text: "velőállománynak" },
              { id: "vesemedence", text: "vesemedencének" },
            ],
            correctOptionId: "keregallomany",
          },
          ", belső szélesebb csíkolt részét ",
          {
            id: "belso-resz",
            label: "A vese belső, szélesebb, csíkolt részének neve",
            options: [
              { id: "keregallomany", text: "kéregállománynak" },
              { id: "veloallomany", text: "velőállománynak" },
              { id: "vesemedence", text: "vesemedencének" },
            ],
            correctOptionId: "veloallomany",
          },
          " nevezzük.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-133",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki a vizeletre vonatkozó mondatot!",
    statements: [
      {
        id: "normal-vizelet",
        parts: [
          "A normál vizelet ",
          {
            id: "szin",
            label: "A normál vizelet színe",
            options: [
              { id: "szintelen", text: "színtelen" },
              { id: "szalmasarga", text: "szalmasárga" },
              { id: "voros", text: "vörös" },
            ],
            correctOptionId: "szalmasarga",
          },
          " színű, ",
          {
            id: "szag",
            label: "A normál vizelet szaga",
            options: [
              { id: "szagtalan", text: "szagtalan" },
              { id: "szuros-ammonia", text: "szúrós (ammónia)" },
              { id: "edeskes", text: "édeskés" },
            ],
            correctOptionId: "szuros-ammonia",
          },
          " szagú, ",
          {
            id: "atlatszosag",
            label: "A normál vizelet átlátszósága",
            options: [
              { id: "atlatszo", text: "átlátszó" },
              { id: "zavaros", text: "zavaros" },
            ],
            correctOptionId: "atlatszo",
          },
          " folyadék.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-134",
    topicId: "testmukodes",
    type: "fill_in",
    prompt:
      "Hasonlítsa össze az elsődleges és a másodlagos vizelet jellemzőit!",
    statements: [
      {
        id: "elsodleges-vizelet",
        parts: [
          "Az elsődleges vizelet képzésének helye: ",
          {
            id: "kepzes",
            label: "Az elsődleges vizelet képzésének helye",
            options: [
              {
                id: "malpighi-testek",
                text: "Malpighi-testek hajszálérgomolyagjai",
              },
              { id: "vesecsatornak", text: "vesecsatornák" },
            ],
            correctOptionId: "malpighi-testek",
          },
          ". Mennyisége: ",
          {
            id: "mennyiseg",
            label: "Az elsődleges vizelet napi mennyisége",
            options: [
              { id: "180-liter", text: "180 liter/nap" },
              { id: "1-1-5-liter", text: "1–1,5 l/nap" },
            ],
            correctOptionId: "180-liter",
          },
          ". Koncentrációja: ",
          {
            id: "koncentracio",
            label: "Az elsődleges vizelet koncentrációja",
            options: [
              { id: "higabb", text: "hígabb" },
              { id: "tomenyebb", text: "töményebb" },
            ],
            correctOptionId: "higabb",
          },
          ".",
        ],
      },
      {
        id: "masodlagos-vizelet",
        parts: [
          "A másodlagos vizelet képzésének helye: ",
          {
            id: "kepzes",
            label: "A másodlagos vizelet képzésének helye",
            options: [
              {
                id: "malpighi-testek",
                text: "Malpighi-testek hajszálérgomolyagjai",
              },
              { id: "vesecsatornak", text: "vesecsatornák" },
            ],
            correctOptionId: "vesecsatornak",
          },
          ". Mennyisége: ",
          {
            id: "mennyiseg",
            label: "A másodlagos vizelet napi mennyisége",
            options: [
              { id: "180-liter", text: "180 liter/nap" },
              { id: "1-1-5-liter", text: "1–1,5 l/nap" },
            ],
            correctOptionId: "1-1-5-liter",
          },
          ". Koncentrációja: ",
          {
            id: "koncentracio",
            label: "A másodlagos vizelet koncentrációja",
            options: [
              { id: "higabb", text: "hígabb" },
              { id: "tomenyebb", text: "töményebb" },
            ],
            correctOptionId: "tomenyebb",
          },
          ".",
        ],
      },
    ],
  },
  {
    id: "testmukodes-140",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki a férfi nemi szervekkel kapcsolatos mondatokat!",
    statements: [
      {
        id: "herezacsko",
        parts: [
          "A ",
          {
            id: "szerv",
            label: "Az erősen pigmentált bőrű szerv neve",
            options: [
              { id: "herezacsko", text: "herezacskó" },
              { id: "himvesszo", text: "hímvessző" },
              { id: "here", text: "here" },
            ],
            correctOptionId: "herezacsko",
          },
          " bőre erősen pigmentált, rétegződése a hasfalénak felel meg.",
        ],
      },
      {
        id: "himvesszo",
        parts: [
          "A ",
          {
            id: "szerv",
            label: "A megnyúlt henger alakú szerv neve",
            options: [
              { id: "herezacsko", text: "herezacskó" },
              { id: "himvesszo", text: "hímvessző" },
              { id: "here", text: "here" },
            ],
            correctOptionId: "himvesszo",
          },
          " megnyúlt henger alakú szerv, a végén a húgycső külső nyílása található.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-145",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki a férfi nemi szervekkel kapcsolatos mondatokat!",
    statements: [
      {
        id: "here",
        parts: [
          "A ",
          {
            id: "szerv",
            label: "A galambtojás nagyságú és alakú páros szerv neve",
            options: [
              { id: "herezacsko", text: "herezacskó" },
              { id: "himvesszo", text: "hímvessző" },
              { id: "here", text: "here" },
            ],
            correctOptionId: "here",
          },
          " kb. galambtojás nagyságú és alakú páros szerv, amely a hasüregen kívül a ",
          {
            id: "elhelyezkedes",
            label: "A here elhelyezkedése",
            options: [
              { id: "herezacskoban", text: "herezacskóban" },
              { id: "himvesszon", text: "hímvesszőn" },
              { id: "heren", text: "herén" },
            ],
            correctOptionId: "herezacskoban",
          },
          " helyezkedik el.",
        ],
      },
      {
        id: "herezacsko",
        parts: [
          "A ",
          {
            id: "szerv",
            label: "Az optimális hőmérsékletet biztosító szerv neve",
            options: [
              { id: "herezacsko", text: "herezacskó" },
              { id: "himvesszo", text: "hímvessző" },
              { id: "here", text: "here" },
            ],
            correctOptionId: "herezacsko",
          },
          " feladata a ",
          {
            id: "celzott-szerv",
            label: "Mely szervek működéséhez biztosít optimális hőmérsékletet?",
            options: [
              { id: "herezacsko", text: "herezacskó" },
              { id: "himvesszo", text: "hímvessző" },
              { id: "herek", text: "herék" },
            ],
            correctOptionId: "herek",
          },
          " működéséhez szükséges optimális hőmérséklet biztosítása.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-164",
    topicId: "testmukodes",
    type: "fill_in",
    prompt:
      "Hasonlítsa össze a vegetatív idegrendszer különböző szervekre irányuló hatását! Válassza ki a megfelelőket!",
    statements: [
      {
        id: "gyomor-hasnyalmirigy",
        parts: [
          "Gyomor, hasnyálmirigy – szimpatikus hatás: ",
          {
            id: "szimpatikus",
            label: "A gyomor és a hasnyálmirigy szimpatikus hatása",
            options: [
              { id: "fokozodik", text: "elválasztó működése fokozódik" },
              { id: "csokken", text: "elválasztó működése csökken" },
            ],
            correctOptionId: "csokken",
          },
          "; paraszimpatikus hatás: ",
          {
            id: "paraszimpatikus",
            label: "A gyomor és a hasnyálmirigy paraszimpatikus hatása",
            options: [
              { id: "fokozodik", text: "elválasztó működése fokozódik" },
              { id: "csokken", text: "elválasztó működése csökken" },
            ],
            correctOptionId: "fokozodik",
          },
          ".",
        ],
      },
      {
        id: "belizomzat",
        parts: [
          "Bélizomzat – szimpatikus hatás: ",
          {
            id: "szimpatikus",
            label: "A bélizomzat szimpatikus hatása",
            options: [
              { id: "fokozott", text: "fokozott perisztaltika" },
              { id: "csokkent", text: "csökkent perisztaltika" },
            ],
            correctOptionId: "csokkent",
          },
          "; paraszimpatikus hatás: ",
          {
            id: "paraszimpatikus",
            label: "A bélizomzat paraszimpatikus hatása",
            options: [
              { id: "fokozott", text: "fokozott perisztaltika" },
              { id: "csokkent", text: "csökkent perisztaltika" },
            ],
            correctOptionId: "fokozott",
          },
          ".",
        ],
      },
    ],
  },
  {
    id: "testmukodes-165",
    topicId: "testmukodes",
    type: "fill_in",
    prompt:
      "Hasonlítsa össze a vegetatív idegrendszer különböző szervekre irányuló hatását! Válassza ki a megfelelőket!",
    statements: [
      {
        id: "szem-pupilla",
        parts: [
          "Szem (pupilla) – szimpatikus hatás: ",
          {
            id: "szimpatikus",
            label: "A pupilla változása szimpatikus hatásra",
            options: [
              { id: "tagul", text: "tágul" },
              { id: "szukul", text: "szűkül" },
            ],
            correctOptionId: "tagul",
          },
          "; paraszimpatikus hatás: ",
          {
            id: "paraszimpatikus",
            label: "A pupilla változása paraszimpatikus hatásra",
            options: [
              { id: "tagul", text: "tágul" },
              { id: "szukul", text: "szűkül" },
            ],
            correctOptionId: "szukul",
          },
          ".",
        ],
      },
      {
        id: "tudo-horgok",
        parts: [
          "Tüdő hörgők – szimpatikus hatás: ",
          {
            id: "szimpatikus",
            label: "A hörgők változása szimpatikus hatásra",
            options: [
              { id: "szukulnek", text: "szűkülnek" },
              { id: "tagulnak", text: "tágulnak" },
            ],
            correctOptionId: "tagulnak",
          },
          "; paraszimpatikus hatás: ",
          {
            id: "paraszimpatikus",
            label: "A hörgők változása paraszimpatikus hatásra",
            options: [
              { id: "szukulnek", text: "szűkülnek" },
              { id: "tagulnak", text: "tágulnak" },
            ],
            correctOptionId: "szukulnek",
          },
          ".",
        ],
      },
    ],
  },
  {
    id: "testmukodes-166",
    topicId: "testmukodes",
    type: "fill_in",
    prompt:
      "Hasonlítsa össze a vegetatív idegrendszer hatását a megadottak szerint! Válassza ki a helyes választ!",
    statements: [
      {
        id: "legzesszam",
        parts: [
          "Légzésszám – szimpatikus hatás: ",
          {
            id: "szimpatikus",
            label: "A légzésszám változása szimpatikus hatásra",
            options: [
              { id: "no", text: "nő" },
              { id: "csokken", text: "csökken" },
            ],
            correctOptionId: "no",
          },
          "; paraszimpatikus hatás: ",
          {
            id: "paraszimpatikus",
            label: "A légzésszám változása paraszimpatikus hatásra",
            options: [
              { id: "csokken", text: "csökken" },
              { id: "no", text: "nő" },
            ],
            correctOptionId: "csokken",
          },
          ".",
        ],
      },
      {
        id: "vazizomzat",
        parts: [
          "Vázizomzat – szimpatikus hatás: ",
          {
            id: "szimpatikus",
            label: "A vázizomzat változása szimpatikus hatásra",
            options: [
              { id: "tonusfokozodas", text: "tónusfokozódás" },
              { id: "tonuscsokkenes", text: "tónuscsökkenés" },
            ],
            correctOptionId: "tonusfokozodas",
          },
          "; paraszimpatikus hatás: ",
          {
            id: "paraszimpatikus",
            label: "A vázizomzat változása paraszimpatikus hatásra",
            options: [
              { id: "ellazul", text: "ellazul" },
              { id: "tonusfokozodas", text: "tónusfokozódás" },
            ],
            correctOptionId: "ellazul",
          },
          ".",
        ],
      },
      {
        id: "vercukorszint",
        parts: [
          "Vércukorszint – szimpatikus hatás: ",
          {
            id: "szimpatikus",
            label: "A vércukorszint változása szimpatikus hatásra",
            options: [
              { id: "csokken", text: "csökken" },
              { id: "emelkedik", text: "emelkedik" },
            ],
            correctOptionId: "emelkedik",
          },
          "; paraszimpatikus hatás: ",
          {
            id: "paraszimpatikus",
            label: "A vércukorszint változása paraszimpatikus hatásra",
            options: [
              { id: "csokken", text: "csökken" },
              { id: "no", text: "nő" },
            ],
            correctOptionId: "csokken",
          },
          ".",
        ],
      },
    ],
  },
  {
    id: "testmukodes-167",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki a gerincvelői idegek számával az alábbi táblázatot!",
    statements: [
      {
        id: "nyaki-ideg",
        parts: [
          "Nyaki ideg: ",
          {
            id: "idegek-szama",
            label: "A nyaki gerincvelői idegek száma párban",
            options: [
              { id: "5", text: "5" },
              { id: "8", text: "8" },
              { id: "12", text: "12" },
            ],
            correctOptionId: "8",
          },
          " pár.",
        ],
      },
      {
        id: "hati-ideg",
        parts: [
          "Háti ideg: ",
          {
            id: "idegek-szama",
            label: "A háti gerincvelői idegek száma párban",
            options: [
              { id: "5", text: "5" },
              { id: "8", text: "8" },
              { id: "12", text: "12" },
            ],
            correctOptionId: "12",
          },
          " pár.",
        ],
      },
      {
        id: "agyeki-ideg",
        parts: [
          "Ágyéki ideg: ",
          {
            id: "idegek-szama",
            label: "Az ágyéki gerincvelői idegek száma párban",
            options: [
              { id: "5", text: "5" },
              { id: "8", text: "8" },
              { id: "12", text: "12" },
            ],
            correctOptionId: "5",
          },
          " pár.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-168",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki az idegrendszerre vonatkozó mondatokat!",
    statements: [
      {
        id: "idegi-szabalyozas",
        parts: [
          "Az idegi szabályozás kiterjed ",
          {
            id: "kiterjedes",
            label: "Mely szerveinkre terjed ki az idegi szabályozás?",
            options: [
              { id: "az-osszes", text: "az összes" },
              { id: "egyes", text: "egyes" },
            ],
            correctOptionId: "az-osszes",
          },
          " szervünkre. Az idegi szabályozás kiesése vagy működésének megbomlása ",
          {
            id: "erintett-szerv",
            label:
              "Mely szervek súlyos zavarával jár az idegi szabályozás kiesése?",
            options: [
              { id: "minden-szerv", text: "minden szerv" },
              { id: "a-megfelelo-szerv", text: "a megfelelő szerv" },
            ],
            correctOptionId: "a-megfelelo-szerv",
          },
          " súlyos zavarával jár.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-169",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki az idegrendszerre vonatkozó mondatot!",
    statements: [
      {
        id: "kornyeki-idegrendszer",
        parts: [
          "A környéki idegrendszer ",
          {
            id: "feladat-jellege",
            label: "A környéki idegrendszer feladatának jellege",
            options: [
              { id: "egyetlen", text: "egyetlen" },
              { id: "legfontosabb", text: "legfontosabb" },
            ],
            correctOptionId: "legfontosabb",
          },
          " feladata a külvilág és a szervezet ingereinek ingerületté alakítása és ennek a ",
          {
            id: "idegrendszer",
            label: "Melyik idegrendszerhez jut az ingerület?",
            options: [
              { id: "kozponti", text: "központi" },
              { id: "kornyeki", text: "környéki" },
            ],
            correctOptionId: "kozponti",
          },
          " idegrendszerhez juttatása.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-170",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki az idegrendszerre vonatkozó mondatokat!",
    statements: [
      {
        id: "agykamrak",
        parts: [
          {
            id: "agykamrak-szama",
            label: "Az agykamrák száma",
            options: [
              { id: "harom", text: "Három" },
              { id: "negy", text: "Négy" },
            ],
            correctOptionId: "negy",
          },
          " agykamrát különböztetünk meg. Az oldalkamrák a ",
          {
            id: "kiterjedes",
            label: "Az oldalkamrák kiterjedése",
            options: [
              { id: "legnagyobb", text: "legnagyobb" },
              { id: "legkisebb", text: "legkisebb" },
            ],
            correctOptionId: "legnagyobb",
          },
          " kiterjedésűek, a ",
          {
            id: "korulvevo-allomany",
            label: "Az oldalkamrákat körülvevő állomány",
            options: [
              { id: "feherallomanytol", text: "fehérállománytól" },
              { id: "szurkeallomanytol", text: "szürkeállománytól" },
            ],
            correctOptionId: "feherallomanytol",
          },
          " teljesen körülvéve a féltekékben helyezkednek el.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-184",
    topicId: "testmukodes",
    type: "fill_in",
    prompt:
      "Határozza meg az alábbi belső elválasztású mirigyek elhelyezkedését a szervezetben!",
    statements: [
      {
        id: "tobozmirigy",
        parts: [
          "Tobozmirigy: ",
          {
            id: "elhelyezkedes",
            label: "A tobozmirigy elhelyezkedése",
            options: [
              { id: "koponya", text: "a koponya belsejében" },
              {
                id: "toroknyereg",
                text: "a középső koponyagödörben, a töröknyeregben",
              },
              { id: "szegycsont", text: "a szegycsont mögött" },
            ],
            correctOptionId: "koponya",
          },
          ".",
        ],
      },
      {
        id: "hipofizis",
        parts: [
          "Hipofízis: ",
          {
            id: "elhelyezkedes",
            label: "A hipofízis elhelyezkedése",
            options: [
              { id: "koponya", text: "a koponya belsejében" },
              {
                id: "toroknyereg",
                text: "a középső koponyagödörben, a töröknyeregben",
              },
              { id: "szegycsont", text: "a szegycsont mögött" },
            ],
            correctOptionId: "toroknyereg",
          },
          ".",
        ],
      },
    ],
  },
  {
    id: "testmukodes-185",
    topicId: "testmukodes",
    type: "fill_in",
    prompt:
      "Határozza meg az alábbi belső elválasztású mirigyek elhelyezkedését a szervezetben!",
    statements: [
      {
        id: "pajzsmirigy",
        parts: [
          "Pajzsmirigy: ",
          {
            id: "elhelyezkedes",
            label: "A pajzsmirigy elhelyezkedése",
            options: [
              { id: "nyak", text: "a nyak elülső részén, a pajzsporc alatt" },
              { id: "gator", text: "a gátorüregben, a szegycsont mögött" },
              {
                id: "toroknyereg",
                text: "a középső koponyagödörben, a töröknyeregben",
              },
            ],
            correctOptionId: "nyak",
          },
          ".",
        ],
      },
      {
        id: "mellekpajzsmirigy",
        parts: [
          "Mellékpajzsmirigy: ",
          {
            id: "elhelyezkedes",
            label: "A mellékpajzsmirigy elhelyezkedése",
            options: [
              { id: "gator", text: "a gátorüregben, a szegycsont mögött" },
              {
                id: "hatso-felszin",
                text: "a pajzsmirigy lebenyeinek hátsó felszíne",
              },
              {
                id: "elulso-felszin",
                text: "a pajzsmirigy lebenyeinek elülső felszíne",
              },
            ],
            correctOptionId: "hatso-felszin",
          },
          ".",
        ],
      },
    ],
  },
  {
    id: "testmukodes-186",
    topicId: "testmukodes",
    type: "fill_in",
    prompt:
      "Határozza meg az alábbi belső elválasztású mirigyek elhelyezkedését a szervezetben!",
    statements: [
      {
        id: "csecsemomirigy",
        parts: [
          "Csecsemőmirigy: ",
          {
            id: "elhelyezkedes",
            label: "A csecsemőmirigy elhelyezkedése",
            options: [
              { id: "nyak", text: "a nyak elülső részén, a pajzsporc alatt" },
              {
                id: "toroknyereg",
                text: "a középső koponyagödörben, a töröknyeregben",
              },
              { id: "gator", text: "a gátorüregben, a szegycsont mögött" },
            ],
            correctOptionId: "gator",
          },
          ".",
        ],
      },
      {
        id: "hasnyalmirigy",
        parts: [
          "Hasnyálmirigy: ",
          {
            id: "elhelyezkedes",
            label: "A hasnyálmirigy elhelyezkedése",
            options: [
              {
                id: "gyomor-gerincoszlop",
                text: "a hasüregben, a gyomor és a gerincoszlop között",
              },
              { id: "gyomor-elott", text: "a hasüregben, a gyomor előtt" },
              {
                id: "rekesz-alatt",
                text: "közvetlenül a rekesz alatt, a jobb oldalon",
              },
            ],
            correctOptionId: "gyomor-gerincoszlop",
          },
          ".",
        ],
      },
    ],
  },
  {
    id: "testmukodes-199",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki az endokrin rendszerre vonatkozó mondatot!",
    statements: [
      {
        id: "endokrin-rendszer",
        parts: [
          "Az endokrin rendszer az ",
          {
            id: "kapcsolat",
            label: "Az endokrin rendszerrel szoros kapcsolatban álló rendszer",
            options: [
              { id: "idegrendszer", text: "idegrendszerrel" },
              { id: "erzekszervek", text: "érzékszervekkel" },
            ],
            correctOptionId: "idegrendszer",
          },
          " szoros kapcsolatban álló ",
          {
            id: "elvalasztas",
            label: "Az endokrin mirigyek elválasztásának típusa",
            options: [
              { id: "kulso", text: "külső" },
              { id: "belso", text: "belső" },
            ],
            correctOptionId: "belso",
          },
          " elválasztású mirigyek rendszere.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-200",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki az endokrin rendszerre vonatkozó mondatokat!",
    statements: [
      {
        id: "mirigyek-meghatarozasa",
        parts: [
          {
            id: "elnevezes",
            label: "Testünk váladéktermelő szerveinek elnevezése",
            options: [
              { id: "mirigyek", text: "Mirigyeknek" },
              { id: "hormonok", text: "Hormonoknak" },
            ],
            correctOptionId: "mirigyek",
          },
          " testünk váladéktermelő szerveit nevezzük.",
        ],
      },
      {
        id: "mirigyek-csoportositasa",
        parts: [
          "A mirigyeket ",
          {
            id: "csoportok-szama",
            label: "A mirigyek nagy csoportjainak száma",
            options: [
              { id: "ket", text: "két" },
              { id: "harom", text: "három" },
            ],
            correctOptionId: "ket",
          },
          " nagy csoportra oszthatjuk.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-216",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Határozza meg a nyelv területeit az ízérzékelésnek megfelelően!",
    statements: [
      {
        id: "savanyu-iz",
        parts: [
          "A savanyú íz érzékelésének helye: ",
          {
            id: "erzekeles-helye",
            label: "A savanyú íz érzékelésének helye",
            options: [
              { id: "oldalso-szelek", text: "a nyelv oldalsó szélei" },
              { id: "nyelv-hegye", text: "a nyelv hegye" },
              { id: "nyelvgyok", text: "a nyelvgyök" },
            ],
            correctOptionId: "oldalso-szelek",
          },
          ".",
        ],
      },
      {
        id: "edes-iz",
        parts: [
          "Az édes íz érzékelésének helye: ",
          {
            id: "erzekeles-helye",
            label: "Az édes íz érzékelésének helye",
            options: [
              { id: "oldalso-szelek", text: "a nyelv oldalsó szélei" },
              { id: "nyelv-hegye", text: "a nyelv hegye" },
              { id: "nyelvgyok", text: "a nyelvgyök" },
            ],
            correctOptionId: "nyelv-hegye",
          },
          ".",
        ],
      },
    ],
  },
  {
    id: "testmukodes-217",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Határozza meg a nyelv területeit az ízérzékelésnek megfelelően!",
    statements: [
      {
        id: "sos-iz",
        parts: [
          "A sós íz érzékelésének helye: ",
          {
            id: "erzekeles-helye",
            label: "A sós íz érzékelésének helye",
            options: [
              { id: "oldalso-szelek", text: "a nyelv oldalsó szélei" },
              { id: "nyelv-hegye", text: "a nyelv hegye" },
              { id: "nyelvgyok", text: "a nyelvgyök" },
            ],
            correctOptionId: "oldalso-szelek",
          },
          ".",
        ],
      },
      {
        id: "keseru-iz",
        parts: [
          "A keserű íz érzékelésének helye: ",
          {
            id: "erzekeles-helye",
            label: "A keserű íz érzékelésének helye",
            options: [
              { id: "oldalso-szelek", text: "a nyelv oldalsó szélei" },
              { id: "nyelv-hegye", text: "a nyelv hegye" },
              { id: "nyelvgyok", text: "a nyelvgyök" },
            ],
            correctOptionId: "nyelvgyok",
          },
          ".",
        ],
      },
    ],
  },
  {
    id: "testmukodes-222",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki a szaglással kapcsolatos mondatot!",
    statements: [
      {
        id: "ember-szaglasa",
        parts: [
          "Az ember ",
          {
            id: "szaglas-erossege",
            label: "Az ember szaglásának erőssége",
            options: [
              { id: "gyenge", text: "a gyenge" },
              { id: "eros", text: "az erős" },
            ],
            correctOptionId: "gyenge",
          },
          " szaglású élőlények közé tartozik, szaglórendszere ",
          {
            id: "faradekonysag",
            label: "Az ember szaglórendszerének fáradékonysága",
            options: [
              { id: "nem-faradekony", text: "nem fáradékony" },
              { id: "faradekony", text: "fáradékony" },
            ],
            correctOptionId: "faradekony",
          },
          ".",
        ],
      },
    ],
  },
  {
    id: "testmukodes-223",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki a szaglással kapcsolatos mondatot!",
    statements: [
      {
        id: "szaglas",
        parts: [
          "Az orron át belélegzett levegőben lévő ",
          {
            id: "ingerlo-anyagok",
            label: "A szaglóreceptorokat ingerlő anyagok",
            options: [
              { id: "illoanyagok", text: "illóanyagok" },
              { id: "szaganyagok", text: "szaganyagok" },
            ],
            correctOptionId: "illoanyagok",
          },
          " ingerlik a receptorokat, és az innen elinduló ",
          {
            id: "agyideg",
            label: "A szaglóközpontba ingerületet továbbító agyideg",
            options: [
              { id: "i-agyideg", text: "I. agyideg" },
              { id: "iii-agyideg", text: "III. agyideg" },
            ],
            correctOptionId: "i-agyideg",
          },
          " juttatja el az ingerületet a szaglóközponthoz.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-224",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki a szaglással kapcsolatos mondatot!",
    statements: [
      {
        id: "szagloszerv-receptorai",
        parts: [
          "A szaglószerv receptorai az orrüreg ",
          {
            id: "orrureg-fala",
            label: "Az orrüreg melyik falán találhatók a szaglóreceptorok?",
            options: [
              { id: "also", text: "alsó" },
              { id: "felso", text: "felső" },
            ],
            correctOptionId: "felso",
          },
          " falát borító nyálkahártyákon található ",
          {
            id: "receptorsejtek",
            label: "A szaglószerv receptorsejtjeinek neve",
            options: [
              { id: "szaglohamsejtek", text: "szaglóhámsejtek" },
              { id: "szaglo-felham-sejtek", text: "szagló felhám sejtek" },
            ],
            correctOptionId: "szaglohamsejtek",
          },
          ".",
        ],
      },
    ],
  },
  {
    id: "testmukodes-225",
    topicId: "testmukodes",
    type: "fill_in",
    prompt: "Egészítse ki a szaglással kapcsolatos mondatot!",
    statements: [
      {
        id: "szaglas-reflexek",
        parts: [
          "A szaglásra számtalan ",
          {
            id: "reflex-tipusa",
            label: "A szaglásra épülő reflexek típusa",
            options: [
              { id: "felteteles", text: "feltételes" },
              { id: "feltetlen", text: "feltétlen" },
            ],
            correctOptionId: "felteteles",
          },
          " reflex épül, amelyek ",
          {
            id: "befolyas",
            label: "A reflexek hatása a közérzetre és az étvágyra",
            options: [
              { id: "nem-befolyasoljak", text: "nem befolyásolják" },
              { id: "befolyasoljak", text: "befolyásolják" },
            ],
            correctOptionId: "befolyasoljak",
          },
          " a közérzetünket, az étvágyunkat.",
        ],
      },
    ],
  },
  {
    id: "testmukodes-027",
    topicId: "testmukodes",
    type: "grouping",
    prompt: "Csoportosítsa az izmokat az elhelyezkedésük szerint!",
    groups: [
      { id: "mellizmok", text: "Mellizmok" },
      { id: "hatizmok", text: "Hátizmok" },
    ],
    items: [
      {
        id: "fureszizom",
        text: "Fűrészizom",
        correctGroupId: "mellizmok",
      },
      {
        id: "csuklyasizom",
        text: "Csuklyásizom/trapézizom",
        correctGroupId: "hatizmok",
      },
      {
        id: "bordakozi-izmok",
        text: "Külső és belső bordaközti izmok",
        correctGroupId: "mellizmok",
      },
      {
        id: "rombuszizom",
        text: "Rombuszizom",
        correctGroupId: "hatizmok",
      },
    ],
  },
  {
    id: "testmukodes-187",
    topicId: "testmukodes",
    type: "grouping",
    prompt: "Csoportosítsa a hormonokat termelődésük helye szerint!",
    groups: [
      { id: "hasnyalmirigy", text: "Hasnyálmirigy" },
      { id: "pajzsmirigy", text: "Pajzsmirigy" },
      { id: "petefeszek", text: "Petefészek" },
    ],
    items: [
      {
        id: "progeszteron",
        text: "progeszteron",
        correctGroupId: "petefeszek",
      },
      {
        id: "inzulin",
        text: "inzulin",
        correctGroupId: "hasnyalmirigy",
      },
      {
        id: "glukagon",
        text: "glükagon",
        correctGroupId: "hasnyalmirigy",
      },
      {
        id: "tiroxin",
        text: "tiroxin",
        correctGroupId: "pajzsmirigy",
      },
      {
        id: "kalcitonin",
        text: "kalcitonin",
        correctGroupId: "pajzsmirigy",
      },
    ],
  },
  {
    id: "testmukodes-033",
    topicId: "testmukodes",
    type: "grouping",
    prompt: "Csoportosítsa az izmokat a működésük szerint!",
    groups: [
      { id: "hajlito", text: "Hajlító izmok" },
      { id: "feszito", text: "Feszítő izmok" },
    ],
    items: [
      {
        id: "negyfeju-combizom",
        text: "Négyfejű combizom",
        correctGroupId: "feszito",
      },
      {
        id: "ketfeju-karizom",
        text: "Kétfejű karizom",
        correctGroupId: "hajlito",
      },
      {
        id: "haromfeju-karizom",
        text: "Háromfejű karizom",
        correctGroupId: "feszito",
      },
      {
        id: "ketfeju-combizom",
        text: "Kétfejű combizom",
        correctGroupId: "hajlito",
      },
    ],
  },
  {
    id: "testmukodes-047",
    topicId: "testmukodes",
    type: "grouping",
    prompt: "Csoportosítsa a szív üregeihez jellemzőiket!",
    groups: [
      { id: "jobb-pitvar", text: "Jobb pitvar jellemzői" },
      { id: "bal-kamra", text: "Bal kamra jellemzői" },
    ],
    items: [
      {
        id: "vastag-fal",
        text: "Fala kb. 15–20 mm vastag",
        correctGroupId: "bal-kamra",
      },
      {
        id: "vekony-fal",
        text: "Fala kb. 2 mm vastag",
        correctGroupId: "jobb-pitvar",
      },
      {
        id: "venas-ver",
        text: "Vénás vér található benne",
        correctGroupId: "jobb-pitvar",
      },
      {
        id: "arterias-ver",
        text: "Artériás vér található benne",
        correctGroupId: "bal-kamra",
      },
    ],
  },
  {
    id: "testmukodes-052",
    topicId: "testmukodes",
    type: "grouping",
    prompt: "Csoportosítsa a vérkörökhöz a hozzájuk tartozó ereket!",
    groups: [
      { id: "kisverkor", text: "Kisvérkör erei" },
      { id: "nagyverkor", text: "Nagyvérkör erei" },
    ],
    items: [
      {
        id: "arteria-pulmonalis",
        text: "arteria pulmonalis",
        correctGroupId: "kisverkor",
      },
      {
        id: "aorta",
        text: "aorta",
        correctGroupId: "nagyverkor",
      },
      {
        id: "vena-cava-superior",
        text: "vena cava superior",
        correctGroupId: "nagyverkor",
      },
      {
        id: "vena-pulmonalisok",
        text: "vena pulmonalisok",
        correctGroupId: "kisverkor",
      },
    ],
  },
  {
    id: "testmukodes-062",
    topicId: "testmukodes",
    type: "grouping",
    prompt: "Csoportosítsa az alábbi megállapításokat!",
    groups: [
      { id: "igaz", text: "Igaz állítás" },
      { id: "hamis", text: "Hamis állítás" },
    ],
    items: [
      {
        id: "verraktarak",
        text: "Az összvérmennyiség egy része a vérraktárakban (lép, máj, tüdő stb.) tárolódik",
        correctGroupId: "igaz",
      },
      {
        id: "vorosvertest-latin-neve",
        text: "A vörösvértestek latin megnevezése leukocyta",
        correctGroupId: "hamis",
      },
      {
        id: "voroscsontvelo",
        text: "A vöröscsontvelőben képződnek a vörösvértestek, továbbá a fehérvérsejtek egy része is",
        correctGroupId: "igaz",
      },
      {
        id: "vorosvertest-elettartama",
        text: "Az érett vörösvértestek élettartama hosszú, kb. 1200 nap",
        correctGroupId: "hamis",
      },
    ],
  },
  {
    id: "testmukodes-063",
    topicId: "testmukodes",
    type: "grouping",
    prompt: "Csoportosítsa az alábbi megállapításokat!",
    groups: [
      { id: "igaz", text: "Igaz állítás" },
      { id: "hamis", text: "Hamis állítás" },
    ],
    items: [
      {
        id: "lymphocytak",
        text: "A lymphocyták a nyirokszervekben képződnek.",
        correctGroupId: "igaz",
      },
      {
        id: "verlemezkek",
        text: "A vérlemezkék latin neve monocyta.",
        correctGroupId: "hamis",
      },
      {
        id: "versejtsullyedes",
        text: "A vérsejtsüllyedés normál értéke 100 mm/óra fölötti.",
        correctGroupId: "hamis",
      },
      {
        id: "hoszabalyozas",
        text: "A vér részt vesz a szervezet hőszabályozásában.",
        correctGroupId: "igaz",
      },
    ],
  },
  {
    id: "testmukodes-072",
    topicId: "testmukodes",
    type: "grouping",
    prompt: "Csoportosítsa az anatómiai képleteket!",
    groups: [
      { id: "felso-legutak", text: "Felső légutakhoz tartozik" },
      { id: "also-legutak", text: "Alsó légutakhoz tartozik" },
    ],
    items: [
      {
        id: "garat",
        text: "garat",
        correctGroupId: "felso-legutak",
      },
      {
        id: "legcso",
        text: "légcső",
        correctGroupId: "also-legutak",
      },
      {
        id: "orr-orrureg",
        text: "orr, orrüreg",
        correctGroupId: "felso-legutak",
      },
      {
        id: "orrmellekuregek",
        text: "orrmelléküregek",
        correctGroupId: "felso-legutak",
      },
      {
        id: "tudo",
        text: "tüdő",
        correctGroupId: "also-legutak",
      },
    ],
  },
  {
    id: "testmukodes-094",
    topicId: "testmukodes",
    type: "grouping",
    prompt: "Csoportosítsa az alábbi megállapításokat!",
    groups: [
      { id: "igaz", text: "Igaz állítás" },
      { id: "hamis", text: "Hamis állítás" },
    ],
    items: [
      {
        id: "levego-szajureg",
        text: "A levegő a szájüregben megszűrődik, felmelegszik és párásodik.",
        correctGroupId: "hamis",
      },
      {
        id: "kannaporcok",
        text: "A gyűrűporcon helyezkednek el a szabálytalan, háromoldalú, piramis alakú kannaporcok.",
        correctGroupId: "igaz",
      },
      {
        id: "nyelocso",
        text: "A nyelőcső a gyűrűporchoz szalagosan kapcsolódó kb. 10-12 cm hosszú, C alakú porcokból felépülő, rugalmas falú cső.",
        correctGroupId: "hamis",
      },
      {
        id: "vizholyagok",
        text: "A hörgőcskék végén találhatóak a vízhólyagok, melyek szőlőfürt szerűen rendeződnek el.",
        correctGroupId: "hamis",
      },
      {
        id: "mellhartya",
        text: "A mellüregben a tüdők súrlódásmentes elmozdulását a tüdőket, valamint a mellüreg belső falát borító vékony, fénylő mellhártya teszi lehetővé.",
        correctGroupId: "igaz",
      },
    ],
  },
  {
    id: "testmukodes-112",
    topicId: "testmukodes",
    type: "grouping",
    prompt: "Csoportosítsa az alábbi enzimeket előfordulási helyük szerint!",
    groups: [
      { id: "nyal", text: "Nyál" },
      { id: "gyomornedv", text: "Gyomornedv" },
    ],
    items: [
      {
        id: "ptialin",
        text: "ptialin",
        correctGroupId: "nyal",
      },
      {
        id: "kimozin",
        text: "kimozin",
        correctGroupId: "gyomornedv",
      },
      {
        id: "maltaz",
        text: "maltáz",
        correctGroupId: "nyal",
      },
      {
        id: "pepszin",
        text: "pepszin",
        correctGroupId: "gyomornedv",
      },
    ],
  },
  {
    id: "testmukodes-116",
    topicId: "testmukodes",
    type: "grouping",
    prompt: "Csoportosítsa a jellemzőket a megfelelő szervhez!",
    groups: [
      { id: "maj", text: "Máj" },
      { id: "hasnyalmirigy", text: "Hasnyálmirigy" },
    ],
    items: [
      {
        id: "magzati-verkepzes",
        text: "Magzati életben vérképző szerv",
        correctGroupId: "maj",
      },
      {
        id: "fo-reszek",
        text: "Fő részei: fej, test, farok",
        correctGroupId: "hasnyalmirigy",
      },
      {
        id: "inzulintermeles",
        text: "Belső elválasztású működése során inzulint termel",
        correctGroupId: "hasnyalmirigy",
      },
      {
        id: "meregtelenites",
        text: "Egyik fontos feladata a méregtelenítés",
        correctGroupId: "maj",
      },
    ],
  },
  {
    id: "testmukodes-144",
    topicId: "testmukodes",
    type: "grouping",
    prompt: "Csoportosítsa női nemi szerveket elhelyezkedésük alapján!",
    groups: [
      { id: "belso", text: "Belső női nemi szervek" },
      { id: "kulso", text: "Külső női nemi szervek" },
    ],
    items: [
      {
        id: "kisajkak",
        text: "Kisajkak",
        correctGroupId: "kulso",
      },
      {
        id: "petevezetek",
        text: "Petevezeték",
        correctGroupId: "belso",
      },
      {
        id: "huvely",
        text: "Hüvely",
        correctGroupId: "belso",
      },
      {
        id: "csiklo",
        text: "Csikló",
        correctGroupId: "kulso",
      },
    ],
  },
  {
    id: "testmukodes-146",
    topicId: "testmukodes",
    type: "grouping",
    prompt: "Csoportosítsa a férfi nemi szerveket elhelyezkedésük alapján!",
    groups: [
      { id: "belso", text: "Belső nemi szervek" },
      { id: "kulso", text: "Külső nemi szervek" },
    ],
    items: [
      {
        id: "himvesszo",
        text: "Hímvessző",
        correctGroupId: "kulso",
      },
      {
        id: "here",
        text: "Here",
        correctGroupId: "belso",
      },
      {
        id: "ondoholyag",
        text: "Ondóhólyag",
        correctGroupId: "belso",
      },
      {
        id: "herezacsko",
        text: "Herezacskó",
        correctGroupId: "kulso",
      },
    ],
  },
  {
    id: "testmukodes-152",
    topicId: "testmukodes",
    type: "grouping",
    prompt: "Csoportosítsa a másodlagos nemi jellegeket!",
    groups: [
      { id: "ferfi", text: "Férfiakra jellemző másodlagos nemi jellegek" },
      { id: "no", text: "Nőkre jellemző másodlagos nemi jellegek" },
    ],
    items: [
      {
        id: "melyebb-hang",
        text: "Mélyebb hang",
        correctGroupId: "ferfi",
      },
      {
        id: "emlomirigy",
        text: "Emlőmirigy nagyfokú kifejlődése",
        correctGroupId: "no",
      },
      {
        id: "lekerekitett-testforma",
        text: "Fejlettebb bőr alatti zsírszövet következtében lekerekített testforma",
        correctGroupId: "no",
      },
      {
        id: "arcszorzet",
        text: "Szőrzet az arcon",
        correctGroupId: "ferfi",
      },
    ],
  },
  {
    id: "testmukodes-176",
    topicId: "testmukodes",
    type: "grouping",
    prompt: "Csoportosítsa a vegetatív idegrendszer funkcióit!",
    groups: [
      { id: "szimpatikus", text: "A szimpatikus idegrendszer funkciói" },
      {
        id: "paraszimpatikus",
        text: "A paraszimpatikus idegrendszer funkciói",
      },
    ],
    items: [
      {
        id: "fokozott-teljesitmeny",
        text: "Biztosítja a szervezet fokozott teljesítményét.",
        correctGroupId: "szimpatikus",
      },
      {
        id: "anyagveszteseg-potlasa",
        text: "Elősegíti a kimerült szövetek anyagveszteségének pótlását.",
        correctGroupId: "paraszimpatikus",
      },
      {
        id: "tamadas-vedekezes",
        text: "Veszély esetén elindítja a támadási, vagy védekezési mechanizmusokat.",
        correctGroupId: "szimpatikus",
      },
      {
        id: "hohaztartas",
        text: "Szerepe van a hőháztartásban.",
        correctGroupId: "szimpatikus",
      },
    ],
  },
  {
    id: "testmukodes-177",
    topicId: "testmukodes",
    type: "grouping",
    prompt: "Csoportosítsa a vegetatív idegrendszer funkcióit!",
    groups: [
      { id: "szimpatikus", text: "A szimpatikus idegrendszer funkciói" },
      {
        id: "paraszimpatikus",
        text: "A paraszimpatikus idegrendszer funkciói",
      },
    ],
    items: [
      {
        id: "helyreallito-folyamatok",
        text: "Szerepe van a helyreállító folyamatokban, a szervezet nyugalmi fázisában.",
        correctGroupId: "paraszimpatikus",
      },
      {
        id: "keszenleti-funkcio",
        text: "A készenléti funkciót biztosítja.",
        correctGroupId: "szimpatikus",
      },
      {
        id: "tapcsatorna-mukodese",
        text: "Fokozza a tápcsatorna működését.",
        correctGroupId: "paraszimpatikus",
      },
    ],
  },
];
