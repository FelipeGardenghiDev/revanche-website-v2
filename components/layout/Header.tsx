'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, PhoneCall, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

const desktopNavItems = [
  { label: 'A Banda', href: '/banda' },
  { label: 'Agenda', href: '/agenda' },
  { label: 'Música', href: '/musica' },
  { label: 'Galeria', href: '/fotos' },
  { label: 'Merch', href: '/merch' },
  { label: 'Produção', href: '/imprensa' },
];

const mobileNavItems = [
  { label: 'Início', href: '/' },
  { label: 'A Banda', href: '/banda' },
  { label: 'Agenda de Shows', href: '/agenda' },
  { label: 'Música & Repertório', href: '/musica' },
  { label: 'Vídeos & Redes', href: '/videos' },
  { label: 'Galeria & Coberturas', href: '/fotos' },
  { label: 'Merch Oficial', href: '/merch' },
  { label: 'Produção & Rider', href: '/imprensa' },
  { label: 'Contato & Booking', href: '/contato' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

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

  // Fechar menu mobile se redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

  // Focus trap para acessibilidade no menu mobile (WCAG 2.4.3 / WAI-ARIA Modal)
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElementRef.current = document.activeElement as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return;

        const drawer = drawerRef.current;
        const toggleBtn = toggleBtnRef.current;
        if (!drawer) return;

        const focusableInsideDrawer = Array.from(
          drawer.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        );

        const allFocusable = [toggleBtn, ...focusableInsideDrawer].filter(Boolean) as HTMLElement[];
        if (allFocusable.length === 0) return;

        const firstElement = allFocusable[0];
        const lastElement = allFocusable[allFocusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      window.addEventListener('keydown', handleTabKey);
      return () => {
        window.removeEventListener('keydown', handleTabKey);
      };
    } else if (previouslyFocusedElementRef.current) {
      previouslyFocusedElementRef.current.focus?.();
      previouslyFocusedElementRef.current = null;
    }
  }, [isOpen]);

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isOpen
            ? 'bg-[#000000]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#AB2217]/40'
            : 'bg-[#000000]/80 backdrop-blur-sm py-3.5 sm:py-4 border-b border-[#D9CDB5]/10'
        }`}
      >
        <Container size="lg">
          <div className="flex items-center justify-between">
            {/* Identificação Textual */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center group focus-visible:outline-none shrink-0"
              aria-label="Banda Revanche - Página Inicial"
            >
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
              ref={toggleBtnRef}
              type="button"
              className="lg:hidden p-2.5 -mr-2 text-[#D9CDB5] hover:text-[#AB2217] active:scale-95 focus:outline-none transition-all rounded-lg focus-visible:ring-2 focus-visible:ring-[#AB2217]"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {isOpen ? (
                <X className="w-8 h-8 text-[#AB2217]" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer / Fullscreen Navigation Overlay (WAI-ARIA Dialog) */}
      <div
        id="mobile-navigation"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de Navegação Mobile"
        className={`lg:hidden fixed inset-0 z-40 bg-[#000000]/98 backdrop-blur-2xl transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 pointer-events-auto visible'
            : 'opacity-0 pointer-events-none invisible'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-5 sm:px-8 max-w-lg mx-auto w-full overflow-y-auto overscroll-contain justify-between">
          <nav className="flex flex-col space-y-1 pt-1" aria-label="Menu Mobile">
            {mobileNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg sm:text-xl font-black uppercase tracking-wider py-3.5 sm:py-4 px-3.5 border-b border-[#D9CDB5]/10 flex items-center justify-between transition-all rounded-lg ${
                    isActive
                      ? 'text-[#AB2217] bg-[#AB2217]/15 pl-4 border-l-4 border-l-[#AB2217]'
                      : 'text-[#D9CDB5] hover:text-[#AB2217] hover:bg-white/[0.04] active:bg-white/[0.08]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      isActive ? 'text-[#AB2217] translate-x-1' : 'text-[#D9CDB5]/40'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 space-y-3 pb-4 border-t border-[#AB2217]/30 mt-6">
            <Button
              href={siteConfig.contact.whatsappUrl}
              variant="primary"
              size="lg"
              fullWidth
              isExternal
              className="gap-2.5 text-sm sm:text-base font-black uppercase py-4 shadow-[0_0_25px_rgba(171,34,23,0.45)]"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Contratar Banda Revanche</span>
            </Button>
            <Button
              href={siteConfig.mediaKitUrl}
              variant="outline"
              size="md"
              fullWidth
              isExternal
              className="text-xs sm:text-sm font-bold uppercase py-3.5 border-[#D9CDB5]/30 hover:border-[#AB2217]"
            >
              Acessar Rider & Media Kit
            </Button>
            <div className="text-center pt-2 text-xs sm:text-sm text-[#D9CDB5]/70 font-semibold tracking-wider uppercase">
              Ribeirão Preto e região / SP
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
