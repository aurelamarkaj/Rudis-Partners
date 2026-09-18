<<<<<<< HEAD
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

## Marrëdhënie Publike & Marketing dhe Konsulencë Ligjore

- `src/content/marketing.ts`: 12 faqe me përmbajtjen e plotë nga lidhjet e përdoruesit dhe përkthim anglisht. URL-të shqip nuk përfundojnë me `-2`. Titujt e gabuar të hero-ve në burim janë zëvendësuar me emrin e saktë të shërbimit.
- `src/content/legal.ts`: 12 faqe të bazuara në PDF-të e dhëna, me 56 zëra në secilën gjuhë. Titujt pasqyrojnë emrat e dokumenteve; janë bërë vetëm korrigjime drejtshkrimore pa zgjeruar fushën e shërbimeve.
- Burimet PDF: Administrative.pdf, E-drejta-e-punes.pdf, Deme-pasurore-dhe-Morale.pdf, Falimenti.pdf, Dogana.pdf, Familjare.pdf, Kontrata.pdf, Penale.pdf, Pronesia-Industriale-dhe-Intelektuale.pdf, Pronesia.pdf, Tatime-dhe-taksa.pdf dhe Tregtare.pdf, nga dosja Downloads e përdoruesit. Dokumentet origjinale nuk janë ndryshuar.
- `src/content/service-pages.ts` bashkon 31 shërbime (7 biznes, 12 marketing, 12 ligjore). Secili ka faqe shqip dhe anglisht me `InnerHero`, menunë e kategorisë dhe lidhje kontakti.
- Menuja me dy nivele, sidebar-i, lista e shërbimeve dhe kërkimi përdorin të njëjtat të dhëna. Kërkimi përfshin edhe listat ligjore. Në faqen e shërbimeve, të 31 zërat janë lidhje funksionale.
- Kur shtohen rrugë të reja statike, mund të nevojitet rinisja e serverit të zhvillimit për të rifreskuar `generateStaticParams`.

## Sectors / Who we work with

- Overview: `/kush-punon-me-ne` and `/en/who-we-work-with`.
- Ten sector detail pages: `/portfolio-item/<sq-slug>` and `/en/sectors/<en-slug>`.
- Content, translated titles, route pairs and local photos: `src/content/sector-pages.ts`.
- Shared overview/detail rendering: `src/components/SectorPages.tsx`; all use `InnerHero` and the approved office photo.
- Header, footer, homepage carousel, search and language switch link to the new pages.
- Source: https://rudispartners.al/kush-punon-me-ne/ and its ten sector links. The source `/en` pages still contain Albanian text; the local English copy is a faithful translation of that text. WordPress error output and unrelated template tags are excluded.
- Development uses the supported `--webpack` option because Turbopack development hydration failed in the local browser. Start with `npm run dev -- --port 3001`. Production build remains unchanged.

## Contact and insights

`/kontakt` / `/en/contact` show the official address, phone, email, Facebook and availability. No form submissions or backend are added. `/njohuri` / `/en/insights` show a bilingual coming-soon page. Both are linked from header/footer and retain the shared inner-page hero. Contact information was checked against `https://rudispartners.al/contact-us/` and its English version on 2026-09-18.

Contact now includes the original four fields in both languages. The local form opens a prefilled email draft; direct server delivery is not configured.
=======
Rudi's Partners Project
>>>>>>> b8ec9ab52ed7d820bb57d1e314d686222455a564
