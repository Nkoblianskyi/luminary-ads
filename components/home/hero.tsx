import Link from "next/link"
import { Button } from "@/components/ui/button"
import { homeData } from "@/lib/data"

export default function Hero() {
  const { hero } = homeData

  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {hero.title.split(" ").map((word, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="text-primary">
                  {word}
                </span>
              ) : (
                <span key={i}>{word} </span>
              ),
            )}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">{hero.description}</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
              <Link href={hero.primaryButton.url}>{hero.primaryButton.text}</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={hero.secondaryButton.url}>{hero.secondaryButton.text}</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-purple-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  )
}
