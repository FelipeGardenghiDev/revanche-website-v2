import React from 'react';
import { bandMembers } from '@/data/members';
import { Container } from '@/components/layout/Container';
import { MemberCard } from '@/components/band/MemberCard';
import { Button } from '@/components/ui/Button';

interface BandSectionProps {
  showButton?: boolean;
}

export const BandSection: React.FC<BandSectionProps> = ({ showButton = true }) => {
  return (
    <section id="banda" className="py-20 lg:py-28 relative z-10">
      <Container size="lg">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16 space-y-4">
          <span className="text-xs sm:text-sm font-black text-[#AB2217] uppercase tracking-widest">
            Formação Oficial
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#D9CDB5] uppercase tracking-wider">
            A BANDA
          </h2>
          <p className="text-base sm:text-lg text-[#D9CDB5]/90 leading-relaxed font-medium">
            Formada em Ribeirão Preto/SP, a Revanche une quatro músicos em uma celebração ao vivo da discografia da Fresno e dos clássicos do emo e rock dos anos 2000.
          </p>
        </div>

        {/* Grid Editorial dos 4 Integrantes em Cores Reais */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8 justify-items-center mb-12">
          {bandMembers.map((member, idx) => (
            <MemberCard key={member.slug} member={member} priority={idx < 2} />
          ))}
        </div>

        {showButton && (
          <div className="text-center">
            <Button href="/banda" variant="outline" size="md" className="font-bold">
              Conhecer a História & Biografias
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};
