import React from 'react';
import { Music2, ExternalLink, Disc3 } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export const MediaSection: React.FC = () => {
  return (
    <section id="musica" className="py-20 lg:py-28 relative z-10 bg-[#000000]/70 border-t border-[#D9CDB5]/10">
      <Container size="lg">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-black text-[#AB2217] uppercase tracking-widest">
            Repertório & Influências
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#D9CDB5] uppercase tracking-wider">
            OUÇA A REVANCHE
          </h2>
          <p className="text-base sm:text-lg text-[#D9CDB5]/90 font-medium">
            Confira a playlist oficial no Spotify com a seleção de faixas que compõem o repertório ao vivo do show.
          </p>
        </div>

        {/* Player Spotify com Container Estável (Zero CLS) */}
        <div className="max-w-4xl mx-auto bg-[#000000]/90 border-2 border-[#AB2217]/60 rounded-lg p-4 sm:p-6 shadow-[0_0_35px_rgba(0,0,0,0.9)] space-y-4">
          <div className="flex items-center justify-between border-b border-[#D9CDB5]/10 pb-3">
            <div className="flex items-center gap-2.5">
              <Disc3 className="w-5 h-5 text-[#AB2217]" />
              <h3 className="text-base sm:text-lg font-black text-[#D9CDB5] uppercase tracking-wide">
                Playlist Oficial no Spotify
              </h3>
            </div>
            <a
              href={siteConfig.socials.spotifyPlaylist}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-bold text-[#D9CDB5] hover:text-[#AB2217] transition-colors flex items-center gap-1"
            >
              <span>Abrir App</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#AB2217]" />
            </a>
          </div>

          <div className="w-full min-h-[380px] rounded-lg overflow-hidden shadow-2xl bg-transparent">
            <iframe
              src={siteConfig.socials.spotifyEmbed}
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Playlist Oficial Banda Revanche no Spotify"
              className="w-full"
            />
          </div>
        </div>

        <div className="mt-10 text-center flex flex-wrap items-center justify-center gap-4">
          <Button
            href={siteConfig.socials.spotifyPlaylist}
            variant="primary"
            size="md"
            isExternal
            className="gap-2 font-bold"
          >
            <Music2 className="w-4 h-4" />
            <span>Seguir Playlist no Spotify</span>
          </Button>
          <Button href="/musica" variant="outline" size="md" className="font-bold">
            Ver Repertório do Show
          </Button>
        </div>
      </Container>
    </section>
  );
};
