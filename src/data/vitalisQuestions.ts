import type { ExamQuestion } from "../types/question.ts";

export const vitalisQuestions: ExamQuestion[] = [
  {
    id: "vitalis-001",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi állítás igaz-e vagy hamis!",
    statements: [
      {
        id: "a",
        text: "A betegmegfigyelés az ápolói munka része.",
        correct: true,
      },
      {
        id: "b",
        text: "A betegmegfigyelés az ápoló önálló feladatai közé tartozik.",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-002",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi állítás igaz-e vagy hamis!",
    statements: [
      {
        id: "a",
        text: "A betegmegfigyelés nem része az életveszélyes helyzetek megítélésének.",
        correct: false,
      },
    ],
  },
  {
    id: "vitalis-015",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A testalkat az egyén öröklött és szerzett szomatikus tulajdonságainak az összessége.",
        correct: true,
      },
      {
        id: "b",
        text: "A testalkatot csak a genetikai tényezők határozzák meg, a környezeti hatások nem befolyásolják.",
        correct: false,
      },
    ],
  },
  {
    id: "vitalis-033",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "Nem minden váladékot tekintünk fertőzöttnek, ami a betegtől származik.",
        correct: false,
      },
      {
        id: "b",
        text: "Az emberi szervezet működése során különböző összetételű salakanyagot termel.",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-034",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A váladékok ürítésének módjának változása nem segíti a diagnózis felállítását.",
        correct: false,
      },
      {
        id: "b",
        text: "A betegtől származó váladékok tárolásánál be kell tartani az aszepszis szabályait.",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-035",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A széklet az emésztési folyamat végtermékeként kialakuló salakanyag.",
        correct: true,
      },
      {
        id: "b",
        text: "A széklet színét az urokróm adja.",
        correct: false,
      },
      {
        id: "c",
        text: "Naponta egyszer, maximum kétszer ürül széklet normál körülmények között.",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-036",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A székletürítést nem befolyásolja az életkor és a testmozgás.",
        correct: false,
      },
      {
        id: "b",
        text: "A széklet tartalmaz baktériumokat is.",
        correct: true,
      },
      {
        id: "c",
        text: "Normál körülmények között naponta egyszer, maximum kétszer ürül széklet.",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-047",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A vizelet normál élettani körülmények között mindig tartalmaz fehérjét.",
        correct: false,
      },
      {
        id: "b",
        text: "A vizelet normál esetben nem tartalmaz cukrokat.",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-048",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A vizeletürítést nem befolyásolják a gyógyszerek, a terhesség és az éghajlati viszonyok.",
        correct: false,
      },
      {
        id: "b",
        text: "Normál körülmények között a vizelet enyhén savanyú vegyhatású.",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-049",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A napi ürített vizelet mennyisége élettani körülmények között a folyadékbevitelhez igazodik.",
        correct: true,
      },
      {
        id: "b",
        text: "A vizelet színét nem befolyásolják a gyógyszerek.",
        correct: false,
      },
    ],
  },
  {
    id: "vitalis-050",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A vizelet normál esetben fehéres-sárga színű.",
        correct: false,
      },
      {
        id: "b",
        text: "Az állott vizelet erős ammóniaszagú.",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-056",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "Egészséges körülmények között a vizelet fajsúlya 1010-1020 g/ml között megfelelő.",
        correct: true,
      },
      {
        id: "b",
        text: "A magas fajsúly hígított vizeletre utal.",
        correct: false,
      },
    ],
  },
  {
    id: "vitalis-059",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A köpet normál esetben színtelen és enyhén bűzös.",
        correct: false,
      },
      {
        id: "b",
        text: "Tüdővizenyő esetén a köpet fehér habos.",
        correct: true,
      },
      {
        id: "c",
        text: "A köpet tartalmazhat nyákot, vért, gennyet, de férgeket nem.",
        correct: false,
      },
    ],
  },
  {
    id: "vitalis-060",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "Vérzés esetén a köpet színe sárgás-zöldes.",
        correct: false,
      },
      {
        id: "b",
        text: "TBC-s betege köpete véres, élénkpiros.",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-061",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A köpőcsésze használata zavart beteg esetén nem javasolt!",
        correct: true,
      },
      {
        id: "b",
        text: "A véres köpetet „H”-val kell jelölni a lázlapon.",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-063",
    topicId: "vitalis",
    type: "true_false",
    prompt:
      "Döntse el, hogy az alábbi időskorral kapcsolatos állítások igazak-e, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "Időskorban a bőr veszít víztartalmából és csökken a rugalmassága.",
        correct: true,
      },
      {
        id: "b",
        text: "Az izmok összehúzódó képessége nő, a mozgás beszűkül.",
        correct: false,
      },
    ],
  },
  {
    id: "vitalis-064",
    topicId: "vitalis",
    type: "true_false",
    prompt:
      "Döntse el, hogy az alábbi időskorral kapcsolatos állítások igazak-e, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A fogakat támasztó szövetek sorvadnak, viszont a rágóképesség nem csökken.",
        correct: false,
      },
      {
        id: "b",
        text: "Gyakrabban fordul elő székrekedés és éjszakai vizelés.",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-069",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi állítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A testtömegmérést kórházi körülmények között általában naponta végzik.",
        correct: false,
      },
      {
        id: "b",
        text: "Vízhajtó adásakor a testtömegmérést gyógyszer bevétele előtt és 24 óra múlva végzik.",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-071",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A testmagasság és a testkörfogat értékével együtt meghatározható a testtömeg-index.",
        correct: false,
      },
      {
        id: "b",
        text: "A leggyakoribb testkörfogat mérési helyek: has, derék, csípő, comb, lábszár, újszülött és csecsemőkorban fejkörfogat.",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-082",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A tachycardia nem minden esetben kóros.",
        correct: true,
      },
      {
        id: "b",
        text: "A pulzusszámot nem befolyásolhatják érzelmi hatások.",
        correct: false,
      },
    ],
  },
  {
    id: "vitalis-083",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A pulzusszámot kizárólag tapintással tudjuk meghatározni.",
        correct: false,
      },
      {
        id: "b",
        text: "A 100/perc feletti pulzusszámot tachycardiának nevezzük.",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-084",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A 70/perc alatti pulzusszámot bradycardiának nevezzük.",
        correct: false,
      },
      {
        id: "b",
        text: "A fájdalom növeli a pulzusszámot.",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-085",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A láz emeli a pulzusszámot.",
        correct: true,
      },
      {
        id: "b",
        text: "Fizikai aktivitás soha nem emeli 100/perc fölé a pulzusszámot.",
        correct: false,
      },
    ],
  },
  {
    id: "vitalis-086",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "Az arteria carotison centrális, míg az arteria radialison perifériás pulzust tapinthatunk",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-090",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A légzésszámolás akkor pontos, ha a beteggel együtt végezzük.",
        correct: false,
      },
      {
        id: "b",
        text: "A légzésszám élettani körülmények között függ az életkortól, az idegrendszer állapotától, izommunkától, a levegő páratartalmától.",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-091",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A légzés a férfiaknál inkább mellkasi, a nőknél inkább hasi típusú.",
        correct: false,
      },
      {
        id: "b",
        text: "Az egészséges felnőtt percenként 12-16-ot lélegzik.",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-092",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A légzésszámot a hideghatás csökkenti, az alvás növeli.",
        correct: false,
      },
      {
        id: "b",
        text: "A testhőfok emelkedésekor, a légző felület csökkenésekor a légzésszám fokozódik.",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-093",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "Altatószer- és Morphin-mérgezésben csökken a légzésszám.",
        correct: true,
      },
      {
        id: "b",
        text: "A légzőközpont tartós működészavara esetén a légzésszám nő.",
        correct: false,
      },
    ],
  },
  {
    id: "vitalis-094",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A légzés az oxigén és szén-dioxid kicserélődése a vér és a légköri levegő, illetve a vér és a szövetek között.",
        correct: true,
      },
      {
        id: "b",
        text: "A légzésszámolás csak akkor pontos, ha előtte a beteget figyelmeztetjük a szabályos légvételre.",
        correct: false,
      },
    ],
  },
  {
    id: "vitalis-095",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A légzésszámolás legalább három percig tart.",
        correct: false,
      },
      {
        id: "b",
        text: "A be- és kilégzés szabályos váltakozását a nyúltvelőben lévő légzőközpont szabályozza.",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-096",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A légzésszámolás csak akkor pontos, ha a beteg nem veszi észre, ezért a pulzusméréssel együtt végezzük.",
        correct: true,
      },
      {
        id: "b",
        text: "Alvás közben a légzésszám szapora és felületes.",
        correct: false,
      },
    ],
  },
  {
    id: "vitalis-097",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "Normális körülmények között a ki- és belégzések szabályosan követik egymást, és a légvételek mélysége és időtartama egyforma.",
        correct: true,
      },
      {
        id: "b",
        text: "A légvételek kiváltásának kémiai ingere a vérben felszaporodó oxigén, mely a légzőközpontot ingerli.",
        correct: false,
      },
    ],
  },
  {
    id: "vitalis-101",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A vérnyomás értéke nem változik a szívciklus során a systole és a diastole alatt.",
        correct: false,
      },
      {
        id: "b",
        text: "A vérnyomásértékek fiziológiás szint alá süllyedésekor hypotoniaról beszélünk.",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-102",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A vérnyomás a keringő vér által az erek rugalmas falára kifejtett nyomás.",
        correct: true,
      },
      {
        id: "b",
        text: "A vérnyomásértékek fiziológiás szint alá süllyedésekor hypertoniaról beszélünk.",
        correct: false,
      },
    ],
  },
  {
    id: "vitalis-103",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A systolés és diastolés vérnyomásérték különbségét perfúziós nyomásnak nevezzük.",
        correct: false,
      },
      {
        id: "b",
        text: "A systolés és diastolés vérnyomásérték különbségét pulzusnyomásnak nevezzük.",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-104",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Döntse el, hogy az alábbi megállapítások igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A vérnyomásmérő mandzsettáját a meztelen felkar közepére helyezzük fel.",
        correct: true,
      },
      {
        id: "b",
        text: "A vérnyomásmérés előtt 5 perccel már ne fogyasszon koffeines és alkoholos italt, ne dohányozzon a páciens.",
        correct: false,
      },
    ],
  },
  {
    id: "vitalis-182",
    topicId: "vitalis",
    type: "true_false",
    prompt:
      "Válassza ki, hogy az alapfokú újraélesztésre vonatkozó kijelentések igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A segélynyújtónak legelőször gondoskodnia kell a biztonságos környezet megteremtéséről.",
        correct: true,
      },
      {
        id: "b",
        text: "A segélynyújtónak legelőször a segítséghívásról kell gondoskodnia.",
        correct: false,
      },
    ],
  },
  {
    id: "vitalis-183",
    topicId: "vitalis",
    type: "true_false",
    prompt:
      "Válassza ki, hogy az alapfokú újraélesztésre vonatkozó kijelentések igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A mellkaskompresszió – befúvás aránya 15 : 2",
        correct: false,
      },
      {
        id: "b",
        text: "A félautomata defibrillátor használata előtt 5 percig újraélesztést kell végezni",
        correct: false,
      },
    ],
  },
  {
    id: "vitalis-184",
    topicId: "vitalis",
    type: "true_false",
    prompt:
      "Válassza ki, hogy az alapfokú újraélesztéshez kapcsolódó mondatok igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A légzés vizsgálatot 10 másodpercig kell végezni.",
        correct: true,
      },
      {
        id: "b",
        text: "A légzés vizsgálatot 20 másodpercig kell végezni.",
        correct: false,
      },
    ],
  },
  {
    id: "vitalis-185",
    topicId: "vitalis",
    type: "true_false",
    prompt:
      "Válassza ki, hogy az alapfokú újraélesztéshez kapcsolódó mondatok igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A mellkaskompresszió – befúvás arány 30:2.",
        correct: true,
      },
      {
        id: "b",
        text: "A mellkaskompresszió – befúvás arány 2:15.",
        correct: false,
      },
    ],
  },
  {
    id: "vitalis-186",
    topicId: "vitalis",
    type: "true_false",
    prompt:
      "Válassza ki, hogy az alapfokú újraélesztéshez kapcsolódó mondatok igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "Amennyiben a beteg eszméletlen és normál légzést tapasztalunk, akkor hanyatt fekve kell elhelyezni és folyamatosan ellenőrizni kell a légzését.",
        correct: false,
      },
      {
        id: "b",
        text: "Amennyiben a beteg eszméletlen és normál légzést tapasztalunk, akkor stabil oldalfekvésben kell elhelyezni és folyamatosan ellenőrizni kell a légzését.",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-187",
    topicId: "vitalis",
    type: "true_false",
    prompt:
      "Válassza ki, hogy az alapfokú újraélesztéshez kapcsolódó mondatok igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "Amennyiben az elsősegélynyújtó tanult újraélesztést, a mellkaskompressziókat célszerű szájból - szájba történő lélegeztetéssel is kiegészíteni.",
        correct: true,
      },
      {
        id: "b",
        text: "Amennyiben az elsősegélynyújtó tanult újraélesztést, sok esetben elegendő a szájból - szájba történő lélegeztetés hatékony végzése.",
        correct: false,
      },
    ],
  },
  {
    id: "vitalis-188",
    topicId: "vitalis",
    type: "true_false",
    prompt:
      "Válassza ki, hogy az alapfokú újraélesztéshez kapcsolódó mondatok igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "Mellkaskompressziót felnőttek esetén körülbelül 5-6 cm mélységben, 100-120/perces frekvenciával kell végezni.",
        correct: true,
      },
      {
        id: "b",
        text: "Mellkaskompressziót felnőttek esetén körülbelül 4-5 cm mélységben, 100-120/perces frekvenciával kell végezni.",
        correct: false,
      },
    ],
  },
  {
    id: "vitalis-189",
    topicId: "vitalis",
    type: "true_false",
    prompt:
      "Válassza ki, hogy az alapfokú újraélesztéshez kapcsolódó mondatok igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "Mellkaskompressziót felnőttek esetén körülbelül 5-6 cm mélységben, 90-100/perces frekvenciával kell végezni.",
        correct: false,
      },
      {
        id: "b",
        text: "A kompresszió és lélegeztetés aránya 15:1.",
        correct: false,
      },
    ],
  },
  {
    id: "vitalis-190",
    topicId: "vitalis",
    type: "true_false",
    prompt:
      "Válassza ki, hogy az alapfokú újraélesztéshez kapcsolódó mondatok igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "A kompresszió és lélegeztetés aránya 30:2.",
        correct: true,
      },
      {
        id: "b",
        text: "A kompresszió és lélegeztetés aránya 30:5.",
        correct: false,
      },
    ],
  },
  {
    id: "vitalis-191",
    topicId: "vitalis",
    type: "true_false",
    prompt:
      "Válassza ki, hogy az alapfokú újraélesztéshez kapcsolódó mondatok igazak, vagy hamisak!",
    statements: [
      {
        id: "a",
        text: "Újraélesztéskor a mellkaskompressziónál a mellkas lenyomási mélysége kb. 3-4 cm.",
        correct: false,
      },
      {
        id: "b",
        text: "Újraélesztéskor a mellkaskompressziónál a mellkas lenyomási mélysége kb. 5-6 cm.",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-196",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Válassza ki, hogy igazak, vagy hamisak az alábbi állítások!",
    statements: [
      {
        id: "a",
        text: "Súlyos sérülés esetén csak két segélynyújtó mozgathatja a beteget.",
        correct: false,
      },
      {
        id: "b",
        text: "Súlyos sérülés lehetőségét feltételezhetjük a baleseti mechanizmusból.",
        correct: true,
      },
    ],
  },
  {
    id: "vitalis-197",
    topicId: "vitalis",
    type: "true_false",
    prompt: "Válassza ki, hogy igazak, vagy hamisak az alábbi állítások!",
    statements: [
      {
        id: "a",
        text: "Súlyos sérülést kell feltételezni magasból esést követően.",
        correct: true,
      },
      {
        id: "b",
        text: "Eszméletén lévő súlyos sérültet stabil oldalfektetésbe kell helyezni.",
        correct: false,
      },
    ],
  },
  {
    id: "vitalis-016",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Válassza ki az alábbiak közül azt, amelyik NEM Hippokratész által meghatározott alkattípus! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "szangvinikus" },
      { id: "b", text: "kolerikus" },
      { id: "c", text: "piknikus" },
      { id: "d", text: "flegmatikus" },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "vitalis-046",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Jelölje be az alábbiak közül azt az eszközt, amelyik NEM alkalmas a széklet felfogására és vizsgálatra küldésére! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "F-tartály" },
      { id: "b", text: "celofán csík" },
      { id: "c", text: "pipetta" },
      { id: "d", text: "pelenka" },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "vitalis-067",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Jelölje be az alábbiak közül a felnőttek alultápláltsági állapotának megfelelő Body Mass Index (BMI) értékét! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "16 – 18" },
      { id: "b", text: "20 – 25" },
      { id: "c", text: "30 <" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "vitalis-111",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Válassza ki a kontaktusteremtésre vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "a sérültet csak verbális ingerrel (megszólítás) kell megpróbálni kontaktusba vonni",
      },
      {
        id: "b",
        text: "a sérültet fizikai és verbális ingerrel is meg kell próbálni kontaktusba vonni",
      },
      { id: "c", text: "elegendő, ha csak odalépünk a sérülthöz" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "vitalis-112",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Válassza ki, mit vizsgálunk a „hármas észleléssel”! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "légzés" },
      { id: "b", text: "pupillareakció" },
      { id: "c", text: "ébreszthetőség" },
      { id: "d", text: "tudat" },
      { id: "e", text: "szívműködés" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "vitalis-113",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Válassza ki, mi a teendő ájulás esetén! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "vigyük az egyént hűvös helyre és mielőbb fektessük le",
      },
      { id: "b", text: "mindenképpen tartsuk a beteget álló testhelyzetben" },
      {
        id: "c",
        text: "fektessük félig ülő helyzetbe a beteget, 40-60 fokban megemelt felsőtesttel",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "vitalis-115",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Válassza ki a Wallace-féle 9-es szabályra vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "felnőtt esetében a törzs elöl 36%" },
      { id: "b", text: "felnőtt esetében a gáttájék 2%" },
      { id: "c", text: "felnőtt esetében a jobb alsó végtag 18%" },
      { id: "d", text: "gyermek esetében a bal alsó végtag 24%" },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "vitalis-116",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Válassza ki a mentési lánc elemeinek helyes sorrendjét! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "felismerés, elsősegély, segélyhívás, mentő ellátás, kórházi ellátás",
      },
      {
        id: "b",
        text: "felismerés, segélyhívás, elsősegély, mentő ellátás, kórházi ellátás",
      },
      {
        id: "c",
        text: "felismerés, segélyhívás, mentő ellátás, elsősegély, kórházi ellátás",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "vitalis-118",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Válassza ki a helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "A nem reagáló beteg légzésvizsgálatát 10 másodpercig kell hármas érzékeléssel vizsgálni, és ez idő alatt legalább két légzőmozgást kell tapasztalni.",
      },
      {
        id: "b",
        text: "A nem reagáló beteg légzésvizsgálatát 20 másodpercig kell hármas érzékeléssel vizsgálni, és ez idő alatt legalább egy légző mozgást kell tapasztalni.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "vitalis-119",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Válassza ki a helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az Esmarch-féle műfogás alkalmazása során törekedni kell arra, hogy a felső fogsor az alsó elé kerüljön.",
      },
      {
        id: "b",
        text: "Az Esmarch-féle műfogás alkalmazása során törekedni kell arra, hogy az alsó fogsor a felső elé kerüljön.",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "vitalis-120",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Válassza ki a helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "A tálcafogás gerinc- és/vagy medencesérült kimentésére szolgál, amely optimális esetben négy segélynyújtó összehangolt munkáját igényli.",
      },
      {
        id: "b",
        text: "Amennyiben a beteg nem reagál a külső ingerekre, akkor az elsősegélynyújtó számára halottnak minősül.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "vitalis-121",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Válassza ki az égésre/fagyásra vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Elsőfokú égés esetén a bőr rétegei közül a hám és az irha érintett.",
      },
      {
        id: "b",
        text: "Elsőfokú fagyás esetén a bőr színe eleinte sápadt, márványozott, a későbbiekben lilás, kékes.",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "vitalis-154",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Válassza ki az alábbiak közül a helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Égési sérülést okozhat lánghatás, forró folyadék, forró fém, súrlódás.",
      },
      {
        id: "b",
        text: "A sebbe égett ruhát egy határozott mozdulattal el kell távolítani.",
      },
      {
        id: "c",
        text: "Égési sérülésre közvetlenül jeget kell helyezni, azzal kell hűteni.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "vitalis-173",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Légúti idegentest eltávolítása esetén, mely területen végezzük a háti ütéseket? (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "a lapockák között" },
      { id: "b", text: "a lapockák alatt" },
      { id: "c", text: "a lapockáktól felfelé" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "vitalis-174",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Légúti idegentest eltávolítása esetén maximum hány háti ütést javasolt alkalmazni? (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "4" },
      { id: "c", text: "5" },
      { id: "d", text: "6" },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "vitalis-176",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Válassza ki, hogy milyen frekvenciával kell végezni újraélesztés során a mellkas lenyomásokat felnőtteknél! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "80-90/perc" },
      { id: "b", text: "100-120/perc" },
      { id: "c", text: "120-140/perc" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "vitalis-177",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Válassza ki az elsőfokú égés nem tipikus tünetét! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "feszes bőr" },
      { id: "b", text: "bőrpír" },
      { id: "c", text: "piszkos szürke sebfelület" },
      { id: "d", text: "fájdalom" },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "vitalis-178",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Válassza ki az egységes európai segélyhívószámot! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "104" },
      { id: "b", text: "112" },
      { id: "c", text: "105" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "vitalis-179",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Válassza ki, hogy mennyi ideig kell végezni a légzésvizsgálatnál alkalmazott hármas érzékelést! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "Maximum 5 másodperc" },
      { id: "b", text: "Maximum 10 másodperc" },
      { id: "c", text: "Maximum 15 másodperc" },
      { id: "d", text: "Maximum 30 másodperc" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "vitalis-180",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Válassza ki, hány mellkaskompressziót kell végezni felnőttek újraélesztésekor! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "5" },
      { id: "b", text: "10" },
      { id: "c", text: "15" },
      { id: "d", text: "30" },
    ],
    correctOptionIds: ["d"],
  },
  {
    id: "vitalis-181",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Válassza ki a hármas érzékelés jelentését! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "Érzem, tapintom, hallom." },
      { id: "b", text: "Tapintom, látom, hallom." },
      { id: "c", text: "Érzem, látom, hallom." },
      { id: "d", text: "Látom, hallom, tapintom." },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "vitalis-192",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Válassza ki az égési sérülés fokát, ha a bőr piros és rajta hólyagok láthatóak! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "I. fokú" },
      { id: "b", text: "II. fokú" },
      { id: "c", text: "III. fokú" },
      { id: "d", text: "IV. fokú" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "vitalis-107",
    topicId: "vitalis",
    type: "ordering",
    prompt: "Állítsa a helyes sorrendbe az egyfázisú fertőtlenítés lépéseit!",
    items: [
      { id: "elomosas", text: "előmosás erős vízsugárral" },
      { id: "oblites", text: "öblítés" },
      { id: "fertotlenites", text: "fertőtlenítés" },
      { id: "szaritas", text: "szárítás" },
      { id: "gyujtes", text: "kontaminálódott eszközök gyűjtése" },
    ],
    correctOrderIds: [
      "gyujtes",
      "elomosas",
      "fertotlenites",
      "oblites",
      "szaritas",
    ],
  },
  {
    id: "vitalis-109",
    topicId: "vitalis",
    type: "ordering",
    prompt: "Állítsa helyes sorrendbe a fertőtlenítő mosogatás fázisait!",
    items: [
      { id: "fertotlenites", text: "fertőtlenítés" },
      { id: "mosogatas", text: "mosogatás" },
      { id: "eloaztatas", text: "előáztatás" },
      { id: "oblites", text: "öblítés" },
      { id: "szaritas", text: "szárítás" },
      { id: "utooblites", text: "utóöblítés" },
    ],
    correctOrderIds: [
      "eloaztatas",
      "mosogatas",
      "oblites",
      "fertotlenites",
      "utooblites",
      "szaritas",
    ],
  },
  {
    id: "vitalis-117",
    topicId: "vitalis",
    type: "ordering",
    prompt: "Tegye helyes sorrendbe a mentési lánc elemeit!",
    items: [
      { id: "elsosegelynyujtas", text: "elsősegélynyújtás" },
      { id: "intezeti-ellatas", text: "intézeti ellátás" },
      { id: "szallitas", text: "szállítás" },
      { id: "felismeres", text: "felismerés" },
      { id: "mentoellatas", text: "mentőellátás" },
      { id: "segelykeres", text: "segélykérés" },
    ],
    correctOrderIds: [
      "felismeres",
      "segelykeres",
      "elsosegelynyujtas",
      "mentoellatas",
      "szallitas",
      "intezeti-ellatas",
    ],
  },
  {
    id: "vitalis-135",
    topicId: "vitalis",
    type: "ordering",
    prompt:
      "Állítsa helyes sorrendbe az alapfokú újraélesztéshez kapcsolódó, a földön fekvő sérült vizsgálatára vonatkozó mondatokat!",
    items: [
      {
        id: "segitseghivas",
        text: "segítséghívás, amennyiben a sérült nem reagál, nem vonható kontaktusba",
      },
      { id: "legzesvizsgalat", text: "10 másodpercig légzés vizsgálat" },
      { id: "reakciokeszseg", text: "az eszmélet/reakciókészség vizsgálata" },
      { id: "legutak", text: "a légutak felszabadítása/szabaddá tétele" },
      { id: "biztonsag", text: "biztonságos környezet megteremtése" },
    ],
    correctOrderIds: [
      "biztonsag",
      "reakciokeszseg",
      "segitseghivas",
      "legutak",
      "legzesvizsgalat",
    ],
  },
  {
    id: "vitalis-169",
    topicId: "vitalis",
    type: "ordering",
    prompt: "Állítsa sorrendbe a sebellátás menetét!",
    items: [
      { id: "fertotlenites", text: "a sebszélek fertőtlenítése" },
      {
        id: "nyugalom",
        text: "a sérült nyugalomba helyezése (szükség esetén a végtag felemelése)",
      },
      { id: "fedes", text: "a seb steril fedése, a kötés rögzítése" },
      { id: "tisztitas", text: "a seb környékének megtisztítása" },
    ],
    correctOrderIds: ["nyugalom", "tisztitas", "fertotlenites", "fedes"],
  },
  {
    id: "vitalis-172",
    topicId: "vitalis",
    type: "ordering",
    prompt:
      "Állítsa sorrendbe a légúti idegentest esetén javasolt ellátás lépéseit!",
    items: [
      {
        id: "hasi-lokesek",
        text: "hasi lökések (Heimlich-féle műfogás) alkalmazása",
      },
      { id: "kohoges", text: "köhögésre biztatás" },
      { id: "biztonsag", text: "biztonságos környezet kialakítása" },
      { id: "hati-utesek", text: "háti ütések alkalmazása" },
      { id: "megnyugtatas", text: "az illető megnyugtatása" },
    ],
    correctOrderIds: [
      "biztonsag",
      "megnyugtatas",
      "kohoges",
      "hati-utesek",
      "hasi-lokesek",
    ],
  },
  {
    id: "vitalis-205",
    topicId: "vitalis",
    type: "ordering",
    prompt:
      "Tegye helyes sorrendbe a katasztrófák elleni védekezés szakaszait!",
    items: [
      { id: "helyreallitas", text: "Helyreállítás" },
      { id: "megelozes", text: "Megelőzés" },
      { id: "vedekezes", text: "Védekezés" },
    ],
    correctOrderIds: ["megelozes", "vedekezes", "helyreallitas"],
  },
  {
    id: "vitalis-167",
    topicId: "vitalis",
    type: "ordering",
    prompt: "Tegye helyes sorrendbe a BLS lépéseit!",
    items: [
      { id: "kompresszio", text: "30 mellkaskompresszió" },
      { id: "biztonsag", text: "a helyszín biztonságának felmérése" },
      { id: "legzesvizsgalat", text: "légzésvizsgálat" },
      {
        id: "reakciokeszseg",
        text: "a beteg reakciókészségének felmérése megszólítással, két vállának óvatos megrázásával",
      },
      { id: "mentohivas", text: "mentőhívás" },
      { id: "legeztetes", text: "2 befúvásos lélegeztetés" },
    ],
    correctOrderIds: [
      "biztonsag",
      "reakciokeszseg",
      "legzesvizsgalat",
      "mentohivas",
      "kompresszio",
      "legeztetes",
    ],
  },
  {
    id: "vitalis-193",
    topicId: "vitalis",
    type: "ordering",
    prompt: "Állítsa sorrendbe súlyos sérült esetében a teendőket!",
    items: [
      { id: "biztonsag", text: "biztonság megteremtése" },
      { id: "serules", text: "súlyos sérülés feltételezése" },
      { id: "tamogatas", text: "beteg mellett maradva, pszichés támogatás" },
      { id: "mechanizmus", text: "baleseti mechanizmus értékelése, elemzése" },
      { id: "kitamasztas", text: "oldalról kitámasztás" },
    ],
    correctOrderIds: [
      "biztonsag",
      "mechanizmus",
      "serules",
      "kitamasztas",
      "tamogatas",
    ],
  },
  {
    id: "vitalis-066",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Jelölje be az alábbiak közül a felnőttek normál tápláltsági állapotának megfelelő Body Mass Index (BMI) értékét! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "16 – 18" },
      { id: "b", text: "20 – 25" },
      { id: "c", text: "25 – 40" },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "vitalis-068",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Jelölje be az alábbiak közül a felnőttek súlyos túlsúlyos állapotának megfelelő Body Mass Index (BMI) értékét! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "16 – 18" },
      { id: "b", text: "20 – 25" },
      { id: "c", text: "30 <" },
    ],
    correctOptionIds: ["c"],
  },
  {
    id: "vitalis-114",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Válassza ki az epilepszia meghatározását! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "a görcsrohammal járó eszméletvesztések egyik formája" },
      { id: "b", text: "tartós eszméletvesztéssel járó kórkép" },
      { id: "c", text: "rövid időtartamú eszméletzavar" },
      { id: "d", text: "egyik sem" },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "vitalis-122",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Válassza ki az égésre/fagyásra vonatkozó helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Harmadfokú égés esetén a bőr piszkosszürke vagy fehéres szürke színű, megnyílt hólyagok láthatók.",
      },
      {
        id: "b",
        text: "Fagyási sérülés esetén azonnal meg kell kezdeni a sérült területet közvetlenül melegíteni, dörzsöléssel vagy meleg vízzel.",
      },
    ],
    correctOptionIds: ["a"],
  },
  {
    id: "vitalis-146",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Válassza ki a helyes megállapítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      {
        id: "a",
        text: "Nagy kiterjedésű égésnél a felület fedésére tiszta, vasalt lepedő használata.",
      },
      {
        id: "b",
        text: "Krém vagy sebhintőpor alkalmazása a sebben a fertőzés megelőzésére, a sebgyógyulás elősegítésére.",
      },
    ],
    correctOptionIds: ["b"],
  },
  {
    id: "vitalis-198",
    topicId: "vitalis",
    type: "single_choice",
    prompt:
      "Válassza ki a hamis állítást! (Csak egy helyes válasz lehetséges!)",
    options: [
      { id: "a", text: "súlyos sérült esetében fontos a nyaki gerinc védelme" },
      { id: "b", text: "súlyos sérült mozgatására alkalmas a tálcafogás" },
      { id: "c", text: "súlyos sérült lehetőség esetén tilos mozgatni" },
      {
        id: "d",
        text: "súlyos sérült biztonságos mozgatására alkalmazható a Rautek-féle műfogás",
      },
    ],
    correctOptionIds: ["d"],
  },
  {
    id: "vitalis-006",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt: "Válassza ki az objektív tüneteket! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "láz" },
      { id: "b", text: "szédülés" },
      { id: "c", text: "rossz közérzet" },
      { id: "d", text: "hidegrázás" },
    ],
    correctOptionIds: ["a", "d"],
  },
  {
    id: "vitalis-007",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt: "Válassza ki az objektív tüneteket! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "hányinger" },
      { id: "b", text: "vadászkutya-fekvés" },
      { id: "c", text: "dobverőujj" },
      { id: "d", text: "rossz közérzet" },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "vitalis-008",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt: "Válassza ki a szubjektív tüneteket! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "hányinger" },
      { id: "b", text: "láz" },
      { id: "c", text: "dobverőujj" },
      { id: "d", text: "vadászkutya-fekvés" },
      { id: "e", text: "rossz közérzet" },
      { id: "f", text: "levertség" },
    ],
    correctOptionIds: ["a", "e", "f"],
  },
  {
    id: "vitalis-011",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt: "Válassza ki a vitális paramétereket! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "légzés" },
      { id: "b", text: "vércukorszint" },
      { id: "c", text: "vérnyomás" },
      { id: "d", text: "tudatállapot" },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "vitalis-012",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt: "Válassza ki a vitális paramétereket! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "pulzus" },
      { id: "b", text: "hőmérséklet" },
      { id: "c", text: "vérkép" },
      { id: "d", text: "vizeletürítés" },
    ],
    correctOptionIds: ["a", "b"],
  },
  {
    id: "vitalis-017",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki Hippokratész által meghatározott alkattípusokat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "kolerikus" },
      { id: "b", text: "piknikus" },
      { id: "c", text: "atlétikus" },
      { id: "d", text: "melankolikus" },
    ],
    correctOptionIds: ["a", "d"],
  },
  {
    id: "vitalis-022",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki a krónikus fájdalomra vonatkozó helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "A fájdalom fennállása több mint három hónap." },
      { id: "b", text: "A fájdalom rövid ideig tart és nem tér vissza." },
      { id: "c", text: "A beteg életminőségét befolyásolja." },
      { id: "d", text: "A fájdalom fennállása kevesebb, mint három hónap." },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "vitalis-070",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki a testmagassággal és mérésével kapcsolatos helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "A végleges testmagasságot a nők 18 éves korukra a férfiak 23 éves korukra érik el.",
      },
      {
        id: "b",
        text: "Testmagasságot függőleges felület mellett egyenes testtartással, a sarkak összeérintésével mérjük.",
      },
      {
        id: "c",
        text: "Testmagasságot függőleges felület mellett egyenes testtartással, vállszéles terpeszállásban állva mérjük.",
      },
      {
        id: "d",
        text: "A végleges testmagasságot 20-22 éves kor között éri el az ember.",
      },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "vitalis-072",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbiak közül a hypothermia tüneteit! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "szapora légzés" },
      { id: "b", text: "pulzus csökkenése" },
      { id: "c", text: "légzésszám csökkenése" },
      { id: "d", text: "fejfájás" },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "vitalis-073",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbiak közül a hyperthermia tüneteit! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "hűvös bőr" },
      { id: "b", text: "kipirult, meleg bőr" },
      { id: "c", text: "szapora légzés" },
      { id: "d", text: "enyhe didergés" },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "vitalis-074",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbiak közül a hyperthermia tüneteit! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "étvágytalanság" },
      { id: "b", text: "légzésszám csökkenése" },
      { id: "c", text: "fejfájás" },
      { id: "d", text: "pulzusszám emelkedése" },
    ],
    correctOptionIds: ["c", "d"],
  },
  {
    id: "vitalis-075",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki a testhőmérséklettel kapcsolatos helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "A testhőmérséklet napi ingadozása normál körülmények között nem haladhat meg a 0,5°C-t.",
      },
      {
        id: "b",
        text: "A normális, fiziológiás testhőmérséklet 36-37°C között van.",
      },
      {
        id: "c",
        text: "A hőmérséklet dokumentálható lázlapon (színes lázgörbével) vagy a megfigyelőlapon arab számokkal felírva.",
      },
      {
        id: "d",
        text: "Az orálisan mért hőmérsékletnél 0,3°-t, a rectálisan mért hőmérsékletnél 0,3° kell a mért értékhez hozzáadni.",
      },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "vitalis-080",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki a pulzusmérés lehetséges helyeit! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "arteria carotis communis" },
      { id: "b", text: "aorta ascendens" },
      { id: "c", text: "truncus pulmonalis" },
      { id: "d", text: "arteria radialis" },
    ],
    correctOptionIds: ["a", "d"],
  },
  {
    id: "vitalis-081",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki a pulzusmérés lehetséges helyeit! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "arteria coronaria dextra" },
      { id: "b", text: "arteria temporalis" },
      { id: "c", text: "ramus circumflexus" },
      { id: "d", text: "arteria femoralis" },
      { id: "e", text: "arteria poplitea" },
    ],
    correctOptionIds: ["b", "d", "e"],
  },
  {
    id: "vitalis-110",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki azokat az eseteket, amikor a balesetet szenvedő motoros fejéről a bukósisakot le kell venni! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "nem lélegzik a sérült" },
      { id: "b", text: "gerincsérülése van" },
      { id: "c", text: "nyílt hasi sérülése van" },
      { id: "d", text: "a sérült eszméletlen és hány" },
      { id: "e", text: "combcsonttörése van" },
    ],
    correctOptionIds: ["a", "d"],
  },
  {
    id: "vitalis-123",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki az égésre/fagyásra vonatkozó helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Elsőfokú égés esetén legalább 2 percig hideg vízzel kell hűteni a területet.",
      },
      {
        id: "b",
        text: "Elsőfokú fagyás tünete a zsibbadás, tűszúrásszerű érzés, viszketés.",
      },
      {
        id: "c",
        text: "Másodfokú égés esetén a bőr rétegei közül hám és az irha érintett.",
      },
      {
        id: "d",
        text: "Az égés kiterjedésének megállapítására a Wallace-féle 5-ös szabályt alkalmazzuk.",
      },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "vitalis-124",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Húzza alá az alábbiak közül a rándulás, a ficam vagy a törés biztos jeleit! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "duzzanat" },
      { id: "b", text: "alakváltozás" },
      { id: "c", text: "haematoma" },
      { id: "d", text: "akadályozott mozgás" },
      { id: "e", text: "kilátszó csontvég" },
    ],
    correctOptionIds: ["b", "e"],
  },
  {
    id: "vitalis-136",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki, szabályos mentőhíváskor mely lényeges információkat kell közölni a mentésirányítóval! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "A telefonáló életkora" },
      { id: "b", text: "Mi történt (rövid ismertetés)" },
      { id: "c", text: "Hol történt (pontos cím)" },
      { id: "d", text: "Hány autó van összesen a helyszínen" },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "vitalis-137",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki, szabályos mentőhíváskor mely lényeges információkat kell közölni a mentésirányítóval! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "Hány sérült van" },
      { id: "b", text: "Állapotuk súlyossága" },
      { id: "c", text: "Milyen a helyszínen az időjárás" },
      { id: "d", text: "Műszaki mentés szükséges-e" },
      { id: "e", text: "A sérült neme" },
      { id: "f", text: "A sérült életkora" },
    ],
    correctOptionIds: ["a", "b", "d"],
  },
  {
    id: "vitalis-144",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki, hogy az alábbiak közül mely esetekben kell a beteget/sérültet félig ülő helyzetbe helyezni! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "Eszméleténél lévő mellkasi sérült esetében." },
      { id: "b", text: "Fedett hasi sérülés esetén." },
      { id: "c", text: "Erősen vérző arckoponyasérültnél." },
      { id: "d", text: "Tüdőasztma miatt kialakuló nehézlégzésnél." },
    ],
    correctOptionIds: ["a", "d"],
  },
  {
    id: "vitalis-145",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki azokat a tevékenységeket, amelyeket tilos alkalmazni az elsősegélynyújtónak égési sérült ellátása esetén! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Az égett testfelület szabaddá tétele, amennyiben lehetséges.",
      },
      { id: "b", text: "A bőrbe égett ruha kitépése a sebből." },
      {
        id: "c",
        text: "Az égett bőrfelület hideg, folyóvízzel történő hűtése legalább 15-20 percig.",
      },
      { id: "d", text: "Szükség esetén a sérülés jéggel történő hűtése." },
      {
        id: "e",
        text: "Hűtés után az égett felületre laza, steril fedőkötés felhelyezése.",
      },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "vitalis-147",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki a helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Elsősegélynyújtás során a légzés vizsgálata 1 percig tart.",
      },
      {
        id: "b",
        text: "Gerincsérülés gyanúja esetén a fej mozgatása helyett az áll előreemelésével lehet a szabad légutat biztosítani.",
      },
      { id: "c", text: "Hármas értékeléssel vizsgáljuk a légzés meglétét." },
      {
        id: "d",
        text: "Magyarországon a 107-es vagy az egységes európai 112-es hívószámon lehet a mentőket riasztani.",
      },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "vitalis-148",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki a helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Magyarországon a 107-es vagy az egységes európai 112-es hívószámon lehet a mentőket riasztani.",
      },
      {
        id: "b",
        text: "Mentőhívás során adja meg a segélykérő a telefonszámát, mert fontos lehet, ha további információ szükséges.",
      },
      {
        id: "c",
        text: "Életveszélyes állapotra utal a szürkéssápadt-fakófehér verejtékes arc, a szapora pulzus.",
      },
      {
        id: "d",
        text: "A bukósisakot minél hamarabb eltávolítjuk a motoros sérült fejéről, mert csak így tudjuk megállapítani, hogy van-e légzése.",
      },
    ],
    correctOptionIds: ["b", "c"],
  },
  {
    id: "vitalis-151",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbiak közül a mérgezésekkel kapcsolatos helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Marószer mérgezés esetén a lenyelt, gyomorba került marószert tilos kihánytatni.",
      },
      {
        id: "b",
        text: "A savmérgezés a bőrön és nyálkahártyákon pörkképződést okoz.",
      },
      {
        id: "c",
        text: "Gyógyszermérgezés esetén az eszméletlen beteget meghánytatjuk.",
      },
      {
        id: "d",
        text: "Szén-monoxid-mérgezésnél a gázmérgezettet minden körülmények között azonnal ki kell mentenie az elsősegélynyújtónak.",
      },
    ],
    correctOptionIds: ["a", "b"],
  },
  {
    id: "vitalis-152",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbiak közül a mérgezésekkel kapcsolatos helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Marószer mérgezés esetén a lenyelt, gyomorba került marószert tilos kihánytatni.",
      },
      {
        id: "b",
        text: "Szén-monoxid-mérgezésnél a gázmérgezettet minden körülmények között azonnal ki kell mentenie az elsősegélynyújtónak.",
      },
      {
        id: "c",
        text: "A gombamérgezések lappangási ideje 48–72 óra között van.",
      },
      {
        id: "d",
        text: "Klórgáz-mérgezésnél helyi nyálkahártya-izgalom, a gégefedő, a hörgők görcse és tüdővizenyő alakulhat ki.",
      },
    ],
    correctOptionIds: ["a", "d"],
  },
  {
    id: "vitalis-153",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbiak közül a helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "Defibrilláláshoz a beteg száraz alapon feküdjön, mellkasa legyen száraz.",
      },
      {
        id: "b",
        text: "A sebellátás legfontosabb célja a további vérvesztés megakadályozása.",
      },
      {
        id: "c",
        text: "Orrvérzés esetén a beteg nyugalomba helyezése után hajtsa hátra a fejét.",
      },
      {
        id: "d",
        text: "Hasi sérülés esetén az eszméletlen beteget stabil oldalfekvésbe kell helyezni.",
      },
    ],
    correctOptionIds: ["a", "b"],
  },
  {
    id: "vitalis-155",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki a súlyos állapotra utaló riasztó jeleket, tüneteket! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "légzés hiánya" },
      { id: "b", text: "horzsolt seb mindkét alkaron" },
      { id: "c", text: "eszméletlenség" },
      { id: "d", text: "két lábujj amputációja" },
      { id: "e", text: "görcsroham" },
    ],
    correctOptionIds: ["a", "c", "e"],
  },
  {
    id: "vitalis-156",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki a súlyos állapotra utaló riasztó jeleket, tüneteket! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "igen nagyfokú fájdalom" },
      { id: "b", text: "horzsolt seb mindkét alkaron" },
      { id: "c", text: "igen magas láz" },
      { id: "d", text: "erős vérzés" },
      { id: "e", text: "zúzott seb a fejen" },
    ],
    correctOptionIds: ["a", "c", "d"],
  },
  {
    id: "vitalis-157",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki a súlyos állapotra utaló riasztó jeleket, tüneteket! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "zúzott seb a fejen" },
      { id: "b", text: "gyér vagy szapora, könnyen elnyomható pulzus" },
      { id: "c", text: "pulzus 90-100/min" },
      { id: "d", text: "sápadt, beesett arc, szederjes ajkak" },
      { id: "e", text: "hányinger, hányás" },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "vitalis-163",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alábbi felsorolásból a gerincsérülés lehetséges tüneteit! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "heves hasi fájdalom" },
      {
        id: "b",
        text: "fülből vagy az orrból világos, agyvízzel kevert vér ürül",
      },
      { id: "c", text: "a gerinc deformitása" },
      { id: "d", text: "fájdalom a gerinc vonalában" },
    ],
    correctOptionIds: ["c", "d"],
  },
  {
    id: "vitalis-164",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki az ájulás lehetséges tüneteit! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "kipirult arc" },
      { id: "b", text: "szédülés" },
      { id: "c", text: "hidegrázás" },
      { id: "d", text: "sápadtság" },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "vitalis-165",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki a helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "AED használattal megvalósítható a korai defibrillálás még a mentő kiérkezése előtt.",
      },
      {
        id: "b",
        text: "AED-t a mentő kiérkezése előtt laikus önállóan nem, csak a mentésirányító utasítására használhat.",
      },
      {
        id: "c",
        text: "Az AED megérkezéséig folytatni kell az újraélesztést, de amint megérkezett az AED, azt azonnal használni kell.",
      },
      {
        id: "d",
        text: "Ha van a közelben AED, akkor az újraélesztést csak az elektródák felhelyezését követően szabad megkezdeni.",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "vitalis-166",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki a helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "AED használattal megvalósítható a korai defibrillálás még a mentő kiérkezése előtt.",
      },
      {
        id: "b",
        text: "AED-t a mentő kiérkezése előtt laikus önállóan nem, csak a mentésirányító utasítására használhat.",
      },
      {
        id: "c",
        text: "Fontos, hogy a segélynyújtók figyeljenek az AED hangutasításaira és azokra azonnal reagáljanak (különösen fontos a mellkaskompresszió újrakezdése).",
      },
      {
        id: "d",
        text: "Az AED hangutasításait csak akkor kell figyelembe venni, ha az újraélesztést végző tud rá figyelni.",
      },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "vitalis-170",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alacsony vércukorszint jellemző tüneteit! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "kiszáradt száj" },
      { id: "b", text: "émelygő éhségérzet" },
      { id: "c", text: "szomjúság érzet" },
      { id: "d", text: "sápadtság, hideg verejtékezés" },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "vitalis-171",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki az alacsony vércukorszint jellemző tüneteit! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "szomjúság érzet" },
      { id: "b", text: "remegés" },
      { id: "c", text: "gyakori vizelés" },
      { id: "d", text: "szédülés" },
    ],
    correctOptionIds: ["b", "d"],
  },
  {
    id: "vitalis-175",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki, hogy az égett területek felmérésére szolgáló 9-es szabály szerint melyek felelnek meg 9%-nak felnőttek esetén! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "a fej" },
      { id: "b", text: "a gáttájék" },
      { id: "c", text: "egy felső végtag" },
      { id: "d", text: "a mellkas" },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "vitalis-199",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki az egészségügyi katasztrófahelyzetre vonatkozó helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "az ellátandók igényei és az ellátók kapacitási képességei között várhatóan tartós, nagyfokú aránytalanság áll fenn",
      },
      {
        id: "b",
        text: "az ellátók kapacitási képességei arányosak az ellátandók igényeivel",
      },
      {
        id: "c",
        text: "az esemény kiterjedése miatt rendkívüli erőforrások mozgósítását igényli",
      },
      { id: "d", text: "az áldozatok száma csekély, de a sérüléseik súlyosak" },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "vitalis-200",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki az egészségügyi katasztrófahelyzetre vonatkozó helyes megállapításokat! (Több válasz is lehetséges!)",
    options: [
      {
        id: "a",
        text: "az ellátandók igényei és az ellátók kapacitási képességei között várhatóan tartós, nagyfokú aránytalanság áll fenn",
      },
      {
        id: "b",
        text: "az ellátók kapacitási képességei arányosak az ellátandók igényeivel",
      },
      {
        id: "c",
        text: "az áldozatok száma, elhelyezkedése, a sérüléseik típusa vagy súlyossága miatt rendkívüli erőforrások mozgósítását igényli",
      },
      { id: "d", text: "az áldozatok száma csekély, de a sérüléseik súlyosak" },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "vitalis-201",
    topicId: "vitalis",
    type: "multiple_choice",
    prompt:
      "Válassza ki a feltehetően tömeges eseményt jelentő eseteket! (Több válasz is lehetséges!)",
    options: [
      { id: "a", text: "öt gépkocsi ütközött össze" },
      { id: "b", text: "motoros kerékpárossal ütközött" },
      { id: "c", text: "turistabusz szakadékba zuhan" },
      { id: "d", text: "gyalogosgázolás" },
    ],
    correctOptionIds: ["a", "c"],
  },
  {
    id: "vitalis-005",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a fogalmakat jelentésükkel!",
    pairs: [
      {
        id: "a",
        left: "Szubjektív tünet",
        right: "A panaszt csak a beteg észleli.",
      },
      {
        id: "b",
        left: "Objektív tünet",
        right:
          "A megfigyelést végző is észlelni tudja, akár megfigyelés, akár vizsgálat útján.",
      },
      {
        id: "c",
        left: "Szindróma",
        right: "A meghatározott kórképekre jellemző tünetek együttese.",
      },
    ],
  },
  {
    id: "vitalis-010",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a fogalmakat jelentésükkel!",
    pairs: [
      {
        id: "a",
        left: "tünetszegény a betegség",
        right:
          "A betegség nem okoz jellemző szubjektív, vagy objektív tüneteket.",
      },
      {
        id: "b",
        left: "atípusos tünetek",
        right:
          "A betegség nem a megszokott tünetekkel, hanem azoktól részben, vagy egészben eltérő módon jelentkezik.",
      },
      {
        id: "c",
        left: "tünetmentesség",
        right:
          "Előfordulhat, hogy a betegség egy egész élet folyamán nem okoz panaszt.",
      },
    ],
  },
  {
    id: "vitalis-014",
    topicId: "vitalis",
    type: "matching",
    prompt:
      "Csoportosítsa a felsoroltakat aszerint, hogy milyen módon érzékeljük azokat!",
    pairs: [
      {
        id: "a",
        left: "vizelet színe",
        right: "látás",
      },
      {
        id: "b",
        left: "köhögés",
        right: "hallás",
      },
    ],
  },
  {
    id: "vitalis-021",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a szakkifejezéseket a jelentésükkel!",
    pairs: [
      {
        id: "a",
        left: "cyanosis",
        right:
          "szederjesség (a bőr/nyálkahártya/körömágy kékesvörös elszíneződése a hypoxia következtében)",
      },
      {
        id: "b",
        left: "oedema",
        right: "vizenyő",
      },
      {
        id: "c",
        left: "ascites",
        right: "hasüregben felszaporodó folyadékgyülem",
      },
    ],
  },
  {
    id: "vitalis-023",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a fájdalom jellegéhez a meghatározásukat!",
    pairs: [
      {
        id: "a",
        left: "szomatikus",
        right: "egy-egy sérülés, heveny betegség tünete",
      },
      {
        id: "b",
        left: "zsigeri, vagy visceralis",
        right: "belső szervek betegségét kíséri",
      },
    ],
  },
  {
    id: "vitalis-024",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a fájdalom jellegéhez a meghatározásukat!",
    pairs: [
      {
        id: "a",
        left: "neuropátiás",
        right: "az érző tevékenység hibájára vezethető vissza",
      },
      {
        id: "b",
        left: "neuralgiás",
        right: "a környéki ideg ellátási területén jelentkezik",
      },
    ],
  },
  {
    id: "vitalis-026",
    topicId: "vitalis",
    type: "matching",
    prompt:
      "Párosítsa az alábbi betegségekhez a rájuk jellemző fájdalomtípusokat!",
    pairs: [
      {
        id: "a",
        left: "epeköves roham",
        right:
          "A jobb bordaív alatt kezdődik, a jobb lapocka és a jobb váll irányába sugárzó erős fájdalom.",
      },
      {
        id: "b",
        left: "veseköves roham",
        right:
          "Igen erős, a deréktájról induló fájdalom, az alhasba és a combok belső felszíne felé sugárzik.",
      },
    ],
  },
  {
    id: "vitalis-027",
    topicId: "vitalis",
    type: "matching",
    prompt:
      "Párosítsa az alábbi betegségekhez a rájuk jellemző fájdalomtípusokat!",
    pairs: [
      {
        id: "a",
        left: "angina pectoris",
        right:
          "Hirtelen heves fájdalom a szegycsont mögött, a bal váll és a nyak bal oldalába sugárzik.",
      },
      {
        id: "b",
        left: "hashártyagyulladás",
        right:
          "Igen erős, a teljes hasra kiterjedő fájdalom, a has kemény, feszes.",
      },
    ],
  },
  {
    id: "vitalis-028",
    topicId: "vitalis",
    type: "matching",
    prompt:
      "Párosítsa az alábbi jellegzetes fájdalmakat a fájdalmat kiváltó kórképekkel!",
    pairs: [
      {
        id: "a",
        left: "nyombélfekély",
        right: "Erős gyomortáji fájdalom, amely éhgyomorra jelentkezik.",
      },
      {
        id: "b",
        left: "vakbélgyulladás",
        right:
          "Általában a gyomortájon kezdődő, majd típusos esetben a jobb alhasra lokalizálódó fájdalom, amelyet gyakran hányás és láz kísér.",
      },
      {
        id: "c",
        left: "tüdőembólia",
        right:
          "Hirtelen jelentkező, szúró, légzésre fokozódó mellkasi fájdalom, amelyet felületes légzés, dyspnoe, haemoptoe kísér.",
      },
    ],
  },
  {
    id: "vitalis-029",
    topicId: "vitalis",
    type: "matching",
    prompt:
      "Párosítsa az alábbi jellegzetes fájdalmakat a fájdalmat kiváltó kórképekkel!",
    pairs: [
      {
        id: "a",
        left: "szívroham",
        right: "Szegycsont mögött jelentkező, tűrhetetlen fájdalom.",
      },
      {
        id: "b",
        left: "gyomorfekély",
        right: "Éhgyomorra jelentkező fájdalom, hányinger kísérheti.",
      },
      {
        id: "c",
        left: "méhen kívüli terhesség",
        right:
          "Hasi fájdalom, amit hányás, hányinger, vérnyomásesés, eszméletvesztés kísérhet.",
      },
    ],
  },
  {
    id: "vitalis-030",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa az alábbi tudatállapotokat jellemzőikkel!",
    pairs: [
      {
        id: "a",
        left: "apátia",
        right:
          "A beteg mozdulatlanul fekszik, a feltett kérdésekre válaszol, de lassan. A környezetével szemben érdektelen.",
      },
      {
        id: "b",
        left: "eufória",
        right:
          "Az addig elesett, súlyos beteg hirtelen jókedvűvé, mozgékonnyá válik.",
      },
    ],
  },
  {
    id: "vitalis-031",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa az alábbi tudatállapotokat jellemzőikkel!",
    pairs: [
      {
        id: "a",
        left: "delírium",
        right:
          "A beteg nyugtalan, kiabál, kóborol, hallucinál. Magas láz, központi idegrendszeri izgalom következménye lehet.",
      },
      {
        id: "b",
        left: "térbeli és időbeli tájékozatlanság",
        right:
          "Főleg agyi keringési elégtelenségben szenvedő betegnél fordul elő. A beteg nem tudja, hol van, nem tudja megmondani a hónapot, napot.",
      },
    ],
  },
  {
    id: "vitalis-032",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a felsorolt kóros tudatállapotokat jellemzőikkel!",
    pairs: [
      {
        id: "a",
        left: "somnolentia",
        right:
          "A beteg aluszékony, szinte az egész idejét félálomban tölti, de felébreszthető.",
      },
      {
        id: "b",
        left: "sopor",
        right:
          "Igen mély alvás, amelyből a beteg csak erős ingerekkel ébreszthető fel.",
      },
      {
        id: "c",
        left: "coma",
        right:
          "Mély kábultság, a beteg semmiféle ingerrel nem ébreszthető fel.",
      },
    ],
  },
  {
    id: "vitalis-037",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a kifejezéseket a rájuk jellemző állításokkal!",
    pairs: [
      {
        id: "a",
        left: "normál székelés",
        right: "naponta egyszer, maximum kétszer ürülő széklet",
      },
      {
        id: "b",
        left: "székrekedés",
        right: "2-3 napnál ritkább székletürítés",
      },
    ],
  },
  {
    id: "vitalis-038",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a kifejezéseket a rájuk jellemző állításokkal!",
    pairs: [
      {
        id: "a",
        left: "hasmenés",
        right: "naponta többszöri, híg széklet",
      },
      {
        id: "b",
        left: "széklet beékelődés",
        right: "megkeményedett székletgyülem, ami beékelődött a végbélben",
      },
    ],
  },
  {
    id: "vitalis-039",
    topicId: "vitalis",
    type: "matching",
    prompt:
      "Párosítsa az alábbi jellegzetes székletelváltozásokat az azok hátterében húzódó kórképekkel!",
    pairs: [
      {
        id: "a",
        left: "világos, agyagszerű (acholiás) széklet",
        right: "epeút-elzáródás",
      },
      {
        id: "b",
        left: "szurokszéklet",
        right: "nyelőcső- vagy gyomorvérzés",
      },
      {
        id: "c",
        left: "fekete, formált széklet",
        right: "vastartalmú gyógyszerek alkalmazása",
      },
    ],
  },
  {
    id: "vitalis-040",
    topicId: "vitalis",
    type: "matching",
    prompt:
      "Párosítsa az alábbi jellegzetes székletelváltozásokat az azok hátterében húzódó kórképekkel!",
    pairs: [
      {
        id: "a",
        left: "véres, hasmenéses széklet",
        right: "fekélyes vastagbélgyulladás",
      },
      {
        id: "b",
        left: "vércsík a széklet felszínén",
        right: "aranyeresség",
      },
    ],
  },
  {
    id: "vitalis-041",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a véres széklet kiváltó okait azok főbb jellemzőivel!",
    pairs: [
      {
        id: "a",
        left: "fekete széklet (melaena)",
        right: "a széklet emésztett vért tartalmaz",
      },
      {
        id: "b",
        left: "széklet felülete véres",
        right: "a vér az aranyeres csomók megrepedéséből származik",
      },
    ],
  },
  {
    id: "vitalis-042",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a véres széklet kiváltó okait azok főbb jellemzőivel!",
    pairs: [
      {
        id: "a",
        left: "okkult vérzés",
        right:
          "a vér szabad szemmel nem látható, csak laboratóriumi vizsgálattal mutatható ki",
      },
      {
        id: "b",
        left: "friss, vagy alvadékos vér",
        right: "a vér az alsóbb béltraktusból származik",
      },
    ],
  },
  {
    id: "vitalis-043",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa az alábbi állapotokat a széklet állagával!",
    pairs: [
      {
        id: "a",
        left: "székrekedés",
        right: "kemény, bogyós széklet",
      },
      {
        id: "b",
        left: "felszívódási zavar",
        right: "pépes széklet",
      },
    ],
  },
  {
    id: "vitalis-044",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa az alábbi állapotokat a széklet állagával!",
    pairs: [
      {
        id: "a",
        left: "hasmenés",
        right: "híg állagú széklet",
      },
      {
        id: "b",
        left: "nem fertőzéses bélgyulladás",
        right: "véres-nyákos széklet",
      },
    ],
  },
  {
    id: "vitalis-051",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a tüneteket jelentésükkel!",
    pairs: [
      {
        id: "a",
        left: "bő vizelés",
        right: "A vizelet napi mennyisége meghaladja a 2500 ml-t.",
      },
      {
        id: "b",
        left: "a vizelet mennyiségének csökkenése",
        right: "A vizelet napi mennyisége 100-400 ml között mozog.",
      },
    ],
  },
  {
    id: "vitalis-052",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a tüneteket jelentésükkel!",
    pairs: [
      {
        id: "a",
        left: "a vizeletkiválasztás szünetelése",
        right: "A napi vizelet mennyisége 100 ml alatt van.",
      },
      {
        id: "b",
        left: "éjszakai vizeletürítés",
        right: "Nagy mennyiségű, gyakori éjszakai vizeletürítés.",
      },
    ],
  },
  {
    id: "vitalis-055",
    topicId: "vitalis",
    type: "matching",
    prompt:
      "Párosítsa a vizelet színének elváltozásaihoz a kórképeket/kórállapotokat!",
    pairs: [
      {
        id: "a",
        left: "sárgásbarna színű",
        right: "májbetegség",
      },
      {
        id: "b",
        left: "véres",
        right: "veséből és a húgyutakból származó vérzés",
      },
      {
        id: "c",
        left: "fehéres-sárga színű",
        right: "gennyvizelés",
      },
    ],
  },
  {
    id: "vitalis-057",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a köhögés formáihoz jellemzőiket!",
    pairs: [
      {
        id: "a",
        left: "produktív köhögés",
        right: "szörcsölő hang kísérheti",
      },
      {
        id: "b",
        left: "inproduktív köhögés",
        right: "száraz köhögés",
      },
      {
        id: "c",
        left: "ugató jellegű köhögés",
        right: "be- és kilégzés nehezített",
      },
    ],
  },
  {
    id: "vitalis-058",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a köpeteket jellemzőikkel!",
    pairs: [
      {
        id: "a",
        left: "nyálkás köpet",
        right: "híg, színtelen nyálka",
      },
      {
        id: "b",
        left: "nyálkás-gennyes köpet",
        right: "a nyálkán kívül színes, átlátszatlan gennyet is tartalmaz",
      },
      {
        id: "c",
        left: "véres köpet",
        right: "világospiros, habos vagy alvadt vércsomókat tartalmaz",
      },
    ],
  },
  {
    id: "vitalis-062",
    topicId: "vitalis",
    type: "matching",
    prompt:
      "Párosítsa a testváladékokat a vizsgálatra küldésükre használt eszközökkel!",
    pairs: [
      {
        id: "a",
        left: "széklet",
        right: "F-tartály",
      },
      {
        id: "b",
        left: "hüvelyváladék",
        right: "Tárgylemez",
      },
      {
        id: "c",
        left: "köpet",
        right: "Dy-tartály",
      },
      {
        id: "d",
        left: "liquor",
        right: "steril kémcső",
      },
    ],
  },
  {
    id: "vitalis-076",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a láztípusok magyar és latin megnevezéseit!",
    pairs: [
      {
        id: "a",
        left: "állandó láz",
        right: "febris continua",
      },
      {
        id: "b",
        left: "ingadozó láz",
        right: "febris remittens",
      },
      {
        id: "c",
        left: "ugráló vagy változó láz",
        right: "febris intermittens",
      },
      {
        id: "d",
        left: "váltóláz",
        right: "febris undulans",
      },
    ],
  },
  {
    id: "vitalis-078",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a szakkifejezéseket a jelentésükkel!",
    pairs: [
      {
        id: "a",
        left: "pulsus filiformis",
        right: "szapora, elnyomható pulzus",
      },
      {
        id: "b",
        left: "hyperpyrexia",
        right: "igen magas láz",
      },
      {
        id: "c",
        left: "subfebrilitas",
        right: "hőemelkedés",
      },
    ],
  },
  {
    id: "vitalis-079",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a szakkifejezéseket a jelentésükkel!",
    pairs: [
      {
        id: "a",
        left: "bradypnoe",
        right: "ritmusos, alacsony légzésszám",
      },
      {
        id: "b",
        left: "hyperventillatio",
        right: "ritmusos, szapora, erőltetett, mély légzés",
      },
      {
        id: "c",
        left: "tachypnoe",
        right: "ritmusos, szapora, felületes légzés",
      },
    ],
  },
  {
    id: "vitalis-098",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a fogalmakat a nekik megfelelő jellemzőkkel!",
    pairs: [
      {
        id: "a",
        left: "bradypnoe",
        right: "alacsony légzésszám",
      },
      {
        id: "b",
        left: "tachypnoe",
        right: "magas légzésszám",
      },
      {
        id: "c",
        left: "hiperventilláció",
        right: "szapora légvétel kis volumennel",
      },
    ],
  },
  {
    id: "vitalis-099",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a fogalmakat a nekik megfelelő jellemzőkkel!",
    pairs: [
      {
        id: "a",
        left: "dyspnoe",
        right: "nehézlégzés",
      },
      {
        id: "b",
        left: "Kussmaul-légzés",
        right: "nagy frekvenciával nagy volumenű légvétel",
      },
    ],
  },
  {
    id: "vitalis-100",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a betegségekhez a rájuk jellemző lehelet szagát!",
    pairs: [
      {
        id: "a",
        left: "cukorbetegség",
        right: "acetonszagú lehelet",
      },
      {
        id: "b",
        left: "veseelégtelenség",
        right: "vizeletszagú lehelet",
      },
      {
        id: "c",
        left: "májkóma",
        right: "májszagú lehelet",
      },
    ],
  },
  {
    id: "vitalis-108",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a kémiai fertőtlenítés módjaihoz leírásukat!",
    pairs: [
      {
        id: "a",
        left: "lemosás",
        right: "a módszert az egybefüggő vízálló felületeken alkalmazzuk",
      },
      {
        id: "b",
        left: "permetezés",
        right:
          "a fertőtlenítő oldatot mechanikus porlasztással juttatjuk a felületre",
      },
      {
        id: "c",
        left: "átkefélés",
        right: "ágybetétek, ruházatok fertőtlenítésére használjuk",
      },
      {
        id: "d",
        left: "beáztatás",
        right: "az eszközt, anyagot a fertőtlenítőszer oldatába helyezzük",
      },
    ],
  },
  {
    id: "vitalis-125",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a sérülést a leírásával!",
    pairs: [
      {
        id: "a",
        left: "ízületi ficam",
        right:
          "Az ízületet alkotó csontvégek erőhatás következtében elmozdulnak, majd kóros helyzetben rögzülnek.",
      },
      {
        id: "b",
        left: "ízületi rándulás",
        right:
          "Az ízületet alkotó csontvégek erőbehatásra eltávolodnak egymástól, de az erőbehatás megszűnésekor visszatérnek eredeti helyzetükbe.",
      },
    ],
  },
  {
    id: "vitalis-140",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa az egyes sebtípusokat a jellemzőikkel!",
    pairs: [
      {
        id: "a",
        left: "Zúzott seb",
        right: "Zegzugos, tátongó sebszél, sokszor szennyezett.",
      },
      {
        id: "b",
        left: "Szúrt seb",
        right:
          "A szúrcsatorna mélysége feltárás nélkül nem állapítható meg, a sérülés lehet behatoló és áthatoló.",
      },
      {
        id: "c",
        left: "Szakított seb",
        right:
          "Egyenetlen, nagy tátongó sebszélek, bőséges vérzés, csontok, idegek is sérülhetnek.",
      },
    ],
  },
  {
    id: "vitalis-141",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa az egyes sebtípusokat a jellemzőikkel!",
    pairs: [
      {
        id: "a",
        left: "Harapott seb",
        right:
          "Látható fognyomok, roncsolt sebszélek, esetleg lágyrész hiány, mélysége változó.",
      },
      {
        id: "b",
        left: "Lőtt seb",
        right:
          "Lehet behatoló, vagy áthatoló, bemeneti nyílás mindig van, kimeneti nyílás, ha van mindig nagyobb.",
      },
      {
        id: "c",
        left: "Horzsolt seb",
        right: "A bőr hámrétege sérül.",
      },
    ],
  },
  {
    id: "vitalis-142",
    topicId: "vitalis",
    type: "matching",
    prompt: "Írja az égés fokozataihoz a rájuk jellemző tünetek sorszámát!",
    pairs: [
      {
        id: "a",
        left: "I. fokú égés",
        right: "Pár nap alatt spontán gyógyul.",
      },
      {
        id: "b",
        left: "II. fokú égés",
        right: "Savóval teli bullák jelennek meg.",
      },
      {
        id: "c",
        left: "III. fokú égés",
        right: "Folyamatos váladékozás.",
      },
      {
        id: "d",
        left: "IV. fokú égés",
        right: "Elszenesedés.",
      },
    ],
  },
  {
    id: "vitalis-143",
    topicId: "vitalis",
    type: "matching",
    prompt: "Írja az égés fokozataihoz a rájuk jellemző tünetek sorszámát!",
    pairs: [
      {
        id: "a",
        left: "I. fokú égés",
        right: "A bőr nyálkahártyája kipirult, duzzadt és fájdalmas.",
      },
      {
        id: "b",
        left: "II. fokú égés",
        right: "Lehet egy nagyobb, de akár több bulla is.",
      },
      {
        id: "c",
        left: "III. fokú égés",
        right: "A bőr színe piszkosszürke.",
      },
      {
        id: "d",
        left: "IV. fokú égés",
        right: "Mélyebb szövetek zsugorodnak (csont, izom).",
      },
    ],
  },
  {
    id: "vitalis-149",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a fogalmat a hozzá tartozó meghatározással!",
    pairs: [
      {
        id: "a",
        left: "Rautek-féle műfogás",
        right:
          "Eszméletlen, mozgásképtelen sérült biztonságos kimentésére alkalmazzuk.",
      },
      {
        id: "b",
        left: "tálcafogás",
        right:
          "Súlyos sérülés gyanúja esetén alkalmazzuk, ha a sérültet el kell távolítani a veszélyzónából.",
      },
      {
        id: "c",
        left: "stabil oldalfekvés",
        right:
          "Célja a légutak szabaddá tételével és szabadon tartásával a sérültet megvédeni a fulladástól.",
      },
    ],
  },
  {
    id: "vitalis-150",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a fogalmat a hozzá tartozó meghatározással!",
    pairs: [
      {
        id: "a",
        left: "ALS",
        right: "Eszközös, emelt szintű újraélesztés.",
      },
      {
        id: "b",
        left: "félig ülő helyzet",
        right: "A felsőtestet 40-60°-ra kell megemelni.",
      },
      {
        id: "c",
        left: "AED",
        right: "Külső automata defibrillátor.",
      },
    ],
  },
  {
    id: "vitalis-158",
    topicId: "vitalis",
    type: "matching",
    prompt: "Csoportosítsa az alábbi jellemzőket az egyes vérzés típusokhoz!",
    pairs: [
      {
        id: "a",
        left: "Artériás vérzés",
        right:
          "Élénkpiros, a szív összehúzódásának megfelelően pulzálva, spriccelve ürül.",
      },
      {
        id: "b",
        left: "Vénás vérzés",
        right: "Vörös (sötétvörös), egyenletesen folyó vérzés.",
      },
      {
        id: "c",
        left: "Kapilláris vérzés",
        right:
          "Speciális vérzéscsillapításra nincs szükség, a sebellátás elegendő.",
      },
    ],
  },
  {
    id: "vitalis-159",
    topicId: "vitalis",
    type: "matching",
    prompt: "Csoportosítsa az alábbi jellemzőket az egyes vérzés típusokhoz!",
    pairs: [
      {
        id: "a",
        left: "Artériás vérzés",
        right:
          "Általában mélyebben fekvő ér sérül, melyből nagy nyomással ürül a vér.",
      },
      {
        id: "b",
        left: "Vénás vérzés",
        right: "Felszínesen futó ér sérülése okozza, lehet erős vérzés is.",
      },
      {
        id: "c",
        left: "Kapilláris vérzés",
        right: "Szivárgó, enyhe vérzés.",
      },
    ],
  },
  {
    id: "vitalis-160",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa az égési sérülések jellemzőit fokozataikkal!",
    pairs: [
      {
        id: "a",
        left: "Az összes bőrréteg átégett, és az égés elérte a mélyebben fekvő szöveteket.",
        right: "Harmadfokú",
      },
      {
        id: "b",
        left: "A sérülés csak a bőr felső rétegét érinti, ilyen sérülések gyakran napozás vagy túlzásba vitt szoláriumozás esetén is keletkezhetnek.",
        right: "Elsőfokú",
      },
      {
        id: "c",
        left: "A szövetek elszenesednek, és az égés egészen az izmokig, idegekig és csontokig terjed.",
        right: "Negyedfokú",
      },
      {
        id: "d",
        left: "Erős fájdalommal jár, duzzanatok, hólyagok jelenhetnek meg a bőrön. Az égés a bőr második rétegét is érinti.",
        right: "Másodfokú",
      },
    ],
  },
  {
    id: "vitalis-161",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa az égési sérülések jellemzőit fokozataikkal!",
    pairs: [
      {
        id: "a",
        left: "Erős fájdalommal jár, duzzanatok, hólyagok jelenhetnek meg a bőrön. Az égés a bőr második rétegét is érinti.",
        right: "Másodfokú",
      },
      {
        id: "b",
        left: "A leggyakoribb és legenyhébb égési sérülés. Az égett területen a bőr piros és rendkívül érzékeny.",
        right: "Elsőfokú",
      },
      {
        id: "c",
        left: "A hólyagok megnyíltak, az égési felszín piszkosszürke vagy halvány, viaszos hatású, maga a seb sok esetben nem fáj az idegek elhalása következtében.",
        right: "Harmadfokú",
      },
    ],
  },
  {
    id: "vitalis-162",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a sebtípust a hozzá illő leírással!",
    pairs: [
      {
        id: "a",
        left: "Vágott seb",
        right:
          "Éles eszköz a testre merőlegesen hatva okozza a sebet, melynek szélei egyenesek, minimális környéki szövetroncsolódás jellemzi. Általában erős vérzés kíséri.",
      },
      {
        id: "b",
        left: "Horzsolt seb",
        right:
          "Az egyik leggyakoribb sebtípus, melyet a bőr felületével párhuzamos, mechanikai hatás okoz.",
      },
    ],
  },
  {
    id: "vitalis-168",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa az alábbi sérüléseket az alkalmazható kötéstípussal!",
    pairs: [
      {
        id: "a",
        left: "erős vérzés az alkaron",
        right: "nyomókötés",
      },
      {
        id: "b",
        left: "orrvérzés",
        right: "parittyakötés",
      },
      {
        id: "c",
        left: "a hajas fejbőr sérülése",
        right: "sapkakötés",
      },
      {
        id: "d",
        left: "horzsolás, gyenge vérzés a felkaron",
        right: "fedőkötés",
      },
    ],
  },
  {
    id: "vitalis-194",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a megjelölt fektetési módokat az indikációval!",
    pairs: [
      {
        id: "a",
        left: "félig ülő helyzet",
        right: "mellkassérült",
      },
      {
        id: "b",
        left: "hanyatt fekvés, enyhén megemelt felsőtest",
        right: "eszméletén lévő fejsérült",
      },
      {
        id: "c",
        left: "stabil oldalfektetés",
        right: "eszméletlen, lélegző beteg",
      },
    ],
  },
  {
    id: "vitalis-195",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a megjelölt fektetési módokat az indikációval!",
    pairs: [
      {
        id: "a",
        left: "hanyatt fekvés térdben felhúzott alsó végtagokkal, enyhén emelt fejjel",
        right: "hasi sérült",
      },
      {
        id: "b",
        left: "talált helyzetben rögzítés",
        right: "súlyos sérült",
      },
    ],
  },
  {
    id: "vitalis-204",
    topicId: "vitalis",
    type: "matching",
    prompt: "Párosítsa a katasztrófákat hely szerint!",
    pairs: [
      {
        id: "a",
        left: "gázszivárgás egy 10 emeletes épületben",
        right: "helyi",
      },
      {
        id: "b",
        left: "vörösiszap árvíz",
        right: "térségi",
      },
      {
        id: "c",
        left: "dunai árvíz",
        right: "országos",
      },
      {
        id: "d",
        left: "a Földközi tengeren két tartályhajó összeütközik",
        right: "nemzetközi",
      },
    ],
  },
  {
    id: "vitalis-003",
    topicId: "vitalis",
    type: "grouping",
    prompt: "Csoportosítsa a felsoroltakat a kommunikáció formái szerint!",
    groups: [
      { id: "direkt", text: "direkt kommunikáció" },
      { id: "indirekt", text: "indirekt kommunikáció" },
    ],
    items: [
      {
        id: "betegtol",
        text: "betegtől származó információ",
        correctGroupId: "direkt",
      },
      {
        id: "korlap",
        text: "kórlap",
        correctGroupId: "indirekt",
      },
      {
        id: "zarojelentes",
        text: "zárójelentés",
        correctGroupId: "indirekt",
      },
      {
        id: "dolgozotol",
        text: "egészségügyi dolgozótól származó információ",
        correctGroupId: "direkt",
      },
    ],
  },
  {
    id: "vitalis-013",
    topicId: "vitalis",
    type: "grouping",
    prompt:
      "Csoportosítsa a felsoroltakat aszerint, hogy milyen módon érzékeljük azokat!",
    groups: [
      { id: "latas", text: "látás" },
      { id: "hallas", text: "hallás" },
    ],
    items: [
      {
        id: "borszin",
        text: "bőrszín",
        correctGroupId: "latas",
      },
      {
        id: "jaras",
        text: "járás",
        correctGroupId: "latas",
      },
      {
        id: "beszednehezseg",
        text: "beszédnehézség",
        correctGroupId: "hallas",
      },
    ],
  },
  {
    id: "vitalis-018",
    topicId: "vitalis",
    type: "grouping",
    prompt: "Csoportosítsa az alábbi testalkatokat a megadottak szerint!",
    groups: [
      { id: "noi", text: "Jellegzetes női testalkatok" },
      { id: "ferfi", text: "Jellegzetes férfi testalkatok" },
    ],
    items: [
      {
        id: "alma",
        text: "alma",
        correctGroupId: "noi",
      },
      {
        id: "szogletes",
        text: "szögletes",
        correctGroupId: "ferfi",
      },
      {
        id: "haromszog",
        text: "háromszög",
        correctGroupId: "ferfi",
      },
      {
        id: "homokora",
        text: "homokóra",
        correctGroupId: "noi",
      },
    ],
  },
  {
    id: "vitalis-053",
    topicId: "vitalis",
    type: "grouping",
    prompt: "Csoportosítsa a folyadékegyenleg összetevőit!",
    groups: [
      { id: "bevitt", text: "Bevitt folyadék" },
      { id: "uritett", text: "Ürített folyadék" },
    ],
    items: [
      {
        id: "kave",
        text: "kávé",
        correctGroupId: "bevitt",
      },
      {
        id: "gyumolcs",
        text: "gyümölcs",
        correctGroupId: "bevitt",
      },
      {
        id: "hanyas",
        text: "hányás",
        correctGroupId: "uritett",
      },
      {
        id: "sebvaladek",
        text: "sebváladék",
        correctGroupId: "uritett",
      },
    ],
  },
  {
    id: "vitalis-054",
    topicId: "vitalis",
    type: "grouping",
    prompt: "Csoportosítsa a folyadékegyenleg összetevőit!",
    groups: [
      { id: "bevitt", text: "Bevitt folyadék" },
      { id: "uritett", text: "Ürített folyadék" },
    ],
    items: [
      {
        id: "izzadas",
        text: "izzadás",
        correctGroupId: "uritett",
      },
      {
        id: "leves",
        text: "leves",
        correctGroupId: "bevitt",
      },
      {
        id: "hasmenes",
        text: "hasmenés",
        correctGroupId: "uritett",
      },
      {
        id: "fagylalt",
        text: "fagylalt",
        correctGroupId: "bevitt",
      },
    ],
  },
  {
    id: "vitalis-126",
    topicId: "vitalis",
    type: "grouping",
    prompt: "Csoportosítsa a rándulás és a ficam felsorolt tüneteit!",
    groups: [
      { id: "randulas", text: "Rándulás tünetei" },
      { id: "ficam", text: "Ficam tünetei" },
    ],
    items: [
      {
        id: "alakvaltozas",
        text: "alakváltozás",
        correctGroupId: "ficam",
      },
      {
        id: "duzzanat",
        text: "duzzanat",
        correctGroupId: "randulas",
      },
      {
        id: "elszinezodes",
        text: "kékes elszíneződés a bőrön",
        correctGroupId: "randulas",
      },
    ],
  },
  {
    id: "vitalis-127",
    topicId: "vitalis",
    type: "grouping",
    prompt: "Csoportosítsa a rándulás és a ficam felsorolt tüneteit!",
    groups: [
      { id: "randulas", text: "Rándulás tünetei" },
      { id: "ficam", text: "Ficam tünetei" },
    ],
    items: [
      {
        id: "mozgaskepetlenseg",
        text: "az ízület működése megszűnik/mozgásképtelenség",
        correctGroupId: "ficam",
      },
      {
        id: "korlatozott-mozgas",
        text: "az ízület mozgása korlátozott",
        correctGroupId: "randulas",
      },
      {
        id: "izuleti-fej",
        text: "az ízületi fej az ízületen kívül tapintható",
        correctGroupId: "ficam",
      },
    ],
  },
  {
    id: "vitalis-138",
    topicId: "vitalis",
    type: "grouping",
    prompt:
      "Csoportosítsa a ficamra illetve a rándulásra vonatkozó leírásokat!",
    groups: [
      { id: "ficam", text: "Ficam" },
      { id: "randulas", text: "Rándulás" },
    ],
    items: [
      {
        id: "visszateres",
        text: "Erőbehatás megszűnése után az ízületi fej visszatér az ízületi árokba.",
        correctGroupId: "randulas",
      },
      {
        id: "sulyosabb",
        text: "Az ízületi sérülések súlyosabb formája.",
        correctGroupId: "ficam",
      },
      {
        id: "fajdalom",
        text: "A fájdalom a behatás pillanatában rendkívül erős és folyamatosan fennáll.",
        correctGroupId: "ficam",
      },
    ],
  },
  {
    id: "vitalis-139",
    topicId: "vitalis",
    type: "grouping",
    prompt:
      "Csoportosítsa a ficamra illetve a rándulásra vonatkozó leírásokat!",
    groups: [
      { id: "ficam", text: "Ficam" },
      { id: "randulas", text: "Rándulás" },
    ],
    items: [
      {
        id: "fajdalom",
        text: "A behatás pillanatában jelentkező fájdalom átmenetileg csökken, majd ismét visszatér.",
        correctGroupId: "randulas",
      },
      {
        id: "rogzites",
        text: "A feszülő ízületi tok rendellenes helyzetben rögzíti a végtagot.",
        correctGroupId: "ficam",
      },
      {
        id: "duzzanat",
        text: "Néhány óra alatt az ízület erősen megduzzad, lilásan elszíneződik.",
        correctGroupId: "randulas",
      },
    ],
  },
  {
    id: "vitalis-202",
    topicId: "vitalis",
    type: "grouping",
    prompt: "Csoportosítsa a katasztrófákat eredetük szerint!",
    groups: [
      { id: "termeszeti", text: "Természeti eredetű" },
      { id: "civilizacios", text: "Civilizációs eredetű" },
    ],
    items: [
      {
        id: "haboru",
        text: "háború",
        correctGroupId: "civilizacios",
      },
      {
        id: "foldcsuszamlas",
        text: "földcsuszamlás",
        correctGroupId: "termeszeti",
      },
      {
        id: "arviz",
        text: "árvíz",
        correctGroupId: "termeszeti",
      },
    ],
  },
  {
    id: "vitalis-203",
    topicId: "vitalis",
    type: "grouping",
    prompt: "Csoportosítsa a katasztrófákat eredetük szerint!",
    groups: [
      { id: "termeszeti", text: "Természeti eredetű" },
      { id: "civilizacios", text: "Civilizációs eredetű" },
    ],
    items: [
      {
        id: "jarvany",
        text: "járvány",
        correctGroupId: "civilizacios",
      },
      {
        id: "tajfun",
        text: "tájfun",
        correctGroupId: "termeszeti",
      },
      {
        id: "sugarbaleset",
        text: "sugárbaleset",
        correctGroupId: "civilizacios",
      },
      {
        id: "vorosiszap",
        text: "vörösiszap árvíz",
        correctGroupId: "civilizacios",
      },
    ],
  },
  {
    id: "vitalis-004",
    topicId: "vitalis",
    type: "fill_in",
    prompt: "Egészítse ki a tünetek fajtáival kapcsolatos alábbi mondatokat!",
    statements: [
      {
        id: "szubjektiv",
        parts: [
          "Szubjektív tünetek melyek szemmel ",
          {
            id: "valasz",
            label: "Szubjektív tünetek melyek szemmel",
            options: [
              { id: "lathatok", text: "láthatók" },
              { id: "nem-lathatok", text: "nem láthatók" },
              { id: "merhetok", text: "mérhetők" },
            ],
            correctOptionId: "nem-lathatok",
          },
          ".",
        ],
      },
      {
        id: "objektiv",
        parts: [
          "Objektív tünetek a ",
          {
            id: "valasz",
            label: "Objektív tünetek a",
            options: [
              { id: "nem-lathato", text: "nem látható" },
              { id: "merheto", text: "mérhető" },
              { id: "nem-erzekelheto", text: "nem érzékelhető" },
            ],
            correctOptionId: "merheto",
          },
          " tünetek.",
        ],
      },
    ],
  },
  {
    id: "vitalis-009",
    topicId: "vitalis",
    type: "fill_in",
    prompt: "Válassza ki az alábbi szakkifejezések magyar jelentését!",
    statements: [
      {
        id: "symptoma",
        parts: [
          "symptoma: ",
          {
            id: "valasz",
            label: "symptoma:",
            options: [
              { id: "tunet", text: "tünet" },
              { id: "megfigyeles", text: "megfigyelés" },
              { id: "betegseg", text: "betegség" },
            ],
            correctOptionId: "tunet",
          },
          "",
        ],
      },
      {
        id: "syndroma",
        parts: [
          "syndroma: ",
          {
            id: "valasz",
            label: "syndroma:",
            options: [
              { id: "betegseg", text: "betegség" },
              { id: "tunetegyuttes", text: "tünetegyüttes" },
              { id: "megfigyeles", text: "megfigyelés" },
            ],
            correctOptionId: "tunetegyuttes",
          },
          "",
        ],
      },
    ],
  },
  {
    id: "vitalis-019",
    topicId: "vitalis",
    type: "fill_in",
    prompt: "Egészítse ki a bőrrel kapcsolatos alábbi mondatokat!",
    statements: [
      {
        id: "borfelulet",
        parts: [
          "A felnőtt ember bőrfelülete kb. ",
          {
            id: "valasz",
            label: "A felnőtt ember bőrfelülete kb.",
            options: [
              { id: "0-3-0-5", text: "0.3-0.5" },
              { id: "1-5-1-8", text: "1,5-1,8" },
              { id: "4-2-4-5", text: "4,2-4,5" },
            ],
            correctOptionId: "1-5-1-8",
          },
          " m², feladata a szervezet külső hatásoktól való védelme.",
        ],
      },
      {
        id: "felham",
        parts: [
          "A felhám feladata a bőr ",
          {
            id: "valasz",
            label: "A felhám feladata a bőr",
            options: [
              { id: "legalso", text: "legalsó" },
              { id: "kozepso", text: "középső" },
              { id: "legfelso", text: "legfelső" },
            ],
            correctOptionId: "legfelso",
          },
          " rétegének fenntartása.",
        ],
      },
    ],
  },
  {
    id: "vitalis-020",
    topicId: "vitalis",
    type: "fill_in",
    prompt: "Egészítse ki a bőrrel kapcsolatos alábbi mondatokat!",
    statements: [
      {
        id: "arnyalat",
        parts: [
          "A bőr árnyalatáért a ",
          {
            id: "valasz",
            label: "A bőr árnyalatáért a",
            options: [
              { id: "melanin", text: "melanin" },
              { id: "bilirubin", text: "bilirubin" },
              { id: "karotinoid", text: "karotinoid" },
            ],
            correctOptionId: "melanin",
          },
          " a felelős.",
        ],
      },
      {
        id: "idoskor",
        parts: [
          "A bőr idős korban is ",
          {
            id: "valasz",
            label: "A bőr idős korban is",
            options: [
              { id: "feszes", text: "feszes" },
              {
                id: "konnyen-rancba-szedheto",
                text: "könnyen ráncba szedhető",
              },
              { id: "rugalmas", text: "rugalmas" },
            ],
            correctOptionId: "konnyen-rancba-szedheto",
          },
          ".",
        ],
      },
    ],
  },
  {
    id: "vitalis-025",
    topicId: "vitalis",
    type: "fill_in",
    prompt:
      "Egészítse ki a Visual Analóg Skála (fájdalomskála) értékeivel az alábbi táblázatot!",
    statements: [
      {
        id: "enyhe",
        parts: [
          "Enyhe fájdalom: ",
          {
            id: "valasz",
            label: "Enyhe fájdalom:",
            options: [
              { id: "0", text: "0" },
              { id: "1-3", text: "1-3" },
              { id: "4-6", text: "4-6" },
              { id: "7-9", text: "7-9" },
              { id: "10", text: "10" },
            ],
            correctOptionId: "1-3",
          },
          ".",
        ],
      },
      {
        id: "kozepes",
        parts: [
          "Közepes fájdalom: ",
          {
            id: "valasz",
            label: "Közepes fájdalom:",
            options: [
              { id: "0", text: "0" },
              { id: "1-3", text: "1-3" },
              { id: "4-6", text: "4-6" },
              { id: "7-9", text: "7-9" },
              { id: "10", text: "10" },
            ],
            correctOptionId: "4-6",
          },
          ".",
        ],
      },
      {
        id: "eros",
        parts: [
          "Erős fájdalom: ",
          {
            id: "valasz",
            label: "Erős fájdalom:",
            options: [
              { id: "0", text: "0" },
              { id: "1-3", text: "1-3" },
              { id: "4-6", text: "4-6" },
              { id: "7-9", text: "7-9" },
              { id: "10", text: "10" },
            ],
            correctOptionId: "7-9",
          },
          ".",
        ],
      },
      {
        id: "turhetetlen",
        parts: [
          "Tűrhetetlen, elviselhetetlen fájdalom: ",
          {
            id: "valasz",
            label: "Tűrhetetlen, elviselhetetlen fájdalom:",
            options: [
              { id: "0", text: "0" },
              { id: "1-3", text: "1-3" },
              { id: "4-6", text: "4-6" },
              { id: "7-9", text: "7-9" },
              { id: "10", text: "10" },
            ],
            correctOptionId: "10",
          },
          ".",
        ],
      },
    ],
  },
  {
    id: "vitalis-045",
    topicId: "vitalis",
    type: "fill_in",
    prompt: "Egészítse ki a széklet szagával kapcsolatos alábbi mondatokat!",
    statements: [
      {
        id: "rothadas",
        parts: [
          "Rothadásos bűzös szagú széklet ",
          {
            id: "valasz",
            label: "Rothadásos bűzös szagú széklet",
            options: [
              { id: "feherje", text: "fehérje" },
              { id: "zsir", text: "zsír" },
              { id: "szenhidrat", text: "szénhidrát" },
            ],
            correctOptionId: "feherje",
          },
          " emésztési zavarra utal.",
        ],
      },
      {
        id: "erjedes",
        parts: [
          "Erjedéses, savanykás szagú széklet ",
          {
            id: "valasz",
            label: "Erjedéses, savanykás szagú széklet",
            options: [
              { id: "feherje", text: "fehérje" },
              { id: "zsir", text: "zsír" },
              { id: "szenhidrat", text: "szénhidrát" },
            ],
            correctOptionId: "szenhidrat",
          },
          " emésztési zavarra utal.",
        ],
      },
    ],
  },
  {
    id: "vitalis-065",
    topicId: "vitalis",
    type: "fill_in",
    prompt:
      "Válassza ki a szervek felépítését és működését érintő időskori változásokat!",
    statements: [
      {
        id: "viztartalom",
        parts: [
          "A bőr víztartalma ",
          {
            id: "valasz",
            label: "A bőr víztartalma",
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
        id: "izmok",
        parts: [
          "Az izmok összehúzódó képessége ",
          {
            id: "valasz",
            label: "Az izmok összehúzódó képessége",
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
        id: "emesztes",
        parts: [
          "Az emésztés és a felszívódás ",
          {
            id: "valasz",
            label: "Az emésztés és a felszívódás",
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
    id: "vitalis-077",
    topicId: "vitalis",
    type: "fill_in",
    prompt:
      "Válassza ki az alábbi meghatározás alapján a láztípusok magyar megfelelőjét!",
    statements: [
      {
        id: "elso",
        parts: [
          "A napi ingadozás 1°C-nál nagyobb, nincs láztalan állapot: ",
          {
            id: "valasz",
            label: "A napi ingadozás 1°C-nál nagyobb, nincs láztalan állapot:",
            options: [
              { id: "visszatero-laz", text: "visszatérő láz" },
              { id: "ingadozo-laz", text: "ingadozó láz" },
              { id: "ugralo-laz", text: "ugráló láz" },
            ],
            correctOptionId: "ingadozo-laz",
          },
          ".",
        ],
      },
      {
        id: "masodik",
        parts: [
          "A napi ingadozás 1°C-nál nagyobb, reggel láztalanság is lehet: ",
          {
            id: "valasz",
            label:
              "A napi ingadozás 1°C-nál nagyobb, reggel láztalanság is lehet:",
            options: [
              { id: "visszatero-laz", text: "visszatérő láz" },
              { id: "ingadozo-laz", text: "ingadozó láz" },
              { id: "ugralo-laz", text: "ugráló láz" },
            ],
            correctOptionId: "ugralo-laz",
          },
          ".",
        ],
      },
    ],
  },
  {
    id: "vitalis-087",
    topicId: "vitalis",
    type: "fill_in",
    prompt:
      "Válassza ki az alábbi meghatározás alapján a pulzus ritmusbeli változásainak legmegfelelőjét!",
    statements: [
      {
        id: "potutes",
        parts: [
          "„Pótütés” a ritmus rendszeresen vagy rendszertelenül működik, szívkihagyás érzése, idő előtti systole: ",
          {
            id: "valasz",
            label:
              "„Pótütés” a ritmus rendszeresen vagy rendszertelenül működik, szívkihagyás érzése, idő előtti systole:",
            options: [
              { id: "arrythmia", text: "arrythmia" },
              { id: "extrasystolia", text: "extrasystolia" },
              { id: "trigeminia", text: "trigeminia" },
            ],
            correctOptionId: "extrasystolia",
          },
          ".",
        ],
      },
      {
        id: "szabalytalan",
        parts: [
          "A tapintható lüktetések szabálytalanul követik egymást: ",
          {
            id: "valasz",
            label: "A tapintható lüktetések szabálytalanul követik egymást:",
            options: [
              { id: "arrythmia", text: "arrythmia" },
              { id: "extrasystolia", text: "extrasystolia" },
              { id: "trigeminia", text: "trigeminia" },
            ],
            correctOptionId: "arrythmia",
          },
          ".",
        ],
      },
    ],
  },
  {
    id: "vitalis-088",
    topicId: "vitalis",
    type: "fill_in",
    prompt: "Egészítse ki a pulzus vizsgálattal kapcsolatos alábbi mondatokat!",
    statements: [
      {
        id: "ujjak",
        parts: [
          "A pulzus vizsgálata a megfelelő helyen, ",
          {
            id: "valasz",
            label: "A pulzus vizsgálata a megfelelő helyen,",
            options: [
              { id: "3-ujjal", text: "3 ujjal" },
              { id: "huvelykujjal", text: "hüvelykujjal" },
              { id: "2-ujjal", text: "2 ujjal" },
            ],
            correctOptionId: "3-ujjal",
          },
          " tapintva, enyhén a csontos alaphoz nyomva, 1 percig történik.",
        ],
      },
    ],
  },
  {
    id: "vitalis-089",
    topicId: "vitalis",
    type: "fill_in",
    prompt: "Egészítse ki a pulzus vizsgálattal kapcsolatos alábbi mondatokat!",
    statements: [
      {
        id: "jeloles",
        parts: [
          "A lázlapra vonaldiagrammal ",
          {
            id: "valasz",
            label: "A lázlapra vonaldiagrammal",
            options: [
              { id: "zold-szinnel", text: "zöld színnel" },
              {
                id: "a-homerseklettol-eltero-szinnel",
                text: "a hőmérséklettől eltérő színnel",
              },
            ],
            correctOptionId: "a-homerseklettol-eltero-szinnel",
          },
          " vagy a dekruzslapon számmal kell feltüntetni.",
        ],
      },
    ],
  },
  {
    id: "vitalis-105",
    topicId: "vitalis",
    type: "fill_in",
    prompt: "Egészítse ki a vérnyomásméréssel kapcsolatos alábbi mondatokat!",
    statements: [
      {
        id: "systoles",
        parts: [
          "Az első hallható hang a Korotkov I. fázis, a IV. fázisban kezd el halkulni, és a legutolsó hallható hang a Korotkov V. fázis. Az ",
          {
            id: "valasz",
            label:
              "Az első hallható hang a Korotkov I. fázis, a IV. fázisban kezd el halkulni, és a legutolsó hallható hang a Korotkov V. fázis. Az",
            options: [
              { id: "ii-fazis", text: "II. fázis" },
              { id: "iii-fazis", text: "III. fázis" },
              { id: "i-fazis", text: "I. fázis" },
            ],
            correctOptionId: "i-fazis",
          },
          " felel meg a systolés nyomásnak, és az ",
          {
            id: "masodik-valasz",
            label: "Második válasz",
            options: [
              { id: "iv-fazis", text: "IV. fázis" },
              { id: "v-fazis", text: "V. fázis" },
              { id: "iii-fazis", text: "III. fázis" },
            ],
            correctOptionId: "v-fazis",
          },
          " adja a diastolés értéket.",
        ],
      },
    ],
  },
  {
    id: "vitalis-106",
    topicId: "vitalis",
    type: "fill_in",
    prompt:
      "Egészítse ki a hagyományos (aneroid) vérnyomásmérővel történő méréssel kapcsolatos alábbi mondatokat!",
    statements: [
      {
        id: "felpumpalas",
        parts: [
          "A vérnyomásmérő mandzsettáját fel kell pumpálni a várt ",
          {
            id: "valasz",
            label: "A vérnyomásmérő mandzsettáját fel kell pumpálni a várt",
            options: [
              { id: "diastoles", text: "diastolés" },
              { id: "systoles", text: "systolés" },
            ],
            correctOptionId: "systoles",
          },
          " érték fölé, és a fonendoszkóp membránját a könyökhajlatba kell helyezni.",
        ],
      },
      {
        id: "leengedes",
        parts: [
          {
            id: "valasz",
            label: "Gyorsan, hirtelen",
            options: [
              { id: "gyorsan-hirtelen", text: "Gyorsan, hirtelen" },
              { id: "lassan-egyenletesen", text: "Lassan, egyenletesen" },
              { id: "szaggatottan", text: "Szaggatottan" },
            ],
            correctOptionId: "lassan-egyenletesen",
          },
          " engedjük le a nyomást a mandzsettából, és a fonendoszkópon keresztül hallgatjuk a hangot (Korotkov-hangok).",
        ],
      },
    ],
  },
  {
    id: "vitalis-128",
    topicId: "vitalis",
    type: "fill_in",
    prompt:
      "Válassza ki mellkaskompressziónál a mellkas lenyomási mélységét cm-ben kifejezve!",
    statements: [
      {
        id: "melyseg",
        parts: [
          "Mellkaskompressziónál a mellkas lenyomási mélysége kb. ",
          {
            id: "valasz",
            label: "Mellkaskompressziónál a mellkas lenyomási mélysége kb.",
            options: [
              { id: "3-4-cm", text: "3-4 cm" },
              { id: "4-5-cm", text: "4-5 cm" },
              { id: "5-6-cm", text: "5-6 cm" },
              { id: "6-7-cm", text: "6-7 cm" },
            ],
            correctOptionId: "5-6-cm",
          },
          ".",
        ],
      },
    ],
  },
  {
    id: "vitalis-129",
    topicId: "vitalis",
    type: "fill_in",
    prompt: "Egészítse ki az alábbi mondatot!",
    statements: [
      {
        id: "beavatkozas",
        parts: [
          "Az elsősegélynyújtás ",
          {
            id: "valasz",
            label: "Az elsősegélynyújtás",
            options: [
              { id: "halasztott", text: "halasztott" },
              { id: "azonnali", text: "azonnali" },
            ],
            correctOptionId: "azonnali",
          },
          " beavatkozás, sérülés, rosszullét esetén a ",
          {
            id: "masodik-valasz",
            label: "Második válasz",
            options: [
              { id: "vegleges", text: "végleges" },
              { id: "masodlagos", text: "másodlagos" },
            ],
            correctOptionId: "masodlagos",
          },
          " szakellátás megkezdése előtt.",
        ],
      },
    ],
  },
  {
    id: "vitalis-130",
    topicId: "vitalis",
    type: "fill_in",
    prompt: "Válassza ki a leírás alapján a sérülés fajtáját!",
    statements: [
      {
        id: "randulas",
        parts: [
          "Külső erő hatására az ízfelszínek eltávolodnak egymástól, de az erőbehatás megszűntekor az ízületi fej visszatér az ízületi árokba: ",
          {
            id: "valasz",
            label:
              "Külső erő hatására az ízfelszínek eltávolodnak egymástól, de az erőbehatás megszűntekor az ízületi fej visszatér az ízületi árokba:",
            options: [
              { id: "randulas", text: "rándulás" },
              { id: "ficam", text: "ficam" },
            ],
            correctOptionId: "randulas",
          },
          ".",
        ],
      },
      {
        id: "ficam",
        parts: [
          "Erő hatására kimozdul az ízületi fej az ízületi árokból és az erőbehatás megszűnte után nem tér vissza oda: ",
          {
            id: "valasz",
            label:
              "Erő hatására kimozdul az ízületi fej az ízületi árokból és az erőbehatás megszűnte után nem tér vissza oda:",
            options: [
              { id: "ficam", text: "ficam" },
              { id: "randulas", text: "rándulás" },
            ],
            correctOptionId: "ficam",
          },
          ".",
        ],
      },
    ],
  },
  {
    id: "vitalis-131",
    topicId: "vitalis",
    type: "fill_in",
    prompt:
      "Egészítse ki az alapfokú újraélesztéshez kapcsolódóan a földön fekvő sérült vizsgálatára vonatkozó mondatokat!",
    statements: [
      {
        id: "elso",
        parts: [
          "A segélynyújtónak legelőször gondoskodnia kell a ",
          {
            id: "valasz",
            label: "A segélynyújtónak legelőször gondoskodnia kell a",
            options: [
              { id: "mentohivasrol", text: "mentőhívásról" },
              {
                id: "biztonsagos-kornyezet-megteremteserol",
                text: "biztonságos környezet megteremtéséről",
              },
            ],
            correctOptionId: "biztonsagos-kornyezet-megteremteserol",
          },
          ".",
        ],
      },
      {
        id: "masodik",
        parts: [
          "Ez után az első lépés ",
          {
            id: "valasz",
            label: "Ez után az első lépés",
            options: [
              {
                id: "az-eszmelet-reakciokeszseg-vizsgalata",
                text: "az eszmélet/reakciókészség vizsgálata",
              },
              { id: "a-beteg-megnyugtatasa", text: "a beteg megnyugtatása" },
              {
                id: "a-biztonsagos-kornyezet-megteremtese",
                text: "a biztonságos környezet megteremtése",
              },
            ],
            correctOptionId: "az-eszmelet-reakciokeszseg-vizsgalata",
          },
          ".",
        ],
      },
    ],
  },
  {
    id: "vitalis-132",
    topicId: "vitalis",
    type: "fill_in",
    prompt:
      "Egészítse ki az alapfokú újraélesztéshez kapcsolódóan a földön fekvő sérült vizsgálatára vonatkozó mondatokat!",
    statements: [
      {
        id: "segitseg",
        parts: [
          "Amennyiben a sérült nem reagál, nem vonható kontaktusba, akkor azonnal ",
          {
            id: "valasz",
            label:
              "Amennyiben a sérült nem reagál, nem vonható kontaktusba, akkor azonnal",
            options: [
              {
                id: "segitseget-kell-hivnunk",
                text: "segítséget kell hívnunk",
              },
              {
                id: "meg-kell-kezdeni-az-ujraelesztest",
                text: "meg kell kezdeni az újraélesztést",
              },
            ],
            correctOptionId: "segitseget-kell-hivnunk",
          },
          ".",
        ],
      },
      {
        id: "legutak",
        parts: [
          "A következő teendő ",
          {
            id: "valasz",
            label: "A következő teendő",
            options: [
              {
                id: "a-legutak-felszabaditasa-szabadda-tetele",
                text: "a légutak felszabadítása-szabaddá tétele",
              },
              {
                id: "a-legzesvizsgalat-elvegzese",
                text: "a légzésvizsgálat elvégzése",
              },
            ],
            correctOptionId: "a-legutak-felszabaditasa-szabadda-tetele",
          },
          ".",
        ],
      },
    ],
  },
  {
    id: "vitalis-133",
    topicId: "vitalis",
    type: "fill_in",
    prompt:
      "Egészítse ki az alapfokú újraélesztéshez kapcsolódóan a földön fekvő sérült vizsgálatára vonatkozó mondatokat!",
    statements: [
      {
        id: "legzes",
        parts: [
          "A légzés vizsgálatot ",
          {
            id: "valasz",
            label: "A légzés vizsgálatot",
            options: [
              { id: "5", text: "5" },
              { id: "10", text: "10" },
              { id: "15", text: "15" },
              { id: "20", text: "20" },
            ],
            correctOptionId: "10",
          },
          " másodpercig kell végezni.",
        ],
      },
      {
        id: "normalis",
        parts: [
          "Amennyiben normál légzést tapasztalunk, akkor a sérültet ",
          {
            id: "valasz",
            label: "Amennyiben normál légzést tapasztalunk, akkor a sérültet",
            options: [
              { id: "stabil-oldalfekvesben", text: "stabil oldalfekvésben" },
              { id: "hanyatt-fektetve", text: "hanyatt fektetve" },
            ],
            correctOptionId: "stabil-oldalfekvesben",
          },
          " kell elhelyezni és folyamatosan ellenőrizni kell a ",
          {
            id: "masodik-valasz",
            label: "Második válasz",
            options: [
              { id: "legzeset", text: "légzését" },
              { id: "pulzusat", text: "pulzusát" },
            ],
            correctOptionId: "legzeset",
          },
          " a mentő megérkezéséig.",
        ],
      },
    ],
  },
  {
    id: "vitalis-134",
    topicId: "vitalis",
    type: "fill_in",
    prompt:
      "Egészítse ki az alapfokú újraélesztéshez kapcsolódóan a földön fekvő sérült vizsgálatára vonatkozó mondatokat!",
    statements: [
      {
        id: "befuvas",
        parts: [
          "Amennyiben az elsősegélynyújtó tanult újraélesztést, a mellkaskompressziókat célszerű ",
          {
            id: "valasz",
            label:
              "Amennyiben az elsősegélynyújtó tanult újraélesztést, a mellkaskompressziókat célszerű",
            options: [
              { id: "szajbol-orrba", text: "szájból orrba" },
              { id: "szajbol-szajba", text: "szájból szájba" },
            ],
            correctOptionId: "szajbol-szajba",
          },
          " történő lélegeztetéssel is kiegészíteni.",
        ],
      },
      {
        id: "melyseg",
        parts: [
          "Mellkaskompressziót felnőttek esetén körülbelül ",
          {
            id: "valasz",
            label: "Mellkaskompressziót felnőttek esetén körülbelül",
            options: [
              { id: "3-4", text: "3-4" },
              { id: "5-6", text: "5-6" },
              { id: "6-7", text: "6-7" },
            ],
            correctOptionId: "5-6",
          },
          " cm mélységben, ",
          {
            id: "masodik-valasz",
            label: "Második válasz",
            options: [
              { id: "90-100", text: "90-100" },
              { id: "100-120", text: "100-120" },
              { id: "120-130", text: "120-130" },
            ],
            correctOptionId: "100-120",
          },
          " perces frekvenciával kell végezni.",
        ],
      },
    ],
  },
];
