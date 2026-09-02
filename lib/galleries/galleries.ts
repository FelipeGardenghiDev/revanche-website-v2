import type { EventGallery } from '@/types/site';
import { eventGalleries as fallbackGalleries } from '@/data/galleries';

// Substitua esta URL pelo link RAW do seu Gist com as galerias (ex: .../raw/galerias.json)
const GALLERIES_GIST_URL =
  'https://gist.githubusercontent.com/FelipeGardenghiDev/galerias/raw/galerias.json';

export interface GalleriesApiResponse {
  galerias?: EventGallery[];
}

/**
 * Retorna as galerias de shows da Banda Revanche a partir do Gist oficial
 * com revalidação automática de cache a cada 5 minutos (ISR) e fallback resiliente.
 */
export async function getEventGalleries(): Promise<EventGallery[]> {
  try {
    const response = await fetch(GALLERIES_GIST_URL, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return fallbackGalleries;
    }

    const data = (await response.json()) as GalleriesApiResponse;
    if (Array.isArray(data.galerias) && data.galerias.length > 0) {
      return data.galerias;
    }

    return fallbackGalleries;
  } catch {
    return fallbackGalleries;
  }
}
