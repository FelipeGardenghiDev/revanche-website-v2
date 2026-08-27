import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/banda',
    '/agenda',
    '/musica',
    '/videos',
    '/fotos',
    '/imprensa',
    '/contato',
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/agenda' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
