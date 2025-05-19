import { proyectosMock } from "./proyectos-mock"

// Datos para la página principal
export const homeData = {
  hero: {
    title: "Marketing Offline que Impacta",
    description:
      "Creamos experiencias de marca memorables en el mundo real. Nuestras estrategias de marketing offline aumentan la visibilidad y las ventas de tu marca donde realmente importa.",
    primaryButton: {
      text: "Nuestros Servicios",
      url: "/servicios",
    },
    secondaryButton: {
      text: "Contáctanos",
      url: "/contacto",
    },
  },
  whatWeDo: {
    title: "Nuestras Herramientas de Impacto",
    description:
      "Utilizamos una amplia gama de estrategias de marketing offline para maximizar la visibilidad y el impacto de tu marca.",
    tools: [
      {
        name: "Sampling",
        description: "Distribución de muestras gratuitas para que los clientes prueben el producto antes de comprarlo.",
        icon: "Coffee",
      },
      {
        name: "Materiales POS",
        description: "Elementos visuales y promocionales en el punto de venta para destacar tu marca.",
        icon: "ShoppingCart",
      },
      {
        name: "Packs Promocionales",
        description: "Conjuntos de productos con valor añadido para incentivar la compra y aumentar el ticket medio.",
        icon: "Package",
      },
      {
        name: "Acciones BTL",
        description: "Actividades promocionales directas y personalizadas para conectar con tu público objetivo.",
        icon: "Users",
      },
      {
        name: "Merchandising",
        description: "Técnicas para optimizar la presencia del producto en el punto de venta y aumentar su rotación.",
        icon: "Store",
      },
      {
        name: "Instalaciones",
        description: "Creación de espacios y experiencias de marca inmersivas en entornos comerciales.",
        icon: "Building",
      },
    ],
  },
  whyEffective: {
    title: "¿Por Qué Somos Efectivos?",
    description:
      "Nuestro marketing offline genera resultados tangibles porque conecta con los clientes en el momento y lugar adecuados.",
    reasons: [
      {
        name: "Precisión en el Público Objetivo",
        description: "Trabajamos exactamente donde tu cliente ya está listo para comprar",
        icon: "Target",
      },
      {
        name: "Memorabilidad de Marca",
        description: "Las personas recuerdan mejor lo que experimentan en persona",
        icon: "Brain",
      },
      {
        name: "Presencia en el Punto de Venta",
        description: "Tu marca destaca donde se toman las decisiones de compra",
        icon: "MapPin",
      },
      {
        name: "Incentivo a la Compra",
        description: "Promociones, muestras y activaciones crean impulso de compra inmediato",
        icon: "ShoppingBag",
      },
    ],
  },
  numbersSection: {
    title: "Resultados en Cifras",
    description: "Nuestro impacto en el mercado se refleja en números que demuestran nuestra experiencia y alcance.",
    stats: [
      {
        id: 1,
        name: "Materiales POS fabricados en 2025",
        value: 12000,
        icon: "Package",
      },
      {
        id: 2,
        name: "Promotores en nuestra base",
        value: 400,
        icon: "Users",
      },
      {
        id: 3,
        name: "Minoristas nacionales",
        value: 70,
        icon: "Store",
      },
      {
        id: 4,
        name: "Ciudades con cobertura",
        value: 200,
        icon: "Building",
      },
    ],
  },
  contactCta: {
    title: "¿Listo para impulsar tu marca?",
    description:
      "Contáctanos hoy mismo y descubre cómo nuestras estrategias de marketing offline pueden ayudarte a alcanzar tus objetivos.",
    buttonText: "Solicitar Presupuesto",
    buttonUrl: "/contacto",
  },
  featuredWorks: {
    title: "Nuestros Trabajos",
    description:
      "Descubre cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos de marketing offline con estrategias innovadoras y efectivas.",
    buttonText: "Ver Todos los Trabajos",
    buttonUrl: "/trabajos",
  },
  featuredServices: {
    title: "Nuestros Servicios",
    description:
      "Ofrecemos soluciones completas de marketing offline para aumentar la visibilidad y las ventas de tu marca.",
    buttonText: "Ver Todos los Servicios",
    buttonUrl: "/servicios",
  },
}

// Exportar los proyectos desde el archivo mock
export const proyectos = proyectosMock

