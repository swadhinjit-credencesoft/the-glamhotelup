export interface NavigationChild {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationChild[];
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "About The Glam", href: "/about-us" },
      { label: "Guest Reviews", href: "/reviews" },
      { label: "Offers", href: "/offers" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Rooms & Suites",
    href: "/rooms",
    children: [], // Handled by RoomsMegaMenu
  },
  { label: "Amenities", href: "/amenities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Location", href: "/location" },
  { label: "Contact Us", href: "/contact" },
];
