import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { sectors } from '../data/landing';
import SectionHeader from '../components/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

export default function Sectors() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.section-divider',
        { width: 0 },
        { width: 60, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.section-divider', start: 'top 90%', toggleActions: 'play none none none' } }
      );

      gsap.utils.toArray('.sector-chip').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.5, delay: i * 0.08, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      });

      gsap.fromTo(
        '.sectors-text',
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: '.sectors-text', start: 'top 85%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  });

  return (
    <section id="sectores" ref={sectionRef} className="py-24 px-[8%] relative z-[1] bg-sky-surface">
      <SectionHeader
        tag="Sectores de aplicación"
        title="Adaptable a toda la <span>agroindustria</span>"
      />
      <div className="flex gap-16 mt-12 flex-wrap items-start">
        <div className="flex-1 min-w-[260px] grid grid-cols-2 gap-3">
          {sectors.map((s, i) => (
            <div
              key={i}
              className={`sector-chip bg-sky-card border border-sky-border px-4 py-3 text-[0.86rem] flex items-center gap-2.5 transition-all duration-250 hover:border-sky-lime hover:text-sky-lime hover:translate-x-1 cursor-default ${s.full ? 'col-span-2' : ''}`}
              data-hoverable
            >
              <span>{s.icon}</span>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
        <div className="sectors-text flex-1 min-w-[260px]">
          <p className="text-sky-muted text-[0.95rem] leading-relaxed text-justify">
            SkyBan fue concebido originalmente para el sector bananero, donde el cable vía es el principal medio de transporte de fruta. Sin embargo, su diseño modular y adaptable lo convierte en una solución viable para cualquier operación agroindustrial.
          </p>
          <br />
          <p className="text-sky-muted text-[0.95rem] leading-relaxed text-justify">
            Desde pequeñas fincas cafetaleras hasta grandes plantaciones de palma de aceite, SkyBan se integra con la infraestructura existente y genera valor desde el primer día de operación.
          </p>
        </div>
      </div>
    </section>
  );
}
