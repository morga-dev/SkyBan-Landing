export default function SectionHeader({ tag, title, description, className = '' }) {
  return (
    <div className={`mb-8 ${className}`}>
      {tag && (
        <p className="text-[0.7rem] tracking-[4px] uppercase text-sky-lime mb-2">
          {tag}
        </p>
      )}
      {title && (
        <h2
          className="font-oswald text-[clamp(2rem,3.8vw,3rem)] font-bold uppercase leading-[1.05]"
          dangerouslySetInnerHTML={{
            __html: title.replace(/<span>/g, '<span class="text-sky-gold">'),
          }}
        />
      )}
      {description && (
        <p className="text-sky-muted max-w-[560px] mt-3 text-[0.95rem] leading-relaxed">
          {description}
        </p>
      )}
      <div className="h-[3px] bg-sky-gold mt-5 w-0 section-divider" />
    </div>
  );
}
