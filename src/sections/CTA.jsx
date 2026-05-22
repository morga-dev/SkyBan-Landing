import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-tag', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, scrollTrigger: { trigger: '.cta-tag', start: 'top 85%', toggleActions: 'play none none none' } });
      gsap.fromTo('.cta-title', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.1, scrollTrigger: { trigger: '.cta-title', start: 'top 85%', toggleActions: 'play none none none' } });
      gsap.fromTo('.cta-desc', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.2, scrollTrigger: { trigger: '.cta-desc', start: 'top 85%', toggleActions: 'play none none none' } });
      gsap.fromTo('.cta-buttons', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.3, scrollTrigger: { trigger: '.cta-buttons', start: 'top 85%', toggleActions: 'play none none none' } });
    }, sectionRef);
    return () => ctx.revert();
  });

  return (
    <section id="cta" ref={sectionRef} className="py-32 px-[8%] relative text-center overflow-hidden bg-sky-surface border-t border-b border-sky-border z-[1]">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(95,191,108,0.06), transparent 70%)', animation: 'glowPulse 3s infinite' }}
      />
      <style>{`@keyframes glowPulse { 0%,100% { transform: translate(-50%,-50%) scale(1); opacity: 0.8; } 50% { transform: translate(-50%,-50%) scale(1.15); opacity: 1; } }`}</style>
      <div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-oswald text-[clamp(6rem,11vw,11rem)] font-bold text-sky-lime/5 whitespace-nowrap tracking-[10px] pointer-events-none select-none"
      >
        SKYBAN
      </div>

      <p className="cta-tag text-[0.7rem] tracking-[4px] uppercase text-sky-lime mb-2">¿Listo para optimizar tu finca?</p>
      <h2 className="cta-title font-oswald text-[clamp(2rem,3.8vw,3rem)] font-bold uppercase leading-tight">
        Solicita una <span className="text-sky-gold">demostración</span>
        <br />
        o <span className="text-sky-gold">cotización</span> personalizada
      </h2>
      <p className="cta-desc text-sky-muted max-w-[560px] mx-auto mt-3 text-[0.95rem] leading-relaxed">
        Nuestro equipo de ingenieros evaluará tu operación y te recomendará el modelo más adecuado.
      </p>
      <div className="cta-buttons flex gap-4 mt-10 justify-center flex-wrap">
        <a
          href="https://wa.me/9624143599?text=Hola%20equipo%20de%20Skyban%2C%20estoy%20interesado%20en%20una%20demostraci%C3%B3n%20o%20cotizaci%C3%B3n%20personalizada.%20%C2%BFPodr%C3%ADan%20ayudarme%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-gold text-sky-dark px-8 py-3.5 font-oswald text-[1rem] font-bold tracking-wide no-underline inline-block relative overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
        >
          WhatsApp / Contactar
        </a>
        <a
          href="mailto:stephanysayuryfloresbahena@gmail.com"
          className="border border-sky-muted text-sky-text px-8 py-3.5 font-oswald text-[1rem] font-semibold tracking-wide no-underline transition-all duration-250 hover:border-sky-gold hover:text-sky-gold hover:-translate-y-0.5"
        >
          Enviar correo
        </a>
      </div>
    </section>
  );
}
