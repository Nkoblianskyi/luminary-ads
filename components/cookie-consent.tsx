"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="mx-auto max-w-3xl shadow-lg">
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-2">Uso de Cookies</h3>
          <p className="text-sm text-muted-foreground">
            Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada
            con sus preferencias mediante el análisis de sus hábitos de navegación. Si continúa navegando, consideramos
            que acepta su uso. Puede cambiar la configuración u obtener más información en nuestra{" "}
            <Link href="/politica-cookies" className="text-primary hover:underline">
              Política de Cookies
            </Link>
            .
          </p>
        </CardContent>
        <CardFooter className="flex justify-end gap-4">
          <Button variant="outline" asChild>
            <Link href="/politica-cookies">Más información</Link>
          </Button>
          <Button onClick={acceptCookies}>Aceptar</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
