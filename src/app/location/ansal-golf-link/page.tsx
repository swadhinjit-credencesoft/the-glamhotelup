import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Navigation, TrainFront } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { BreadcrumbSchema } from "@/components/seo/Schema";
import { SITE, CONTACT, MAPS } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Hotel in Ansal Golf Link, Greater Noida",
  description:
    "The Glam by Sandane Homes is located at Plot No. AE-189, Block A, Ansal Golf Link-1, Greater Noida — ~1.6 km from Knowledge Park II Metro, near India Expo Centre & Mart. Book direct.",
  keywords: [
    "hotel in Ansal Golf Link Greater Noida",
    "hotels in Ansal Golf Link 1",
    "stay in Ansal Golf Link",
    "boutique hotel Ansal Golf Link",
  ],
};

export default function LocationAnsalGolfLinkPage() {
  const breadcrumbs = [
    { name: "Home", url: SITE.url },
    { name: "Location", url: `${SITE.url}/location` },
    { name: "Ansal Golf Link", url: `${SITE.url}/location/ansal-golf-link` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Location", href: "/location" }, { label: "Ansal Golf Link" }]}
        title="Ansal Golf Link-1, Greater Noida"
        subtitle="Plot No. AE-189, Block A, Ansal Golf Link-1, Greater Noida, UP 201315"
        height="h-[50vh] min-h-[400px]"
        bgImageStyle={{ backgroundImage: "url(/images/01.jpg)" }}
      />

      <section className="py-24 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-adani-dark mb-6">A Calm Base in a Connected Spot</h2>
          <p className="text-xl text-gray-600 font-body leading-relaxed mb-8">
            The Glam sits in the leafy Ansal Golf Link-1 residential community — quieter than the
            main highways, yet well connected to everything a business or event traveller needs.
            Knowledge Park II Metro Station (~1.6 km) links you to Noida and Delhi, while India Expo
            Centre &amp; Mart is only ~1.5 km walk / ~2.5 km drive away.
          </p>

          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-adani-blue mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Our Address</h3>
                <p className="text-gray-600">
                  Plot No. AE-189, Block A, Ansal Golf Link-1, Greater Noida, Uttar Pradesh 201315.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <TrainFront className="w-6 h-6 text-adani-blue mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Metro Connectivity</h3>
                <p className="text-gray-600">
                  Knowledge Park II Metro Station (Aqua Line) is ~1.6 km away — a short auto or cab
                  ride to the hotel and a reliable route to Noida and Delhi.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Navigation className="w-6 h-6 text-adani-blue mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Nearby</h3>
                <p className="text-gray-600">
                  India Expo Centre &amp; Mart (~1.5 km walk / ~2.5 km drive), Pari Chowk (~3–4 km) and
                  the Buddh International Circuit (F1 track, ~4.3 km).
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-adani-blue mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Directions</h3>
                <a href={MAPS.directionsUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-adani-blue hover:text-adani-orange">
                  Get directions on Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold font-heading text-adani-dark mb-4">Why guests choose this area</h3>
            <p className="text-gray-600 leading-relaxed">
              A relaxed, low-traffic neighbourhood with easy parking, green surroundings and quick
              access to Greater Noida&apos;s business, exhibition and education hubs — from India Expo
              Centre &amp; Mart to Knowledge Park institutions and hospitals.
            </p>
          </div>

          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="https://bookone.io/The-Glam?bookingEngine=true" className="inline-flex items-center gap-3 bg-adani-blue hover:bg-adani-orange text-white px-8 py-4 font-bold rounded-full transition-colors uppercase tracking-wide text-sm">
                Book Your Stay <ArrowRight className="w-5 h-5" />
              </a>
              <Link href="/location" className="inline-flex items-center gap-3 border-2 border-adani-blue text-adani-blue hover:bg-adani-blue hover:text-white px-8 py-4 font-bold rounded-full transition-colors uppercase tracking-wide text-sm">
                View Nearby Places
              </Link>
            </div>
            <p className="text-gray-500">
              Questions? Call <a href={CONTACT.telephoneHref} className="font-bold text-adani-blue">{CONTACT.telephone}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}