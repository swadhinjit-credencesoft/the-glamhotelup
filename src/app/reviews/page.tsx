import type { Metadata } from "next";
import { Star } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { BreadcrumbSchema } from "@/components/seo/Schema";
import { SITE } from "@/lib/data/site";
import { REVIEW_STATS, REVIEW_THEMES, REVIEW_QUOTES, REVIEW_DISCLAIMER } from "@/lib/data/reviews";
import type { LucideIcon } from "lucide-react";
import { Sparkles, Smile, Leaf, MapPin, Wallet, BedDouble } from "lucide-react";

const THEME_ICONS: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  smile: Smile,
  leaf: Leaf,
  "map-pin": MapPin,
  wallet: Wallet,
  "bed-double": BedDouble,
};

export const metadata: Metadata = {
  title: "Guest Reviews",
  description:
    "The Glam is rated 4.7/5 on Google with 53 reviews. Guests praise our cleanliness, helpful staff, peaceful environment, location and comfortable rooms.",
};

export default function ReviewsPage() {
  const breadcrumbs = [
    { name: "Home", url: SITE.url },
    { name: "Guest Reviews", url: `${SITE.url}/reviews` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Guest Reviews" }]}
        title="Guest Reviews"
        subtitle="Rated 4.7/5 on Google by 53 reviewers."
        height="h-[50vh] min-h-[400px]"
        overlayClass="bg-adani-dark opacity-80"
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            <div className="bg-gray-50 border-t-4 border-adani-orange rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="flex items-center gap-1 text-adani-orange mb-3">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
              </div>
              <h3 className="text-4xl font-barlow font-bold text-adani-blue mb-2">{REVIEW_STATS.googleRating} / 5</h3>
              <p className="text-gray-600 uppercase font-bold text-sm tracking-wider">Google Rating</p>
              <p className="text-gray-400 text-sm mt-2">{REVIEW_STATS.googleReviews} reviews</p>
            </div>
            {REVIEW_STATS.platforms.slice(1).map((platform) => (
              <div key={platform.name} className="bg-gray-50 rounded-2xl p-8 flex flex-col items-center text-center">
                <h3 className="text-4xl font-barlow font-bold text-adani-blue mb-2">{platform.score}</h3>
                <p className="text-gray-600 uppercase font-bold text-sm tracking-wider">{platform.name}</p>
                <p className="text-gray-400 text-sm mt-2">{platform.note}</p>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-bold font-heading text-adani-dark mb-12 text-center">What Guests Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {REVIEW_THEMES.map((theme) => {
              const Icon = THEME_ICONS[theme.icon] ?? Sparkles;
              return (
                <div key={theme.title} className="p-8 border border-gray-100 shadow-md rounded-2xl flex flex-col items-center text-center hover:shadow-xl transition-shadow bg-gray-50">
                  <div className="w-16 h-16 rounded-full bg-adani-blue text-white flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-adani-dark mb-4">{theme.title}</h3>
                  <p className="text-gray-600 font-body">{theme.desc}</p>
                </div>
              );
            })}
          </div>

          <h2 className="text-4xl font-bold font-heading text-adani-dark mb-12 text-center">Verified Guest Voices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEW_QUOTES.map((review) => (
              <div key={review.id} className="rounded-2xl border border-gray-100 shadow-sm p-8 h-full flex flex-col bg-gray-50/50">
                <div className="flex items-center gap-1 mb-4 text-adani-orange">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-700 font-body leading-relaxed flex-1 italic mb-6">&quot;{review.quote}&quot;</p>
                <div className="pt-5 border-t border-gray-100">
                  <p className="font-bold text-adani-dark">{review.author}</p>
                  <p className="text-gray-400 font-bold text-sm">{review.context}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-16 text-sm text-gray-500 text-center max-w-3xl mx-auto">{REVIEW_DISCLAIMER}</p>
        </div>
      </section>
    </>
  );
}
