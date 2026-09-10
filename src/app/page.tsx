import type { Metadata } from "next";
import { HeroSlider } from "@/features/home/components/HeroSlider";
import { WelcomeSection } from "@/features/about/components/WelcomeSection";
import { RoomsShowcase } from "@/features/rooms/components/RoomsShowcase";
import { LocationSection } from "@/features/location/components/LocationSection";
import { ReviewSection } from "@/features/reviews/components/ReviewSection";
import { JoinUsSection } from "@/features/booking/components/JoinUsSection";
import { BlogTeaser } from "@/features/blog/components/BlogTeaser";
import { HotelSchema, OrganizationSchema, WebSiteSchema } from "@/components/seo/Schema";

export const metadata: Metadata = {
  title: { absolute: "The Glam by Sandane Homes | Hotel Near India Expo Centre, Greater Noida" },
  description:
    "Stay at The Glam by Sandane Homes in Greater Noida, near India Expo Centre & Mart and Pari Chowk. Comfortable rooms, Wi-Fi, parking and convenient business stays. Book direct.",
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
        Boutique Hotel Near India Expo Centre, Greater Noida
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
      <BlogTeaser />
      <JoinUsSection />
    </>
  );
}
