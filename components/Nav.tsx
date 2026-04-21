'use client';
import React, { useEffect, useState } from 'react';
import { useI18n } from '@/lib/i18n';
import LanguageToggle from './LanguageToggle';
import { MenuIcon, CloseIcon } from './icons';

const navLinks = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.contact', href: '#contact' },
];

export default function Nav() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 start-0 end-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy/90 backdrop-blur-md border-b border-lightest-navy/40 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            className="font-mono text-accent text-xl font-bold tracking-widest hover:opacity-80 transition-opacity shrink-0"
            aria-label="Omer Itzhaki — back to top"
          >
            OI
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link, i) => (
              <a
                key={link.key}
                href={link.href}
                className="group flex items-center gap-1 px-3 py-2 text-sm text-slate hover:text-accent transition-colors duration-200"
              >
                <span className="font-mono text-accent text-xs">0{i + 1}.</span>
                {t(link.key)}
              </a>
            ))}
          </nav>

          {/* Desktop right side */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle />
            <a
              href="/omer-itzhaki-cv.pdf"
              download
              className="font-mono text-sm text-accent border border-accent rounded-full px-4 py-1.5 hover:bg-accent/10 transition-colors duration-200"
            >
              {t('nav.resume')}
            </a>
          </div>

          {/* Mobile: language toggle + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-slate hover:text-accent transition-colors p-1"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-light-navy flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
          {navLinks.map((link, i) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex flex-col items-center gap-1 text-lightest-slate hover:text-accent transition-colors duration-200"
            >
              <span className="font-mono text-accent text-sm">0{i + 1}.</span>
              <span className="text-2xl font-semibold">{t(link.key)}</span>
            </a>
          ))}
          <a
            href="/omer-itzhaki-cv.pdf"
            download
            onClick={() => setMenuOpen(false)}
            className="mt-4 font-mono text-base text-accent border border-accent rounded-full px-6 py-2 hover:bg-accent/10 transition-colors duration-200"
          >
            {t('nav.resume')}
          </a>
        </nav>
      </div>
    </>
  );
}
