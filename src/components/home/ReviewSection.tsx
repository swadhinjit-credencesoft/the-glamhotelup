"use client";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { REVIEW_STATS, REVIEW_QUOTES } from "@/lib/data/reviews";

export function ReviewSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container">

        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 md:gap-0 mb-16 border-b border-gray-200 pb-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold font-heading text-adani-dark"
          >
            Guest Reviews
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-3 bg-adani-blue/5 border border-adani-blue/20 rounded-full px-5 py-3"
          >
            <Star className="w-6 h-6 fill-adani-orange text-adani-orange" />
            <span className="font-bold text-adani-dark text-lg">{REVIEW_STATS.googleRating}/5</span>
            <span className="text-gray-500 text-sm font-semibold">on Google • {REVIEW_STATS.googleReviews} reviews</span>
          </motion.div>
        </div>

        {/* Desktop Grid */}
        <motion.div
          className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 px-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } }
          }}
        >
          {REVIEW_QUOTES.map((review) => (
            <motion.div
              key={review.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col"
            >
              <div className="rounded-2xl border border-gray-100 shadow-sm p-8 h-full flex flex-col bg-gray-50/50">
                <div className="flex items-center gap-1 mb-4 text-adani-orange">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 font-body leading-relaxed flex-1 italic mb-6">
                  &quot;{review.quote}&quot;
                </p>
                <div className="pt-5 border-t border-gray-100">
                  <p className="font-bold text-adani-dark">{review.author}</p>
                  <p className="text-gray-400 font-bold text-sm">{review.context}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
           <Swiper slidesPerView={1.1} spaceBetween={20}>
             {REVIEW_QUOTES.map((review) => (
                <SwiperSlide key={review.id}>
                  <div className="rounded-2xl border border-gray-100 shadow-sm p-8 h-full flex flex-col bg-gray-50/50">
                    <div className="flex items-center gap-1 mb-4 text-adani-orange">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 font-body leading-relaxed flex-1 italic mb-6">
                      &quot;{review.quote}&quot;
                    </p>
                    <div className="pt-5 border-t border-gray-100">
                      <p className="font-bold text-adani-dark">{review.author}</p>
                      <p className="text-gray-400 font-bold text-sm">{review.context}</p>
                    </div>
                  </div>
                </SwiperSlide>
             ))}
           </Swiper>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/reviews"
            className="text-adani-blue hover:text-adani-orange font-bold flex items-center gap-2 group transition-colors uppercase tracking-wide text-sm"
          >
            View All Reviews
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
