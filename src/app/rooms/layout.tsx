import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "Discover deluxe, luxury and suite rooms at The Glam, Greater Noida — king beds, private bathrooms, air conditioning, complimentary Wi-Fi, workspaces and daily housekeeping. Perfect for business and leisure stays near India Expo Centre.",
};

export default function RoomsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}