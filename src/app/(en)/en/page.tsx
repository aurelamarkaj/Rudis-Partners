import type { Metadata } from 'next';
import { HomePage } from '@/components/HomePage';
import { en } from '@/content/en';
export const metadata: Metadata = { ...en.meta, robots: { index: false, follow: false }, alternates: { languages: { sq: '/', en: '/en' } } };
export default function Page() { return <HomePage content={en} />; }
