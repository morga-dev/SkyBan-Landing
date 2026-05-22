import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCounter({ target, suffix = '', duration = 1600, scrollBased = false, ...props }) {
  const elRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    if (scrollBased) {
      const counter = { value: 0 };
      const tween = gsap.to(counter, {
        value: target,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'bottom 40%',
          scrub: true,
        },
        onUpdate: () => {
          el.textContent = `${Math.round(counter.value)}${suffix}`;
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const t0 = performance.now();

          const tick = (now) => {
            const p = Math.min((now - t0) / duration, 1);
            const eased = p * p * (3 - 2 * p);
            const val = Math.round(eased * target);
            el.textContent = val + suffix;
            if (p < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, duration, scrollBased]);

  return (
    <span ref={elRef} {...props}>
      0{suffix}
    </span>
  );
}
