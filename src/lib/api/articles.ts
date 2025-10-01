import { ArticlesResponse, ArticleResponse, ArticlesFilters } from '@/types/api';
import { fetcher } from './config';

export const articlesApi = {
  getArticles: async (filters?: ArticlesFilters): Promise<ArticlesResponse> => {
    const params = new URLSearchParams();

    // Populate only required fields for listing
    params.append('populate[category][fields][0]', 'title');
    params.append('populate[category][fields][1]', 'slug');
    params.append('populate[image][fields][0]', 'url');
    params.append('populate[image][fields][1]', 'alternativeText');
    params.append('populate[image][fields][2]', 'formats');
    
    if (filters?.categorySlug) {
      params.append('filters[category][slug][$eq]', filters.categorySlug);
    }
    
    if (filters?.page) {
      params.append('pagination[page]', filters.page.toString());
    }
    
    if (filters?.pageSize) {
      params.append('pagination[pageSize]', filters.pageSize.toString());
    }
    
    if (filters?.sort) {
      params.append('sort', filters.sort);
    } else {
      // Default sort by createDate descending
      params.append('sort', 'createDate:desc');
    }
    
    const queryString = params.toString();
    console.log('[Articles API] Query string:', queryString);
    
    return fetcher(`/articles?${queryString}`);
  },

  getArticleBySlug: async (slug: string): Promise<ArticleResponse> => {
    const params = new URLSearchParams();
    params.append('filters[slug][$eq]', slug);
    // For detail page, populate all necessary fields
    params.append('populate[category][fields][0]', 'title');
    params.append('populate[category][fields][1]', 'slug');
    params.append('populate[category][fields][2]', 'description');
    params.append('populate[image][fields][0]', 'url');
    params.append('populate[image][fields][1]', 'alternativeText');
    params.append('populate[image][fields][2]', 'formats');
    params.append('populate[image][fields][3]', 'width');
    params.append('populate[image][fields][4]', 'height');
    
    const response = await fetcher(`/articles?${params.toString()}`);
    
    if (!response.data || response.data.length === 0) {
      throw new Error('Article not found');
    }
    
    return {
      data: response.data[0],
      meta: response.meta,
    };
  },
};