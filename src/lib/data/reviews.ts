export interface ReviewQuote {
  id: number;
  quote: string;
  author: string;
  context: string;
}

export const REVIEW_STATS = {
  googleRating: "4.7",
  googleReviews: "53",
  platforms: [
    { name: "Google", score: "4.7 / 5", note: "53 reviews" },
    { name: "Booking.com", score: "8.5 / 10", note: "Based on guest reviews" },
    { name: "Expedia", score: "8.6 / 10", note: "Based on guest reviews" },
    { name: "Hotels.com", score: "8.8 / 10", note: "Based on guest reviews" },
  ],
};

export const REVIEW_THEMES = [
  { icon: "sparkles", title: "Immaculate Cleanliness", desc: "Guests consistently praise spotless rooms and fresh linen." },
  { icon: "smile", title: "Helpful Staff", desc: "Warm, attentive service that makes stays easy and enjoyable." },
  { icon: "leaf", title: "Peaceful Environment", desc: "A calm, quiet setting to rest after a busy day." },
  { icon: "map-pin", title: "Great Location", desc: "Convenient access to India Expo Centre and Greater Noida." },
  { icon: "wallet", title: "Excellent Value", desc: "Comfortable, well-appointed rooms at sensible prices." },
  { icon: "bed-double", title: "Comfortable Rooms", desc: "Comfortable beds and thoughtfully designed rooms." },
];

export const REVIEW_QUOTES: ReviewQuote[] = [
  {
    id: 1,
    quote:
      "A clean and comfortable stay. The staff were extremely helpful and the location is very convenient for Expo Mart.",
    author: "Verified guest",
    context: "Business stay",
  },
  {
    id: 2,
    quote:
      "Peaceful environment, comfortable room and good Wi-Fi. Great value for money in Greater Noida.",
    author: "Verified guest",
    context: "Leisure stay",
  },
  {
    id: 3,
    quote:
      "Perfect for an expo visit. Well-maintained rooms and courteous service throughout our stay.",
    author: "Verified guest",
    context: "Expo stay",
  },
];

export const REVIEW_DISCLAIMER =
  "Review scores above reflect ratings on independent travel platforms, which use their own review pools. The Google rating reflects our Google Business Profile. We never combine platform scores into a single rating.";
