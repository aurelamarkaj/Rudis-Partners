import type { Metadata } from 'next';
import { ServicesPage } from '@/components/ServicesPage';
import { en } from '@/content/en';
export const metadata: Metadata = { title: 'Our services | Rudis & Partners', description: 'Business & Finance, Public Relations & Marketing and Legal Consulting.', robots: { index: false, follow: false }, alternates: { languages: { sq: '/sherbimet-tona', en: '/en/services' } } };
export default function Page() { return <ServicesPage content={en} />; }
