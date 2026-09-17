import type { Locale } from './types';

export type AboutContent = {
  title: string; greeting: string; introduction: string; principles: string;
  lead: string; description: string; sectors: string; servicesTitle: string;
  services: { id: string; title: string }[];
};

export const about: Record<Locale, AboutContent> = {
  sq: {
    title: 'Kush jemi', greeting: 'Përshëndetje,', introduction: 'Ne jemi',
    principles: 'Markë. Reputacion. Përvojë.',
    lead: 'Autenticitet i trefishtë.',
    description: 'Kur jeni në përputhje me atë që njerëzit mendojnë se jeni – dhe vërtetohet nga përvojat – ky është partneri ideal për biznesin tuaj. Përmes inteligjencës së drejtuar nga të dhënat, qëllimit të guximshëm krijues dhe strategjik, ne ndihmojmë klientët të gjejnë zgjidhje dhe të zhvillohen.',
    sectors: 'RUDIS & Partners ofron shërbimet e saj në sektorë të ndryshëm të ekonomisë. Ekspertiza e lartë profesionale mundëson mbulimin e një game të gjerë biznesesh të tipologjive të ndryshme.',
    servicesTitle: 'Fushat tona të konsulencës',
    services: [
      { id: 'biznes', title: 'Konsulencë Biznesi' },
      { id: 'marredhenie-publike', title: 'Konsulencë Marrëdhënie Publike' },
      { id: 'ligjore', title: 'Konsulencë Ligjore' },
      { id: 'financa', title: 'Konsulencë Financiare' },
      { id: 'marketing', title: 'Konsulencë Marketing' },
    ],
  },
  en: {
    title: 'Who we are', greeting: 'Hello there,', introduction: 'We are',
    principles: 'Brand. Reputation. Experience.', lead: 'Threefold authenticity.',
    description: 'When who you are aligns with how people perceive you – and their experiences confirm it – that is the ideal partner for your business. Through data-driven intelligence and bold creative and strategic intent, we help our clients find solutions and grow.',
    sectors: 'RUDIS & Partners provides services across different sectors of the economy. Our professional expertise allows us to support a broad range of businesses of different types.',
    servicesTitle: 'Our areas of consultancy',
    services: [
      { id: 'biznes', title: 'Business Consulting' },
      { id: 'marredhenie-publike', title: 'Public Relations Consulting' },
      { id: 'ligjore', title: 'Legal Consulting' },
      { id: 'financa', title: 'Financial Consulting' },
      { id: 'marketing', title: 'Marketing Consulting' },
    ],
  },
};
