import type { CSSProperties } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  subtitle?: string;
  overlayClass?: string;
  bgImage?: string;
  bgImageStyle?: CSSProperties;
  height?: string;
}

export function PageHero({
  breadcrumbs,
  title,
  subtitle,
  overlayClass,
  bgImage,
  bgImageStyle,
  height = "h-[50vh] min-h-[400px]",
}: PageHeroProps) {
  return (
    <section
      className={`relative w-full ${height} flex items-end pb-16 bg-adani-dark text-white pt-32`}
    >
      {overlayClass && <div className={`absolute inset-0 ${overlayClass}`} />}
      {bgImage && <div className={`absolute inset-0 ${bgImage} bg-cover bg-center`} />}
      {bgImageStyle && <div className="absolute inset-0 bg-cover bg-center" style={bgImageStyle} />}
      {!bgImage && !bgImageStyle && (
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/01.jpg)" }} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-adani-dark to-transparent" />
      <div className="container relative z-10 w-full flex flex-col items-start gap-4">
        <nav className="flex flex-wrap items-center gap-2 text-sm font-bold tracking-widest uppercase text-gray-400">
          {breadcrumbs.map((crumb, i) => (
            <div key={i} className="flex items-center gap-2">
              {i > 0 && <ChevronRight className="w-4 h-4 flex-shrink-0" />}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-white transition-colors flex-shrink-0"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white flex-shrink-0">{crumb.label}</span>
              )}
            </div>
          ))}
        </nav>
        <h1 className="text-5xl md:text-7xl font-bold font-heading">{title}</h1>
        {subtitle && (
          <p className="text-xl max-w-2xl mt-4 text-white/90">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
