import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { missionData, visionData, materialsData, valores } from '../data/about';
import SectionHeader from '../components/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.section-divider',
        { width: 0 },
        { width: 60, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.section-divider', start: 'top 90%', toggleActions: 'play none none none' } }
      );

      gsap.utils.toArray('.mv-card').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 30 },
          {
            opacity: 1, x: 0, duration: 0.6, delay: i * 0.15, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      });

      gsap.utils.toArray('.valor-tag').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1, scale: 1, duration: 0.4, delay: i * 0.06, ease: 'back.out(1.7)',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  });

  const cards = [missionData, visionData, materialsData];

  return (
    <section id="nosotros" ref={sectionRef} className="py-24 px-[8%] relative z-[1] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center text-justify">
      <div>
        <SectionHeader
          tag="Quiénes somos"
          title="Ingeniería al servicio del <span>campo</span>"
          description="Un equipo de ingenieros desarrollando soluciones mecánicas que mejoran la productividad y las condiciones laborales en el sector agroindustrial de América Latina."
        />
        <div className="flex flex-wrap gap-2 mt-6">
          {valores.map((v) => (
            <span
              key={v}
              className="valor-tag text-[0.72rem] tracking-[2px] uppercase border border-sky-border px-3 py-1 text-sky-muted transition-all duration-200 hover:border-sky-lime hover:text-sky-lime hover:scale-105 cursor-default"
              data-hoverable
            >
              {v}
            </span>
          ))}
        </div>
      </div>
      <div>
        {cards.map((card) => (
          <div
            key={card.tag}
            className="bg-sky-card border-l-4 border-sky-gold p-6 mb-5 transition-all duration-250 hover:border-sky-lime"
          >
            <p className="font-oswald text-[0.7rem] tracking-[4px] uppercase text-sky-gold mb-1.5">
              {card.tag}
            </p>
            <p className="text-sky-muted text-[0.9rem] leading-relaxed text-justify">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
