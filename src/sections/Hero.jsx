import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { heroStats } from '../data/landing';
import AnimatedCounter from '../components/AnimatedCounter';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const glowRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo('.hero-tag', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo('.hero-line', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.15 }, '-=0.3')
        .fromTo('.hero-sub', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')
        .fromTo('.hero-ctas', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')
        .fromTo('.hero-stats', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')
        .fromTo('.scroll-hint', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=0.2');

      if (glowRef.current) {
        gsap.to(glowRef.current, {
          y: () => window.innerHeight * 0.3,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      if (gridRef.current) {
        gsap.to(gridRef.current, {
          y: () => window.innerHeight * 0.15,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  });

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-start px-[8%] pt-28 md:pt-32 pb-16 z-[1] overflow-hidden"
    >
      <div
        ref={gridRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(95,191,108,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(95,191,108,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite',
        }}
      />
      <style>{`
        @keyframes gridMove { from { background-position: 0 0; } to { background-position: 60px 60px; } }
        @keyframes glowPulse { 0%,100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.15); opacity: 1; } }
      `}</style>
      <div
        ref={glowRef}
        className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(95,191,108,0.12) 0%, transparent 70%)',
          animation: 'glowPulse 4s ease-in-out infinite',
        }}
      />

      <span className="hero-tag text-[0.72rem] tracking-[4px] uppercase text-sky-lime border border-sky-lime/40 px-4 py-1.5 rounded-full mb-6">
        Tecnología Agroindustrial Sostenible
      </span>

      <h1 ref={titleRef} className="font-oswald text-[clamp(3.2rem,7.5vw,7rem)] font-bold leading-[0.95] uppercase tracking-tight max-w-[820px]">
        <span className="block overflow-hidden">
          <span className="hero-line block">Sistema de</span>
        </span>
        <span className="block overflow-hidden">
          <span className="hero-line block">Transporte</span>
        </span>
        <span className="block overflow-hidden">
          <span className="hero-line block text-sky-gold">Agroindustrial</span>
        </span>
      </h1>

      <p className="hero-sub text-sky-muted text-[1.05rem] max-w-[520px] mt-6 leading-relaxed text-justify">
        Soluciones mecánicas innovadoras que optimizan el cable vía, reducen el esfuerzo físico y elevan la productividad de tu finca.
      </p>

      <div className="hero-ctas flex gap-4 mt-10">
        <a
          href="#productos"
          onClick={(e) => handleClick(e, '#productos')}
          className="bg-sky-gold text-sky-dark px-8 py-3.5 font-oswald text-[1rem] font-bold tracking-wide no-underline inline-block relative overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
        >
          <span className="absolute inset-0 bg-white/20 -skew-x-[20deg] -translate-x-full group-hover:translate-x-[120%] transition-all duration-[400ms]" />
          Ver productos
        </a>
        <a
          href="#cta"
          onClick={(e) => handleClick(e, '#cta')}
          className="border border-sky-muted text-sky-text px-8 py-3.5 font-oswald text-[1rem] font-semibold tracking-wide no-underline transition-all duration-250 hover:border-sky-gold hover:text-sky-gold hover:-translate-y-0.5"
        >
          Solicitar cotización
        </a>
      </div>

      <div className="hero-stats flex gap-12 mt-16 flex-wrap">
        {heroStats.map((stat) => (
          <div key={stat.label}>
            <AnimatedCounter
              target={stat.target}
              suffix={stat.suffix}
              className="font-oswald text-[3rem] font-bold text-sky-gold leading-none block"
            />
            <span
              className="text-[0.72rem] text-sky-muted uppercase tracking-wide mt-1 block"
              dangerouslySetInnerHTML={{ __html: stat.label.replace('\\n', '<br/>') }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
