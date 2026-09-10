export interface ReviewQuote {
  id: number;
  quote: string;
  author: string;
  context: string;
}

export const REVIEW_STATS = {
  googleRating: "4.8",
  googleReviews: "71",
  platforms: [
    { name: "Google", score: "4.8 / 5", note: "71 reviews" },
    { name: "Booking.com", score: "8.2 / 10", note: "14 reviews" },
    { name: "Agoda", score: "8.7 / 10", note: "11 reviews" },
    { name: "MakeMyTrip", score: "4.1 / 5", note: "18 reviews" },
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
      "Decent service, polite behaviour of staff, and all new rooms.",
    author: "Adarsh Kumar",
    context: "Google review",
  },
  {
    id: 2,
    quote:
      "I just loved the place and people there — recommended.",
    author: "Vivek Yadav",
    context: "Google review",
  },
  {
    id: 3,
    quote:
      "I stayed with family for two days. The rooms were spotless, comfortable, and the staff was extremely helpful.",
    author: "Reuben Valadares",
    context: "Google review",
  },
];

export const REVIEW_DISCLAIMER =
  "Review scores above reflect ratings on independent travel platforms, which use their own review pools. The Google rating reflects our Google Business Profile. We never combine platform scores into a single rating.";
