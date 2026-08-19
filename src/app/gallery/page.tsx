import type { Metadata } from "next";
import { GalleryClient } from "@/components/page/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery of The Glam — deluxe, luxury and suite rooms, modern bathrooms, common areas and in-room lifestyle in Greater Noida.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
