"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { services } from "@/lib/data"
import { motion } from "framer-motion"
import { Coffee, ShoppingCart, Package, FileText, ImageIcon, Lightbulb, Briefcase, Tent, PanelTop } from "lucide-react"

// Mapeo de nombres de iconos a componentes
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

export default function ServicesPageClient() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Nuestros Servicios</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Ofrecemos soluciones integrales de marketing offline para aumentar la visibilidad y las ventas de tu marca
            en el mundo real.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => {
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
                          : {
                              scale: [1, 1.05, 1],
                              y: [0, -5, 0],
                            }
                      }
                      transition={{
                        duration: isHovered ? 1.5 : 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                      }}
                      className="text-primary"
                    >
                      <IconComponent className="h-24 w-24" />
                    </motion.div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-16" />
                  <div className="absolute bottom-4 left-4">
                    <h2 className="text-xl font-semibold">{service.title}</h2>
                  </div>
                </div>
                <CardContent className="flex-1 p-6">
                  <p className="text-sm text-muted-foreground line-clamp-3">{service.excerpt}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.features.map((feature, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full" asChild>
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
      </div>
    </div>
  )
}
