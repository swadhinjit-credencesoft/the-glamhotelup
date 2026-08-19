"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HERO_SLIDES } from "@/lib/data/home";

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-screen min-h-[600px]">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".hero-pagination" }}
        navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
        loop
      >
        {HERO_SLIDES.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="absolute inset-0 z-0">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image}), linear-gradient(to right, #8A6D3B, #1B1713)` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-adani-dark/90 via-adani-dark/50 to-transparent" />
            </div>

            <div className="container relative z-10 h-full flex flex-col justify-end pb-24 lg:pb-32">
              <AnimatePresence mode="popLayout">
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0, transition: { staggerChildren: 0.15, duration: 0.6 } }}
                    exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                    className="max-w-3xl text-white"
                  >
                    {slide.eyebrow && (
                      <motion.p className="text-adani-orange font-bold tracking-widest uppercase mb-4">
                        {slide.eyebrow}
                      </motion.p>
                    )}
                    {slide.boldLine ? (
                      <motion.h2 className="mb-6 font-heading font-bold text-4xl lg:text-6xl leading-tight">
                        {slide.boldLine}
                      </motion.h2>
                    ) : (
                      <motion.h2 className="mb-6 font-heading font-bold text-3xl lg:text-5xl leading-tight">
                        {slide.title}
                      </motion.h2>
                    )}
                    {slide.subtitle && (
                      <motion.p className="text-xl lg:text-2xl font-medium mb-8 text-gray-200 max-w-2xl">
                        {slide.subtitle}
                      </motion.p>
                    )}

                    <motion.div>
                      <Link href={slide.ctaLink} className="inline-block bg-white text-adani-blue hover:bg-adani-orange hover:text-white px-8 py-3 rounded-full font-bold transition-all uppercase tracking-wide text-sm">
                        {slide.ctaText}
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Controls */}
        <div className="absolute bottom-8 left-0 w-full z-20 flex justify-center">
            <div className="hero-pagination flex gap-2"></div>
        </div>
      </Swiper>
    </section>
  );
}
