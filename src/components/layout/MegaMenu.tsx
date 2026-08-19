"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";
import { ChevronRight } from "lucide-react";
import { ROOMS, NEARBY_ATTRACTIONS } from "@/lib/data/rooms";

export function RoomsMegaMenu() {
  const [activeTab, setActiveTab] = useState("rooms");
  const [activeRoom, setActiveRoom] = useState(ROOMS[0].id);

  const room = ROOMS.find((r) => r.id === activeRoom) || ROOMS[0];

  return (
    <div className="bg-white w-[90vw] max-w-[1200px] shadow-2xl rounded-b-xl overflow-hidden border-t-4 border-adani-blue">
      <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="flex flex-col">
        <Tabs.List className="flex items-center gap-8 px-8 pt-6 pb-4 border-b border-gray-100">
          <Tabs.Trigger
            value="rooms"
            className="text-lg font-heading font-bold text-gray-500 data-[state=active]:text-adani-blue pb-2 relative group"
          >
            Rooms & Suites
            {activeTab === "rooms" && (
              <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 w-full h-[3px] bg-adani-blue" />
            )}
          </Tabs.Trigger>
          <Tabs.Trigger
            value="nearby"
            className="text-lg font-heading font-bold text-gray-500 data-[state=active]:text-adani-blue pb-2 relative group"
          >
            Nearby Attractions
            {activeTab === "nearby" && (
              <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 w-full h-[3px] bg-adani-blue" />
            )}
          </Tabs.Trigger>
        </Tabs.List>

        <div className="h-[500px]">
          {activeTab === "rooms" && (
          <Tabs.Content value="rooms" className="h-full flex overflow-hidden outline-none">
            {/* Left Nav */}
            <div className="w-1/3 overflow-y-auto bg-gray-50/50 flex flex-col p-4 gap-2 no-scrollbar">
              {ROOMS.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setActiveRoom(r.id)}
                  onMouseEnter={() => setActiveRoom(r.id)}
                  className={`relative flex items-center p-3 rounded-lg transition-all text-left group ${activeRoom === r.id ? 'bg-white shadow-md text-adani-blue' : 'hover:bg-gray-100 text-gray-700'}`}
                >
                  <span className="font-bold font-heading w-full z-10">{r.name}</span>
                  <ChevronRight className={`w-5 h-5 transition-transform opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 ${activeRoom === r.id ? 'opacity-100 translate-x-0 text-adani-blue' : ''}`} />
                </button>
              ))}
            </div>

            {/* Right Content */}
            <div className="w-2/3 p-8 bg-white relative">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col relative"
                >
                  {/* Room image */}
                  <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${room.thumbnail}), linear-gradient(to right, #8A6D3B, #1B1713)` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-adani-dark via-adani-dark/80 to-transparent z-10" />

                  <div className="relative z-20 h-full flex flex-col justify-end text-white pb-6 px-4">
                    <h3 className="text-4xl font-bold font-heading mb-3">{room.name}</h3>
                    <p className="text-sm text-gray-200 mb-4">{room.size} • {room.capacity} • {room.bed}</p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-6">
                      {room.highlights.slice(0, 6).map((h) => (
                        <span key={h.label} className="text-base font-medium flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-adani-orange inline-block" /> {h.label}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <Link
                        href={room.link}
                        className="inline-flex items-center bg-adani-blue hover:bg-adani-orange text-white px-6 py-3 font-bold rounded transition-colors uppercase tracking-wide text-sm"
                      >
                        View Room
                      </Link>
                      <Link href="/book-now" className="text-adani-orange font-bold text-sm uppercase tracking-wide hover:text-white transition-colors">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Tabs.Content>
          )}

          {activeTab === "nearby" && (
          <Tabs.Content value="nearby" className="relative h-full p-8 overflow-y-auto outline-none align-center">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/images/04.jpg)" }}
            />
            <div className="absolute inset-0 bg-adani-dark/80" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5">
              {NEARBY_ATTRACTIONS.map((place) => (
                <div key={place.name} className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${place.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-adani-dark via-adani-dark/65 to-adani-dark/20" />
                  <div className="relative z-10 p-5 min-h-[140px] flex flex-col justify-end">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold font-heading text-white group-hover:text-adani-orange transition-colors">{place.name}</h4>
                      <span className="text-xs font-bold uppercase tracking-wide px-2 py-1 rounded bg-adani-blue/20 text-white">{place.category}</span>
                    </div>
                    <p className="text-sm font-bold text-adani-orange mb-2">{place.distance}</p>
                    <p className="text-sm text-gray-100">{place.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Tabs.Content>
          )}
        </div>
      </Tabs.Root>
    </div>
  );
}
