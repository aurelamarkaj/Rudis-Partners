# Verifikimi i homepage

Kontrolluar më 16 shtator 2026 në serverin lokal të Next.js.

## Kontrollet e kryera

- TypeScript: pa gabime.
- Build-i i prodhimit: përfundon me sukses; `/` dhe `/en` gjenerohen si faqe statike.
- Të dyja rrugët përgjigjen HTTP 200 dhe kanë `html lang` përkatës.
- Të dyja gjuhët përmbajnë 5 karta shërbimesh dhe 10 sektorë.
- Të gjitha lidhjet brenda faqes kanë destinacione ekzistuese.
- 23 imazhe dhe 4 fonte lokale përgjigjen HTTP 200 me përmbajtje jo bosh.
- Pamja shqip u kontrollua në 1440px, 768px, 390px dhe 320px; anglishtja në 1440px, 390px dhe 320px. Nuk u evidentua tejkalim horizontal i dokumentit.
- Menuja mobile hapet dhe mbyllet pas zgjedhjes së një seksioni.
- Kërkimi gjen shërbime dhe sektorë në gjuhën aktive; `kerkim` gjen përmbajtjen me `ë`, dhe kërkimi me shkronja të mëdha funksionon.
- Kërkimi pa rezultate shfaq mesazhin përkatës; Escape mbyll dialogun dhe kthen fokusin te butoni i kërkimit.
- Zgjedhja e një sektori nga kërkimi e sjell kartën në pamje dhe i jep fokus.
- Shfletuesi i sektorëve punon me butona, tastierë dhe lëvizje horizontale; Home/End arrijnë skajet dhe butonat çaktivizohen sipas pozicionit.
- Kalimi shqip/anglisht ndryshon përmbajtjen, titullin e dokumentit dhe atributin e gjuhës.
- Lidhjet e telefonit dhe email-it u verifikuan pa nisur thirrje apo dërguar mesazhe.
- Konsola e shfletuesit nuk raportoi gabime apo paralajmërime gjatë kontrolleve.

## Kufizime

Testimi u krye në shfletuesin e aplikacionit me përmasa të simuluara, jo në pajisje fizike. Lidhja Facebook u verifikua si destinacion pa ndërvepruar me llogarinë. Faqet e brendshme mbeten të shënuara “Së shpejti”.

## Përmirësimi vizual — 17 shtator 2026

- U harmonizuan tipografia, ngjyrat, kontrasti dhe hapësirat; u zgjeruan kartat e shërbimeve dhe u përmirësua lexueshmëria e përshkrimeve.
- Header-i qëndron i dukshëm gjatë lëvizjes; seksionet respektojnë lartësinë e tij gjatë navigimit.
- Menuja mobile ka sfond të errësuar, mbyllet me Escape, klikim jashtë, zgjedhje seksioni dhe kalim në desktop. Lëvizja e faqes çbllokohet pas mbylljes.
- Në 320px, logoja dhe butonat ruajnë hapësirë nga skajet; hero dhe butoni i kontaktit shfaqen të plotë.
- Pamja u kontrollua në desktop 1440px, tablet 768px dhe celular 390px/320px, përfshirë versionin anglisht. Nuk u evidentuan imazhe të thyera apo tejkalim horizontal.
- Kërkimi shqip me shkronja të mëdha dhe kërkimi anglisht u verifikuan; rezultati i sektorit merr fokus dhe shfaqet në shfletuesin horizontal.
- Home/End në sektorë funksionojnë; konsola nuk raportoi gabime ose paralajmërime.
- `npm run typecheck` dhe `npm run build` përfunduan me sukses pas ndryshimeve.
- Verifikimi përfundimtar u krye në `http://127.0.0.1:3001`, sepse porta 3000 përdorej nga një projekt tjetër.

## Korrigjime nga verifikimi

- Shërbimet u rikthyen sipas PDF-së: katër karta në rresht në desktop, fotografi vertikale me këndin e sipërm djathtas të rrumbullakosur, panel gri i zhvendosur dhe tekst serif. Marketingu ruhet si kartë e pestë me të njëjtin stil. Në tablet përdoren dy kolona dhe në celular një kolonë.

- Mbyllje e drejtpërdrejtë me Escape edhe kur fusha e kërkimit përmban tekst.
- Hero me lartësi të përshtatshme në ekranet e ngushta, që butoni të ruajë hapësirën e nevojshme poshtë.
- Përfshirje e tekstit hyrës dhe hero-s në indeksin e kërkimit.

## Kush jemi — 17 shtator 2026

- Build-i gjeneron edhe `/kush-jemi` dhe `/en/about` si faqe statike; TypeScript përfundon pa gabime.
- U krahasua përmbajtja me HTML-në e burimit: prezantimi, marka/reputacioni/përvoja, autenticiteti, përshkrimi i sektorëve dhe pesë llojet e konsulencës janë përfshirë.
- Pamja u kontrollua në 1440px, 768px, 390px dhe 320px; nuk u evidentua tejkalim horizontal. Imazhet lokale ngarkohen saktë.
- Zgjedhësi i gjuhës ruan faqen Kush jemi; `html lang` dhe metadata ndryshojnë sipas gjuhës.
- Menuja mobile, treguesi i faqes aktive dhe mbyllja me Escape u verifikuan.
- Lidhja e konsulencës financiare hap seksionin përkatës në homepage; kërkimi nga homepage hap prezantimin Kush jemi. Kërkimi brenda Kush jemi mbyll dialogun dhe fokuson seksionin e prezantimit.
- Konsola e skedës së verifikimit nuk raportoi gabime ose paralajmërime.

## Shërbimet tona dhe hero-t — 17 shtator 2026

