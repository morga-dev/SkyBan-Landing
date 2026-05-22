import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { benefits } from '../data/landing';
import SectionHeader from '../components/SectionHeader';
import AnimatedCounter from '../components/AnimatedCounter';

gsap.registerPlugin(ScrollTrigger);

export default function Benefits() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.section-divider',
        { width: 0 },
        { width: 60, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.section-divider', start: 'top 90%', toggleActions: 'play none none none' } }
      );

      gsap.utils.toArray('.benefit-item').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6, delay: i * 0.1, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  });

  return (
    <section id="beneficios" ref={sectionRef} className="py-24 px-[8%] relative z-1">
      <SectionHeader
        tag="Ventajas técnicas"
        title="Diseñado para el <span>trabajador</span> y la producción"
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 mt-12">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="benefit-item bg-sky-surface border border-sky-border p-7 transition-all duration-250 hover:border-sky-gold hover:-translate-y-1 cursor-default text-justify"
            data-hoverable
          >
            {b.value !== null ? (
              <AnimatedCounter
                target={parseInt(b.value)}
                suffix={b.suffix || ''}
                scrollBased={Boolean(b.scrollBased)}
                className="font-oswald text-[2.8rem] font-bold text-sky-gold leading-none block"
              />
            ) : (
              <div className="font-oswald text-[2.8rem] font-bold text-sky-gold leading-none">
                {b.icon}
              </div>
            )}
            <p className="text-sky-muted text-[0.85rem] mt-2 leading-relaxed">{b.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
