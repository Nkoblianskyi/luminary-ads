import Link from "next/link"
import { Button } from "@/components/ui/button"
import { proyectos } from "@/lib/proyectos"

export const metadata = {
  title: "Nuestros Proyectos | LuminaryAdsPubl",
  description:
    "Descubre nuestros casos de éxito y proyectos de marketing offline para las principales marcas en España.",
}

export default function ProyectosPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Nuestros Proyectos</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Descubre cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos con estrategias innovadoras y
            efectivas.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl space-y-16">
          {proyectos.map((proyecto, index) => (
            <div
              key={proyecto.id}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="overflow-hidden rounded-lg">
                  <div
                    className="aspect-[4/3] w-full bg-cover bg-center transition-transform duration-300 hover:scale-105"
                    style={{ backgroundImage: `url(${proyecto.imagen})` }}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {proyecto.categoria}
                  </div>
                  <h2 className="text-2xl font-bold">{proyecto.titulo}</h2>
                  <p className="text-muted-foreground">{proyecto.descripcion}</p>
                  <div className="flex items-center gap-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Cliente:</span>
                      <span className="ml-2 font-medium">{proyecto.cliente}</span>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Año:</span>
                      <span className="ml-2 font-medium">{proyecto.año}</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button asChild>
                      <Link href={`/proyectos/${proyecto.slug}`}>Ver Detalles</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
