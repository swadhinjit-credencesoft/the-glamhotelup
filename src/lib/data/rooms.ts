export interface NearbyPlace {
  name: string;
  distance: string;
  description: string;
  category: string;
  image: string;
}

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
