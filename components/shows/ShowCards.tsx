import React from 'react';
import { Ticket, MapPin, Calendar as CalendarIcon, Clock } from 'lucide-react';
import type { Show } from '@/types/show';
import { Button } from '@/components/ui/Button';

interface ShowCardsProps {
  shows: Show[];
}

export const ShowCards: React.FC<ShowCardsProps> = ({ shows }) => {
  return (
    <div className="lg:hidden space-y-4">
      {shows.map((show, index) => {
        const isConfirmed = show.status === 'confirmado';

        return (
          <div
            key={`${show.data}-${show.local}-${index}`}
            className="border-2 border-[#AB2217]/50 bg-[#000000]/90 p-5 rounded-lg shadow-xl space-y-4 backdrop-blur-sm"
          >
            {/* Header do Card: Data e Status */}
            <div className="flex items-center justify-between border-b border-[#D9CDB5]/15 pb-3">
              <div className="flex items-center gap-2 text-[#D9CDB5]">
                <CalendarIcon className="w-5 h-5 text-[#AB2217] shrink-0" />
                <span className="text-xl font-black uppercase tracking-wider">
                  {show.data}
                </span>
              </div>
              <span
                className={`text-xs font-black uppercase px-2.5 py-1 rounded border ${
                  isConfirmed
                    ? 'bg-[#AB2217] text-[#D9CDB5] border-[#AB2217]'
                    : 'bg-[#D9CDB5]/10 text-[#D9CDB5] border-[#D9CDB5]/30'
                }`}
              >
                {isConfirmed ? 'Confirmado' : 'Em Breve'}
              </span>
            </div>

            {/* Local & Cidade */}
            <div className="space-y-1.5">
              <div className="text-lg font-bold text-[#D9CDB5]">{show.local}</div>
              <div className="text-sm font-medium text-[#D9CDB5]/80 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#AB2217] shrink-0" />
                <span>{show.cidade}</span>
              </div>
            </div>

            {/* Botão de Ingressos / Status */}
            <div className="pt-2">
              {isConfirmed && show.ingresso_url ? (
                <Button
                  href={show.ingresso_url}
                  variant="primary"
                  size="md"
                  fullWidth
                  isExternal
                  className="gap-2 shadow-lg"
                >
                  <Ticket className="w-4 h-4" />
                  <span>{show.ingresso_texto || 'Garantir Ingresso'}</span>
                </Button>
              ) : (
                <div className="w-full py-3 px-4 bg-[#D9CDB5]/10 border border-[#D9CDB5]/30 text-[#D9CDB5] text-center text-xs font-bold uppercase rounded tracking-wider flex items-center justify-center gap-2 cursor-default">
                  <Clock className="w-4 h-4 text-[#AB2217]" />
                  <span>Informações em Breve</span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
