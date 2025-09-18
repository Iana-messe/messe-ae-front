import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'About Messe.ae | Exhibition Stand Builder & Designer',
  description:
    'Discover Messe.ae, part of Expoglobal Group. Learn about our 20+ years of exhibition stand experience delivering award-winning booths across Dubai and the UAE.',
  path: '/about',
  keywords: ['about messe.ae', 'expoglobal group', 'exhibition stand team'],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
