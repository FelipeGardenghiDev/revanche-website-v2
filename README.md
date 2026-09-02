<div align="center">

# 🎸 REVANCHE — Site Oficial (v2)

**Aplicação web de alta performance em produção para a banda Revanche (Tributo Fresno & Emo Anos 2000).**

[![Website no Ar](https://img.shields.io/badge/🌐_Produção-bandarevanche.com.br-AB2217?style=for-the-badge)](https://bandarevanche.com.br)
[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Schema.org](https://img.shields.io/badge/SEO-Schema.org_MusicGroup-orange?style=for-the-badge)](https://schema.org/MusicGroup)

</div>

---

## 🎯 Case de Negócio & Contexto Real

A **Revanche** é uma banda paulista que presta um tributo visceral à Fresno e aos clássicos do emo dos anos 2000. 

### O Desafio
Com o aumento da demanda de apresentações e eventos de médio/grande porte (como abertura para bandas consagradas no cenário nacional), a banda precisava de um canal digital profissional que:
1. **Atendesse contratantes e casas de show**: Centralização de contato direto via WhatsApp com mensagem pré-formatada, download de fotos em altíssima resolução para cartazes/flyers e acesso direto ao mídia kit em nuvem.
2. **Engajasse a base de fãs**: Agenda de shows atualizada em tempo real com links oficiais de ingressos (Sympla, etc.), player do Spotify integrado e galerias visuais.
3. **Eliminasse atrito operacional**: Permitir que a equipe de produção atualize as datas de shows e anúncios de destaque de forma ágil, sem necessidade de alteração de código ou novos deploys na aplicação.

---

## ⚡ Evolução Arquitetural: v1 (Legada) vs. v2 (Moderna)

O projeto original (**revanche-website v1**) foi desenvolvido em HTML5 e Vanilla JS com Tailwind via CDN para o GitHub Pages. Embora tenha cumprido seu papel inicial, a evolução para a **v2** foi projetada para transformar o site em uma solução de software escalável, rápida e otimizada para os motores de busca.

| Aspecto | Versão 1 (Legada) | Versão 2 (Atual em Produção) |
| :--- | :--- | :--- |
| **Framework** | HTML5 / Vanilla JS estático | **Next.js 16 (App Router)** |
| **Biblioteca de UI** | Nenhuma (DOM manual) | **React 19 (Server Components)** |
| **Tipagem** | Nenhuma (JavaScript puro) | **TypeScript 5.8 (Estrito)** |
| **Estilização** | Tailwind via CDN (render-blocking) | **Tailwind CSS v4 (Engine Oxide de alta performance)** |
| **Estratégia de Dados** | Fetch cliente com risco de CORS/FOUC | **ISR (Incremental Static Regeneration) com Fallback Resiliente** |
| **SEO & Indexação** | Meta tags básicas estáticas | **Schema.org (`MusicGroup` JSON-LD), `sitemap.ts` e `robots.ts` dinâmicos** |
| **Carregamento de Mídia** | Tags `<img>` convencionais | **`next/image` com priority, sizing responsivo e formatos modernos** |
| **Tipografia** | Link Google Fonts externo | **`next/font/google` com zero layout shift (sem FOIT/FOUT)** |

---

## 🏗️ Decisões Técnicas de Engenharia

### 1. Dynamic Data Fetching com ISR (Incremental Static Regeneration)
A agenda de shows e o show em destaque são alimentados por um serviço dinâmico em [`lib/shows/shows.ts`](lib/shows/shows.ts).
- O Next.js consome a fonte de dados remota via fetch com revalidação de cache a cada 5 minutos (`next: { revalidate: 300 }`).
- **Resiliência e Alta Disponibilidade**: Caso o serviço remoto fique indisponível ou sofra lentidão, a aplicação possui **fallbacks tipados** (`FALLBACK_SHOWS` e `FALLBACK_HIGHLIGHT`), garantindo que a página nunca quebre nem exiba telas brancas para o usuário.

### 2. SEO Técnico & Dados Estruturados (Google Rich Results)
- **JSON-LD Schema.org (`MusicGroup`)**: Implementado no [`app/layout.tsx`](app/layout.tsx), informando explicitamente aos algoritmos do Google os integrantes da banda (Felipe Gardenghi, Eduardo Opaleiro, Yago Borges, Leonan Artal), gênero musical, logotipo oficial e perfis sociais vinculados.
- **Sitemap & Robots Dinâmicos**: Gerados programaticamente via rotas nativas do Next.js ([`app/sitemap.ts`](app/sitemap.ts) e [`app/robots.ts`](app/robots.ts)), com prioridades e frequências de atualização diferenciadas para a agenda.
- **OpenGraph & Twitter Cards**: Configurados com metadados para compartilhamento rico em mensageiros (WhatsApp, Telegram) e redes sociais.

### 3. Otimização de Imagens e Assets
- Componente `next/image` configurado com `priority` nas imagens *above-the-fold* (Hero e capa da banda) e carregamento sob demanda para as galerias secundárias.
- Página dedicada de fotos em alta resolução ([`app/fotos/page.tsx`](app/fotos/page.tsx)) com download direto com um clique para designers e produtoras de eventos.

---

## 🗺️ Rotas da Aplicação

| Rota | Descrição | Estratégia de Renderização |
| :--- | :--- | :--- |
| `/` | Landing page principal: Hero com show em destaque dinâmico, agenda resumida, sobre a banda, player Spotify e parceiros. | **ISR (Revalidação 5min)** |
| `/banda` | Trajetória da banda, biografia dos integrantes e proposta artística. | **Static (SSG)** |
| `/agenda` | Tabela detalhada e cards responsivos de shows com status (confirmado/em breve) e links de compra. | **ISR (Revalidação 5min)** |
| `/musica` | Discografia de referência, repertório e player integrado do Spotify. | **Static (SSG)** |
| `/videos` | Galeria de apresentações ao vivo e vídeos promocionais. | **Static (SSG)** |
| `/fotos` | Galeria em alta definição com botões de download direto para mídia e cartazes. | **Static (SSG)** |
| `/imprensa` | Mídia Kit institucional, release oficial para jornalistas e link direto para pasta em nuvem. | **Static (SSG)** |
| `/contato` | Formulário de contato, link direto para WhatsApp de contratação e dados de assessoria. | **Static (SSG)** |

---

## 📁 Estrutura de Diretórios

```
revanche-website-v2/
├── app/                      # Next.js App Router
│   ├── agenda/               # Rota da agenda completa
│   ├── banda/                # Rota institucional da banda
│   ├── contato/              # Rota de contato e booking
│   ├── fotos/                # Rota da galeria em alta resolução
│   ├── imprensa/             # Rota do media kit oficial
│   ├── musica/               # Rota de músicas e streaming
│   ├── videos/               # Rota de vídeos e clipes
│   ├── error.tsx             # Error boundary global
│   ├── layout.tsx            # Layout raiz com Schema.org JSON-LD e SEO
│   ├── not-found.tsx         # Página 404 personalizada
│   ├── page.tsx              # Página inicial (Home)
│   ├── robots.ts             # Geração dinâmica do robots.txt
│   └── sitemap.ts            # Geração dinâmica do sitemap.xml
├── components/
│   ├── band/                 # Componentes da seção da banda e integrantes
│   ├── home/                 # Seções específicas da Home (Hero, Mídia, Parceiros)
│   ├── layout/               # Header responsivo, Footer e Container
│   ├── press/                # Componentes do media kit
│   ├── shows/                # Componentes da agenda (Table, Cards, Empty state)
│   └── ui/                   # Componentes base reutilizáveis (Button, etc.)
├── data/                     # Constantes tipadas (configurações do site, membros, parceiros)
├── lib/
│   └── shows/                # Serviços de busca de shows com cache ISR e fallback
└── types/                    # Definições de tipos TypeScript (Site, Shows, Membros)
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- **Node.js**: Versão 20 ou superior
- **Gerenciador de pacotes**: npm, pnpm ou bun

### 1. Clonar o repositório
```bash
git clone https://github.com/FelipeGardenghiDev/revanche-website-v2.git
cd revanche-website-v2
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Executar o servidor de desenvolvimento
```bash
npm run dev
```
Acesse `http://localhost:3000` no seu navegador.

### 4. Build de produção e verificação de tipos
```bash
npm run lint    # Verificação estrita do TypeScript
npm run build   # Compilação otimizada para produção
npm run start   # Inicialização do build de produção localmente
```

---

## 📄 Licença

Este projeto é de propriedade da **Banda Revanche** e desenvolvido por [Felipe Gardenghi](https://github.com/FelipeGardenghiDev). Todos os direitos reservados.
