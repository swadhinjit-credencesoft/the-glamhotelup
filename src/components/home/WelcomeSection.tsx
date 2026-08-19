"use client";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WELCOME } from "@/lib/data/about";
import { HOME_WELCOME } from "@/lib/data/home";

export function WelcomeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="bg-adani-dark py-24 lg:py-32 overflow-hidden relative">
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          {/* Photo side */}
          <div className="w-full lg:w-5/12 ml:w-1/2 relative">
            <motion.div style={{ y: imgY }} className="relative h-[600px] w-full rounded-2xl overflow-hidden bg-gradient-to-t from-adani-blue/20 to-transparent flex items-end justify-center">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/images/welcome.avif)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-adani-dark/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
                <div className="flex items-center gap-1 text-adani-orange font-bold text-2xl">
                  ★ 4.7
                </div>
                <div className="text-white text-sm font-bold uppercase tracking-wider">
                  53 Google Reviews
                </div>
              </div>
            </motion.div>
          </div>

          {/* Text side */}
          <div className="w-full lg:w-7/12 ml:w-1/2">
            <div ref={textRef} className="bg-white rounded-3xl p-8 lg:p-14 shadow-2xl relative">
              <div className="absolute -top-6 -left-6 text-8xl text-adani-blue/20 font-serif leading-none">
                &quot;
              </div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl lg:text-3xl font-heading font-bold text-adani-dark mb-6"
              >
                {HOME_WELCOME.heading}
              </motion.h3>
              {HOME_WELCOME.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (i + 1) }}
                  className="text-gray-600 font-body leading-relaxed mb-4"
                >
                  {p}
                </motion.p>
              ))}

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 mt-2">
                {HOME_WELCOME.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-3 h-3 rounded-full bg-adani-orange mt-2 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-100">
                <div className="bg-adani-blue/10 p-3 rounded-full text-adani-blue">
                   <ArrowRight className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl font-heading text-adani-dark">{WELCOME.name}</h4>
                  <p className="text-gray-500 font-medium mb-1">{WELCOME.title}</p>
                  <Link href={WELCOME.profileLink} className="text-adani-orange hover:text-adani-blue text-sm font-bold uppercase tracking-wide transition-colors">
                    {WELCOME.profileText}
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
