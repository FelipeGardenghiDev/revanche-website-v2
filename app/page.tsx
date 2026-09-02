import React from 'react';
import { getShows, getHighlightShow } from '@/lib/shows/shows';
import { HeroSection } from '@/components/home/HeroSection';
import { BandSection } from '@/components/band/BandSection';
import { ShowsSection } from '@/components/shows/ShowsSection';
import { MediaSection } from '@/components/home/MediaSection';
import { PartnersSection } from '@/components/home/PartnersSection';
import { ContactSection } from '@/components/home/ContactSection';

export const revalidate = 300; // ISR revalidation every 5 minutes

export default async function HomePage() {
  const [shows, highlightShow] = await Promise.all([
    getShows(),
    getHighlightShow(),
  ]);

  return (
    <div className="flex flex-col">
      <HeroSection highlightShow={highlightShow} />
      <ShowsSection shows={shows} />
      <BandSection />
      <MediaSection />
      <PartnersSection />
      <ContactSection />
    </div>
  );
}
