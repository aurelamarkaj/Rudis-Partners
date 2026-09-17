import type { Metadata } from 'next';
import { HomePage } from '@/components/HomePage';
import { sq } from '@/content/sq';
export const metadata: Metadata = { ...sq.meta, robots: { index: false, follow: false }, alternates: { languages: { sq: '/', en: '/en' } } };
export default function Page() { return <HomePage content={sq} />; }
