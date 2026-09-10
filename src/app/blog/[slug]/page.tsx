import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Clock, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { BreadcrumbSchema } from "@/components/seo/Schema";
import { SITE, CONTACT } from "@/lib/config/site";
import { getPost, getRelatedPosts, POSTS } from "@/features/blog/lib/posts";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) {
    return { title: "Blog & Travel Guides" };
  }
  const url = `${SITE.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      images: [{ url: `${SITE.url}${post.image}`, alt: post.imageAlt }],
      url,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return notFound();

  const url = `${SITE.url}/blog/${post.slug}`;
  const related = getRelatedPosts(post.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${SITE.url}${post.image}`,
    datePublished: `${post.date}T09:00:00+05:30`,
    dateModified: `${post.date}T09:00:00+05:30`,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: `${SITE.url}/images/glamlogo.png` } },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE.url },
          { name: "Blog & Guides", url: `${SITE.url}/blog` },
          { name: post.title, url },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog & Guides", href: "/blog" }, { label: post.category }]}
        title={post.title}
        subtitle={post.description}
        height="h-[50vh] min-h-[400px]"
        bgImageStyle={{ backgroundImage: `url(${post.image})` }}
      />

      <section className="py-24 bg-white">
        <div className="container max-w-3xl">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 font-bold mb-8">
            <span className="text-adani-orange uppercase tracking-wider">{post.category}</span>
            <span className="inline-flex items-center gap-1.5"><CalendarDays className="w-4 h-4" /> {post.date}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readMinutes} min read</span>
          </div>

          <p className="text-2xl text-gray-700 font-body leading-relaxed mb-12">{post.intro}</p>

          <div className="space-y-12">
            {post.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-3xl font-bold font-heading text-adani-dark mb-4">{section.heading}</h2>
                <p className="text-lg text-gray-600 font-body leading-relaxed mb-4">{section.body}</p>
                {section.list && (
                  <ul className="space-y-3">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-700">
                        <span className="text-adani-orange font-bold mt-0.5">&rsaquo;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-adani-dark text-white rounded-3xl p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">Plan Your Stay at The Glam</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Explore our rooms, check direct availability and book your Greater Noida stay near India Expo Centre.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/rooms" className="inline-flex items-center gap-3 bg-adani-orange text-white px-8 py-4 font-bold rounded-full transition-colors uppercase tracking-wide text-sm">
                View Rooms <ArrowRight className="w-5 h-5" />
              </Link>
              <a href={CONTACT.telephoneHref} className="inline-flex items-center gap-3 bg-adani-green hover:bg-adani-dark text-white px-8 py-4 font-bold rounded-full transition-colors uppercase tracking-wide text-sm">
                <Phone className="w-5 h-5" /> Call Us
              </a>
              <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border-2 border-white text-white hover:bg-white hover:text-adani-dark px-8 py-4 font-bold rounded-full transition-colors uppercase tracking-wide text-sm">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </div>

          <nav className="mt-12 text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 font-bold text-adani-blue uppercase tracking-wide text-sm hover:text-adani-orange transition-colors">
              &larr; All Blog &amp; Guides
            </Link>
          </nav>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="container">
            <h2 className="text-3xl font-bold font-heading text-adani-dark mb-10 text-center">Continue Reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {related.map((relatedPost) => (
                <article key={relatedPost.slug} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col">
                  <Link href={`/blog/${relatedPost.slug}`} className="block relative aspect-video bg-gray-100 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${relatedPost.image})` }}
                      role="img"
                      aria-label={relatedPost.imageAlt}
                    />
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-adani-orange mb-2">{relatedPost.category}</p>
                    <h3 className="text-lg font-bold font-heading text-adani-dark mb-2 leading-snug">
                      <Link href={`/blog/${relatedPost.slug}`} className="group-hover:text-adani-blue transition-colors">{relatedPost.title}</Link>
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{relatedPost.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}