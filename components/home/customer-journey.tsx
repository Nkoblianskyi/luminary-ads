"use client"

import type React from "react"

import { useState } from "react"
import { Brain, MapPin, Users, ShoppingCart, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"

type JourneyStep = {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  shortText: string
}

export default function CustomerJourney() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  const steps: JourneyStep[] = [
    {
      id: 1,
      title: "Atención",
      description: "El cliente descubre tu marca a través de materiales promocionales impactantes y campañas visibles.",
      icon: <Brain className="h-8 w-8" />,
      shortText: "Cliente conoce la marca",
    },
    {
      id: 2,
      title: "Presencia en el Punto de Venta",
      description: "Materiales POS estratégicamente ubicados destacan tu producto entre la competencia.",
      icon: <MapPin className="h-8 w-8" />,
      shortText: "Ve el producto en el estante o stand",
    },
    {
      id: 3,
      title: "Interacción con la Marca",
      description: "Experiencias directas con promotores o muestras crean una conexión personal con tu marca.",
      icon: <Users className="h-8 w-8" />,
      shortText: "Habla con un promotor o recibe una muestra",
    },
    {
      id: 4,
      title: "Decisión de Compra",
      description: "Materiales informativos y promociones en el punto de venta facilitan la decisión final.",
      icon: <ShoppingCart className="h-8 w-8" />,
      shortText: "Toma la decisión de compra",
    },
    {
      id: 5,
      title: "Fidelización",
      description: "La experiencia positiva queda en la memoria del cliente, motivando su regreso y recomendación.",
      icon: <RefreshCw className="h-8 w-8" />,
      shortText: "Recuerda la experiencia y regresa",
    },
  ]

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Customer Journey Offline</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Descubre cómo nuestro marketing offline acompaña a tus clientes en cada etapa del proceso de compra
          </p>
        </div>

        {/* Versión Desktop - Timeline Horizontal */}
        <div className="mt-16 hidden md:block">
          <div className="relative">
            {/* Línea de conexión */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2" />

            <div className="relative flex justify-between">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="relative z-10 flex flex-col items-center"
                  onMouseEnter={() => setActiveStep(step.id)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  <div
                    className={cn(
                      "flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300",
                      activeStep === step.id
                        ? "bg-primary text-white scale-110"
                        : "bg-white text-primary border-2 border-primary",
                    )}
                  >
                    {step.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-center">{step.title}</h3>
                  <div
                    className={cn(
                      "mt-2 text-center transition-all duration-300 max-w-[200px]",
                      activeStep === step.id ? "opacity-100" : "opacity-70",
                    )}
                  >
                    <p className="text-sm font-medium text-primary">{step.shortText}</p>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        activeStep === step.id ? "max-h-24 mt-2" : "max-h-0",
                      )}
                    >
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Versión Mobile - Lista Vertical */}
        <div className="mt-12 md:hidden">
          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className={cn(
                  "relative flex items-start p-4 rounded-lg transition-all duration-300",
                  activeStep === step.id ? "bg-gray-50" : "",
                )}
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
              >
                <div
                  className={cn(
                    "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full mr-4 transition-all duration-300",
                    activeStep === step.id ? "bg-primary text-white" : "bg-white text-primary border-2 border-primary",
                  )}
                >
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm font-medium text-primary">{step.shortText}</p>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      activeStep === step.id ? "max-h-24 mt-2" : "max-h-0",
                    )}
                  >
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
