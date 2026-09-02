import type { EventGallery } from '@/types/site';
import { eventGalleries as fallbackGalleries } from '@/data/galleries';

// URL oficial RAW do Gist com as informações das galerias de shows
const GALLERIES_GIST_URL =
  'https://gist.githubusercontent.com/FelipeGardenghiDev/b50cfd1d73d576115a1909cbcbdc1573/raw';

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
