"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { services } from "@/lib/data"
import { homeData } from "@/lib/data"
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

export default function FeaturedServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Solo mostrar los primeros 6 servicios en la página principal
  const featuredServices = services.slice(0, 6)
  const { featuredServices: featuredServicesData } = homeData

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{featuredServicesData.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{featuredServicesData.description}</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {featuredServices.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            const isHovered = hoveredIndex === index

            return (
              <Card
                key={service.id}
                className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative h-48 w-full bg-gradient-to-br from-primary/10 to-purple-500/5 flex items-center justify-center">
                  {IconComponent && (
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={
                        isHovered
                          ? {
                              scale: [1, 1.2, 1],
                              rotate: [0, 5, -5, 0],
                              y: [0, -10, 0],
                            }
                          : { scale: 1 }
                      }
                      transition={{
                        duration: 1.5,
                        repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                        repeatType: "loop",
                      }}
                      className="text-primary"
                    >
                      <IconComponent className="h-24 w-24" />
                    </motion.div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-16" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                </div>
                <CardContent className="flex-1 p-6">
                  <p className="text-sm text-muted-foreground line-clamp-3">{service.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                      >
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 2 && (
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        +{service.features.length - 2}
                      </span>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/servicios/${service.slug}`}>
                      Ver Detalles
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
        <div className="mt-12 text-center">
          <Button asChild>
            <Link href={featuredServicesData.buttonUrl}>
              {featuredServicesData.buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
