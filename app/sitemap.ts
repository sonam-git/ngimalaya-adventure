import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ngimalayaadventure.com'
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/services',
    '/treks',
    '/peak-expedition',
    '/safari',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Trek regions
  const regions = [
    'everest',
    'annapurna',
    'langtang',
    'manaslu',
    'dolpo',
    'kanchenjunga',
    'makalu',
    'dhaulagiri',
    'rolwaling',
    'other-regions',
  ].map((region) => ({
    url: `${baseUrl}/regions/${region}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...regions]
}
