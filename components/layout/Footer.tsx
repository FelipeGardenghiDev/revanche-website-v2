import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { siteConfig, mainNavItems } from '@/data/site-config';
import { Container } from '@/components/layout/Container';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000000] border-t-2 border-[#AB2217] pt-16 pb-12 relative z-10 text-[#D9CDB5]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#D9CDB5]/15">
          {/* Coluna 1: Sobre & Identidade */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/logos/Logo-Revanche-PNG.png"
                  alt="Logo Revanche"
                  fill
                  sizes="40px"
                  className="object-contain filter drop-shadow-[0_0_6px_#AB2217]"
                />
              </div>
              <span className="text-2xl font-black tracking-widest text-[#AB2217]">
                REVANCHE
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#D9CDB5]/80">
              Tributo à Fresno e aos clássicos do emo dos anos 2000. Shows, turnês e eventos em todo o Brasil.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Oficial da Banda Revanche"
                className="w-10 h-10 rounded-full border border-[#D9CDB5]/30 flex items-center justify-center text-[#D9CDB5] hover:text-[#AB2217] hover:border-[#AB2217] transition-colors"
              >
                <span className="text-sm font-bold">IG</span>
              </a>
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Oficial da Banda Revanche"
                className="w-10 h-10 rounded-full border border-[#D9CDB5]/30 flex items-center justify-center text-[#D9CDB5] hover:text-[#AB2217] hover:border-[#AB2217] transition-colors"
              >
                <span className="text-sm font-bold">TT</span>
              </a>
              <a
                href={siteConfig.socials.spotifyPlaylist}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Playlist no Spotify da Banda Revanche"
                className="w-10 h-10 rounded-full border border-[#D9CDB5]/30 flex items-center justify-center text-[#D9CDB5] hover:text-[#AB2217] hover:border-[#AB2217] transition-colors"
              >
                <span className="text-sm font-bold">SP</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="space-y-4">
            <h3 className="text-lg font-black uppercase text-[#AB2217] tracking-wider border-b border-[#AB2217]/40 pb-2 inline-block">
              Navegação
            </h3>
            <ul className="space-y-2 text-sm">
              {mainNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#AB2217] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Booking & Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-black uppercase text-[#AB2217] tracking-wider border-b border-[#AB2217]/40 pb-2 inline-block">
              Shows & Booking
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#AB2217] mt-1 shrink-0" />
                <div>
                  <div className="text-xs text-[#D9CDB5]/60 uppercase font-bold">E-mail:</div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-[#AB2217] transition-colors break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#AB2217] mt-1 shrink-0" />
                <div>
                  <div className="text-xs text-[#D9CDB5]/60 uppercase font-bold">WhatsApp:</div>
                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#AB2217] transition-colors"
                  >
                    {siteConfig.contact.phoneFormatted}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Produtores & Imprensa */}
          <div className="space-y-4">
            <h3 className="text-lg font-black uppercase text-[#AB2217] tracking-wider border-b border-[#AB2217]/40 pb-2 inline-block">
              Para Produtores
            </h3>
            <p className="text-sm text-[#D9CDB5]/80">
              Acesse o material completo com Rider Técnico, Input List, Mapa de Palco e Release Oficial.
            </p>
            <a
              href={siteConfig.mediaKitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-black uppercase bg-[#AB2217] text-[#D9CDB5] py-2.5 px-4 border border-[#D9CDB5] hover:bg-[#AB2217]/80 transition-colors"
            >
              <span>Acessar Media Kit</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Rodapé inferior / Créditos */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#D9CDB5]/70 gap-4 text-center md:text-left">
          <div>
            Desenvolvido por <strong className="text-[#D9CDB5]">FG SOFTWARE</strong> © {new Date().getFullYear()} REVANCHE. Conteúdo protegido. Código sob licença MIT.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/imprensa" className="hover:text-[#AB2217] transition-colors">
              Media Kit
            </Link>
            <span>•</span>
            <Link href="/contato" className="hover:text-[#AB2217] transition-colors">
              Contato
            </Link>
            <span>•</span>
            <span className="text-[#AB2217]">Ribeirão Preto & Região — SP</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
