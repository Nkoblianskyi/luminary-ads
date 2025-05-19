import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Preguntas Frecuentes | LuminaryAdsPubl",
  description: "Respuestas a las preguntas más frecuentes sobre nuestros servicios de marketing offline.",
}

export default function FAQPage() {
  const faqs = [
    {
      question: "¿Qué es el marketing offline?",
      answer: [
        "El marketing offline se refiere a todas las estrategias de promoción y publicidad que se realizan fuera del entorno digital. Incluye acciones como sampling, materiales en punto de venta, merchandising, eventos, activaciones BTL, entre otros.",
        "A diferencia del marketing online, el marketing offline permite una interacción física y tangible con el consumidor, generando experiencias sensoriales completas que suelen tener un mayor impacto emocional y recuerdo de marca.",
      ],
    },
    {
      question: "¿Por qué debería invertir en marketing offline en la era digital?",
      answer: [
        "Aunque vivimos en un mundo cada vez más digital, el marketing offline sigue siendo extremadamente efectivo por varias razones:",
        "1. Mayor impacto sensorial: Permite experiencias que involucran todos los sentidos.",
        "2. Menos saturación: Mientras el entorno digital está cada vez más saturado, las experiencias físicas bien ejecutadas destacan más.",
        "3. Mayor credibilidad: Los consumidores suelen percibir las acciones físicas como más auténticas y creíbles.",
        "4. Complementariedad: Las estrategias offline y online se potencian mutuamente, creando una experiencia de marca coherente y completa.",
      ],
    },
    {
      question: "¿Cómo medís el ROI de las acciones de marketing offline?",
      answer: [
        "Medimos el retorno de inversión de nuestras acciones offline a través de diferentes métricas según los objetivos de cada campaña:",
        "- Incremento de ventas durante y después de la acción",
        "- Número de interacciones y contactos generados",
        "- Muestras o materiales distribuidos",
        "- Tasa de conversión a primera compra",
        "- Encuestas de notoriedad de marca pre y post campaña",
        "- Contenido generado por usuarios en redes sociales",
        "- Códigos promocionales canjeados",
        "Utilizamos tecnología avanzada como códigos QR únicos, sistemas de seguimiento de cupones y encuestas digitales para conectar las acciones offline con resultados medibles.",
      ],
    },
    {
      question: "¿En qué zonas geográficas operáis?",
      answer: [
        "Nuestra sede principal está en Madrid, pero operamos en toda España peninsular, Baleares y Canarias. Contamos con una red de colaboradores y promotores en más de 200 ciudades españolas, lo que nos permite implementar campañas a nivel nacional o focalizadas en regiones específicas según las necesidades de cada cliente.",
        "Para proyectos internacionales, trabajamos con partners estratégicos en Portugal, Francia e Italia.",
      ],
    },
    {
      question: "¿Cuánto tiempo se necesita para preparar una campaña de marketing offline?",
      answer: [
        "Los plazos varían según la complejidad y escala de la campaña:",
        "- Acciones de sampling sencillas: 2-3 semanas",
        "- Campañas de materiales POS: 3-4 semanas",
        "- Eventos y activaciones BTL complejas: 6-8 semanas",
        "- Campañas nacionales multi-canal: 8-12 semanas",
        "Recomendamos contactarnos con la mayor antelación posible para garantizar una planificación óptima, especialmente para campañas vinculadas a temporadas específicas como Navidad o verano.",
      ],
    },
    {
      question: "¿Trabajáis con empresas de todos los tamaños?",
      answer: [
        "Sí, adaptamos nuestros servicios a empresas de todos los tamaños, desde startups y pymes hasta grandes corporaciones multinacionales. Entendemos que cada negocio tiene necesidades y presupuestos diferentes, por lo que diseñamos estrategias a medida que maximicen el impacto independientemente del tamaño de la inversión.",
        "Para empresas más pequeñas, ofrecemos paquetes escalables que permiten realizar acciones efectivas con presupuestos ajustados, mientras que para grandes empresas desarrollamos estrategias integrales que pueden incluir múltiples canales y puntos de contacto.",
      ],
    },
    {
      question: "¿Qué sectores tienen mejor respuesta al marketing offline?",
      answer: [
        "Aunque el marketing offline puede ser efectivo en prácticamente cualquier sector, hemos observado resultados particularmente buenos en:",
        "- Alimentación y bebidas",
        "- Cosmética y cuidado personal",
        "- Moda y retail",
        "- Tecnología y electrodomésticos",
        "- Automoción",
        "- Servicios financieros",
        "- Entretenimiento y ocio",
        "- Sector de apuestas y juegos de azar",
        "La clave está en adaptar las estrategias a las particularidades de cada sector y a los hábitos de consumo de su público objetivo.",
      ],
    },
    {
      question: "¿Cómo integráis las estrategias offline con el marketing digital?",
      answer: [
        "La integración entre lo offline y lo digital es fundamental en nuestras estrategias. Algunos ejemplos de cómo lo hacemos:",
        "- Códigos QR en materiales físicos que dirigen a experiencias digitales exclusivas",
        "- Hashtags específicos para campañas que incentivan compartir la experiencia en redes",
        "- Cupones físicos canjeables en tienda online",
        "- Activaciones que generan contenido compartible en redes sociales",
        "- Retargeting digital a personas que han interactuado con acciones offline",
        "- Análisis conjunto de datos offline y online para optimizar la estrategia global",
        "Nuestro enfoque omnicanal garantiza una experiencia de marca coherente y potencia los resultados de ambos canales.",
      ],
    },
    {
      question: "¿Qué información necesitáis para preparar un presupuesto?",
      answer: [
        "Para ofrecerte un presupuesto ajustado a tus necesidades, nos resulta útil contar con la siguiente información:",
        "- Objetivos de la campaña (notoriedad, ventas, fidelización, etc.)",
        "- Público objetivo y zonas geográficas de interés",
        "- Timing deseado para la implementación",
        "- Presupuesto orientativo disponible",
        "- Acciones previas realizadas y sus resultados",
        "- Materiales o recursos ya disponibles",
        "Con esta información podemos diseñar una propuesta personalizada que maximice el retorno de tu inversión.",
      ],
    },
    {
      question: "¿Ofrecéis servicios de diseño gráfico para los materiales?",
      answer: [
        "Sí, contamos con un equipo creativo interno que puede encargarse del diseño gráfico de todos los materiales necesarios para tu campaña. Nuestros diseñadores trabajan en estrecha colaboración con el equipo estratégico para asegurar que todos los elementos visuales estén alineados con los objetivos de la campaña y la identidad de marca.",
        "También podemos trabajar con los materiales proporcionados por tu equipo o agencia de diseño si ya cuentas con estos recursos.",
      ],
    },
  ]

  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Preguntas Frecuentes</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios de marketing offline.
          </p>
        </div>

        <div className="mt-16">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2">
                    {faq.answer.map((paragraph, i) => (
                      <p key={i} className="text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold">¿No encuentras la respuesta que buscas?</h2>
          <p className="mt-4 text-muted-foreground">
            Contáctanos directamente y resolveremos todas tus dudas sobre nuestros servicios.
          </p>
          <Button size="lg" className="mt-6" asChild>
            <Link href="/contacto">Contactar Ahora</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
