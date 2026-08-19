import type { Metadata } from "next";
import { BookNowClient } from "@/components/page/BookNowClient";

export const metadata: Metadata = {
  title: "Book Your Stay",
  description:
    "Book your stay at The Glam, Greater Noida. Check-in 12:00 PM, check-out 11:00 AM. Call +91 8796321915 or WhatsApp to reserve your room near India Expo Centre.",
};

export default function BookNowPage() {
  return <BookNowClient />;
}
