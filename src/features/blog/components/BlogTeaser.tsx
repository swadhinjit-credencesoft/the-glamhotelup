import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { POSTS } from "@/features/blog/lib/posts";

export function BlogTeaser() {
  const latest = POSTS.slice(0, 3);
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-adani-orange mb-2">Blog &amp; Guides</p>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-adani-dark">Plan Like a Local</h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-adani-blue font-bold uppercase tracking-wide text-sm hover:text-adani-orange transition-colors">
            All Guides <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latest.map((post) => (
            <article key={post.slug} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
              <Link href={`/blog/${post.slug}`} className="block relative aspect-video bg-gray-100 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${post.image})` }}
                  role="img"
                  aria-label={post.imageAlt}
                />
              </Link>
              <div className="p-8 flex flex-col flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-adani-orange mb-3">{post.category}</p>
                <h3 className="text-xl font-bold font-heading text-adani-dark mb-3 leading-snug">
                  <Link href={`/blog/${post.slug}`} className="group-hover:text-adani-blue transition-colors">{post.title}</Link>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-adani-blue font-bold uppercase tracking-wide text-sm group-hover:gap-3 transition-all"
                >
                  Read Guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}