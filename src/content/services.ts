import type { Locale } from './types';
import { businessServices } from './business';
import { marketingServices } from './marketing';
export type ServiceGroup = { id: string; title: string; image: string; items: string[] };
export const servicesContent: Record<Locale, { title: string; groups: ServiceGroup[]; detailsSoon: string }> = {
  sq: {
    title: 'Shërbimet tona', detailsSoon: 'Faqet e detajuara të shërbimeve: së shpejti.',
    groups: [
      { id: 'biznes-finance', title: 'Biznes & Financë', image: '/images/service-finance.webp', items: businessServices.map(s => s.title.sq) },
      { id: 'publike-marketing', title: 'Marrëdhënie Publike & Marketing', image: '/images/service-pr.webp', items: marketingServices.map(s => s.title.sq) },
      { id: 'ligjore', title: 'Konsulencë Ligjore', image: '/images/service-legal.webp', items: [
        'Administrative', 'E drejta e punës', 'Dëme pasurore & morale', 'Falimenti', 'Dogana', 'Familjare', 'Kontrata', 'Penale', 'Pronësia Industriale & Intelektuale', 'Pronësia', 'Tatime & Taksa', 'Tregtare',
      ] },
    ],
  },
  en: {
    title: 'Our services', detailsSoon: 'Detailed service pages: coming soon.',
    groups: [
      { id: 'biznes-finance', title: 'Business & Finance', image: '/images/service-finance.webp', items: businessServices.map(s => s.title.en) },
      { id: 'publike-marketing', title: 'Public Relations & Marketing', image: '/images/service-pr.webp', items: marketingServices.map(s => s.title.en) },
      { id: 'ligjore', title: 'Legal Consulting', image: '/images/service-legal.webp', items: [
        'Administrative Law', 'Employment Law', 'Material & Non-material Damages', 'Bankruptcy', 'Customs', 'Family Law', 'Contracts', 'Criminal Law', 'Industrial & Intellectual Property', 'Property', 'Taxes & Duties', 'Commercial Law',
      ] },
    ],
  },
};
