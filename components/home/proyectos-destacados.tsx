import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { proyectos } from "@/lib/proyectos"
import { Badge } from "@/components/ui/badge"

export default function ProyectosDestacados() {
  // Seleccionamos el primer proyecto como proyecto destacado principal
  const proyectoDestacado = proyectos[0]

  // Mostrar solo los siguientes 3 proyectos en la sección secundaria
  const proyectosSecundarios = proyectos.slice(1, 4)

  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nuestros Proyectos</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Descubre cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos con estrategias innovadoras y
            efectivas.
          </p>
        </div>

        {/* Proyecto destacado principal */}
        <div className="mt-16 mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <div
                className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                style={{
                  backgroundImage: `url(${proyectoDestacado.imagen})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100%",
                }}
              />
            </div>
            <div className="space-y-6">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {proyectoDestacado.categoria}
              </Badge>
              <h3 className="text-2xl font-bold">{proyectoDestacado.titulo}</h3>
              <p className="text-muted-foreground">{proyectoDestacado.descripcion}</p>
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-sm text-muted-foreground">Cliente:</span>
                  <span className="ml-2 font-medium">{proyectoDestacado.cliente}</span>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Año:</span>
                  <span className="ml-2 font-medium">{proyectoDestacado.año}</span>
                </div>
              </div>
              <Button asChild>
                <Link href={`/proyectos/${proyectoDestacado.slug}`}>
                  Ver Proyecto Completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Proyectos secundarios */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {proyectosSecundarios.map((proyecto) => (
            <div key={proyecto.id} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                <div
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${proyecto.imagen})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100%",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/0" />
              </div>
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold">{proyecto.titulo}</h3>
                <p className="mt-2 text-sm text-gray-200">{proyecto.cliente}</p>
                <Link
                  href={`/proyectos/${proyecto.slug}`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-white hover:text-primary transition-colors"
                >
                  Ver Proyecto
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/proyectos">
              Ver Todos los Proyectos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
