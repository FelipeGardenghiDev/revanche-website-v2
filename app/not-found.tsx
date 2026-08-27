import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20">
      <Container size="sm">
        <div className="bg-[#000000]/80 border-4 border-[#AB2217] p-8 sm:p-12 rounded-lg text-center shadow-2xl space-y-6">
          <span className="text-6xl sm:text-8xl font-black text-[#AB2217] glitch-text block">
            404
          </span>
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-black text-[#D9CDB5] uppercase">
              Página Não Encontrada
            </h1>
            <p className="text-sm sm:text-base text-[#D9CDB5]/80 max-w-md mx-auto">
              A página que você está procurando pode ter sido movida, excluída ou nunca existiu.
            </p>
          </div>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/" variant="primary" size="md" className="gap-2">
              <Home className="w-4 h-4" />
              <span>Voltar para o Início</span>
            </Button>
            <Button href="/agenda" variant="outline" size="md" className="gap-2">
              <span>Ver Agenda de Shows</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
