import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Navigation, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { BreadcrumbSchema } from "@/components/seo/Schema";
import { SITE, CONTACT, MAPS } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Hotel Near India Expo Centre, Greater Noida",
  description:
    "The Glam by Sandane Homes is located ~1.5 km walk / ~2.5 km drive from India Expo Centre & Mart, Greater Noida — the ideal base for exhibition visitors and business delegates. Book direct.",
  keywords: [
    "hotel near India Expo Centre Greater Noida",
    "accommodation near India Expo Mart",
    "stay near India Expo Centre for business",
  ],
};

export default function LocationIndiaExpoCentrePage() {
  const breadcrumbs = [
    { name: "Home", url: SITE.url },
    { name: "Location", url: `${SITE.url}/location` },
    { name: "India Expo Centre", url: `${SITE.url}/location/india-expo-centre` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Location", href: "/location" }, { label: "India Expo Centre" }]}
        title="India Expo Centre & Mart"
        subtitle="~1.5 km walk / ~2.5 km drive from The Glam"
        height="h-[50vh] min-h-[400px]"
        bgImageStyle={{ backgroundImage: "url(/images/04.jpg)" }}
      />

      <section className="py-24 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-adani-dark mb-6">Stay Minutes from the Venue</h2>
          <p className="text-xl text-gray-600 font-body leading-relaxed mb-8">
            India Expo Centre &amp; Mart is one of Greater Noida&apos;s leading venues for
            exhibitions, trade fairs and corporate events. The Glam&apos;s address in Ansal Golf
            Link-1 puts you close enough to walk or take a short drive to the venue, so you can
            spend less time travelling and more time on the show floor.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center">
              <MapPin className="w-8 h-8 text-adani-blue mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-adani-dark mb-2">Distance</h3>
              <p className="text-gray-600">~1.5 km walk / ~2.5 km drive</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center">
              <Navigation className="w-8 h-8 text-adani-blue mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-adani-dark mb-2">Directions</h3>
              <a href={MAPS.directionsUrl} target="_blank" rel="noopener noreferrer" className="text-adani-blue font-bold hover:text-adani-orange">Get directions</a>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center">
              <MapPin className="w-8 h-8 text-adani-blue mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-adani-dark mb-2">Ideal For</h3>
              <p className="text-gray-600">Exhibitors, delegates and event visitors</p>
            </div>
          </div>

          <div className="bg-gray-50 border-l-4 border-adani-orange rounded-r-xl p-8 mb-12">
            <h3 className="text-2xl font-bold font-heading text-adani-dark mb-4">Why stay with us for an event?</h3>
            <ul className="space-y-3 text-gray-700">
              <li>Free private parking for guests with display material or rental cars.</li>
              <li>High-speed Wi-Fi and work desks to stay productive between sessions.</li>
              <li>Check-in from 2:00 PM and check-out by 12:00 PM to fit event schedules.</li>
              <li>Close to Knowledge Park II Metro Station (~1.6 km) for easy city access.</li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8">
              Planning to attend an exhibition? <a href="tel:+918796321915" className="font-bold text-adani-blue hover:text-adani-orange">{CONTACT.telephone}</a> or{" "}
              <Link href="/hotel-near-india-expo-centre" className="font-bold text-adani-blue hover:text-adani-orange">read our India Expo Centre hotel guide</Link>.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://bookone.io/The-Glam?bookingEngine=true" className="inline-flex items-center gap-3 bg-adani-blue hover:bg-adani-orange text-white px-8 py-4 font-bold rounded-full transition-colors uppercase tracking-wide text-sm">
                Book Your Stay <ArrowRight className="w-5 h-5" />
              </a>
              <a href={CONTACT.telephoneHref} className="inline-flex items-center gap-3 border-2 border-adani-blue text-adani-blue hover:bg-adani-blue hover:text-white px-8 py-4 font-bold rounded-full transition-colors uppercase tracking-wide text-sm">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}