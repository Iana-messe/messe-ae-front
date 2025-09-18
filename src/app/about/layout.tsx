import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata({
  title: 'About Messe.ae | Exhibition Stand Builder & Designer',
  description:
    'Learn about Messe — exhibition stand company in Dubai & UAE. Our team designs and builds custom exhibition stands for global trade shows and events.',
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
