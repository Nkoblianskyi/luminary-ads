import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { proyectos } from "@/lib/proyectos"

interface ProyectoPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return proyectos.map((proyecto) => ({
    slug: proyecto.slug,
  }))
}

export function generateMetadata({ params }: ProyectoPageProps) {
  const proyecto = proyectos.find((p) => p.slug === params.slug)

  if (!proyecto) {
    return {
      title: "Proyecto no encontrado | LuminaryAdsPubl",
      description: "El proyecto que estás buscando no existe.",
    }
  }

  return {
    title: `${proyecto.titulo} | LuminaryAdsPubl`,
    description: proyecto.descripcion,
  }
}

export default function ProyectoPage({ params }: ProyectoPageProps) {
  const proyecto = proyectos.find((p) => p.slug === params.slug)

  if (!proyecto) {
    notFound()
  }

  // Proyectos relacionados (excluyendo el actual)
  const proyectosRelacionados = proyectos.filter((p) => p.id !== proyecto.id).slice(0, 3)

  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/proyectos" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Proyectos
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{proyecto.titulo}</h1>
            <p className="mt-2 text-xl text-muted-foreground">Cliente: {proyecto.cliente}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {proyecto.categoria}
              </span>
            </div>

            <div className="mt-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold">El Desafío</h2>
                <p className="mt-4 text-lg">
                  Nuestro cliente necesitaba aumentar la visibilidad de su marca y conectar con su público objetivo de
                  manera efectiva.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold">Nuestra Solución</h2>
                <p className="mt-4 text-lg">
                  Desarrollamos una estrategia integral de marketing offline que incluía{" "}
                  {proyecto.categoria.toLowerCase()}y otros elementos personalizados para maximizar el impacto.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold">Resultados</h2>
                <p className="mt-4 text-lg">
                  La campaña generó un aumento significativo en la notoriedad de marca y un incremento en las ventas,
                  superando las expectativas del cliente.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div className="overflow-hidden rounded-lg">
                <div
                  className="aspect-[4/3] w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${proyecto.imagen})` }}
                />
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold mb-4">Detalles del Proyecto</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Cliente:</span>
                    <span className="text-sm font-medium">{proyecto.cliente}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Año:</span>
                    <span className="text-sm font-medium">{proyecto.año}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Categoría:</span>
                    <span className="text-sm font-medium">{proyecto.categoria}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold mb-4">¿Te interesa un proyecto similar?</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Contáctanos para discutir cómo podemos ayudarte a alcanzar tus objetivos de marketing.
                </p>
                <Button className="w-full" asChild>
                  <Link href="/contacto">Solicitar Presupuesto</Link>
                </Button>
              </div>

              {proyectosRelacionados.length > 0 && (
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="text-lg font-semibold mb-4">Otros proyectos</h3>
                  <ul className="space-y-3">
                    {proyectosRelacionados.map((p) => (
                      <li key={p.id}>
                        <Link href={`/proyectos/${p.slug}`} className="text-sm hover:text-primary transition-colors">
                          {p.titulo}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t">
                    <Link href="/proyectos" className="text-sm text-primary hover:underline">
                      Ver todos los proyectos
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
