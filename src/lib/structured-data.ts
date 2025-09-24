const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://messe.ae';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Messe.ae',
  alternateName: 'Messe Exhibition Services',
  url: siteUrl,
  logo: `${siteUrl}/messe-logo.png`,
  description: 'Leading exhibition stand builder and designer in UAE. We create innovative exhibition stands, trade show displays, and event solutions worldwide.',
  foundingDate: '2004',
  founders: [
    {
      '@type': 'Person',
      name: 'Messe.ae Founders'
    }
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dubai',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE'
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+971-4-548-5887',
      contactType: 'sales',
      email: 'hello@messe.ae',
      areaServed: ['AE', 'SA', 'QA', 'KW', 'BH', 'OM'],
      availableLanguage: ['English', 'Arabic']
    }
  ],
  sameAs: [
    'https://www.facebook.com/messe.ae',
    'https://www.instagram.com/messe.ae',
    'https://www.linkedin.com/company/messe-ae',
    'https://wa.me/971545885887'
  ],
  parentOrganization: {
    '@type': 'Organization',
    name: 'ExpoGlobal',
    url: process.env.NEXT_PUBLIC_PARENT_COMPANY_URL || 'https://www.expoglobal.com'
  }
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Messe.ae',
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/search?q={search_term_string}`
    },
    'query-input': 'required name=search_term_string'
  }
};

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Exhibition Stand Design & Construction',
  provider: {
    '@type': 'Organization',
    name: 'Messe.ae'
  },
  serviceType: 'Exhibition Services',
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide'
  },
  description: 'Professional exhibition stand design and construction services for trade shows and events worldwide.',
  offers: {
    '@type': 'Offer',
    priceRange: '$$$',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${siteUrl}/#footer-section`,
      servicePhone: '+971-4-548-5887',
      availableLanguage: ['English', 'Arabic']
    }
  }
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': `${siteUrl}/#org`,
  name: 'Messe.ae',
  url: siteUrl,
  logo: `${siteUrl}/messe-logo.svg`,
  image: [
    `${siteUrl}/projects/projects_01.jpg`,
    `${siteUrl}/projects/projects_02.jpg`,
    `${siteUrl}/projects/projects_03.jpg`
  ],
  description: 'Exhibition stand contractor in Dubai. Custom exhibition stand design, production and build for trade shows across the UAE and internationally.',
  telephone: '+971-4-548-5887',
  email: 'hello@messe.ae',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress:
      'Dubai Industrial City, KJ Autopart complex, Office building, ground floor, left wing',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    postalCode: '118995',
    addressCountry: 'AE'
  },
  hasMap:
    'https://maps.google.com/?q=UAE,+Dubai,+Dubai+Industrial+City,+KJ+Autopart+complex,+Office+building,+ground+floor,+left+wing.+PO+box+118995',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    }
  ],
  areaServed: [
    { '@type': 'City', name: 'Dubai' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'GeoShape', circle: '25.2048 55.2708 200000' }
  ],
  sameAs: [
    'https://www.facebook.com/messe.ae',
    'https://www.instagram.com/messe.ae',
    'https://www.linkedin.com/company/messe-ae',
    'https://wa.me/971545885887'
  ],
  keywords: [
    'exhibition stand dubai',
    'exhibition stand contractor uae',
    'custom exhibition stands',
    'trade show booth builder dubai',
    'exhibition stand design and build'
  ],
  knowsAbout: [
    'exhibition stand design',
    'exhibition stand production',
    'booth fabrication',
    'turnkey trade show stands',
    'event and exhibition services in Dubai'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Exhibition & Trade Show Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Exhibition Stand Design',
          serviceType: 'exhibition stand design',
          areaServed: 'Dubai, UAE',
          availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: `${siteUrl}/#footer-section`
          }
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Stand Fabrication & Build',
          serviceType: 'exhibition stand contractor / booth builder',
          areaServed: 'Dubai, Abu Dhabi, UAE',
          availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: `${siteUrl}/#footer-section`
          }
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Project Management & On-site Support',
          serviceType: 'exhibition project management',
          areaServed: 'UAE & GCC',
          availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: `${siteUrl}/#footer-section`
          }
        }
      }
    ]
  }
};

export function getArticleSchema(article: {
  title: string;
  description: string;
  image?: string;
  publishedDate: string;
  modifiedDate?: string;
  author?: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image || `${siteUrl}/default-article-image.jpg`,
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    author: {
      '@type': 'Organization',
      name: 'Messe.ae',
      url: siteUrl
    },
    publisher: {
      '@type': 'Organization',
      name: 'Messe.ae',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/messe-logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/articles/${article.slug}`
    }
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}
