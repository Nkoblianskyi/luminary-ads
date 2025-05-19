export const metadata = {
    title: "Nuestros Logros | LuminaryAdsPubl",
    description:
        "Descubre los principales logros y reconocimientos de LuminaryAdsPubl en el sector del marketing offline.",
}

export default function LogrosPage() {
    // Categorías de logros
    const categorias = [
        {
            titulo: "Resultados de Campañas",
            logros: [
                "Incremento promedio del 35% en ventas para clientes del sector alimentación tras campañas de sampling",
                "Aumento del 28% en reconocimiento de marca para clientes del sector tecnológico",
                "Mejora del 42% en la tasa de conversión en punto de venta con nuestros materiales POS",
                "Incremento del 65% en tráfico a tiendas físicas mediante campañas de publicidad exterior",
                "Generación de más de 500,000 interacciones directas con consumidores en eventos BTL",
                "Distribución de más de 2 millones de muestras de producto con una tasa de conversión del 32%",
                "Aumento del 47% en el ticket medio de compra tras implementación de estrategias de merchandising",
            ],
        },
        {
            titulo: "Reconocimientos del Sector",
            logros: [
                "Premio a la Mejor Campaña de Marketing Offline otorgado por la Asociación Española de Marketing",
                "Reconocimiento a la Innovación en Materiales POS Sostenibles",
                "Finalistas en los European Marketing Excellence Awards en la categoría de Experiencias de Marca",
                "Premio al Mejor Stand en la Feria Internacional de Marketing y Publicidad",
                "Reconocimiento a la Mejor Estrategia Omnicanal por la integración de acciones offline y online",
                "Galardón a la Excelencia en Diseño de Packaging Promocional",
                "Premio a la Mejor Activación BTL del Año por campaña para cliente del sector bebidas",
            ],
        },
        {
            titulo: "Crecimiento y Expansión",
            logros: [
                "Expansión de operaciones a más de 200 ciudades en toda España",
                "Crecimiento de la plantilla hasta superar los 120 profesionales especializados",
                "Apertura de oficinas en Madrid, Barcelona, Valencia y Sevilla",
                "Desarrollo de red de más de 400 promotores cualificados en todo el territorio nacional",
                "Ampliación de cartera de servicios incorporando nuevas tecnologías al marketing offline",
                "Establecimiento de alianzas estratégicas con proveedores internacionales de materiales sostenibles",
                "Creación de departamento especializado en medición y análisis de resultados offline",
            ],
        },
        {
            titulo: "Innovación y Desarrollo",
            logros: [
                "Desarrollo de sistema propio de medición de impacto para acciones de marketing offline",
                "Creación de materiales POS 100% sostenibles y biodegradables",
                "Implementación de tecnología de realidad aumentada en displays físicos",
                "Desarrollo de metodología exclusiva para optimización de rutas de sampling",
                "Creación de sistema de personalización masiva para materiales promocionales",
                "Implementación de tecnología NFC en elementos de comunicación offline",
                "Desarrollo de displays inteligentes que recopilan datos de interacción del consumidor",
            ],
        },
        {
            titulo: "Impacto en Clientes",
            logros: [
                "Colaboración con más de 300 marcas nacionales e internacionales",
                "Tasa de retención de clientes superior al 85%",
                "Índice de satisfacción de clientes del 98%",
                "Implementación de más de 1,500 campañas integrales de marketing offline",
                "Gestión de presupuestos acumulados superiores a 50 millones de euros",
                "Desarrollo de relaciones comerciales a largo plazo con las principales empresas de gran consumo",
                "Testimonios de éxito de clientes destacando el ROI superior al 300% en campañas offline",
            ],
        },
        {
            titulo: "Responsabilidad Social y Sostenibilidad",
            logros: [
                "Reducción del 75% en la huella de carbono de nuestras producciones de materiales POS",
                "Implementación de política de cero residuos en todas nuestras oficinas",
                "Desarrollo de programa de reciclaje de materiales promocionales post-campaña",
                "Colaboración con ONGs para donación de excedentes de campañas a colectivos vulnerables",
                "Obtención de certificación de empresa socialmente responsable",
                "Implementación de programa de voluntariado corporativo con más de 1,000 horas anuales",
                "Desarrollo de línea de materiales promocionales fabricados con plásticos recuperados del océano",
            ],
        },
    ]

    return (
        <div className="py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Nuestros Logros</h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                        En LuminaryAdsPubl nos enorgullecemos de nuestros resultados y del impacto positivo que generamos para
                        nuestros clientes. Estos son algunos de nuestros principales logros.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-5xl space-y-16">
                    {categorias.map((categoria, index) => (
                        <div key={index} className="relative">
                            {/* Elemento decorativo */}
                            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary/80 to-primary/20 rounded-full" />

                            <div className="pl-6">
                                <h2 className="text-2xl font-bold text-foreground mb-6">{categoria.titulo}</h2>
                                <ul className="space-y-4">
                                    {categoria.logros.map((logro, logroIndex) => (
                                        <li key={logroIndex} className="relative pl-6">
                                            <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-primary" />
                                            <p className="text-muted-foreground">{logro}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mx-auto mt-24 max-w-3xl rounded-2xl bg-primary/5 p-8 md:p-12">
                    <h2 className="text-2xl font-bold text-center mb-6">Nuestro Compromiso</h2>
                    <p className="text-center text-muted-foreground mb-8">
                        En LuminaryAdsPubl no nos conformamos con los logros alcanzados. Seguimos innovando y buscando nuevas formas
                        de maximizar el impacto del marketing offline para nuestros clientes, combinando creatividad, estrategia y
                        medición de resultados.
                    </p>
                    <div className="flex justify-center">
                        <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                            Excelencia · Innovación · Resultados
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
