import type { ReactNode } from 'react';
import type { Locale } from '@/content/types';
import '@/app/globals.css';

export function Document({ children, locale }: { children: ReactNode; locale: Locale }) {
  return <html lang={locale}><head><link rel="preload" href="/fonts/serif-semibold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" /></head><body>{children}</body></html>;
}
