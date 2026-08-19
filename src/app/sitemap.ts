import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data/site";
import { ROOMS } from "@/lib/data/rooms";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const staticPages = [
    "",
    "/about-us",
    "/amenities",
    "/book-now",
    "/cancellation-policy",
    "/contact",
    "/faq",
    "/gallery",
    "/guest-policies",
    "/location",
    "/offers",
    "/privacy-policy",
    "/reviews",
    "/rooms",
    "/sitemap",
    "/terms-of-use",
  ];

  return [
    ...staticPages.map((page) => ({
      url: `${base}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.7,
    })),
    ...ROOMS.map((room) => ({
      url: `${base}/rooms/${room.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
