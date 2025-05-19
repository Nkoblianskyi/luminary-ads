import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Sobre Nosotros | LuminaryAdsPubl",
  description: "Conoce más sobre LuminaryAdsPubl, tu agencia de marketing offline en España.",
}

export default function AboutPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Sobre Nosotros</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Somos especialistas en marketing offline con más de 10 años de experiencia creando experiencias memorables
            para las marcas.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">Nuestra Historia</h2>
              <div className="mt-6 space-y-4 text-base text-muted-foreground">
                <p>
                  LuminaryAdsPubl nació en 2015 con una visión clara: devolver al marketing offline el protagonismo que
                  merece en un mundo cada vez más digital.
                </p>
                <p>
                  Fundada por un equipo de profesionales con amplia experiencia en marketing experiencial y retail,
                  nuestra agencia ha crecido hasta convertirse en un referente en el sector del marketing offline en
                  España.
                </p>
                <p>
                  A lo largo de estos años, hemos trabajado con más de 200 marcas de diversos sectores, desde
                  alimentación y bebidas hasta tecnología y moda, ayudándoles a conectar con sus clientes en el mundo
                  real.
                </p>
              </div>
            </div>
            <div>
              <div
                className="aspect-[4/3] w-full rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url(/12e9aff1764df39b155fffd23af8fd7a.jpg)`,
                  height: "100%",
                }}
              />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold">Nuestra Filosofía</h2>
            <div className="mt-6 space-y-4 text-base text-muted-foreground">
              <p>
                En LuminaryAdsPubl creemos firmemente en el poder del marketing tangible. En un mundo saturado de
                mensajes digitales, las experiencias físicas y sensoriales generan un impacto y recuerdo mucho más
                duradero.
              </p>
              <p>Nuestro enfoque se basa en tres pilares fundamentales:</p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold">Estrategia</h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  Cada acción de marketing debe responder a objetivos claros y medibles. Analizamos en profundidad el
                  mercado, la competencia y el consumidor para diseñar estrategias efectivas.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold">Creatividad</h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  La originalidad es clave para destacar. Nuestro equipo creativo desarrolla conceptos innovadores que
                  captan la atención y generan conversación en torno a la marca.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold">Resultados</h3>
                <p className="mt-4 text-sm text-muted-foreground">
                  Nos obsesiona la medición y optimización. Implementamos sistemas para cuantificar el impacto de
                  nuestras acciones y garantizar el máximo retorno de la inversión.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold">Nuestro Equipo</h2>
            <p className="mt-6 text-base text-muted-foreground">
              Contamos con un equipo multidisciplinar de profesionales especializados en diferentes áreas del marketing
              offline, desde expertos en merchandising hasta diseñadores de experiencias y analistas de datos.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Ana García",
                  role: "Directora General",
                  image: "/professional-woman-diverse.png",
                },
                {
                  name: "Carlos Rodríguez",
                  role: "Director Creativo",
                  image: "/creative-director.png",
                },
                {
                  name: "Laura Martínez",
                  role: "Directora de Operaciones",
                  image: "/operations-manager-woman.png",
                },
                {
                  name: "Miguel Sánchez",
                  role: "Director de Estrategia",
                  image: "/strategy-director.png",
                },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto h-40 w-40 overflow-hidden rounded-full">
                    <div
                      className="h-full w-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${member.image})` }}
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-lg bg-primary p-8 text-center text-white">
            <h2 className="text-2xl font-bold">¿Listo para impulsar tu marca?</h2>
            <p className="mt-4 text-white/80">
              Contáctanos hoy mismo y descubre cómo nuestras estrategias de marketing offline pueden ayudarte a alcanzar
              tus objetivos.
            </p>
            <Button size="lg" variant="secondary" className="mt-6" asChild>
              <Link href="/contacto">Contactar Ahora</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