// Mock data for services
export const services = [
  {
    id: 1,
    title: "Sampling y Degustaciones",
    slug: "sampling-degustaciones",
    excerpt:
      "Distribución estratégica de muestras gratuitas para que los consumidores prueben tu producto antes de comprarlo.",
    description: [
      {
        type: "paragraph",
        content:
          "El sampling es una de las estrategias más efectivas para introducir nuevos productos al mercado o revitalizar productos existentes. Consiste en la distribución estratégica de muestras gratuitas para que los consumidores puedan probar el producto antes de comprarlo.",
      },
      {
        type: "heading",
        level: 2,
        content: "Beneficios del Sampling",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Experiencia directa con el producto: Los consumidores pueden probar el producto sin compromiso de compra.",
          "Generación de confianza: Demuestra la confianza que tienes en la calidad de tu producto.",
          "Feedback inmediato: Obtienes opiniones reales de los consumidores.",
          "Aumento de ventas: Estudios demuestran que hasta el 35% de las personas que prueban una muestra acaban comprando el producto.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Nuestro Enfoque",
      },
      {
        type: "paragraph",
        content: "En LuminaryAdsPubl diseñamos campañas de sampling personalizadas según tus objetivos:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Análisis del público objetivo: Identificamos dónde y cuándo encontrar a tu cliente ideal.",
          "Selección de ubicaciones estratégicas: Centros comerciales, eventos, ferias, zonas de alto tránsito.",
          "Personal capacitado: Promotores profesionales que conocen tu producto y saben comunicar sus beneficios.",
          "Medición de resultados: Informes detallados sobre la recepción del producto y conversión a ventas.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Tipos de Sampling que Ofrecemos",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Sampling en punto de venta: Directamente donde se toman las decisiones de compra.",
          "Sampling en eventos: Ferias, conciertos, eventos deportivos.",
          "Sampling a domicilio: Entrega de muestras en hogares seleccionados.",
          "Sampling digital + físico: Combinación de cupones digitales canjeables por muestras físicas.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Casos de Éxito",
      },
      {
        type: "paragraph",
        content:
          "Nuestras campañas de sampling han logrado incrementos de ventas de hasta un 40% en productos de alimentación y un 25% en productos de cuidado personal.",
      },
    ],
    image: "/services/sampling.jpg",
    features: [
      "Distribución estratégica de muestras",
      "Personal capacitado y formado",
      "Informes detallados de resultados",
      "Integración con otras acciones de marketing",
    ],
    icon: "Coffee",
  },
  {
    id: 2,
    title: "Materiales POS",
    slug: "materiales-pos",
    excerpt:
      "Diseño y producción de materiales promocionales para el punto de venta que destacan tu marca y aumentan las ventas.",
    description: [
      {
        type: "paragraph",
        content:
          "Los materiales POS (Point of Sale) son elementos visuales y promocionales estratégicamente ubicados en el punto de venta para destacar tu marca, comunicar ofertas y estimular la compra por impulso.",
      },
      {
        type: "heading",
        level: 2,
        content: "Importancia de los Materiales POS",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Visibilidad inmediata: Destacan tu producto entre la competencia.",
          "Comunicación directa: Transmiten mensajes clave en el momento de decisión de compra.",
          "Aumento de ventas: Pueden incrementar las ventas hasta un 25% según estudios del sector.",
          "Refuerzo de marca: Consolidan la imagen y posicionamiento de tu marca.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Nuestros Servicios de Materiales POS",
      },
      {
        type: "paragraph",
        content: "En LuminaryAdsPubl ofrecemos un servicio integral que incluye:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Diseño creativo: Creación de materiales atractivos y alineados con tu marca.",
          "Producción de alta calidad: Fabricación con materiales duraderos y acabados profesionales.",
          "Instalación estratégica: Colocación en los puntos de mayor impacto visual.",
          "Mantenimiento y actualización: Seguimiento para garantizar el buen estado de los materiales.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Tipos de Materiales POS que Desarrollamos",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Displays y expositores: Presentación atractiva del producto.",
          "Carteles y pósters: Comunicación visual de ofertas y novedades.",
          "Stoppers y wobblers: Elementos móviles que captan la atención.",
          "Floor graphics: Vinilos de suelo que guían al consumidor.",
          "Banderolas y colgantes: Visibilidad desde cualquier punto de la tienda.",
          "Materiales digitales: Pantallas interactivas y displays digitales.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Ventajas de Nuestros Materiales POS",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Personalización total: Adaptados a las necesidades específicas de cada cliente.",
          "Materiales sostenibles: Opciones eco-friendly para marcas comprometidas.",
          "Integración omnicanal: Conexión con estrategias digitales mediante códigos QR o realidad aumentada.",
          "Análisis de efectividad: Medición del impacto en ventas y visibilidad.",
        ],
      },
    ],
    image: "/services/pos-materials.jpg",
    features: [
      "Diseño creativo personalizado",
      "Producción de alta calidad",
      "Instalación estratégica",
      "Opciones sostenibles disponibles",
    ],
    icon: "ShoppingCart",
  },
  {
    id: 3,
    title: "Packs Promocionales",
    slug: "packs-promocionales",
    excerpt:
      "Creación de paquetes especiales que combinan productos para aumentar el valor percibido y el ticket medio de compra.",
    description: [
      {
        type: "paragraph",
        content:
          "Los packs promocionales son conjuntos de productos estratégicamente agrupados que ofrecen un valor añadido al consumidor, incentivando la compra y aumentando el ticket medio.",
      },
      {
        type: "heading",
        level: 2,
        content: "Ventajas de los Packs Promocionales",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Incremento del ticket medio: Los clientes gastan más al percibir mayor valor.",
          "Rotación de stock: Permite combinar productos de alta rotación con otros menos demandados.",
          "Diferenciación: Crea ofertas únicas frente a la competencia.",
          "Fidelización: Genera percepción de exclusividad y ahorro.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Nuestro Proceso de Creación de Packs",
      },
      {
        type: "paragraph",
        content: "En LuminaryAdsPubl desarrollamos packs promocionales efectivos siguiendo estas fases:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Análisis de mercado: Estudiamos la competencia y las tendencias del sector.",
          "Selección estratégica: Identificamos las combinaciones de productos más atractivas.",
          "Diseño y packaging: Creamos un empaquetado atractivo que comunica valor.",
          "Estrategia de precio: Definimos un precio que transmita ahorro pero mantenga rentabilidad.",
          "Implementación y seguimiento: Colocación estratégica y análisis de resultados.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Tipos de Packs Promocionales",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Packs de temporada: Especiales para fechas clave (Navidad, verano, vuelta al cole).",
          "Packs de prueba: Combinación de productos estrella con novedades.",
          "Packs regalo: Presentaciones especiales para ocasiones de regalo.",
          "Packs ahorro: Enfocados en comunicar el ahorro económico.",
          "Packs experiencia: Combinan productos para crear una experiencia completa.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Resultados que Conseguimos",
      },
      {
        type: "paragraph",
        content:
          "Nuestros packs promocionales han logrado incrementos de ventas de hasta un 30% y aumentos del ticket medio de compra de un 25% en diversos sectores como alimentación, cosmética y hogar.",
      },
      {
        type: "heading",
        level: 2,
        content: "Sectores donde Destacamos",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Alimentación y bebidas: Packs degustación, cestas regalo.",
          "Cosmética y belleza: Sets de tratamiento completo.",
          "Hogar y decoración: Conjuntos temáticos.",
          "Electrónica: Packs de accesorios complementarios.",
        ],
      },
    ],
    image: "/services/promotional-packs.jpg",
    features: [
      "Diseño estratégico de packs",
      "Packaging atractivo y funcional",
      "Estrategia de precios optimizada",
      "Seguimiento de resultados",
    ],
    icon: "Package",
  },
  {
    id: 4,
    title: "Folletos Publicitarios",
    slug: "folletos-publicitarios",
    excerpt:
      "Diseño y producción de folletos y catálogos impresos que comunican eficazmente los valores y ofertas de tu marca.",
    description: [
      {
        type: "paragraph",
        content:
          "A pesar de la digitalización, los folletos publicitarios siguen siendo una herramienta fundamental para comunicar ofertas, novedades y valores de marca de forma tangible y duradera. Un folleto bien diseñado puede transmitir profesionalidad y generar confianza en tu marca.",
      },
      {
        type: "heading",
        level: 2,
        content: "Ventajas de los Folletos Publicitarios",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Tangibilidad: Crean una conexión física con el cliente potencial.",
          "Durabilidad: Permanecen en el entorno del cliente más tiempo que los anuncios digitales.",
          "Versatilidad: Se adaptan a diferentes objetivos y formatos.",
          "Segmentación geográfica: Permiten acciones muy localizadas.",
          "Complemento digital: Pueden incluir elementos que conecten con experiencias online.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Nuestros Servicios de Folletos Publicitarios",
      },
      {
        type: "paragraph",
        content: "Ofrecemos un servicio integral que incluye:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Conceptualización: Definición de objetivos, mensajes clave y estructura.",
          "Diseño creativo: Creación de layouts atractivos y alineados con tu identidad de marca.",
          "Redacción persuasiva: Textos que convierten la información en argumentos de venta.",
          "Producción de alta calidad: Selección de materiales, acabados y técnicas de impresión.",
          "Distribución estratégica: Planificación y ejecución de la entrega en zonas de interés.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Tipos de Folletos que Desarrollamos",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Flyers promocionales: Comunicación concisa de ofertas y promociones.",
          "Catálogos de producto: Presentación detallada de líneas de productos.",
          "Dípticos y trípticos: Información corporativa o de servicios.",
          "Revistas de marca: Contenido de valor que refuerza el posicionamiento.",
          "Menús y cartas: Para el sector de hostelería y restauración.",
          "Folletos interactivos: Con códigos QR o realidad aumentada.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Proceso de Trabajo",
      },
      {
        type: "paragraph",
        content: "Nuestro proceso garantiza resultados óptimos en cada proyecto:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Briefing detallado: Entendemos tus objetivos, público y necesidades específicas.",
          "Propuesta creativa: Presentamos conceptos y bocetos para tu aprobación.",
          "Desarrollo y refinamiento: Trabajamos en los detalles hasta lograr la excelencia.",
          "Producción y control de calidad: Supervisamos todo el proceso de impresión.",
          "Distribución y seguimiento: Implementamos la estrategia de reparto y medimos resultados.",
        ],
      },
    ],
    image: "/services/brochures.jpg",
    features: [
      "Diseño creativo personalizado",
      "Impresión de alta calidad",
      "Redacción persuasiva",
      "Distribución estratégica",
    ],
    icon: "FileText",
  },
  {
    id: 5,
    title: "Publicidad en Vallas",
    slug: "publicidad-vallas",
    excerpt:
      "Diseño e implementación de campañas publicitarias en vallas y grandes formatos para maximizar la visibilidad de tu marca.",
    description: [
      {
        type: "paragraph",
        content:
          "Las vallas publicitarias siguen siendo uno de los medios más efectivos para generar notoriedad de marca y alcanzar a grandes audiencias en entornos urbanos. Su tamaño y ubicación estratégica garantizan un impacto visual difícil de igualar por otros medios.",
      },
      {
        type: "heading",
        level: 2,
        content: "Ventajas de la Publicidad en Vallas",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Alto impacto visual: Formato grande que capta la atención inmediatamente.",
          "Cobertura 24/7: Presencia constante, día y noche.",
          "Segmentación geográfica: Ubicación estratégica según el público objetivo.",
          "Construcción de marca: Refuerzo de la imagen y reconocimiento.",
          "Complemento perfecto: Se integra con otras acciones de marketing.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Nuestros Servicios de Publicidad en Vallas",
      },
      {
        type: "paragraph",
        content: "Ofrecemos un servicio completo que incluye:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Planificación estratégica: Selección de ubicaciones según objetivos y público.",
          "Diseño de alto impacto: Creación de visuales efectivos para grandes formatos.",
          "Gestión de producción: Impresión con tecnologías avanzadas y materiales de calidad.",
          "Instalación profesional: Montaje seguro y de alta calidad visual.",
          "Mantenimiento y seguimiento: Control periódico del estado de las vallas.",
          "Medición de resultados: Análisis de impacto y visibilidad.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Tipos de Vallas Publicitarias",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Vallas urbanas: En zonas de alto tránsito peatonal y vehicular.",
          "Monopostes: Estructuras elevadas visibles desde gran distancia.",
          "Vallas digitales: Con contenido dinámico y programable.",
          "Lonas en edificios: Grandes formatos para impacto máximo.",
          "Vallas en carreteras: Para alcanzar audiencias en desplazamiento.",
          "Vallas en transportes: En estaciones, aeropuertos y centros intermodales.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Claves para una Valla Efectiva",
      },
      {
        type: "paragraph",
        content: "Nuestro enfoque se basa en estos principios fundamentales:",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Simplicidad: Mensaje claro y directo, legible en segundos.",
          "Contraste: Combinaciones de colores que destacan a distancia.",
          "Jerarquía visual: Organización de elementos para guiar la mirada.",
          "Tipografía: Fuentes legibles incluso a gran distancia.",
          "Creatividad: Conceptos memorables que generan conversación.",
        ],
      },
    ],
    image: "/services/billboards.jpg",
    features: [
      "Ubicaciones estratégicas",
      "Diseño de alto impacto",
      "Producción de calidad",
      "Seguimiento y mantenimiento",
    ],
    icon: "PanelTop",
  },
  {
    id: 6,
    title: "Publicidad en City Lights",
    slug: "publicidad-city-lights",
    excerpt:
      "Diseño y gestión de campañas en soportes iluminados urbanos que garantizan visibilidad 24 horas en zonas de alto tránsito.",
    description: [
      {
        type: "paragraph",
        content:
          "Los city lights o mupis son soportes publicitarios iluminados ubicados en zonas urbanas de alto tránsito peatonal. Su iluminación garantiza visibilidad 24 horas y su ubicación estratégica permite impactar a un público urbano en movimiento.",
      },
      {
        type: "heading",
        level: 2,
        content: "Ventajas de los City Lights",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Visibilidad 24/7: La iluminación garantiza impacto día y noche.",
          "Ubicación premium: En zonas de alto tránsito peatonal y paradas de transporte.",
          "Calidad de impresión: Permiten visuales de alta definición.",
          "Segmentación urbana: Posibilidad de seleccionar barrios y zonas específicas.",
          "Formatos digitales: Opción de contenido dinámico en ubicaciones seleccionadas.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Nuestros Servicios de City Lights",
      },
      {
        type: "paragraph",
        content: "Ofrecemos un servicio integral que incluye:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Planificación estratégica: Selección de ubicaciones según público objetivo.",
          "Diseño adaptado: Creación de visuales optimizados para este formato.",
          "Producción de alta calidad: Impresión con tecnologías avanzadas.",
          "Gestión de circuitos: Coordinación de múltiples ubicaciones.",
          "Mantenimiento: Control periódico del estado de los soportes.",
          "Informes de campaña: Análisis de cobertura e impacto estimado.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Aplicaciones Estratégicas",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Lanzamientos de producto: Generación de notoriedad en zonas comerciales.",
          "Campañas de imagen: Refuerzo de posicionamiento de marca.",
          "Comunicación de proximidad: Promoción de establecimientos cercanos.",
          "Campañas secuenciales: Narrativas visuales en diferentes ubicaciones.",
          "Apoyo a eventos: Promoción en zonas cercanas a la celebración.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Diseño Efectivo para City Lights",
      },
      {
        type: "paragraph",
        content: "Nuestro enfoque de diseño se basa en estos principios:",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Impacto visual: Imágenes potentes que captan la atención inmediata.",
          "Legibilidad: Textos claros y concisos, visibles a distancia.",
          "Contraste: Combinaciones de colores que funcionan tanto de día como de noche.",
          "Jerarquía clara: Organización visual que guía la lectura rápida.",
          "Call to action: Llamadas a la acción claras y directas.",
        ],
      },
    ],
    image: "/services/city-lights.jpg",
    features: ["Ubicaciones premium", "Visibilidad 24 horas", "Diseño de alto impacto", "Circuitos estratégicos"],
    icon: "Lightbulb",
  },
  {
    id: 7,
    title: "Branding Corporativo",
    slug: "branding-corporativo",
    excerpt:
      "Desarrollo de identidad visual y elementos de marca para empresas que buscan destacar y comunicar sus valores de forma coherente.",
    description: [
      {
        type: "paragraph",
        content:
          "El branding corporativo es mucho más que un logotipo; es la expresión visual y sensorial de los valores, la personalidad y la promesa de tu empresa. Un branding efectivo construye reconocimiento, genera confianza y crea conexiones emocionales con tus clientes.",
      },
      {
        type: "heading",
        level: 2,
        content: "Importancia del Branding Corporativo",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Diferenciación: Destaca tu empresa en un mercado saturado.",
          "Coherencia: Garantiza una comunicación uniforme en todos los puntos de contacto.",
          "Reconocimiento: Facilita que los clientes identifiquen y recuerden tu marca.",
          "Confianza: Una imagen profesional genera credibilidad.",
          "Valor añadido: Un buen branding permite posicionamientos premium.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Nuestros Servicios de Branding",
      },
      {
        type: "paragraph",
        content: "Ofrecemos un servicio integral que incluye:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Investigación y estrategia: Análisis de mercado, competencia y público objetivo.",
          "Desarrollo de identidad visual: Logotipo, paleta de colores, tipografías y elementos gráficos.",
          "Sistema de aplicaciones: Papelería, señalética, uniformes, vehículos corporativos.",
          "Guía de marca: Manual de uso que garantiza la correcta aplicación.",
          "Implementación: Producción de los elementos físicos de la marca.",
          "Seguimiento: Supervisión de la correcta aplicación en todos los soportes.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Elementos del Branding Corporativo",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Identidad verbal: Naming, tagline, tono de comunicación.",
          "Identidad visual: Logotipo, símbolos, colores, tipografías, patrones.",
          "Aplicaciones básicas: Tarjetas, papelería, firmas digitales.",
          "Aplicaciones extendidas: Packaging, merchandising, vehículos, señalética.",
          "Entornos digitales: Web, redes sociales, aplicaciones.",
          "Entornos físicos: Oficinas, tiendas, stands.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Nuestro Proceso de Branding",
      },
      {
        type: "paragraph",
        content: "Seguimos una metodología probada para crear marcas memorables:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Descubrimiento: Inmersión profunda en tu negocio, valores y objetivos.",
          "Estrategia: Definición del posicionamiento y la personalidad de marca.",
          "Exploración creativa: Desarrollo de conceptos visuales alineados con la estrategia.",
          "Refinamiento: Perfeccionamiento de la dirección seleccionada.",
          "Aplicación: Desarrollo del sistema completo de identidad.",
          "Implementación: Producción y lanzamiento de los elementos de marca.",
        ],
      },
    ],
    image: "/services/corporate-branding.jpg",
    features: ["Estrategia de marca", "Identidad visual completa", "Manual de marca", "Aplicaciones corporativas"],
    icon: "Briefcase",
  },
  {
    id: 8,
    title: "Puntos de Marca para Eventos",
    slug: "puntos-marca-eventos",
    excerpt:
      "Diseño y producción de espacios de marca personalizados para eventos, ferias y activaciones que generan experiencias memorables.",
    description: [
      {
        type: "paragraph",
        content:
          "Los puntos de marca para eventos son espacios físicos diseñados para crear experiencias inmersivas con tu marca durante ferias, congresos, festivales o activaciones especiales. Estos espacios combinan diseño, tecnología y estrategia para generar interacciones memorables con tu público objetivo.",
      },
      {
        type: "heading",
        level: 2,
        content: "Ventajas de los Puntos de Marca",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Experiencia inmersiva: Permiten a los visitantes vivir la marca con todos los sentidos.",
          "Interacción directa: Facilitan el contacto personal con clientes potenciales.",
          "Generación de contenido: Crean oportunidades para fotos y vídeos compartibles.",
          "Recopilación de datos: Permiten captar leads cualificados.",
          "Diferenciación: Destacan tu marca frente a competidores en el mismo evento.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Nuestros Servicios de Puntos de Marca",
      },
      {
        type: "paragraph",
        content: "Ofrecemos un servicio integral que incluye:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Conceptualización: Desarrollo de la idea creativa alineada con tus objetivos.",
          "Diseño espacial: Creación de layouts y recorridos experienciales.",
          "Producción: Fabricación de todos los elementos físicos necesarios.",
          "Tecnología: Integración de elementos interactivos y digitales.",
          "Logística: Transporte, montaje, desmontaje y almacenamiento.",
          "Staffing: Personal especializado para la activación.",
          "Medición: Análisis de resultados y retorno de la inversión.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Tipos de Puntos de Marca",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Stands para ferias: Espacios comerciales en eventos profesionales.",
          "Pop-up stores: Tiendas efímeras en ubicaciones estratégicas.",
          "Activaciones en festivales: Espacios experienciales en eventos de ocio.",
          "Roadshows: Puntos de marca móviles que recorren diferentes ubicaciones.",
          "Corners en retail: Espacios de marca dentro de grandes superficies.",
          "Instalaciones experienciales: Creaciones artísticas vinculadas a la marca.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Elementos Clave para el Éxito",
      },
      {
        type: "paragraph",
        content: "Nuestro enfoque se basa en estos principios fundamentales:",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Alineación estratégica: Cada elemento responde a objetivos concretos.",
          "Diseño impactante: Estética memorable que refleja la personalidad de marca.",
          "Interactividad: Elementos que invitan a la participación activa.",
          "Narrativa: Creación de un storytelling que guía la experiencia.",
          "Formación del personal: Staff que encarna los valores de la marca.",
          "Integración digital: Conexión con el mundo online para amplificar el alcance.",
        ],
      },
    ],
    image: "/services/brand-event-points.jpg",
    features: ["Diseño experiencial", "Producción integral", "Tecnología interactiva", "Logística completa"],
    icon: "Tent",
  },
]

