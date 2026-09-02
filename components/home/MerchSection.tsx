import React from 'react';
import Image from 'next/image';
import { ShoppingBag, Sparkles, MessageCircle, AlertCircle } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { merchItems } from '@/data/merch';
import { siteConfig } from '@/data/site-config';

export const MerchSection: React.FC = () => {
  const whatsappMerchUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    'Olá! Gostaria de saber mais sobre o lançamento do Merch Oficial da banda Revanche!'
  )}`;

  return (
    <section id="merch" className="py-20 lg:py-28 relative z-10 bg-[#000000]/75 border-t border-[#D9CDB5]/10">
      <Container size="lg">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#AB2217]/20 border border-[#AB2217] text-[#AB2217] text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Em Construção • Em Breve</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#D9CDB5] uppercase tracking-wider">
            MERCH OFICIAL
          </h2>
          <p className="text-base sm:text-lg text-[#D9CDB5]/90 font-medium">
            Vista a Revanche. Conheça as peças oficiais que estão sendo preparadas para lançamento.
          </p>
        </div>

        {/* Aviso de Implantação */}
        <div className="mb-14 p-6 sm:p-8 bg-[#000000]/90 border-2 border-[#AB2217]/60 rounded-lg max-w-4xl mx-auto shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-[#AB2217]/20 border border-[#AB2217] flex items-center justify-center text-[#AB2217] shrink-0">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <div className="space-y-1.5 flex-1 text-left">
            <h3 className="text-lg font-black text-[#D9CDB5] uppercase">
              Loja Oficial em Fase de Produção
            </h3>
            <p className="text-sm text-[#D9CDB5]/85 leading-relaxed">
              Estamos finalizando a confecção dos primeiros lotes de camisetas, palhetas de palco e itens colecionáveis. Os produtos estarão disponíveis para compra direta nos shows e com envio para todo o Brasil.
            </p>
          </div>
          <a
            href={whatsappMerchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-black uppercase bg-[#AB2217] text-[#FFFFFF] hover:bg-[#AB2217]/85 py-3 px-5 rounded transition-colors shrink-0 shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Lista de Espera</span>
          </a>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto mb-14">
          {merchItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#000000]/80 border-2 border-[#D9CDB5]/20 hover:border-[#AB2217] rounded-lg p-5 shadow-xl flex flex-col justify-between space-y-4 group transition-all"
            >
              <div className="space-y-4">
                {/* Imagem do Produto com Badge */}
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
                  <h4 className="text-base font-black text-[#D9CDB5] group-hover:text-[#AB2217] transition-colors line-clamp-2">
                    {item.name}
                  </h4>
                  {item.sizes && (
                    <p className="text-xs text-[#D9CDB5]/70">
                      Tamanhos previstos: {item.sizes.join(', ')}
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
                  Lançamento em breve
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Rodapé da Seção */}
        <div className="text-center">
          <Button
            href={whatsappMerchUrl}
            variant="outline"
            size="lg"
            isExternal
            className="font-bold gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#AB2217]" />
            <span>Falar com a Produção sobre Merch</span>
          </Button>
        </div>
      </Container>
    </section>
  );
};
