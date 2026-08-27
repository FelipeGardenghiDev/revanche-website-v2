import React from 'react';
import { Mail, Phone, MessageSquare, Download } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-20 lg:py-28 relative z-10 border-t border-[#AB2217]/30 bg-[#000000]/80">
      <Container size="lg">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs sm:text-sm font-black text-[#AB2217] uppercase tracking-widest">
            Shows & Eventos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#D9CDB5] uppercase tracking-wider">
            CONTRATE A REVANCHE
          </h2>
          <p className="text-base sm:text-lg text-[#D9CDB5]/90 font-medium">
            Leve a Revanche para o seu evento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card WhatsApp / Telefone */}
          <div className="bg-[#000000]/90 border-2 border-[#AB2217] p-6 sm:p-8 rounded-lg shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#AB2217]/20 border border-[#AB2217] flex items-center justify-center text-[#AB2217]">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-[#D9CDB5] uppercase">
                WhatsApp Direto
              </h3>
              <p className="text-sm text-[#D9CDB5]/80">
                Atendimento rápido para consulta de datas, propostas e negociação de shows.
              </p>
              <div className="text-2xl font-extrabold text-[#D9CDB5] pt-1">
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

          {/* Card E-mail & Media Kit */}
          <div className="bg-[#000000]/90 border-2 border-[#D9CDB5]/40 p-6 sm:p-8 rounded-lg shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#D9CDB5]/10 border border-[#D9CDB5]/30 flex items-center justify-center text-[#D9CDB5]">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-[#D9CDB5] uppercase">
                E-mail de Produção
              </h3>
              <p className="text-sm text-[#D9CDB5]/80">
                Envio de propostas formais, editais culturais e comunicação institucional.
              </p>
              <div className="text-lg font-bold text-[#D9CDB5] pt-1 break-all">
                {siteConfig.contact.email}
              </div>
            </div>

            <div className="space-y-3">
              <Button
                href={`mailto:${siteConfig.contact.email}?subject=Contratação%20Show%20Banda%20Revanche`}
                variant="secondary"
                size="md"
                fullWidth
                className="gap-2 text-sm font-bold"
              >
                <Mail className="w-4 h-4" />
                <span>Enviar E-mail</span>
              </Button>
              <Button
                href={siteConfig.mediaKitUrl}
                variant="outline"
                size="sm"
                fullWidth
                isExternal
                className="gap-2 text-xs font-bold"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Acessar Rider Técnico & Media Kit</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
