import React, { Suspense } from 'react';
import { Box, CircularProgress } from '@mui/material';
import ProjectsPageContent from './page-content';
import { createMetadata } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import { getBreadcrumbSchema } from '@/lib/structured-data';

// ISR - revalidate every 300 seconds (5 minutes) 
export const revalidate = 300;

export const metadata = createMetadata({
  title: 'Exhibition Stand Portfolio | Messe.ae Projects',
  description:
    'Explore Messe projects — exhibition stand builder & contractor in Dubai & UAE. See our custom exhibition stand designs for trade shows and events worldwide.',
  path: '/projects',
  keywords: ['exhibition stand portfolio', 'trade show booth showcase', 'messe.ae projects'],
});

const projectsBreadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
]);

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={projectsBreadcrumbSchema} />
    <Suspense 
      fallback={
        <Box sx={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <CircularProgress />
        </Box>
      }
    >
      <ProjectsPageContent />
    </Suspense>
    </>
  );
}
