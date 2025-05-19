"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { homeData } from "@/lib/data"
import { Package, Users, Store, Building } from "lucide-react"

// Mapeo de nombres de iconos a componentes
const iconMap = {
  Package,
  Users,
  Store,
  Building,
}

export default function NumbersSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { numbersSection } = homeData

  return (
    <section ref={ref} className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{numbersSection.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{numbersSection.description}</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {numbersSection.stats.map((stat) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap]

            return (
              <div key={stat.id} className="flex flex-col items-center bg-white p-8 rounded-lg shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  {IconComponent && <IconComponent className="h-8 w-8 text-primary" aria-hidden="true" />}
                </div>
                <div className="text-4xl font-bold tracking-tight">
                  {inView ? <CountUp end={stat.value} prefix={stat.value > 1000 ? "+" : ""} /> : "0"}
                </div>
                <div className="mt-4 text-base text-center text-muted-foreground">{stat.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CountUp({ end, duration = 2000, prefix = "" }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp
      }

      const progress = timestamp - startTimeRef.current
      const increment = Math.min(progress / duration, 1) * end

      countRef.current = Math.floor(increment)
      setCount(countRef.current)

      if (progress < duration) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    const frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [end, duration])

  return (
    <>
      {prefix}
      {count}
    </>
  )
}
