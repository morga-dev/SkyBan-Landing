import { useEffect, useRef } from 'react';

export default function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];
    let raf;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.r = Math.random() * 1.5 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = -Math.random() * 0.4 - 0.1;
        this.life = 0;
        this.maxLife = Math.random() * 0.8 + 0.2;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life += 0.002;
        if (this.life > this.maxLife || this.x < 0 || this.x > W || this.y < 0) this.reset();
      }
      draw() {
        const a = Math.sin((this.life / this.maxLife) * Math.PI) * 0.6;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(95,191,108,${a})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 100; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => { p.update(); p.draw(); });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particles"
      className="fixed inset-0 pointer-events-none z-0 opacity-55"
    />
  );
}
