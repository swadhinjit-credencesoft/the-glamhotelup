"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";
import { ArrowRight, ChevronRight, Loader2 } from "lucide-react";
import { useProperty } from "@/hooks/useProperty";
import { mapApiRooms } from "@/lib/data/roomMapper";
import { NEARBY_ATTRACTIONS } from "@/lib/data/rooms";

export function RoomsShowcase() {
  const { rooms: apiRooms, loading, error } = useProperty();
  const rooms = useMemo(() => mapApiRooms(apiRooms), [apiRooms]);

  const [activeTab, setActiveTab] = useState("rooms");
  const [activeRoomId, setActiveRoomId] = useState<number | null>(null);

  const activeRoom = useMemo(
    () => rooms.find((r) => r.id === activeRoomId) ?? rooms[0],
    [rooms, activeRoomId]
  );

  if (loading) {
    return (
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container flex items-center justify-center min-h-[400px]">
          <Loader2 className="w-8 h-8 animate-spin text-adani-blue" />
        </div>
      </section>
    );
  }

  if (error || rooms.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container">
        <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <Tabs.List className="flex flex-wrap items-center gap-x-4 sm:gap-x-8 gap-y-2 px-6 lg:px-12 pt-8 pb-4 border-b border-gray-100">
            <Tabs.Trigger value="rooms" className="text-xl sm:text-2xl whitespace-nowrap font-heading font-bold text-gray-400 data-[state=active]:text-adani-blue pb-4 relative group transition-colors">
              Rooms & Suites
              {activeTab === "rooms" && <motion.div layoutId="home-tab-indicator" className="absolute bottom-0 left-0 w-full h-[4px] bg-adani-blue rounded-t-full" />}
            </Tabs.Trigger>
            <Tabs.Trigger value="nearby" className="text-xl sm:text-2xl whitespace-nowrap font-heading font-bold text-gray-400 data-[state=active]:text-adani-blue pb-4 relative group transition-colors">
              Nearby Attractions
              {activeTab === "nearby" && <motion.div layoutId="home-tab-indicator" className="absolute bottom-0 left-0 w-full h-[4px] bg-adani-blue rounded-t-full" />}
            </Tabs.Trigger>
          </Tabs.List>

          <div className="min-h-[600px] lg:min-h-[700px]">
            <Tabs.Content value="rooms" className="h-full outline-none">
              <div className="flex flex-col lg:flex-row h-full">
                <div className="w-full lg:w-1/3 p-4 lg:p-6 bg-gray-50/50 flex flex-col gap-3">
                  {rooms.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => setActiveRoomId(r.id)}
                      onMouseEnter={() => setActiveRoomId(r.id)}
                      className={`relative flex items-center p-4 lg:p-5 rounded-2xl transition-all text-left group ${activeRoom?.id === r.id ? "bg-white shadow-lg text-adani-blue border border-gray-100 scale-[1.02]" : "hover:bg-white/60 text-gray-600"}`}
                    >
                      <div className="w-16 h-12 mr-4 rounded overflow-hidden shrink-0 relative">
                        <Image src={r.thumbnail} alt={r.name} fill className="object-cover" />
                      </div>
                      <span className="font-bold font-heading text-lg w-full z-10">{r.name}</span>
                      <ChevronRight className={`w-6 h-6 transition-transform opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 ${activeRoom?.id === r.id ? "opacity-100 translate-x-0 text-adani-blue" : ""}`} />
                    </button>
                  ))}
                </div>

                <div className="w-full lg:w-2/3 relative">
                  <AnimatePresence mode="popLayout">
                    {activeRoom && (
                      <motion.div
                        key={activeRoom.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="relative flex flex-col justify-end text-white overflow-hidden min-h-[500px]"
                      >
                        <div className="absolute inset-0 z-0">
                          <Image src={activeRoom.largeImage} alt={activeRoom.name} fill className="object-cover" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-adani-dark via-adani-dark/60 to-transparent z-10" />

                        <div className="relative z-20 flex flex-col p-8 lg:p-16">
                          <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-4xl lg:text-6xl font-bold font-heading mb-4">
                            {activeRoom.name}
                          </motion.h3>
                          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="text-lg text-gray-200 mb-8 max-w-xl">
                            {activeRoom.description}
                          </motion.p>
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-x-8 gap-y-4 mb-10 border-l-[3px] border-adani-orange pl-6">
                            <span className="text-lg lg:text-xl font-semibold">{activeRoom.maxOccupancy} Guests</span>
                            <span className="text-lg lg:text-xl font-semibold">{activeRoom.totalRooms} Rooms</span>
                            <span className="text-lg lg:text-xl font-semibold">From ₹{activeRoom.price.toLocaleString("en-IN")}/night</span>
                          </motion.div>
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap items-center gap-4">
                            <Link href={`/rooms/${activeRoom.slug}`} className="inline-flex items-center gap-3 bg-adani-blue hover:bg-adani-orange text-white px-8 py-4 font-bold rounded transition-colors uppercase tracking-wide text-sm group">
                              View Room
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="https://bookone.io/The-Glam-By-Sandane-Homes?bookingEngine=true" className="inline-flex items-center gap-3 border border-white/40 hover:border-adani-orange hover:text-adani-orange text-white px-8 py-4 font-bold rounded transition-colors uppercase tracking-wide text-sm">
                              Book Now
                            </Link>
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </Tabs.Content>

            <Tabs.Content value="nearby" className="relative h-full overflow-hidden outline-none p-6 lg:p-12 align-center">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/04.jpg)" }} />
              <div className="absolute inset-0 bg-adani-dark/75" />
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {NEARBY_ATTRACTIONS.map((place, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    key={place.name}
                    className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block border border-gray-100"
                  >
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${place.image})` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-adani-dark via-adani-dark/60 to-adani-dark/20" />
                    <div className="relative z-10 p-6 min-h-[180px] flex flex-col justify-end">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wide px-2 py-1 rounded bg-adani-blue/20 text-white">{place.category}</span>
                        <span className="text-sm font-bold text-adani-orange">{place.distance}</span>
                      </div>
                      <h4 className="font-bold font-heading text-white text-lg leading-tight group-hover:text-adani-orange transition-colors pb-2">{place.name}</h4>
                      <p className="text-sm text-gray-100 leading-relaxed">{place.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </div>
    </section>
  );
}
