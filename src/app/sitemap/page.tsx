import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page/PageHero";
import { SITEMAP_PAGES } from "@/lib/data/pages";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Sitemap of the The Glam website.",
};

export default function SitemapPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Sitemap" }]}
        title="Sitemap"
        height="h-[40vh] min-h-[320px]"
        overlayClass="bg-adani-blue opacity-80"
      />
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SITEMAP_PAGES.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="bg-gray-50 hover:bg-adani-blue/5 border border-gray-100 rounded-xl p-5 font-bold text-adani-dark hover:text-adani-blue transition-colors"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
