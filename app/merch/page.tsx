import type { Metadata } from 'next';
import Image from 'next/image';
import { ShoppingBag, Sparkles, MessageCircle, Truck, CreditCard, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { merchItems } from '@/data/merch';
import { siteConfig } from '@/data/site-config';

export const metadata: Metadata = {
  title: 'Merch Oficial (Em Breve)',
  description:
    'Loja oficial da Banda Revanche em construção. Camisetas, palhetas e acessórios exclusivos do tributo Fresno & Emo dos anos 2000.',
  alternates: {
    canonical: `${siteConfig.url}/merch`,
  },
};

export default function MerchPage() {
  const whatsappMerchUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    'Olá! Gostaria de entrar na lista de espera para o lançamento do Merch Oficial da banda Revanche!'
  )}`;

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <Container size="lg">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#AB2217]/20 border border-[#AB2217] text-[#AB2217] text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Loja Oficial • Em Construção</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#D9CDB5] uppercase tracking-wider">
            MERCH REVANCHE
          </h1>
          <p className="text-base sm:text-lg text-[#D9CDB5]/90 leading-relaxed font-medium">
            Peças exclusivas pensadas para quem vive e respira a nostalgia dos anos 2000.
          </p>
        </div>

        {/* Banner de Aviso de Construção */}
        <div className="mb-16 p-8 sm:p-10 bg-[#000000]/90 border-2 border-[#AB2217] rounded-lg text-center max-w-3xl mx-auto space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-[#AB2217]/20 border border-[#AB2217] flex items-center justify-center mx-auto text-[#AB2217]">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#D9CDB5] uppercase">
              Implantação em Andamento
            </h2>
            <p className="text-base text-[#D9CDB5]/90 max-w-xl mx-auto leading-relaxed">
              Nossa loja virtual está sendo preparada para oferecer pagamento facilitado via <strong>PIX</strong> e envio para todo o território nacional. Em breve você poderá garantir seus itens aqui ou diretamente em nossa bancada de merch nos shows.
            </p>
          </div>

          <div className="pt-2">
            <Button
              href={whatsappMerchUrl}
              variant="primary"
              size="lg"
              isExternal
              className="gap-2 font-bold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Entrar na Lista de Espera</span>
            </Button>
          </div>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16">
          {merchItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#000000]/80 border-2 border-[#D9CDB5]/20 hover:border-[#AB2217] rounded-lg p-5 shadow-xl flex flex-col justify-between space-y-4 group transition-all"
            >
              <div className="space-y-4">
                <div className="relative aspect-square w-full rounded overflow-hidden border border-[#D9CDB5]/30 bg-[#0a0a0a] flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 right-2 text-[10px] font-black uppercase bg-[#AB2217] text-[#FFFFFF] px-2.5 py-1 rounded shadow-md tracking-wider">
                    Em Breve
                  </span>
                </div>

                <div className="space-y-1.5 text-left">
                  <span className="text-[11px] font-bold text-[#AB2217] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-base font-black text-[#D9CDB5] group-hover:text-[#AB2217] transition-colors line-clamp-2">
                    {item.name}
                  </h3>
                  {item.sizes && (
                    <p className="text-xs text-[#D9CDB5]/70">
                      Tamanhos: {item.sizes.join(', ')}
                    </p>
                  )}
                </div>
              </div>

              <div className="border-t border-[#D9CDB5]/10 pt-3 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-[#D9CDB5]/60 block font-bold">
                    Preço Estimado
                  </span>
                  <span className="text-base font-black text-[#D9CDB5]">
                    {item.estimatedPrice}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-[#AB2217] uppercase">
                  Em Produção
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pilares de Entrega & Pagamento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto border-t border-[#D9CDB5]/15 pt-12 text-center">
          <div className="space-y-2 p-4">
            <Truck className="w-8 h-8 text-[#AB2217] mx-auto" />
            <h4 className="text-base font-bold text-[#D9CDB5] uppercase">Envio para Todo Brasil</h4>
            <p className="text-xs text-[#D9CDB5]/80">Entrega rápida via Correios com código de rastreio.</p>
          </div>
          <div className="space-y-2 p-4">
            <CreditCard className="w-8 h-8 text-[#AB2217] mx-auto" />
            <h4 className="text-base font-bold text-[#D9CDB5] uppercase">Pagamento Instantâneo</h4>
            <p className="text-xs text-[#D9CDB5]/80">Facilidade e segurança no PIX com confirmação rápida.</p>
          </div>
          <div className="space-y-2 p-4">
            <ShieldCheck className="w-8 h-8 text-[#AB2217] mx-auto" />
            <h4 className="text-base font-bold text-[#D9CDB5] uppercase">Qualidade Garantida</h4>
            <p className="text-xs text-[#D9CDB5]/80">Algodão 100% penteado e estampas duráveis em silk screen.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
