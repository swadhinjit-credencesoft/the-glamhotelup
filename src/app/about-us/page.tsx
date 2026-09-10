import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CounterNumber } from "@/components/ui/CounterNumber";
import { BreadcrumbSchema } from "@/components/seo/Schema";
import { ABOUT_INTRO, ABOUT_STATS, ABOUT_CARDS } from "@/features/about/lib/about";
import { CORPORATE, SITE } from "@/lib/config/site";

export const metadata: Metadata = {
  title: { absolute: "About The Glam by Sandane Homes | Greater Noida" },
  description:
    "The Glam is a stylish boutique hotel in Ansal Golf Link-1, Greater Noida — comfortable rooms, private bathrooms, high-speed Wi-Fi and a convenient location near India Expo Centre & Mart.",
};

export default function AboutUsPage() {
  const breadcrumbs = [
    { name: "Home", url: SITE.url },
    { name: "About Us", url: `${SITE.url}/about-us` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        title="About The Glam"
        subtitle="A stylish boutique hotel in Ansal Golf Link-1, Greater Noida."
        height="h-[60vh] min-h-[500px]"
        bgImageStyle={{ backgroundImage: "url(/images/opt/glam-64.jpg)" }}
      />

      <section className="py-16 sm:py-24 bg-white relative">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl max-lg:mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-adani-dark mb-6 sm:mb-8 leading-tight break-words">
              {ABOUT_INTRO.heading}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-body leading-relaxed mb-4 sm:mb-6">
              {ABOUT_INTRO.paragraph1}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-body leading-relaxed mb-6">
              {ABOUT_INTRO.paragraph2}
            </p>
            <div className="bg-gray-50 border-l-4 border-adani-orange p-6 sm:p-8 rounded-r-xl">
              <h3 className="font-bold font-heading text-adani-dark mb-2 text-lg sm:text-xl">{CORPORATE.name}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{CORPORATE.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-adani-blue text-white py-12 sm:py-16 border-y-8 border-adani-orange">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-white/20">
            {ABOUT_STATS.map(stat => (
              <div key={stat.id} className="flex flex-col animate-fade-up p-2">
                <CounterNumber
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={Number.isInteger(stat.value) ? 0 : 1}
                  className="text-3xl sm:text-4xl md:text-6xl text-white mb-2 tracking-tight font-bold"
                />
                <span className="text-xs sm:text-sm md:text-lg font-bold font-heading uppercase tracking-wide text-white/80">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {ABOUT_CARDS.map((card) => (
              <Link key={card.id} href={card.link} className="group block relative rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${card.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute p-6 sm:p-8 bottom-0 left-0 w-full">
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white flex items-center justify-between group-hover:text-adani-orange transition-colors">
                    {card.title}
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transform translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-adani-orange" />
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
