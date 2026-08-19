import type { ApiRoom } from "@/lib/api/types";

export interface MappedRoom {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  minOccupancy: number;
  maxOccupancy: number;
  totalRooms: number;
  availableRooms: number;
  images: string[];
  thumbnail: string;
  largeImage: string;
  ratePlans: { code: string; name: string; amount: number }[];
}

const SLUG_MAP: Record<string, string> = {
  "Deluxe Room": "deluxe-room",
  Suite: "suite",
  "Luxury Room": "luxury-room",
};

const REVERSE_SLUG_MAP: Record<string, number> = {
  "deluxe-room": 8840,
  suite: 8841,
  "luxury-room": 8841,
};

export function encodeImageUrl(url: string): string {
  try {
    return new URL(url).toString();
  } catch {
    return url;
  }
}

export function getSlugFromName(name: string): string {
  return SLUG_MAP[name] ?? name.toLowerCase().replace(/\s+/g, "-");
}

export function getIdFromSlug(slug: string): number | undefined {
  return REVERSE_SLUG_MAP[slug];
}

export function mapApiRoom(room: ApiRoom): MappedRoom {
  const images = room.imageList?.map((img) => encodeImageUrl(img.url)) ?? [];
  const availability = room.ratesAndAvailabilityDtos?.[0];
  const ratePlans =
    availability?.roomRatePlans?.map((rp) => ({
      code: rp.code,
      name: rp.name,
      amount: rp.amount,
    })) ?? [];

  return {
    id: room.id,
    slug: getSlugFromName(room.name),
    name: room.name,
    description: stripHtml(room.description),
    price: room.roomOnlyPrice,
    currency: "INR",
    minOccupancy: room.minimumOccupancy,
    maxOccupancy: room.maximumOccupancy,
    totalRooms: room.noOfRooms,
    availableRooms: availability?.noOfAvailable ?? room.noOfRooms,
    images,
    thumbnail: images[0] ?? "/images/01.jpg",
    largeImage: images[0] ?? "/images/01.jpg",
    ratePlans,
  };
}

export function mapApiRooms(rooms: ApiRoom[]): MappedRoom[] {
  return rooms.map(mapApiRoom);
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}
