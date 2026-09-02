export interface MemberSocials {
  instagram?: string;
  twitter?: string;
  tiktok?: string;
  twitch?: string;
}

export interface BandMember {
  slug: string;
  name: string;
  role: string;
  image: string;
  imagePosition?: string;
  bioParagraphs: string[];
  socials: MemberSocials;
}
