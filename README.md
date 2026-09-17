# Rudis & Partners

Website lokal dygjuhësh, ndërtuar me Next.js App Router, React, TypeScript dhe CSS. Dizajni ndjek `shembull 1.pdf`; përmbajtja e biznesit merret nga homepage e https://rudispartners.al/.

## Nisja lokale

Kërkohet Node.js 20.9 ose më i ri. Versioni i përdorur gjatë zhvillimit: Node.js 24.

```sh
npm ci
npm run dev
```

Hapni http://127.0.0.1:3000 për shqipen dhe http://127.0.0.1:3000/en për anglishten. Serveri lidhet vetëm me kompjuterin lokal. Nuk kërkohen llogari, databazë apo variabla sekrete.

```sh
npm run typecheck
npm run build
npm start
```

Për `npm start`, ndaloni fillimisht serverin e zhvillimit në të njëjtin port. Ndryshoni portin, nëse duhet, me `npm run dev -- --port 3001`.

## Përmbajtja dhe arkitektura

- `src/content/sq.ts` dhe `src/content/en.ts`: tekstet, shërbimet, sektorët dhe etiketat e ndërfaqes.
- `src/content/types.ts`: kontrata e përbashkët e përmbajtjes.
- `src/components/HomePage.tsx`: kompozimi i homepage. Header, Footer dhe Sectors janë komponentë të ripërdorshëm.
- `src/components/Header.tsx`: menu mobile dhe kërkim lokal pa dallim të shkronjave të mëdha apo shenjave diakritike; dialogu mbështet Escape dhe kthimin e fokusit.
- `src/components/Sectors.tsx`: shfletues horizontal me prekje, butona dhe tastierë (shigjetat, Home, End).
- `src/app/(sq)` dhe `src/app/(en)`: dy rrugë statike me `lang` dhe metadata përkatëse.
- `src/app/globals.css`: stilet e përbashkëta dhe përshtatja për desktop, tablet dhe celular.
- `public/images` dhe `public/fonts`: materiale lokale; faqja nuk ngarkon fonte apo imazhe nga serverë të jashtëm.

## Përfshirë në këtë fazë

Hero, tri hapa të bashkëpunimit, pesë shërbime, informacionet e punës dhe kontaktit, dhjetë sektorë, footer, shqip/anglisht dhe kërkim në përmbajtjen e homepage.

Faqet e tjera të brendshme dhe politika e privatësisë janë shënuar “Së shpejti”; nuk ka lidhje drejt faqeve lokale të paimplementuara. Nuk ka CMS, formulare dërgimi, analytics apo publikim online. Metadata e kësaj kopjeje lokale ndalon indeksimin.

## Burimet

- Dizajni dhe 16 materiale grafike: PDF-ja e dhënë nga përdoruesi, `shembull 1.pdf`.
- Homepage shqip: https://rudispartners.al/ (kontrolluar më 16 shtator 2026).
- Homepage anglisht: https://rudispartners.al/en/; tekstet e papërkthyera janë përkthyer nga versioni shqip.
- Imazhi Marketing dhe gjashtë sektorët që mungojnë në PDF: imazhet origjinale të lidhura nga homepage ekzistuese.
- Përshkrimet shtesë të katër kartave të konsulencës: PDF-ja. Teksti i kartës Marketing përdor tekstin ekzistues të ekipit, pa pretendime të reja.
- Fonte: Playfair Display dhe DM Sans, të ruajtura lokalisht nga Google Fonts.
- Krediti “© 2026 INSTANT.AL SHPK” mbahet sipas kërkesës së miratuar.
- Homepage përdor hero-n origjinal të PDF-së (`public/images/hero.webp`). Të gjitha faqet e brendshme përdorin fotografinë e ndërtesës të dhënë nga përdoruesi (`public/images/hero-office.webp`), përmes komponentit `InnerHero`.

Tekstet e dy slajdeve të website-it origjinal janë përfshirë në hero dhe hyrjen e shërbimeve. Përmbajtja e dyfishuar e menusë mobile, përkthimeve të footer-it dhe krediti i temës së vjetër nuk janë kopjuar.

