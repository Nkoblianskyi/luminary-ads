import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"
import { articles } from "@/lib/data"

export default function LatestArticles() {
  // Only show first 3 articles on homepage
  const latestArticles = articles.slice(0, 3)

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Últimos Artículos</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Descubre las últimas tendencias y estrategias en marketing offline.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {latestArticles.map((article) => (
            <article key={article.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <div
                  className="aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[3/2]"
                  style={{
                    backgroundImage: `url(${article.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "200px",
                  }}
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={article.date} className="text-muted-foreground">
                    {formatDate(article.date)}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600">
                    {article.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-primary">
                    <Link href={`/blog/${article.slug}`}>
                      <span className="absolute inset-0" />
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">{article.excerpt}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/blog">
              Ver Todos los Artículos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
