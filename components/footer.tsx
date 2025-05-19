import Link from "next/link"
import { MapPin, Phone, Mail, Sparkles } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="space-y-8 md:w-1/2 lg:w-1/3">
          <div>
            <h2 className="text-2xl font-bold flex items-center">
              <Sparkles className="h-5 w-5 text-primary mr-2" />
              LuminaryAdsPubl
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Especialistas en marketing offline para aumentar la visibilidad de tu marca en España.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm">Calle de Velázquez, 12, 28001 Madrid, España</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-sm">+34 673 214 891</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm">info@luminaryads.com</span>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-0 grid grid-cols-2 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold leading-6">Empresa</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <Link href="/sobre-nosotros" className="text-sm text-muted-foreground hover:text-primary">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/logros" className="text-sm text-muted-foreground hover:text-primary">
                  Logros
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-sm text-muted-foreground hover:text-primary">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-sm text-muted-foreground hover:text-primary">
                  Proyectos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6">Recursos</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-muted-foreground hover:text-primary">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6">Legal</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li>
                <Link href="/politica-privacidad" className="text-sm text-muted-foreground hover:text-primary">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies" className="text-sm text-muted-foreground hover:text-primary">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl border-t border-gray-200 px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} LuminaryAdsPubl. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
