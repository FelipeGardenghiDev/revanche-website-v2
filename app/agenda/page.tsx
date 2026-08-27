import type { Metadata } from 'next';
import { getShows } from '@/lib/shows/shows';
import { Container } from '@/components/layout/Container';
import { ShowTable } from '@/components/shows/ShowTable';
import { ShowCards } from '@/components/shows/ShowCards';
import { EmptyShows } from '@/components/shows/EmptyShows';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Agenda de Shows',
  description:
    'Confira a agenda oficial de shows da Banda Revanche. Próximas apresentações, locais, cidades e venda de ingressos.',
  alternates: {
    canonical: `${siteConfig.url}/agenda`,
  },
};

export const revalidate = 3600;

export default async function AgendaPage() {
  const shows = await getShows();
  const hasShows = shows && shows.length > 0;

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <Container size="lg">
        {/* Cabeçalho da Agenda */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-black text-[#AB2217] uppercase tracking-widest">
            Ao Vivo nos Palcos
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#D9CDB5] uppercase tracking-wider">
            AGENDA DE SHOWS
          </h1>
          <p className="text-base sm:text-lg text-[#D9CDB5]/90 leading-relaxed font-medium">
            Confira as datas confirmadas da turnê e garanta seus ingressos.
          </p>
        </div>

        {/* Tabela & Cards */}
        {hasShows ? (
          <div className="space-y-8 mb-16 max-w-5xl mx-auto">
            <ShowTable shows={shows} />
            <ShowCards shows={shows} />
          </div>
        ) : (
          <div className="mb-16">
            <EmptyShows />
          </div>
        )}

        {/* Box de Contratação */}
        <div className="p-8 sm:p-12 bg-[#000000]/90 border-2 border-[#AB2217] rounded-lg text-center max-w-3xl mx-auto space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-[#D9CDB5] uppercase">
            Leve a Revanche para a sua cidade
          </h2>
          <p className="text-base text-[#D9CDB5]/90 max-w-xl mx-auto">
            Entre em contato diretamente com a produção da banda para consultar disponibilidade de datas e levar o show para seu pub, festival ou evento.
          </p>
          <div>
            <Button
              href={siteConfig.contact.whatsappUrl}
              variant="primary"
              size="lg"
              isExternal
              className="font-bold"
            >
              Falar com a Produção
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
