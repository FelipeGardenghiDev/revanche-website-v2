'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, FolderOpen, ExternalLink } from 'lucide-react';
import type { EventGallery } from '@/types/site';

interface EventGalleriesCarouselProps {
  galleries: EventGallery[];
}

export const EventGalleriesCarousel: React.FC<EventGalleriesCarouselProps> = ({ galleries }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [galleries]);

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    const cardWidth = containerRef.current.firstElementChild
      ? (containerRef.current.firstElementChild as HTMLElement).clientWidth + 24
      : 340;
    const delta = direction === 'left' ? -cardWidth : cardWidth;
    containerRef.current.scrollBy({ left: delta, behavior: 'smooth' });
  };

  if (!galleries || galleries.length === 0) {
    return null;
  }

  return (
    <div className="relative max-w-6xl mx-auto px-1 sm:px-4">
      {/* Controles do Carrossel (Topo Direito) */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-bold text-[#D9CDB5]/70">
          Mostrando {galleries.length} {galleries.length === 1 ? 'evento' : 'eventos com fotos'}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Ver eventos anteriores"
            className="w-9 h-9 rounded-full border border-[#D9CDB5]/30 bg-[#000000]/80 text-[#D9CDB5] hover:border-[#AB2217] hover:text-[#AB2217] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Ver próximos eventos"
            className="w-9 h-9 rounded-full border border-[#D9CDB5]/30 bg-[#000000]/80 text-[#D9CDB5] hover:border-[#AB2217] hover:text-[#AB2217] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Container Carrossel com Scroll-Snap */}
      <div
        ref={containerRef}
        onScroll={checkScroll}
        className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth pb-4 pt-1 snap-x snap-mandatory scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {galleries.map((gallery) => (
          <div
            key={gallery.id}
            className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 snap-start bg-[#000000]/85 border-2 border-[#D9CDB5]/25 hover:border-[#AB2217] p-5 sm:p-6 rounded-lg shadow-xl flex flex-col justify-between space-y-5 transition-all group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#D9CDB5]/10 pb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-[#AB2217]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{gallery.date}</span>
                </span>
                {gallery.photographer && (
                  <span className="text-[11px] font-bold text-[#D9CDB5]/60 bg-[#D9CDB5]/10 px-2 py-0.5 rounded truncate max-w-[120px]">
                    {gallery.photographer}
                  </span>
                )}
              </div>

              <h3 className="text-base sm:text-lg font-black text-[#D9CDB5] group-hover:text-[#AB2217] transition-colors line-clamp-2 min-h-[3rem]">
                {gallery.eventName}
              </h3>

              <div className="flex items-center gap-1.5 text-xs text-[#D9CDB5]/80 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#AB2217] shrink-0" />
                <span className="truncate">
                  {gallery.venue} • {gallery.city}
                </span>
              </div>
            </div>

            <a
              href={gallery.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 text-xs font-extrabold uppercase bg-[#AB2217] text-[#FFFFFF] hover:bg-[#AB2217]/85 rounded flex items-center justify-center gap-2 transition-colors shadow-md group-hover:shadow-[#AB2217]/30"
            >
              <FolderOpen className="w-4 h-4" />
              <span>Ver Fotos no Drive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
