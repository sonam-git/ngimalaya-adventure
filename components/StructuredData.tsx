import React from 'react';

const StructuredData: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Ngimalaya Adventure',
    alternateName: 'Ngimalaya Trekking',
    url: 'https://ngimalayaadventure.com',
    logo: 'https://ngimalayaadventure.com/logo.png',
    description: 'Expert Sherpa-owned trekking and expedition company in Nepal offering authentic Himalayan adventures, peak climbing, and wildlife safaris.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NP',
      addressLocality: 'Kathmandu',
      addressRegion: 'Bagmati',
    },
    telephone: '+977-980-3499156',
    email: 'ngiman81@gmail.com',
    sameAs: [
      'https://www.facebook.com/ngimalayaadventure',
      'https://www.instagram.com/ngimalayaadventure',
      'https://twitter.com/ngimalaya',
    ],
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Nepal',
    },
    founder: {
      '@type': 'Person',
      name: 'Ngima Sherpa',
      nationality: 'Nepalese',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ngimalaya Adventure',
    url: 'https://ngimalayaadventure.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://ngimalayaadventure.com/treks?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Trekking and Expedition Services',
    provider: {
      '@type': 'TravelAgency',
      name: 'Ngimalaya Adventure',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Nepal',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Trekking Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Trip',
            name: 'Everest Base Camp Trek',
            description: 'Classic trek to Everest Base Camp with expert Sherpa guides',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Trip',
            name: 'Annapurna Circuit Trek',
            description: 'Complete circuit around the Annapurna massif',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Trip',
            name: 'Peak Climbing Expeditions',
            description: 'Guided expeditions to Himalayan peaks',
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ngimalayaadventure.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Treks',
        item: 'https://ngimalayaadventure.com/treks',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Peak Expeditions',
        item: 'https://ngimalayaadventure.com/peak-expedition',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Safari',
        item: 'https://ngimalayaadventure.com/safari',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default StructuredData;
