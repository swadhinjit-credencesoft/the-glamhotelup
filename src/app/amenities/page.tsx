import type { Metadata } from "next";
import { PageHero } from "@/components/page/PageHero";
import { BreadcrumbSchema } from "@/components/seo/Schema";
import { SITE } from "@/lib/data/site";
import { ROOM_AMENITIES, HOTEL_SERVICES, AMENITY_HIGHLIGHTS } from "@/lib/data/amenities";
import { Wifi, BedDouble, Tv, Armchair, Bath, Coffee, Sparkles, AirVent, Clock, BellRing, Zap, ShowerHead, Users, ShieldCheck, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  "air-vent": AirVent,
  wifi: Wifi,
  "bed-double": BedDouble,
  tv: Tv,
  desk: Armchair,
  bath: Bath,
  coffee: Coffee,
  sparkles: Sparkles,
  clock: Clock,
  "concierge-bell": BellRing,
  power: Zap,
  shower: ShowerHead,
  users: Users,
  "shield-check": ShieldCheck,
};

export const metadata: Metadata = {
  title: "Amenities",
  description:
    "Amenities at The Glam — air-conditioned rooms, king beds, complimentary high-speed Wi-Fi, work-friendly spaces, daily housekeeping and a 24-hour front desk.",
};

function AmenityCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  const Icon = ICONS[icon] ?? Sparkles;
  return (
    <div className="p-8 border border-gray-100 shadow-md rounded-2xl flex flex-col items-center text-center hover:shadow-xl transition-shadow bg-gray-50">
      <div className="w-16 h-16 rounded-full bg-adani-blue text-white flex items-center justify-center mb-6">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold font-heading text-adani-dark mb-4">{title}</h3>
      <p className="text-gray-600 font-body">{desc}</p>
    </div>
  );
}

export default function AmenitiesPage() {
  const breadcrumbs = [
    { name: "Home", url: SITE.url },
    { name: "Amenities", url: `${SITE.url}/amenities` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Amenities" }]}
        title="Amenities"
        subtitle="Everything you need for a comfortable, productive and relaxing stay."
        height="h-[55vh] min-h-[450px]"
        overlayClass="bg-adani-blue opacity-80"
      />

      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold font-heading text-adani-dark mb-12 text-center">In-Room Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {ROOM_AMENITIES.map((item) => (
              <AmenityCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>

          <h2 className="text-4xl font-bold font-heading text-adani-dark mb-12 text-center">Hotel Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOTEL_SERVICES.map((item) => (
              <AmenityCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>

          <div className="mt-24 bg-gray-50 border-t-4 border-adani-orange rounded-2xl p-10 lg:p-14 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-adani-dark mb-8 text-center">At a Glance</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {AMENITY_HIGHLIGHTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-adani-green mt-0.5 flex-shrink-0" />
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
