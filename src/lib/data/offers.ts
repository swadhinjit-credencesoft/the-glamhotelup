export interface OfferCard {
  id: number;
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
  cta: string;
  link: string;
  img: string;
}

export const OFFERS: OfferCard[] = [
  {
    id: 1,
    eyebrow: "Corporate",
    title: "Corporate Stays in Greater Noida",
    desc: "A convenient accommodation option for travelling professionals, business delegates and visiting teams near Greater Noida's business and exhibition destinations.",
    bullets: [
      "Work-friendly rooms with dedicated desks",
      "High-speed Wi-Fi",
      "Daily housekeeping",
      "Professional guest assistance",
      "Flexible stay options",
    ],
    cta: "Enquire for Corporate Stay",
    link: "/contact",
    img: "/images/12.jpg",
  },
  {
    id: 2,
    eyebrow: "Expo",
    title: "Stay Near India Expo Centre",
    desc: "Plan your trip around an event at India Expo Centre & Mart — the property is approximately 1.5 km walking / 2.5 km driving depending on route.",
    bullets: [
      "Convenient base for exhibitors and visitors",
      "Comfortable rooms after a long expo day",
      "Easy access to the venue",
      "Friendly, professional service",
    ],
    cta: "Enquire for Expo Stay",
    link: "/contact",
    img: "/images/01.jpg",
  },
  {
    id: 3,
    eyebrow: "Long Stay",
    title: "Planning an Extended Stay?",
    desc: "Thinking about staying longer in Greater Noida? Contact our team to discuss availability and suitable accommodation options.",
    bullets: [
      "Extended stay enquiries welcome",
      "Comfortable, serviced accommodation",
      "Flexible arrangements on request",
      "Housekeeping and assistance throughout",
    ],
    cta: "Enquire for Long Stay",
    link: "/contact",
    img: "/images/03.jpg",
  },
  {
    id: 4,
    eyebrow: "Direct",
    title: "Direct Booking Benefits",
    desc: "We are happy to assist with direct enquiries — reach out and our team will help you plan a comfortable stay.",
    bullets: [
      "Direct booking assistance",
      "Flexible enquiry support",
      "Special event and expo stay requests",
      "Clear, helpful communication",
    ],
    cta: "Book Directly",
    link: "https://bookone.io/The-Glam-By-Sandane-Homes?bookingEngine=true",
    img: "/images/06.jpg",
  },
];

export const OFFERS_NOTE =
  "Offers and benefits shown here are indicative and subject to availability. Specific discounts, free breakfast, early check-in or late checkout are only advertised once confirmed by the property.";