// Mock data for blog articles
const articles = [
  {
    id: 1,
    title: "Las 5 Tendencias de Marketing Offline que Dominarán 2025",
    slug: "tendencias-marketing-offline-2025",
    date: "2025-01-15",
    author: "María Rodríguez",
    category: "Tendencias",
    image: "/marketing-trends.png",
    excerpt:
      "Descubre las principales tendencias que revolucionarán el marketing offline este año y cómo implementarlas en tu estrategia.",
    content: [
      {
        type: "heading",
        level: 1,
        content: "Las 5 Tendencias de Marketing Offline que Dominarán 2025",
      },
      {
        type: "paragraph",
        content:
          "El marketing offline sigue siendo una pieza fundamental en la estrategia de comunicación de las marcas, especialmente en un contexto donde los consumidores buscan experiencias auténticas y tangibles. En 2025, veremos una evolución significativa en las tácticas tradicionales, incorporando tecnología y sostenibilidad.",
      },
      {
        type: "heading",
        level: 2,
        content: "1. Experiencias Inmersivas Híbridas",
      },
      {
        type: "paragraph",
        content:
          "La línea entre lo digital y lo físico se difumina cada vez más. Las marcas están creando experiencias offline que incorporan elementos digitales para enriquecer la interacción con el consumidor. Desde probadores virtuales en tiendas físicas hasta instalaciones con realidad aumentada, la hibridación es clave.",
      },
      {
        type: "paragraph",
        content:
          "Cómo implementarlo: Considera incorporar códigos QR en tus materiales POS que desbloqueen experiencias digitales exclusivas, o crear espacios físicos donde la tecnología complemente la experiencia sensorial.",
      },
      {
        type: "heading",
        level: 2,
        content: "2. Sostenibilidad como Protagonista",
      },
      {
        type: "paragraph",
        content:
          "Los consumidores exigen cada vez más responsabilidad ambiental. En 2025, los materiales promocionales sostenibles no son una opción, sino una necesidad. Desde displays fabricados con materiales reciclados hasta sampling con envases compostables.",
      },
      {
        type: "paragraph",
        content:
          "Cómo implementarlo: Audita tus materiales actuales y busca alternativas eco-friendly. Comunica claramente tus esfuerzos de sostenibilidad como parte de tu propuesta de valor.",
      },
      {
        type: "heading",
        level: 2,
        content: "3. Micro-Eventos Personalizados",
      },
      {
        type: "paragraph",
        content:
          "En lugar de grandes eventos masivos, las marcas están optando por experiencias más íntimas y personalizadas para grupos reducidos. Estos micro-eventos generan conexiones más profundas y permiten una interacción de mayor calidad.",
      },
      {
        type: "paragraph",
        content:
          "Cómo implementarlo: Identifica nichos específicos dentro de tu público objetivo y diseña experiencias exclusivas adaptadas a sus intereses particulares.",
      },
      {
        type: "heading",
        level: 2,
        content: "4. Integración Total con Estrategias Digitales",
      },
      {
        type: "paragraph",
        content:
          "El marketing offline ya no puede existir en una burbuja. Las campañas más exitosas de 2025 serán aquellas que integren perfectamente acciones físicas con seguimiento digital, creando un ecosistema coherente.",
      },
      {
        type: "paragraph",
        content:
          "Cómo implementarlo: Asegúrate de que cada acción offline tenga un componente digital que permita medir resultados y extender la experiencia. Utiliza herramientas de atribución avanzadas para conectar el impacto offline con resultados online.",
      },
      {
        type: "heading",
        level: 2,
        content: "5. Personalización a Escala",
      },
      {
        type: "paragraph",
        content:
          "La personalización ya no es exclusiva del entorno digital. Las nuevas tecnologías de producción permiten personalizar materiales físicos a gran escala sin disparar los costes.",
      },
      {
        type: "paragraph",
        content:
          "Cómo implementarlo: Explora opciones de impresión bajo demanda y tecnologías de personalización para crear materiales POS o packs promocionales adaptados a diferentes segmentos o incluso clientes individuales.",
      },
      {
        type: "heading",
        level: 2,
        content: "Conclusión",
      },
      {
        type: "paragraph",
        content:
          "El marketing offline en 2025 será más tecnológico, sostenible, personalizado e integrado que nunca. Las marcas que sepan combinar la tangibilidad y experiencia sensorial del mundo físico con las ventajas de medición y personalización del entorno digital serán las que destaquen en un mercado cada vez más competitivo.",
      },
    ],
  },
  {
    id: 2,
    title: "Cómo el Merchandising Puede Aumentar tus Ventas un 30%",
    slug: "merchandising-aumentar-ventas",
    date: "2025-02-20",
    author: "Carlos Martínez",
    category: "Merchandising",
    image: "/retail-display.png",
    excerpt:
      "Estrategias probadas de merchandising que pueden transformar la experiencia de compra y disparar tus ventas en tienda física.",
    content: [
      {
        type: "heading",
        level: 1,
        content: "Cómo el Merchandising Puede Aumentar tus Ventas un 30%",
      },
      {
        type: "paragraph",
        content:
          "El merchandising es mucho más que simplemente colocar productos en estanterías. Es una ciencia que combina psicología del consumidor, diseño visual y estrategia comercial para crear experiencias de compra que maximicen las ventas. Nuestros estudios muestran que un merchandising bien ejecutado puede aumentar las ventas hasta en un 30%.",
      },
      {
        type: "heading",
        level: 2,
        content: "El Poder de la Primera Impresión",
      },
      {
        type: "paragraph",
        content:
          "Los primeros 7 segundos que un cliente pasa en tu tienda determinan en gran medida su comportamiento de compra. Un escaparate efectivo y una zona de entrada bien diseñada pueden aumentar el tráfico en tienda hasta un 20%.",
      },
      {
        type: "paragraph",
        content:
          'Estrategia clave: Renueva tu escaparate cada 2-3 semanas y asegúrate de que la zona de entrada (también llamada "zona de descompresión") esté despejada y oriente claramente al cliente hacia el interior.',
      },
      {
        type: "heading",
        level: 2,
        content: "Diseño de Recorridos Estratégicos",
      },
      {
        type: "paragraph",
        content:
          "El flujo de circulación en tienda puede dirigir a los clientes hacia productos de alto margen o crear oportunidades de compra por impulso. Los estudios demuestran que los clientes tienden a moverse en sentido contrario a las agujas del reloj y prestan más atención a los productos situados a la altura de los ojos.",
      },
      {
        type: "paragraph",
        content:
          "Estrategia clave: Coloca tus productos más rentables a la altura de los ojos (170-180 cm) y utiliza señalización para crear un recorrido lógico que exponga al cliente al máximo número de productos.",
      },
      {
        type: "heading",
        level: 2,
        content: "Gestión Eficaz del Lineal",
      },
      {
        type: "paragraph",
        content:
          "La forma en que organizas los productos en las estanterías puede tener un impacto dramático en las ventas. Técnicas como el facing (número de productos visibles de frente) o el surtido vertical vs horizontal pueden aumentar la visibilidad y las ventas de categorías completas.",
      },
      {
        type: "paragraph",
        content:
          "Estrategia clave: Implementa la regla del facing mínimo (al menos 3 unidades de cada producto visibles) y agrupa los productos por categorías lógicas para el consumidor, no por marcas o proveedores.",
      },
      {
        type: "heading",
        level: 2,
        content: "Zonas Calientes y Frías",
      },
      {
        type: "paragraph",
        content:
          'No todos los espacios de tu tienda tienen el mismo valor. Las "zonas calientes" (áreas de alto tráfico) pueden generar hasta un 80% más de ventas que las "zonas frías". Identificar y gestionar estas áreas es fundamental.',
      },
      {
        type: "paragraph",
        content:
          "Estrategia clave: Utiliza las zonas calientes para productos de temporada o novedades, y revitaliza las zonas frías con iluminación especial, promociones o elementos interactivos.",
      },
      {
        type: "heading",
        level: 2,
        content: "Señalización Efectiva",
      },
      {
        type: "paragraph",
        content:
          'Los estudios muestran que la señalización adecuada puede aumentar las ventas de un producto específico hasta en un 25%. Sin embargo, el exceso de señalización puede crear "ceguera promocional".',
      },
      {
        type: "paragraph",
        content:
          "Estrategia clave: Limita la señalización a información realmente relevante, utiliza una jerarquía visual clara y asegúrate de que sea legible desde la distancia a la que será vista.",
      },
      {
        type: "heading",
        level: 2,
        content: "Experiencia Sensorial Completa",
      },
      {
        type: "paragraph",
        content:
          "El merchandising moderno va más allá de lo visual. La música, los aromas e incluso las texturas pueden influir significativamente en el comportamiento de compra.",
      },
      {
        type: "paragraph",
        content:
          "Estrategia clave: Crea una experiencia sensorial coherente con tu marca. Por ejemplo, un tempo musical más lento puede aumentar el tiempo de permanencia en tienda y, por tanto, las ventas.",
      },
      {
        type: "heading",
        level: 2,
        content: "Medición y Optimización Continua",
      },
      {
        type: "paragraph",
        content:
          "El merchandising efectivo requiere un enfoque de prueba y aprendizaje constante. Las tecnologías actuales permiten medir con precisión el impacto de cada cambio.",
      },
      {
        type: "paragraph",
        content:
          "Estrategia clave: Implementa sistemas de conteo de personas, mapas de calor y análisis de conversión por zonas para optimizar continuamente tu estrategia de merchandising.",
      },
      {
        type: "heading",
        level: 2,
        content: "Conclusión",
      },
      {
        type: "paragraph",
        content:
          "Implementar estas estrategias de merchandising de forma sistemática y coherente puede transformar radicalmente los resultados de tu negocio físico. En un entorno donde el comercio electrónico gana terreno, ofrecer una experiencia de compra física superior es más importante que nunca.",
      },
    ],
  },
  // Continuar con los demás artículos...
]

