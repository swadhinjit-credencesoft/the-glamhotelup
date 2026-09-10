import type { MetadataRoute } from "next";
import { SITE } from "@/lib/config/site";
import { POSTS } from "@/features/blog/lib/posts";

const ROOM_SLUGS = ["deluxe-room", "suite-room", "luxury-room"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const staticPages = [
    "",
    "/about-us",
    "/amenities",
    "/blog",
    "/cancellation-policy",
    "/contact",
    "/faq",
    "/gallery",
    "/guest-policies",
    "/hotel-near-india-expo-centre",
    "/location",
    "/location/india-expo-centre",
    "/location/pari-chowk",
    "/location/ansal-golf-link",
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
      priority: page === "" ? 1 : page === "/hotel-near-india-expo-centre" ? 0.8 : 0.7,
    })),
    ...ROOM_SLUGS.map((slug) => ({
      url: `${base}/rooms/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...POSTS.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
