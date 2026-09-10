"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  const initial = reduceMotion || firstRender.current ? false : { opacity: 0, y: 20 };

  return (
    <motion.div
      key={pathname}
      initial={initial}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}