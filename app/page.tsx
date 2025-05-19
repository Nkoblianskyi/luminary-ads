import Hero from "@/components/home/hero"
import WhatWeDo from "@/components/home/what-we-do"
import WhyEffective from "@/components/home/why-effective"
import NumbersSection from "@/components/home/numbers-section"
import FeaturedServices from "@/components/home/featured-services"
import ProyectosDestacados from "@/components/home/proyectos-destacados"
import CustomerJourney from "@/components/home/customer-journey"
import LatestArticles from "@/components/home/latest-articles"
import ContactCta from "@/components/home/contact-cta"
import WhyChooseUs from "@/components/home/why-choose-us"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <Hero />
      <WhatWeDo />
      <WhyEffective />
      <NumbersSection />
      <CustomerJourney />
      <FeaturedServices />
      <ProyectosDestacados />
      <WhyChooseUs />
      <LatestArticles />
      <ContactCta />
    </div>
  )
}
