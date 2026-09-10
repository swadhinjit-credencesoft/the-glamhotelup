import type { Metadata } from "next";
import { HeroSlider } from "@/features/home/components/HeroSlider";
import { WelcomeSection } from "@/features/about/components/WelcomeSection";
import { RoomsShowcase } from "@/features/rooms/components/RoomsShowcase";
import { LocationSection } from "@/features/location/components/LocationSection";
import { ReviewSection } from "@/features/reviews/components/ReviewSection";
import { JoinUsSection } from "@/features/booking/components/JoinUsSection";
import { HotelSchema, OrganizationSchema, WebSiteSchema } from "@/components/seo/Schema";

export const metadata: Metadata = {
  title: { absolute: "The Glam | Boutique Hotel in Ansal Golf Link, Greater Noida" },
  description:
    "The Glam by Sandane Homes — a 22-room boutique hotel in Ansal Golf Link-1, Greater Noida, close to India Expo Centre & Mart. AC rooms, king beds, free Wi-Fi, private parking and daily housekeeping. Rated 4.8/5 by 71 guests.",
  keywords: [
    "boutique hotel Greater Noida",
    "hotel near India Expo Centre",
    "The Glam Ansal Golf Link",
  ],
};

export default function Home() {
  return (
    <>
      <h1 className="sr-only">
        The Glam | Boutique Hotel in Ansal Golf Link, Greater Noida near India Expo Centre
      </h1>
      <link rel="preload" as="image" href="/glam-july/glam-4.avif" fetchPriority="high" />
      <HotelSchema />
      <OrganizationSchema />
      <WebSiteSchema />

      <HeroSlider />
      <WelcomeSection />
      <RoomsShowcase />
      <LocationSection />
      <ReviewSection />
      <JoinUsSection />
    </>
  );
}
