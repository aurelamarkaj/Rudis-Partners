import type { Metadata } from 'next';
import { AboutPage } from '@/components/AboutPage';
import { en } from '@/content/en';
export const metadata: Metadata = { title: 'Who we are | Rudis & Partners', description: 'Brand. Reputation. Experience. Meet Rudis & Partners and discover our areas of consultancy.', robots: { index: false, follow: false }, alternates: { languages: { sq: '/kush-jemi', en: '/en/about' } } };
export default function Page() { return <AboutPage content={en} />; }
