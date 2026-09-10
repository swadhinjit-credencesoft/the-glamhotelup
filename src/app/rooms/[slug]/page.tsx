import type { Metadata } from "next";
import { RoomDetailClient } from "@/features/rooms/components/RoomDetailClient";
import { BreadcrumbSchema, RoomSchema } from "@/components/seo/Schema";
import { SITE } from "@/lib/config/site";

const ROOM_META: Record<string, { name: string; title: string; description: string; image: string }> = {
  "deluxe-room": {
    name: "Deluxe Room",
    title: "Deluxe Room with King Bed in Greater Noida",
    description:
      "Stay in a Deluxe Room at The Glam, Greater Noida — king bed, private bathroom, air conditioning, complimentary Wi-Fi and a dedicated workspace. Minutes from India Expo Centre.",
    image: `${SITE.url}/images/deluxe-room.avif`,
  },
  "suite-room": {
    name: "Suite Room",
    title: "Suite Room in Greater Noida near India Expo Centre",
    description:
      "Book a Suite Room at The Glam, Greater Noida — spacious suite with king bed, private bathroom, TV, kettle and complimentary Wi-Fi. Close to India Expo Centre and Knowledge Park.",
    image: `${SITE.url}/images/suite-room.avif`,
  },
  "luxury-room": {
    name: "Luxury Room",
    title: "Luxury Room at The Glam, Greater Noida",
    description:
      "Enjoy a Luxury Room at The Glam, Greater Noida — generous space with king bed, sitting area, workspace and complimentary Wi-Fi, within easy reach of India Expo Mart.",
    image: `${SITE.url}/images/suite-room.avif`,
  },
};

export function generateStaticParams() {
  return Object.keys(ROOM_META).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const room = ROOM_META[params.slug];
  if (!room) {
    return { title: "Room Details", description: "Explore our rooms and suites at The Glam, Greater Noida." };
  }
  return {
    title: room.title,
    description: room.description,
    openGraph: {
      title: `${room.name} | The Glam`,
      description: room.description,
      images: [{ url: room.image, width: 1200, height: 630, alt: `${room.name} at The Glam` }],
    },
  };
}

export default function RoomDetailPage({ params }: { params: { slug: string } }) {
  const room = ROOM_META[params.slug];
  return (
    <>
      {room && (
        <>
          <BreadcrumbSchema
            items={[
              { name: "Home", url: SITE.url },
              { name: "Rooms & Suites", url: `${SITE.url}/rooms` },
              { name: room.name, url: `${SITE.url}/rooms/${params.slug}` },
            ]}
          />
          <RoomSchema name={room.name} description={room.description} image={room.image} url={`${SITE.url}/rooms/${params.slug}`} />
        </>
      )}
      <RoomDetailClient slug={params.slug} />
    </>
  );
}