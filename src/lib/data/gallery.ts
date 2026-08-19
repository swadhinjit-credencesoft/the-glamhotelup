export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryCategory {
  id: string;
  title: string;
  description: string;
  images: GalleryImage[];
}

export const GALLERY: GalleryCategory[] = [
  {
    id: "rooms",
    title: "Rooms & Suites",
    description: "Thoughtfully designed spaces for rest and work.",
    images: [
      { src: "/images/deluxe-room.avif", alt: "Deluxe room with king bed" },
      { src: "/images/06.jpg", alt: "Luxury room interior" },
      { src: "/images/suite-room.avif", alt: "Suite lounge area" },
      { src: "/images/01.jpg", alt: "Elegant hotel bed" },
    ],
  },
  {
    id: "bathrooms",
    title: "Bathrooms",
    description: "Modern private bathrooms with quality essentials.",
    images: [
      { src: "/images/08.jpg", alt: "Modern hotel bathroom" },
      { src: "/images/09.jpg", alt: "Shower and vanity" },
    ],
  },
  {
    id: "spaces",
    title: "Common Areas",
    description: "Welcoming reception and relaxing common spaces.",
    images: [
      { src: "/images/04.jpg", alt: "Warm reception area" },
      { src: "/images/10.jpg", alt: "Hotel lobby lounge" },
      { src: "/images/11.jpg", alt: "Sitting and lounge area" },
    ],
  },
  {
    id: "lifestyle",
    title: "Lifestyle",
    description: "Workspaces, bedding and thoughtful in-room touches.",
    images: [
      { src: "/images/12.jpg", alt: "Laptop-friendly work desk" },
      { src: "/images/13.jpg", alt: "Hotel room interior" },
      { src: "/images/14.jpg", alt: "Cozy hotel room with bed" },
    ],
  },
];