- Homepage shqip/anglisht përdor përsëri `hero.webp` nga PDF-ja. Kush jemi dhe Shërbimet tona përdorin komponentin e përbashkët `InnerHero` me `hero-office.webp`.
- `/sherbimet-tona` dhe `/en/services` gjenerohen statikisht. Build-i dhe TypeScript përfundojnë pa gabime.
- Të dy versionet kanë tri kategori dhe 23 zëra, në përputhje me listat kryesore të burimit.
- Kontrolluar në 1440px, 768px, 390px dhe 320px; pa tejkalim horizontal dhe pa imazhe të thyera.
- Kërkimi “dogana” gjen kategorinë ligjore dhe fokuson seksionin përkatës.
- Navigimi i kategorive, zgjedhësi i gjuhës, menuja mobile dhe lidhja “Lexo më shumë” nga karta ligjore e homepage funksionojnë.
- Hero-ja e re te Kush jemi u kontrollua vizualisht; fotografia origjinale e homepage u konfirmua në DOM.
- Konsola nuk raportoi gabime ose paralajmërime gjatë verifikimit.

## Nënfaqet Biznes & Financë

- U gjeneruan dhe verifikuan 14 faqe statike (7 shqip + 7 anglisht), me hero-n e ndërtesës dhe URL pa `-2`.
- Menuja me dy nivele hapet me buton; kategoria Biznes & Financë paraqet shtatë lidhje. U kontrollua klikimi i shërbimit në desktop dhe celular.
- U hoq ndryshimi automatik i kategorive me hover në ekranet mobile.
- U verifikua titulli i gjatë i menaxhimit të krizave në 320px, pa tejkalim horizontal; gjithashtu u kontrolluan 768px dhe 1440px.
- Ndërrimi i gjuhës ruan shërbimin. Kërkimi gjen nënfaqet dhe lidhjet e kategorive çojnë te faqja përkatëse e Shërbimeve.
- Build-i përfundoi me sukses, përfshirë kontrollin TypeScript. Konsola nuk raportoi gabime gjatë kontrollit.
- Katër përshkrimet që mungojnë në burim mbeten të shënuara për plotësim; faqet dhe kontaktet janë funksionale.

## Marketing dhe faqet ligjore

- Marketing: 12 faqe / 24 versione gjuhësore; të gjitha URL-të u testuan me HTTP 200. Build-i përfshin përmbajtjen e plotë dhe hero-n e përbashkët.
- U lexuan dhe u inspektuan vizualisht të 12 PDF-të ligjore (një faqe secili). U ruajtën 56 zëra, duke bashkuar rreshtat e thyer në PDF dhe korrigjuar drejtshkrimin.
- Ligjore: 12 faqe / 24 versione gjuhësore, secila me numër të njëjtë zërash në shqip dhe anglisht; të gjitha URL-të përgjigjen HTTP 200.
- Build-i përfundon me sukses, përfshirë TypeScript; 62 faqe shërbimesh në total, plus homepage, Kush jemi dhe Shërbimet tona në të dyja gjuhët.
- Menuja shfaq 12 zëra për Marketing dhe 12 për Ligjore. U testua klikimi te zëri i fundit, kalimi i gjuhës dhe nënmenuja mobile.
- Kërkimi “adoption” hap Family Law; kërkimi “narrative” gjen Communication Narrative Strategy.
- Kontrolluar në 1440px, 768px dhe 320px, përfshirë titujt e gjatë. Nuk u evidentua tejkalim horizontal apo gabime në konsolën e skedës së kontrollit.
- Një cache e vjetër e rrugëve në serverin e zhvillimit u zgjidh me rinisje; URL-të e reja anglisht u ritestuan me sukses.

## Sector pages — 2026-09-17

- Added both sector overviews and ten bilingual sector details (22 routes).
- Production build and TypeScript passed; 92 static pages generated overall.
- All 22 new routes returned HTTP 200 with the approved office hero image.
- Desktop arrow center matches the services label center (51.5px); SVG replaces the baseline-dependent text glyph.
- Verified overview card navigation and same-sector language switching.
- Verified English search finds sector content and navigates to its detail page, in both production and Webpack development.
- 320px detail viewport: no horizontal overflow or broken loaded images.
- Turbopack development did not hydrate interactive controls in the local browser; refreshed cache did not solve it. Supported Webpack development mode restores the controls; npm dev now uses it.

## Contact, insights and sector alignment — 2026-09-18

- Sector cards stretch their heading areas within each grid row. At 1440px, the first three separators all measured y=1358.875px.
- Added contact and coming-soon insights pages in SQ/EN, with same-page locale switching and header/footer links.
- Contact data taken from the official contact page; template filler and missing-form errors omitted. Phone/email links remain direct native links.
- Inner-page hero contact buttons now lead to the contact page; on the contact page the button jumps to its contact details.
- English contact at 375px: correct document language and no horizontal overflow.

## Contact form — 2026-09-18

The original contact page contains a real main form (the missing-form error belongs to its separate newsletter widget). Added matching name, email, subject (required) and message (optional) fields in SQ/EN. Browser validation is enabled. Local submission prepares a mailto draft; no message is sent automatically and there is no server delivery integration. Checked desktop layout and required-field validation.

## Sector image clarity — 2026-09-18

Replaced 485–550px square thumbnails with original source photos, 1024–2560px wide, exported locally as quality-95 WebP without upscaling. Updated both locale homepage carousels, sector overview and all sector detail pages. Hydrocarbons uses the source site's higher-resolution refinery photo. The food-consumer source photograph has intentional background blur; its original cart detail is preserved. Source URLs are recorded in `docs/sector-image-sources.json`. Browser confirmed the consumer detail loads the new 1200px asset with no page overflow.
