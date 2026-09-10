import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { POSTS } from "@/features/blog/lib/posts";

export const metadata: Metadata = {
  title: "Hotel Blog & Travel Guides",
  description:
    "News, guides and travel tips about staying in Greater Noida near India Expo Centre & Mart — hotels, business travel, transport and local landmarks. Read from The Glam by Sandane Homes.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog & Guides" }]}
        title="Blog & Travel Guides"
        subtitle="Practical, honest guides for business travellers and exhibition visitors in Greater Noida."
        height="h-[45vh] min-h-[360px]"
        overlayClass="bg-adani-blue opacity-70"
        bgImageStyle={{ backgroundImage: "url(/images/01.jpg)" }}
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map((post) => (
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
                  <h2 className="text-xl font-bold font-heading text-adani-dark mb-3 leading-snug group-hover:text-adani-blue transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">{post.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400 font-bold mb-5">
                    <span className="inline-flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" /> {post.date}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readMinutes} min read</span>
                  </div>
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
    </>
  );
}