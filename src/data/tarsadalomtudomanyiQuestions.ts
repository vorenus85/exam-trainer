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
      {
        id: "c",
        text: "Pihenő napon a munkavállaló otthonában történt sérülés.",
      },
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
  {
    id: "tarsadalomtudomanyi-016",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "ordering",
    prompt:
      "Tegye hierarchiájuk szerint sorrendbe a felsorolt jogi szabályozókat a legmagasabb szintűtől a legalacsonyabb szintű felé haladva!",
    items: [
      { id: "kormanyrendelet", text: "Kormányrendelet" },
      { id: "onkormanyzati_rendelet", text: "Önkormányzati rendelet" },
      { id: "torveny", text: "Törvény" },
      { id: "miniszteri_rendelet", text: "Miniszteri rendelet" },
    ],
    correctOrderIds: [
      "torveny",
      "kormanyrendelet",
      "miniszteri_rendelet",
      "onkormanyzati_rendelet",
    ],
  },
  {
    id: "tarsadalomtudomanyi-002",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a nyilvános zóna jellemzőit! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "1,22 m – 3,6 m-ig" },
      { id: "b", text: "3,6 m felett" },
      {
        id: "c",
        text: "ez a megfelelő távolság, ha nagyszámú közönséghez beszélünk",
      },
      {
        id: "d",
        text: "ilyen távolságra állunk idegenektől, és azoktól, akiket nem ismerünk",
      },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "tarsadalomtudomanyi-003",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt: "Válassza ki a helyes állításokat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "A teljes közlésrendszer mintegy 38%-a verbális." },
      { id: "b", text: "Verbális kommunikáció a beszéd és az írás." },
      { id: "c", text: "A teljes közlésrendszer mintegy 7%-a vokális." },
      {
        id: "d",
        text: "A vokális kommunikáció a verbális kommunikációba van kódolva.",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "tarsadalomtudomanyi-004",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt: "Válassza ki a kommunikáció négy alapfunkcióját!",
    options: [
      { id: "a", text: "értelmi funkció" },
      { id: "b", text: "információs funkció" },
      { id: "c", text: "érzelmi funkció" },
      { id: "d", text: "motivációs funkció" },
      { id: "e", text: "tájékozódási funkció" },
      { id: "f", text: "ellenőrzési funkció" },
    ],
    correctOptionIds: ["b", "c", "d", "f"],
  },
  {
    id: "tarsadalomtudomanyi-005",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a kommunikációs folyamatok osztályozási szempontjait! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "a közlő szándéka szerinti" },
      { id: "b", text: "az alkalmazott jelrendszer függvényében" },
      { id: "c", text: "a kommunikációs üzenet mennyisége szerinti" },
    ],
    correctOptionIds: ["a", "b"],
  },
  {
    id: "tarsadalomtudomanyi-006",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a segítő kapcsolat Rogers-i kritériumait! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "a segített fél iránt érzett és kifejezett empátia" },
      { id: "b", text: "szimpátia, antipátia" },
      { id: "c", text: "a kommunikáció formai követelményeinek megtartása" },
      { id: "d", text: "hitelesség, kongruencia" },
    ],
    correctOptionIds: ["a", "d"],
  },
  {
    id: "tarsadalomtudomanyi-013",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki alábbiak közül a hatalmi ágakat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "törvényhozó" },
      { id: "b", text: "igazgató" },
      { id: "c", text: "végrehajtó" },
      { id: "d", text: "alapító" },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "tarsadalomtudomanyi-018",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Húzza alá az alábbiak közül az emberi méltósághoz való jog egészségügyi törvény szerinti meghatározásait! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "az egészségügyi ellátás során a beteg emberi méltóságát tiszteletben kell tartani",
      },
      {
        id: "b",
        text: "a várólistára helyezés esetén a beteget a várakozás okáról és annak várható időtartamáról, illetve esetleges következményeiről tájékoztatni kell",
      },
      {
        id: "c",
        text: "a beteg ellátása során szeméremérzetére tekintettel ruházata csak a szükséges időre és a szakmailag indokolt mértékben távolítható el",
      },
      {
        id: "d",
        text: "a betegnek joga van megismerni az ellátásában közvetlenül közreműködő személyek nevét, szakképesítését és beosztását",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "tarsadalomtudomanyi-019",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Húzza alá az alábbiak közül a helyes állításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az egészségügyi dokumentációt az adatfelvételtől számított legalább 30, a zárójelentést legalább 50 évig meg kell őrizni.",
      },
      {
        id: "b",
        text: "Az egészségügyi dokumentációt az adatfelvételtől számított legalább 3, a zárójelentést 5 évig meg kell őrizni.",
      },
      {
        id: "c",
        text: "Az egészségügyi dokumentációnak valósághűen, rendezetten, időrendben kell tükröznie az ellátás teljes folyamatát.",
      },
      {
        id: "d",
        text: "Az egészségügyi dokumentáció tárolása bárhol történhet, azt nem szükséges elzárni.",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "tarsadalomtudomanyi-020",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Húzza alá az alábbiak közül a helyes állításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az egészségügyi dokumentáció az egészségügyi dolgozó aláírása nélkül is hiteles, amennyiben pecsét van rajta.",
      },
      {
        id: "b",
        text: "Az egészségügyi dolgozónak dokumentálnia kell az ellátással összefüggő bejegyzések dátumát, időpontját és alá kell írnia a dokumentációt.",
      },
      {
        id: "c",
        text: "Objektíven kell vezetni a dokumentációt, az esetleges hibákat ki lehet hagyni a leírásból.",
      },
      {
        id: "d",
        text: "Az esetleges dokumentációs hibák javítását aláírással és dátummal kell ellátni.",
      },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "tarsadalomtudomanyi-022",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Húzza alá az alábbi felsorolásból azokat az eseteket, amelyekben az egészségügyi dolgozó mentesül a titoktartási kötelezettség alól! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Ha az egészségügyi vagy személyes adat továbbításához az érintett, vagy törvényes képviselője írásban hozzájárult, a hozzájárulásban foglalt korlátozások figyelembevételével.",
      },
      {
        id: "b",
        text: "Az egészségügyi és személyi adatok statisztikai célból minden esetben a beteg hozzájárulása nélkül, személyazonosításra alkalmas módon átadhatók.",
      },
      {
        id: "c",
        text: "Ha az egészségügyi és személyazonosító adat továbbítása a törvény előírása szerint kötelező.",
      },
      {
        id: "d",
        text: "Az intézményen belül dolgozó egészségügyi szakemberek egymás között minden esetben mentesülnek a titoktartási kötelezettség alól, függetlenül attól, hogy részt vesznek-e az adott beteg gyógykezelésében vagy sem.",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "tarsadalomtudomanyi-025",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Húzza alá az Országgyűlés feladatait! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "gyakorolja az egyéni kegyelmezés jogát" },
      { id: "b", text: "megalkotja és módosítja Magyarország Alaptörvényét" },
      { id: "c", text: "képviseli Magyarországot" },
      { id: "d", text: "törvényeket alkot" },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "tarsadalomtudomanyi-026",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Húzza alá az Országgyűlés feladatait! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "kitűzi az országgyűlési képviselők, a helyi önkormányzati képviselők és polgármesterek általános választását, valamint az európai parlamenti választás és az országos népszavazás időpontját",
      },
      {
        id: "b",
        text: "felhatalmazást ad a feladat- és hatáskörébe tartozó nemzetközi szerződés kötelező hatályának elismerésére",
      },
      {
        id: "c",
        text: "kinevezi a hivatásos bírákat, a Költségvetési Tanács elnökét, a tábornokokat, minisztereket, a Magyar Nemzeti Bank elnökét, alelnökeit, és az egyetemi tanárokat",
      },
      {
        id: "d",
        text: "megválasztja a köztársasági elnököt, az Alkotmánybíróság tagjait és elnökét, a Kúria elnökét, a Közigazgatási Felsőbíróság elnökét, az Országos Bírósági Hivatal elnökét, a legfőbb ügyészt, az alapvető jogok biztosát és helyetteseit, valamint az Állami Számvevőszék elnökét",
      },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "tarsadalomtudomanyi-027",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Húzza alá az Országgyűlés feladatait! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "megválasztja a miniszterelnököt, dönt a Kormánnyal kapcsolatos bizalmi kérdésről",
      },
      { id: "b", text: "megválasztja Budapest főpolgármesterét" },
      {
        id: "c",
        text: "dönt az állampolgárság megszerzésével és megszűnésével kapcsolatos ügyekben",
      },
      {
        id: "d",
        text: "feloszlatja az alaptörvény-ellenesen működő képviselő-testületet",
      },
    ],
    correctOptionIds: ["a", "d"],
  },
  {
    id: "tarsadalomtudomanyi-028",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Húzza alá az Országgyűlés feladatait! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "különleges jogrendet érintő, valamint katonai műveletekben való részvétellel kapcsolatos döntéseket hoz",
      },
      {
        id: "b",
        text: "javaslatot tesz a miniszterelnök, a Kúria elnöke, az Országos Bírósági Hivatal elnöke, a legfőbb ügyész és az alapvető jogok biztosa személyére",
      },
      { id: "c", text: "közkegyelmet gyakorol" },
      { id: "d", text: "gyakorolja az egyéni kegyelmezés jogát" },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "tarsadalomtudomanyi-030",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt: "Húzza alá a helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "A ruházat eltávolításakor csak felnőtt beteg ellátása során kell tekintettel lenni a szeméremérzetre.",
      },
      {
        id: "b",
        text: "Megfelelő az ellátás, ha az az adott egészségügyi szolgáltatásra vonatkozó szakmai és etikai szabályok, illetve irányelvek megtartásával történik.",
      },
      {
        id: "c",
        text: "Folyamatosan hozzáférhető az ellátás, ha az az adott egészségügyi szolgáltatásra vonatkozó szakmai és etikai szabályok, illetve irányelvek megtartásával történik.",
      },
      {
        id: "d",
        text: "Folyamatosan hozzáférhető az ellátás, amennyiben az egészségügyi ellátórendszer működése napi 24 órán keresztül biztosítja annak igénybevehetőségét.",
      },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "tarsadalomtudomanyi-031",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt: "Húzza alá a helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "A várólistára helyezés esetén a beteget a várakozás okáról és annak esetleges következményeiről tájékoztatni kell.",
      },
      {
        id: "b",
        text: "Az ellátás során bármilyen mértékben és módon korlátozható a beteg jogainak gyakorlásában.",
      },
      {
        id: "c",
        text: "A várólistára helyezés esetén a beteget a várakozás okáról és annak várható időtartamáról, illetve esetleges következményeiről tájékoztatni kell.",
      },
      {
        id: "d",
        text: "Az ellátás során a beteg jogainak gyakorlásában csak az egészségi állapota által indokolt ideig – törvényben meghatározott – mértékben és módon korlátozható.",
      },
    ],
    correctOptionIds: ["c", "d"],
  },
  {
    id: "tarsadalomtudomanyi-032",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki az egészségügyi törvény által nevesített betegjogokat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "A megfelelő szintű egészségügyi ellátáshoz való jog" },
      { id: "b", text: "Az ápolói titoktartáshoz való jog" },
      { id: "c", text: "Az emberi méltóság tiszteletben tartásához való jog" },
      { id: "d", text: "A bizalmasság joga" },
      { id: "e", text: "A gyógyintézet elhagyásának joga" },
      { id: "f", text: "A tájékoztatáshoz való jog" },
    ],
    correctOptionIds: ["a", "c", "e", "f"],
  },
  {
    id: "tarsadalomtudomanyi-033",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt: "Húzza alá a helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Minden betegnek joga van sürgős szükség esetén az életmentő, illetve a súlyos vagy maradandó egészségkárosodás megelőzését biztosító ellátáshoz, valamint fájdalmának csillapításához és szenvedéseinek csökkentéséhez.",
      },
      {
        id: "b",
        text: "Minden betegnek joga van bármely egészségügyi ellátáshoz, valamint fájdalmának csillapításához és szenvedéseinek csökkentéséhez.",
      },
      {
        id: "c",
        text: "A várólistára helyezés esetén a beteget csak annak várható időtartamáról szükséges tájékoztatni.",
      },
      {
        id: "d",
        text: "A beteg ellátása során szeméremérzetére tekintettel ruházata csak a szükséges időre és a szakmailag indokolt mértékben távolítható el.",
      },
    ],
    correctOptionIds: ["a", "d"],
  },
  {
    id: "tarsadalomtudomanyi-034",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki az egészségügyi törvény által nevesített betegjogokat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "Az empátiához való jog" },
      {
        id: "b",
        text: "Az önrendelkezéshez és az ellátás visszautasításához való jog",
      },
      { id: "c", text: "Az ellátás szintjének megválasztásának joga" },
      { id: "d", text: "Az orvosi titoktartáshoz való jog" },
      { id: "e", text: "Szabad orvosválasztás joga" },
      { id: "f", text: "A beteg autonómiájának joga" },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "tarsadalomtudomanyi-035",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Húzza alá az egészségügyi etika alapelveit! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "az autonómia elve" },
      { id: "b", text: "az eutanázia elve" },
      { id: "c", text: "a bizalmasság elve" },
      { id: "d", text: "a „Ne árts” elve" },
      { id: "e", text: "a jótékonyság elve" },
      { id: "f", text: "az empátia elve" },
      { id: "g", text: "a dilemma elve" },
      { id: "h", text: "az igazságosság elve" },
    ],
    correctOptionIds: ["a", "d", "e", "h"],
  },
  {
    id: "tarsadalomtudomanyi-038",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a jogi normára vonatkozó helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "a társadalmi normák sajátos formája" },
      { id: "b", text: "íratlan" },
      { id: "c", text: "általános jellegű" },
      { id: "d", text: "nevelés, szokás, hagyomány az alapja" },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "tarsadalomtudomanyi-039",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a jogi normára vonatkozó helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "nevelés, szokás, hagyomány az alapja" },
      { id: "b", text: "következménye lehet a kiközösítés" },
      { id: "c", text: "mindenkire kötelező magatartási szabály" },
      { id: "d", text: "az állam alkotja és érvényesülését biztosítja" },
      { id: "e", text: "mintát követ" },
      { id: "f", text: "mindig írott" },
    ],
    correctOptionIds: ["c", "d", "f"],
  },
  {
    id: "tarsadalomtudomanyi-040",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a beteg tájékoztatása során figyelembe veendő szempontokat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "a beteg életkora" },
      { id: "b", text: "a beteg családi állapota" },
      { id: "c", text: "a betegsége időbeni lefolyása" },
      { id: "d", text: "a beteg iskolázottsága" },
      { id: "e", text: "a beteg betegségével kapcsolatos ismeretei" },
      { id: "f", text: "a beteg lakhelye" },
      { id: "g", text: "a beteg lelkiállapota" },
      { id: "h", text: "a beteg kórházi kezelésének időtartama" },
    ],
    correctOptionIds: ["a", "d", "e", "g"],
  },
  {
    id: "tarsadalomtudomanyi-049",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Húzza alá az alábbi felsorolásból a fertőtlenítő eljárások hatásosságát befolyásoló tényezőket! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "a fertőtlenítendő anyag, vagy tárgy felületének tulajdonságai",
      },
      {
        id: "b",
        text: "a fertőtlenítendő anyag, vagy tárgy felületének formája",
      },
      { id: "c", text: "a fertőtlenítendő felület szennyezettségének mértéke" },
      { id: "d", text: "a behatás időtartama" },
      { id: "e", text: "a hatás erőssége" },
      { id: "f", text: "a mikroorganizmusok száma és ellenálló képessége" },
      {
        id: "g",
        text: "a mikroorganizmusok mennyisége, ellenálló képessége és szaporodási sebessége",
      },
    ],
    correctOptionIds: ["a", "c", "d", "f"],
  },
  {
    id: "tarsadalomtudomanyi-051",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a nosocomialis infekciók jellemzőit! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "A fertőzés az egészségügyi ellátással függ össze." },
      {
        id: "b",
        text: "A kialakult fertőzés a beteg kórházi felvétele idején még lappangó formában sem volt jelen.",
      },
      {
        id: "c",
        text: "A kórházi felvételt követő 24 órán belül jelennek meg a tünetek.",
      },
      {
        id: "d",
        text: "A fertőzés nem jelent veszélyt az egészségügyi team tagjaira és az egészségügyi ellátással kapcsolatba kerülő egyéb személyekre (pl. látogatók).",
      },
    ],
    correctOptionIds: ["a", "b"],
  },
  {
    id: "tarsadalomtudomanyi-052",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a nosocomialis infekciók jellemzőit! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "A nosocomialis fertőzések többsége specifikus és több okra visszavezethető.",
      },
      {
        id: "b",
        text: "A fertőzés nem jelent veszélyt az egészségügyi team tagjaira és az egészségügyi ellátással kapcsolatba kerülő egyéb személyekre (pl. látogatók).",
      },
      {
        id: "c",
        text: "A húgyúti infekciók a leggyakoribb nosocomialis infekciók közé tartoznak.",
      },
      {
        id: "d",
        text: "A fertőzés transzplacentáris fertőzés következményeként alakult ki, és az újszülött tünetei a születéstől számított 48 órán belül jelentkeznek.",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "tarsadalomtudomanyi-055",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a járványra jellemző megállapításokat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "más-más időben jelentkezik a betegség" },
      { id: "b", text: "néhány embert érint csak a megbetegedés" },
      { id: "c", text: "ugyanazon kórokozó által okozott megbetegedés" },
      { id: "d", text: "ugyanazon területen jelentkezik a megbetegedés" },
      { id: "e", text: "több fertőző forrásból indul a megbetegedés" },
      { id: "f", text: "egyazon időben jelentkezik a megbetegedés" },
    ],
    correctOptionIds: ["c", "d", "f"],
  },
  {
    id: "tarsadalomtudomanyi-056",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a járványra jellemző megállapításokat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "egy fertőző forrásból indul ki" },
      { id: "b", text: "több kórokozó által okozott megbetegedés" },
      { id: "c", text: "néhány embert érint csak a megbetegedés" },
      { id: "d", text: "ugyanazon területen jelentkezik a megbetegedés" },
      { id: "e", text: "több fertőző forrásból indul a megbetegedés" },
      { id: "f", text: "az átlagosnál több ember érintett" },
    ],
    correctOptionIds: ["a", "d", "f"],
  },
  {
    id: "tarsadalomtudomanyi-060",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbiak közül a helyes állításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "A fertőtlenítő oldatba történő beáztatás a kémiai fertőtlenítő eljárások közé tartozik.",
      },
      {
        id: "b",
        text: "A műszerek nedves gyűjtése során a használt eszközt fertőtlenítő oldatot tartalmazó edénybe helyezik.",
      },
      {
        id: "c",
        text: "A jodofórok az elemi jódnak felületaktív vegyületekkel alkotott komplexei.",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "tarsadalomtudomanyi-061",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbiak közül a helyes állításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "A jodofórok az elemi jódnak felületaktív vegyületekkel alkotott komplexei.",
      },
      {
        id: "b",
        text: "A kétfázisú kézfertőtlenítés során előbb folyékony szappannal kezet kell mosni, majd 5 ml higiénés kézfertőtlenítő szerrel alaposan be kell dörzsölni a kezet.",
      },
      {
        id: "c",
        text: "A baktericid hatás azt jelenti, hogy a baktérium vegetatív formái elpusztulnak, a spórák azonban nem.",
      },
      {
        id: "d",
        text: "A nedves hő oxidáció útján pusztítja el a mikroorganizmusokat.",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "tarsadalomtudomanyi-066",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Húzza alá az egészségügyi szakdolgozó kéz higiénéjére vonatkozó helyes követelményeket, megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "A körömtoilette terjedjen ki a körömre, a köröm alatti területre, a körömágyra, valamint a köröm körüli bőrképletekre.",
      },
      {
        id: "b",
        text: "A körömtoilette végzése során ügyelni kell arra, hogy a körömágy ne sérüljön.",
      },
      {
        id: "c",
        text: "A körömtoilette alatt kizárólag a köröm hosszának megfelelőségét értjük.",
      },
      {
        id: "d",
        text: "Megfelelő állapotú köröm esetén mellőzhető a gumikesztyű használata a betegellátásban.",
      },
    ],
    correctOptionIds: ["a", "b"],
  },
  {
    id: "tarsadalomtudomanyi-067",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Húzza alá az egészségügyi szakdolgozó kéz higiénéjére vonatkozó helyes követelményeket, megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "A körömtoilette rendszeres végzése nagyban elősegíti a kéz megfelelő higiénés állapotát.",
      },
      {
        id: "b",
        text: "A kézhigiénénél nem fontos a körmök állapota, csak a helyes sorrendben történő kivitelezés.",
      },
      {
        id: "c",
        text: "A körömtoilette terjedjen ki a körömre, a köröm alatti területre, a körömágyra, valamint a köröm körüli bőrképletekre.",
      },
      {
        id: "d",
        text: "A körömtoilette alatt kizárólag a köröm hosszának megfelelőségét értjük.",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "tarsadalomtudomanyi-068",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Húzza alá az egészségügyi szakdolgozó kéz higiénéjére vonatkozó helyes követelményeket, megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "A körmöknek rövideknek (<0,5cm) és lekerekített (legömbölyített) végűeknek kell lenniük.",
      },
      { id: "b", text: "A gél-lakk használata megengedett." },
      {
        id: "c",
        text: "Munkavégzés közben gyűrűk, műkörmök, festett körmök, karkötők, viselése tilos.",
      },
      { id: "d", text: "Munkavégzés közben karóra viselhető." },
      {
        id: "e",
        text: "Sebes, ekcémás, egyéb gyulladásos bőrfolyamat esetén közvetlen betegellátás nem végezhető.",
      },
      {
        id: "f",
        text: "A műköröm akkor megengedhető, ha nem ér túl az ujjbegyen.",
      },
    ],
    correctOptionIds: ["a", "c", "e"],
  },
  {
    id: "tarsadalomtudomanyi-070",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki az aszeptikus beavatkozásokat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "páciens szájápolása" },
      { id: "b", text: "szennyes eszközök kezelése" },
      { id: "c", text: "kötéscsere" },
      { id: "d", text: "hányadék feltakarítása" },
      { id: "e", text: "szennyes ágynemű kezelése" },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "tarsadalomtudomanyi-071",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki az aszeptikus beavatkozásokat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "szennyes ágynemű kezelése" },
      { id: "b", text: "injekció" },
      { id: "c", text: "váladék leszívás" },
      { id: "d", text: "beteg fürdetése" },
      { id: "e", text: "infúzió kezelés" },
      { id: "f", text: "beteg ágytálazása" },
    ],
    correctOptionIds: ["b", "c", "e"],
  },
  {
    id: "tarsadalomtudomanyi-072",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a kesztyűhasználatra vonatkozó helyes válaszokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "A kesztyű alkalmazása nem helyettesíti a kéz fertőtlenítést.",
      },
      {
        id: "b",
        text: "Szennyes kezelés után még a vizsgáló kesztyű levétele előtt kell kezet fertőtleníteni.",
      },
      {
        id: "c",
        text: "Amennyiben a kézhigiéne indikációja fennáll egy kesztyűben végzett tevékenység közben, le kell venni a kesztyűt és kezet kell fertőtleníteni.",
      },
      {
        id: "d",
        text: "A beavatkozások előtt legalább 10 perccel el kell végezni a kézfertőtlenítést.",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "tarsadalomtudomanyi-073",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a kesztyűhasználatra vonatkozó helyes válaszokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Steril kesztyűt kell használni minden sebészeti beavatkozáskor.",
      },
      { id: "b", text: "Rectalis vizsgálat csak steril kesztyűben végezhető." },
      {
        id: "c",
        text: "A kesztyűhasználat nem helyettesít egy kézhigiénés akciót sem.",
      },
      {
        id: "d",
        text: "Steril kesztyű használatát követően nem szükséges kezet fertőtleníteni.",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "tarsadalomtudomanyi-075",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a kézfertőtlenítésre vonatkozó helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Kézfertőtlenítés hiányában, minél hosszabb idő telik el, annál kontamináltabb a dolgozó keze.",
      },
      {
        id: "b",
        text: "Minél rövidebb a kézfertőtlenítés időtartama, annál hatásosabb.",
      },
      {
        id: "c",
        text: "Direkt és indirekt kontaktus révén, a kórokozók kontaminálják az egészségügyi dolgozók kezét.",
      },
      {
        id: "d",
        text: "A kézfertőtlenítést mindig a nővérszobában kell elvégezni.",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "tarsadalomtudomanyi-076",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a kézfertőtlenítésre vonatkozó helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "A hiányos kézfertőtlenítés miatt a kéz kontaminált marad.",
      },
      {
        id: "b",
        text: "A kézfertőtlenítő szert a betegtől elzárva kell tárolni.",
      },
      {
        id: "c",
        text: "A kézhigiéne az elsődleges és leghatékonyabb módja a nosocomialis fertőzések megelőzésének",
      },
      {
        id: "d",
        text: "Amennyiben van lehetőségünk egyszer használatos kesztyűt használni, akkor a kézfertőtlenítésre nincs szükség.",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "tarsadalomtudomanyi-077",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "Az aszepszis célja a fertőzés megelőzése." },
      {
        id: "b",
        text: "A beteg felvételét követően azonnal jelentkező fertőzéses tüneteket minden esetben nosocomialis fertőzés okozza.",
      },
      { id: "c", text: "A sterilitás teljes csíramentességet jelent." },
      {
        id: "d",
        text: "A bakteriosztatikus eljárás elpusztítja a baktériumokat.",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "tarsadalomtudomanyi-078",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az egészségügyi ellátás során keletkezett valamennyi hulladék veszélyes hulladéknak minősül.",
      },
      {
        id: "b",
        text: "Veszélyes hulladékot csak erre a célra rendszeresített gyűjtőeszközbe szabad gyűjteni.",
      },
      {
        id: "c",
        text: "A gyógyszerek nem minősülnek veszélyes hulladéknak.",
      },
      {
        id: "d",
        text: "A veszélyes hulladékot a települési hulladéktól elkülönítve szükséges tárolni.",
      },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "tarsadalomtudomanyi-079",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "A gyógyszerek nem minősülnek veszélyes hulladéknak.",
      },
      {
        id: "b",
        text: "A veszélyes hulladékot a települési hulladéktól elkülönítve szükséges tárolni.",
      },
      {
        id: "c",
        text: "Az egészségügyben keletkezett veszélyes hulladékot nem kell hűtve tárolni.",
      },
      {
        id: "d",
        text: "Fertőző hulladékgyűjtőn szerepelnie kell, hogy: „fertőző hulladék”, valamint egy címke a hulladék termelőjének nevével, a hulladék típusának megnevezésével, dátummal, a lezáró nevével és aláírásával.",
      },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "tarsadalomtudomanyi-080",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbi felsorolásból a helyes állításokat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "Használt tűkre a védőkupakot tilos visszahelyezni." },
      {
        id: "b",
        text: "A vér, vérkészítmények, humán biológiai anyagok gyűjtése a kommunális hulladéktárolóban is történhet.",
      },
      {
        id: "c",
        text: "A veszélyes hulladék tömörítése, áthelyezése más tárolóba tilos.",
      },
      {
        id: "d",
        text: "A veszélyes hulladékot helytakarékosság miatt tömöríteni kell, vagy át kell helyezni nagyobb tárolóba.",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "tarsadalomtudomanyi-081",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az egészségügyben keletkezett veszélyes hulladékot hűtés nélkül maximum 120 óráig lehet tárolni.",
      },
      {
        id: "b",
        text: "A már megtelt gyűjtőeszközt tilos felnyitni, valamint biztosítani kell azt, hogy illetéktelenek ne férhessenek hozzá.",
      },
      {
        id: "c",
        text: "A már megtelt gyűjtőeszközt egy nagyobb méretű gyűjtőeszközbe át lehet tölteni.",
      },
      {
        id: "d",
        text: "Éles injekciós tűk tárolására csak olyan edény használható, amit az 30 cm magasságból beleejtve nem szúr ki.",
      },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "tarsadalomtudomanyi-082",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbi felsorolásból a helyes állításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "A veszélyes hulladék tömörítése, áthelyezése más tárolóba tilos.",
      },
      {
        id: "b",
        text: "A veszélyes hulladékot helytakarékosság miatt tömöríteni kell, vagy át kell helyezni nagyobb tárolóba.",
      },
      {
        id: "c",
        text: "Az egyéb veszélyes hulladékok gyűjtése folyadékzáró, mechanikai sérülésnek ellenálló, megtöltés után lezárt és már ki nem nyitható eszközökben történjen.",
      },
      {
        id: "d",
        text: "Használt tűkre a védőkupakot a sérülésveszély miatt vissza kell helyezni!",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "tarsadalomtudomanyi-086",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a fertőtlenítőszerekkel szembeni legfontosabb elvárásokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "lehetőleg hatásosok legyenek valamennyi mikroorganizmusra",
      },
      {
        id: "b",
        text: "rövid behatási idő alatt pusztítsák el, illetve inaktiválja a mikroorganizmusokat",
      },
      { id: "c", text: "dús habot lehessen képezni belőlük" },
      { id: "d", text: "könnyen oldódóak legyenek" },
      { id: "e", text: "színezettek legyenek" },
      { id: "f", text: "mindenképpen mikroorganizmus specifikusak legyenek" },
    ],
    correctOptionIds: ["a", "b", "d"],
  },
  {
    id: "tarsadalomtudomanyi-087",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a fertőtlenítőszerekkel szembeni legfontosabb elvárásokat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "folyékonyak legyenek" },
      { id: "b", text: "ne károsítsák a fertőtlenítendő anyagot" },
      { id: "c", text: "színezettek legyenek" },
      { id: "d", text: "ne legyenek kellemetlen szagúak" },
      { id: "e", text: "gáz halmazállapotúak legyenek" },
      { id: "f", text: "alkalmazásuk gazdaságos legyen" },
    ],
    correctOptionIds: ["b", "d", "f"],
  },
  {
    id: "tarsadalomtudomanyi-090",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Amennyiben van dohányzó munkavállaló, a munkáltató nem nyilváníthatja a munkahelyet nemdohányzóvá.",
      },
      {
        id: "b",
        text: "A munkáltató a munkahelyet nemdohányzó munkahellyé nyilváníthatja.",
      },
      {
        id: "c",
        text: "A magánforgalomban közlekedő közösségi közlekedési eszközökön a dohányzóhely kijelöléséről az üzembentartó dönt.",
      },
      {
        id: "d",
        text: "A magánforgalomban közlekedő közösségi közlekedési eszközökön a dohányzóhely kijelöléséről a hatóság dönt.",
      },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "tarsadalomtudomanyi-095",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az I.-II. tűzveszélyességi fokozatú folyadékot szállító tartálykocsi rendszámán kell a veszélyre utaló feliratot vagy biztonsági jelet elhelyezni.",
      },
      {
        id: "b",
        text: "A robbanásveszélyes osztályba tartozó anyagot szállító járművön, valamint a tűzveszélyes osztályba tartozó anyagot szállító jármű rakodóterén dohányozni, nyílt lángot használni nem szabad!",
      },
      {
        id: "c",
        text: "Az I.-II. tűzveszélyességi fokozatú folyadékot, a robbanásveszélyes és tűzveszélyes osztályba tartozó gázt, valamint égést tápláló gázt szállító tartálykocsi, tehergépjármű mindkét oldalán és hátsó részén jól láthatóan a veszélyre utaló feliratot vagy biztonsági jelet kell elhelyezni.",
      },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "tarsadalomtudomanyi-100",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki tűzeset esetén a telefonon bejelentendő információkat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "hol van a tűz (helység, utca, házszám)" },
      { id: "b", text: "milyen az időjárás" },
      { id: "c", text: "mi ég" },
      { id: "d", text: "hányan vannak összesen a helyszínen" },
      {
        id: "e",
        text: "mi van veszélyeztetve (épület, ház, bútorzat), van-e életveszély",
      },
      { id: "f", text: "van-e már mentőautó helyszínen" },
    ],
    correctOptionIds: ["a", "c", "e"],
  },
  {
    id: "tarsadalomtudomanyi-101",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki tűzeset esetén a telefonon bejelentendő információkat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "van-e már rendőrség a helyszínen" },
      { id: "b", text: "mekkora terjedelmű a tűz" },
      { id: "c", text: "hány autó parkol a környéken" },
      { id: "d", text: "a tűz bejelentő nevét" },
      { id: "e", text: "mikor keletkezett a tűz" },
      { id: "f", text: "a bejelentésre használt telefonkészülék számát" },
    ],
    correctOptionIds: ["b", "d", "f"],
  },
  {
    id: "tarsadalomtudomanyi-106",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a helyes állításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "A munkavédelmi szabályokat csak abban az esetben kell betartani, ha a vezető arra utasítást ad.",
      },
      {
        id: "b",
        text: "A dolgozó köteles a munkahelyén munkavégzésre alkalmas állapotban megjelenni és a rábízott feladatokat a munkavédelmi szabályok betartásával végezni.",
      },
      {
        id: "c",
        text: "A dolgozónak minden tevékenységet el kell végezni, amit a vezetője számára kijelöl.",
      },
      {
        id: "d",
        text: "Ha a dolgozót, akár munka közben is olyan hatás éri, hogy az a biztonságos munka végzését veszélyezteti, tartozik azt a közvetlen munkahelyi vezetőjének jelenteni, aki a szükséges intézkedést köteles megtenni.",
      },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "tarsadalomtudomanyi-107",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a helyes állításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "A dolgozónak minden tevékenységet el kell végezni, amit a vezetője számára kijelöl.",
      },
      {
        id: "b",
        text: "Ha a dolgozót, akár munka közben is olyan hatás éri, hogy az a biztonságos munka végzését veszélyezteti, tartozik azt a közvetlen munkahelyi vezetőjének jelenteni, aki a szükséges intézkedést köteles megtenni.",
      },
      {
        id: "c",
        text: "Amennyiben a munkaeszköz a nap folyamán meghibásodik, akkor csak a munkaidő végéig kell használni, utána ki kell cserélni.",
      },
      {
        id: "d",
        text: "A dolgozó a munkahelyén csak olyan tevékenységet folytathat, amelyhez megfelelő munkavédelmi ismeretekkel rendelkezik (a rendkívüli események – baleset-megelőzés, mentés stb. – kivételével).",
      },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "tarsadalomtudomanyi-108",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a helyes állításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Tilos minden olyan magatartás (fegyelmezetlenség, játék stb.), amely a munkavégzést akadályozza, zavarja vagy veszélyezteti.",
      },
      {
        id: "b",
        text: "A dolgozó a megfelelő munkavédelmi oktatás előtt egy nappal már végezheti az adott tevékenységet, amennyiben képes rá.",
      },
      {
        id: "c",
        text: "Amennyiben a dolgozó munkaeszköze a nap folyamán meghibásodik, csak a munkanap végén szükséges jelezni a vezetőnek.",
      },
      {
        id: "d",
        text: "Ahol a veszélyforrás fokozott hatóképességű, ott az oda beosztottakon és az ellenőrzésre jogosultakon kívül más nem tartózkodhat.",
      },
    ],
    correctOptionIds: ["a", "d"],
  },
  {
    id: "tarsadalomtudomanyi-109",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a helyes állításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "A tisztítási műveletek során történik az eszközök, műszerek vértelenítő-tisztítószer oldatában való áztatása, majd mechanikus úton történő tisztítása.",
      },
      {
        id: "b",
        text: "A nedves gyűjtés során az eszközöket és a műszereket tiszta, legalább 60°C-os vízben áztatjuk.",
      },
      {
        id: "c",
        text: "A mechanikus tisztítás során ügyelni kell arra, hogy az eszközök, műszerek sérülést ne okozzanak.",
      },
      {
        id: "d",
        text: "A mechanikus tisztítás után az eszközöket, műszereket minimum 80°C-os vízzel kell leöblíteni.",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "tarsadalomtudomanyi-110",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a helyes állításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "A mechanikus tisztítás közben orrot és szájat takaró maszk alkalmazása, munka- és védőruha, védőkesztyű és védőszemüveg viselése kötelező.",
      },
      {
        id: "b",
        text: "A gyűjtőedénybe helyezés előtt az erősen szennyeződött műszereket, eszközöket sem szükséges leöblíteni.",
      },
      {
        id: "c",
        text: "A mechanikus tisztítás során ügyelni kell arra, hogy az eszközök, műszerek sérülést ne okozzanak.",
      },
      {
        id: "d",
        text: "A mechanikus tisztítás után az eszközöket, műszereket minimum 80°C-os vízzel kell leöblíteni.",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "tarsadalomtudomanyi-111",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a helyes állításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az előkezelés során történik az eszközök, műszerek használat utáni gyűjtése, öblítése, előáztatása.",
      },
      {
        id: "b",
        text: "Az előkezelés során csak az eszközök, műszerek használat utáni fertőtlenítése történik meg.",
      },
      {
        id: "c",
        text: "Az előkezelés során az eszközöket, műszereket fertőzöttnek kell tekinteni.",
      },
      {
        id: "d",
        text: "Az előkezelés során az eszközöket, műszereket nem kell fertőzöttnek tekinteni.",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "tarsadalomtudomanyi-112",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a helyes állításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az előkezelés során fokozottan ügyelni kell arra, hogy főleg az éles, hegyes eszközök ne okozzanak sérülést, mert fertőzéssel járó ártalmat idézhet elő.",
      },
      {
        id: "b",
        text: "Az előkezelés során az eszközöket nem szükséges alkatrészekre szedni.",
      },
      {
        id: "c",
        text: "Az eszközök és műszerek öblítését minimum 80°C-os vízzel kell végezni.",
      },
      {
        id: "d",
        text: "Az éles, hegyes eszközöket külön edényzetben kell áztatni és szigorúan tilos ezeket az oldatba kézzel belenyúlva kiszedni.",
      },
    ],
    correctOptionIds: ["a", "d"],
  },
  {
    id: "tarsadalomtudomanyi-130",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Minden esetben csak sérülésmentes eszközt szabad használni, melyről munka megkezdése előtt meg kell győződni.",
      },
      {
        id: "b",
        text: "Sérült eszközt csak akkor szabad használni, ha a munkáltató nem biztosít sérülésmenteset.",
      },
      {
        id: "c",
        text: "A biztonsági berendezések eltávolítása szigorúan tilos.",
      },
      {
        id: "d",
        text: "A biztonsági berendezést rövid ideig el szabad távolítani.",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "tarsadalomtudomanyi-131",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "A biztonsági berendezések eltávolítása szigorúan tilos.",
      },
      {
        id: "b",
        text: "A biztonsági berendezést rövid ideig el szabad távolítani.",
      },
      { id: "c", text: "Az előírt egyéni védőeszköz használata kötelező." },
      {
        id: "d",
        text: "Az előírt egyéni védőeszközt csak akkor kell használni, ha azt a munkáltató biztosította.",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "tarsadalomtudomanyi-133",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "multiple_choice",
    prompt:
      "Válassza ki a helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "A záró fertőtlenítés végzésekor nem szükséges az egyéni védőeszközök használata.",
      },
      { id: "b", text: "A fertőző beteg szabad mozgását nem lehet korlátozni." },
      {
        id: "c",
        text: "Az izoláló kórteremben csak az izolált betegnél használatos eszközöket, anyagokat lehet tárolni.",
      },
      {
        id: "d",
        text: "A beteg elkülönítésének megszüntetése, illetve távozása után zárófertőtlenítést kell végezni.",
      },
    ],
    correctOptionIds: ["c", "d"],
  },
  {
    id: "tarsadalomtudomanyi-008",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "matching",
    prompt:
      "Rendezze az alábbiakban megadott jellemzőket a konfliktuskezelés típusaihoz!",
    pairs: [
      {
        id: "versengo",
        left: "Versengő típus",
        right: "egyoldalúan győzni akar",
      },
      {
        id: "problemamegoldo",
        left: "Problémamegoldó (együttműködő) típus",
        right: "elfogadja a másik fél érdekeit is",
      },
      {
        id: "kompromisszumkereso",
        left: "Kompromisszumkereső típus",
        right: "előnyös, ha mindkét fél hatalmi pozíciója egyforma",
      },
      {
        id: "elkerulo",
        left: "Elkerülő típus",
        right: "lemond saját és mások érdekeinek érvényesítéséről",
      },
      {
        id: "alkalmazkodo",
        left: "Alkalmazkodó típus",
        right: "nem érvényesíti a saját érdekeit, de a másikét hagyja érvényesülni",
      },
    ],
  },
  {
    id: "tarsadalomtudomanyi-009",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "matching",
    prompt:
      "Rendezze az alábbiakban megadott jellemzőket a konfliktuskezelés típusaihoz!",
    pairs: [
      {
        id: "versengo",
        left: "Versengő típus",
        right: "kedvezőtlen az emberi kapcsolatokra",
      },
      {
        id: "problemamegoldo",
        left: "Problémamegoldó (együttműködő) típus",
        right: "mindkét fél nyertesként kerül ki a konfliktusból",
      },
      {
        id: "kompromisszumkereso",
        left: "Kompromisszumkereső típus",
        right: "kölcsönösen engednek a másik javára",
      },
      {
        id: "elkerulo",
        left: "Elkerülő típus",
        right: "a felek közötti feszültségcsökkentés fontosabb, mint a várható kimenetel",
      },
      {
        id: "alkalmazkodo",
        left: "Alkalmazkodó típus",
        right: "előnyös, ha jóindulatunkat akarjuk kimutatni a partner felé",
      },
    ],
  },
  {
    id: "tarsadalomtudomanyi-012",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "matching",
    prompt: "Párosítsa a konfliktuskezelés típusait a meghatározásukkal!",
    pairs: [
      {
        id: "versengo",
        left: "versengő",
        right: "egyoldalúan győzni akar, ezért mindent elkövet, kedvezőtlen az emberi kapcsolatokra",
      },
      {
        id: "problemamegoldo",
        left: "problémamegoldó",
        right: "nem akar győzni mindenáron, elfogadja a másik fél érdekeit is, mindkét fél nyertesként kerül ki a konfliktusból",
      },
      {
        id: "kompromisszumkereso",
        left: "kompromisszumkereső",
        right: "mindkét fél érdeke érvényesül, mindegyik enged a másik fél javára",
      },
      {
        id: "alkalmazkodo",
        left: "alkalmazkodó",
        right: "nem érvényesíti a saját érdekeit, hagyja érvényesülni a másik fél érdekeit",
      },
    ],
  },
  {
    id: "tarsadalomtudomanyi-014",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "matching",
    prompt: "Párosítsa az alábbi kifejezéseket a leírásukkal!",
    pairs: [
      {
        id: "jogforras",
        left: "Jogforrás",
        right: "Olyan jogi forma, amelyből megismerhetők a jogalanyok jogai és kötelezettségei. Ezek lehetnek maguk a jogalkotó szervek és az általuk meghozott jogszabályok is.",
      },
      {
        id: "jog",
        left: "Jog",
        right: "Olyan magatartási szabályok összessége, amelyeket az állam bocsát ki és szankcionálja, vagy pedig valamilyen egyéb eljárást (például népszavazás) jogalkotásként ismer el.",
      },
    ],
  },
  {
    id: "tarsadalomtudomanyi-015",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "matching",
    prompt: "Párosítsa az alábbi kifejezéseket a leírásukkal!",
    pairs: [
      {
        id: "torveny",
        left: "Törvény",
        right: "Az Országgyűlés által elfogadott olyan jogszabály, amely mindenkire nézve kötelező rendelkezéseket tartalmaz.",
      },
      {
        id: "tarsadalmi_norma",
        left: "Társadalmi norma",
        right: "Magatartási szabály, amely a lehetséges cselekedetek közül előírja a helyeset, a követendőt.",
      },
    ],
  },
  {
    id: "tarsadalomtudomanyi-021",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "matching",
    prompt:
      "Párosítsa az alábbi etikával kapcsolatos fogalmakat meghatározásaikkal!",
    pairs: [
      {
        id: "etika",
        left: "etika",
        right: "erkölcstan, a helyes és helytelen magatartás tudománya",
      },
      {
        id: "moral",
        left: "morál",
        right: "az egyén által vallott viselkedési normák",
      },
      {
        id: "egeszsegugyi_etika",
        left: "egészségügyi etika",
        right: "az általános etika alkalmazása az egészségügyre",
      },
      {
        id: "bioetika",
        left: "bioetika",
        right: "a modern gyógyászat által felvetett erkölcsi kérdéseknek racionális megközelítése",
      },
    ],
  },
  {
    id: "tarsadalomtudomanyi-048",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "matching",
    prompt: "Párosítsa az összetartozó fogalmakat és meghatározásokat!",
    pairs: [
      {
        id: "aszepszis",
        left: "aszepszis",
        right: "A beteg szervezetétől minden mikroorganizmus távol tartása, vagyis csíramentes, csíraszegény környezet teremtése.",
      },
      {
        id: "fertotlenites",
        left: "fertőtlenítés",
        right: "A kórokozók számának csökkentése azok elpusztításával, szaporodásuk gátlásával, vagy fertőzőképességük megszüntetésével.",
      },
      {
        id: "infekciokontroll",
        left: "infekciókontroll",
        right: "Olyan szabályok, eljárások alkalmazása, melyek megakadályozzák a fertőzések átvitelét.",
      },
      {
        id: "higienes_kezfertotlenites",
        left: "higiénés kézfertőtlenítés",
        right: "Tranziens flóra elpusztítása.",
      },
      {
        id: "sterilizalas",
        left: "sterilizálás",
        right: "Csíramentesítés.",
      },
    ],
  },
  {
    id: "tarsadalomtudomanyi-062",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "matching",
    prompt: "Párosítsa az alábbi fogalmakat a jelentésükkel!",
    pairs: [
      {
        id: "nosocomialis_infekcio",
        left: "nosocomialis infekció",
        right: "Azon egészségügyi ellátással összefüggő fertőzés, amelyet a beteg, az egészségügyi dolgozó, valamint az egészségügyi ellátással kapcsolatba kerülő egyéb személy a fekvőbeteg-szakellátás során szerez, és amely az intézményi felvételkor még lappangó formában sem volt jelen.",
      },
      {
        id: "nosocomialis_surveillance",
        left: "nosocomialis surveillance",
        right: "A kórházi fertőzések monitorozása céljából végzett, tudományos bizonyítékokra támaszkodó folyamatos, rendszeres adatgyűjtés, elemzés, értékelés és visszacsatolás.",
      },
      {
        id: "aszepszis",
        left: "aszepszis",
        right: "Azoknak a betegellátás során alkalmazott munkamódszereknek, munkafolyamatoknak és magatartásformáknak az összessége, amelyekkel a mikroorganizmusok a beteg szervezetétől, de különösen annak nyitott testszöveteitől, nyálkahártyáitól, testüregeitől, testnyílásaitól távol tarthatók.",
      },
    ],
  },
  {
    id: "tarsadalomtudomanyi-063",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "matching",
    prompt: "Párosítsa az alábbi fogalmakat a jelentésükkel!",
    pairs: [
      {
        id: "aszepszis",
        left: "aszepszis",
        right: "Azoknak a betegellátás során alkalmazott munkamódszereknek, munkafolyamatoknak és magatartásformáknak az összessége, amelyekkel a mikroorganizmusok a beteg szervezetétől, de különösen annak nyitott testszöveteitől, nyálkahártyáitól, testüregeitől, testnyílásaitól távol tarthatók.",
      },
      {
        id: "sterilizalas",
        left: "sterilizálás",
        right: "Antimikrobiális eljárás, amelynek során különböző fizikai, kémiai hatásokkal vagy ezek kombinált alkalmazásával az anyagon, illetve az anyagban elpusztítják a mikroorganizmusokat, valamint ezek összes nyugvó formáját.",
      },
      {
        id: "dezinfekcio",
        left: "dezinfekció",
        right: "Minden olyan eljárás, amely a fertőző forrásból a külső környezetbe kikerült kórokozók elpusztítására, illetve inaktiválására irányul.",
      },
    ],
  },
  {
    id: "tarsadalomtudomanyi-085",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "matching",
    prompt: "Párosítsa a megkezdett mondatot a befejezésével!",
    pairs: [
      {
        id: "megtagadhatja",
        left: "A munkavállaló megtagadhatja a munkavégzést,",
        right: "ha azzal a saját testi épségét közvetlenül, vagy súlyosan veszélyezteti.",
      },
      {
        id: "meg_kell_tagadnia",
        left: "A munkavállalónak meg kell tagadnia a munkavégzést,",
        right: "ha azzal más testi épségét közvetlenül vagy súlyosan veszélyezteti.",
      },
    ],
  },
  {
    id: "tarsadalomtudomanyi-088",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "matching",
    prompt: "Párosítsa a fogalmakat a meghatározásaikkal!",
    pairs: [
      {
        id: "fokozott_expozicio",
        left: "Fokozott expozíció",
        right: "A fizikai, kémiai, biológiai, vagy pszichés tényezők meghaladják a szervezet tűrőképességét.",
      },
      {
        id: "foglalkozasi_betegseg",
        left: "Foglalkozási betegség",
        right: "Szubjektív panaszokkal és objektív tünetekkel járó időleges, vagy tartós károsodás, amely a munkahellyel, vagy a végzett munkakörrel ok-okozati összefüggésbe hozható.",
      },
    ],
  },
  {
    id: "tarsadalomtudomanyi-089",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "matching",
    prompt: "Párosítsa a fogalmakat a meghatározásaikkal!",
    pairs: [
      {
        id: "foglalkozasi_baleset",
        left: "Foglalkozási baleset",
        right: "Könnyű, súlyos, vagy halálhoz vezető sérülés, amely a dolgozót munkájának végzése, vagy azzal összefüggő tevékenysége közben éri.",
      },
      {
        id: "munkavedelem",
        left: "Munkavédelem",
        right: "A munkavállalók egészségének, testi épségének a munkával járó ártalmak elleni intézményes védelme.",
      },
    ],
  },
  {
    id: "tarsadalomtudomanyi-098",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "matching",
    prompt: "Párosítsa a fogalmakat a meghatározásukkal!",
    pairs: [
      {
        id: "tuzvedelem",
        left: "A tűzvédelem",
        right: "A tűzesetek megelőzése, a tűzoltási feladatok ellátása, a tűzvizsgálat, valamint ezek feltételeinek biztosítása.",
      },
      {
        id: "tuzmegelozes",
        left: "A tűzmegelőzés",
        right: "A tüzek keletkezésének megelőzése, továbbterjedésének akadályozása, a létesítés és a használat során a tűzvédelmi jogszabályok, szabványok érvényesítése.",
      },
    ],
  },
  {
    id: "tarsadalomtudomanyi-099",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "matching",
    prompt: "Párosítsa a fogalmakat a meghatározásukkal!",
    pairs: [
      {
        id: "tuzoltas",
        left: "A tűzoltás",
        right: "Célja a tűz közvetlen veszélyének elhárítása, személyek, anyagi javak mentése, a tűz terjedésének megakadályozása.",
      },
      {
        id: "tuzvizsgalat",
        left: "A tűzvizsgálat",
        right: "A tűzoltóságnak azon szakmai tevékenysége, amely a tűz keletkezése idejének, helyének és okának felderítésére irányul.",
      },
    ],
  },
  {
    id: "tarsadalomtudomanyi-134",
    topicId: "tarsadalomtudomanyi_ismeretek",
    type: "matching",
    prompt: "Párosítsa a szakkifejezést a jelentésével!",
    pairs: [
      {
        id: "kohorsz_izolacio",
        left: "Kohorsz izoláció",
        right: "Az igazoltan azonos kórokozóval kolonizált/fertőzött betegek egy kórteremben történő elhelyezése abból a célból, hogy ne érintkezzenek fogékony betegekkel, és ápolásuk egy helyre korlátozódjon.",
      },
      {
        id: "egyeni_izolacio",
        left: "Egyéni izoláció",
        right: "A kolonizált/fertőzött beteg elhelyezése komfortos (saját fürdővel és WC-vel rendelkező) egyágyas kórteremben, melynek előterében van külön kézmosó és alkoholos kézfertőtlenítő szer adagoló.",
      },
    ],
  },
];
