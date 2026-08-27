import type { SiteConfig, NavItem } from '@/types/site';

export const siteConfig: SiteConfig = {
  name: 'REVANCHE',
  tagline: 'Tributo Fresno & Emo Anos 2000',
  description:
    'Site oficial da Banda Revanche. Tributo à Fresno e aos clássicos do emo dos anos 2000. Confira a agenda de shows, músicas, fotos e informações para contratação.',
  url: 'https://bandarevanche.com.br',
  ogImage: '/images/banda/banda.jpg',
  contact: {
    email: 'contato@bandarevanche.com.br',
    phoneFormatted: '(16) 99373-3667',
    whatsappNumber: '5516993733667',
    whatsappUrl:
      'https://wa.me/5516993733667?text=Olá!%20Gostaria%20de%20conversar%20sobre%20a%20banda%20Revanche',
  },
  socials: {
    instagram: 'https://www.instagram.com/banda.revanche',
    tiktok: 'https://www.tiktok.com/@bandarevanche',
    spotifyPlaylist:
      'https://open.spotify.com/playlist/3uoiG5vPNcJg1i81Dlv5Ae?si=e4ea4917f46c40c7',
    spotifyEmbed:
      'https://open.spotify.com/embed/playlist/3uoiG5vPNcJg1i81Dlv5Ae?utm_source=generator',
  },
  mediaKitUrl:
    'https://drive.google.com/drive/u/1/folders/1cFX9JKjox9bJHMlQsqnNhRazXJTA3mfc',
  googleAnalyticsId: 'G-JV5TTWHF0W',
};

export const mainNavItems: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'A Banda', href: '/banda' },
  { label: 'Agenda', href: '/agenda' },
  { label: 'Música', href: '/musica' },
  { label: 'Vídeos', href: '/videos' },
  { label: 'Fotos', href: '/fotos' },
  { label: 'Imprensa', href: '/imprensa' },
  { label: 'Contato', href: '/contato' },
];
