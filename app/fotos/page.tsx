import type { Metadata } from 'next';
import Image from 'next/image';
import { Download, Camera, FolderOpen, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site-config';
import { bandMembers } from '@/data/members';
import { eventGalleries } from '@/data/galleries';

export const metadata: Metadata = {
  title: 'Galeria de Fotos',
  description:
    'Fotos oficiais da Banda Revanche, retratos dos integrantes e links diretos para pastas do Google Drive com coberturas de shows para os fãs.',
  alternates: {
    canonical: `${siteConfig.url}/fotos`,
  },
};

export default function FotosPage() {
  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <Container size="lg">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-black text-[#AB2217] uppercase tracking-widest">
            Galeria & Acervo
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#D9CDB5] uppercase tracking-wider">
            FOTOS & COBERTURAS
          </h1>
          <p className="text-base sm:text-lg text-[#D9CDB5]/90 leading-relaxed font-medium">
            Retratos individuais dos músicos e pastas completas no Google Drive de cada show para os fãs visualizarem e baixarem.
          </p>
        </div>

        {/* Seção de Pastas do Google Drive por Show/Evento */}
        <div className="mb-20 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black text-[#AB2217] uppercase tracking-widest flex items-center justify-center gap-1.5">
              <FolderOpen className="w-4 h-4" />
              <span>Para os Fãs & Fotógrafos</span>
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#D9CDB5] uppercase tracking-wider">
              ÁLBUNS DOS SHOWS NO GOOGLE DRIVE
            </h2>
            <p className="text-sm text-[#D9CDB5]/80">
              Acesse as pastas na íntegra de cada apresentação e confira as coberturas fotográficas dos eventos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {eventGalleries.map((gallery) => (
              <div
                key={gallery.id}
                className="bg-[#000000]/85 border-2 border-[#D9CDB5]/25 hover:border-[#AB2217] p-6 rounded-lg shadow-xl flex flex-col justify-between space-y-5 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[#D9CDB5]/10 pb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-[#AB2217]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{gallery.date}</span>
                    </span>
                    {gallery.photographer && (
                      <span className="text-[11px] font-bold text-[#D9CDB5]/60 bg-[#D9CDB5]/10 px-2 py-0.5 rounded">
                        {gallery.photographer}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-[#D9CDB5] group-hover:text-[#AB2217] transition-colors line-clamp-2">
                    {gallery.eventName}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-[#D9CDB5]/80 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#AB2217] shrink-0" />
                    <span>{gallery.venue} • {gallery.city}</span>
                  </div>
                </div>

                <a
                  href={gallery.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 text-xs font-extrabold uppercase bg-[#AB2217] text-[#FFFFFF] hover:bg-[#AB2217]/85 rounded flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <FolderOpen className="w-4 h-4" />
                  <span>Ver Fotos no Drive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Fotos Individuais dos Integrantes */}
        <div className="mb-20 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#D9CDB5] uppercase tracking-wider">
              RETRATOS DOS INTEGRANTES
            </h2>
            <p className="text-sm text-[#D9CDB5]/80">
              Fotos individuais dos músicos para cartazes, flyers e matérias de imprensa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {bandMembers.map((member) => (
              <div
                key={member.slug}
                className="bg-[#000000]/80 border-2 border-[#D9CDB5]/30 hover:border-[#AB2217] p-5 rounded-lg shadow-xl flex flex-col items-center text-center space-y-4 group transition-all"
              >
                <div className="w-full aspect-[2/3] relative overflow-hidden rounded border-2 border-[#D9CDB5]/40 group-hover:border-[#AB2217] transition-colors bg-[#0a0a0a]">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={`object-cover object-top group-hover:scale-105 transition-transform duration-500 ${member.imagePosition || ''}`}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-black text-[#D9CDB5] group-hover:text-[#AB2217] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-[#D9CDB5]/80 uppercase">
                    {member.role}
                  </p>
                </div>

                <a
                  href={member.image}
                  download={`${member.slug}-banda-revanche.jpg`}
                  className="w-full py-2.5 text-xs font-bold uppercase border border-[#D9CDB5]/30 text-[#D9CDB5] hover:border-[#AB2217] hover:text-[#AB2217] rounded flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Baixar Foto</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Box Drive Media Kit Geral */}
        <div className="p-8 sm:p-12 bg-[#000000]/90 border-2 border-[#AB2217] rounded-lg text-center max-w-3xl mx-auto space-y-6 shadow-2xl">
          <div className="w-14 h-14 rounded-full bg-[#AB2217]/20 border border-[#AB2217] flex items-center justify-center mx-auto text-[#AB2217]">
            <Camera className="w-7 h-7" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#D9CDB5] uppercase">
            Pasta Completa de Imprensa & Mídia
          </h2>
          <p className="text-base text-[#D9CDB5]/90 max-w-xl mx-auto">
            Acesse nossa pasta em nuvem com arquivos vetorizados, fotos de palco sem compressão e logotipos com fundo transparente.
          </p>
          <div>
            <Button
              href={siteConfig.mediaKitUrl}
              variant="primary"
              size="md"
              isExternal
              className="gap-2 font-bold"
            >
              <Download className="w-4 h-4" />
              <span>Abrir Pasta de Imprensa no Google Drive</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
