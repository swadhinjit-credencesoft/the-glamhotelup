import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { BreadcrumbSchema } from "@/components/seo/Schema";
import { SITE } from "@/lib/data/site";
import { OFFERS, OFFERS_NOTE } from "@/lib/data/offers";

export const metadata: Metadata = {
  title: "Offers & Enquiries",
  description:
    "Corporate stays, expo stays, long-stay enquiries and direct booking assistance at The Glam, Greater Noida.",
};

export default function OffersPage() {
  const breadcrumbs = [
    { name: "Home", url: SITE.url },
    { name: "Offers", url: `${SITE.url}/offers` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Offers" }]}
        title="Offers & Enquiries"
        subtitle="Corporate, expo, long-stay and direct booking assistance at The Glam."
        height="h-[50vh] min-h-[400px]"
        overlayClass="bg-adani-blue opacity-80"
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="space-y-10">
            {OFFERS.map((offer, i) => (
              <div key={offer.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                <div className={`relative rounded-3xl overflow-hidden aspect-[16/9] shadow-lg lg:[direction:ltr] ${i % 2 === 1 ? "lg:ml-auto" : ""}`}>
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${offer.img})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-adani-dark/60 to-transparent" />
                  <span className="absolute top-5 left-5 bg-white text-adani-blue text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full">
                    {offer.eyebrow}
                  </span>
                </div>
                <div className="lg:[direction:ltr]">
                  <h3 className="text-3xl lg:text-4xl font-heading font-bold text-adani-dark mb-4">{offer.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{offer.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {offer.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="w-5 h-5 text-adani-green mt-0.5 flex-shrink-0" />
                        <span className="font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={offer.link}
                    className="inline-flex items-center gap-3 bg-adani-blue hover:bg-adani-orange text-white px-8 py-4 font-bold rounded transition-colors uppercase tracking-wide text-sm group"
                  >
                    {offer.cta} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-16 text-sm text-gray-500 text-center max-w-3xl mx-auto">{OFFERS_NOTE}</p>
        </div>
      </section>
    </>
  );
}
