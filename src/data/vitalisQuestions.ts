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
];
