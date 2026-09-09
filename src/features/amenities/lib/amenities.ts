export interface AmenityItem {
  icon: string;
  title: string;
  desc: string;
}

export const ROOM_AMENITIES: AmenityItem[] = [
  { icon: "air-vent", title: "Air Conditioning", desc: "Comfortable climate control in all room categories." },
  { icon: "wifi", title: "High-Speed Wi-Fi", desc: "Complimentary in-room Wi-Fi with published speeds of 100+ Mbps." },
  { icon: "bed-double", title: "King Beds", desc: "Plush king beds for a restful night's sleep." },
  { icon: "tv", title: "Flat-Screen TV", desc: "In-room entertainment for a relaxed evening." },
  { icon: "desk", title: "Work-Friendly Desks", desc: "Laptop-friendly workspaces with separate sitting areas." },
  { icon: "bath", title: "Private Bathrooms", desc: "Clean, modern bathrooms with shower and toiletries." },
  { icon: "coffee", title: "Kettle & Tea", desc: "Kettle and refreshment essentials in every room." },
  { icon: "sparkles", title: "Daily Housekeeping", desc: "Thoughtful daily housekeeping to keep your stay fresh." },
];

export const HOTEL_SERVICES: AmenityItem[] = [
  { icon: "clock", title: "24-Hour Front Desk", desc: "Round-the-clock assistance from our front desk team." },
  { icon: "concierge-bell", title: "Guest Assistance", desc: "Caretaker and guest-support team for a seamless stay." },
  { icon: "power", title: "Power Backup", desc: "Uninterrupted power backup for a worry-free experience." },
  { icon: "shower", title: "Hot Water", desc: "Consistent hot water supply in all rooms." },
  { icon: "users", title: "Couple Friendly", desc: "Couples are welcome at our property." },
  { icon: "shield-check", title: "Secure Premises", desc: "Safe, secure and professionally managed premises." },
];

export const AMENITY_HIGHLIGHTS = [
  "Air-conditioned rooms",
  "Complimentary high-speed Wi-Fi",
  "Private bathrooms with shower",
  "King beds with quality linen",
  "Work-friendly spaces & sitting areas",
  "Daily housekeeping",
  "24-hour front desk",
  "Near India Expo Centre & Mart",
];
