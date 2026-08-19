export interface HeroSlide {
  id: number;
  image: string;
  eyebrow?: string;
  boldLine?: string;
  title?: string;
  subtitle?: string;
  ctaText: string;
  ctaLink: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: "/homehero1.avif",
    eyebrow: "The Glam",
    boldLine: "Stay in Style. Feel at Home.",
    subtitle: "A comfortable and contemporary stay in Greater Noida, ideally located near India Expo Centre & Mart.",
    ctaText: "Book Your Stay",
    ctaLink: "/book-now",
  },
  {
    id: 2,
    image: "/DeluxeRoom1homehero.avif",
    title: "Comfortable Rooms, Thoughtful Details",
    subtitle: "Deluxe, Luxury and Suite rooms with king beds and private bathrooms",
    ctaText: "Explore Rooms",
    ctaLink: "/rooms",
  },
  {
    id: 3,
    image: "/homehero3.avif",
    title: "Designed for Business & Leisure",
    subtitle: "Work-friendly spaces, high-speed Wi-Fi and daily housekeeping",
    ctaText: "View Amenities",
    ctaLink: "/amenities",
  },
  {
    id: 4,
    image: "/homehero1.avif",
    title: "Near India Expo Centre & Mart",
    subtitle: "Ansal Golf Link-1 • Knowledge Park • Greater Noida",
    ctaText: "Get Directions",
    ctaLink: "https://www.google.com/maps/dir/?api=1&destination=The+Glam+Plot+No+AE-189+Block+A+Ansal+Golf+Link-1+Greater+Noida+201315",
  },
];

export const JOIN_US_CARDS = [
  { id: 1, label: "Deluxe Room", link: "/rooms/deluxe-room", img: "/images/deluxe-room.avif", fallback: "bg-adani-blue" },
  { id: 2, label: "Luxury Room", link: "/rooms/luxury-room", img: "/images/06.jpg", fallback: "bg-adani-orange" },
  { id: 3, label: "Suite Room", link: "/rooms/suite-room", img: "/images/suite-room.avif", fallback: "bg-adani-green" },
  { id: 4, label: "Book Your Stay", link: "/book-now", img: "/images/welcome.avif", fallback: "bg-adani-dark" },
];

export const HOME_WELCOME = {
  heading: "Welcome to The Glam",
  paragraphs: [
    "Experience a comfortable and stylish stay in Greater Noida at The Glam. Located in Ansal Golf Link-1, our property combines contemporary accommodation with the convenience of a well-connected location.",
    "Whether you're visiting for business, an exhibition at India Expo Centre & Mart, medical appointments, education, leisure or an extended stay, The Glam provides a practical and welcoming base for your visit.",
  ],
  points: [
    "Air-conditioned accommodation",
    "Complimentary Wi-Fi",
    "Private bathrooms",
    "Work-friendly spaces",
    "Daily housekeeping",
  ],
};
