import type { ReactNode } from 'react';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Careers at Messe.ae | Join Our Exhibition Stand Team',
  description:
    'Explore open positions at Messe.ae and join our exhibition stand experts in Dubai. View current roles, responsibilities, and benefits.',
  path: '/careers',
  keywords: ['messe.ae careers', 'exhibition jobs dubai', 'join messe.ae team'],
});

export default function CareersLayout({ children }: { children: ReactNode }) {
  return children;
}
