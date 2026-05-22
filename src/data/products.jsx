export const products = [
  {
    id: 'eco',
    name: 'SkyEco',
    model: 'STA MK1',
    tag: 'Energía humana / Pedaleo',
    tagClass: 'text-sky-lime border-sky-lime',
    nameClass: 'text-sky-lime',
    accentColor: '#5fbf6c',
    glowColor: 'rgba(95,191,108,0.06)',
    description: 'Sistema mecánico basado en bicimáquinas. Aprovecha la capacidad biomecánica de las piernas para accionar el cable vía sin electricidad.',
    features: [
      'No requiere electricidad',
      'Bajo costo operativo',
      'Sistema 100% sostenible',
      'Ideal para pequeñas y medianas fincas',
      'Reduce ~50% el esfuerzo físico',
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 2-3 2 2h3"/><path d="M9 8l-3 3 2 3"/>
      </svg>
    ),
    logoImage: '/images/logo-skyeco.png',
    protoImages: ['/images/proto-skyeco-1.png', '/images/proto-skyeco-2.png'],
  },
  {
    id: 'volt',
    name: 'SkyVolt',
    model: 'STA MK1',
    tag: 'Energía eléctrica',
    tagClass: 'text-sky-gold border-sky-gold',
    nameClass: 'text-sky-gold',
    accentColor: '#d9a820',
    glowColor: 'rgba(217,168,32,0.06)',
    description: 'Versión electrificada para fincas con mayores volúmenes de producción y recorridos prolongados. Operación continua con mínima intervención física.',
    features: [
      'Motor eléctrico integrado',
      'Menor desgaste físico',
      'Mayor continuidad operativa',
      'Mayor capacidad de traslado',
      'Ideal para fincas medianas y grandes',
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    logoImage: '/images/logo-skybolt.png',
    protoImages: ['/images/proto-skyvolt-1.png', '/images/proto-skyvolt-2.png'],
  },
  {
    id: 'mech',
    name: 'SkyMech',
    model: 'STA MK1',
    tag: 'Motor a gasolina',
    tagClass: 'text-sky-accent border-sky-accent',
    nameClass: 'text-sky-accent',
    accentColor: '#d07040',
    glowColor: 'rgba(208,112,64,0.06)',
    description: 'Versión autónoma para terrenos extensos o zonas sin acceso eléctrico. Alta potencia y trabajo continuo en cualquier condición de campo.',
    features: [
      'Funcionamiento autónomo',
      'Alta capacidad de trabajo continuo',
      'Mayor potencia de arrastre',
      'Adaptable a largas distancias',
      'No depende de red eléctrica',
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
    logoImage: '/images/logo-skymech.png',
    protoImages: ['/images/proto-skymech-1.png', '/images/proto-skymech-2.png'],
  },
];