## Analiza e kodit

Dosja `.ua` është rezervuar për grafikun e arkitekturës të `understand-anything`. Përjashtohen varësitë, rezultatet e build-it dhe materialet binare; përfshihet kodi i aplikacionit dhe dokumentimi.

## Faqja Kush jemi

- Shqip: `/kush-jemi`; anglisht: `/en/about`.
- Përmbajtja dhe fotografia bazohen në https://rudispartners.al/kush-jemi/ (lexuar më 17 shtator 2026). U ruajtën të gjitha tekstet kryesore dhe pesë fushat e konsulencës; elementet demonstrative të temës, navigimi i dyfishuar dhe formulari i munguar nuk u përfshinë.
- `src/content/about.ts`: teksti origjinal me korrigjime drejtshkrimore dhe përkthimi anglisht.
- `src/components/AboutPage.tsx`: hyrja vizuale, prezantimi dhe lidhjet drejt shërbimeve.
- Header dhe Footer ndajnë navigimin mes faqeve; kalimi i gjuhës ruan faqen aktive dhe kërkimi përfshin edhe prezantimin Kush jemi.
- Fotografia ruhet lokalisht në `public/images/about.webp`.

## Shërbimet tona dhe rregulli i hero-s

- Shqip: `/sherbimet-tona`; anglisht: `/en/services`.
- Burimi: https://rudispartners.al/sherbimet-tona/ (17 shtator 2026). Përfshihen tri grupet dhe të 23 zërat e listave kryesore. “Konsulencë për Taksat, Audit & Kontabilitet” ruhet si një zë, si në përmbajtjen e faqes burim.
- Blloku demonstrativ i fshehur “Fourth Step / Marketing & Advertise” me Lorem ipsum dhe titujt e fshehur të dyfishuar nuk përfshihen.
- Nënfaqet e detajuara mbeten për fazën tjetër; listat nuk japin lidhje të thyera. Kartat e homepage dhe lidhjet e konsulencës te Kush jemi hapin grupin përkatës në faqen e re.
- Për çdo faqe të re të brendshme, përdorni `src/components/InnerHero.tsx` me fotografinë e ndërtesës. Homepage është përjashtimi dhe ruan fotografinë e PDF-së.
- Rrugët dhe lidhjet e gjuhëve përcaktohen në `src/content/routes.ts`; përmbajtja e shërbimeve në `src/content/services.ts`.

## Nënfaqet Biznes & Financë

Shtatë shërbimet përcaktohen në `src/content/business.ts`, me URL të pastra pa prapashtesën `-2` dhe përkthime anglisht. Rrugët statike gjenerohen nga `[businessSlug]` në secilën gjuhë. Menuja me dy nivele ndërtohet nga `ServicesMenu`; çdo faqe përmban lidhje drejt shtatë shërbimeve të kategorisë.

Burimet e lexuara: `/organizim-strukturim-biznesi-2/`, `/menaxhimi-i-burimeve-njerezore-2/`, `/menaxhim-i-krizave-te-komunikimit-reputacionit/`, `/konsulence-financiare-risku/`, `/konsulence-per-taksat/`, `/audit-kontabilitet/` në rudispartners.al.

Tri të parat kanë tekst përshkrues. Financë/risk, taksa dhe audit/kontabilitet kanë vetëm një titull të vjetër të gabuar në përmbajtjen e burimit. Teknologjia shfaqet si lidhje `#` në menunë burim, pa faqe të identifikueshme. Këto katër faqe lokale shfaqin titullin e saktë, kontaktin dhe “Përshkrimi i shërbimit së shpejti.” Deri në marrjen e përmbajtjes së miratuar, nuk shtohen përshkrime shërbimesh të hamendësuara.

Lista Biznes & Financë tani ka shtatë lidhje, duke ndarë taksat nga audit/kontabiliteti dhe duke përfshirë menaxhimin e krizave. Totali i listave në faqen Shërbimet tona është 25 zëra.
