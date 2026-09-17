import type { Locale } from './types';
export type PageName = 'home' | 'about' | 'services';
export const routes: Record<Locale, Record<PageName, string>> = {
  sq: { home: '/', about: '/kush-jemi', services: '/sherbimet-tona' },
  en: { home: '/en', about: '/en/about', services: '/en/services' },
};
export const serviceGroup: Record<string, string> = {
  biznes: 'biznes-finance', financa: 'biznes-finance',
  'marredhenie-publike': 'publike-marketing', marketing: 'publike-marketing', ligjore: 'ligjore',
};
