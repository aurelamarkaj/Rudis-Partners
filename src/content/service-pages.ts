import { businessServices, type BusinessService } from './business';
import { marketingServices } from './marketing';
import type { Locale } from './types';
export const servicePages = [...businessServices, ...marketingServices];
export const isMarketing = (service: BusinessService) => marketingServices.some(s => s.slug.sq === service.slug.sq);
export const categoryTitle = (service: BusinessService, locale: Locale) => isMarketing(service)
  ? (locale === 'sq' ? 'Marrëdhënie Publike & Marketing' : 'Public Relations & Marketing')
  : (locale === 'sq' ? 'Biznes & Financë' : 'Business & Finance');
