import type { MerchItem } from '@/types/site';

export const merchItems: MerchItem[] = [
  {
    id: 'camiseta-revanche-logo',
    name: 'Camiseta Oficial "Revanche" Classic Logo',
    category: 'Vestuário',
    estimatedPrice: 'R$ 60,00',
    image: '/merch/2.jpg',
    status: 'em_breve',
    sizes: ['P', 'M', 'G', 'GG'],
  },
  {
    id: 'camiseta-revanche-fantasma',
    name: 'Camiseta Especial "Fantasma" Emo Vintage',
    category: 'Vestuário',
    estimatedPrice: 'R$ 70,00',
    image: '/merch/Revanche-Fantasma.jpg',
    status: 'em_breve',
    sizes: ['P', 'M', 'G', 'GG'],
  },
  {
    id: 'pack-palhetas-revanche',
    name: 'Pack de Palhetas Colecionáveis Revanche (5 un.)',
    category: 'Acessórios',
    estimatedPrice: 'R$ 20,00',
    image: '/logos/Logo-Revanche-PNG.png',
    status: 'em_breve',
  },
  {
    id: 'adesivos-bottons-kit',
    name: 'Kit de Adesivos Vinílicos & Bottons',
    category: 'Colecionáveis',
    estimatedPrice: 'R$ 15,00',
    image: '/logos/Logo-Revanche-PNG.png',
    status: 'em_breve',
  },
];
