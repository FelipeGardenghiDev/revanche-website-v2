import type { EventGallery } from '@/types/site';
import { siteConfig } from '@/data/site-config';

export const eventGalleries: EventGallery[] = [
  {
    id: 'toca-do-jack-hevo84',
    eventName: 'Hevo84 + Revanche na Toca do Jack',
    date: '29 AGO 2026',
    venue: 'Toca do Jack',
    city: 'Ribeirão Preto/SP',
    photographer: 'Cobertura Oficial',
    driveUrl: siteConfig.mediaKitUrl,
    coverImage: '/images/banda/banda.jpg',
  },
  {
    id: 'os-pirata-sao-carlos',
    eventName: 'Rock Night no Os Pirata Pub',
    date: '21 AGO 2026',
    venue: 'Os Pirata Pub',
    city: 'São Carlos/SP',
    photographer: 'Acervo da Banda',
    driveUrl: siteConfig.mediaKitUrl,
  },
  {
    id: 'santeria-bar-sertaozinho',
    eventName: 'Tributo Emo no Santeria Bar',
    date: '08 AGO 2026',
    venue: 'Santeria Bar',
    city: 'Sertãozinho/SP',
    photographer: 'Acervo da Banda',
    driveUrl: siteConfig.mediaKitUrl,
  },
];
