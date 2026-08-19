"use client";
import { useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useProperty } from "@/hooks/useProperty";
import { mapApiRooms } from "@/lib/data/roomMapper";

export function JoinUsSection() {
  const { rooms: apiRooms, loading } = useProperty();
  const rooms = useMemo(() => mapApiRooms(apiRooms), [apiRooms]);

  const cards = useMemo(() => {
    const roomCards = rooms.map((room) => ({
      id: room.id,
      label: room.name,
      link: `/rooms/${room.slug}`,
      img: room.thumbnail,
      fallback: "bg-adani-blue",
    }));
    return [
      ...roomCards,
      { id: 0, label: "Book Your Stay", link: "https://bookone.io/The-Glam-By-Sandane-Homes?bookingEngine=true", img: "/images/welcome.avif", fallback: "bg-adani-dark" },
    ];
  }, [rooms]);

  return (
    <section className="py-24 bg-adani-dark text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-adani-blue/10 to-transparent z-0" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-16">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold font-heading mb-6"
            >
              Choose Your Stay
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl lg:text-3xl font-body text-gray-300 leading-relaxed"
            >
              Your comfortable Greater Noida stay starts here. Explore our rooms or book directly with our team.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="shrink-0"
          >
            <Link
              href="https://bookone.io/The-Glam-By-Sandane-Homes?bookingEngine=true"
              className="inline-flex items-center gap-3 bg-adani-blue hover:bg-adani-orange text-white px-8 py-4 rounded-full font-bold transition-all uppercase tracking-wide text-sm group"
            >
              Book Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center min-h-[300px]">
            <Loader2 className="w-8 h-8 animate-spin text-adani-orange" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 cursor-pointer">
            {cards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-[3/4] group"
              >
                <Link href={card.link} className="absolute inset-0 z-20">
                  <span className="sr-only">{card.label}</span>
                </Link>

                <div className={`absolute inset-0 ${card.fallback} group-hover:scale-105 transition-transform duration-500 ease-out`} />
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  style={{ backgroundImage: `url("${card.img}")` }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute inset-0 bg-adani-dark/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex items-center justify-center p-6 text-center">
                  <h3 className="text-2xl font-bold font-heading text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {card.label}
                  </h3>
                </div>

                <div className="absolute bottom-6 left-6 right-6 group-hover:opacity-0 transition-opacity duration-200">
                  <h3 className="text-2xl font-bold font-heading text-white line-clamp-2 drop-shadow-md">
                    {card.label}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
