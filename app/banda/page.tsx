import type { Metadata } from 'next';
import Image from 'next/image';
import { bandMembers } from '@/data/members';
import { Container } from '@/components/layout/Container';
import { MemberBio } from '@/components/band/MemberBio';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'A Banda',
  description:
    'Conheça a história e os integrantes da Banda Revanche: Felipe Gardenghi, Eduardo Opaleiro, Yago Borges e Leonan Artal.',
  alternates: {
    canonical: `${siteConfig.url}/banda`,
  },
};

export default function BandaPage() {
  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <Container>
        {/* Cabeçalho da Página */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-black text-[#AB2217] uppercase tracking-widest">
            Tributo Fresno & Emo 2000
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#D9CDB5] uppercase tracking-wider">
            A BANDA REVANCHE
          </h1>
          <p className="text-lg sm:text-xl text-[#D9CDB5]/90 max-w-2xl mx-auto leading-relaxed">
            Um tributo oficial à Fresno e aos hinos do rock nacional e internacional dos anos 2000.
          </p>
        </div>

        {/* Foto Oficial da Formação & Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 p-8 sm:p-10 bg-[#000000]/70 border-2 border-[#AB2217] rounded-lg shadow-2xl">
          <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden rounded border-2 border-[#D9CDB5]">
            <Image
              src="/images/banda/banda.jpg"
              alt="Formação Completa da Banda Revanche"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover object-top"
            />
          </div>

          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-[#AB2217] uppercase">
              NOSSA HISTÓRIA
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-[#D9CDB5]/90 leading-relaxed font-normal">
              <p>
                Fundada em 2023 em Ribeirão Preto/SP, a <strong>REVANCHE</strong> foi criada com um propósito direto: celebrar os grandes clássicos do emo e do rock dos anos 2000 em um show ao vivo.
              </p>
              <p>
                Tendo como espinha dorsal a discografia da <strong>Fresno</strong> — passando por várias fases da banda —, o repertório também inclui sucessos de bandas como Green Day, Blink-182, Linkin Park, Fall Out Boy, My Chemical Romance, Forfun, Hevo84 e NX Zero.
              </p>
              <p>
                O grupo é formado por músicos com anos de estrada, entregando um show autêntico, intenso e com identidade própria, trazendo também versões exclusivas que conectam a nostalgia dos anos 2000 à energia do palco ao vivo.
              </p>
            </div>

            <div className="pt-2">
              <Button href={siteConfig.contact.whatsappUrl} variant="primary" size="sm" isExternal>
                Contratar Show da Banda
              </Button>
            </div>
          </div>
        </div>

        {/* Seção dos Integrantes com Biografia Completa */}
        <div className="mt-16 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-4xl font-black text-[#AB2217] uppercase tracking-wider inline-block border-b-2 border-[#AB2217] pb-2">
              INTEGRANTES
            </h2>
            <p className="text-sm sm:text-base text-[#D9CDB5]/80">
              Conheça em detalhes os músicos que compõem a Revanche.
            </p>
          </div>

          <div className="space-y-6">
            {bandMembers.map((member, index) => (
              <MemberBio key={member.slug} member={member} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
