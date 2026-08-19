import type { Metadata } from "next";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { BreadcrumbSchema, FaqSchema } from "@/components/seo/Schema";
import { SITE } from "@/lib/data/site";
import { FAQ_ITEMS } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Check-in 12:00 PM, check-out 11:00 AM, complimentary Wi-Fi, air conditioning, no pets, couple friendly — answers to common questions about The Glam, Greater Noida.",
};

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
        subtitle="Quick answers about your stay at The Glam."
        height="h-[45vh] min-h-[350px]"
        overlayClass="bg-adani-orange opacity-80"
      />

      <section className="py-24 bg-white">
        <div className="container max-w-3xl">
          <Accordion.Root type="single" collapsible className="space-y-4">
            {FAQ_ITEMS.map((faq, i) => (
              <Accordion.Item key={i} value={`item-${i}`} className="border border-gray-200 rounded-xl overflow-hidden">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between gap-4 p-6 text-left font-bold font-heading text-lg text-adani-dark hover:text-adani-blue transition-colors outline-none group">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 flex-shrink-0 text-adani-blue transition-transform group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="data-[state=open]:animate-[scaleIn_200ms_ease]">
                  <p className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>

          <div className="mt-16 bg-gray-50 border-t-4 border-adani-blue rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-bold font-heading text-adani-dark mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">Our team is happy to help with your booking.</p>
            <a
              href="tel:+918796321915"
              className="inline-flex items-center justify-center bg-adani-blue hover:bg-adani-orange text-white font-bold px-8 py-4 rounded-full transition-colors uppercase tracking-wide text-sm"
            >
              Call +91 8796321915
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
