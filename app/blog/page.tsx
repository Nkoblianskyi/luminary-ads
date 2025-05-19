import Link from "next/link"
import { articles, articlesAdicionales } from "@/lib/data"
import { formatDate } from "@/lib/utils"

export const metadata = {
  title: "Blog | LuminaryAdsPubl",
  description: "Descubre las últimas tendencias y estrategias en marketing offline en nuestro blog especializado.",
}

export default function BlogPage() {
  // Combinar los artículos originales con los adicionales
  const allArticles = [...articles, ...articlesAdicionales]

  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Blog</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Descubre las últimas tendencias y estrategias en marketing offline en nuestro blog especializado.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl space-y-16">
          {allArticles.map((article, index) => (
            <div
              key={article.id}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="overflow-hidden rounded-lg">
                  <div
                    className="aspect-[16/9] w-full rounded-lg bg-cover bg-center transition-transform duration-300 hover:scale-105"
                    style={{
                      backgroundImage: `url(${article.image})`,
                    }}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="space-y-4">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={article.date} className="text-muted-foreground">
                      {formatDate(article.date)}
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600">
                      {article.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold group-hover:text-primary">
                    <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                  </h2>
                  <p className="text-muted-foreground">{article.excerpt}</p>
                  <div className="pt-4">
                    <Link href={`/blog/${article.slug}`} className="text-primary hover:underline font-medium">
                      Leer más
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
