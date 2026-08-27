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
