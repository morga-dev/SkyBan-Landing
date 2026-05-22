import { useEffect } from 'react';

export default function ImageModal({ image, alt, accentColor, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 py-8"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-5xl rounded-[28px] border border-sky-border bg-sky-card p-3 shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={alt}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-[1] flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white transition-colors duration-200 hover:bg-black/70"
          aria-label="Cerrar imagen ampliada"
        >
          ×
        </button>
        <div
          className="absolute inset-x-3 top-0 h-[3px] rounded-full"
          style={{ background: `linear-gradient(90deg, ${accentColor}, transparent 70%)` }}
        />
        <div className="overflow-hidden rounded-[22px] bg-white/5">
          <img
            src={image}
            alt={alt}
            className="max-h-[82vh] w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}