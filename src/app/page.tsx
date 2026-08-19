import { HeroSlider } from "@/components/home/HeroSlider";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { RoomsShowcase } from "@/components/home/RoomsShowcase";
import { LocationSection } from "@/components/home/LocationSection";
import { ReviewSection } from "@/components/home/ReviewSection";
import { JoinUsSection } from "@/components/home/JoinUsSection";
import { HotelSchema, OrganizationSchema, WebSiteSchema } from "@/components/seo/Schema";

export default function Home() {
  return (
    <>
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
