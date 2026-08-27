import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { BandMember } from '@/types/member';

interface MemberCardProps {
  member: BandMember;
  priority?: boolean;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member, priority = false }) => {
  return (
    <div className="group text-center flex flex-col items-center w-full">
      <Link
        href={`/banda#${member.slug}`}
        className="block w-full focus-visible:outline-none"
        aria-label={`Ver biografia e detalhes de ${member.name} (${member.role})`}
      >
        {/* Foto 100% Colorida, nítida, com moldura e hover suave */}
        <div className="w-full max-w-[260px] aspect-[2/3] relative overflow-hidden rounded border-2 border-[#D9CDB5]/40 group-hover:border-[#AB2217] transition-all duration-300 shadow-2xl mx-auto bg-[#0a0a0a]">
          <Image
            src={member.image}
            alt={`${member.name} — ${member.role} da Banda Revanche`}
            fill
            sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 260px"
            priority={priority}
            className="object-cover object-top brightness-100 contrast-100 group-hover:scale-105 transition-transform duration-500"
          />
          {/* Overlay suave apenas na base para leitura do nome sem esconder o rosto */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#000000]/90 to-transparent pointer-events-none" />
        </div>

        {/* Nome e Função */}
        <div className="mt-4 space-y-1">
          <h3 className="text-lg sm:text-xl font-black text-[#D9CDB5] group-hover:text-[#AB2217] transition-colors">
            {member.name}
          </h3>
          <p className="text-xs sm:text-sm font-bold text-[#D9CDB5]/80 uppercase tracking-wider">
            {member.role}
          </p>
        </div>
      </Link>
    </div>
  );
};
