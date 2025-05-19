"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, TrendingUp, Users, Award, Clock, Zap } from "lucide-react"

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const advantages = [
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Mayor Impacto Sensorial",
      description:
        "La publicidad offline crea experiencias tangibles que involucran todos los sentidos, generando un recuerdo más duradero de tu marca.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Conexión Personal",
      description:
        "Establece una relación directa con tus clientes potenciales, generando confianza y credibilidad en entornos reales.",
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Diferenciación",
      description:
        "Destaca en un mundo saturado de publicidad digital, llegando a tu audiencia cuando está más receptiva.",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Presencia Constante",
      description:
        "Mantén tu marca visible 24/7 en ubicaciones estratégicas donde tu público objetivo transita diariamente.",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Complemento Digital",
      description:
        "Potencia tus estrategias digitales con acciones offline que crean un ecosistema de marketing integral.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Resultados Medibles",
      description: "Implementamos sistemas de seguimiento para cuantificar el impacto real de cada campaña offline.",
    },
  ]

  const whyUs = [
    "Más de 10 años de experiencia en marketing offline",
    "Equipo multidisciplinar de especialistas",
    "Cobertura nacional en más de 200 ciudades",
    "Estrategias personalizadas según objetivos",
    "Materiales sostenibles y eco-friendly",
    "Integración perfecta con estrategias digitales",
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">¿Por Qué Publicidad Offline?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            En un mundo cada vez más digital, la publicidad offline sigue siendo una herramienta poderosa para conectar
            con tu audiencia de manera tangible y memorable.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="relative overflow-hidden transition-all duration-300 hover:shadow-lg border-2 hover:border-primary/20"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={activeIndex === index ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {advantage.icon}
                  </motion.div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-primary/5 rounded-3xl transform -skew-y-2"></div>
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">¿Por Qué Elegirnos?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                En LuminaryAdsPubl combinamos creatividad, estrategia y ejecución impecable para maximizar el retorno de
                tu inversión en marketing offline.
              </p>

              <ul className="mt-8 space-y-4">
                {whyUs.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contacto">Contacto</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(/23f42ea789a43d558f42a74ac0e35d36.jpg)`,
                    height: "100%",
                  }}
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">Satisfacción del cliente</span>
                  <span className="text-lg font-bold text-primary">98%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: "98%" }}></div>
                </div>

                <div className="flex items-center justify-between mb-2 mt-4">
                  <span className="text-sm font-medium text-muted-foreground">ROI promedio</span>
                  <span className="text-lg font-bold text-primary">320%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
