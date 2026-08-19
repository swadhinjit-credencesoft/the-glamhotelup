import type { Metadata } from "next";
import { MapPin, Phone, Navigation, Clock } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { BreadcrumbSchema } from "@/components/seo/Schema";
import { CONTACT, MAPS, SITE } from "@/lib/data/site";
import { LOCATION_INTRO } from "@/lib/data/location";
import { NEARBY_ATTRACTIONS } from "@/lib/data/rooms";

export const metadata: Metadata = {
  title: "Hotel Near India Expo Centre Greater Noida",
  description:
    "The Glam is located in Ansal Golf Link-1, Greater Noida — near India Expo Centre & Mart, Knowledge Park metro, hospitals and Pari Chowk. Check in from 12:00 PM, check out by 11:00 AM.",
};

export default function LocationPage() {
  const breadcrumbs = [
    { name: "Home", url: SITE.url },
    { name: "Location", url: `${SITE.url}/location` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Location" }]}
        title="Location"
        subtitle="Ansal Golf Link-1, Greater Noida — near India Expo Centre & Mart."
        height="h-[55vh] min-h-[450px]"
        bgImageStyle={{ backgroundImage: "url(/homehero3.avif)" }}
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-adani-dark mb-8 leading-tight">{LOCATION_INTRO.heading}</h2>
            <p className="text-xl text-gray-600 font-body leading-relaxed">{LOCATION_INTRO.paragraph}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Info */}
            <div className="space-y-8">
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-adani-blue flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold font-heading text-adani-dark mb-2">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {CONTACT.addressLines.map((line, i) => (<span key={i}>{line}<br /></span>))}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-adani-blue flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold font-heading text-adani-dark mb-2">Check-in & Check-out</h3>
                    <p className="text-gray-600">Check-in: {SITE.checkIn} • Check-out: {SITE.checkOut}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <Phone className="w-8 h-8 text-adani-blue flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold font-heading text-adani-dark mb-2">Contact</h3>
                    <p className="text-gray-600 mb-4">
                      <a href={CONTACT.telephoneHref} className="font-bold text-adani-blue hover:text-adani-orange">{CONTACT.telephone}</a>
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a href={CONTACT.telephoneHref} className="inline-flex items-center gap-2 bg-adani-blue hover:bg-adani-orange text-white px-6 py-3 font-bold rounded-full transition-colors text-sm uppercase tracking-wide">
                        <Phone className="w-4 h-4" /> Call Now
                      </a>
                      <a href={MAPS.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-adani-blue text-adani-blue hover:bg-adani-blue hover:text-white px-6 py-3 font-bold rounded-full transition-colors text-sm uppercase tracking-wide">
                        <Navigation className="w-4 h-4" /> Get Directions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <iframe
                title="The Glam location map"
                src={MAPS.embedUrl}
                width="100%"
                height="480"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden" id="nearby">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/04.jpg)" }}
        />
        <div className="absolute inset-0 bg-adani-dark/85" />
        <div className="relative z-10 container">
          <h2 className="text-4xl font-bold font-heading text-white mb-6 text-center">Nearby Attractions</h2>
          <p className="text-gray-300 text-center mb-12">Distances are approximate and vary by route.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEARBY_ATTRACTIONS.map((place) => (
              <div key={place.name} className="group relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${place.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-adani-dark via-adani-dark/60 to-adani-dark/20" />
                <div className="relative z-10 p-8 min-h-[220px] flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wide px-2 py-1 rounded bg-adani-blue/20 text-white">{place.category}</span>
                    <span className="text-sm font-bold text-adani-orange">{place.distance}</span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white mb-3">{place.name}</h3>
                  <p className="text-gray-100 text-sm leading-relaxed">{place.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
