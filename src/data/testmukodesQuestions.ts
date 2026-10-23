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
];
