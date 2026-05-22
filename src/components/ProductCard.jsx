import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ImageModal from './ImageModal';

gsap.registerPlugin(ScrollTrigger);

export default function ProductCard({ product, index }) {
  const cardRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useGSAP(() => {
    const el = cardRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: index * 0.15,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group relative bg-sky-card border border-sky-border p-8 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)] cursor-default"
      data-hoverable
    >
      <div
        className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 origin-left transition-transform duration-[400ms] group-hover:scale-x-100 pointer-events-none"
        style={{ background: product.accentColor }}
      />
      <div
        className="absolute -top-1/2 -right-[30%] w-[200%] h-[200%] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top right, ${product.glowColor}, transparent 60%)`,
        }}
      />
      <div className="relative z-[1] justify-center items-center text-center">
        <div className="mb-5 inline-flex rounded-[18px] border border-sky-border bg-sky-surface/75 px-4 py-3 transition-transform duration-300 group-hover:scale-[1.03]">
          <img
            src={product.logoImage}
            alt={`Logo ${product.name}`}
            className="h-36 w-auto object-contain"
            loading="lazy"
          />
        </div>
        <p className="text-[0.68rem] tracking-[3px] uppercase text-sky-muted mb-1">
          {product.model}
        </p>
        <h3 className={`font-oswald text-[1.9rem] font-bold uppercase tracking-wide mb-3 ${product.nameClass}`}>
          {product.name}
        </h3>
        {product.protoImages?.length ? (
          <div className="grid grid-cols-2 gap-3 mb-5">
            {product.protoImages.map((image, imageIndex) => (
              <div
                key={image}
                className="relative overflow-hidden rounded-[18px] border border-sky-border bg-sky-surface/70 aspect-[4/5]"
              >
                <button
                  type="button"
                  className="block h-full w-full text-left"
                  onClick={() => setSelectedImage({
                    src: image,
                    alt: `${product.name} prototipo ${imageIndex + 1}`,
                  })}
                  aria-label={`Ampliar ${product.name} prototipo ${imageIndex + 1}`}
                >
                  <img
                    src={image}
                    alt={`${product.name} prototipo ${imageIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </button>
                <div
                  className="absolute inset-x-0 top-0 h-[2px] opacity-70"
                  style={{ background: `linear-gradient(90deg, ${product.accentColor}, transparent)` }}
                />
              </div>
            ))}
          </div>
        ) : null}
        <p className="text-sky-muted text-[0.92rem] leading-relaxed mb-6 text-justify">
          {product.description}
        </p>
        <ul className="list-none m-0 p-0 space-y-0">
          {product.features.map((f, i) => (
            <li
              key={i}
              className="text-[0.86rem] py-1.5 border-t border-sky-border flex items-center gap-2 transition-all duration-200 group-hover:pl-1"
            >
              <span className="text-sky-gold font-bold shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
              {f}
            </li>
          ))}
        </ul>
        <span
          className={`inline-block text-[0.68rem] tracking-[2px] uppercase px-3 py-1 mt-5 border relative overflow-hidden ${product.tagClass}`}
        >
          <span
            className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
          />
          <span className="relative z-[1]">{product.tag}</span>
        </span>
      </div>
      {selectedImage ? (
        <ImageModal
          image={selectedImage.src}
          alt={selectedImage.alt}
          accentColor={product.accentColor}
          onClose={() => setSelectedImage(null)}
        />
      ) : null}
    </div>
  );
}
