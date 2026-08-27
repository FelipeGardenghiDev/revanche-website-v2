import type { Metadata } from 'next';
import Image from 'next/image';
import { Download, Camera } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site-config';
import { bandMembers } from '@/data/members';

export const metadata: Metadata = {
  title: 'Galeria de Fotos',
  description:
    'Fotos oficiais em alta resolução da Banda Revanche e de seus integrantes para divulgação, imprensa e fãs.',
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
            Galeria Oficial
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#D9CDB5] uppercase tracking-wider">
            FOTOS EM ALTA RESOLUÇÃO
          </h1>
          <p className="text-base sm:text-lg text-[#D9CDB5]/90 leading-relaxed font-medium">
            Imagens oficiais da banda e fotos dos integrantes para cartazes, eventos e imprensa.
          </p>
        </div>

        {/* Foto da Formação Completa */}
        <div className="mb-16 bg-[#000000]/80 border-2 border-[#AB2217] p-4 sm:p-8 rounded-lg shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D9CDB5]/10 pb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#D9CDB5] uppercase">
                Foto Oficial da Banda
              </h2>
              <p className="text-xs sm:text-sm text-[#D9CDB5]/80 mt-1">
                Felipe Gardenghi, Eduardo Opaleiro, Yago Borges e Leonan Artal
              </p>
            </div>
            <a
              href="/images/banda/banda.jpg"
              download="Banda-Revanche-Oficial.jpg"
              className="inline-flex items-center gap-2 text-xs font-black uppercase bg-[#AB2217] text-[#FFFFFF] py-2.5 px-4 rounded hover:bg-[#AB2217]/85 transition-colors self-start sm:self-auto shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Baixar Foto Oficial</span>
            </a>
          </div>

          <div className="relative aspect-[16/10] sm:aspect-[21/10] overflow-hidden rounded border border-[#D9CDB5]/30 bg-[#000000]">
            <Image
              src="/images/banda/banda.jpg"
              alt="Foto Oficial da Banda Revanche no palco"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Fotos Individuais dos Integrantes */}
        <div className="mb-16 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#D9CDB5] uppercase tracking-wider">
              RETRATOS INDIVIDUAIS
            </h2>
            <p className="text-sm text-[#D9CDB5]/80">
              Fotos coloridas para cartazes, flyers e matérias de imprensa.
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
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
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

        {/* Box Drive Media Kit */}
        <div className="p-8 sm:p-12 bg-[#000000]/90 border-2 border-[#AB2217] rounded-lg text-center max-w-3xl mx-auto space-y-6 shadow-2xl">
          <div className="w-14 h-14 rounded-full bg-[#AB2217]/20 border border-[#AB2217] flex items-center justify-center mx-auto text-[#AB2217]">
            <Camera className="w-7 h-7" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#D9CDB5] uppercase">
            Pasta Completa de Mídia
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
              <span>Abrir Pasta no Google Drive</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
