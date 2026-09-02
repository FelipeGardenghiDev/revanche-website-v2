export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface Partner {
  name: string;
  instagram: string;
  image: string;
}

export interface EventGallery {
  id: string;
  eventName: string;
  date: string;
  venue: string;
  city: string;
  driveUrl: string;
  coverImage?: string;
  photographer?: string;
}

export interface MerchItem {
  id: string;
  name: string;
  category: string;
  estimatedPrice: string;
  image: string;
  status: 'em_breve' | 'em_producao' | 'disponivel';
  sizes?: string[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  contact: {
    email: string;
    phoneFormatted: string;
    whatsappNumber: string;
    whatsappUrl: string;
  };
  socials: {
    instagram: string;
    tiktok: string;
    spotifyPlaylist: string;
    spotifyEmbed: string;
  };
  mediaKitUrl: string;
  googleAnalyticsId: string;
}
