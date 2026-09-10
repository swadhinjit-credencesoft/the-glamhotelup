import { HeroSlider } from "@/features/home/components/HeroSlider";
import { WelcomeSection } from "@/features/about/components/WelcomeSection";
import { RoomsShowcase } from "@/features/rooms/components/RoomsShowcase";
import { LocationSection } from "@/features/location/components/LocationSection";
import { ReviewSection } from "@/features/reviews/components/ReviewSection";
import { JoinUsSection } from "@/features/booking/components/JoinUsSection";
import { HotelSchema, OrganizationSchema, WebSiteSchema } from "@/components/seo/Schema";

export default function Home() {
  return (
    <>
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
