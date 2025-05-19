import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Página no encontrada</h2>
      <p className="mt-4 max-w-md text-muted-foreground">
        Lo sentimos, la página que estás buscando no existe o ha sido movida a otra ubicación.
      </p>
      <div className="mt-8 flex gap-4">
        <Button asChild>
          <Link href="/">Volver al Inicio</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contacto">Contactar</Link>
        </Button>
      </div>
    </div>
  )
}
