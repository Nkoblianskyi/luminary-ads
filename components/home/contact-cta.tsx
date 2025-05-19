import Link from "next/link"
import { Button } from "@/components/ui/button"
import { homeData } from "@/lib/data"

export default function ContactCta() {
  const { contactCta } = homeData

  return (
    <section className="py-16 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{contactCta.title}</h2>
          <p className="mt-6 text-lg leading-8 text-white/80">{contactCta.description}</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" variant="secondary" asChild>
              <Link href={contactCta.buttonUrl}>Contacto</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
