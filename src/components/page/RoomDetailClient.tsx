"use client";
import { useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, ChevronRight, ArrowRight, Star, Loader2 } from "lucide-react";
import { useProperty } from "@/hooks/useProperty";
import { mapApiRooms } from "@/lib/data/roomMapper";
import { SITE } from "@/lib/data/site";

const SLUG_TO_API_NAME: Record<string, string> = {
  "deluxe-room": "Deluxe Room",
  "suite-room": "Suite",
  "luxury-room": "Suite",
};

export function RoomDetailClient({ slug }: { slug: string }) {
  const { rooms: apiRooms, loading, error } = useProperty();
  const rooms = useMemo(() => mapApiRooms(apiRooms), [apiRooms]);

  const room = useMemo(() => {
    const apiName = SLUG_TO_API_NAME[slug];
    if (apiName) {
      return rooms.find((r) => r.name === apiName) ?? rooms[0];
    }
    return rooms.find((r) => r.slug === slug) ?? rooms[0];
  }, [rooms, slug]);

  useEffect(() => {
    if (room) {
      document.title = `${room.name} | Rooms & Suites | ${SITE.name}`;
    }
  }, [room]);

  if (loading) {
    return (
      <>
        <section className="relative w-full h-[55vh] min-h-[450px] flex items-end pb-16 bg-adani-dark text-white pt-32">
          <div className="absolute inset-0">
            <Image src="/DeluxeRoom1homehero.avif" alt="" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-adani-dark to-transparent" />
          <div className="container relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold font-heading">Loading...</h1>
          </div>
        </section>
        <div className="flex items-center justify-center min-h-[400px]">
          <Loader2 className="w-8 h-8 animate-spin text-adani-blue" />
        </div>
      </>
    );
  }

  if (error || !room) {
    return (
      <>
        <section className="relative w-full h-[55vh] min-h-[450px] flex items-end pb-16 bg-adani-dark text-white pt-32">
          <div className="absolute inset-0">
            <Image src="/DeluxeRoom1homehero.avif" alt="" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-adani-dark to-transparent" />
          <div className="container relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold font-heading">Room Not Found</h1>
          </div>
        </section>
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
          <p className="text-gray-500">{error ?? "The room you are looking for could not be found."}</p>
          <Link href="/rooms" className="text-adani-blue font-bold underline">Back to Rooms</Link>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[55vh] min-h-[450px] flex items-end pb-16 bg-adani-dark text-white pt-32">
        <div className="absolute inset-0">
          <Image src={room.largeImage} alt={room.name} fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-adani-dark to-transparent" />
        <div className="container relative z-10 w-full flex flex-col items-start gap-4">
          <nav className="flex flex-wrap items-center gap-2 text-sm font-bold tracking-widest uppercase text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/rooms" className="hover:text-white transition-colors">Rooms & Suites</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{room.name}</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold font-heading">{room.name}</h1>
          <p className="text-xl max-w-2xl mt-4 text-white/90">{room.maxOccupancy} Guests &bull; {room.totalRooms} Rooms Available</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white relative">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="flex-1">
              <h2 className="text-4xl font-bold font-heading text-adani-dark mb-8 leading-tight">Overview</h2>
              <p className="text-xl text-gray-600 font-body leading-relaxed mb-6">{room.description}</p>

              <div className="mt-12 bg-gray-50 border-l-4 border-adani-orange p-8 rounded-r-xl">
                <h4 className="text-lg font-bold font-heading text-adani-dark mb-4 uppercase tracking-wider">Quick Facts</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700"><Check className="w-5 h-5 text-adani-green" /> Occupancy: {room.minOccupancy}–{room.maxOccupancy} Guests</li>
                  <li className="flex items-center gap-3 text-gray-700"><Check className="w-5 h-5 text-adani-green" /> Total Rooms: {room.totalRooms}</li>
                  <li className="flex items-center gap-3 text-gray-700"><Check className="w-5 h-5 text-adani-green" /> Available: {room.availableRooms}</li>
                  <li className="flex items-center gap-3 text-gray-700"><Check className="w-5 h-5 text-adani-green" /> Starting from ₹{room.price.toLocaleString("en-IN")}/night</li>
                </ul>
              </div>

              {room.ratePlans.length > 0 && (
                <div className="mt-8">
                  <h4 className="text-lg font-bold font-heading text-adani-dark mb-4 uppercase tracking-wider">Rate Plans</h4>
                  <div className="space-y-3">
                    {room.ratePlans.map((plan) => (
                      <div key={plan.code} className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <span className="font-semibold text-gray-700">{plan.name}</span>
                        <span className="font-bold text-adani-blue">₹{plan.amount.toLocaleString("en-IN")}/night</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="https://bookone.io/The-Glam-By-Sandane-Homes?bookingEngine=true" className="inline-flex items-center gap-3 bg-adani-blue hover:bg-adani-orange text-white px-8 py-4 font-bold rounded transition-colors uppercase tracking-wide text-sm">
                  Book This Room <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="https://www.google.com/maps/dir/?api=1&destination=The+Glam+Plot+No+AE-189+Block+A+Ansal+Golf+Link-1+Greater+Noida+201315" className="inline-flex items-center gap-2 border border-adani-blue text-adani-blue hover:bg-adani-blue hover:text-white px-8 py-4 font-bold rounded transition-colors uppercase tracking-wide text-sm">
                  Get Directions
                </Link>
              </div>
            </div>

            <div className="w-full md:w-5/12">
              <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden relative shadow-lg">
                <Image src={room.largeImage} alt={room.name} fill className="object-cover" />
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

      {/* Gallery */}
      {room.images.length > 1 && (
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="container">
            <h3 className="text-3xl font-bold font-heading text-adani-dark mb-12 text-center">Room Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {room.images.map((img, i) => (
                <div key={i} className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative">
                  <Image src={img} alt={`${room.name} photo ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back */}
      <div className="py-12 bg-white flex justify-center border-t border-gray-100">
        <Link href="/rooms" className="inline-flex h-14 bg-adani-blue text-white font-bold items-center justify-center px-10 rounded shadow-md hover:bg-adani-dark transition-colors hover:-translate-y-1 gap-2">
          <ChevronRight className="w-5 h-5 rotate-180" /> Back to All Rooms
        </Link>
      </div>
    </>
  );
}
