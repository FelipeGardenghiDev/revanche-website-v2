import React from 'react';
import Image from 'next/image';
import { Calendar, Ticket, Music2, ExternalLink, MapPin } from 'lucide-react';
import type { HighlightShow } from '@/types/show';
import { siteConfig } from '@/data/site-config';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

interface HeroSectionProps {
  highlightShow: HighlightShow | null;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ highlightShow }) => {
  const hasHighlight = !!highlightShow;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Fotografia Real da Banda como Fundo com Iluminação de Palco */}
      <div className="absolute inset-0 z-0 animate-fade-in">
        <Image
          src="/images/banda/banda.jpg"
          alt="Banda Revanche no palco"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 scale-105 filter contrast-110 brightness-90"
        />
        {/* Overlays de contraste para legibilidade perfeita */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/70 to-[#000000]/90" />
        <div className="absolute inset-0 bg-radial from-[#AB2217]/25 via-transparent to-[#000000]/80 pointer-events-none" />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 lg:space-y-10">
          
          {/* Logo Principal Oficial */}
          <div className="relative w-[90vw] max-w-[360px] sm:max-w-[480px] md:max-w-[580px] lg:max-w-[680px] xl:max-w-[760px] h-52 sm:h-64 md:h-72 lg:h-80 xl:h-96 mx-auto flex items-center justify-center">
            <Image
              src="/logos/Logo-Revanche-PNG.png"
              alt="Logo Oficial Banda Revanche"
              fill
              sizes="(max-width: 640px) 95vw, (max-width: 768px) 480px, (max-width: 1024px) 680px, 760px"
              priority
              className="object-contain filter drop-shadow-[0_0_35px_rgba(171,34,23,0.75)] scale-135 sm:scale-120 md:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Subtítulo & Identificação Direta */}
          <div className="space-y-2">
            <h1 className="text-lg sm:text-2xl md:text-3xl font-black text-[#D9CDB5] tracking-widest uppercase">
              Tributo Fresno & Emo Anos 2000
            </h1>
            <p className="text-sm sm:text-base text-[#D9CDB5]/80 font-medium tracking-wide">
              Ribeirão Preto e região / SP
            </p>
          </div>

          {/* Próximo Show em Destaque */}
          {hasHighlight && (
            <div className="w-full max-w-2xl bg-[#000000]/90 border-2 border-[#AB2217] p-5 sm:p-6 rounded-lg shadow-[0_0_35px_rgba(171,34,23,0.35)] backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between border-b border-[#AB2217]/40 pb-3">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#D9CDB5] uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#AB2217] animate-ping" />
                  Próximo Show
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#D9CDB5]/90 uppercase flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#AB2217]" />
                  {highlightShow.cidade}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-left space-y-1">
                  <div className="text-xl sm:text-2xl font-black text-[#D9CDB5] tracking-wide">
                    {highlightShow.evento}
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-[#D9CDB5]/90">
                    <span className="text-[#AB2217] font-black text-base sm:text-lg">
                      {highlightShow.data}
                    </span>
                    {highlightShow.local && ` — ${highlightShow.local}`}
                  </div>
                </div>

                {highlightShow.ingresso_url ? (
                  <Button
                    href={highlightShow.ingresso_url}
                    variant="primary"
                    size="md"
                    isExternal
                    className="gap-2 shrink-0 text-xs sm:text-sm font-black tracking-wider"
                  >
                    <Ticket className="w-4 h-4" />
                    <span>{highlightShow.ingresso_texto || 'Ingressos'}</span>
                  </Button>
                ) : (
                  <Button
                    href="/agenda"
                    variant="secondary"
                    size="md"
                    className="gap-2 shrink-0 text-xs sm:text-sm font-bold"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Ver Agenda</span>
                  </Button>
                )}
              </div>
            </div>
          )}

          {/* Ações Rápidas */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full max-w-xs sm:max-w-none mx-auto">
            <Button
              href="/agenda"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto gap-2 shadow-xl text-sm sm:text-base font-black tracking-wider"
            >
              <Calendar className="w-5 h-5" />
              <span>Ver Agenda de Shows</span>
            </Button>
            <Button
              href={siteConfig.socials.spotifyPlaylist}
              variant="outline"
              size="lg"
              isExternal
              className="w-full sm:w-auto gap-2 text-sm sm:text-base font-bold"
            >
              <Music2 className="w-5 h-5 text-[#AB2217]" />
              <span>Ouvir no Spotify</span>
            </Button>
          </div>

          {/* Links para Canais Oficiais */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 pt-4 border-t border-[#D9CDB5]/15 text-xs sm:text-sm font-bold uppercase">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D9CDB5] hover:text-[#AB2217] transition-colors flex items-center gap-1.5"
            >
              <span>Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#AB2217]" />
            </a>
            <span className="text-[#D9CDB5]/30">•</span>
            <a
              href={siteConfig.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D9CDB5] hover:text-[#AB2217] transition-colors flex items-center gap-1.5"
            >
              <span>TikTok</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#AB2217]" />
            </a>
            <span className="text-[#D9CDB5]/30">•</span>
            <a
              href={siteConfig.socials.spotifyPlaylist}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D9CDB5] hover:text-[#AB2217] transition-colors flex items-center gap-1.5"
            >
              <span>Spotify</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#AB2217]" />
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
};
