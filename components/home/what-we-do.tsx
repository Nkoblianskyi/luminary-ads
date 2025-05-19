"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { homeData } from "@/lib/data"
import { Coffee, ShoppingCart, Package, Users, Store, Building } from "lucide-react"

// Mapeo de nombres de iconos a componentes
const iconMap = {
  Coffee,
  ShoppingCart,
  Package,
  Users,
  Store,
  Building,
}

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const { whatWeDo } = homeData

  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{whatWeDo.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{whatWeDo.description}</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {whatWeDo.tools.map((tool, index) => {
            const IconComponent = iconMap[tool.icon as keyof typeof iconMap]

            return (
              <Card
                key={tool.name}
                className={cn(
                  "relative overflow-hidden transition-all duration-300 hover:shadow-md",
                  activeIndex === index ? "ring-2 ring-primary" : "",
                )}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      {IconComponent && <IconComponent className="h-6 w-6 text-primary" aria-hidden="true" />}
                    </div>
                    <h3 className="text-lg font-semibold">{tool.name}</h3>
                  </div>
                  <div
                    className={cn(
                      "mt-4 text-sm text-muted-foreground transition-all duration-300",
                      activeIndex === index ? "opacity-100" : "opacity-0 sm:opacity-100",
                    )}
                  >
                    {tool.description}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
