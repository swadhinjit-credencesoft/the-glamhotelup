"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LOCATION_PANELS } from "@/features/location/lib/location";

export function LocationSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-[520px] sm:h-[600px] lg:h-[750px] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".loc-pagination", bulletClass: "loc-bullet", bulletActiveClass: "loc-bullet-active" }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
        loop
      >
        {LOCATION_PANELS.map((panel, index) => (
          <SwiperSlide key={panel.id}>
            <div className="absolute inset-0 z-0 bg-adani-dark">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${panel.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-adani-dark via-adani-dark/60 to-transparent" />
            </div>

            <div className="container relative z-10 h-full flex flex-col justify-center text-center lg:text-left lg:justify-end pb-20 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8">
              <AnimatePresence mode="popLayout">
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.4 } }}
                    exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                    className="max-w-4xl max-lg:mx-auto text-white"
                  >
                    <p className="text-adani-orange font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 sm:mb-4">
                      {panel.eyebrow}
                    </p>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-heading mb-4 sm:mb-6 lg:mb-10 leading-tight break-words">
                      {panel.heading}
                    </h2>

                    <div className="mb-6 sm:mb-10 lg:mb-14 pb-6 sm:pb-10 border-b border-white/20">
                      <p className="font-barlow font-bold text-2xl sm:text-3xl lg:text-5xl text-white">
                        {panel.stat}
                      </p>
                    </div>

                    <div>
                      <Link
                        href={panel.link}
                        className="inline-flex items-center gap-2 sm:gap-3 bg-white text-adani-blue hover:bg-adani-orange hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold transition-all uppercase tracking-wide text-xs sm:text-sm shadow-md group"
                      >
                        {panel.linkText}
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Pagination */}
        <div className="absolute bottom-10 pb-4 left-0 w-full z-20 flex justify-center lg:justify-start lg:pl-[10%] xl:pl-[15%]">
            <div className="loc-pagination flex gap-3"></div>
        </div>
      </Swiper>

      {/* Global styles for custom bullets */}
      <style dangerouslySetInnerHTML={{__html: `
        .loc-bullet {
          width: 40px;
          height: 4px;
          background: rgba(255,255,255,0.4);
          display: inline-block;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .loc-bullet-active {
          background: #ffffff;
          width: 60px;
        }
      `}} />
    </section>
  );
}
