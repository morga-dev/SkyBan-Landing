import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import SectionHeader from '../components/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.section-divider',
        { width: 0 },
        { width: 60, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.section-divider', start: 'top 90%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  });

  return (
    <section id="productos" ref={sectionRef} className="py-24 px-[8%] relative z-[1] bg-sky-surface">
      <SectionHeader
        tag="Línea de productos SkyBan"
        title="Un sistema para cada <span>operación</span>"
        description="Tres modelos adaptados a distintas necesidades operativas, energéticas y de escala productiva."
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mt-12">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
