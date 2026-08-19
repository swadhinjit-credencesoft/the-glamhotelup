export interface RoomFeature {
  label: string;
}

export interface RoomCategory {
  id: string;
  name: string;
  link: string;
  thumbnail: string;
  largeImage: string;
  tagline: string;
  intro: string;
  size: string;
  capacity: string;
  bed: string;
  view: string;
  highlights: RoomFeature[];
  amenities: string[];
  priceNote: string;
}

export interface NearbyPlace {
  name: string;
  distance: string;
  description: string;
  category: string;
  image: string;
}

export const ROOMS: RoomCategory[] = [
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    link: "/rooms/deluxe-room",
    thumbnail: "/images/deluxe-room.avif",
    largeImage: "/images/deluxe-room.avif",
    tagline: "Comfort and convenience for every stay",
    intro:
      "A comfortable and contemporary room designed for both business and leisure travellers. The Deluxe Room features a king bed, private bathroom, air conditioning, complimentary Wi-Fi, workspace and a separate sitting area.",
    size: "Approx. 14 m² / 150 sq ft",
    capacity: "2 guests",
    bed: "1 King Bed",
    view: "City view",
    highlights: [
      { label: "King Bed" },
      { label: "Private Bathroom" },
      { label: "Complimentary Wi-Fi" },
      { label: "Work Desk" },
      { label: "Air Conditioning" },
      { label: "Daily Housekeeping" },
    ],
    amenities: [
      "Air conditioning",
      "King bed",
      "Private bathroom with shower",
      "Fluffy towels & toiletries",
      "Flat-screen TV",
      "Laptop-friendly workspace",
      "Separate sitting area",
      "Complimentary Wi-Fi (100+ Mbps)",
      "Kettle",
      "Mineral water",
      "Wardrobe / storage",
      "Daily housekeeping",
    ],
    priceNote: "Best available rates on enquiry",
  },
  {
    id: "luxury-room",
    name: "Luxury Room",
    link: "/rooms/luxury-room",
    thumbnail: "/images/06.jpg",
    largeImage: "/images/06.jpg",
    tagline: "More space, a relaxed setting, a productive stay",
    intro:
      "Enjoy additional space and a relaxed setting in our Luxury Room. Designed for guests who value comfort, privacy and productivity, the room combines a king bed with a sitting area, workspace, private bathroom and complimentary high-speed Wi-Fi.",
    size: "Approx. 19 m²",
    capacity: "2 guests",
    bed: "1 King Bed",
    view: "Quiet, comfortable view",
    highlights: [
      { label: "King Bed" },
      { label: "Spacious Layout" },
      { label: "Sitting Area" },
      { label: "Work Desk" },
      { label: "Private Bathroom" },
      { label: "High-Speed Wi-Fi" },
    ],
    amenities: [
      "Air conditioning",
      "King bed",
      "Expanded sitting area",
      "Private bathroom with shower",
      "Flat-screen TV",
      "Dedicated laptop-friendly workspace",
      "Complimentary Wi-Fi (100+ Mbps)",
      "Kettle",
      "Mineral water",
      "Wardrobe / storage",
      "Daily housekeeping",
    ],
    priceNote: "Best available rates on enquiry",
  },
  {
    id: "suite-room",
    name: "Suite Room",
    link: "/rooms/suite-room",
    thumbnail: "/images/suite-room.avif",
    largeImage: "/images/suite-room.avif",
    tagline: "Additional comfort for a refined stay",
    intro:
      "Relax in a more spacious accommodation option designed for guests looking for additional comfort during their stay. The Suite includes a king bed, private bathroom, air conditioning, Wi-Fi, TV, kettle and mineral water.",
    size: "Spacious (please confirm on enquiry)",
    capacity: "2 guests",
    bed: "1 King Bed",
    view: "Comfortable, quiet view",
    highlights: [
      { label: "King Bed" },
      { label: "Private Bathroom" },
      { label: "Air Conditioning" },
      { label: "Wi-Fi" },
      { label: "TV" },
      { label: "Kettle & Mineral Water" },
    ],
    amenities: [
      "Air conditioning",
      "King bed",
      "Private bathroom with shower",
      "Flat-screen TV",
      "Complimentary Wi-Fi",
      "Kettle",
      "Mineral water",
      "Wardrobe / storage",
      "Daily housekeeping",
      "Extra mattress on request",
    ],
    priceNote: "Best available rates on enquiry",
  },
];

export const NEARBY_ATTRACTIONS: NearbyPlace[] = [
  {
    name: "India Expo Centre & Mart",
    distance: "~1.5 km walk / ~2.5 km drive",
    description:
      "A premier venue for exhibitions, trade fairs and business events in Greater Noida.",
    category: "Exhibitions",
    image: "/images/04.jpg",
  },
  {
    name: "Knowledge Park II Metro Station",
    distance: "~1.6 km",
    description:
      "Aqua Line metro connectivity to Noida, Delhi and beyond.",
    category: "Transport",
    image: "/images/10.jpg",
  },
  {
    name: "Yatharth Wellness Hospital",
    distance: "~1.6 km",
    description:
      "Multi-speciality hospital providing round-the-clock healthcare.",
    category: "Healthcare",
    image: "/images/09.jpg",
  },
  {
    name: "Stellar Children's Museum",
    distance: "~2.2 km",
    description:
      "A family-friendly science and discovery museum for children.",
    category: "Family",
    image: "/images/06.jpg",
  },
  {
    name: "Apollo Cradle & Children's Hospital",
    distance: "~2.2 km",
    description:
      "Specialist maternity and children's hospital in the Knowledge Park area.",
    category: "Healthcare",
    image: "/images/08.jpg",
  },
  {
    name: "Pari Chowk",
    distance: "~3–4 km",
    description:
      "A popular Greater Noida landmark with malls, restaurants and shopping.",
    category: "Shopping",
    image: "/images/07.jpg",
  },
  {
    name: "F1 Track (Buddh International Circuit)",
    distance: "~4.3 km",
    description:
      "India's premier motorsport circuit hosting global racing events.",
    category: "Motorsport",
    image: "/images/11.jpg",
  },
];

export function getRoomById(id: string): RoomCategory | undefined {
  return ROOMS.find((room) => room.id === id);
}

export function getRoomBySlug(slug: string): RoomCategory | undefined {
  return ROOMS.find((room) => room.id === slug);
}
