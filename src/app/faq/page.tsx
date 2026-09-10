import type { Metadata } from "next";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, Clock, HeartHandshake, Mail, MessageCircle, Phone, Sunrise, Wifi } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { BreadcrumbSchema, FaqSchema } from "@/components/seo/Schema";
import { SITE, CONTACT, CORPORATE } from "@/lib/config/site";
import { FAQ_ITEMS } from "@/features/faq/lib/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Check-in 2:00 PM, check-out 12:00 PM, complimentary Wi-Fi, air conditioning, no pets, couple friendly — answers to common questions about The Glam, Greater Noida.",
};

const QUICK_FACTS = [
  { icon: Clock, label: "Check-In", value: "2:00 PM" },
  { icon: Sunrise, label: "Check-Out", value: "12:00 PM" },
  { icon: Wifi, label: "Wi-Fi", value: "Complimentary" },
  { icon: HeartHandshake, label: "Couples", value: "Welcome" },
];

export default function FaqPage() {
  const breadcrumbs = [
    { name: "Home", url: SITE.url },
    { name: "FAQ", url: `${SITE.url}/faq` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FaqSchema faqs={FAQ_ITEMS} />

      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about your stay at The Glam, Greater Noida."
        height="h-[45vh] min-h-[350px]"
        overlayClass="bg-adani-dark opacity-70"
        bgImageStyle={{ backgroundImage: "url(/glam-july/glam-5.avif)" }}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-14">
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
                {QUICK_FACTS.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <div key={fact.label} className="bg-gradient-to-b from-adani-blue-pale to-white border border-adani-blue/20 rounded-2xl p-5 text-center shadow-sm">
                      <Icon className="w-6 h-6 text-adani-blue mx-auto mb-2" />
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{fact.label}</p>
                      <p className="font-heading font-bold text-adani-dark">{fact.value}</p>
                    </div>
                  );
                })}
              </div>

              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-adani-dark mb-10">
                Questions, answered
              </h2>

              <Accordion.Root type="single" collapsible className="space-y-4">
                {FAQ_ITEMS.map((faq, i) => (
                  <Accordion.Item
                    key={i}
                    value={`item-${i}`}
                    className="group border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 data-[state=open]:border-adani-blue/50 data-[state=open]:shadow-lg data-[state=open]:shadow-adani-blue/5 bg-white"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="flex w-full items-center gap-5 p-5 md:p-6 text-left outline-none transition-colors">
                        <span className="hidden sm:inline-flex items-center justify-center w-11 h-11 shrink-0 rounded-full bg-adani-blue-pale text-adani-blue font-barlow font-bold text-lg transition-colors duration-300 group-data-[state=open]:bg-adani-blue group-data-[state=open]:text-white">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 font-heading font-bold text-lg md:text-xl text-adani-dark group-hover:text-adani-blue transition-colors">
                          {faq.q}
                        </span>
                        <span className="w-9 h-9 shrink-0 inline-flex items-center justify-center rounded-full border border-adani-blue/30 text-adani-blue transition-all duration-300 group-data-[state=open]:bg-adani-blue group-data-[state=open]:text-white group-data-[state=open]:rotate-180">
                          <ChevronDown className="w-4 h-4" />
                        </span>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="data-[state=open]:animate-[scaleIn_200ms_ease]">
                      <p className="px-5 md:px-6 pb-6 md:pl-[84px] text-gray-600 leading-relaxed max-w-3xl">
                        {faq.a}
                      </p>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </div>

            <aside className="lg:sticky lg:top-28 self-start">
              <div className="bg-adani-dark text-white rounded-3xl p-8 lg:p-10 overflow-hidden relative">
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-adani-blue/20 blur-3xl" aria-hidden="true" />
                <p className="font-barlow text-sm font-bold uppercase tracking-[0.25em] text-adani-orange mb-4">Still have questions?</p>
                <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-4 leading-snug">
                  Talk to our team before you book
                </h3>
                <p className="text-white/70 leading-relaxed mb-8">
                  We are happy to help with availability, corporate and long stays, or anything about your upcoming visit.
                </p>

                <div className="space-y-3 mb-8">
                  <a
                    href={CONTACT.telephoneHref}
                    className="flex items-center gap-3 w-full bg-adani-orange hover:bg-adani-blue text-white px-6 py-4 rounded-full transition-colors font-barlow font-bold uppercase tracking-widest text-sm"
                  >
                    <Phone className="w-5 h-5" /> {CONTACT.telephone}
                  </a>
                  <a
                    href={CONTACT.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full border border-white/25 hover:border-adani-green hover:text-adani-green text-white px-6 py-4 rounded-full transition-colors font-barlow font-bold uppercase tracking-widest text-sm"
                  >
                    <MessageCircle className="w-5 h-5" /> WhatsApp Us
                  </a>
                  <a
                    href={`mailto:${CORPORATE.email}`}
                    className="flex items-center gap-3 w-full text-white/80 hover:text-adani-orange px-6 py-2 transition-colors text-sm font-bold"
                  >
                    <Mail className="w-5 h-5" /> {CORPORATE.email}
                  </a>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-white/50 text-sm mb-4">Ready to book your stay?</p>
                  <a
                    href="https://bookone.io/The-Glam?bookingEngine=true"
                    className="flex items-center gap-3 w-full text-adani-orange hover:text-white px-2 py-2 transition-colors font-barlow font-bold uppercase tracking-widest text-sm"
                  >
                    Check Availability &rarr;
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}