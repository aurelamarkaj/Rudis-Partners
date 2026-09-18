import type { Content } from './types';

export const sq: Content = {
  locale: 'sq',
  meta: { title: 'Rudis & Partners | Zgjidhja juaj e besueshme', description: 'Konsulencë biznesi, financiare, marrëdhënie publike, marketing dhe ligjore. Një ekip profesionistësh të gatshëm për partneritet me biznesin tuaj.' },
  nav: { home: 'Home', about: 'Kush jemi', services: 'Shërbimet tona', sectors: 'Kush punon me ne', insights: 'Njohuri', contact: 'Kontakt' },
  hero: { first: 'Zgjidhja juaj e besueshme', second: 'për çdo projekt', description: 'Puna jonë është të zhvillojmë biznesin tuaj.', cta: 'Kontakto tani' },
  intro: { eyebrow: 'Shërbimet tona', title: 'Ekspertizë në çdo fushë', description: 'I mundësojmë kompanive të arrijnë rezultate të mëdha përmes njerëzve dhe kulturës së tyre.', cta: 'Zbulo ekspertizën tonë' },
  steps: [
    { title: 'Takim & Diskutim', description: 'Njohja është procesi i parë i marrëdhënies me studion RUDIS & Partners. Takimet dhe diskutimet të cilat do të përcaktojnë kërkesat dhe specifikat e mëtejshme të bashkëpunimit.', image: '/images/step-meeting.webp', icon: 'scale' },
    { title: 'Kërkim & Analizë', description: 'Mbledhja e informacionit nga diskutimet, kërkimi i thelluar i informacioneve dhe analiza e detajuar, janë etapa e dytë e paracaktimit të formës së bashkëpunimit.', image: '/images/step-research.webp', icon: 'document' },
    { title: 'Propozime për bashkëpunim', description: 'Në varësi të situatës dhe panoramës së diskutimeve paraprake, kërkimit dhe analizës, profesionistët e RUDIS & Partners do të propozojnë një ose disa mënyra bashkëpunimi.', image: '/images/step-proposal.webp', icon: 'people' },
  ],
  services: [
    { id: 'biznes', title: 'Konsulencë Biznesi', description: 'Ndihmojmë bizneset të rrisin efikasitetin, të identifikojnë mundësi të reja dhe të ndërtojnë strategji të qëndrueshme zhvillimi.', image: '/images/service-business.webp' },
    { id: 'marredhenie-publike', title: 'Konsulencë Marrëdhënie Publike', description: 'Ndërtojmë imazhin tuaj publik, forcojmë komunikimin me publikun dhe menaxhojmë reputacionin e markës tuaj.', image: '/images/service-pr.webp' },
    { id: 'financa', title: 'Konsulencë Financiare', description: 'Ndihmojmë bizneset të rrisin efikasitetin, të identifikojnë mundësi të reja dhe të ndërtojnë strategji të qëndrueshme zhvillimi.', image: '/images/service-finance.webp' },
    { id: 'ligjore', title: 'Konsulencë Ligjore', description: 'Ndihmojmë bizneset të rrisin efikasitetin, të identifikojnë mundësi të reja dhe të ndërtojnë strategji të qëndrueshme zhvillimi.', image: '/images/service-legal.webp' },
    { id: 'marketing', title: 'Marketing', description: 'Ekip profesionistësh të gatshëm për partneritet me biznesin tuaj.', image: '/images/service-marketing.webp' },
  ],
  benefits: [
    { title: 'Orari i Punës', description: "Thonë gjithmonë se koha i ndryshon gjërat, por në realitet duhet t’i ndryshosh ti vetë. Ndaj jemi të disponueshëm 24/24!", icon: 'clock' },
    { title: 'Kontakto', description: 'Kontakto kurdoherë në numrin +355 672025509', icon: 'phone' },
    { title: 'Profesionist', description: 'Ekip profesionistësh të gatshëm për partneritet me biznesin tuaj.', icon: 'people' },
  ],
  sectors: { eyebrow: 'Partneritete', title: 'Kush punon me ne', description: 'RUDIS & Partners ofron shërbimet e saj në sektorë të ndryshëm të ekonomisë. Ekspertiza e lartë profesionale mundëson mbulimin e një game të gjerë biznesesh të tipologjive të ndryshme.', items: [
    { id: 'ojf', title: 'OJF', image: '/images/sector-nonprofit-hq.webp' },
    { id: 'energji', title: 'Energjia & Minierat', image: '/images/sector-energy-hq.webp' },
    { id: 'farmaceutike', title: 'Industria Farmaceutike', image: '/images/sector-pharma-hq.webp' },
    { id: 'turizem', title: 'Turizëm', image: '/images/sector-tourism-hq.webp' },
    { id: 'infrastrukture', title: 'Infrastrukturë', image: '/images/sector-infrastructure-hq.webp' },
    { id: 'hidrokarbure', title: 'Hidrokarbure', image: '/images/sector-oil-hq.webp' },
    { id: 'agrobiznes', title: 'Agrobiznes', image: '/images/sector-agro-hq.webp' },
    { id: 'ushqim', title: 'Kompanitë e Konsumit Ushqimor', image: '/images/sector-consumer-hq.webp' },
    { id: 'tregti', title: 'Tregti me Pakicë', image: '/images/sector-retail-hq.webp' },
    { id: 'financiare', title: 'Institucione Financiare', image: '/images/sector-financial-hq.webp' },
  ] },
  footer: { contact: 'Kontakt', address: "Bulevardi ‘Gjergj Fishta’, Tiranë", links: 'Lidhje', hours: 'Orari i punës', availability: 'Të disponueshëm 24/24!', privacy: 'Politika e Privatësisë' },
  ui: { soon: 'Së shpejti', more: 'Lexo më shumë', search: 'Kërko', searchPlaceholder: 'Çfarë po kërkoni?', searchHint: 'Kërkoni shërbime, sektorë ose kontakte.', noResults: 'Nuk u gjet asnjë rezultat. Provoni një fjalë tjetër.', close: 'Mbyll', menu: 'Hap menunë', previous: 'Sektorët e mëparshëm', next: 'Sektorët vijues', skip: 'Kalo te përmbajtja', sectorList: 'Sektorët me të cilët punojmë', result: 'rezultat', results: 'rezultate' },
};
