export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040d06] border-t border-sky-border px-[8%] py-12 flex flex-col items-center justify-center gap-6 text-center md:flex-row md:flex-wrap md:justify-between md:text-left relative z-[1]">
      <div className="flex flex-col items-center md:items-start">
        <div className="h-20 w-20 overflow-hidden rounded-full border border-sky-border bg-white p-1 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
          <img
            src="/images/logo-skyban.png"
            alt="Logo SkyBan"
            className="h-full w-full rounded-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="text-[0.78rem] text-sky-muted mt-1">
          Tecnología Agroindustrial Sostenible · México
        </div>
      </div>
      <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 list-none m-0 p-0 md:justify-start">
        {[
          { label: 'Nosotros', href: '#nosotros' },
          { label: 'Beneficios', href: '#beneficios' },
          { label: 'Productos', href: '#productos' },
          { label: 'ODS', href: '#sustentabilidad' },
          { label: 'Contacto', href: '#cta' },
        ].map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-sky-muted no-underline text-[0.78rem] hover:text-sky-gold transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-[0.72rem] text-sky-muted/40">
        © 2026 SkyBan. Todos los derechos reservados.
      </p>
    </footer>
  );
}
