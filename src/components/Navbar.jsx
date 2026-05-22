import { useRef, useEffect, useState } from 'react';
import { navLinks } from '../data/navigation';

export default function Navbar() {
  const navRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-[6%] h-16 transition-all duration-400"
      style={{
        background: 'rgba(7,22,12,0)',
        backdropFilter: 'blur(0px)',
        borderBottom: '1px solid rgba(95,191,108,0)',
      }}
    >
      <style>{`
        nav.scrolled {
          background: rgba(7,22,12,0.88) !important;
          backdrop-filter: blur(16px) !important;
          border-bottom-color: rgba(95,191,108,0.15) !important;
        }
      `}</style>
      <a
        href="#"
        onClick={(e) => handleClick(e, '#hero')}
        className="font-oswald text-[1.5rem] font-bold text-sky-gold tracking-[3px] no-underline flex items-center gap-0.5"
      >
        SKY<span style={{ color: '#5fbf6c' }}>BAN</span>
        <span className="text-sky-lime animate-pulse" style={{ animationDuration: '2s' }}>.</span>
      </a>
      <ul className="hidden md:flex gap-8 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-sky-muted no-underline text-[0.82rem] tracking-[1.5px] uppercase relative transition-colors duration-250 hover:text-sky-gold"
              style={{
                position: 'relative',
              }}
            >
              {link.label}
                <span className="absolute -bottom-1 left-0 h-px bg-sky-gold transition-all duration-300" style={{ width: '0%' }} />
            </a>
          </li>
        ))}
      </ul>
      <button
          type="button"
        className="md:hidden text-sky-text text-2xl"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>
      <div
        id="mobile-menu"
          className={`fixed top-0 right-0 h-full w-64 bg-sky-dark/95 backdrop-blur-xl border-l border-sky-border z-200 transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
            type="button"
          className="absolute top-4 right-4 text-sky-text text-2xl"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Cerrar menu"
        >
          ✕
        </button>
        <ul className="flex flex-col gap-6 mt-20 px-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                className="text-sky-muted no-underline text-[0.85rem] tracking-[2px] uppercase hover:text-sky-gold transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
