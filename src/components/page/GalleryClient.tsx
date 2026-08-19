"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/page/PageHero";
import { GALLERY } from "@/lib/data/gallery";

const ALL = { id: "all", title: "All", description: "", images: GALLERY.flatMap((c) => c.images) };

export function GalleryClient() {
  const [activeId, setActiveId] = useState("all");
  const active = activeId === "all" ? ALL : GALLERY.find((c) => c.id === activeId)!;

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
        title="Gallery"
        subtitle="A glimpse of The Glam — rooms, bathrooms, common areas and lifestyle."
        height="h-[55vh] min-h-[450px]"
        overlayClass="bg-adani-dark opacity-80"
      />

      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-gray-200 pb-6">
            {[ALL, ...GALLERY].map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveId(category.id)}
                className={`px-5 py-2 font-bold text-sm uppercase tracking-wide transition-colors ${
                  activeId === category.id ? "text-adani-blue border-b-2 border-adani-blue" : "text-gray-500 hover:text-adani-dark"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {active.images.map((image, i) => (
              <motion.div
                layout
                key={`${active.id}-${i}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-200 shadow-sm cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${image.src})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-4 left-4 right-4 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
