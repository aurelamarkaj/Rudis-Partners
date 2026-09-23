import type { Locale } from './types';
export type PageName = 'home' | 'about' | 'services' | 'sectors' | 'contact';
export const routes: Record<Locale, Record<PageName, string>> = {
  sq: { home: '/', about: '/kush-jemi', services: '/sherbimet-tona', sectors: '/kush-punon-me-ne', contact: '/kontakt' },
  en: { home: '/en', about: '/en/about', services: '/en/services', sectors: '/en/who-we-work-with', contact: '/en/contact' },
};
export const serviceGroup: Record<string, string> = {
  biznes: 'biznes-finance', financa: 'biznes-finance',
  'marredhenie-publike': 'publike-marketing', marketing: 'publike-marketing', ligjore: 'ligjore',
};
