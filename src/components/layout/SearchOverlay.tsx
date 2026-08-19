"use client";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import Link from "next/link";
import { POPULAR_PAGES } from "@/lib/data/site";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function SearchOverlay({ open, onClose }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] bg-adani-dark/95 backdrop-blur-sm flex flex-col pt-32 px-4 lg:px-0 items-center overflow-y-auto"
        >
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 text-white hover:text-adani-orange transition-colors"
            aria-label="Close search"
          >
            <X className="w-10 h-10" />
          </button>

          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-4xl"
          >
            <div className="relative border-b-2 border-white/30 focus-within:border-adani-orange transition-colors pb-4 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 text-white/50" />
              <input
                ref={inputRef}
                type="text"
                placeholder="What are you looking for?"
                className="w-full bg-transparent text-white text-3xl md:text-5xl font-heading font-light outline-none pl-16 md:pl-20 placeholder:text-white/30"
              />
            </div>

            <div className="mt-16">
              <h3 className="text-white/50 font-bold tracking-widest uppercase text-sm mb-6">Popular Pages</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {POPULAR_PAGES.map(page => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      onClick={onClose}
                      className="text-white text-xl md:text-2xl font-body hover:text-adani-orange transition-colors block p-4 hover:bg-white/5 rounded-lg"
                    >
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
