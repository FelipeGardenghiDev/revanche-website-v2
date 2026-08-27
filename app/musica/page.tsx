import type { Metadata } from 'next';
import { Music, Disc3, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Música & Repertório',
  description:
    'Conheça o repertório do show da Banda Revanche: tributo aos maiores clássicos da Fresno e hinos do Emo dos anos 2000.',
  alternates: {
    canonical: `${siteConfig.url}/musica`,
  },
};

const fresnoHighlights = [
  'Quebre As Correntes',
  'Alguém Que Te Faz Sorrir',
  'Desde Quando Você Se Foi',
  'Polo',
  'Eu Sei',
  'Cada Poça Dessa Rua Tem Um Pouco De Minhas Lágrimas',
  'Porto Alegre',
  'Redenção',
  'Onde Está',
  'Manifesto',
  'Maior Que As Muralhas',
  'Sua Alegria Foi Cancelada',
];

const emoClassics = [
  'Razões e Emoções (NX Zero)',
  'Cedo Ou Tarde (NX Zero)',
  'Um Minuto Para O Fim Do Mundo (CPM 22)',
  'Dias Atrás (CPM 22)',
  'Paraíso Proibido (Strike)',
  'O Segundo Sol / História de Verão (Forfun)',
  'Helena (My Chemical Romance)',
  'I’m Not Okay (I Promise) (My Chemical Romance)',
  'Misery Business (Paramore)',
  'MakeDamnSure (Taking Back Sunday)',
  'The Middle (Jimmy Eat World)',
  'Basket Case (Green Day)',
];

export default function MusicaPage() {
  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <Container size="lg">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-black text-[#AB2217] uppercase tracking-widest">
            Repertório do Show
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#D9CDB5] uppercase tracking-wider">
            MÚSICA & SETLIST
          </h1>
          <p className="text-base sm:text-lg text-[#D9CDB5]/90 leading-relaxed font-medium">
            Músicas que compõem o repertório ao vivo do show da Banda Revanche.
          </p>
        </div>

        {/* Player Spotify Embed */}
        <div className="mb-16 max-w-4xl mx-auto bg-[#000000]/90 border-2 border-[#AB2217] rounded-lg p-4 sm:p-6 shadow-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-[#D9CDB5]/10 pb-3">
            <div className="flex items-center gap-2.5">
              <Disc3 className="w-5 h-5 text-[#AB2217]" />
              <h2 className="text-lg sm:text-xl font-black text-[#D9CDB5] uppercase">
                Playlist Oficial no Spotify
              </h2>
            </div>
            <a
              href={siteConfig.socials.spotifyPlaylist}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-bold text-[#D9CDB5] hover:text-[#AB2217] transition-colors flex items-center gap-1"
            >
              <span>Abrir no App</span>
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
              title="Playlist Banda Revanche Spotify"
              className="w-full"
            />
          </div>
        </div>

        {/* Grades de Repertório do Show */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto mb-16">
          {/* Especial Fresno */}
          <div className="bg-[#000000]/80 border-2 border-[#AB2217]/60 p-6 sm:p-8 rounded-lg shadow-2xl space-y-6">
            <div className="border-b border-[#AB2217]/40 pb-3 flex items-center gap-3">
              <Music className="w-5 h-5 text-[#AB2217]" />
              <h2 className="text-xl sm:text-2xl font-black text-[#D9CDB5] uppercase">
                Especial Fresno
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#D9CDB5]/80">
              Faixas de todas as fases da discografia da Fresno presentes no setlist:
            </p>
            <ul className="space-y-2.5">
              {fresnoHighlights.map((song, i) => (
                <li
                  key={i}
                  className="text-sm sm:text-base font-semibold text-[#D9CDB5] flex items-center gap-2"
                >
                  <span className="text-xs text-[#AB2217] font-black">›</span>
                  <span>{song}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Clássicos Emo & Pop Punk */}
          <div className="bg-[#000000]/80 border-2 border-[#D9CDB5]/30 p-6 sm:p-8 rounded-lg shadow-2xl space-y-6">
            <div className="border-b border-[#D9CDB5]/20 pb-3 flex items-center gap-3">
              <Music className="w-5 h-5 text-[#AB2217]" />
              <h2 className="text-xl sm:text-2xl font-black text-[#D9CDB5] uppercase">
                Hinos Emo dos Anos 2000
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#D9CDB5]/80">
              Clássicos do rock nacional e internacional dos anos 2000 que completam a apresentação:
            </p>
            <ul className="space-y-2.5">
              {emoClassics.map((song, i) => (
                <li
                  key={i}
                  className="text-sm sm:text-base font-semibold text-[#D9CDB5] flex items-center gap-2"
                >
                  <span className="text-xs text-[#AB2217] font-black">›</span>
                  <span>{song}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Contato */}
        <div className="text-center">
          <Button href="/contato" variant="primary" size="lg" className="font-bold">
            Contratar Banda Revanche
          </Button>
        </div>
      </Container>
    </div>
  );
}
