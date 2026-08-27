import type { Metadata } from 'next';
import { Instagram, Video, Camera, Music2, ExternalLink } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Vídeos & Audiovisual',
  description:
    'Acompanhe os registros audiovisuais, reels de palco e bastidores nos canais oficiais da Banda Revanche.',
  alternates: {
    canonical: `${siteConfig.url}/videos`,
  },
};

export default function VideosPage() {
  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <Container size="lg">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-black text-[#AB2217] uppercase tracking-widest">
            Audiovisual & Redes
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#D9CDB5] uppercase tracking-wider">
            VÍDEOS & REGISTROS
          </h1>
          <p className="text-base sm:text-lg text-[#D9CDB5]/90 leading-relaxed font-medium">
            Acompanhe os registros de shows, trechos ao vivo e bastidores diretamente nos canais oficiais da Banda Revanche.
          </p>
        </div>

        {/* Canais Principais de Vídeo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Card Instagram Reels */}
          <div className="bg-[#000000]/90 border-2 border-[#AB2217] p-6 sm:p-8 rounded-lg shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#AB2217]/20 border border-[#AB2217] flex items-center justify-center text-[#AB2217]">
                <Instagram className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-black text-[#D9CDB5] uppercase">
                Instagram Reels
              </h2>
              <p className="text-sm text-[#D9CDB5]/80 leading-relaxed">
                Trechos ao vivo, cobertura das apresentações, dinâmicas de palco e ensaios da banda no feed e nos destaques do Instagram.
              </p>
              <div className="text-base font-bold text-[#D9CDB5]">
                @banda.revanche
              </div>
            </div>

            <Button
              href={siteConfig.socials.instagram}
              variant="primary"
              size="lg"
              isExternal
              fullWidth
              className="gap-2 text-sm font-bold"
            >
              <Instagram className="w-4 h-4" />
              <span>Ver Vídeos no Instagram</span>
            </Button>
          </div>

          {/* Card TikTok */}
          <div className="bg-[#000000]/90 border-2 border-[#D9CDB5]/30 p-6 sm:p-8 rounded-lg shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#D9CDB5]/10 border border-[#D9CDB5]/20 flex items-center justify-center text-[#D9CDB5]">
                <Video className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-black text-[#D9CDB5] uppercase">
                TikTok Oficial
              </h2>
              <p className="text-sm text-[#D9CDB5]/80 leading-relaxed">
                Cortes de palco, bastidores de turnê e momentos descontraídos dos integrantes durante viagens e eventos.
              </p>
              <div className="text-base font-bold text-[#D9CDB5]">
                @bandarevanche
              </div>
            </div>

            <Button
              href={siteConfig.socials.tiktok}
              variant="secondary"
              size="lg"
              isExternal
              fullWidth
              className="gap-2 text-sm font-bold"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Acompanhar no TikTok</span>
            </Button>
          </div>
        </div>

        {/* Atalhos para Fotos e Música */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-6 bg-[#000000]/70 border border-[#D9CDB5]/20 rounded-lg flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#D9CDB5] font-black uppercase text-lg">
                <Camera className="w-5 h-5 text-[#AB2217]" />
                <span>Galeria de Fotos</span>
              </div>
              <p className="text-sm text-[#D9CDB5]/70">
                Registros fotográficos oficiais dos shows e fotos individuais dos quatro integrantes.
              </p>
            </div>
            <Button href="/fotos" variant="outline" size="sm" className="gap-2 font-bold w-fit">
              <span>Ver Fotos Oficiais</span>
            </Button>
          </div>

          <div className="p-6 bg-[#000000]/70 border border-[#D9CDB5]/20 rounded-lg flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#D9CDB5] font-black uppercase text-lg">
                <Music2 className="w-5 h-5 text-[#AB2217]" />
                <span>Playlist no Spotify</span>
              </div>
              <p className="text-sm text-[#D9CDB5]/70">
                Ouça as faixas da Fresno e os clássicos dos anos 2000 que fazem parte do show.
              </p>
            </div>
            <Button
              href={siteConfig.socials.spotifyPlaylist}
              variant="outline"
              size="sm"
              isExternal
              className="gap-2 font-bold w-fit"
            >
              <span>Ouvir Playlist</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
