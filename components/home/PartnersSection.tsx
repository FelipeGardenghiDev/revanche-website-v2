import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { partners } from '@/data/partners';
import { Container } from '@/components/layout/Container';

export const PartnersSection: React.FC = () => {
  return (
    <section id="parceiros" className="py-16 lg:py-20 relative z-10 border-t border-[#D9CDB5]/10">
      <Container size="lg">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-black text-[#AB2217] uppercase tracking-widest">
            Apoio & Parcerias
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#D9CDB5] uppercase tracking-wider">
            PARCEIROS OFICIAIS
          </h2>
        </div>

        {/* Grade Discreta e Elegante de Parceiros */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-5 bg-[#000000]/60 hover:bg-[#000000]/90 rounded-lg border border-[#D9CDB5]/15 hover:border-[#AB2217] transition-all duration-300 shadow-lg focus-visible:outline-none"
              aria-label={`Visitar perfil do parceiro ${partner.name} no Instagram`}
            >
              {/* Foto do Parceiro */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full relative overflow-hidden border-2 border-[#D9CDB5]/40 group-hover:border-[#AB2217] transition-colors duration-300 shadow-md mb-3 bg-[#111]">
                <Image
                  src={partner.image}
                  alt={`Logo do parceiro ${partner.name}`}
                  fill
                  sizes="96px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Nome do Parceiro */}
              <h3 className="text-base font-bold text-[#D9CDB5] group-hover:text-[#AB2217] transition-colors mb-1">
                {partner.name}
              </h3>
              <span className="text-xs font-bold text-[#D9CDB5]/70 group-hover:text-[#AB2217] transition-colors flex items-center gap-1">
                <span>Instagram</span>
                <ExternalLink className="w-3 h-3 text-[#AB2217]" />
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};
