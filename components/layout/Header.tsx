'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, PhoneCall, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

const desktopNavItems = [
  { label: 'A Banda', href: '/banda' },
  { label: 'Agenda', href: '/agenda' },
  { label: 'Música', href: '/musica' },
  { label: 'Fotos', href: '/fotos' },
  { label: 'Merch', href: '/merch' },
  { label: 'Imprensa', href: '/imprensa' },
];

const mobileNavItems = [
  { label: 'Início', href: '/' },
  { label: 'A Banda', href: '/banda' },
  { label: 'Agenda de Shows', href: '/agenda' },
  { label: 'Música & Repertório', href: '/musica' },
  { label: 'Vídeos & Redes', href: '/videos' },
  { label: 'Galeria de Fotos', href: '/fotos' },
  { label: 'Merch Oficial', href: '/merch' },
  { label: 'Imprensa & Rider', href: '/imprensa' },
  { label: 'Contato & Booking', href: '/contato' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu ao mudar de rota
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Fechar com tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Prevenir scroll quando o menu mobile estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#000000]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#AB2217]/40'
          : 'bg-[#000000]/80 backdrop-blur-sm py-4 border-b border-[#D9CDB5]/10'
      }`}
    >
      <Container size="lg">
        <div className="flex items-center justify-between">
          {/* Logo Oficial */}
          <Link
            href="/"
            className="flex items-center space-x-3 group focus-visible:outline-none shrink-0"
            aria-label="Banda Revanche - Página Inicial"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10">
              <Image
                src="/logos/Logo-Revanche-PNG.png"
                alt="Logo Revanche"
                fill
                sizes="40px"
                priority
                className="object-contain filter drop-shadow-[0_0_10px_#AB2217]"
              />
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-widest text-[#D9CDB5] group-hover:text-[#AB2217] transition-colors">
              REVANCHE
            </span>
          </Link>

          {/* Desktop Navigation com Espaçamento Confortável */}
          <nav
            className="hidden lg:flex items-center space-x-8 xl:space-x-10"
            aria-label="Navegação Principal"
          >
            {desktopNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm xl:text-base font-bold tracking-wide transition-colors duration-200 py-1 relative ${
                    isActive
                      ? 'text-[#AB2217] font-black after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#AB2217]'
                      : 'text-[#D9CDB5] hover:text-[#AB2217]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action CTA */}
          <div className="hidden lg:flex items-center">
            <Button
              href={siteConfig.contact.whatsappUrl}
              variant="primary"
              size="sm"
              isExternal
              className="gap-2 text-xs font-black uppercase tracking-wider px-5 py-2.5 shadow-[0_0_15px_rgba(171,34,23,0.4)]"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Contratar</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-btn"
            type="button"
            className="lg:hidden p-2 text-[#D9CDB5] hover:text-[#AB2217] focus:outline-none transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer / Overlay */}
      <div
        id="mobile-navigation"
        className={`lg:hidden fixed inset-x-0 top-[68px] bottom-0 bg-[#000000]/98 backdrop-blur-2xl border-t border-[#AB2217]/50 z-40 flex flex-col justify-between p-6 overflow-y-auto transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <nav className="flex flex-col space-y-2 pt-2" aria-label="Menu Mobile">
            {mobileNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold py-3.5 border-b border-[#D9CDB5]/10 flex items-center justify-between transition-colors ${
                    isActive ? 'text-[#AB2217] font-black pl-2' : 'text-[#D9CDB5] hover:text-[#AB2217]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#AB2217]" />
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 space-y-3 pb-6 border-t border-[#D9CDB5]/10 mt-4">
            <Button
              href={siteConfig.contact.whatsappUrl}
              variant="primary"
              size="lg"
              fullWidth
              isExternal
              className="gap-2 text-sm font-black uppercase"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contratar Banda Revanche</span>
            </Button>
            <Button
              href={siteConfig.mediaKitUrl}
              variant="outline"
              size="md"
              fullWidth
              isExternal
              className="text-xs font-bold uppercase"
            >
              Acessar Rider & Media Kit
            </Button>
            <div className="text-center pt-3 text-xs text-[#D9CDB5]/60 font-medium">
              Ribeirão Preto e região / SP
            </div>
          </div>
        </div>
    </header>
  );
};
