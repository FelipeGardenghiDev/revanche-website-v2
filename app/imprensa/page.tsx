import type { Metadata } from 'next';
import { Download, FileText, Sliders, ExternalLink, ShieldCheck, Mail, Phone } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { CopyReleaseButton } from '@/components/press/CopyReleaseButton';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Imprensa & Media Kit',
  description:
    'Área dedicada a contratantes, produtores e jornalistas: Press Release, Rider Técnico, Mapa de Palco, Input List e Logos em alta resolução da Banda Revanche.',
  alternates: {
    canonical: `${siteConfig.url}/imprensa`,
  },
};

const OFFICIAL_RELEASE_TEXT = `A Banda Revanche é um tributo à Fresno e aos grandes clássicos do emo dos anos 2000. Formada em Ribeirão Preto/SP por Felipe Gardenghi (vocal e guitarra), Eduardo Opaleiro (guitarra e voz), Yago Borges (baixo e voz) e Leonan Artal (bateria), o grupo apresenta um repertório ao vivo que celebra a discografia da Fresno ao lado de hinos marcantes do rock nacional e internacional dos anos 2000.`;

export default function ImprensaPage() {
  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <Container size="lg">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-black text-[#AB2217] uppercase tracking-widest">
            Para Produtores & Imprensa
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#D9CDB5] uppercase tracking-wider">
            IMPRENSA & MEDIA KIT
          </h1>
          <p className="text-base sm:text-lg text-[#D9CDB5]/90 leading-relaxed font-medium">
            Materiais técnicos, fotos promocionais, release oficial e arquivos de identidade visual para download.
          </p>
        </div>

        {/* CTA Principal para Pasta Oficial no Google Drive */}
        <div className="mb-16 p-6 sm:p-10 bg-[#000000]/90 border-2 border-[#AB2217] rounded-lg shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-black text-[#D9CDB5] uppercase tracking-wide">
              Pasta Completa no Google Drive
            </h2>
            <p className="text-sm sm:text-base text-[#D9CDB5]/80 max-w-2xl">
              Acesso direto aos documentos em alta resolução: Rider Técnico (PDF), Mapa de Palco, Input List e Logotipos com fundo transparente.
            </p>
          </div>
          <Button
            href={siteConfig.mediaKitUrl}
            variant="primary"
            size="lg"
            isExternal
            className="gap-2 shrink-0 font-bold"
          >
            <Download className="w-5 h-5" />
            <span>Acessar Google Drive</span>
          </Button>
        </div>

        {/* Grade de Documentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {/* Card 1: Rider Técnico & Palco */}
          <div className="bg-[#000000]/80 border border-[#D9CDB5]/20 p-6 rounded-lg shadow-xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded bg-[#AB2217]/20 border border-[#AB2217] flex items-center justify-center text-[#AB2217]">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#D9CDB5] uppercase">
                Rider Técnico & Palco
              </h3>
              <p className="text-sm text-[#D9CDB5]/80">
                Especificações de sonorização (PA e monitoramento), mapa de palco, canais de direct box e microfonação.
              </p>
            </div>
            <a
              href={siteConfig.mediaKitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase py-2.5 px-4 bg-[#AB2217] text-[#FFFFFF] hover:bg-[#AB2217]/80 rounded transition-colors"
            >
              <span>Visualizar Rider</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Release Oficial */}
          <div className="bg-[#000000]/80 border border-[#D9CDB5]/20 p-6 rounded-lg shadow-xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded bg-[#AB2217]/20 border border-[#AB2217] flex items-center justify-center text-[#AB2217]">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#D9CDB5] uppercase">
                Release Oficial
              </h3>
              <p className="text-sm text-[#D9CDB5]/80">
                Texto oficial para matérias jornalísticas, blogs de música, cartazes e divulgação em redes sociais.
              </p>
            </div>
            <a
              href={siteConfig.mediaKitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase py-2.5 px-4 bg-[#AB2217] text-[#FFFFFF] hover:bg-[#AB2217]/80 rounded transition-colors"
            >
              <span>Baixar Release</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Identidade Visual & Logos */}
          <div className="bg-[#000000]/80 border border-[#D9CDB5]/20 p-6 rounded-lg shadow-xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded bg-[#AB2217]/20 border border-[#AB2217] flex items-center justify-center text-[#AB2217]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#D9CDB5] uppercase">
                Logos Oficiais
              </h3>
              <p className="text-sm text-[#D9CDB5]/80">
                Logo oficial da Banda Revanche em formato PNG com fundo transparente para peças gráficas e cartazes.
              </p>
            </div>
            <a
              href="/logos/Logo-Revanche-PNG.png"
              download="Logo-Revanche-PNG.png"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase py-2.5 px-4 bg-[#AB2217] text-[#FFFFFF] hover:bg-[#AB2217]/80 rounded transition-colors"
            >
              <span>Baixar Logo PNG</span>
              <Download className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Release Textual na Página com Botão de Cópia */}
        <div className="p-6 sm:p-10 bg-[#000000]/90 border-2 border-[#AB2217] rounded-lg shadow-2xl space-y-6 max-w-4xl mx-auto mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#AB2217]/30 pb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#D9CDB5] uppercase">
                Release Oficial
              </h2>
              <p className="text-xs text-[#D9CDB5]/70 mt-1">
                Texto para uso em divulgações, imprensa e material de eventos.
              </p>
            </div>
            <CopyReleaseButton textToCopy={OFFICIAL_RELEASE_TEXT} />
          </div>

          <div className="text-base sm:text-lg text-[#D9CDB5]/90 leading-relaxed font-medium bg-[#111] p-5 rounded border border-[#D9CDB5]/10">
            {OFFICIAL_RELEASE_TEXT}
          </div>
        </div>

        {/* Contato de Produção */}
        <div className="p-6 sm:p-8 bg-[#000000]/80 border border-[#D9CDB5]/20 rounded-lg text-center max-w-2xl mx-auto space-y-4">
          <h3 className="text-xl font-black text-[#D9CDB5] uppercase">
            Contato com a Produção
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2 text-[#D9CDB5] hover:text-[#AB2217] transition-colors font-medium"
            >
              <Mail className="w-4 h-4 text-[#AB2217]" />
              <span>{siteConfig.contact.email}</span>
            </a>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#D9CDB5] hover:text-[#AB2217] transition-colors font-medium"
            >
              <Phone className="w-4 h-4 text-[#AB2217]" />
              <span>{siteConfig.contact.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
