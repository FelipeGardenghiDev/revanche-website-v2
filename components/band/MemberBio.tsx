import React from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import type { BandMember } from '@/types/member';

interface MemberBioProps {
  member: BandMember;
  index: number;
}

export const MemberBio: React.FC<MemberBioProps> = ({ member, index }) => {
  const isEven = index % 2 === 0;

  return (
    <article
      id={member.slug}
      className="py-10 border-b border-[#D9CDB5]/15 last:border-b-0 scroll-mt-28"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
          isEven ? '' : 'lg:flex-row-reverse'
        }`}
      >
        {/* Foto do Integrante */}
        <div
          className={`lg:col-span-5 flex justify-center ${
            isEven ? 'lg:justify-start' : 'lg:justify-end lg:order-2'
          }`}
        >
          <div className="w-full max-w-[260px] sm:max-w-[300px] aspect-[2/3] relative overflow-hidden border-2 border-[#AB2217] shadow-2xl rounded bg-[#0a0a0a]">
            <Image
              src={member.image}
              alt={`${member.name} — ${member.role}`}
              fill
              sizes="(max-width: 768px) 260px, 300px"
              className={`object-cover object-top brightness-100 contrast-100 ${member.imagePosition || ''}`}
            />
          </div>
        </div>

        {/* Informações e Biografia */}
        <div
          className={`lg:col-span-7 space-y-4 ${
            isEven ? '' : 'lg:order-1'
          }`}
        >
          <div className="border-l-4 border-[#AB2217] pl-4 space-y-1">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#D9CDB5] uppercase tracking-wide">
              {member.name}
            </h3>
            <p className="text-base sm:text-lg font-bold text-[#AB2217] uppercase">
              {member.role}
            </p>
          </div>

          <div className="space-y-3 text-base sm:text-lg text-[#D9CDB5]/90 leading-relaxed font-medium">
            {member.bioParagraphs.map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
          </div>

          {member.socials.instagram && (
            <div className="pt-2">
              <a
                href={member.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#D9CDB5] hover:text-[#AB2217] transition-colors uppercase"
              >
                <Instagram className="w-4 h-4 text-[#AB2217]" />
                <span>Instagram</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
