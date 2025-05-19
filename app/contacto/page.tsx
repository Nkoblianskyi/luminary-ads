"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function ContactPage() {
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false)

  const formSchema = z.object({
    name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
    email: z.string().email({ message: "Por favor, introduce un email válido." }),
    phone: z.string().min(9, { message: "El teléfono debe tener al menos 9 dígitos." }),
    company: z.string().optional(),
    message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
    acceptTerms: z.literal(true, {
      errorMap: () => ({ message: "Debes aceptar la política de privacidad." }),
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      acceptTerms: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setIsSubmitDialogOpen(true)
    form.reset()
  }

  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contacto</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Estamos aquí para ayudarte. Contáctanos para cualquier consulta o para solicitar un presupuesto
            personalizado.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">Información de Contacto</h2>
              <p className="mt-4 text-base text-muted-foreground">
                Puedes contactarnos a través del formulario o utilizando cualquiera de los siguientes medios.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">Dirección</h3>
                    <p className="mt-2 text-muted-foreground">Calle de Velázquez, 12, 28001 Madrid, España</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">Teléfono</h3>
                    <p className="mt-2 text-muted-foreground">+34 673 214 891</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="mt-2 text-muted-foreground">info@luminaryads.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold">Horario de Atención</h2>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <p>Lunes a Viernes: 9:00 - 18:00</p>
                  <p>Sábados: 10:00 - 14:00</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-lg border bg-card p-8">
                <h2 className="text-2xl font-bold">Envíanos un Mensaje</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Completa el formulario y te responderemos a la mayor brevedad posible.
                </p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre*</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu nombre" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email*</FormLabel>
                          <FormControl>
                            <Input placeholder="tu@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono*</FormLabel>
                          <FormControl>
                            <Input placeholder="+34 600 000 000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Empresa</FormLabel>
                          <FormControl>
                            <Input placeholder="Nombre de tu empresa (opcional)" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje*</FormLabel>
                          <FormControl>
                            <Textarea placeholder="¿En qué podemos ayudarte?" className="min-h-32" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="acceptTerms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              Acepto la{" "}
                              <a href="/politica-privacidad" className="text-primary hover:underline">
                                política de privacidad
                              </a>
                              *
                            </FormLabel>
                            <FormDescription>
                              Tus datos serán tratados según nuestra política de privacidad.
                            </FormDescription>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full">
                      Enviar Mensaje
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isSubmitDialogOpen} onOpenChange={setIsSubmitDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <CheckCircle2 className="mr-2 h-6 w-6 text-green-500" />
              Mensaje Enviado
            </DialogTitle>
            <DialogDescription>
              Gracias por contactar con nosotros. Hemos recibido tu mensaje y te responderemos a la mayor brevedad
              posible.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button onClick={() => setIsSubmitDialogOpen(false)}>Aceptar</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
