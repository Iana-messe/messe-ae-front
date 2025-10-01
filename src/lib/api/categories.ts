import { CategoriesResponse, CategoryResponse, CategoriesFilters } from '@/types/api';
import { fetcher } from './config';

export const categoriesApi = {
  getCategories: async (filters?: CategoriesFilters): Promise<CategoriesResponse> => {
    const params = new URLSearchParams();

    // Categories are simple entities, no need to populate relations
    // Only populate if there are related fields in the future
    
    if (filters?.page) {
      params.append('pagination[page]', filters.page.toString());
    }
    
    if (filters?.pageSize) {
      params.append('pagination[pageSize]', filters.pageSize.toString());
    }
    
    if (filters?.sort) {
      params.append('sort', filters.sort);
    } else {
      // Default sort by title ascending
      params.append('sort', 'title:asc');
    }
    
    const queryString = params.toString();
    console.log('[Categories API] Query string:', queryString);
    
    return fetcher(`/categories?${queryString}`);
  },

  getCategoryBySlug: async (slug: string): Promise<CategoryResponse> => {
    const params = new URLSearchParams();
    params.append('filters[slug][$eq]', slug);
    // Categories are simple entities, no relations to populate
    
    const response = await fetcher(`/categories?${params.toString()}`);
    
    if (!response.data || response.data.length === 0) {
      throw new Error('Category not found');
    }
    
    return {
      data: response.data[0],
      meta: response.meta,
    };
  },
};