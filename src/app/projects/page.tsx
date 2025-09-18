import React, { Suspense } from 'react';
import { Box, CircularProgress } from '@mui/material';
import ProjectsPageContent from './page-content';
import { createMetadata } from '@/lib/seo';

// ISR - revalidate every 300 seconds (5 minutes) 
export const revalidate = 300;

export const metadata = createMetadata({
  title: 'Exhibition Stand Portfolio | Messe.ae Projects',
  description:
    'Browse Messe.ae exhibition stand projects across Dubai, the UAE, and international venues. See custom booths, double-deck stands, and immersive trade show experiences.',
  path: '/projects',
  keywords: ['exhibition stand portfolio', 'trade show booth showcase', 'messe.ae projects'],
});

export default function ProjectsPage() {
  return (
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
  );
}
