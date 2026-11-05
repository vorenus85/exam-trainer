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
      {
        id: "b",
        text: "Étkezés után soha ne adjunk folyadékot.",
        correct: false,
      },
    ],
    prompt:
      "Döntse el, hogy a beteg táplálására vonatkozó megállapítások igazak, vagy hamisak!",
  },
  {
    id: "apolastan-101",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      {
        id: "a",
        text: "Az időseknél elhanyagolható a személyre szabott ápolás.",
        correct: false,
      },
      {
        id: "b",
        text: "Idősek esetén fokozottan figyelni kell a folyadékbevitelre.",
        correct: true,
      },
    ],
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
  },
  {
    id: "apolastan-102",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      {
        id: "a",
        text: "A higiénés szükségletek kielégítése a beteg komfortérzetének biztosítását szolgálja.",
        correct: true,
      },
      {
        id: "b",
        text: "A higiénés szükségletek kielégítése az ápoló nem önálló döntésének körébe tartozó tevékenység.",
        correct: false,
      },
    ],
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
  },
  {
    id: "apolastan-104",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      {
        id: "a",
        text: "Mozgássérültség, vagy mozgáskorlátozottság főbb típusai: agykárosodás következtében kialakult rendellenességek, bénulások, ortopédiai elváltozások, amputációk, végtaghiányos fejlődési rendellenességek.",
        correct: true,
      },
      {
        id: "b",
        text: "Mozgássérültség vagy mozgáskorlátozottság főbb típusai: mozgásszervi megbetegedések pl. ízületi gyulladás, végtagtörések stb. és az enyhe strukturális elváltozások pl. lúdtalp, gerincferdülés, „X” vagy „O” láb.",
        correct: false,
      },
    ],
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
  },
  {
    id: "apolastan-105",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      {
        id: "a",
        text: "A látászavar aszerint értékelhető, hogy gondot okoz-e az olvasásban, a tájékozódásban, vagy a cselekvésben.",
        correct: true,
      },
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
      {
        id: "b",
        text: "A hallás károsodásának, illetve csökkenésének mértéke alapján beszélhetünk a nagyothallókról és siketekről.",
        correct: true,
      },
    ],
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
  },
  {
    id: "apolastan-107",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      {
        id: "a",
        text: "Beszédhibák közé tartozik pl. a dadogás és a pöszeség.",
        correct: true,
      },
      { id: "b", text: "A tartós beszédképtelenség a némaság.", correct: true },
    ],
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
  },
  {
    id: "apolastan-108",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      {
        id: "a",
        text: "Az értelmi sérültek két csoportra oszthatók súlyosság szerint: tanulásban akadályozottak és értelmileg akadályozottak.",
        correct: false,
      },
      {
        id: "b",
        text: "Az értelmi szint csökkenése az IQ-val mérhető.",
        correct: true,
      },
    ],
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
  },
  {
    id: "apolastan-114",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      {
        id: "a",
        text: "Az esélyegyenlőség alapja maga az integrációmentesség.",
        correct: false,
      },
      {
        id: "b",
        text: "Infokommunikációs akadálynak nevezzük azokat az akadályokat, amelyek gátolják a hallásfogyatékos, látásfogyatékos, illetve intellektuális fogyatékossággal élő emberek megfelelő információhoz jutását.",
        correct: true,
      },
    ],
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
  },
  {
    id: "apolastan-130",
    topicId: "apolastan",
    type: "true_false",
    statements: [
      {
        id: "a",
        text: "Üzemi baleset esetén kiemelt táppénz jár a sérült munkavállalónak.",
        correct: true,
      },
      {
        id: "b",
        text: "Úti balesetnek nevezzük, de ugyanúgy munkabalesetnek minősül, ha munkába menet, vagy munkából hazafelé éri baleset a sérültet.",
        correct: false,
      },
    ],
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
  },
  {
    id: "apolastan-002",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Egészítse ki a meghatározást a hiányzó szövegrésszel! Jelölje választását! (Csak egy helyes válasz lehetséges!)\n……………… használata esetén a tartályban, vagy palackkötegben lévő oxigén kiépített csőrendszeren keresztül jut el a felhasználás helyére.",
    options: [
      { id: "a", text: "oxigénpalack" },
      { id: "b", text: "oxigénkoncentrátor" },
      { id: "c", text: "oxigéntartály" },
      { id: "d", text: "központi oxigénellátó berendezés" },
    ],
    correctOptionIds: ["d"],
  },
  {
    id: "apolastan-003",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Egészítse ki a meghatározást a hiányzó szövegrésszel! Jelölje választását! (Csak egy helyes válasz lehetséges!)\nA(z) ……………… elektromos árammal, a levegő szétválasztása elvén működik. Percenként 5 liter oxigént biztosít.",
    options: [
      { id: "a", text: "oxigénpalack" },
      { id: "b", text: "oxigénkoncentrátor" },
      { id: "c", text: "oxigéntartály" },
      { id: "d", text: "központi oxigénellátó berendezés" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-004",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Egészítse ki a meghatározást a hiányzó szövegrésszel! Jelölje választását! (Csak egy helyes válasz lehetséges!)\n……………… használata esetén a beteg nyomáscsökkentő közbeiktatásával tudja belélegezni a szükséges mennyiségű oxigént, áramlásmérő és párásító használatával.",
    options: [
      { id: "a", text: "oxigénpalack" },
      { id: "b", text: "oxigénkoncentrátor" },
      { id: "c", text: "oxigéntartály" },
      { id: "d", text: "központi oxigénellátó berendezés" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-005",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Egészítse ki a meghatározást a hiányzó szövegrésszel! Jelölje választását! (Csak egy helyes válasz lehetséges!)\nA(z) ……………… folyékony formában tárolja az oxigént. Kis térfogatban igen nagy mennyiségű oxigént biztosít.",
    options: [
      { id: "a", text: "oxigénpalack" },
      { id: "b", text: "oxigénkoncentrátor" },
      { id: "c", text: "oxigéntartály" },
      { id: "d", text: "központi oxigénellátó berendezés" },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "apolastan-006",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Jelölje az alábbiak közül, az injekció beadási helyét Mantoux-próba esetén! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "subcutan" },
      { id: "b", text: "intracutan" },
      { id: "c", text: "intramuscularisan" },
      { id: "d", text: "intravenasan" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-007",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Jelölje az alábbiak közül, mely paramétert szükséges mérni vizeletgyűjtés során! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "a beteg haskörfogatát" },
      { id: "b", text: "a beteg testmagasságát" },
      {
        id: "c",
        text: "az infúziós terápia során bevitt folyadék mennyiségét",
      },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "apolastan-009",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Egészítse ki a definíciót a hiányzó szövegrésszel! Jelölje választását! (Csak egy helyes válasz lehetséges!)\n……………… az ápolási folyamat és a kliens állapotának folyamatos nyomon követésére szolgáló, szisztematikusan, írásban vezetett dokumentáció, mely része az egészségügyi dokumentációnak.",
    options: [
      { id: "a", text: "A kórlap vezetése" },
      { id: "b", text: "A lázlap vezetése" },
      { id: "c", text: "Az ápolási dokumentáció" },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "apolastan-010",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Jelölje az alábbiak közül a beteg biztonságérzetét csökkentő okot/tényezőt! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "felkelés előtt a szemüveg felvétele" },
      { id: "b", text: "a hallókészülék viselése a társas interakciók során" },
      { id: "c", text: "mozgáskorlátozottság" },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "apolastan-015",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Jelölje az alábbiak közül a potenciális fertőző forrást, vírus vagy baktérium által okozott kötőhártya-gyulladás esetén! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "fertőzött szemváladék" },
      { id: "b", text: "vér" },
      { id: "c", text: "ondó" },
      { id: "d", text: "hányadék" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-021",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Jelölje az alábbi veszélyes hulladékok közül, amelyiket NEM TILOS égetni! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "radioaktív hulladékok" },
      { id: "b", text: "elhasznált Zn/Cd elemek" },
      { id: "c", text: "fertőzött kötszerek" },
      { id: "d", text: "ólomcsövek" },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "apolastan-028",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Egészítse ki a véres széklet alábbi megjelenési formájának leírását a hiányzó szövegrésszel! Jelölje választását! (Csak egy helyes válasz lehetséges!)\nAmennyiben emésztett vért tartalmaz, abban az esetben…………………………",
    options: [
      { id: "a", text: "a széklet felülete véres." },
      { id: "b", text: "a széklet friss, vagy alvadékos vért tartalmaz." },
      { id: "c", text: "a széklet színe fekete (szurokszéklet)." },
      { id: "d", text: "a székletben vér szabad szemmel nem látható." },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "apolastan-029",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Egészítse ki a véres széklet alábbi megjelenési formájának leírását a hiányzó szövegrésszel! Jelölje választását! (Csak egy helyes válasz lehetséges!)\nAmennyiben a ………………, abban az esetben a vér az aranyeres csomók megrepedéséből származik.",
    options: [
      { id: "a", text: "széklet felülete véres" },
      { id: "b", text: "széklet friss, vagy alvadékos vért tartalmaz" },
      { id: "c", text: "széklet színe fekete (szurokszéklet)" },
      { id: "d", text: "székletben vér szabad szemmel nem látható" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-030",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Egészítse ki a véres széklet alábbi megjelenési formájának leírását a hiányzó szövegrésszel! Jelölje választását! (Csak egy helyes válasz lehetséges!)\nAmennyiben a ………………, abban az esetben rejtett/occult vérzésből származik.",
    options: [
      { id: "a", text: "széklet felülete véres" },
      { id: "b", text: "széklet friss, vagy alvadékos vért tartalmaz" },
      { id: "c", text: "széklet színe fekete (szurokszéklet)" },
      {
        id: "d",
        text: "székletben nem látható vér, de laboratóriumi vizsgálattal kimutatható",
      },
    ],
    correctOptionIds: ["d"],
  },
  {
    id: "apolastan-031",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá az alábbi felsorolásból a szekunder prevenció jellemzőjét! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Módszerei közé tartozik a szűrés, korai kezelés és a gondozásba vétel.",
      },
      {
        id: "b",
        text: "Fontos célja a krónikus beteg, vagy a végleges károsodást szenvedett betegek számára a megfelelő életminőség biztosítása.",
      },
      {
        id: "c",
        text: "Fontos szerep jut a védőoltásoknak, a rizikóállapotok szűrésének és az egészségfejlesztésnek.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-032",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá az alábbi felsorolásból a szekunder prevenció jellemzőjét! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Fontos célja a krónikus beteg, vagy a végleges károsodást szenvedett betegek számára a megfelelő életminőség biztosítása.",
      },
      {
        id: "b",
        text: "A betegségek korai stádiumban történő felismerését és azonnali gyógykezelését jelenti.",
      },
      {
        id: "c",
        text: "Fontos szerep jut a védőoltásoknak, a rizikóállapotok szűrésének és az egészségfejlesztésnek.",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-033",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá az alábbi felsorolásból a szekunder prevenció jellemzőit! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az egészség megőrzésére, védelmére, és fejlesztésére irányul.",
      },
      {
        id: "b",
        text: "Célja a betegség időtartamának lerövidítése, illetve előrehaladásának, súlyosbodásának) megakadályozása, lassítása.",
      },
      { id: "c", text: "A fogyatékkal élő és rokkant személyekre irányul." },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-034",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá az alábbi felsorolásból a szekunder prevenció jellemzőit! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az egészség megőrzésére, védelmére, és fejlesztésére irányul.",
      },
      { id: "b", text: "A fogyatékkal élő és rokkant személyekre irányul." },
      {
        id: "c",
        text: "Olyan egyéneket céloz meg, akiknél jelentős kockázati tényezők állnak fenn, veszélyeztetettek, vagy már a betegség korai stádiumában vannak.",
      },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "apolastan-041",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá az alábbiak közül a helyes állítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "A beteg mosdatásához 2 db törölközőt kell előkészíteni, mert ha az egyik véletlenül leesik, vagy szennyeződik, a másikkal pótolhatjuk.",
      },
      {
        id: "b",
        text: "Azoknál a betegeknél, akik szájon át nem táplálhatók, az ápolónak különös gondot kell fordítania a szájápolásra és a száj állapotának megfigyelésére.",
      },
      {
        id: "c",
        text: "A szennyes ágyneműt az ágyneműcsere végén a földről összegyűjtve az erre kijelölt szennyes ledobókba helyezzük.",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-044",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá az alábbiak közül a helytelen állítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "A mosdatáshoz használt műanyag eszközöket – ha nincs lehetőség gépi mosásra és fertőtlenítésre – alapos mosószeres, folyóvizes, kefével történő tisztítás után fertőtleníteni kell.",
      },
      {
        id: "b",
        text: "Nyújtott hátfekvés egy olyan fektetési mód, ahol a beteg párna nélkül, vagy lapos párnán fekszik.",
      },
      { id: "c", text: "A beteg oldalra fordítását csak két ápoló végezheti." },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "apolastan-045",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Egészítse ki a definíciót a hiányzó szövegrésszel! Jelölje választását! (Csak egy helyes válasz lehetséges!)\nA mentális egészség a mentális funkciók sikeres működésének állapota, amely produktív tevékenységet, az emberekkel való kapcsolat kiteljesedését, a változásokhoz való ……………… eredményezi.",
    options: [
      { id: "a", text: "alkalmazkodást" },
      { id: "b", text: "nehézségekkel való megküzdést" },
      { id: "c", text: "alkalmazkodást és a nehézségekkel való megküzdést" },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "apolastan-049",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Jelölje, hogyan lehet segíteni a biztonságos étkezését annak a betegnek, akinek az orvosi előírás alapján vízszintes helyzetben kell maradnia! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "a beteget oldalfekvésbe helyezve" },
      { id: "b", text: "a beteg fejét 15°-al megemelve" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-050",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Jelölje az alábbi, a csökkent nyelési képességű beteg biztonságos étkezését segítő/támogató lehetőségek közül a helytelent! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "a beteget az étkezéshez vízszintes testhelyzetbe segítve",
      },
      {
        id: "b",
        text: "étkezés előtt a kórteremben lévő zavaró tényezőket kiküszöbölve",
      },
      {
        id: "c",
        text: "etetéskor az ételt (a falatot) a beteg szájának ép oldalára helyezve",
      },
      { id: "d", text: "nyelési folyamat alatt szóban biztatva" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-053",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Jelölje, hogy az alábbiak közül mit szükséges használni mérésre a pontos testsúly megállapításához, amennyiben a páciens nem tud egyedül állni! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "székmérleg" },
      { id: "b", text: "szobamérleg" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-054",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Jelölje, hogy mit szükséges használni mérésre a pontos testsúly megállapításához, amennyiben a páciens nem tudja megtartani a testsúlyát! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "ágymérleg" },
      { id: "b", text: "szobamérleg" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-055",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá az alábbiak közül a helyes állítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az e-cigaretta bizonyítottan segíti a dohányzásról leszokást, emellett a kifújt füst, illetve pára mások egészségét nem károsítja.",
      },
      {
        id: "b",
        text: "A vízipipa beszívott füstje kis mennyiségű mérgező anyagot, többek között szén-monoxidot, nehézfémeket és rákkeltő vegyületeket tartalmaz.",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-056",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá az alábbiak közül a helytelen állítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "A szénhidrátok energiaforrásul szolgálnak a szervezet számára.",
      },
      {
        id: "b",
        text: "Túl alacsony zsírbevitel mellett a vitaminellátás is veszélyeztetett, mert hiány alakulhat ki a szervezetben a zsírban oldódó vitaminokból.",
      },
      {
        id: "c",
        text: "A vitaminok a szervezet számára nélkülözhetetlen vegyületek, ezért ezeket nem lehet túladagolni.",
      },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "apolastan-058",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá az alábbiak közül a helytelen állítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "A cigaretta „csak” szociális és pszichés függőséget okoz, emiatt könnyebb a leszokás, mint az egyéb drogok esetében.",
      },
      {
        id: "b",
        text: "A cigarettafüstben lévő egészségkárosító anyagok többsége átjut a méhlepényen és károsítja a magzatot.",
      },
      {
        id: "c",
        text: "A dohányzás egyik gyakori szövődménye a végtagi artériák szűkülete, főleg az alsó végtagokon.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-060",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá az alábbiak közül a helyes állítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az egészségmagatartás lehet preventív, a betegségeket megelőző, vagy kockázati, betegségeket okozó.",
      },
      {
        id: "b",
        text: "Az egészségtudatos magatartás az egyén szemléletének, viselkedésének, tevékenységének összessége annak érdekében, hogy a betegségeket minél hamarabb átvészelje.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-062",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Válassza ki az egymásra épülő emberi szükségletek közül, hogy melyik következik a fiziológiai szükségletek után a Maslow-féle hierarchiában! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "az önmegvalósítás szükséglete" },
      { id: "b", text: "a szeretet és összetartozás szükséglete" },
      { id: "c", text: "a biztonság és védelem szükséglete" },
      { id: "d", text: "az elismerés (önbecsülés) szükséglete" },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "apolastan-063",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Válassza ki az egymásra épülő emberi szükségletek közül, hogy melyik következik a biztonság és védelem szükséglete után a Maslow-féle hierarchiában! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "az önmegvalósítás szükséglete" },
      { id: "b", text: "a szeretet és összetartozás szükséglete" },
      { id: "c", text: "fiziológiai szükségletek" },
      { id: "d", text: "az elismerés (önbecsülés) szükséglete" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-064",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Válassza ki az egymásra épülő emberi szükségletek közül, hogy melyik következik a szeretet és összetartozás szükséglete után a Maslow-féle hierarchiában! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "az önmegvalósítás szükséglete" },
      { id: "b", text: "a biztonság és védelem szükséglete" },
      { id: "c", text: "fiziológiai szükségletek" },
      { id: "d", text: "az elismerés (önbecsülés) szükséglete" },
    ],
    correctOptionIds: ["d"],
  },
  {
    id: "apolastan-065",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Válassza ki az egymásra épülő emberi szükségletek közül, hogy melyik következik az elismerés (önbecsülés) szükséglete után a Maslow-féle hierarchiában! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "az önmegvalósítás szükséglete" },
      { id: "b", text: "a biztonság és védelem szükséglete" },
      { id: "c", text: "fiziológiai szükségletek" },
      { id: "d", text: "a szeretet és összetartozás szükséglete" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-067",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá a fogyatékosságra (disability) vonatkozó helyes megállapítást a betegségek lehetséges következményei közül! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az élettani, lélektani funkciók, vagy anatómiai szerkezetek bármilyen hiánya vagy károsodása, megrongálása, mely betegség, baleset vagy veleszületett rendellenesség következtében alakult ki.",
      },
      {
        id: "b",
        text: "A károsodás következtében valamilyen emberi tevékenység (járás, fogás, étkezés, stb.) véghezvitelében való korlátozottság, vagy képtelenség.",
      },
      {
        id: "c",
        text: "A károsodás vagy az akadályozottság olyan foka, amely korlátozza vagy megakadályozza az egyént abban, hogy korának, nemének, szocio-, kulturális környezetének megfelelő szerepét a társadalomban betölthesse.",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-068",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá a helyes megállapítást a higiénés szükségletre vonatkozóan! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az ápolás önálló funkciói közé tartozik a higiénés szükségletek felmérése és ezek szükség szerint történő kielégítése.",
      },
      {
        id: "b",
        text: "A higiénés szükségletek felmérése és kielégítése az ápolás nem önálló funkciói közé tartozik.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-069",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá a helyes megállapítást a higiénés szükségletre vonatkozóan! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "A hosszabb kórházi ápolásra szoruló betegek fürdetése mindig a reggeli időszakban kell, hogy megtörténjen.",
      },
      {
        id: "b",
        text: "Azon páciensek számára, akik hosszabb kórházi ápolásra szorulnak fontos az egyéni, személyre szabott ápolási terv készítése a higiénés szükségletek kielégítése kapcsán is.",
      },
      {
        id: "c",
        text: "A higiénés szükségletek kielégítése során az adott kórházi osztályon kialakított szokásokat kell követni, a betegnek is alkalmazkodnia kell.",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-070",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá a higiénés szükségletre vonatkozó helytelen megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az ápolás önálló funkciói közé tartozik a higiénés szükségletek felmérése és ezek szükség szerint történő kielégítése.",
      },
      {
        id: "b",
        text: "A higiénés szükségletek felmérése és kielégítése az ápolás nem önálló funkciói közé tartozik.",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-071",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá a higiénés szükségletre vonatkozó helytelen megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Azon páciensek számára, akik hosszabb kórházi ápolásra szorulnak fontos az egyéni, személyre szabott ápolási terv készítése a higiénés szükségletek kielégítése kapcsán is.",
      },
      {
        id: "b",
        text: "A higiénés szükségletek kielégítése során az adott kórházi osztályon kialakított szokásokat kell követni, a betegnek is alkalmazkodnia kell.",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-072",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá a higiénés szükségletre vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az ápolás önálló funkciói közé tartozik a higiénés szükségletek felmérése és ezek szükség szerint történő kielégítése.",
      },
      {
        id: "b",
        text: "A higiénés szükségletek felmérése és kielégítése az ápolás nem önálló funkciói közé tartozik.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-073",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá a higiénés szükségletre vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "A higiénés szükségletek felmérése és kielégítése az ápolás nem önálló funkciói közé tartozik.",
      },
      {
        id: "b",
        text: "A higiénés szükségletek kielégítése során figyelembe kell venni a páciens tisztálkodással kapcsolatos meglévő szokásait és nézeteit is.",
      },
      {
        id: "c",
        text: "A higiénés szükségletek kielégítése során az adott kórházi osztályon kialakított szokásokat kell követni, a betegnek is alkalmazkodnia kell.",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-074",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá a higiénés szükségletre vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "A hosszabb kórházi ápolásra szoruló betegek fürdetése mindig a reggeli időszakban kell, hogy megtörténjen.",
      },
      {
        id: "b",
        text: "A higiénés szükségletek kielégítése során figyelembe kell venni a páciens tisztálkodással kapcsolatos meglévő szokásait és nézeteit is.",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-075",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá az ágyazásra vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "A páciens ágyát minimálisan naponta egyszer tegyük rendbe, valamint szennyeződések esetén az ágynemű azonnali cseréje szükséges a nap bármely szakában.",
      },
      {
        id: "b",
        text: "Az ágynemű cseréje minden esetben a reggeli osztályátadás előtt kell, hogy megtörténjen.",
      },
      { id: "c", text: "Ágyazás közben nem szükséges kesztyűt cserélni." },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-076",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá az ágyazásra vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az ágynemű cseréje minden esetben a reggeli osztályátadás előtt kell, hogy megtörténjen.",
      },
      { id: "b", text: "Az ágyazás közben nem szükséges kesztyűt cserélni." },
      {
        id: "c",
        text: "A kesztyű cseréje szükséges a szennyeződött ágyneművel való érintkezés után.",
      },
      {
        id: "d",
        text: "A szennyes ágyneműt a kórterem ajtajához közel, lehetőség szerint a mosdó alatt kell elhelyezni.",
      },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "apolastan-077",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá az ágyazásra vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az ágyazást minden esetben két ápolónak kell végezni.",
      },
      {
        id: "b",
        text: "Az ágyazás megkezdése előtt biztosítani kell a páciens számára az ürítés szükséglet kielégítését, amennyiben igényli azt a páciens, így elkerülhető a tiszta ágynemű újra szennyeződése.",
      },
      {
        id: "c",
        text: "Fekvő beteg ágyának áthúzásakor a beteget egy másik ágyba kell áthelyezni.",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-078",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá az ágyazásra vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "A szennyes ágyneműt azonnal rakjuk a szennyestartóba és közben vigyázzunk arra, hogy ne érintkezzen ruhánkkal, illetve más tárgyakkal.",
      },
      {
        id: "b",
        text: "Az ágyazást minden esetben két ápolónak kell végezni.",
      },
      {
        id: "c",
        text: "Fekvő beteg ágyának áthúzásakor a beteget egy másik ágyba kell áthelyezni.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-079",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá az ágyazásra vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "A kesztyű cseréje szükséges a szennyeződött ágyneművel való érintkezés után.",
      },
      {
        id: "b",
        text: "A szennyes ágyneműt a kórterem ajtajához közel, lehetőség szerint a mosdó alatt kell elhelyezni.",
      },
      {
        id: "c",
        text: "Fekvő beteg ágyának áthúzásakor a beteget egy másik ágyba kell áthelyezni.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-080",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá az ágyazásra vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "A szennyes ágyneműt a betegszoba ajtajához közel, lehetőség szerint a mosdó alatt kell elhelyezni.",
      },
      {
        id: "b",
        text: "A szennyes ágyneműt azonnal rakjuk a szennyes tartóba és közben vigyázzunk arra, hogy ne érintkezzen ruhánkkal, illetve más tárgyakkal.",
      },
      {
        id: "c",
        text: "Fekvő beteg ágyának áthúzásakor a beteget egy másik ágyba kell áthelyezni.",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-081",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá az ágyazásra vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Gumilepedő alkalmazásakor figyeljünk arra, hogy ne érintkezzen közvetlenül a páciens bőrével, mert a bőr izzadását, irritációját okozhatja.",
      },
      {
        id: "b",
        text: "Az ágynemű cseréje minden esetben a reggeli osztályátadás előtt kell, hogy megtörténjen.",
      },
      { id: "c", text: "Az ágyazás közben nem szükséges kesztyűt cserélni." },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-082",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá az ágyazásra vonatkozó a helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "A szennyes ágyneműt a betegszoba ajtajához közel, lehetőség szerint a mosdó alatt kell elhelyezni.",
      },
      {
        id: "b",
        text: "Gumilepedő alkalmazásakor figyeljünk arra, hogy ne érintkezzen közvetlenül a páciens bőrével, mert a bőr izzadását, irritációját okozhatja.",
      },
      {
        id: "c",
        text: "Az ágynemű cseréje minden esetben a reggeli osztályátadás előtt kell, hogy megtörténjen.",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-083",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá a fektetés definícióját! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az ágyban való elhelyezés, amelynek módját mindig az orvos határozza meg",
      },
      { id: "b", text: "Az ágyban spontán elfoglalt testhelyzet." },
      { id: "c", text: "Az ágyvég megemelésével kialakított testhelyzet." },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-084",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá az ágyazásra vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "A szennyes ágyneműt a betegszoba ajtajához közel, lehetőség szerint a mosdó alatt kell elhelyezni.",
      },
      {
        id: "b",
        text: "Az ágynemű cseréje minden esetben a reggeli osztályátadás előtt kell, hogy megtörténjen.",
      },
      {
        id: "c",
        text: "Az ágyazás megkezdése előtt biztosítani kell a páciens számára az ürítés szükséglet kielégítését, amennyiben igényli azt a páciens, így elkerülhető a tiszta ágynemű újra szennyeződése.",
      },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "apolastan-087",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá a lejtőztetésre vonatkozó helyes állítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "Így fekszenek a lázas, elesett, legyengült betegek." },
      {
        id: "b",
        text: "Az ágyvég megemelésével kialakított ferde síkú fektetés.",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-115",
    topicId: "apolastan",
    type: "single_choice",
    prompt:
      "Húzza alá az alábbiak közül azt az egyet, amelyik NEM tartozik a fizikai akadályok közé! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "lépcső" },
      { id: "b", text: "rossz út" },
      { id: "c", text: "rámpa" },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "apolastan-059",
    topicId: "apolastan",
    type: "ordering",
    prompt: "Tegye sorrendbe a here önvizsgálatának egyes lépéseit!",
    items: [
      {
        id: "suly-vizsgalata",
        text: "A tenyérre helyezett herezacskót óvatosan megemelve meg kell vizsgálni a súlyát, egyszerre csak az egyik herét.",
      },
      {
        id: "mellekhere-ondovezetek",
        text: "Ezt követi a mellékherék és az ondóvezeték vizsgálata, amelyhez a heréket a pénisz töve felé kell tapintani.",
      },
      {
        id: "herek-korbetapintasa",
        text: "A hüvelyk és mutatóujj segítségével óvatosan körbe kell tapogatni mindkét herét, ellenőrizve, hogy nem nagyobbodtak-e meg, vagy nem tapintható-e rajtuk csomó.",
      },
    ],
    correctOrderIds: [
      "suly-vizsgalata",
      "mellekhere-ondovezetek",
      "herek-korbetapintasa",
    ],
  },
  {
    id: "apolastan-008",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Jelölje az alábbiak közül, mely paramétereket szükséges mérni vizeletgyűjtés során! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "a beteg haskörfogatát",
      },
      {
        id: "b",
        text: "a beteg által bevitt folyadék mennyiségét",
      },
      {
        id: "c",
        text: "a beteg testsúlyát",
      },
      {
        id: "d",
        text: "a beteg testmagasságát",
      },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "apolastan-011",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Jelölje az alábbiak közül a nyomási fekély kialakulásához vezető okokat/tényezőket! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "bénulás okozta mozdulatlanság",
      },
      {
        id: "b",
        text: "incontinentia",
      },
      {
        id: "c",
        text: "normál testsúly",
      },
      {
        id: "d",
        text: "női nem",
      },
    ],
    correctOptionIds: ["a", "b"],
  },
  {
    id: "apolastan-012",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Jelölje az alábbiak közül a nyomási fekély kialakulásához vezető okokat/tényezőket! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "alultápláltság",
      },
      {
        id: "b",
        text: "normál testsúly",
      },
      {
        id: "c",
        text: "fokozott verejtékezés",
      },
      {
        id: "d",
        text: "férfi nem",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "apolastan-013",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Jelölje az alábbiak közül a széklet kóros anyagait! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "genny",
      },
      {
        id: "b",
        text: "zsírsav, epesav",
      },
      {
        id: "c",
        text: "nyálka",
      },
      {
        id: "d",
        text: "hámsejtek",
      },
      {
        id: "e",
        text: "víz",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "apolastan-014",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Jelölje az alábbiak közül, hogy milyen gyakran szükséges az eszméletlen beteg szájápolását elvégezni! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "óránként",
      },
      {
        id: "b",
        text: "2 óránként",
      },
      {
        id: "c",
        text: "4 óránként",
      },
      {
        id: "d",
        text: "szükség szerint",
      },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "apolastan-016",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbiak közül az önmegvalósítási szükségleteket a Maslow-féle szükséglet hierarchia alapján! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "bizalom, tisztelet",
      },
      {
        id: "b",
        text: "hasznosságérzés",
      },
      {
        id: "c",
        text: "állandóság, kiszámíthatóság",
      },
      {
        id: "d",
        text: "alkotás iránti vágy",
      },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "apolastan-017",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Jelölje az alábbiak közül a tüdőgyulladás kivédésének lehetőségeit fekvő betegnél! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "a betegszoba szellőztetési alkalmainak lecsökkentése",
      },
      {
        id: "b",
        text: "légzőtorna",
      },
      {
        id: "c",
        text: "a sokáig tartó háton fekvés preferálása",
      },
      {
        id: "d",
        text: "a légúti váladék kiürítésének segítése",
      },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "apolastan-018",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Jelölje az alábbiak közül a subcutan injekciózás leggyakoribb beadási helyeit! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "a felkar elülső része",
      },
      {
        id: "b",
        text: "a comb hátsó része",
      },
      {
        id: "c",
        text: "a köldök körüli 2,5 cm-es terület a hasfalon",
      },
      {
        id: "d",
        text: "a comb elülső-oldalsó területe",
      },
    ],
    correctOptionIds: ["a", "d"],
  },
  {
    id: "apolastan-019",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Jelölje a subcutan injekciózás leggyakoribb beadási helyei közül, a helyteleneket! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "a felkar elülső része",
      },
      {
        id: "b",
        text: "a comb hátsó része",
      },
      {
        id: "c",
        text: "a köldök körüli 2,5 cm-es terület a hasfalon",
      },
      {
        id: "d",
        text: "a comb elülső-oldalsó területe",
      },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "apolastan-022",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Húzza alá az alábbi felsorolásból a vitális paraméterek közé tartozókat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "pulzus",
      },
      {
        id: "b",
        text: "napi vizeletmennyiség",
      },
      {
        id: "c",
        text: "folyadékegyenleg",
      },
      {
        id: "d",
        text: "testhőmérséklet",
      },
      {
        id: "e",
        text: "szemnyomás",
      },
    ],
    correctOptionIds: ["a", "d"],
  },
  {
    id: "apolastan-023",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Húzza alá az alábbi felsorolásból a vitális paramétereket! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "napi vizeletmennyiség",
      },
      {
        id: "b",
        text: "folyadékegyenleg",
      },
      {
        id: "c",
        text: "légzésszám",
      },
      {
        id: "d",
        text: "szemnyomás",
      },
      {
        id: "e",
        text: "vérnyomás",
      },
    ],
    correctOptionIds: ["c", "e"],
  },
  {
    id: "apolastan-024",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Húzza alá a felsorolásból a rosszindulatú daganatok jellemzőit! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "lassan növekednek",
      },
      {
        id: "b",
        text: "sejtjeik hasonlítanak a kiinduló szövet sejtjeihez",
      },
      {
        id: "c",
        text: "a környező szöveteket roncsolják",
      },
      {
        id: "d",
        text: "áttétet képeznek",
      },
      {
        id: "e",
        text: "a környező szövetektől elhatárolódnak",
      },
    ],
    correctOptionIds: ["c", "d"],
  },
  {
    id: "apolastan-025",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Húzza alá a felsorolásból a jóindulatú daganatok jellemzőit! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "lassan növekednek",
      },
      {
        id: "b",
        text: "sejtjeik hasonlítanak a kiinduló szövet sejtjeihez",
      },
      {
        id: "c",
        text: "a környező szöveteket roncsolják",
      },
      {
        id: "d",
        text: "áttétet képeznek",
      },
      {
        id: "e",
        text: "a környező szövetektől elhatárolódnak",
      },
    ],
    correctOptionIds: ["a", "b"],
  },
  {
    id: "apolastan-026",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Húzza alá a felsorolásból a rosszindulatú daganatok jellemzőit! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "sejtjeik nem hasonlítanak a kiinduló szövet sejtjeihez",
      },
      {
        id: "b",
        text: "a környező szöveteket roncsolják",
      },
      {
        id: "c",
        text: "áttétet képeznek",
      },
      {
        id: "d",
        text: "a környező szövetektől elhatárolódnak",
      },
      {
        id: "e",
        text: "rendszerint nem képeznek áttétet",
      },
    ],
    correctOptionIds: ["d", "e"],
  },
  {
    id: "apolastan-027",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Húzza alá a felsorolásból a normál széklet összetevőit! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "féregpeték",
      },
      {
        id: "b",
        text: "emésztetlen tápanyagok",
      },
      {
        id: "c",
        text: "víz",
      },
      {
        id: "d",
        text: "bélbolyhok",
      },
      {
        id: "e",
        text: "bélférgek",
      },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "apolastan-035",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Húzza alá az érelmeszesedés rizikófaktorait! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "menopausa (klimax)",
      },
      {
        id: "b",
        text: "dohányzás",
      },
      {
        id: "c",
        text: "elhízás",
      },
      {
        id: "d",
        text: "alacsony fibrinogenszint",
      },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "apolastan-036",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Húzza alá az érelmeszesedés rizikófaktorait! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "menopausa (klimax)",
      },
      {
        id: "b",
        text: "mozgásszegény életmód",
      },
      {
        id: "c",
        text: "cukorbetegség",
      },
      {
        id: "d",
        text: "alacsony fibrinogenszint",
      },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "apolastan-037",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Húzza alá az emlőrák rizikótényezőit! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "gyermekágyi emlőgyulladás",
      },
      {
        id: "b",
        text: "kései első terhesség (55 éves kor felett)",
      },
      {
        id: "c",
        text: "a családban előfordult már emlőrák",
      },
      {
        id: "d",
        text: "várandósság",
      },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "apolastan-038",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Húzza alá az emlőrák rizikótényezőit! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "kései menopausa (55 éves kor után)",
      },
      {
        id: "b",
        text: "alkohol absztinencia",
      },
      {
        id: "c",
        text: "korai első menstruáció (12 évesnél fiatalabb kor)",
      },
      {
        id: "d",
        text: "többszöri vetélés",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "apolastan-039",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Húzza alá az emlőrák rizikótényezőit! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "rendszeres alkoholfogyasztás, dohányzás",
      },
      {
        id: "b",
        text: "gyermekágyi emlőgyulladás",
      },
      {
        id: "c",
        text: "ikerterhesség",
      },
      {
        id: "d",
        text: "gyermektelenség",
      },
    ],
    correctOptionIds: ["a", "d"],
  },
  {
    id: "apolastan-040",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Húzza alá az emlőrák rizikótényezőit! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "emlőrák halmozott családi előfordulása",
      },
      {
        id: "b",
        text: "alultápláltság",
      },
      {
        id: "c",
        text: "többszöri vetélés",
      },
      {
        id: "d",
        text: "hormonális fogamzásgátló szedése",
      },
    ],
    correctOptionIds: ["a", "d"],
  },
  {
    id: "apolastan-046",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Jelölje az alábbiak közül a terhesség gyanújeleit! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "hányinger, hányás",
      },
      {
        id: "b",
        text: "menstruáció elmaradása",
      },
      {
        id: "c",
        text: "ételek megkívánása vagy undorérzés",
      },
      {
        id: "d",
        text: "magzati szívhangok",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "apolastan-047",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Jelölje az alábbiak közül a terhesség valószínűségi jeleit! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "menstruáció elmaradása",
      },
      {
        id: "b",
        text: "magzatmozgások",
      },
      {
        id: "c",
        text: "ételek megkívánása vagy undorérzés",
      },
      {
        id: "d",
        text: "a hüvely szederjes elszíneződése",
      },
    ],
    correctOptionIds: ["a", "d"],
  },
  {
    id: "apolastan-048",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Jelölje az alábbiak közül a terhesség biztos jeleit! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "hányinger, hányás",
      },
      {
        id: "b",
        text: "menstruáció elmaradása",
      },
      {
        id: "c",
        text: "magzatmozgások",
      },
      {
        id: "d",
        text: "magzati szívhangok",
      },
    ],
    correctOptionIds: ["c", "d"],
  },
  {
    id: "apolastan-051",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Jelölje, hogy az alábbiak közül mely feltételek megléte szükséges a mérés véghezvitelénél a páciens pontos testsúlyának megállapításához! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "lehetőség szerint ugyanannak a mérlegnek a használatával történjen",
      },
      {
        id: "b",
        text: "lehetőség szerint a napnak eltérő időszakában történjen",
      },
      {
        id: "c",
        text: "lehetőség szerint vizelet- és székletürítést követően történjen",
      },
      {
        id: "d",
        text: "a mérés a katéterzsákkal/dréntartállyal együtt történjen",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "apolastan-052",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Jelölje, hogy az alábbiak közül mely feltételek megléte szükséges a páciens pontos testsúlyának megállapításához! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "lehetőség szerint a napnak eltérő időszakában történjen",
      },
      {
        id: "b",
        text: "megközelítőleg ugyanannyi ruhában történjen",
      },
      {
        id: "c",
        text: "cipő nélkül, vagy megközelítőleg azonos súlyú cipőben történjen",
      },
      {
        id: "d",
        text: "a mérés a katéterzsákkal/dréntartállyal együtt történjen",
      },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "apolastan-057",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Húzza alá az alábbiak közül a helyes állításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "A dohányzás egyik gyakori szövődménye a végtagi artériák szűkülete, főleg az alsó végtagokon.",
      },
      {
        id: "b",
        text: "A cigaretta „csak” szociális és pszichés függőséget okoz, emiatt könnyebb a leszokás, mint az egyéb drogok esetében.",
      },
      {
        id: "c",
        text: "A cigarettafüstben lévő egészségkárosító anyagok többsége átjut a méhlepényen és károsítja a magzatot.",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "apolastan-061",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Húzza alá az alábbiak közül a helyes állításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az egyén életmódját a feltételek és lehetőségek is befolyásolják.",
      },
      {
        id: "b",
        text: "A tercier prevenció a betegségek korai, panaszt még nem okozó stádiumában való felismerését és gyógykezelését jelenti.",
      },
      {
        id: "c",
        text: "Az egészség a teljes testi, lelki és szociális jólét állapota, nem csupán a betegség és nyomorékság hiánya.",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "apolastan-088",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Húzza alá a felsoroltak közül a magasabb rendű szükségletekhez tartozókat!",
    options: [
      {
        id: "a",
        text: "teljes testlemosás igénye",
      },
      {
        id: "b",
        text: "a tudás és a megértés igénye",
      },
      {
        id: "c",
        text: "kényelmes ágy igénye",
      },
      {
        id: "d",
        text: "esztétikai igény",
      },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "apolastan-089",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Jelölje be a betegmozgatás szabályait! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "mindig folyamatosnak és fokozatosnak kell lenni",
      },
      {
        id: "b",
        text: "mindig be kell vonni a hozzátartozókat",
      },
      {
        id: "c",
        text: "figyelni kell a hozzátartozói instrukciókat",
      },
      {
        id: "d",
        text: "figyelni kell a beteg pulzusát, arcszínét",
      },
    ],
    correctOptionIds: ["a", "d"],
  },
  {
    id: "apolastan-094",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Válassza ki a Virginia Henderson-féle alapszükségletek közé tartozókat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "élettani légzés",
      },
      {
        id: "b",
        text: "kényelmi eszközök alkalmazása",
      },
      {
        id: "c",
        text: "betegszállítás",
      },
      {
        id: "d",
        text: "mozgás és egészséges testhelyzet",
      },
    ],
    correctOptionIds: ["a", "d"],
  },
  {
    id: "apolastan-095",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Válassza ki a Virginia Henderson-féle alapszükségletek közé tartozókat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "betegszállítás",
      },
      {
        id: "b",
        text: "kényelmi eszközök alkalmazása",
      },
      {
        id: "c",
        text: "kielégítő étkezés és folyadékfogyasztás",
      },
      {
        id: "d",
        text: "alvás és pihenés",
      },
    ],
    correctOptionIds: ["c", "d"],
  },
  {
    id: "apolastan-096",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Válassza ki a Virginia Henderson-féle alapszükségletek közé tartozókat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "kommunikáció",
      },
      {
        id: "b",
        text: "izolálás",
      },
      {
        id: "c",
        text: "tanulás, felfedezés",
      },
      {
        id: "d",
        text: "integráció",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "apolastan-097",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Válassza ki a Virginia Henderson-féle alapszükségletek közé tartozókat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "élettani testhőmérséklet",
      },
      {
        id: "b",
        text: "vallás gyakorlása",
      },
      {
        id: "c",
        text: "integráció",
      },
      {
        id: "d",
        text: "gyógyszerelés",
      },
    ],
    correctOptionIds: ["a", "b"],
  },
  {
    id: "apolastan-099",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Jelölje be az alábbiak közül a gyermekápolásra vonatkozó alapelveket! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "szeretetteljes, gyengéd ápolás-gondozás",
      },
      {
        id: "b",
        text: "a gyermek kiszolgálása",
      },
      {
        id: "c",
        text: "pozitív diszkrimináció alkalmazása",
      },
      {
        id: "d",
        text: "a regresszió, a hospitalizáció megelőzése",
      },
    ],
    correctOptionIds: ["a", "d"],
  },
  {
    id: "apolastan-119",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Válassza ki Virginia Henderson ápolási modelljére jellemző megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az önellátás az egyén saját magának nyújtott gondoskodása.",
      },
      {
        id: "b",
        text: "Tizennégy alapvető szükségletet különít el.",
      },
      {
        id: "c",
        text: "A modell célkitűzése a szükségletek kielégítésére irányuló önálló cselekvés elősegítése.",
      },
      {
        id: "d",
        text: "Minden felnőtt joga, de kötelessége is az önellátás.",
      },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "apolastan-120",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Válassza ki, amelyek Virginia Henderson ápolási modelljére jellemző megállapítások! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az ember független egyéniség, aki rendelkezik alapvető, minden emberre jellemző, egyetemes szükségletekkel.",
      },
      {
        id: "b",
        text: "Az ápolási tevékenység súlypontja az egészséges, vagy beteg ember segítése az alapszükségletek fenntartásában.",
      },
      {
        id: "c",
        text: "Ha az önellátási igény és az önellátási képesség egyensúlyban van, akkor létrejön az önellátás.",
      },
      {
        id: "d",
        text: "Az embert egységes, egész emberi lénynek tekinti, aki állandó kölcsönhatásban van környezetével.",
      },
    ],
    correctOptionIds: ["a", "b"],
  },
  {
    id: "apolastan-121",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Húzza alá a Dorothea Orem ápolási modelljére jellemző megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az ember független egyéniség, aki rendelkezik alapvető, minden emberre jellemző, egyetemes szükségletekkel.",
      },
      {
        id: "b",
        text: "Az önellátás az egyén saját magának nyújtott gondoskodása.",
      },
      {
        id: "c",
        text: "A modell célkitűzése a szükségletek kielégítésére irányuló önálló cselekvés elősegítése.",
      },
      {
        id: "d",
        text: "Minden felnőtt joga, de kötelessége is az önellátás.",
      },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "apolastan-122",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Húzza alá a Dorothea Orem ápolási modelljére jellemző megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az ápolási tevékenység súlypontja az egészséges, vagy beteg ember segítése az alapszükségletek fenntartásában.",
      },
      {
        id: "b",
        text: "Ha az önellátási igény és az önellátási képesség egyensúlyban van, akkor létrejön az önellátás.",
      },
      {
        id: "c",
        text: "Segíteni kell a beteget és a családot, hogy gondoskodni tudjanak önmagukról.",
      },
      {
        id: "d",
        text: "Az embert egységes, egész emberi lénynek tekinti, aki állandó kölcsönhatásban van környezetével.",
      },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "apolastan-123",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Húzza alá az alábbiak közül az ápolási anamnézis eredményességére jellemző megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Ismert lesz a beteg diagnózisa.",
      },
      {
        id: "b",
        text: "A betegségre vonatkozó tényeket ismerünk meg.",
      },
      {
        id: "c",
        text: "Lehetőséget ad az ápolás megtervezéséhez.",
      },
      {
        id: "d",
        text: "Segítséget nyújt a diagnosztikai vizsgálatok kivitelezéséhez.",
      },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "apolastan-129",
    topicId: "apolastan",
    type: "multiple_choice",
    prompt:
      "Jelölje az alábbiak közül a veszélyes hulladékokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "emberi haj",
      },
      {
        id: "b",
        text: "gyógyszerek",
      },
      {
        id: "c",
        text: "vérrel szennyezett papírvatta",
      },
      {
        id: "d",
        text: "ételmaradék",
      },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "apolastan-001",
    topicId: "apolastan",
    type: "matching",
    prompt: "Párosítsa az oxigénforrásokat jellemzőikkel!",
    pairs: [
      {
        id: "oxigenpalack",
        left: "oxigénpalack",
        right:
          "A beteg nyomáscsökkentő közbeiktatásával tudja belélegezni a szükséges mennyiségű oxigént, áramlásmérő és párásító használatával.",
      },
      {
        id: "oxigenkoncentrator",
        left: "oxigénkoncentrátor",
        right:
          "Elektromos árammal, a levegő szétválasztása elvén működik. Percenként 5 liter oxigént biztosít.",
      },
      {
        id: "oxigentartaly",
        left: "oxigéntartály",
        right:
          "Az oxigént folyékony formában tárolja. Kis térfogatban igen nagy mennyiségű oxigént biztosít.",
      },
      {
        id: "kozponti-oxigenellato",
        left: "központi oxigénellátó berendezés",
        right:
          "A tartályban, vagy palackkötegben lévő oxigén kiépített csőrendszeren keresztül jut el a felhasználás helyére.",
      },
    ],
  },
  {
    id: "apolastan-020",
    topicId: "apolastan",
    type: "matching",
    prompt: "Párosítsa az az alábbi kifejezések latin és magyar megfelelőit!",
    pairs: [
      {
        id: "szeklet",
        left: "széklet",
        right: "faeces",
      },
      {
        id: "vizelet",
        left: "vizelet",
        right: "urina",
      },
      {
        id: "szekleturites",
        left: "székletürítés",
        right: "defecatio",
      },
      {
        id: "vizeleturites",
        left: "vizeletürítés",
        right: "uresis",
      },
    ],
  },
  {
    id: "apolastan-042",
    topicId: "apolastan",
    type: "matching",
    prompt: "Párosítsa az alkalmazható kötéstípusokat a sérülésekhez!",
    pairs: [
      {
        id: "fedokotes",
        left: "fedőkötés",
        right: "horzsolás, gyenge vérzés a felkaron",
      },
      {
        id: "nyomokotes",
        left: "nyomókötés",
        right: "erős vérzés az alkaron",
      },
    ],
  },
  {
    id: "apolastan-043",
    topicId: "apolastan",
    type: "matching",
    prompt: "Párosítsa az alkalmazható kötéstípusokat a sérülésekhez!",
    pairs: [
      {
        id: "parittyakotes",
        left: "parittyakötés",
        right: "orrvérzés",
      },
      {
        id: "sapkakotes",
        left: "sapkakötés",
        right: "a hajas fejbőr sérülése",
      },
    ],
  },
  {
    id: "apolastan-085",
    topicId: "apolastan",
    type: "matching",
    prompt: "Párosítsa az alábbi fogalmakat a rájuk jellemző meghatározással!",
    pairs: [
      {
        id: "fektetes",
        left: "fektetés",
        right:
          "Az ágyban való elhelyezés, amelynek módját mindig az orvos határozza meg",
      },
      {
        id: "lejtoztetes",
        left: "lejtőztetés",
        right: "Az ágyvég megemelésével kialakított ferde síkú fektetés.",
      },
    ],
  },
  {
    id: "apolastan-086",
    topicId: "apolastan",
    type: "matching",
    prompt:
      "Párosítsa az alábbi fogalmakat a rájuk jellemző meghatározásokkal!",
    pairs: [
      {
        id: "terd-konyok",
        left: "térd-könyök helyzet",
        right:
          "Kényelmetlen testhelyzet, fektetési mód, alkalmazását speciális vizsgálat indokolhatja.",
      },
      {
        id: "hatfekves",
        left: "hátfekvés",
        right: "Így fekszenek a lázas, elesett, legyengült betegek.",
      },
    ],
  },
  {
    id: "apolastan-112",
    topicId: "apolastan",
    type: "matching",
    prompt: "Párosítsa a szakkifejezéseket a jelentésükkel!",
    pairs: [
      {
        id: "integracio",
        left: "integráció",
        right:
          "Az akadályozott emberek részvételének biztosítását jelenti a társadalmi folyamatokban. Pedagógiai feladatként segíti az akadályozott és ép gyermek tanulását didaktikai és módszertani eszközökkel közös élet- és tanulási térben.",
      },
      {
        id: "eloitelet",
        left: "előítélet",
        right:
          "A rossz feltételezése másokról, elegendő információ hiányában, illetve valamely személlyel szemben érzett idegenkedő, vagy ellenséges attitűd.",
      },
    ],
  },
  {
    id: "apolastan-113",
    topicId: "apolastan",
    type: "matching",
    prompt: "Párosítsa a szakkifejezéseket a jelentésükkel!",
    pairs: [
      {
        id: "diszkriminacio",
        left: "diszkrimináció",
        right: "Közvetlen hátrányos megkülönböztetés.",
      },
      {
        id: "stigmatizacio",
        left: "stigmatizáció",
        right:
          "Megbélyegzettséget jelent, aminek kirekesztés lehet az eredménye.",
      },
    ],
  },
  {
    id: "apolastan-117",
    topicId: "apolastan",
    type: "matching",
    prompt: "Párosítsa az ápolási terv egyes részeihez azok leírását!",
    pairs: [
      {
        id: "apolasi-terv",
        left: "ápolási terv",
        right:
          "Leírt keret vagy vázlat, amelyben megfogalmazzák a beteg állapotának a problémamegoldás, az egyes beavatkozások és ápolási műveletek eredményeképpen elvárható kimenetelét.",
      },
      {
        id: "apolasi-folyamat",
        left: "ápolási folyamat",
        right:
          "Szisztematikus problémamegoldó módszer, amelyet az ápoló minden egyes ügyfélre egyéni helyzetének megfelelően alkalmaz.",
      },
    ],
  },
  {
    id: "apolastan-118",
    topicId: "apolastan",
    type: "matching",
    prompt: "Párosítsa az ápolási terv egyes részeihez azok leírását!",
    pairs: [
      {
        id: "apolasi-anamnezis",
        left: "ápolási anamnézis",
        right:
          "Az ügyfél jelen állapotával, életvitelének és szociokulturális szerepének megváltoztatásával, a betegség által kiváltott érzéseivel és reakcióival összefüggő adatok összegyűjtése.",
      },
      {
        id: "apolasi-diagnozis",
        left: "ápolási diagnózis",
        right:
          "Az ápoló által függetlenül és törvényesen ellátható, valós vagy fenyegető egészségügyi probléma írásbeli megfogalmazása.",
      },
      {
        id: "apolasi-beavatkozas",
        left: "ápolási beavatkozás",
        right:
          "A beteg károsodásának megelőzésére vagy lelki, érzelmi, fizikai, vagy szociális működéseinek megjavítására irányuló ápolási tevékenység.",
      },
    ],
  },
  {
    id: "apolastan-124",
    topicId: "apolastan",
    type: "matching",
    prompt:
      "Párosítsa az ápolási modelleket a rájuk jellemző meghatározásokkal!",
    pairs: [
      {
        id: "dorothea-orem",
        left: "Dorothea Orem",
        right:
          "a beteg önellátással kapcsolatos szükségleteit hangsúlyozó modell",
      },
      {
        id: "nancy-roper",
        left: "Nancy Roper",
        right: "az élettevékenységeken alapuló modell fejlesztője",
      },
    ],
  },
  {
    id: "apolastan-066",
    topicId: "apolastan",
    type: "grouping",
    prompt:
      "Csoportosítsa a felsorolt eszközöket a megadott szempontok szerint!",
    groups: [
      { id: "szemelyi", text: "Személyi akadálymentesítés eszközei" },
      { id: "intezmenyi", text: "Intézményi akadálymentesítés eszközei" },
    ],
    items: [
      {
        id: "hernyotalpas-lepcson-jaro",
        text: "hernyótalpas lépcsőn járó",
        correctGroupId: "szemelyi",
      },
      {
        id: "korlatlift",
        text: "korlátlift",
        correctGroupId: "intezmenyi",
      },
      {
        id: "emelolap",
        text: "emelőlap",
        correctGroupId: "intezmenyi",
      },
      {
        id: "lepcsokuli",
        text: "lépcsőkuli",
        correctGroupId: "szemelyi",
      },
    ],
  },
  {
    id: "apolastan-098",
    topicId: "apolastan",
    type: "fill_in",
    prompt:
      "Válassza ki a felsorolt szakkifejezések jelentését az alábbiak közül!",
    statements: [
      {
        id: "diszkriminacio",
        parts: [
          "Diszkrimináció: ",
          {
            id: "jelentes",
            label: "A diszkrimináció jelentése",
            options: [
              {
                id: "kozvetlen-megkulonboztetes",
                text: "közvetlen megkülönböztetés",
              },
              {
                id: "kozvetlen-hatranyos-megkulonboztetes",
                text: "közvetlen hátrányos megkülönböztetés",
              },
            ],
            correctOptionId: "kozvetlen-megkulonboztetes",
          },
        ],
      },
      {
        id: "szegregacio",
        parts: [
          "Szegregáció: ",
          {
            id: "jelentes",
            label: "A szegregáció jelentése",
            options: [
              { id: "beepules", text: "beépülés" },
              { id: "elkulonules", text: "elkülönülés" },
              { id: "elkerules", text: "elkerülés" },
            ],
            correctOptionId: "elkulonules",
          },
        ],
      },
    ],
  },
  {
    id: "apolastan-100",
    topicId: "apolastan",
    type: "fill_in",
    prompt: "Egészítse ki az alábbi mondatokat!",
    statements: [
      {
        id: "korosztalyok",
        parts: [
          "A 45-59 éves korosztályt ",
          {
            id: "kozepkoruak",
            label: "A 45-59 éves korosztály megnevezése",
            options: [
              { id: "kozepkoruaknak", text: "középkorúaknak" },
              { id: "idosodoknek", text: "idősödőknek" },
            ],
            correctOptionId: "kozepkoruaknak",
          },
          " nevezzük. A ",
          {
            id: "szaz-ev-felett",
            label: "A 100. életévtől kezdődő kor megnevezése",
            options: [
              { id: "matuzsalemi-kor", text: "matuzsálemi kor" },
              { id: "idos-kor", text: "idős kor" },
            ],
            correctOptionId: "matuzsalemi-kor",
          },
          " a 100. életévtől kezdődik.",
        ],
      },
    ],
  },
  {
    id: "apolastan-103",
    topicId: "apolastan",
    type: "fill_in",
    prompt:
      "Egészítse ki a fogyatékossággal/akadályozottsággal kapcsolatos alábbi mondatokat!",
    statements: [
      {
        id: "fogyatekossag",
        parts: [
          "Fogyatékossággal élő az a személy, aki tartósan, vagy ",
          {
            id: "idotartam",
            label: "A károsodás fennállásának időtartama",
            options: [
              { id: "veglegesen", text: "véglegesen" },
              { id: "atmenetileg", text: "átmenetileg" },
            ],
            correctOptionId: "veglegesen",
          },
          " olyan érzékszervi, kommunikációs, fizikai, értelmi, pszichoszociális károsodással – illetve ezek halmozódásával – él, amely egyéni társadalmi részvételét korlátozza, vagy gátolja. A sérülés fennállása alapján a fogyatékosság lehet ",
          {
            id: "eredet",
            label: "A fogyatékosság típusa a sérülés fennállása alapján",
            options: [
              { id: "veleszuletett", text: "veleszületett" },
              { id: "atmeneti", text: "átmeneti" },
            ],
            correctOptionId: "veleszuletett",
          },
          ", vagy szerzett.",
        ],
      },
    ],
  },
  {
    id: "apolastan-109",
    topicId: "apolastan",
    type: "fill_in",
    prompt:
      "Egészítse ki az alábbi, értelmi fogyatékossággal kapcsolatos mondatot!",
    statements: [
      {
        id: "tobb-fogyatekossag",
        parts: [
          "Több fogyatékosság együttes jelenléténél, ha a fogyatékosságok egymástól függetlenek, ",
          {
            id: "szakkifejezes",
            label:
              "Az egymástól független fogyatékosságok együttes jelenlétének megnevezése",
            options: [
              {
                id: "autizmus-spektrumzavar",
                text: "autizmus spektrumzavarról",
              },
              {
                id: "halmozott-fogyatekossag",
                text: "halmozott fogyatékosságról",
              },
              {
                id: "elsodleges-masodlagos-fogyatekossag",
                text: "elsődleges és másodlagos fogyatékosságról",
              },
            ],
            correctOptionId: "halmozott-fogyatekossag",
          },
          " beszélünk.",
        ],
      },
    ],
  },
  {
    id: "apolastan-110",
    topicId: "apolastan",
    type: "fill_in",
    prompt:
      "Egészítse ki az alábbi értelmi fogyatékosokkal kapcsolatos mondatot!",
    statements: [
      {
        id: "egymas-kovetkezmenye",
        parts: [
          "Több fogyatékosság együttes jelenléténél, ha az egyik a másik következménye, ",
          {
            id: "szakkifejezes",
            label:
              "Az egymás következményeként jelen lévő fogyatékosságok megnevezése",
            options: [
              {
                id: "autizmus-spektrumzavar",
                text: "autizmus spektrumzavarról",
              },
              {
                id: "halmozott-fogyatekossag",
                text: "halmozott fogyatékosságról",
              },
              {
                id: "elsodleges-masodlagos-fogyatekossag",
                text: "elsődleges és másodlagos fogyatékosságról",
              },
            ],
            correctOptionId: "elsodleges-masodlagos-fogyatekossag",
          },
          " beszélünk.",
        ],
      },
    ],
  },
  {
    id: "apolastan-111",
    topicId: "apolastan",
    type: "fill_in",
    prompt: "Válassza ki a tanulási zavarok latin megfelelőit!",
    statements: [
      {
        id: "olvasasi-zavar",
        parts: [
          "Olvasási zavar: ",
          {
            id: "latin-megfelelo",
            label: "Az olvasási zavar latin megfelelője",
            options: [
              { id: "dyslexia", text: "dyslexia" },
              { id: "dysgraphia", text: "dysgraphia" },
              { id: "dyscalculia", text: "dyscalculia" },
            ],
            correctOptionId: "dyslexia",
          },
        ],
      },
      {
        id: "szamolasi-zavar",
        parts: [
          "Számolási zavar: ",
          {
            id: "latin-megfelelo",
            label: "A számolási zavar latin megfelelője",
            options: [
              { id: "dyslexia", text: "dyslexia" },
              { id: "dysgraphia", text: "dysgraphia" },
              { id: "dyscalculia", text: "dyscalculia" },
            ],
            correctOptionId: "dyscalculia",
          },
        ],
      },
    ],
  },
  {
    id: "apolastan-116",
    topicId: "apolastan",
    type: "fill_in",
    prompt:
      "Egészítse ki az egyetemes tervezéssel kapcsolatos alábbi mondatokat!",
    statements: [
      {
        id: "egyetemes-tervezes",
        parts: [
          "Egyetemes tervezés az a tervezési stratégia, amely már a folyamat kezdetén figyelembe veszi a használók ",
          {
            id: "hasznalok",
            label: "A használók figyelembe vett jellemzője",
            options: [
              { id: "szemelyes-kivansagok", text: "személyes kívánságainak" },
              { id: "kepessegek", text: "képességeinek" },
            ],
            correctOptionId: "kepessegek",
          },
          " különbözőségét és olyan termékek vagy szolgáltatások jönnek létre, melyek különleges megoldások és adaptáció nélkül biztosítják a lehető legtöbb ember számára a legteljesebb és legönállóbb használhatóságot. Célja, hogy a tervezők ne ",
          {
            id: "tervezok",
            label: "A tervezés során elkerülendő hatás",
            options: [
              { id: "integraljak", text: "integrálják" },
              { id: "stigmatizaljak", text: "stigmatizálják" },
            ],
            correctOptionId: "stigmatizaljak",
          },
          " az átlagtól eltérő igényű felhasználókat azzal, hogy speciális eszközök használatára kényszerítik őket.",
        ],
      },
    ],
  },
  {
    id: "apolastan-125",
    topicId: "apolastan",
    type: "fill_in",
    prompt:
      "Nevezze meg az alábbi, táp- és építőanyagokkal kapcsolatos fogalmakat a megadott jellemzők alapján!",
    statements: [
      {
        id: "enzimek",
        parts: [
          "Szerves katalizátorok, biokémiai folyamatokat megindítanak, meggyorsítanak, és a folyamat végén változatlan formában találhatók meg: ",
          {
            id: "fogalom",
            label: "A szerves katalizátorok megnevezése",
            options: [
              { id: "enzimek", text: "enzimek" },
              { id: "vitaminok", text: "vitaminok" },
              { id: "szenhidratok", text: "szénhidrátok" },
            ],
            correctOptionId: "enzimek",
          },
        ],
      },
      {
        id: "vitaminok",
        parts: [
          "Életfontos sejtépítő anyagok, melyek energiát nem szolgáltatnak, de a szervezet normális működéséhez nélkülözhetetlenek: ",
          {
            id: "fogalom",
            label:
              "Az energiát nem szolgáltató, nélkülözhetetlen anyagok megnevezése",
            options: [
              { id: "enzimek", text: "enzimek" },
              { id: "vitaminok", text: "vitaminok" },
              { id: "szenhidratok", text: "szénhidrátok" },
            ],
            correctOptionId: "vitaminok",
          },
        ],
      },
    ],
  },
  {
    id: "apolastan-126",
    topicId: "apolastan",
    type: "fill_in",
    prompt:
      "Nevezze meg az alábbi, táp- és építőanyagokkal kapcsolatos fogalmakat a megadott jellemzők alapján!",
    statements: [
      {
        id: "feherjek",
        parts: [
          "Nitrogéntartalmú szerves vegyületek, építőköveik az aminosavak: ",
          {
            id: "fogalom",
            label: "Az aminosavakból felépülő vegyületek megnevezése",
            options: [
              { id: "feherjek", text: "fehérjék" },
              { id: "szenhidratok", text: "szénhidrátok" },
              { id: "zsirok", text: "zsírok" },
            ],
            correctOptionId: "feherjek",
          },
        ],
      },
      {
        id: "szenhidratok",
        parts: [
          "Szervezet glikogén formában raktározza: ",
          {
            id: "fogalom",
            label: "A glikogén formájában raktározott tápanyagok megnevezése",
            options: [
              { id: "feherjek", text: "fehérjék" },
              { id: "szenhidratok", text: "szénhidrátok" },
              { id: "zsirok", text: "zsírok" },
            ],
            correctOptionId: "szenhidratok",
          },
        ],
      },
    ],
  },
  {
    id: "apolastan-127",
    topicId: "apolastan",
    type: "fill_in",
    prompt:
      "Határozza meg a fiziológiás pulzusszámot a megadott életkoronként! Egészítse ki a táblázatot!",
    statements: [
      {
        id: "ujszulott",
        parts: [
          "újszülött – pulzusszám (percenként): ",
          {
            id: "pulzusszam",
            label: "Pulzusszám (újszülött, percenként)",
            options: [
              {
                id: "120-160",
                text: "120-160",
              },
              {
                id: "80-130",
                text: "80-130",
              },
              {
                id: "75-110",
                text: "75-110",
              },
            ],
            correctOptionId: "120-160",
          },
        ],
      },
      {
        id: "1-2-ev",
        parts: [
          "1-2 év – pulzusszám (percenként): ",
          {
            id: "pulzusszam",
            label: "Pulzusszám (1-2 év, percenként)",
            options: [
              {
                id: "120-160",
                text: "120-160",
              },
              {
                id: "80-130",
                text: "80-130",
              },
              {
                id: "75-110",
                text: "75-110",
              },
            ],
            correctOptionId: "80-130",
          },
        ],
      },
      {
        id: "7-12-ev",
        parts: [
          "7-12 év – pulzusszám (percenként): ",
          {
            id: "pulzusszam",
            label: "Pulzusszám (7-12 év, percenként)",
            options: [
              {
                id: "120-160",
                text: "120-160",
              },
              {
                id: "80-130",
                text: "80-130",
              },
              {
                id: "75-110",
                text: "75-110",
              },
            ],
            correctOptionId: "75-110",
          },
        ],
      },
    ],
  },
];
