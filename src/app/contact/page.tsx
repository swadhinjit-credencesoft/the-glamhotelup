import type { Metadata } from "next";
import { Phone, MessageCircle, Navigation, MapPin } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { BreadcrumbSchema } from "@/components/seo/Schema";
import { CONTACT, CORPORATE, MAPS, SITE } from "@/lib/data/site";
import { CONTACT_PAGE as CONTACT_COPY } from "@/lib/data/pages";

export const metadata: Metadata = {
  title: "Contact The Glam",
  description:
    "Contact The Glam in Ansal Golf Link-1, Greater Noida. Call +91 8796321915, WhatsApp us or send an enquiry. Check-in 12:00 PM, check-out 11:00 AM.",
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
        bgImageStyle={{ backgroundImage: "url(/homehero1.avif)" }}
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
            <a href="/book-now" className="inline-flex items-center gap-3 border-2 border-adani-orange text-adani-orange hover:bg-adani-orange hover:text-white px-8 py-4 font-bold rounded-full transition-colors uppercase tracking-wide text-sm">
              {CONTACT_COPY.buttons.book}
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold font-heading text-adani-dark mb-6">{CONTACT_COPY.introTitle}</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-adani-blue mt-1 flex-shrink-0" />
                  <div>
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
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-adani-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Telephone</h3>
                    <p className="text-gray-600">
                      <a href={CONTACT.telephoneHref} className="font-bold text-adani-blue hover:text-adani-orange">{CONTACT.telephone}</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-adani-blue mt-1 flex-shrink-0" />
                  <div>
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

            <div className="bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold font-heading text-adani-dark mb-6">{CONTACT_COPY.formTitle}</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">First Name *</label>
                    <input type="text" className="w-full h-12 px-4 border border-gray-300 rounded focus:border-adani-blue focus:ring-1 focus:ring-adani-blue outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Last Name *</label>
                    <input type="text" className="w-full h-12 px-4 border border-gray-300 rounded focus:border-adani-blue focus:ring-1 focus:ring-adani-blue outline-none" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Email *</label>
                  <input type="email" className="w-full h-12 px-4 border border-gray-300 rounded focus:border-adani-blue focus:ring-1 focus:ring-adani-blue outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Phone</label>
                  <input type="tel" className="w-full h-12 px-4 border border-gray-300 rounded focus:border-adani-blue focus:ring-1 focus:ring-adani-blue outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Message *</label>
                  <textarea rows={4} className="w-full p-4 border border-gray-300 rounded focus:border-adani-blue focus:ring-1 focus:ring-adani-blue outline-none" required></textarea>
                </div>
                <button type="submit" className="h-12 px-8 w-full bg-adani-blue text-white font-bold rounded hover:bg-adani-dark transition-colors">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
