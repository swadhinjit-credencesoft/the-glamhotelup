import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { BreadcrumbSchema } from "@/components/seo/Schema";
import { SITE, CONTACT, MAPS } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Hotel Near Pari Chowk, Greater Noida",
  description:
    "The Glam by Sandane Homes is ~3–4 km from Pari Chowk, Greater Noida — close to malls, restaurants and shopping, with easy access to India Expo Centre and the metro. Book direct.",
  keywords: [
    "hotel near Pari Chowk Greater Noida",
    "hotels near Pari Chowk",
    "stay near Pari Chowk for shopping",
  ],
};

export default function LocationPariChowkPage() {
  const breadcrumbs = [
    { name: "Home", url: SITE.url },
    { name: "Location", url: `${SITE.url}/location` },
    { name: "Pari Chowk", url: `${SITE.url}/location/pari-chowk` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Location", href: "/location" }, { label: "Pari Chowk" }]}
        title="Pari Chowk"
        subtitle="~3–4 km from The Glam — shopping, dining and Greater Noida's key landmark"
        height="h-[50vh] min-h-[400px]"
        bgImageStyle={{ backgroundImage: "url(/images/07.jpg)" }}
      />

      <section className="py-24 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-adani-dark mb-6">The Heart of Greater Noida</h2>
          <p className="text-xl text-gray-600 font-body leading-relaxed mb-8">
            Pari Chowk is Greater Noida&apos;s best-known landmark, surrounded by malls,
            restaurants and retail. Staying at The Glam in Ansal Golf Link-1 puts you ~3–4 km away —
            close enough for an easy evening out, while keeping your stay calm and quiet.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center">
              <ShoppingBag className="w-8 h-8 text-adani-blue mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-adani-dark mb-2">Shopping</h3>
              <p className="text-gray-600">Malls and retail options around the roundabout</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center">
              <UtensilsCrossed className="w-8 h-8 text-adani-blue mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-adani-dark mb-2">Dining</h3>
              <p className="text-gray-600">A wide range of restaurants and cafés nearby</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center">
              <MapPin className="w-8 h-8 text-adani-blue mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-adani-dark mb-2">Distance</h3>
              <p className="text-gray-600">~3–4 km from The Glam</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold font-heading text-adani-dark mb-4">Getting to Pari Chowk</h3>
              <p className="text-gray-600 mb-4">
                A short cab or auto ride of about 10 minutes takes you from the hotel to Pari Chowk.
              </p>
              <a href={MAPS.directionsUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-adani-blue hover:text-adani-orange">Get directions on Google Maps</a>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold font-heading text-adani-dark mb-4">Good to Combine</h3>
              <p className="text-gray-600 mb-4">
                Pari Chowk is also a handy gateway if you are visiting India Expo Centre &amp; Mart,
                Knowledge Park or the F1 track (Buddh International Circuit, ~4.3 km).
              </p>
              <Link href="/location/india-expo-centre" className="font-bold text-adani-blue hover:text-adani-orange">Near India Expo Centre &rarr;</Link>
            </div>
          </div>

          <div className="text-center">
            <a href="https://bookone.io/The-Glam?bookingEngine=true" className="inline-flex items-center gap-3 bg-adani-blue hover:bg-adani-orange text-white px-8 py-4 font-bold rounded-full transition-colors uppercase tracking-wide text-sm">
              Book Your Stay <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-gray-500 mt-6">
              Questions? Call <a href={CONTACT.telephoneHref} className="font-bold text-adani-blue">{CONTACT.telephone}</a> or{" "}
              <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="font-bold text-adani-blue">WhatsApp us</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}