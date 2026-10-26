import type { ExamQuestion } from "../types/question.ts";

export const tarsadalomtudomanyiQuestions: ExamQuestion[] = [
  {
    id: "tarsadalomtudomanyi-001",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki a kommunikációs folyamatban alkalmazott dekódolásra vonatkozó helyes meghatározást! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "pontos értesülés, adat, hír" },
      { id: "b", text: "a szavak és érzések egybeesése" },
      { id: "c", text: "jelek, jelrendszerek átalakítása információvá" },
      { id: "d", text: "az információ átalakítása jellé, jelrendszerré" },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "tarsadalomtudomanyi-017",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Húzza alá az alábbiak közül az egészségügyi dokumentációnak az egészségügyi törvény szerinti meghatározását! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "az egészségügyi szolgáltatás során az egészségügyi dolgozó tudomására jutó, a beteg kezelésével kapcsolatos egészségügyi adat",
      },
      {
        id: "b",
        text: "az egészségügyi szolgáltatás során az egészségügyi dolgozó tudomására jutó, a beteg kezelésével kapcsolatos egészségügyi és személyazonosító adatokat tartalmazó feljegyzés, nyilvántartás vagy bármilyen más módon rögzített adat, függetlenül annak hordozójától vagy formájától",
      },
      {
        id: "c",
        text: "az egészségügyi szolgáltatás során az egészségügyi dolgozó tudomására jutó, a beteg kezelésével kapcsolatos egészségügyi és személyazonosító adatokat tartalmazó feljegyzés",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "tarsadalomtudomanyi-029",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Húzza alá a felsorolt betegjogok közül azt, amelyikre az alábbi meghatározás vonatkozik! (Csak egy helyes válasz lehetséges!)\n\nA beteg jogosult arra, hogy a kivizsgálását és kezelését érintő döntésekben részt vegyen. Bármely egészségügyi beavatkozás elvégzésének előfeltétele, hogy ahhoz a beteg tévedésből, megtévesztéstől, fenyegetéstől és kényszertől mentes, megfelelő tájékoztatáson alapuló beleegyezését adja.",
    options: [
      { id: "a", text: "Egészségügyi ellátáshoz való jog" },
      { id: "b", text: "A kapcsolattartás joga" },
      { id: "c", text: "A tájékoztatáshoz való jog" },
      { id: "d", text: "Az önrendelkezéshez való jog" },
    ],
    correctOptionIds: ["d"],
  },
  {
    id: "tarsadalomtudomanyi-041",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki a betegjogok érvényesítésével kapcsolatos helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az egészségügyi szolgáltató köteles a beteget – egészségi állapotától függően – a felvételét követő 30 napon belül, illetőleg az ellátást követően tájékoztatni a betegjogokról, azok érvényesítésének lehetőségeiről, illetve a gyógyintézet házirendjéről.",
      },
      {
        id: "b",
        text: "Az egészségügyi szolgáltató köteles a beteget – egészségi állapotától függően – a felvételekor, illetőleg az ellátás előtt tájékoztatni a betegjogokról, azok érvényesítésének lehetőségeiről, illetve a gyógyintézet házirendjéről.",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "tarsadalomtudomanyi-042",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki a betegjogok érvényesítésével kapcsolatos helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "A beteg jogosult az egészségügyi ellátással kapcsolatban az egészségügyi szolgáltatónál, illetve fenntartójánál panaszt tenni.",
      },
      {
        id: "b",
        text: "A beteg az egészségügyi ellátással kapcsolatban kizárólag az egészségügyi szolgáltató fenntartójánál tehet panaszt.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-132",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Részt kell-e venni a munkavédelmi oktatásokon a munkavállalóknak? (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Csak abban az esetben, ha éppen akkor tartják, amikor a munkahelyén tartózkodik.",
      },
      {
        id: "b",
        text: "A munkavédelmi oktatáson való részvétel nem kötelező.",
      },
      {
        id: "c",
        text: "A munkavállaló kötelessége a megjelölt időpontban és helyen részt venni a munkavédelmi oktatásokon.",
      },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "tarsadalomtudomanyi-129",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki a helyes megállapításokat! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az elsősegélynyújtó felszerelést, jól elzárva, védett helyen kell készenlétben tartani.",
      },
      {
        id: "b",
        text: "Az elsősegélynyújtó felszerelést, jól látható, könnyen és gyorsan elérhető, védett helyen kell készenlétben tartani.",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "tarsadalomtudomanyi-043",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki az információbiztonsággal kapcsolatos helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Információbiztonság az információ sértetlenségének és rendelkezésre állásának megőrzését jelenti.",
      },
      {
        id: "b",
        text: "Az információbiztonság alatt kizárólag az elektronikusan kezelt személyes adatok biztonságos megőrzését értjük.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-128",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki a helyes megállapításokat! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Minden munkahelyen biztosítani kell elsősegélynyújtó felszerelést (mentődobozt) és a munkavállalók közül kiképzett, elsősegélynyújtásra kijelölt személy jelenlétét.",
      },
      {
        id: "b",
        text: "Az 50 főnél magasabb létszámú munkahelyen, elsősegélynyújtó felszerelést (mentődobozt) és a munkavállalók közül kiképzett, elsősegélynyújtásra kijelölt személy jelenlétét kell biztosítani.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-127",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki a helyes megállapításokat! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Minden munkahelyen biztosítani kell elsősegélynyújtó felszerelést (mentődobozt) és a munkavállalók közül kiképzett, elsősegélynyújtásra kijelölt személy jelenlétét.",
      },
      {
        id: "b",
        text: "Az elsősegélynyújtó felszerelést, jól elzárva, védett helyen kell készenlétben tartani.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-126",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki a helyes megállapításokat! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az elsősegélynyújtás alapvető célja az életmentés, valamint az orvosi segítség megérkezéséig a sérült állapotromlásának megakadályozása.",
      },
      {
        id: "b",
        text: "Az elsősegélynyújtás alapvető célja, hogy az orvosi segítség megérkezéséig a sérült állapotát javítsuk.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-044",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki a betegjogok érvényesítésével kapcsolatos helyes megállapításokat! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Betegjogi képviselő minden olyan személy lehet, aki egészségügyi végzettséggel rendelkezik.",
      },
      {
        id: "b",
        text: "A betegjogi képviselő csak olyan személy lehet, aki büntetlen előéletű, nem áll egészségügyi tevékenység gyakorlását kizáró foglalkozástól eltiltás hatálya alatt, felsőfokú végzettséggel rendelkezik.",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "tarsadalomtudomanyi-045",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki a betegjogok érvényesítésével kapcsolatos helyes megállapításokat! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "A betegjogi képviselőt az egészségügyért felelős miniszter által vezetett minisztérium (a betegjogi, ellátottjogi és gyermekjogi képviselőt foglalkoztató szerv) foglalkoztatja.",
      },
      {
        id: "b",
        text: "A betegjogi képviselőt az egészségügyi szolgáltatók kötelesek munkavégzésre irányuló jogviszonyban foglalkoztatni.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-069",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki azokat az eseteket, amikor betegellátásban higiénés kézfertőtlenítés szükséges!",
    options: [
      { id: "a", text: "a beteg érintése előtt" },
      { id: "b", text: "aszeptikus beavatkozás előtt" },
      { id: "c", text: "váladékkal történő érintkezés után" },
      { id: "d", text: "a beteg érintését követően" },
      { id: "e", text: "a beteg környezetével történő érintkezést követően" },
      { id: "f", text: "minden esetben" },
      { id: "g", text: "egyik esetben sem" },
    ],
    correctOptionIds: ["f"],
  },
  {
    id: "tarsadalomtudomanyi-074",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki a helyes sorrendet! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "kesztyűfelvétel, kézfertőtlenítés, betegellátás, kézfertőtlenítés, kesztyűlevétel",
      },
      {
        id: "b",
        text: "kézfertőtlenítés, kesztyűfelvétel, betegellátás, kesztyűlevétel, kézfertőtlenítés",
      },
      {
        id: "c",
        text: "kesztyűfelvétel, betegellátás, kézfertőtlenítés, kesztyűlevétel, kézfertőtlenítés",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "tarsadalomtudomanyi-125",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Végezhet-e a munkavállaló önállóan munkát, ha nem részesült előzetesen munkavédelmi oktatásban? (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "Nem, csak az oktatást követően." },
      { id: "b", text: "Nem, csak ha veszélytelen munkát bíznak rá." },
      { id: "c", text: "Igen, mert azt később is pótolhatja." },
      { id: "d", text: "Nem kötelező munkavédelmi oktatáson részt venni." },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-124",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "A munkavállaló megtagadhatja-e a munkavégzést, ha azzal saját egészségét veszélyeztetné? (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "Igen, minden esetben." },
      { id: "b", text: "Igen, de csak ha extrém veszélyt jelent rá nézve." },
      { id: "c", text: "Igen, ha azzal a munkaadója is egyetért." },
      { id: "d", text: "Nem, mert akkor elveszítheti a munkáját." },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-123",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "A munkavállaló végezhet-e olyan munkát, amivel más testi épségét veszélyeztetné? (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Igen, ha a másik beleegyezik és vállalja a kockázatot.",
      },
      { id: "b", text: "Igen, hogyha az csak nagyon rövid ideig tart." },
      {
        id: "c",
        text: "Csak abban az esetben, ha ebből még nem volt probléma.",
      },
      { id: "d", text: "Nem, sőt meg is kell tagadni a munkavégzést." },
    ],
    correctOptionIds: ["d"],
  },
  {
    id: "tarsadalomtudomanyi-083",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki az alábbi felsorolásból a helyes állítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "A veszélyes hulladékgyűjtő dobozokat a használat alatt le kell fedni – jól alkalmazhatók azok, amelyek fedelén bedobó nyílást vágtak –, megtöltést követően a dobozokat úgy kell lezárni, hogy ne legyenek kinyithatók.",
      },
      {
        id: "b",
        text: "A veszélyes hulladékgyűjtő dobozokat a használat során nyitva kell tartani.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-084",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki az alábbi felsorolásból a helyes állítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "A veszélyes hulladékgyűjtő dobozokat megtöltésük után sem kell véglegesen lezárni, hiszen a hulladékot ki kell tudni üríteni a tárolókból.",
      },
      {
        id: "b",
        text: "A veszélyes hulladékkal megtelt edényeket és zsákokat a hulladék keletkezésének helyéről történő eltávolításhoz ki nem nyitható módon le kell zárni.",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "tarsadalomtudomanyi-091",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki a helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Egészségügyi szolgáltatónál nyílt légtérben csak az egészségügyi szolgáltató területén belül, az egészségügyi szolgáltatást igénybevevők szokásos vagy szükségszerű útvonalától megfelelően elkülönülő, az útvonaltól legalább 10 méter távolságon kívül lehet dohányzóhelyet kialakítani.",
      },
      {
        id: "b",
        text: "Egészségügyi szolgáltatónál nyílt légtérben csak az egészségügyi szolgáltató területén belül, az egészségügyi szolgáltatást igénybevevők szokásos vagy szükségszerű útvonalától megfelelően elkülönülő, az útvonaltól legalább 5 méter távolságon kívül lehet dohányzóhelyet kialakítani.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-096",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki a helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "A robbanásveszélyes osztályba tartozó anyagot szállító járművön, valamint a tűzveszélyes osztályba tartozó anyagot szállító jármű rakodóterén dohányozni, nyílt lángot használni nem szabad!",
      },
      {
        id: "b",
        text: "A robbanásveszélyes osztályba tartozó anyagot szállító járművön, valamint a tűzveszélyes osztályba tartozó anyagot szállító jármű rakodóterén csak külön engedéllyel szabad dohányozni.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-097",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki a helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Éghető folyadék csak a folyadék hatásának ellenálló, a folyadékra gyújtási veszélyt nem jelentő, jól zárható edényben tárolható.",
      },
      {
        id: "b",
        text: "Éghető folyadék csak üveg edényben tárolható.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-113",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki a helyes állítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Ha a fertőző váladék, vér, testnedv, egyéb fertőző anyag sértetlen bőrre kerül úgy azt azonnal – szükség esetén a ruházat részleges vagy teljes eltávolítása után – bőrfertőtlenítő szerek egyikével kell fertőtleníteni.",
      },
      {
        id: "b",
        text: "Ha a fertőző váladék, vér, testnedv, egyéb fertőző anyag sértetlen bőrre kerül úgy azt azonnal – szükség esetén a ruházat részleges vagy teljes eltávolítása után – papírvattával le kell törölni.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-114",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki a helyes állításokat! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Ha a fertőző anyag szembe jutott, úgy mindkét szemet steril fiziológiás konyhasóoldattal – dörzsölést kerülve – ki kell mosni.",
      },
      {
        id: "b",
        text: "Szembe került fertőző anyagot fertőtlenítőszerrel kell eltávolítani.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-115",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki a helyes állításokat! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Ha a cornea (szaruhártya) sérülése feltételezhető, a szem óvatos kiöblítése után azonnal szemészeti szakellátásban kell a személyt részesíteni.",
      },
      {
        id: "b",
        text: "Amennyiben a szemből sikerült a fertőző anyagot kimosni, sosem szükséges szemészeti szakellátás.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-116",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki a helyes állításokat! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Minden olyan esetet, melynek során fertőző anyaggal kontamináció történt, vagy ennek gyanúja feltételezhető, a dolgozó köteles ezt felettesének azonnal jelenteni.",
      },
      {
        id: "b",
        text: "Fertőző anyaggal történő kontaminációról csak akkor kell a felettest tájékoztatni, ha azt nem sikerül maradéktalanul eltávolítani.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-117",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki, hogy mely esetben kell a munkavállalót munkavédelmi oktatásban részesíteni! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "Munkába állás előtt, munkakör változás esetén." },
      { id: "b", text: "Ha ezt az üzemorvos előírja." },
      { id: "c", text: "Ha a munkavállaló ezt kéri." },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "tarsadalomtudomanyi-118",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki az alábbiak közül, hogy melyik eset számít munkabalesetnek! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "Munkába menet a BKK járművén történt sérülés." },
      { id: "b", text: "Munkaidő alatt az üzemi étkezdében történt sérülés." },
      { id: "c", text: "Pihenő napon a munkavállaló otthonában történt sérülés." },
      { id: "d", text: "A munkavégzés következtében kialakuló derékfájás." },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "tarsadalomtudomanyi-119",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki a munkavállaló teendőjét veszélyt jelentő rendellenesség, üzemzavar észlelése esetén! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "Nincs teendő, mert ez nem a munkavállaló feladata." },
      {
        id: "b",
        text: "A munkáltatót azonnal tájékoztatni kell, majd ha tudja, megszünteti, vagy ehhez segítséget kér a felettesétől.",
      },
      { id: "c", text: "Hívja a rendőrséget." },
      { id: "d", text: "Lefényképezi, hogy később legyen róla bizonyítéka." },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "tarsadalomtudomanyi-120",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki a biztonságos munkavégzéshez szükséges védőeszközök biztosítóját! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "A munkavállaló szerzi be saját magának." },
      { id: "b", text: "Az, aki legolcsóbban tudja beszerezni." },
      { id: "c", text: "A munkáltató szerzi be." },
      { id: "d", text: "A szakszervezet szerzi be." },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "tarsadalomtudomanyi-121",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki az alábbiak közül azt, amelyik NEM védőeszköz! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "füldugó" },
      { id: "b", text: "védőkesztyű" },
      { id: "c", text: "hegesztőszemüveg" },
      { id: "d", text: "sebtapasz" },
    ],
    correctOptionIds: ["d"],
  },
  {
    id: "tarsadalomtudomanyi-122",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "single_choice",
    prompt:
      "Válassza ki a munkavédelem célját! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "Megfelelő minőségű termékek gyártása." },
      { id: "b", text: "Védeni a munkahelyeket." },
      { id: "c", text: "Munkahelyteremtés." },
      {
        id: "d",
        text: "A munkavállaló egészségének és munkavégző képességének megóvása, valamint a megfelelő munkakörülmények biztosítása a munkahelyi balesetek és megbetegedések megelőzése érdekében.",
      },
    ],
    correctOptionIds: ["d"],
  },
];
