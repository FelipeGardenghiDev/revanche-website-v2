import type { Metadata } from 'next';
import { Mail, Phone, MessageSquare, MapPin, Instagram, Music } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Contato & Booking',
  description:
    'Entre em contato com a Banda Revanche para contratação de shows, turnês, festivais e parcerias.',
  alternates: {
    canonical: `${siteConfig.url}/contato`,
  },
};

export default function ContatoPage() {
  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <Container size="lg">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-black text-[#AB2217] uppercase tracking-widest">
            Shows & Eventos
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#D9CDB5] uppercase tracking-wider">
            CONTRATE A REVANCHE
          </h1>
          <p className="text-base sm:text-lg text-[#D9CDB5]/90 leading-relaxed font-medium">
            Leve a Revanche para o seu evento.
          </p>
        </div>

        {/* Canais Principais de Contato */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Card WhatsApp */}
          <div className="bg-[#000000]/90 border-2 border-[#AB2217] p-6 sm:p-8 rounded-lg shadow-2xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#AB2217]/20 border border-[#AB2217] flex items-center justify-center text-[#AB2217]">
                <Phone className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black text-[#D9CDB5] uppercase">
                WhatsApp Direto
              </h2>
              <p className="text-sm text-[#D9CDB5]/80">
                Atendimento rápido para consulta de datas, propostas e negociação de shows.
              </p>
              <div className="text-2xl font-extrabold text-[#D9CDB5]">
                {siteConfig.contact.phoneFormatted}
              </div>
            </div>

            <Button
              href={siteConfig.contact.whatsappUrl}
              variant="primary"
              size="lg"
              isExternal
              fullWidth
              className="gap-2 text-sm font-black uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chamar no WhatsApp</span>
            </Button>
          </div>

          {/* Card E-mail Oficial */}
          <div className="bg-[#000000]/90 border-2 border-[#D9CDB5]/30 p-6 sm:p-8 rounded-lg shadow-2xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#D9CDB5]/10 border border-[#D9CDB5]/20 flex items-center justify-center text-[#D9CDB5]">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-black text-[#D9CDB5] uppercase">
                E-mail de Produção
              </h2>
              <p className="text-sm text-[#D9CDB5]/80">
                Para envio de contratos formais, editais culturais e contato institucional.
              </p>
              <div className="text-lg font-bold text-[#D9CDB5] break-all">
                {siteConfig.contact.email}
              </div>
            </div>

            <Button
              href={`mailto:${siteConfig.contact.email}?subject=Contratação%20Banda%20Revanche`}
              variant="secondary"
              size="lg"
              fullWidth
              className="gap-2 text-sm font-bold"
            >
              <Mail className="w-4 h-4" />
              <span>Enviar E-mail</span>
            </Button>
          </div>
        </div>

        {/* Informações de Localização e Redes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Base de Operação */}
          <div className="bg-[#000000]/70 border border-[#D9CDB5]/20 p-6 rounded-lg shadow-xl flex items-start gap-4">
            <MapPin className="w-6 h-6 text-[#AB2217] shrink-0 mt-1" />
            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#D9CDB5]">
                Base de Operação
              </h3>
              <p className="text-sm text-[#D9CDB5]/80">
                Ribeirão Preto / SP — Disponível para apresentações em todo o território nacional.
              </p>
            </div>
          </div>

          {/* Redes Oficiais */}
          <div className="bg-[#000000]/70 border border-[#D9CDB5]/20 p-6 rounded-lg shadow-xl flex items-start gap-4">
            <Instagram className="w-6 h-6 text-[#AB2217] shrink-0 mt-1" />
            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#D9CDB5]">
                Redes Sociais
              </h3>
              <p className="text-sm text-[#D9CDB5]/80">
                Instagram: @banda.revanche • TikTok: @bandarevanche
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
