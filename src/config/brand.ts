export interface ProductPresentation {
  id: '350g' | '750g' | 'mayorista-350g' | 'mayorista-750g';
  name: string;
  subtitle: string;
  weight: string;
  badge: string;
  priceFormatted: string;
  priceNote: string;
  unitsIncluded: number;
  idealFor: string[];
  yieldEstimate: string;
  image: string;
  whatsappText: string;
  popular?: boolean;
}

export interface ChemicalComponent {
  name: string;
  role: string;
  category: 'activo' | 'mineral' | 'botanico' | 'estabilizador';
  description: string;
  coordX: number;
  coordY: number;
}

export interface PhysicoChemicalSpec {
  parameter: string;
  specification: string;
  highlight?: boolean;
}

export interface LogisticSpec {
  parameter: string;
  specification: string;
}

export interface UsageStep {
  step: number;
  title: string;
  description: string;
  metric: string;
}

export interface RecommendedSurface {
  id: string;
  title: string;
  subtitle: string;
  detail: string;
  waterSavedNote: string;
  iconName: 'shoe' | 'kitchen' | 'bath' | 'steel' | 'walls' | 'utensils';
}

export const BRAND_CONFIG = {
  name: 'Narayana',
  wordmark: 'narayana',
  slogan: 'El aseo es salud y confort',
  secondarySlogan: 'El equilibrio que cuida de ti',
  documentaryMotto: 'Unir ciencia y conciencia',
  productType: 'Limpiador Multiusos en Crema · Instantáneo · Biodegradable',
  internalCode: 'NRN-001',
  version: '01',
  founder: {
    name: 'Gustavo Bermeo',
    role: 'Gerente & Fundador de Narayana',
    academicPartner: 'Corporación Universitaria Autónoma del Cauca (Uniautónoma del Cauca)',
    award: 'Ganador de $5.000.000 COP en Capital Semilla — EmprendeLab',
    location: 'Popayán, Cauca · Colombia',
  },
  contact: {
    // Editable WhatsApp phone in international format (Colombia +57)
    whatsappNumber: '573100000000',
    whatsappDisplay: '+57 (310) 000-0000',
    defaultWhatsappMessage:
      'Hola equipo Narayana 🌿, vengo de la página web y quiero conocer precios y disponibilidad del limpiador multiusos en crema (350g / 750g).',
    distributorWhatsappMessage:
      'Hola Gustavo y equipo Narayana 🌿, me interesa adquirir la Caja Mayorista (12 unidades) o ser distribuidor autorizado en mi ciudad.',
    email: 'contacto@narayanabioclean.com',
    location: 'Popayán, Cauca — Envíos a toda Colombia',
  },
  socials: {
    tiktok: 'https://www.tiktok.com/@narayana.col',
    instagram: 'https://www.instagram.com/narayana.col',
    youtube: 'https://www.youtube.com/@narayana.col',
    facebook: 'https://www.facebook.com/narayana.col',
  },
  pillars3D: [
    {
      id: 'desengrasa',
      title: 'Desengrasa',
      tag: 'Acción Alcalina Controlada',
      description:
        'Emulsiona grasas adheridas en cocinas, campanas, hornos y motores al instante gracias a sus tensioactivos biodegradables y carbonato de sodio.',
      metric: '0% residuos grasos',
    },
    {
      id: 'desmancha',
      title: 'Desmancha',
      tag: 'Microgránulos Biodegradables',
      description:
        'Recupera el blanco original en suelas y cuero de calzado, juntas, paredes lavables y acero inoxidable sin rayar ni deteriorar las superficies.',
      metric: 'Sin partículas agresivas',
    },
    {
      id: 'desinfecta',
      title: 'Desinfecta',
      tag: 'Oxígeno Activo + Extractos',
      description:
        'El percarbonato de sodio y los extractos naturales eliminan microorganismos y malos olores dejando un aroma fresco y natural.',
      metric: 'pH 10,5 – 11,5',
    },
  ],
  composition: [
    {
      name: 'Carbonato de sodio',
      role: 'Agente limpiador y desengrasante',
      category: 'mineral',
      description: 'Descompone películas de grasa pesada y aceites domésticos o industriales sin vapores tóxicos.',
      coordX: 24,
      coordY: 30,
    },
    {
      name: 'Bicarbonato de sodio',
      role: 'Abrasivo suave / desodorizante',
      category: 'mineral',
      description: 'Microgránulos minerales ultrafinos que desprenden manchas difíciles y neutralizan olores sin rayar.',
      coordX: 50,
      coordY: 20,
    },
    {
      name: 'Silicato de sodio',
      role: 'Potenciador de limpieza',
      category: 'mineral',
      description: 'Estabiliza la alcalinidad de la crema y protege las superficies metálicas y de acero inoxidable contra la corrosión.',
      coordX: 76,
      coordY: 32,
    },
    {
      name: 'Tensioactivos biodegradables',
      role: 'Emulsionante de grasa y suciedad',
      category: 'activo',
      description: 'Encapsulan la suciedad en seco permitiendo retirarla con un simple paño sin requerir baldes de agua.',
      coordX: 80,
      coordY: 62,
    },
    {
      name: 'Percarbonato de sodio',
      role: 'Blanqueador / acción desinfectante',
      category: 'activo',
      description: 'Libera oxígeno activo al contacto para blanquear suelas, juntas y superficies sanitarias sin cloro.',
      coordX: 62,
      coordY: 78,
    },
    {
      name: 'Extractos y fragancia natural',
      role: 'Aporte desinfectante y aroma',
      category: 'botanico',
      description: 'Esencias botánicas seleccionadas que dejan una sensación de pureza, salud y confort en el hogar.',
      coordX: 36,
      coordY: 80,
    },
    {
      name: 'Hidróxido de sodio* & Antiredepositante',
      role: 'Ajuste de pH / mejora la fluidez',
      category: 'estabilizador',
      description: 'Garantiza una crema suave y homogénea que evita que la suciedad vuelva a adherirse mientras limpias.',
      coordX: 20,
      coordY: 56,
    },
  ] satisfies ChemicalComponent[],
  physicoChemicalSpecs: [
    { parameter: 'Apariencia', specification: 'Crema suave y homogénea (sin gránulos agresivos)', highlight: true },
    { parameter: 'Color', specification: 'Blanco puro brillante' },
    { parameter: 'Olor', specification: 'Agradable (fragancia natural botánica)' },
    { parameter: 'pH (solución al 1 %)', specification: '10,5 – 11,5 (Alcalinidad controlada)', highlight: true },
    { parameter: 'Densidad aparente', specification: '0,70 – 0,85 g/mL', highlight: true },
    { parameter: 'Humedad', specification: '≤ 3 % (Fórmula ultra concentrada)' },
    { parameter: 'Solubilidad en agua', specification: 'Parcialmente soluble · Ideal para limpieza en seco' },
    { parameter: 'Inflamabilidad', specification: 'No inflamable (Seguro en cocinas y talleres)' },
    { parameter: 'Biodegradabilidad', specification: 'Alta · 100% Libre de fosfatos', highlight: true },
    { parameter: 'Vida útil', specification: '24 meses' },
    { parameter: 'Presentaciones oficiales', specification: '350 g / 750 g' },
  ] satisfies PhysicoChemicalSpec[],
  logisticSpecs: [
    { parameter: 'Código interno', specification: 'NRN-001' },
    { parameter: 'Tipo de empaque', specification: 'Envase plástico ergonómico con tapa rosca verde' },
    { parameter: 'Material del envase', specification: 'Polipropileno (PP) 100% reciclable y reutilizable' },
    { parameter: 'Bioempaque secundario', specification: 'Aprovechamiento de residuos agrícolas (fibra de piña)' },
    { parameter: 'Peso neto', specification: '350 g / 750 g' },
    { parameter: 'Unidades por caja (Mayorista)', specification: '12 unidades (350 g) / 12 unidades (750 g)' },
    { parameter: 'Temperatura de almacenamiento', specification: '5 – 35 °C en lugar fresco, seco y ventilado' },
    { parameter: 'Registro sanitario', specification: 'En trámite / Según normativa vigente' },
  ] satisfies LogisticSpec[],
  usageSteps: [
    {
      step: 1,
      title: 'Aplica una pequeña dosis',
      description: 'Toma una mínima cantidad de crema Narayana directamente sobre la superficie seca o con un paño de microfibra apenas húmedo.',
      metric: 'Rinde hasta 3x más',
    },
    {
      step: 2,
      title: 'Frota según la superficie',
      description: 'Desliza con esponja suave, cepillo de cerdas o paño sobre la mancha de grasa, barro o sarro para activar los microgránulos biodegradables.',
      metric: 'Acción instantánea',
    },
    {
      step: 3,
      title: 'Retira en seco con un paño',
      description: 'Pasa un paño limpio para remover la suciedad encapsulada sin necesidad de mangueras ni baldes de agua.',
      metric: '95% ahorro hídrico',
    },
    {
      step: 4,
      title: 'Superficie desinfectada y brillante',
      description: 'Disfruta de un acabado impecable, libre de fosfatos y con un aroma natural que convierte el aseo en salud y confort.',
      metric: 'Protección 3D activa',
    },
  ] satisfies UsageStep[],
  recommendedSurfaces: [
    {
      id: 'calzado',
      title: 'Zapatos y calzado deportivo o casual',
      subtitle: 'Limpieza en seco al instante',
      detail: 'Devuelve el blanco puro a suelas de goma, cuero sintético y lona manchados con barro o asfalto sin mojar el interior del zapato.',
      waterSavedNote: '0 litros de agua (limpieza con paño)',
      iconName: 'shoe',
    },
    {
      id: 'cocinas',
      title: 'Cocinas, estufas y hornos',
      subtitle: 'Desengrase profundo sin vapores tóxicos',
      detail: 'Corta la grasa carbonizada en quemadores, vidrios de horno, campanas extractoras y salpicaderos de cerámica.',
      waterSavedNote: 'Sin químicos cáusticos ni cloro',
      iconName: 'kitchen',
    },
    {
      id: 'acero',
      title: 'Mesones, acero inoxidable y metales',
      subtitle: 'Brillo espejo sin rayaduras',
      detail: 'Pule lavaplatos, griferías, aluminio y mesones industriales eliminando manchas de agua dura y oxidación superficial.',
      waterSavedNote: 'Con silicato protector de metales',
      iconName: 'steel',
    },
    {
      id: 'banos',
      title: 'Baños, sanitarios y porcelana',
      subtitle: 'Desinfección con oxígeno activo',
      detail: 'Remueve sarro, residuos de jabón y moho en juntas de ducha, lavamanos y porcelana sanitaria con pH alcalino controlado.',
      waterSavedNote: 'Reemplaza hasta 4 productos distintos',
      iconName: 'bath',
    },
    {
      id: 'paredes',
      title: 'Pisos y paredes lavables',
      subtitle: 'Restauración de muros y guardaescobas',
      detail: 'Borra roces de zapatos, crayones, huellas y manchas de humedad en paredes estucadas o pintadas con pintura lavable y enchapes.',
      waterSavedNote: 'Retiro directo con paño húmedo',
      iconName: 'walls',
    },
    {
      id: 'utensilios',
      title: 'Utensilios, ollas y equipos',
      subtitle: 'Uso doméstico, comercial e industrial',
      detail: 'Recupera la base de ollas, sartenes, herramientas de trabajo y equipos comerciales con total seguridad biodegradable.',
      waterSavedNote: 'Fórmula libre de fosfatos',
      iconName: 'utensils',
    },
  ] satisfies RecommendedSurface[],
  presentations: [
    {
      id: '350g',
      name: 'Narayana Hogar 350 g',
      subtitle: 'El formato ideal para calzado, cocina rápida y cuidado diario del hogar',
      weight: '350 g',
      badge: 'Ideal para probar el ritual',
      priceFormatted: '$18.000 COP',
      priceNote: 'Precio de referencia sugerido · Consulta promociones vigentes',
      unitsIncluded: 1,
      idealFor: [
        'Limpieza en seco de hasta 45 pares de tenis y zapatos',
        'Desengrase diario de estufa, mesón y grifería',
        'Envase compacto en Polipropileno (PP) reutilizable',
      ],
      yieldEstimate: 'Rinde de 45 a 60 aplicaciones en seco',
      image: '/assets/images/pote_cerrado.jpeg',
      whatsappText:
        'Hola equipo Narayana 🌿, quiero pedir la presentación *Narayana Hogar 350 g*. ¿Me confirman precio y envío a mi ciudad?',
    },
    {
      id: '750g',
      name: 'Narayana Rendimiento 750 g',
      subtitle: 'Doble contenido para aseo integral de hogar, paredes, baños y negocios',
      weight: '750 g',
      badge: 'Más elegido · Mejor costo por gramo',
      priceFormatted: '$32.000 COP',
      priceNote: 'Ahorra más del 18% por gramo frente al formato pequeño',
      unitsIncluded: 1,
      popular: true,
      idealFor: [
        'Más del doble de crema multiusos concentrada (750 g)',
        'Aseo profundo de cocinas, baños, pisos, paredes y calzado familiar',
        'Máximo ahorro hídrico y menor huella de empaque',
      ],
      yieldEstimate: 'Rinde más de 120 aplicaciones en seco',
      image: '/assets/images/crema_primer_plano.png',
      whatsappText:
        'Hola equipo Narayana 🌿, quiero pedir la presentación *Narayana Rendimiento 750 g*. ¿Me confirman precio y envío?',
    },
    {
      id: 'mayorista-350g',
      name: 'Caja Distribuidor 12 × 350 g',
      subtitle: 'Emprendedores, tiendas ecológicas, supermercados y lavanderías de calzado',
      weight: '4,2 kg neto (12 unds)',
      badge: 'Aliados B2B · Margen Comercial',
      priceFormatted: 'Cotización Mayorista',
      priceNote: 'Caja oficial NRN-001 de 12 unidades con precio especial de fábrica',
      unitsIncluded: 12,
      idealFor: [
        '12 unidades de 350 g listas para exhibición y venta',
        'Incluye Ficha Técnica Oficial NRN-001 y respaldo de marca',
        'Bioempaque con aprovechamiento de fibra de piña',
      ],
      yieldEstimate: 'Alta rotación en hogares y sneaker care',
      image: '/assets/images/packshot_selva.png',
      whatsappText:
        'Hola Gustavo y equipo Narayana 🌿, me interesa cotizar la *Caja Mayorista de 12 unidades × 350 g (NRN-001)* para distribución.',
    },
    {
      id: 'mayorista-750g',
      name: 'Caja Institucional 12 × 750 g',
      subtitle: 'Distribuidores mayoristas, hoteles, restaurantes e instituciones',
      weight: '9,0 kg neto (12 unds)',
      badge: 'Máximo Margen B2B & HORECA',
      priceFormatted: 'Cotización Mayorista',
      priceNote: 'Caja oficial NRN-001 de 12 unidades de 750 g para alto volumen',
      unitsIncluded: 12,
      idealFor: [
        '12 unidades de 750 g para distribución mayorista o uso institucional',
        'Solución ecológica certificada libre de fosfatos y no inflamable',
        'Acompañamiento directo de gerencia comercial',
      ],
      yieldEstimate: 'Rendimiento industrial y comercial superior',
      image: '/assets/images/manos_ofrenda.png',
      whatsappText:
        'Hola Gustavo y equipo Narayana 🌿, me interesa cotizar la *Caja Institucional de 12 unidades × 750 g (NRN-001)* para compras al por mayor.',
    },
  ] satisfies ProductPresentation[],
  precautions: [
    'Mantener fuera del alcance de los niños y mascotas.',
    'Evitar el contacto con los ojos y la piel. En caso de contacto, enjuagar con abundante agua.',
    'No ingerir. En caso de ingestión, buscar atención médica.',
    'Usar guantes si se tiene piel sensible.',
    'No mezclar con productos ácidos (como cloro o vinagre).',
    'Realizar prueba previa en superficies delicadas.',
  ],
  storage: [
    'Conservar en un lugar fresco, seco y ventilado.',
    'Mantener el envase bien cerrado.',
    'Alejado de humedad y luz solar directa.',
    'Temperatura recomendada: 5 – 35 °C.',
  ],
} as const;

export function buildWhatsAppUrl(customMessage?: string): string {
  const text = encodeURIComponent(customMessage || BRAND_CONFIG.contact.defaultWhatsappMessage);
  return `https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}?text=${text}`;
}
