import type { Metadata } from 'next';
import { AboutPage } from '@/components/AboutPage';
import { sq } from '@/content/sq';
export const metadata: Metadata = { title: 'Kush jemi | Rudis & Partners', description: 'Markë. Reputacion. Përvojë. Njihuni me Rudis & Partners dhe fushat tona të konsulencës.', robots: { index: false, follow: false }, alternates: { languages: { sq: '/kush-jemi', en: '/en/about' } } };
export default function Page() { return <AboutPage content={sq} />; }
