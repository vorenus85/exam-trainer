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
      { id: "c", text: "az infúziós terápia során bevitt folyadék mennyiségét" },
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
      { id: "d", text: "székletben nem látható vér, de laboratóriumi vizsgálattal kimutatható" },
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
      { id: "a", text: "Módszerei közé tartozik a szűrés, korai kezelés és a gondozásba vétel." },
      { id: "b", text: "Fontos célja a krónikus beteg, vagy a végleges károsodást szenvedett betegek számára a megfelelő életminőség biztosítása." },
      { id: "c", text: "Fontos szerep jut a védőoltásoknak, a rizikóállapotok szűrésének és az egészségfejlesztésnek." },
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
      { id: "a", text: "Fontos célja a krónikus beteg, vagy a végleges károsodást szenvedett betegek számára a megfelelő életminőség biztosítása." },
      { id: "b", text: "A betegségek korai stádiumban történő felismerését és azonnali gyógykezelését jelenti." },
      { id: "c", text: "Fontos szerep jut a védőoltásoknak, a rizikóállapotok szűrésének és az egészségfejlesztésnek." },
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
      { id: "a", text: "Az egészség megőrzésére, védelmére, és fejlesztésére irányul." },
      { id: "b", text: "Célja a betegség időtartamának lerövidítése, illetve előrehaladásának, súlyosbodásának) megakadályozása, lassítása." },
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
      { id: "a", text: "Az egészség megőrzésére, védelmére, és fejlesztésére irányul." },
      { id: "b", text: "A fogyatékkal élő és rokkant személyekre irányul." },
      { id: "c", text: "Olyan egyéneket céloz meg, akiknél jelentős kockázati tényezők állnak fenn, veszélyeztetettek, vagy már a betegség korai stádiumában vannak." },
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
      { id: "a", text: "A beteg mosdatásához 2 db törölközőt kell előkészíteni, mert ha az egyik véletlenül leesik, vagy szennyeződik, a másikkal pótolhatjuk." },
      { id: "b", text: "Azoknál a betegeknél, akik szájon át nem táplálhatók, az ápolónak különös gondot kell fordítania a szájápolásra és a száj állapotának megfigyelésére." },
      { id: "c", text: "A szennyes ágyneműt az ágyneműcsere végén a földről összegyűjtve az erre kijelölt szennyes ledobókba helyezzük." },
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
      { id: "a", text: "A mosdatáshoz használt műanyag eszközöket – ha nincs lehetőség gépi mosásra és fertőtlenítésre – alapos mosószeres, folyóvizes, kefével történő tisztítás után fertőtleníteni kell." },
      { id: "b", text: "Nyújtott hátfekvés egy olyan fektetési mód, ahol a beteg párna nélkül, vagy lapos párnán fekszik." },
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
    prompt: "Jelölje az alábbi, a csökkent nyelési képességű beteg biztonságos étkezését segítő/támogató lehetőségek közül a helytelent! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "a beteget az étkezéshez vízszintes testhelyzetbe segítve" },
      { id: "b", text: "étkezés előtt a kórteremben lévő zavaró tényezőket kiküszöbölve" },
      { id: "c", text: "etetéskor az ételt (a falatot) a beteg szájának ép oldalára helyezve" },
      { id: "d", text: "nyelési folyamat alatt szóban biztatva" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-053",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Jelölje, hogy az alábbiak közül mit szükséges használni mérésre a pontos testsúly megállapításához, amennyiben a páciens nem tud egyedül állni! (Csak egy helyes válasz lehetséges!)",
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
    prompt: "Jelölje, hogy mit szükséges használni mérésre a pontos testsúly megállapításához, amennyiben a páciens nem tudja megtartani a testsúlyát! (Csak egy helyes válasz lehetséges!)",
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
    prompt: "Húzza alá az alábbiak közül a helyes állítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "Az e-cigaretta bizonyítottan segíti a dohányzásról leszokást, emellett a kifújt füst, illetve pára mások egészségét nem károsítja." },
      { id: "b", text: "A vízipipa beszívott füstje kis mennyiségű mérgező anyagot, többek között szén-monoxidot, nehézfémeket és rákkeltő vegyületeket tartalmaz." },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-056",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Húzza alá az alábbiak közül a helytelen állítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "A szénhidrátok energiaforrásul szolgálnak a szervezet számára." },
      { id: "b", text: "Túl alacsony zsírbevitel mellett a vitaminellátás is veszélyeztetett, mert hiány alakulhat ki a szervezetben a zsírban oldódó vitaminokból." },
      { id: "c", text: "A vitaminok a szervezet számára nélkülözhetetlen vegyületek, ezért ezeket nem lehet túladagolni." },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "apolastan-058",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Húzza alá az alábbiak közül a helytelen állítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "A cigaretta „csak” szociális és pszichés függőséget okoz, emiatt könnyebb a leszokás, mint az egyéb drogok esetében." },
      { id: "b", text: "A cigarettafüstben lévő egészségkárosító anyagok többsége átjut a méhlepényen és károsítja a magzatot." },
      { id: "c", text: "A dohányzás egyik gyakori szövődménye a végtagi artériák szűkülete, főleg az alsó végtagokon." },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-060",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Húzza alá az alábbiak közül a helyes állítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "Az egészségmagatartás lehet preventív, a betegségeket megelőző, vagy kockázati, betegségeket okozó." },
      { id: "b", text: "Az egészségtudatos magatartás az egyén szemléletének, viselkedésének, tevékenységének összessége annak érdekében, hogy a betegségeket minél hamarabb átvészelje." },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-062",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Válassza ki az egymásra épülő emberi szükségletek közül, hogy melyik következik a fiziológiai szükségletek után a Maslow-féle hierarchiában! (Csak egy helyes válasz lehetséges!)",
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
    prompt: "Válassza ki az egymásra épülő emberi szükségletek közül, hogy melyik következik a biztonság és védelem szükséglete után a Maslow-féle hierarchiában! (Csak egy helyes válasz lehetséges!)",
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
    prompt: "Válassza ki az egymásra épülő emberi szükségletek közül, hogy melyik következik a szeretet és összetartozás szükséglete után a Maslow-féle hierarchiában! (Csak egy helyes válasz lehetséges!)",
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
    prompt: "Válassza ki az egymásra épülő emberi szükségletek közül, hogy melyik következik az elismerés (önbecsülés) szükséglete után a Maslow-féle hierarchiában! (Csak egy helyes válasz lehetséges!)",
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
    prompt: "Húzza alá a fogyatékosságra (disability) vonatkozó helyes megállapítást a betegségek lehetséges következményei közül! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "Az élettani, lélektani funkciók, vagy anatómiai szerkezetek bármilyen hiánya vagy károsodása, megrongálása, mely betegség, baleset vagy veleszületett rendellenesség következtében alakult ki." },
      { id: "b", text: "A károsodás következtében valamilyen emberi tevékenység (járás, fogás, étkezés, stb.) véghezvitelében való korlátozottság, vagy képtelenség." },
      { id: "c", text: "A károsodás vagy az akadályozottság olyan foka, amely korlátozza vagy megakadályozza az egyént abban, hogy korának, nemének, szocio-, kulturális környezetének megfelelő szerepét a társadalomban betölthesse." },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-068",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Húzza alá a helyes megállapítást a higiénés szükségletre vonatkozóan! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "Az ápolás önálló funkciói közé tartozik a higiénés szükségletek felmérése és ezek szükség szerint történő kielégítése." },
      { id: "b", text: "A higiénés szükségletek felmérése és kielégítése az ápolás nem önálló funkciói közé tartozik." },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-069",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Húzza alá a helyes megállapítást a higiénés szükségletre vonatkozóan! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "A hosszabb kórházi ápolásra szoruló betegek fürdetése mindig a reggeli időszakban kell, hogy megtörténjen." },
      { id: "b", text: "Azon páciensek számára, akik hosszabb kórházi ápolásra szorulnak fontos az egyéni, személyre szabott ápolási terv készítése a higiénés szükségletek kielégítése kapcsán is." },
      { id: "c", text: "A higiénés szükségletek kielégítése során az adott kórházi osztályon kialakított szokásokat kell követni, a betegnek is alkalmazkodnia kell." },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-070",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Húzza alá a higiénés szükségletre vonatkozó helytelen megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "Az ápolás önálló funkciói közé tartozik a higiénés szükségletek felmérése és ezek szükség szerint történő kielégítése." },
      { id: "b", text: "A higiénés szükségletek felmérése és kielégítése az ápolás nem önálló funkciói közé tartozik." },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-071",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Húzza alá a higiénés szükségletre vonatkozó helytelen megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "Azon páciensek számára, akik hosszabb kórházi ápolásra szorulnak fontos az egyéni, személyre szabott ápolási terv készítése a higiénés szükségletek kielégítése kapcsán is." },
      { id: "b", text: "A higiénés szükségletek kielégítése során az adott kórházi osztályon kialakított szokásokat kell követni, a betegnek is alkalmazkodnia kell." },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-072",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Húzza alá a higiénés szükségletre vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "Az ápolás önálló funkciói közé tartozik a higiénés szükségletek felmérése és ezek szükség szerint történő kielégítése." },
      { id: "b", text: "A higiénés szükségletek felmérése és kielégítése az ápolás nem önálló funkciói közé tartozik." },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-073",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Húzza alá a higiénés szükségletre vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "A higiénés szükségletek felmérése és kielégítése az ápolás nem önálló funkciói közé tartozik." },
      { id: "b", text: "A higiénés szükségletek kielégítése során figyelembe kell venni a páciens tisztálkodással kapcsolatos meglévő szokásait és nézeteit is." },
      { id: "c", text: "A higiénés szükségletek kielégítése során az adott kórházi osztályon kialakított szokásokat kell követni, a betegnek is alkalmazkodnia kell." },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-074",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Húzza alá a higiénés szükségletre vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "A hosszabb kórházi ápolásra szoruló betegek fürdetése mindig a reggeli időszakban kell, hogy megtörténjen." },
      { id: "b", text: "A higiénés szükségletek kielégítése során figyelembe kell venni a páciens tisztálkodással kapcsolatos meglévő szokásait és nézeteit is." },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-075",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Húzza alá az ágyazásra vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "A páciens ágyát minimálisan naponta egyszer tegyük rendbe, valamint szennyeződések esetén az ágynemű azonnali cseréje szükséges a nap bármely szakában." },
      { id: "b", text: "Az ágynemű cseréje minden esetben a reggeli osztályátadás előtt kell, hogy megtörténjen." },
      { id: "c", text: "Ágyazás közben nem szükséges kesztyűt cserélni." },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-076",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Húzza alá az ágyazásra vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "Az ágynemű cseréje minden esetben a reggeli osztályátadás előtt kell, hogy megtörténjen." },
      { id: "b", text: "Az ágyazás közben nem szükséges kesztyűt cserélni." },
      { id: "c", text: "A kesztyű cseréje szükséges a szennyeződött ágyneművel való érintkezés után." },
      { id: "d", text: "A szennyes ágyneműt a kórterem ajtajához közel, lehetőség szerint a mosdó alatt kell elhelyezni." },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "apolastan-077",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Húzza alá az ágyazásra vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "Az ágyazást minden esetben két ápolónak kell végezni." },
      { id: "b", text: "Az ágyazás megkezdése előtt biztosítani kell a páciens számára az ürítés szükséglet kielégítését, amennyiben igényli azt a páciens, így elkerülhető a tiszta ágynemű újra szennyeződése." },
      { id: "c", text: "Fekvő beteg ágyának áthúzásakor a beteget egy másik ágyba kell áthelyezni." },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-078",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Húzza alá az ágyazásra vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "A szennyes ágyneműt azonnal rakjuk a szennyestartóba és közben vigyázzunk arra, hogy ne érintkezzen ruhánkkal, illetve más tárgyakkal." },
      { id: "b", text: "Az ágyazást minden esetben két ápolónak kell végezni." },
      { id: "c", text: "Fekvő beteg ágyának áthúzásakor a beteget egy másik ágyba kell áthelyezni." },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-079",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Húzza alá az ágyazásra vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "A kesztyű cseréje szükséges a szennyeződött ágyneművel való érintkezés után." },
      { id: "b", text: "A szennyes ágyneműt a kórterem ajtajához közel, lehetőség szerint a mosdó alatt kell elhelyezni." },
      { id: "c", text: "Fekvő beteg ágyának áthúzásakor a beteget egy másik ágyba kell áthelyezni." },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-080",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Húzza alá az ágyazásra vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "A szennyes ágyneműt a betegszoba ajtajához közel, lehetőség szerint a mosdó alatt kell elhelyezni." },
      { id: "b", text: "A szennyes ágyneműt azonnal rakjuk a szennyes tartóba és közben vigyázzunk arra, hogy ne érintkezzen ruhánkkal, illetve más tárgyakkal." },
      { id: "c", text: "Fekvő beteg ágyának áthúzásakor a beteget egy másik ágyba kell áthelyezni." },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-081",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Húzza alá az ágyazásra vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "Gumilepedő alkalmazásakor figyeljünk arra, hogy ne érintkezzen közvetlenül a páciens bőrével, mert a bőr izzadását, irritációját okozhatja." },
      { id: "b", text: "Az ágynemű cseréje minden esetben a reggeli osztályátadás előtt kell, hogy megtörténjen." },
      { id: "c", text: "Az ágyazás közben nem szükséges kesztyűt cserélni." },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-082",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Húzza alá az ágyazásra vonatkozó a helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "A szennyes ágyneműt a betegszoba ajtajához közel, lehetőség szerint a mosdó alatt kell elhelyezni." },
      { id: "b", text: "Gumilepedő alkalmazásakor figyeljünk arra, hogy ne érintkezzen közvetlenül a páciens bőrével, mert a bőr izzadását, irritációját okozhatja." },
      { id: "c", text: "Az ágynemű cseréje minden esetben a reggeli osztályátadás előtt kell, hogy megtörténjen." },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-083",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Húzza alá a fektetés definícióját! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "Az ágyban való elhelyezés, amelynek módját mindig az orvos határozza meg" },
      { id: "b", text: "Az ágyban spontán elfoglalt testhelyzet." },
      { id: "c", text: "Az ágyvég megemelésével kialakított testhelyzet." },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "apolastan-084",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Húzza alá az ágyazásra vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "A szennyes ágyneműt a betegszoba ajtajához közel, lehetőség szerint a mosdó alatt kell elhelyezni." },
      { id: "b", text: "Az ágynemű cseréje minden esetben a reggeli osztályátadás előtt kell, hogy megtörténjen." },
      { id: "c", text: "Az ágyazás megkezdése előtt biztosítani kell a páciens számára az ürítés szükséglet kielégítését, amennyiben igényli azt a páciens, így elkerülhető a tiszta ágynemű újra szennyeződése." },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "apolastan-087",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Húzza alá a lejtőztetésre vonatkozó helyes állítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "Így fekszenek a lázas, elesett, legyengült betegek." },
      { id: "b", text: "Az ágyvég megemelésével kialakított ferde síkú fektetés." },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "apolastan-115",
    topicId: "apolastan",
    type: "single_choice",
    prompt: "Húzza alá az alábbiak közül azt az egyet, amelyik NEM tartozik a fizikai akadályok közé! (Csak egy helyes válasz lehetséges!)",
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
];
