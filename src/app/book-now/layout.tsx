import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Stay",
  description:
    "Book your stay at The Glam, Greater Noida. Direct booking for deluxe, luxury and suite rooms near India Expo Centre.",
  robots: { index: false, follow: false },
};

export default function BookNowLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}