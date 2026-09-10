import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BedDouble, Home, MapPin, Phone, Sparkles } from "lucide-react";
import { SITE, CONTACT } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

const QUICK_LINKS = [
  { label: "Rooms & Suites", href: "/rooms", icon: BedDouble },
  { label: "Amenities", href: "/amenities", icon: Sparkles },
  { label: "Location", href: "/location", icon: MapPin },
  { label: "Contact", href: "/contact", icon: Phone },
];

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col bg-adani-dark text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url(/glam-july/glam-4.avif)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-adani-dark/70 via-adani-dark/60 to-adani-dark" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-adani-blue to-transparent" aria-hidden="true" />

      <div className="relative z-10 container flex-1 flex flex-col items-center justify-center text-center py-32 px-4">
        <h1 className="sr-only">Page Not Found</h1>

        <p className="font-barlow text-sm md:text-base font-bold uppercase tracking-[0.35em] text-adani-orange mb-10">
          {SITE.name} &middot; Greater Noida
        </p>

        <p
          aria-hidden="true"
          className="font-heading font-bold leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-adani-blue text-[10rem] md:text-[17rem] select-none"
        >
          404
        </p>

        <div className="w-16 h-px bg-adani-blue my-10" aria-hidden="true" />

        <p className="font-heading italic text-2xl md:text-3xl text-white/90 mb-4">This suite doesn&apos;t exist.</p>
        <p className="max-w-xl text-white/60 text-lg leading-relaxed mb-12">
          The page you are looking for may have moved or been reserved for another guest.
          Let us guide you back to a room that&apos;s waiting.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-adani-orange hover:bg-adani-blue text-white px-9 py-4 font-barlow font-bold text-sm uppercase tracking-[0.2em] rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-adani-orange/20"
          >
            <Home className="w-5 h-5" /> Return to Home
          </Link>
          <Link
            href="/rooms"
            className="inline-flex items-center gap-3 border border-white/25 text-white hover:border-adani-orange hover:text-adani-orange px-9 py-4 font-barlow font-bold text-sm uppercase tracking-[0.2em] rounded-full transition-all duration-300"
          >
            Explore Rooms &amp; Suites <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <nav aria-label="Quick links" className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 mb-8">
          {QUICK_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white/50 hover:text-adani-orange transition-colors font-barlow font-bold"
              >
                <Icon className="w-4 h-4" /> {link.label}
              </Link>
            );
          })}
        </nav>

        <p className="text-sm text-white/40">
          Prefer to speak with someone?{" "}
          <a href={CONTACT.telephoneHref} className="text-adani-orange font-bold hover:text-white transition-colors">
            {CONTACT.telephone}
          </a>
        </p>
      </div>

      <div className="relative z-10 pb-10 text-center">
        <p className="font-barlow text-xs uppercase tracking-[0.35em] text-white/25">
          {SITE.fullName} &middot; Boutique Hotel in Greater Noida
        </p>
      </div>
    </main>
  );
}