import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BusinessPage } from '@/components/BusinessPage';
import { businessHref } from '@/content/business';
import { servicePages } from '@/content/service-pages';
import { en } from '@/content/en';
export const dynamicParams = false;
export function generateStaticParams() { return servicePages.map(s => ({ businessSlug: s.slug.en })); }
type Props = { params: Promise<{ businessSlug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { businessSlug } = await params;
  const s = servicePages.find(s => s.slug.en === businessSlug);
  if (!s) notFound();
  return { title: `${s.title.en} | Rudis & Partners`, description: s.paragraphs.en[0] || s.title.en, robots: { index: false, follow: false }, alternates: { languages: { sq: businessHref(s,'sq'), en: businessHref(s,'en') } } };
}
export default async function Page({ params }: Props) {
  const { businessSlug } = await params;
  const service = servicePages.find(s => s.slug.en === businessSlug);
  if (!service) notFound();
  return <BusinessPage content={en} service={service} />;
}
