import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: { default: 'Livora — lifestyle, mode & beauty', template: '%s | Livora' },
  description: 'Een Nederlandstalig magazine over lifestyle, mode, beauty en helemaal jezelf zijn.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="nl"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
