import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { BreadcrumbSchema } from "@/components/seo/Schema";
import { CONTACT, CORPORATE, MAPS, SITE } from "@/lib/config/site";
import { CONTACT_PAGE as CONTACT_COPY } from "@/features/contact/lib/contact";

export const metadata: Metadata = {
  title: { absolute: "Contact The Glam by Sandane Homes | Greater Noida" },
  description:
    "Contact The Glam in Ansal Golf Link-1, Greater Noida. Call +91 8796321915, WhatsApp us or send an enquiry. Check-in 2:00 PM, check-out 12:00 PM.",
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", url: SITE.url },
    { name: "Contact Us", url: `${SITE.url}/contact` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        title={CONTACT_COPY.heroTitle}
        subtitle={CONTACT_COPY.introText}
        height="h-[50vh] min-h-[400px]"
        bgImageStyle={{ backgroundImage: "url(/glam-july/glam-4.avif)" }}
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a href={CONTACT.telephoneHref} className="inline-flex items-center gap-3 bg-adani-blue hover:bg-adani-orange text-white px-8 py-4 font-bold rounded-full transition-colors uppercase tracking-wide text-sm">
              <Phone className="w-5 h-5" /> {CONTACT_COPY.buttons.call}
            </a>
            <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-adani-green hover:bg-adani-dark text-white px-8 py-4 font-bold rounded-full transition-colors uppercase tracking-wide text-sm">
              <MessageCircle className="w-5 h-5" /> {CONTACT_COPY.buttons.whatsapp}
            </a>
            <a href={MAPS.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border-2 border-adani-blue text-adani-blue hover:bg-adani-blue hover:text-white px-8 py-4 font-bold rounded-full transition-colors uppercase tracking-wide text-sm">
              <Navigation className="w-5 h-5" /> {CONTACT_COPY.buttons.directions}
            </a>
            <a href="https://bookone.io/The-Glam?bookingEngine=true" className="inline-flex items-center gap-3 border-2 border-adani-orange text-adani-orange hover:bg-adani-orange hover:text-white px-8 py-4 font-bold rounded-full transition-colors uppercase tracking-wide text-sm">
              {CONTACT_COPY.buttons.book}
            </a>
          </div>

          <div>
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold font-heading text-adani-dark mb-3">{CONTACT_COPY.introTitle}</h2>
              <p className="text-gray-600">{CONTACT_COPY.introText}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center">
                <MapPin className="w-8 h-8 text-adani-blue mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{CONTACT.propertyName}</h3>
                <p className="text-gray-600">
                  {CONTACT.addressLines.map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center">
                <Phone className="w-8 h-8 text-adani-blue mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Telephone</h3>
                <p className="text-gray-600">
                  <a href={CONTACT.telephoneHref} className="font-bold text-adani-blue hover:text-adani-orange">{CONTACT.telephone}</a>
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center">
                <Mail className="w-8 h-8 text-adani-blue mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{CORPORATE.name}</h3>
                <p className="text-gray-600">
                  <a href={CORPORATE.telephoneHref} className="font-bold text-adani-blue hover:text-adani-orange">{CORPORATE.telephone}</a>
                  <br />
                  <a href={`mailto:${CORPORATE.email}`} className="text-adani-blue hover:text-adani-orange">{CORPORATE.email}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
