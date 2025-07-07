import { ProjectsResponse, ProjectResponse, ProjectsFilters } from '@/types/api';
import { fetcher } from './config';

export const projectsApi = {
  getProjects: async (filters?: ProjectsFilters): Promise<ProjectsResponse> => {
    const params = new URLSearchParams();
    
    // Populate all fields
    params.append('populate', '*');
    
    // Handle client filters
    if (filters?.clientSlug) {
      params.append('filters[client][slug][$eq]', filters.clientSlug);
    } else if (filters?.clientSlugs && filters.clientSlugs.length > 0) {
      if (filters.clientSlugs.length === 1) {
        // Single client - use simple filter
        params.append('filters[client][slug][$eq]', filters.clientSlugs[0]);
      } else {
        // Multiple clients - use $in operator
        filters.clientSlugs.forEach((slug, index) => {
          params.append(`filters[client][slug][$in][${index}]`, slug);
        });
      }
    }
    
    // Handle size ranges
    if (filters?.sizeRanges && filters.sizeRanges.length > 0) {
      if (filters.sizeRanges.length === 1) {
        // Single range - use simple AND
        const range = filters.sizeRanges[0];
        params.append('filters[totalSize][$gte]', range.min.toString());
        params.append('filters[totalSize][$lte]', range.max.toString());
      } else {
        // Multiple ranges - need complex OR query
        // Note: This might not work perfectly with Strapi's query syntax
        // May need backend adjustment
        filters.sizeRanges.forEach((range, index) => {
          params.append(`filters[$or][${index}][totalSize][$gte]`, range.min.toString());
          params.append(`filters[$or][${index}][totalSize][$lte]`, range.max.toString());
        });
      }
    } else {
      // Fall back to simple min/max if provided
      if (filters?.minSize !== undefined) {
        params.append('filters[totalSize][$gte]', filters.minSize.toString());
      }
      
      if (filters?.maxSize !== undefined) {
        params.append('filters[totalSize][$lte]', filters.maxSize.toString());
      }
    }
    
    // Handle construction types
    if (filters?.constructionType) {
      params.append('filters[constructionType][$eq]', filters.constructionType);
    } else if (filters?.constructionTypes && filters.constructionTypes.length > 0) {
      // For now, handle 'double-decker' and 'events' separately
      const hasDoubleDecker = filters.constructionTypes.includes('double-decker');
      const hasEvents = filters.constructionTypes.includes('events');
      
      if (hasDoubleDecker && !hasEvents) {
        params.append('filters[constructionType][$eq]', 'double-decker');
      } else if (hasEvents && !hasDoubleDecker) {
        params.append('filters[eventType][$eq]', 'event');
      }
      // If both are selected, show all (no filter)
    }
    
    if (filters?.page) {
      params.append('pagination[page]', filters.page.toString());
    }
    
    if (filters?.pageSize) {
      params.append('pagination[pageSize]', filters.pageSize.toString());
    }
    
    const queryString = params.toString();
    console.log('[Projects API] Query string:', queryString);
    
    return fetcher(`/projects?${queryString}`);
  },

  getProjectBySlug: async (slug: string): Promise<ProjectResponse> => {
    const params = new URLSearchParams();
    params.append('filters[slug][$eq]', slug);
    params.append('populate', '*');
    
    const response = await fetcher(`/projects?${params.toString()}`);
    
    if (!response.data || response.data.length === 0) {
      throw new Error('Project not found');
    }
    
    return {
      data: response.data[0],
      meta: response.meta,
    };
  },

  getProjectById: async (documentId: string): Promise<ProjectResponse> => {
    const params = new URLSearchParams();
    params.append('populate', '*');
    
    return fetcher(`/projects/${documentId}?${params.toString()}`);
  },
};