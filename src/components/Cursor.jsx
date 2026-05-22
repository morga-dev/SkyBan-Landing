import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    };

    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      raf = requestAnimationFrame(animate);
    };

    let raf = requestAnimationFrame(animate);
    window.addEventListener('mousemove', onMove);

    const hoverables = document.querySelectorAll(
      'a, button, [data-hoverable], .product-card, .benefit-item, .sector-chip, .ods-card, .blog-card, .valor-tag'
    );

    const onEnter = () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1.8)';
      cursor.style.background = 'transparent';
      cursor.style.border = '1px solid #d9a820';
      ring.style.transform = 'translate(-50%,-50%) scale(0.5)';
      ring.style.opacity = '0';
    };
    const onLeave = () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      cursor.style.background = '#d9a820';
      cursor.style.border = 'none';
      ring.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.opacity = '1';
    };

    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        id="cursor"
        className="fixed pointer-events-none z-[9999] w-3 h-3 rounded-full bg-sky-gold"
        style={{ transform: 'translate(-50%,-50%)' }}
      />
      <div
        ref={ringRef}
        id="cursor-ring"
        className="fixed pointer-events-none z-[9998] w-9 h-9 rounded-full border border-sky-gold/50"
        style={{ transform: 'translate(-50%,-50%)' }}
      />
    </>
  );
}
