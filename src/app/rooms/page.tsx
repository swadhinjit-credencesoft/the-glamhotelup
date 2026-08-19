import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { BreadcrumbSchema } from "@/components/seo/Schema";
import { SITE } from "@/lib/data/site";
import { ROOMS } from "@/lib/data/rooms";

export const metadata: Metadata = {
  title: "Rooms & Suites in Greater Noida",
  description:
    "Explore Deluxe, Luxury and Suite rooms at The Glam — king beds, private bathrooms, air conditioning, Wi-Fi and work-friendly spaces near India Expo Centre.",
};

export default function RoomsPage() {
  const breadcrumbs = [
    { name: "Home", url: SITE.url },
    { name: "Rooms & Suites", url: `${SITE.url}/rooms` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Rooms & Suites" }]}
        title="Rooms & Suites"
        subtitle="Comfortable, well-appointed rooms designed for business and leisure travellers in Greater Noida."
        height="h-[60vh] min-h-[500px]"
        bgImageStyle={{ backgroundImage: "url(/DeluxeRoom1homehero.avif)" }}
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-adani-dark mb-6">Stay in Style, Sleep in Comfort</h2>
            <p className="text-xl text-gray-600 font-body leading-relaxed">
              The Glam offers {SITE.rooms} thoughtfully appointed guestrooms. Each room combines contemporary
              design with the practical touches you need — king beds, private bathrooms, air conditioning,
              complimentary high-speed Wi-Fi, workspaces and daily housekeeping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOMS.map((room) => (
              <div key={room.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col">
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${room.largeImage})` }}
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold font-heading text-adani-dark mb-3 group-hover:text-adani-blue transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-gray-500 text-sm font-bold mb-4">{room.bed} • {room.capacity} • {room.view}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{room.intro}</p>
                  <ul className="space-y-2 mb-8">
                    {room.highlights.slice(0, 5).map((h) => (
                      <li key={h.label} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-adani-green mt-0.5 flex-shrink-0" />
                        {h.label}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                    <Link
                      href={room.link}
                      className="text-adani-blue font-bold uppercase tracking-wide text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      View Details <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="https://bookone.io/The-Glam-By-Sandane-Homes?bookingEngine=true"
                      className="bg-adani-blue hover:bg-adani-orange text-white text-xs font-bold uppercase tracking-wide px-4 py-2.5 rounded-full transition-colors"
                    >
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
