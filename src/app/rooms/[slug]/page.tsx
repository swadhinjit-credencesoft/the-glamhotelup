import type { Metadata } from "next";
import Link from "next/link";
import { Check, ChevronRight, ArrowRight, Star } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { BreadcrumbSchema, RoomSchema } from "@/components/seo/Schema";
import { SITE } from "@/lib/data/site";
import { ROOMS, getRoomBySlug } from "@/lib/data/rooms";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return ROOMS.map((room) => ({ slug: room.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const room = getRoomBySlug(params.slug);
  const title = room ? `${room.name} | Rooms & Suites` : "Room | Rooms & Suites";
  const description = room ? room.intro : "Explore our rooms and suites.";
  return { title, description };
}

export default function RoomDetailPage({ params }: Props) {
  const room = getRoomBySlug(params.slug) ?? ROOMS[0];
  const roomUrl = `${SITE.url}/rooms/${room.id}`;

  const breadcrumbs = [
    { name: "Home", url: SITE.url },
    { name: "Rooms & Suites", url: `${SITE.url}/rooms` },
    { name: room.name, url: roomUrl },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <RoomSchema name={room.name} description={room.intro} image={room.largeImage} url={roomUrl} />

      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Rooms & Suites", href: "/rooms" },
          { label: room.name },
        ]}
        title={room.name}
        subtitle={`${room.bed} • ${room.capacity} • ${room.size}`}
        height="h-[55vh] min-h-[450px]"
        bgImageStyle={{ backgroundImage: `url(${room.largeImage})` }}
      />

      <section className="py-24 bg-white relative">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="flex-1">
              <h2 className="text-4xl font-bold font-heading text-adani-dark mb-8 leading-tight">Overview</h2>
              <p className="text-xl text-gray-600 font-body leading-relaxed mb-6">{room.intro}</p>

              <div className="mt-12 bg-gray-50 border-l-4 border-adani-orange p-8 rounded-r-xl">
                <h4 className="text-lg font-bold font-heading text-adani-dark mb-4 uppercase tracking-wider">Quick Facts</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700"><Check className="w-5 h-5 text-adani-green" /> Size: {room.size}</li>
                  <li className="flex items-center gap-3 text-gray-700"><Check className="w-5 h-5 text-adani-green" /> Capacity: {room.capacity}</li>
                  <li className="flex items-center gap-3 text-gray-700"><Check className="w-5 h-5 text-adani-green" /> Bed: {room.bed}</li>
                  <li className="flex items-center gap-3 text-gray-700"><Check className="w-5 h-5 text-adani-green" /> View: {room.view}</li>
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="https://bookone.io/The-Glam-By-Sandane-Homes?bookingEngine=true"
                  className="inline-flex items-center gap-3 bg-adani-blue hover:bg-adani-orange text-white px-8 py-4 font-bold rounded transition-colors uppercase tracking-wide text-sm"
                >
                  Book This Room <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.google.com/maps/dir/?api=1&destination=The+Glam+Plot+No+AE-189+Block+A+Ansal+Golf+Link-1+Greater+Noida+201315"
                  className="inline-flex items-center gap-2 border border-adani-blue text-adani-blue hover:bg-adani-blue hover:text-white px-8 py-4 font-bold rounded transition-colors uppercase tracking-wide text-sm"
                >
                  Get Directions
                </Link>
              </div>
            </div>

            <div className="w-full md:w-5/12">
              <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden relative shadow-lg">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${room.largeImage})` }}
                />
              </div>
              <div className="mt-6 bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-adani-orange text-adani-orange" />
                  <span className="font-bold text-adani-dark">{SITE.rating}/5</span>
                </div>
                <p className="text-sm text-gray-500">{SITE.reviewCount} Google reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container">
          <h3 className="text-3xl font-bold font-heading text-adani-dark mb-12 text-center">Room Amenities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {room.amenities.map((amenity) => (
              <div key={amenity} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100">
                <Check className="w-5 h-5 text-adani-green mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{amenity}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">{room.priceNote}</p>
        </div>
      </section>

      <div className="py-12 bg-white flex justify-center border-t border-gray-100">
        <Link
          href="/rooms"
          className="inline-flex h-14 bg-adani-blue text-white font-bold items-center justify-center px-10 rounded shadow-md hover:bg-adani-dark transition-colors hover:-translate-y-1 gap-2"
        >
          <ChevronRight className="w-5 h-5 rotate-180" /> Back to All Rooms
        </Link>
      </div>
    </>
  );
}
