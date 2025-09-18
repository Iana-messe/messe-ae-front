import type { ReactNode } from 'react';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'Ethical Business Manifestos | Messe.ae',
  description:
    'Messe manifestos — our principles on sustainability, labor welfare, and innovation in exhibition stand design and contracting across Dubai, UAE, and globally.',
  path: '/manifestos',
  keywords: ['ethical manifestos', 'messe.ae policies', 'sustainability commitments'],
});

export default function ManifestosLayout({ children }: { children: ReactNode }) {
  return children;
}
