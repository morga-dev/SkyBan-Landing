import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { odsList } from '../data/landing';
import SectionHeader from '../components/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

export default function Sustainability() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.section-divider',
        { width: 0 },
        { width: 60, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.section-divider', start: 'top 90%', toggleActions: 'play none none none' } }
      );

      gsap.utils.toArray('.ods-card').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6, delay: i * 0.12, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  });

  return (
    <section id="sustentabilidad" ref={sectionRef} className="py-24 px-[8%] relative z-[1] bg-sky-surface text-justify">
      <SectionHeader
        tag="Agenda 2030 – ONU"
        title="Compromiso con el desarrollo <span>sostenible</span>"
        description="SkyBan contribuye directamente al cumplimiento de los ODS de las Naciones Unidas."
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-[680px]">
        {odsList.map((ods, i) => (
          <div
            key={i}
            className="ods-card border border-sky-border p-8 text-center relative overflow-hidden transition-all duration-300 hover:border-sky-gold hover:-translate-y-1.5 cursor-default group"
            data-hoverable
          >
            <div className="absolute inset-0 bg-radial opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(217,168,32,0.08), transparent 70%)' }} />
            <div className="font-oswald text-[2.2rem] font-bold text-sky-gold leading-tight mb-2">
              {ods.num}
            </div>
            <p className="text-[0.78rem] text-sky-muted leading-relaxed">
              {ods.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
