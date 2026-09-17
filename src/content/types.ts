export type Locale = 'sq' | 'en';
export type Service = { id: string; title: string; description: string; image: string };
export type Sector = { id: string; title: string; image: string };
export type Content = {
  locale: Locale;
  meta: { title: string; description: string };
  nav: { home: string; about: string; services: string; sectors: string; insights: string; contact: string };
  hero: { first: string; second: string; description: string; cta: string };
  intro: { eyebrow: string; title: string; description: string; cta: string };
  steps: { title: string; description: string; image: string; icon: 'scale' | 'document' | 'people' }[];
  services: Service[];
  benefits: { title: string; description: string; icon: 'clock' | 'phone' | 'people' }[];
  sectors: { eyebrow: string; title: string; description: string; items: Sector[] };
  footer: { contact: string; address: string; links: string; hours: string; availability: string; privacy: string };
  ui: { soon: string; more: string; search: string; searchPlaceholder: string; searchHint: string; noResults: string; close: string; menu: string; previous: string; next: string; skip: string; sectorList: string; result: string; results: string };
};
