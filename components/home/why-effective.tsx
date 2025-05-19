import { homeData } from "@/lib/data"
import { Target, Brain, MapPin, ShoppingBag } from "lucide-react"

// Mapeo de nombres de iconos a componentes
const iconMap = {
  Target,
  Brain,
  MapPin,
  ShoppingBag,
}

export default function WhyEffective() {
  const { whyEffective } = homeData

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{whyEffective.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{whyEffective.description}</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {whyEffective.reasons.map((reason) => {
              const IconComponent = iconMap[reason.icon as keyof typeof iconMap]

              return (
                <div key={reason.name} className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {IconComponent && <IconComponent className="h-8 w-8 text-primary" aria-hidden="true" />}
                  </div>
                  <dt className="text-xl font-semibold">{reason.name}</dt>
                  <dd className="mt-4 text-base text-muted-foreground">{reason.description}</dd>
                </div>
              )
            })}
          </dl>
        </div>
      </div>
    </section>
  )
}
