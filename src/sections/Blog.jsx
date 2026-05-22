import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { blogPosts } from '../data/blog';
import SectionHeader from '../components/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.section-divider',
        { width: 0 },
        { width: 60, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.section-divider', start: 'top 90%', toggleActions: 'play none none none' } }
      );

      gsap.utils.toArray('.blog-card').forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.5, delay: i * 0.1, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  });

  return (
    <section id="blog" ref={sectionRef} className="py-24 px-[8%] relative z-[1]">
      <SectionHeader
        tag="Blog y noticias"
        title="Conocimiento para el <span>campo</span>"
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5 mt-12">
        {blogPosts.map((post, i) => (
          <div
            key={i}
            className="blog-card bg-sky-card border border-sky-border p-7 relative overflow-hidden transition-all duration-250 hover:border-sky-gold hover:-translate-y-1 cursor-default group"
            data-hoverable
          >
            <span className="absolute bottom-6 right-6 text-sky-gold text-[1.2rem] font-bold -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-250">
              →
            </span>
            <p className="text-[0.68rem] tracking-[3px] uppercase text-sky-lime mb-2">
              {post.tag}
            </p>
            <h4 className="font-oswald text-[1.1rem] font-semibold leading-tight mb-2 text-justify">
              {post.title}
            </h4>
            <p className="text-[0.83rem] text-sky-muted leading-relaxed text-justify">
              {post.excerpt}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
