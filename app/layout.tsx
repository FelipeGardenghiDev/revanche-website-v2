import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { siteConfig } from '@/data/site-config';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#AB2217',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Tributo Fresno & Emo Anos 2000`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Banda Revanche',
    'Tributo Fresno',
    'Emo Anos 2000',
    'Rock Nacional',
    'Shows Ribeirão Preto',
    'Felipe Gardenghi',
    'Eduardo Opaleiro',
    'Yago Borges',
    'Leonan Artal',
    'Contratar Banda Emo',
  ],
  authors: [{ name: 'Banda Revanche' }, { name: 'FG Software' }],
  creator: 'Banda Revanche',
  publisher: 'Banda Revanche',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    title: `${siteConfig.name} | Tributo Fresno & Emo Anos 2000`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Banda Revanche - Tributo Fresno',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Tributo Fresno`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for MusicGroup
  const musicGroupJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: 'Banda Revanche',
    url: siteConfig.url,
    logo: `${siteConfig.url}/logos/Logo-Revanche-PNG.png`,
    image: `${siteConfig.url}/images/banda/banda.jpg`,
    description: siteConfig.description,
    genre: ['Emo', 'Rock Alternativo', 'Pop Punk', 'Post-Hardcore'],
    member: [
      {
        '@type': 'Person',
        name: 'Felipe Gardenghi',
        jobTitle: 'Vocal / Guitarra',
      },
      {
        '@type': 'Person',
        name: 'Eduardo Opaleiro',
        jobTitle: 'Guitarra / Voz de Apoio',
      },
      {
        '@type': 'Person',
        name: 'Yago Borges',
        jobTitle: 'Baixo / Voz de Apoio',
      },
      {
        '@type': 'Person',
        name: 'Leonan Artal',
        jobTitle: 'Bateria',
      },
    ],
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.tiktok,
      siteConfig.socials.spotifyPlaylist,
    ],
  };

  return (
    <html lang="pt-BR" className={`scroll-smooth ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(musicGroupJsonLd) }}
        />
        {siteConfig.googleAnalyticsId && (
          <>
            <script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`}
              async
            />
            <script id="google-analytics"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${siteConfig.googleAnalyticsId}', {
                  page_path: window.location.pathname,
                });
              `}}
            />
          </>
        )}
      </head>
      <body className="bg-[#000000] text-[#D9CDB5] min-h-screen flex flex-col font-sans selection:bg-[#AB2217] selection:text-[#FFFFFF]">
        <div className="bg-band-overlay" aria-hidden="true" />
        <Header />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
