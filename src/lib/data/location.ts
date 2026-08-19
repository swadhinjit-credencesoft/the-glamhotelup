import { NEARBY_ATTRACTIONS } from "./rooms";

export const LOCATION_INTRO = {
  heading: "The Glam – Greater Noida",
  paragraph:
    "Located in Ansal Golf Link-1, The Glam places you within easy reach of Greater Noida's business, exhibition, healthcare and education hubs. Whether you are visiting for an expo, a corporate assignment or leisure, our location makes it simple to get where you need to be.",
};

export const LOCATION_PANELS = [
  {
    id: 1,
    eyebrow: "Location",
    heading: "Near India Expo Centre & Mart",
    stat: "~1.5 KM WALK / ~2.5 KM DRIVE",
    linkText: "Get Directions",
    link: "https://www.google.com/maps/dir/?api=1&destination=The+Glam+Plot+No+AE-189+Block+A+Ansal+Golf+Link-1+Greater+Noida+201315",
    image: "/images/04.jpg",
  },
  {
    id: 2,
    eyebrow: "Connectivity",
    heading: "Knowledge Park Metro At Your Doorstep",
    stat: "~1.6 KM FROM KNOWLEDGE PARK II METRO",
    linkText: "View Nearby Places",
    link: "/location#nearby",
    image: "/images/10.jpg",
  },
  {
    id: 3,
    eyebrow: "Comfort",
    heading: "The Glam",
    stat: "STYLISH STAYS • KING BEDS • HIGH-SPEED WI-FI",
    linkText: "Explore Rooms",
    link: "/rooms",
    image: "/images/03.jpg",
  },
];

export { NEARBY_ATTRACTIONS };
