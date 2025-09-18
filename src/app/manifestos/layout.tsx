import type { ReactNode } from 'react';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Ethical Business Manifestos | Messe.ae',
  description:
    'Download Messe.ae ethical business manifestos covering health, safety, sustainability, and anti-corruption commitments for exhibition projects.',
  path: '/manifestos',
  keywords: ['ethical manifestos', 'messe.ae policies', 'sustainability commitments'],
});

export default function ManifestosLayout({ children }: { children: ReactNode }) {
  return children;
}
