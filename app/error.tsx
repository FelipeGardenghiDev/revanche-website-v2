'use client';

import React, { useEffect } from 'react';
import { RefreshCw, Home } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-20">
      <Container size="sm">
        <div className="bg-[#000000]/80 border-4 border-[#AB2217] p-8 sm:p-12 rounded-lg text-center shadow-2xl space-y-6">
          <span className="text-4xl sm:text-5xl font-black text-[#AB2217] block">
            ALGO DEU ERRADO
          </span>
          <p className="text-base text-[#D9CDB5]/80 max-w-md mx-auto">
            Ocorreu uma falha temporária ao carregar este conteúdo. Tente recarregar a página.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center gap-2 bg-[#AB2217] hover:bg-[#AB2217]/85 text-[#D9CDB5] font-extrabold uppercase py-3 px-6 rounded border-2 border-[#D9CDB5] shadow transition-all cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Tentar Novamente</span>
            </button>
            <Button href="/" variant="outline" size="md" className="gap-2">
              <Home className="w-4 h-4" />
              <span>Ir para o Início</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