// Añadir estos 3 artículos adicionales a la lista de artículos existente
const articlesAdicionales = [
  {
    id: 3,
    title: "El Impacto del Marketing Sensorial en el Punto de Venta",
    slug: "impacto-marketing-sensorial-punto-venta",
    date: "2025-03-10",
    author: "Laura Sánchez",
    category: "Retail",
    image: "/sensory-retail-experience.png",
    excerpt:
      "Descubre cómo estimular los cinco sentidos de tus clientes puede aumentar el tiempo de permanencia en tienda y las ventas.",
    content: [
      {
        type: "heading",
        level: 1,
        content: "El Impacto del Marketing Sensorial en el Punto de Venta",
      },
      {
        type: "paragraph",
        content:
          "El marketing sensorial es una estrategia que busca estimular los cinco sentidos del consumidor para crear experiencias memorables que influyan positivamente en su comportamiento de compra. En un entorno comercial cada vez más competitivo, la diferenciación a través de experiencias sensoriales se ha convertido en una ventaja competitiva clave.",
      },
      {
        type: "heading",
        level: 2,
        content: "La Ciencia Detrás del Marketing Sensorial",
      },
      {
        type: "paragraph",
        content:
          "Estudios neurocientíficos han demostrado que el 95% de las decisiones de compra se toman de forma inconsciente, y los estímulos sensoriales tienen un impacto directo en estas decisiones. Cuando una marca logra conectar con múltiples sentidos, la efectividad del mensaje puede aumentar hasta un 70%.",
      },
      {
        type: "heading",
        level: 2,
        content: "Estrategias para Cada Sentido",
      },
      {
        type: "paragraph",
        content:
          "Cada sentido ofrece oportunidades únicas para conectar con el consumidor en el punto de venta. Veamos cómo aprovechar cada uno de ellos:",
      },
      {
        type: "heading",
        level: 3,
        content: "1. Vista: El Poder de lo Visual",
      },
      {
        type: "paragraph",
        content:
          "La vista es el sentido dominante y procesa información a una velocidad asombrosa. Los elementos visuales como el color, la iluminación y el diseño espacial son fundamentales:",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Utiliza colores estratégicamente según la psicología del color",
          "Implementa iluminación que destaque productos clave",
          "Crea displays visuales que cuenten una historia",
          "Mantén una coherencia visual con la identidad de marca",
        ],
      },
      {
        type: "heading",
        level: 3,
        content: "2. Oído: La Banda Sonora de la Compra",
      },
      {
        type: "paragraph",
        content:
          "La música y los sonidos ambientales influyen directamente en el ritmo de compra y el tiempo de permanencia:",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Música lenta para fomentar la permanencia y exploración",
          "Música rápida para espacios de alta rotación",
          "Sonidos ambientales que refuercen la temática del espacio",
          "Mensajes de audio estratégicos para comunicar ofertas",
        ],
      },
      {
        type: "heading",
        level: 3,
        content: "3. Olfato: El Sentido más Evocador",
      },
      {
        type: "paragraph",
        content:
          "El olfato tiene la conexión más directa con la memoria emocional, lo que lo convierte en una herramienta poderosa:",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Aromas personalizados que se asocien exclusivamente con tu marca",
          "Fragancias estacionales para campañas específicas",
          "Aromas que complementen la categoría de producto",
          "Sistemas de difusión controlados para no saturar el ambiente",
        ],
      },
      {
        type: "heading",
        level: 3,
        content: "4. Tacto: La Experiencia Tangible",
      },
      {
        type: "paragraph",
        content:
          "Permitir la interacción táctil con los productos puede aumentar significativamente la probabilidad de compra:",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Displays que inviten a tocar y probar los productos",
          "Variedad de texturas en los materiales de la tienda",
          "Temperatura ambiente confortable que invite a permanecer",
          "Packaging con acabados táctiles interesantes",
        ],
      },
      {
        type: "heading",
        level: 3,
        content: "5. Gusto: Más Allá de la Alimentación",
      },
      {
        type: "paragraph",
        content:
          "Aunque parece limitado a productos alimenticios, el gusto puede incorporarse en diversas estrategias:",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Degustaciones de producto en tiendas de alimentación",
          "Bebidas o snacks que complementen la experiencia de compra",
          "Eventos especiales con catering temático",
          "Asociaciones gustativas con otros elementos sensoriales",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Casos de Éxito",
      },
      {
        type: "paragraph",
        content:
          "Marcas como Starbucks, Apple y Abercrombie & Fitch han construido imperios comerciales basados en experiencias sensoriales distintivas. Starbucks, por ejemplo, ha creado un aroma característico en sus tiendas que combina café recién molido con notas de vainilla y canela, mientras que Apple utiliza materiales premium y un diseño minimalista para crear una experiencia táctil y visual única.",
      },
      {
        type: "heading",
        level: 2,
        content: "Implementación Práctica",
      },
      {
        type: "paragraph",
        content: "Para implementar una estrategia de marketing sensorial efectiva, recomendamos seguir estos pasos:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Análisis de marca: Identifica qué valores y emociones quieres transmitir",
          "Auditoría sensorial: Evalúa la experiencia actual en cada uno de los cinco sentidos",
          "Estrategia integrada: Desarrolla un plan que combine estímulos sensoriales coherentes",
          "Implementación por fases: Introduce los elementos gradualmente para medir su impacto",
          "Medición de resultados: Utiliza KPIs como tiempo de permanencia, conversión y ticket medio",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Conclusión",
      },
      {
        type: "paragraph",
        content:
          "El marketing sensorial representa una oportunidad extraordinaria para diferenciarse en un mercado saturado. Las marcas que logren crear experiencias multisensoriales coherentes y memorables no solo aumentarán sus ventas a corto plazo, sino que construirán relaciones emocionales duraderas con sus clientes.",
      },
    ],
  },
  {
    id: 4,
    title: "Estrategias de Sampling para Productos Premium",
    slug: "estrategias-sampling-productos-premium",
    date: "2025-04-05",
    author: "Javier López",
    category: "Sampling",
    image: "/premium-product-sampling.png",
    excerpt:
      "Aprende a diseñar campañas de sampling efectivas para productos de alta gama que maximicen el retorno de inversión.",
    content: [
      {
        type: "heading",
        level: 1,
        content: "Estrategias de Sampling para Productos Premium",
      },
      {
        type: "paragraph",
        content:
          "El sampling o muestreo de productos es una estrategia de marketing directo que permite a los consumidores experimentar un producto antes de comprarlo. Para marcas premium, esta técnica requiere un enfoque especialmente cuidadoso que preserve el valor percibido y la exclusividad de la marca.",
      },
      {
        type: "heading",
        level: 2,
        content: "El Dilema del Sampling Premium",
      },
      {
        type: "paragraph",
        content:
          "Las marcas premium enfrentan un desafío único: necesitan dar a conocer sus productos a nuevos clientes potenciales, pero sin diluir su imagen de exclusividad. El sampling masivo tradicional puede devaluar la percepción de la marca, mientras que un enfoque demasiado restrictivo limita el alcance.",
      },
      {
        type: "heading",
        level: 2,
        content: "Principios Clave para el Sampling Premium",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Selectividad sobre volumen: Prioriza la calidad del contacto sobre la cantidad",
          "Experiencia completa: La muestra debe reflejar fielmente la experiencia del producto completo",
          "Presentación impecable: El packaging de la muestra debe mantener los estándares de la marca",
          "Contexto adecuado: El entorno donde se entrega la muestra debe alinearse con los valores de marca",
          "Seguimiento personalizado: Establece un canal de comunicación post-sampling",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Estrategias Efectivas de Sampling Premium",
      },
      {
        type: "heading",
        level: 3,
        content: "1. Sampling por Invitación",
      },
      {
        type: "paragraph",
        content:
          "Crea un sentido de exclusividad invitando a clientes potenciales a solicitar o recibir una muestra, en lugar de distribuirlas masivamente:",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Programas de registro online con cuestionarios de calificación",
          "Invitaciones personalizadas a clientes de marcas complementarias",
          "Códigos exclusivos compartidos por clientes actuales (referral)",
          "Eventos privados con sampling como parte de la experiencia",
        ],
      },
      {
        type: "heading",
        level: 3,
        content: "2. Sampling Contextual",
      },
      {
        type: "paragraph",
        content: "Entrega muestras en entornos que complementen y realcen la percepción del producto:",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Hoteles de lujo para productos de cosmética premium",
          "Clubes exclusivos para bebidas espirituosas de alta gama",
          "Galerías de arte para productos que destacan por su diseño",
          "Eventos culturales selectos para productos con valor artístico",
        ],
      },
      {
        type: "heading",
        level: 3,
        content: "3. Sampling Experiencial",
      },
      {
        type: "paragraph",
        content: "Convierte la entrega de la muestra en una experiencia memorable que añada valor:",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Consultas personalizadas antes de entregar la muestra",
          "Demostraciones exclusivas de uso del producto",
          "Maridajes o combinaciones con otros productos premium",
          "Personalización de la muestra en tiempo real",
        ],
      },
      {
        type: "heading",
        level: 3,
        content: "4. Sampling Digital-Físico",
      },
      {
        type: "paragraph",
        content: "Combina canales digitales para la selección y físicos para la experiencia:",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Cuestionarios online que determinan la muestra ideal para cada perfil",
          "Entrega a domicilio con packaging premium y nota personalizada",
          "Seguimiento digital con contenido exclusivo relacionado con la muestra",
          "Comunidades privadas online para quienes han recibido muestras",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Medición de Resultados",
      },
      {
        type: "paragraph",
        content: "Para productos premium, los KPIs tradicionales de sampling deben adaptarse:",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Tasa de conversión a primera compra (valor sobre volumen)",
          "Valor del ticket medio de los clientes captados vía sampling",
          "Tasa de retención a 6 y 12 meses",
          "Valor de vida del cliente (LTV) comparado con otros canales",
          "Impacto en la percepción de marca (estudios cualitativos)",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Casos de Éxito",
      },
      {
        type: "paragraph",
        content:
          "Marcas como Jo Malone, Aesop y Dom Pérignon han implementado estrategias de sampling selectivo con excelentes resultados. Jo Malone, por ejemplo, ofrece sesiones de 'fragrance combining' donde los clientes potenciales pueden crear su combinación personalizada y llevarse muestras de las fragancias seleccionadas, generando una experiencia única y memorable.",
      },
      {
        type: "heading",
        level: 2,
        content: "Errores Comunes a Evitar",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Muestras demasiado pequeñas que no permiten apreciar la calidad del producto",
          "Packaging de la muestra de calidad inferior al producto real",
          "Personal no capacitado adecuadamente sobre los valores de la marca",
          "Ausencia de mecanismos de seguimiento post-sampling",
          "Distribución en entornos inconsistentes con el posicionamiento de marca",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Conclusión",
      },
      {
        type: "paragraph",
        content:
          "El sampling para productos premium, cuando se ejecuta con estrategia y atención al detalle, puede ser una herramienta extraordinariamente efectiva para ampliar la base de clientes sin comprometer la imagen de marca. La clave está en crear experiencias de muestreo que sean en sí mismas un reflejo de los valores premium que la marca representa.",
      },
    ],
  },
  {
    id: 5,
    title: "Materiales POS Sostenibles: El Futuro del Retail",
    slug: "materiales-pos-sostenibles-futuro-retail",
    date: "2025-05-12",
    author: "Elena Martínez",
    category: "Sostenibilidad",
    image: "/sustainable-pos-materials.png",
    excerpt:
      "Explora cómo los materiales sostenibles están transformando el diseño y la producción de elementos para el punto de venta.",
    content: [
      {
        type: "heading",
        level: 1,
        content: "Materiales POS Sostenibles: El Futuro del Retail",
      },
      {
        type: "paragraph",
        content:
          "La sostenibilidad ha dejado de ser una tendencia para convertirse en una necesidad imperativa en todos los aspectos del marketing. Los materiales de Punto de Venta (POS), tradicionalmente caracterizados por su corta vida útil y alto impacto ambiental, están experimentando una revolución verde que responde tanto a la demanda de los consumidores como a la responsabilidad corporativa.",
      },
      {
        type: "heading",
        level: 2,
        content: "El Impacto Ambiental de los Materiales POS Tradicionales",
      },
      {
        type: "paragraph",
        content:
          "Los displays, señalizadores, stoppers y otros elementos POS convencionales suelen estar fabricados con materiales como PVC, acrílicos y cartones plastificados, que generan un impacto ambiental significativo:",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Huella de carbono elevada en su producción",
          "Dificultad o imposibilidad de reciclaje",
          "Vida útil corta (a menudo semanas o meses)",
          "Residuos que terminan en vertederos o incineradoras",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Materiales Sostenibles Emergentes",
      },
      {
        type: "paragraph",
        content:
          "La innovación en materiales está transformando las posibilidades para crear elementos POS con menor impacto ambiental:",
      },
      {
        type: "heading",
        level: 3,
        content: "1. Bioplásticos y Materiales Biodegradables",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "PLA (ácido poliláctico): Derivado del maíz o la caña de azúcar",
          "PHAs (polihidroxialcanoatos): Plásticos producidos por fermentación bacteriana",
          "Materiales a base de algas: Alternativas biodegradables al plástico",
          "Bioresinas: Derivadas de residuos agrícolas y forestales",
        ],
      },
      {
        type: "heading",
        level: 3,
        content: "2. Materiales Reciclados y Reciclables",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "rPET: PET 100% reciclado para displays transparentes",
          "Cartón honeycomb: Estructura resistente con mínimo material",
          "Aluminio reciclado: Para estructuras duraderas y reutilizables",
          "Papel piedra: Material resistente al agua a base de carbonato cálcico",
        ],
      },
      {
        type: "heading",
        level: 3,
        content: "3. Materiales Naturales Innovadores",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Microbio: Material a base de micelio (raíces de hongos)",
          "Fibras de bambú compactadas: Alternativa resistente a la madera",
          "Textiles de cáñamo y lino: Para banderolas y elementos flexibles",
          "Corcho expandido: Para paneles y displays ligeros",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Beneficios de los Materiales POS Sostenibles",
      },
      {
        type: "paragraph",
        content: "La adopción de materiales sostenibles para elementos POS ofrece múltiples ventajas:",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Reducción de la huella de carbono de las campañas de marketing",
          "Alineación con los valores de sostenibilidad de la marca",
          "Diferenciación en el punto de venta",
          "Cumplimiento anticipado de futuras regulaciones ambientales",
          "Respuesta a la creciente demanda de los consumidores por prácticas sostenibles",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Diseño Circular para Materiales POS",
      },
      {
        type: "paragraph",
        content:
          "Más allá de los materiales, el enfoque de economía circular está transformando el diseño de elementos POS:",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Diseño modular: Componentes intercambiables que permiten actualizar sin desechar",
          "Sistemas de devolución: Programas para recuperar y reutilizar elementos POS",
          "Diseño para desmontaje: Facilita la separación de materiales al final de su vida útil",
          "Multifuncionalidad: Elementos que pueden adaptarse a diferentes campañas",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Casos de Éxito",
      },
      {
        type: "paragraph",
        content: "Marcas pioneras están liderando el cambio hacia materiales POS más sostenibles:",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Lush Cosmetics: Utiliza displays fabricados con plástico oceánico reciclado",
          "Patagonia: Implementa elementos POS de cartón reciclado con tintas vegetales",
          "IKEA: Ha desarrollado displays de bioplásticos para sus tiendas",
          "The Body Shop: Utiliza materiales POS de bambú y otros recursos renovables",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Desafíos y Consideraciones",
      },
      {
        type: "paragraph",
        content: "La transición hacia materiales POS sostenibles presenta algunos retos:",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Coste inicial: Algunos materiales sostenibles pueden ser más caros inicialmente",
          "Durabilidad: Garantizar que los nuevos materiales cumplan los requisitos de resistencia",
          "Estética: Mantener la calidad visual y el impacto de marketing",
          "Cadena de suministro: Asegurar la disponibilidad y consistencia de los materiales",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Implementación Práctica",
      },
      {
        type: "paragraph",
        content: "Para implementar una estrategia de materiales POS sostenibles, recomendamos:",
      },
      {
        type: "list",
        style: "ordered",
        items: [
          "Auditoría de materiales actuales: Evalúa el impacto ambiental de tus elementos POS",
          "Objetivos graduales: Establece metas realistas de transición a materiales sostenibles",
          "Pruebas piloto: Experimenta con nuevos materiales en campañas limitadas",
          "Comunicación transparente: Informa a clientes y consumidores sobre tus iniciativas",
          "Medición de impacto: Cuantifica la reducción de huella ambiental lograda",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "El Futuro de los Materiales POS",
      },
      {
        type: "paragraph",
        content:
          "Las tendencias apuntan hacia una integración cada vez mayor entre sostenibilidad, tecnología y experiencia de usuario:",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Materiales inteligentes que cambian según condiciones ambientales",
          "Elementos POS híbridos físico-digitales con mínimo impacto material",
          "Sistemas de personalización en tienda que reducen el desperdicio",
          "Materiales con capacidad de captura de carbono",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Conclusión",
      },
      {
        type: "paragraph",
        content:
          "La transición hacia materiales POS sostenibles representa una oportunidad para las marcas de demostrar su compromiso ambiental mientras crean experiencias de compra innovadoras. Aquellas empresas que lideren esta transformación no solo reducirán su impacto ambiental, sino que conectarán con un consumidor cada vez más consciente y exigente en materia de sostenibilidad.",
      },
    ],
  },
]

const allArticles = [...articles, ...articlesAdicionales]

// Helper function to format dates
export function formatDate(dateString: string) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date)
}

export { allArticles as articles }
export { articlesAdicionales }
