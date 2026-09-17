import type { Metadata } from 'next';
import { ServicesPage } from '@/components/ServicesPage';
import { sq } from '@/content/sq';
export const metadata: Metadata = { title: 'Shërbimet tona | Rudis & Partners', description: 'Biznes & Financë, Marrëdhënie Publike & Marketing dhe Konsulencë Ligjore.', robots: { index: false, follow: false }, alternates: { languages: { sq: '/sherbimet-tona', en: '/en/services' } } };
export default function Page() { return <ServicesPage content={sq} />; }
