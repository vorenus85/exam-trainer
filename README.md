# Vizsga Tréner

Vue 3, TypeScript és PrimeVue alapú vizsgagyakorló.

## Futtatás és ellenőrzés

A parancsok futtatásához Node.js 24 használható; a kérdésbank-ellenőrző és a tesztek TypeScript fájljait a Node közvetlenül futtatja. A tesztfuttató a Node beépített `node:test` modulja, külön tesztfüggőség nincs.

```sh
npm install
npm run dev
npm run validate:data
npm test
npm run build
```

Az `npm test` először típusellenőrzi a teszteket, az ellenőrző szkriptet és az üzleti modulokat, majd lefuttatja a `tests/*.test.ts` fájlokat. A build ellenőrzi a kérdésbankot, és a Vue-komponenseket is típusellenőrzi.

## Üzleti logika

- `src/domain/questionEvaluation.ts`: kitöltöttség és helyesség az összes kérdéstípushoz.
- `src/domain/questionSelection.ts`: szűrés, modulonként választható kérdésszám (alapértelmezetten 30), vizsgakvóták és megjelenítési sorrendek. Ha kevesebb kérdés érhető el, az összes elérhető kérdés kerül a tesztbe.
- `src/domain/grading.ts`: összesített eredmények, kerekített százalékok és osztályzatok.
- `src/domain/answerFormatting.ts`: helyes válaszok szöveges megjelenítése, párosításnál a megjelenítési sorrend figyelembevételével.
- `src/domain/answers.ts`: kérdésenkénti, típusos válaszobjektumok létrehozása. Az igaz–hamis válaszok állításonként, a mondatkiegészítések állításonként és mezőnként tárolódnak. A tárolás nem használ összefűzött kulcsokat, a HTML-azonosítók külön maradnak.
- `src/domain/questionValidation.ts`: a TypeScriptben tárolt kérdésbank tartalmi ellenőrzése, pontos mezőútvonalakat tartalmazó hibajelentésekkel.
- `src/utils/shuffle.ts`: a bemenetet megőrző keverés, paraméterezhető véletlenszám-forrással.

Ezek a modulok nem függenek a Vue-tól vagy a komponensállapottól. A kérdéseket, válaszokat és beállításokat paraméterként kapják.

## Felület és munkamenet

- `src/App.vue`: a fő komponensek és a munkamenet összekötése.
- `src/components/PracticeSetup.vue`: gyakorlási mód, modul és kérdésfajták kiválasztása.
- `src/components/PracticeHeader.vue`: fejléc, idő és előrehaladás.
- `src/components/QuestionCard.vue`: kérdéskeret, típus szerinti megjelenítés és navigáció.
- `src/components/questions/`: külön komponens a választós, igaz–hamis, párosító, csoportosító, sorbarendező és mondatkiegészítő feladatokhoz. A komponensek a `v-model` frissítési eseményével adnak vissza új válaszobjektumot.
- `src/components/PracticeResults.vue`: összesített eredmény és hibás válaszok áttekintése.
- `src/composables/usePracticeSession.ts`: beállítások, rögzített kérdéssor, válaszok, navigáció, befejezés és újrakezdés.
- `src/composables/useCountdown.ts`: határidőhöz igazított visszaszámlálás, lejárati esemény és takarítás a Vue-scope megszűnésekor.
- `src/config/practice.ts`: kérdésszámok, időkeret, gyakorlási módok és osztályzathatárok.
- `src/config/questionTypes.ts`: a kérdéstípusok közös nevei a szűrőhöz és a kérdéscímkékhez.

Az időkeret a teszt tényleges kérdésszáma alapján, kérdésenként 1 perc: 10 kérdéshez 10, 20 kérdéshez 20, 30 kérdéshez 30 perc. Ha a szűrés miatt kevesebb kérdés kerül a tesztbe, az időkeret is ehhez igazodik.

## Tesztek

A tesztek lefedik mind a hét kérdéstípus helyes, hibás és hiányos válaszait, a párosítás egyediségét, a csoportok ismételt használatát, a mondatkiegészítő mezők elkülönítését, a szűrést és kvótákat, az osztályzathatárokat, a válaszformázást és a keverést. A többválasztós kiértékelést befagyasztott tömbbel is ellenőrzik, hogy az értékelés ne módosíthassa a tárolt választ.

A válaszmodell tesztjei ellenőrzik az inicializálást, az új körök és az ismétlődő mezőazonosítók függetlenségét, a reaktív válaszok megőrzését navigációkor, valamint a típusidegen válaszok elutasítását. A `tests/answerTypes.ts` fordítási ellenőrzésekkel védi a válaszobjektumok alakját.

A munkamenet és az időzítő tesztjei mesterséges időléptetéssel ellenőrzik a lejáratot, a navigációt, az újrakezdést, a rögzített kérdéssor megőrzését és az időzítők felszabadítását.

A kérdésbank-validátor ellenőrzi az egyedi azonosítókat, a témakörhivatkozásokat, a kötelező szövegeket, az elemszámokat és a helyes válaszok hivatkozásait. A sorbarendezési megoldásban minden elemnek pontosan egyszer kell szerepelnie; mondatkiegészítésnél az egy állításon belüli mezőazonosítók nem ismétlődhetnek. A tesztek a teljes kérdésbankot és szándékosan hibás adatpéldákat is vizsgálnak.

Az `npm run validate:data` külön is futtatható. A build és az alkalmazás indulása ugyanezt az ellenőrzést használja; hibás adatnál a jelentés megnevezi a kérdést és a hibás mezőt.

A refaktor megőrzi a korábbi százalékos osztályozást: például 26/30 pont 87%-ra kerekítve „jó”. A felületen szereplő ponthatártáblázat ugyanebből a szabályból, az aktuális kérdésszámhoz készül; 30 kérdésnél a „jeles” így 27 ponttól kezdődik.
