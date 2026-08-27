import React from 'react';
import { Calendar, Bell } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site-config';

interface EmptyShowsProps {
  title?: string;
  message?: string;
}

export const EmptyShows: React.FC<EmptyShowsProps> = ({
  title = 'EM BREVE ANUNCIAREMOS MAIS DATAS!',
  message = 'Estamos em estúdio preparando novas apresentações e novas datas da turnê. Acompanhe nossas redes sociais ou envie uma mensagem para levar a Revanche para a sua cidade!',
}) => {
  return (
    <div className="border-4 border-[#AB2217] bg-[#000000]/60 p-8 md:p-12 text-center rounded-lg shadow-2xl space-y-6 max-w-3xl mx-auto">
      <div className="w-16 h-16 rounded-full bg-[#AB2217]/20 border-2 border-[#AB2217] flex items-center justify-center mx-auto text-[#AB2217]">
        <Calendar className="w-8 h-8" />
      </div>

      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-[#AB2217] uppercase tracking-wider">
          {title}
        </h3>
        <p className="text-base md:text-lg text-[#D9CDB5]/90 max-w-xl mx-auto leading-relaxed">
          {message}
        </p>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          href={siteConfig.socials.instagram}
          variant="outline"
          size="md"
          isExternal
          className="gap-2"
        >
          <Bell className="w-4 h-4" />
          Seguir no Instagram
        </Button>
        <Button
          href={siteConfig.contact.whatsappUrl}
          variant="primary"
          size="md"
          isExternal
        >
          Levar o Show para Minha Cidade
        </Button>
      </div>
    </div>
  );
};
