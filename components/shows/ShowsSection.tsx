import React from 'react';
import type { Show } from '@/types/show';
import { Container } from '@/components/layout/Container';
import { ShowTable } from '@/components/shows/ShowTable';
import { ShowCards } from '@/components/shows/ShowCards';
import { EmptyShows } from '@/components/shows/EmptyShows';

interface ShowsSectionProps {
  shows: Show[];
  title?: string;
  subtitle?: string;
}

export const ShowsSection: React.FC<ShowsSectionProps> = ({
  shows,
  title = 'AGENDA DE SHOWS',
  subtitle = 'Confira as datas confirmadas da turnê e garanta seus ingressos.',
}) => {
  const hasShows = shows && shows.length > 0;

  return (
    <section id="agenda" className="py-20 lg:py-28 relative z-10 bg-[#000000]/60">
      <Container size="lg">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-black text-[#AB2217] uppercase tracking-widest">
            Ao Vivo & Na Estrada
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#D9CDB5] uppercase tracking-wider">
            {title}
          </h2>
          {subtitle && (
            <p className="text-base sm:text-lg text-[#D9CDB5]/90 font-medium">
              {subtitle}
            </p>
          )}
        </div>

        {hasShows ? (
          <div className="space-y-6 max-w-5xl mx-auto">
            <ShowTable shows={shows} />
            <ShowCards shows={shows} />
          </div>
        ) : (
          <EmptyShows />
        )}
      </Container>
    </section>
  );
};
