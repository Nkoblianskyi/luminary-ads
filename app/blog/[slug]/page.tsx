import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { articles, articlesAdicionales } from "@/lib/data"
import { formatDate } from "@/lib/utils"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Combinar los artículos originales con los adicionales
const allArticles = [...articles, ...articlesAdicionales]

export function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }))
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const article = allArticles.find((article) => article.slug === params.slug)

  if (!article) {
    return {
      title: "Artículo no encontrado | LuminaryAdsPubl",
      description: "El artículo que estás buscando no existe.",
    }
  }

  return {
    title: `${article.title} | LuminaryAdsPubl`,
    description: article.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const article = allArticles.find((article) => article.slug === params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/blog" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al Blog
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center gap-x-4 text-sm">
                <time dateTime={article.date} className="text-muted-foreground">
                  {formatDate(article.date)}
                </time>
                <span className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600">
                  {article.category}
                </span>
              </div>
              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{article.title}</h1>
              <div className="mt-4 flex items-center">
                <div className="text-sm">
                  <p className="font-semibold">{article.author}</p>
                </div>
              </div>
            </div>

            <div className="relative w-full mb-8">
              <div
                className="aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover"
                style={{
                  backgroundImage: `url(${article.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "400px",
                }}
              />
            </div>

            <div className="prose prose-lg max-w-none">
              {article.content.map((block, index) => {
                // Renderizar diferentes tipos de bloques de contenido
                switch (block.type) {
                  case "paragraph":
                    return (
                      <p key={index} className="my-4">
                        {block.content}
                      </p>
                    )
                  case "heading":
                    if (block.level === 1) {
                      return (
                        <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                          {block.content}
                        </h1>
                      )
                    } else if (block.level === 2) {
                      return (
                        <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                          {block.content}
                        </h2>
                      )
                    } else if (block.level === 3) {
                      return (
                        <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                          {block.content}
                        </h3>
                      )
                    }
                    return null
                  case "list":
                    if (block.style === "unordered") {
                      return (
                        <ul key={index} className="list-disc pl-6 my-4">
                          {block.items.map((item, i) => (
                            <li key={i} className="mb-2">
                              {item}
                            </li>
                          ))}
                        </ul>
                      )
                    } else if (block.style === "ordered") {
                      return (
                        <ol key={index} className="list-decimal pl-6 my-4">
                          {block.items.map((item, i) => (
                            <li key={i} className="mb-2">
                              {item}
                            </li>
                          ))}
                        </ol>
                      )
                    }
                    return null
                  default:
                    return null
                }
              })}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold mb-4">Artículos relacionados</h3>
                <div className="space-y-4">
                  {allArticles
                    .filter((a) => a.id !== article.id && a.category === article.category)
                    .slice(0, 3)
                    .map((relatedArticle) => (
                      <div key={relatedArticle.id} className="flex items-start">
                        <div
                          className="flex-shrink-0 h-12 w-12 rounded bg-cover bg-center mr-3"
                          style={{ backgroundImage: `url(${relatedArticle.image})` }}
                        />
                        <div>
                          <Link
                            href={`/blog/${relatedArticle.slug}`}
                            className="text-sm font-medium hover:text-primary"
                          >
                            {relatedArticle.title}
                          </Link>
                          <p className="text-xs text-muted-foreground mt-1">{formatDate(relatedArticle.date)}</p>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="mt-6 pt-4 border-t">
                  <Link href="/blog" className="text-sm text-primary hover:underline">
                    Ver todos los artículos
                  </Link>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold mb-4">Categorías</h3>
                <div className="space-y-2">
                  {Array.from(new Set(allArticles.map((a) => a.category))).map((category) => (
                    <div key={category} className="flex justify-between items-center">
                      <span className="text-sm">{category}</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {allArticles.filter((a) => a.category === category).length}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
