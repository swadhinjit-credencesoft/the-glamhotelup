import type { Metadata } from "next";
import { RoomDetailClient } from "@/components/page/RoomDetailClient";

export function generateStaticParams() {
  return [{ slug: "deluxe-room" }, { slug: "suite-room" }];
}

export const metadata: Metadata = {
  title: "Room Details",
  description: "Explore our rooms and suites at The Glam, Greater Noida.",
};

export default function RoomDetailPage({ params }: { params: { slug: string } }) {
  return <RoomDetailClient slug={params.slug} />;
}
