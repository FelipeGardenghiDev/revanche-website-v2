import React from 'react';
import { Ticket, Clock, MapPin, Calendar as CalendarIcon } from 'lucide-react';
import type { Show } from '@/types/show';
import { Button } from '@/components/ui/Button';

interface ShowTableProps {
  shows: Show[];
}

export const ShowTable: React.FC<ShowTableProps> = ({ shows }) => {
  return (
    <div className="hidden lg:block overflow-hidden rounded-lg border-2 border-[#AB2217]/60 shadow-[0_0_25px_rgba(0,0,0,0.8)] bg-[#000000]/85 backdrop-blur-md">
      <div className="border-b-2 border-[#AB2217] bg-[#100404] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-black text-[#D9CDB5] uppercase tracking-wider">
          <CalendarIcon className="w-4 h-4 text-[#AB2217]" />
          <span>Datas Confirmadas</span>
        </div>
        <span className="text-xs font-bold text-[#D9CDB5]/60 uppercase tracking-widest">
          Turnê Oficial
        </span>
      </div>

      <div className="divide-y divide-[#D9CDB5]/10">
        {shows.map((show, index) => {
          const isConfirmed = show.status === 'confirmado';

          return (
            <div
              key={`${show.data}-${show.local}-${index}`}
              className="p-6 flex items-center justify-between gap-6 hover:bg-[#AB2217]/10 transition-colors duration-200 group"
            >
              {/* Data em Destaque */}
              <div className="flex items-center gap-4 min-w-[200px]">
                <div className="w-3 h-3 rounded-full bg-[#AB2217] group-hover:scale-125 transition-transform" />
                <span className="font-black text-2xl text-[#D9CDB5] group-hover:text-[#FFFFFF] uppercase tracking-wider">
                  {show.data}
                </span>
              </div>

              {/* Local e Cidade */}
              <div className="flex-1 space-y-1">
                <div className="text-xl font-bold text-[#D9CDB5] group-hover:text-[#FFFFFF] transition-colors">
                  {show.local}
                </div>
                <div className="text-sm font-medium text-[#D9CDB5]/70 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#AB2217]" />
                  <span>{show.cidade}</span>
                </div>
              </div>

              {/* Status & Botão de Ingressos */}
              <div className="shrink-0">
                {isConfirmed && show.ingresso_url ? (
                  <Button
                    href={show.ingresso_url}
                    variant="primary"
                    size="sm"
                    isExternal
                    className="gap-2 text-xs uppercase px-5 py-2.5 shadow-lg"
                  >
                    <Ticket className="w-4 h-4" />
                    <span>{show.ingresso_texto || 'Garantir Ingresso'}</span>
                  </Button>
                ) : (
                  <div className="inline-flex items-center gap-1.5 py-2 px-4 bg-[#D9CDB5]/10 border border-[#D9CDB5]/30 text-[#D9CDB5] text-xs font-bold uppercase rounded tracking-wider cursor-default">
                    <Clock className="w-3.5 h-3.5 text-[#AB2217]" />
                    <span>Informações em Breve</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
