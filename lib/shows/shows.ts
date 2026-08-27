import type {
  Show,
  HighlightShow,
  ShowsApiResponse,
  HighlightApiResponse,
} from '@/types/show';

const SHOWS_GIST_URL =
  'https://gist.githubusercontent.com/FelipeGardenghiDev/9fea95f74a0332c987f15696a9b90676/raw/shows.json';

const HIGHLIGHT_GIST_URL =
  'https://gist.githubusercontent.com/FelipeGardenghiDev/96614c87cef583b468929165d58353c7/raw/show-destaque.json';

// Fallback data in case the external Gist is unreachable
const FALLBACK_SHOWS: Show[] = [
  {
    data: '08 AGO 2026',
    local: 'Santeria Bar',
    cidade: 'Sertãozinho/SP',
    status: 'confirmado',
    ingresso_url: 'https://www.instagram.com/santeria_bar',
    ingresso_texto: 'NA PORTA',
  },
  {
    data: '21 AGO 2026',
    local: 'Os Pirata Pub',
    cidade: 'São Carlos/SP',
    status: 'confirmado',
    ingresso_url: 'https://www.instagram.com/ospirata_sao_carlos',
    ingresso_texto: 'NA PORTA',
  },
  {
    data: '29 AGO 2026',
    local: 'ft. HEVO 84 - Toca do Jack',
    cidade: 'Ribeirão Preto/SP',
    status: 'confirmado',
    ingresso_url:
      'https://www.sympla.com.br/evento/emo-vive-nostalgia-hevo84-abertura-com-revanche-sabado-29-08-toca-do-jack/3520421',
    ingresso_texto: 'INGRESSOS!',
  },
  {
    data: '07 NOV 2026',
    local: "NOX FEST - Villa's Espaço de Eventos",
    cidade: 'Sertãozinho/SP',
    status: 'em_breve',
  },
];

const FALLBACK_HIGHLIGHT: HighlightShow = {
  evento: 'Hevo84 + Revanche na Toca do Jack',
  cidade: 'Ribeirão Preto/SP',
  data: '29/08/2026',
  ingresso_url:
    'https://www.sympla.com.br/evento/emo-vive-nostalgia-hevo84-abertura-com-revanche-sabado-29-08-toca-do-jack/3520421',
  ingresso_texto: 'INGRESSOS JÁ DISPONÍVEIS!',
};

/**
 * Retorna a lista de shows da Banda Revanche a partir do Gist oficial
 * com revalidação automática de cache a cada hora (ISR) e tratamento de falha.
 */
export async function getShows(): Promise<Show[]> {
  try {
    const response = await fetch(SHOWS_GIST_URL, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.warn(`[shows] Failed to fetch shows Gist (${response.status}). Using fallback.`);
      return FALLBACK_SHOWS;
    }

    const data = (await response.json()) as ShowsApiResponse;
    if (Array.isArray(data.shows)) {
      return data.shows;
    }

    return [];
  } catch (error) {
    console.error('[shows] Error fetching shows:', error);
    return FALLBACK_SHOWS;
  }
}

/**
 * Retorna o show em destaque atual da banda para exibição no Hero da Home.
 */
export async function getHighlightShow(): Promise<HighlightShow | null> {
  try {
    const response = await fetch(HIGHLIGHT_GIST_URL, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.warn(
        `[shows] Failed to fetch highlight Gist (${response.status}). Using fallback.`
      );
      return FALLBACK_HIGHLIGHT;
    }

    const data = (await response.json()) as HighlightApiResponse;
    if (Array.isArray(data.destaque) && data.destaque.length > 0) {
      return data.destaque[0];
    }

    return null;
  } catch (error) {
    console.error('[shows] Error fetching highlight show:', error);
    return FALLBACK_HIGHLIGHT;
  }
}
