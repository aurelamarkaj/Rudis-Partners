import { businessServices, type BusinessService } from './business';
import { marketingServices } from './marketing';
import { legalServices } from './legal';
import type { Locale } from './types';
export const servicePages = [...businessServices, ...marketingServices, ...legalServices];
export const isMarketing = (service: BusinessService) => marketingServices.some(s => s.slug.sq === service.slug.sq);
export const isLegal = (service: BusinessService) => legalServices.some(s => s.slug.sq === service.slug.sq);
export const categoryTitle = (service: BusinessService, locale: Locale) => isLegal(service) ? (locale === 'sq' ? 'Konsulencë Ligjore' : 'Legal Consulting') : isMarketing(service)
  ? (locale === 'sq' ? 'Marrëdhënie Publike & Marketing' : 'Public Relations & Marketing')
  : (locale === 'sq' ? 'Biznes & Financë' : 'Business & Finance');
