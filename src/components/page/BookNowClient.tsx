"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Users, Phone, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { BOOKING_PAGE } from "@/lib/data/pages";
import { ROOMS, ROOM_OPTIONS } from "@/lib/data/rooms";
import { CONTACT } from "@/lib/data/site";

export function BookNowClient() {
  const [roomId, setRoomId] = useState(ROOMS[0].id);
  const [checked, setChecked] = useState(false);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setChecked(true);
  };

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Book Your Stay" }]}
        title={BOOKING_PAGE.heroTitle}
        subtitle={BOOKING_PAGE.heroText}
        height="h-[45vh] min-h-[350px]"
        overlayClass="bg-adani-blue opacity-80"
      />

      <section className="py-24 bg-gray-50">
        <div className="container max-w-5xl">
          {/* Search box */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-10 -mt-32 relative z-10">
            <form onSubmit={handleCheck} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-adani-blue" /> {BOOKING_PAGE.checkInLabel}
                </label>
                <input type="date" required className="w-full h-12 px-4 border border-gray-300 rounded focus:border-adani-blue focus:ring-1 focus:ring-adani-blue outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-adani-blue" /> {BOOKING_PAGE.checkOutLabel}
                </label>
                <input type="date" required className="w-full h-12 px-4 border border-gray-300 rounded focus:border-adani-blue focus:ring-1 focus:ring-adani-blue outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center gap-2">
                  <Users className="w-4 h-4 text-adani-blue" /> {BOOKING_PAGE.guestsLabel}
                </label>
                <select className="w-full h-12 px-4 border border-gray-300 rounded focus:border-adani-blue focus:ring-1 focus:ring-adani-blue outline-none bg-white">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">{BOOKING_PAGE.roomLabel}</label>
                <select
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="w-full h-12 px-4 border border-gray-300 rounded focus:border-adani-blue focus:ring-1 focus:ring-adani-blue outline-none bg-white"
                >
                  {ROOM_OPTIONS.map((room) => (
                    <option key={room.id} value={room.id}>{room.name}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="h-12 px-6 bg-adani-blue hover:bg-adani-orange text-white font-bold rounded uppercase tracking-wide text-sm transition-colors">
                {BOOKING_PAGE.submitLabel}
              </button>
            </form>
          </div>

          {checked && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12"
            >
              <h2 className="text-3xl font-bold font-heading text-adani-dark mb-8 text-center">{BOOKING_PAGE.resultsTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ROOM_OPTIONS.map((room) => (
                  <div key={room.id} className={`bg-white rounded-2xl overflow-hidden shadow-lg border transition-all ${room.id === roomId ? "border-adani-orange ring-2 ring-adani-orange/30" : "border-gray-100"}`}>
                    <div className="aspect-video bg-gray-100 relative">
                      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${room.image})` }} />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold font-heading text-adani-dark mb-2">{room.name}</h3>
                      <p className="text-sm text-gray-500 font-semibold mb-4">{room.summary}</p>
                      <div className="flex gap-3">
                        <a href={CONTACT.telephoneHref} className="flex-1 flex items-center justify-center gap-2 bg-adani-blue hover:bg-adani-orange text-white text-sm font-bold px-4 py-2.5 rounded-full transition-colors">
                          <Phone className="w-4 h-4" /> Call
                        </a>
                        <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-adani-green hover:bg-adani-dark text-white text-sm font-bold px-4 py-2.5 rounded-full transition-colors">
                          <MessageCircle className="w-4 h-4" /> WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-500 mt-8">{BOOKING_PAGE.resultsNote}</p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
