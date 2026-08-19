export interface Stat {
  id: number;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export const ABOUT_INTRO = {
  heading: "A stylish, comfortable boutique stay in Greater Noida",
  paragraph1:
    "The Glam is a stylish boutique hotel in Ansal Golf Link-1, Greater Noida. Created for guests who value comfort, convenience and a contemporary stay experience, The Glam combines practical hotel accommodation with the warmth and flexibility associated with serviced hospitality.",
  paragraph2:
    "Whether you are visiting Greater Noida for an exhibition at India Expo Centre & Mart, a business assignment, medical appointments, education, or leisure, The Glam offers a convenient and welcoming base in Ansal Golf Link-1.",
};

export const ABOUT_STATS: Stat[] = [
  { id: 1, value: 22, suffix: "", label: "Guest Rooms" },
  { id: 2, value: 4.7, suffix: "/5", label: "Google Rating" },
  { id: 3, value: 53, suffix: "", label: "Google Reviews" },
  { id: 4, value: 100, suffix: "+ Mbps", label: "Wi-Fi Speed" },
];

export const ABOUT_CARDS = [
  { id: 1, title: "Rooms & Suites", link: "/rooms", img: "/images/01.jpg" },
  { id: 2, title: "Amenities", link: "/amenities", img: "/images/12.jpg" },
  { id: 3, title: "Location", link: "/location", img: "/images/04.jpg" },
  { id: 4, title: "Guest Reviews", link: "/reviews", img: "/images/10.jpg" },
];

export const WELCOME = {
  quote:
    "Welcome to The Glam. Experience a comfortable and stylish stay in Greater Noida — contemporary accommodation with the convenience of a well-connected location, close to India Expo Centre & Mart.",
  highlightWords: ["stylish", "Expo Centre", "comfortable"],
  name: "The Glam",
  title: "Ansal Golf Link-1, Greater Noida",
  profileLink: "/about-us",
  profileText: "About The Glam",
};
