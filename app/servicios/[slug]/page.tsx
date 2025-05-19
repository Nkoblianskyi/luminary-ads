"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/data"
import { motion } from "framer-motion"
// Modificar la importación de iconos para incluir un icono más apropiado para vallas publicitarias
import { Coffee, ShoppingCart, Package, FileText, ImageIcon, Lightbulb, Briefcase, Tent, PanelTop } from "lucide-react"

// Actualizar el mapeo de iconos para incluir el nuevo icono
const iconMap = {
  Coffee,
  ShoppingCart,
  Package,
  FileText,
  ImageIcon,
  Lightbulb,
  Briefcase,
  Tent,
  PanelTop,
}

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const [service, setService] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Encontrar el servicio basado en el slug
    const foundService = services.find((s) => s.slug === params.slug)
    setService(foundService)
    setLoading(false)
  }, [params.slug])

  if (loading) {
    return <div className="py-12 md:py-16 text-center">Cargando...</div>
  }

  if (!service) {
    notFound()
  }

  const IconComponent = iconMap[service.icon as keyof typeof iconMap]

  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/servicios" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Servicios
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{service.title}</h1>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.features.map((feature: string, index: number) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                >
                  {feature}
                </span>
              ))}
            </div>
            <div className="mt-8">
              {service.description.map((block: any, index: number) => {
                // Renderizar diferentes tipos de bloques de contenido
                switch (block.type) {
                  case "paragraph":
                    return (
                      <p key={index} className="my-4">
                        {block.content}
                      </p>
                    )
                  case "heading":
                    if (block.level === 2) {
                      return (
                        <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                          {block.content}
                        </h2>
                      )
                    } else if (block.level === 3) {
                      return (
                        <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                          {block.content}
                        </h3>
                      )
                    }
                    return null
                  case "list":
                    if (block.style === "unordered") {
                      return (
                        <ul key={index} className="list-disc pl-6 my-4">
                          {block.items.map((item: string, i: number) => (
                            <li key={i} className="mb-2">
                              {item}
                            </li>
                          ))}
                        </ul>
                      )
                    } else if (block.style === "ordered") {
                      return (
                        <ol key={index} className="list-decimal pl-6 my-4">
                          {block.items.map((item: string, i: number) => (
                            <li key={i} className="mb-2">
                              {item}
                            </li>
                          ))}
                        </ol>
                      )
                    }
                    return null
                  default:
                    return null
                }
              })}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div className="overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 to-purple-500/5 p-8 flex items-center justify-center">
                {IconComponent && (
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                    }}
                    className="text-primary"
                  >
                    <IconComponent className="h-32 w-32" />
                  </motion.div>
                )}
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold mb-4">¿Interesado en este servicio?</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Contáctanos para obtener más información o solicitar un presupuesto personalizado para tu proyecto.
                </p>
                <Button className="w-full" asChild>
                  <Link href="/contacto">Solicitar Información</Link>
                </Button>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold mb-4">Otros servicios</h3>
                <ul className="space-y-3">
                  {services
                    .filter((s) => s.id !== service.id)
                    .slice(0, 3)
                    .map((s) => (
                      <li key={s.id}>
                        <Link href={`/servicios/${s.slug}`} className="text-sm hover:text-primary transition-colors">
                          {s.title}
                        </Link>
                      </li>
                    ))}
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <Link href="/servicios" className="text-sm text-primary hover:underline">
                    Ver todos los servicios
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
