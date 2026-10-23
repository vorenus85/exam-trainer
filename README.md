# Vizsga Tréner

Vue 3, TypeScript és PrimeVue alapú vizsgagyakorló.

## Futtatás és ellenőrzés

A tesztek futtatásához Node.js 24 használható; a TypeScript fájlokat a Node közvetlenül futtatja. A tesztfuttató a Node beépített `node:test` modulja, külön tesztfüggőség nincs.

```sh
npm install
npm run dev
npm test
npm run build
```

Az `npm test` először típusellenőrzi a teszteket és az üzleti modulokat, majd lefuttatja a `tests/*.test.ts` fájlokat. A build a Vue-komponenseket is típusellenőrzi.

## Üzleti logika

- `src/domain/questionEvaluation.ts`: kitöltöttség és helyesség az összes kérdéstípushoz.
- `src/domain/questionSelection.ts`: szűrés, modulonként legfeljebb 30 kérdés, vizsgakvóták és megjelenítési sorrendek.
- `src/domain/grading.ts`: összesített eredmények, kerekített százalékok és osztályzatok.
- `src/domain/answerFormatting.ts`: helyes válaszok szöveges megjelenítése, párosításnál a megjelenítési sorrend figyelembevételével.
- `src/domain/answers.ts`: a meglévő válaszformátum típusa és tárolási kulcsai. A kulcsok nem HTML-azonosítók.
- `src/utils/shuffle.ts`: a bemenetet megőrző keverés, paraméterezhető véletlenszám-forrással.

Ezek a modulok nem függenek a Vue-tól vagy a komponensállapottól. A kérdéseket, válaszokat és beállításokat paraméterként kapják; az `App.vue` kapcsolja őket a felülethez.

## Tesztek

A tesztek lefedik mind a hét kérdéstípus helyes, hibás és hiányos válaszait, a párosítás egyediségét, a csoportok ismételt használatát, a mondatkiegészítő mezők elkülönítését, a szűrést és kvótákat, az osztályzathatárokat, a válaszformázást és a keverést. A többválasztós kiértékelést befagyasztott tömbbel is ellenőrzik, hogy az értékelés ne módosíthassa a tárolt választ.

A refaktor megőrzi a korábbi százalékos osztályozást: például 26/30 pont 87%-ra kerekítve „jó”. A felületen szereplő statikus ponthatártáblázat ettől eltér; annak egységesítése külön feladat.
