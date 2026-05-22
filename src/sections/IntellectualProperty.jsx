import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function IntellectualProperty() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pi-left',
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: '.pi-left', start: 'top 85%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo(
        '.pi-badge',
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: '.pi-badge', start: 'top 85%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo(
        '.pi-divider',
        { width: 0 },
        { width: 60, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.pi-divider', start: 'top 90%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  });

  return (
    <section id="pi" ref={sectionRef} className="py-24 px-[8%] relative z-[1] bg-sky-surface">
      <style>{`
        @keyframes shimmer { to { left: 200%; } }
        .pi-badge::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(217,168,32,0.08), transparent);
          animation: shimmer 3s 2s infinite;
          pointer-events: none;
        }
      `}</style>
      <div className="flex gap-16 items-center flex-wrap">
        <div className="pi-left flex-1 min-w-[260px]">
          <p className="text-[0.7rem] tracking-[4px] uppercase text-sky-lime mb-2">Propiedad intelectual</p>
          <h2 className="font-oswald text-[clamp(2rem,3.8vw,3rem)] font-bold uppercase leading-[1.05]">
            Innovación <span className="text-sky-gold">protegida</span>
          </h2>
          <p className="text-sky-muted max-w-[560px] mt-3 text-[0.95rem] leading-relaxed text-justify">
            Modelo de utilidad en proceso de registro ante el IMPI. Esta protección resguarda la innovación y fortalece la comercialización en América Latina.
          </p>
          <div className="pi-divider h-[3px] bg-sky-gold mt-5 w-0" />
        </div>
        <div className="pi-badge flex-1 min-w-[260px] relative overflow-hidden bg-sky-gold/5 border border-sky-gold/30 p-8">
          <p className="font-oswald text-[0.7rem] tracking-[4px] uppercase text-sky-gold mb-2">
            🏛 Registro en trámite — IMPI
          </p>
          <p className="text-sky-text text-[0.9rem] leading-relaxed relative z-[1] text-justify">
            Mejora funcional aplicada a sistemas de transporte agrícola existentes. El registro como modelo de utilidad garantiza protección legal y ventaja competitiva en el mercado regional.
          </p>
          <div className="mt-4 pt-4 border-t border-sky-gold/25 relative z-[1]">
            <p className="text-[0.8rem] text-sky-muted text-justify">
              La propiedad intelectual respalda la seguridad de la inversión para distribuidores y socios comerciales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
