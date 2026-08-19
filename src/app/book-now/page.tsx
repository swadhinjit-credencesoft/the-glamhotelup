"use client";

import { useEffect } from "react";

const BOOKING_URL = "https://bookone.io/The-Glam-By-Sandane-Homes?bookingEngine=true";

export default function BookNowPage() {
  useEffect(() => {
    window.location.href = BOOKING_URL;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold font-heading text-adani-dark mb-4">Redirecting to Booking...</h1>
        <p className="text-gray-600 mb-6">If you are not redirected automatically,</p>
        <a
          href={BOOKING_URL}
          className="inline-flex items-center gap-2 bg-adani-blue hover:bg-adani-orange text-white px-8 py-4 font-bold rounded-full transition-colors uppercase tracking-wide text-sm"
        >
          Click here to book your stay
        </a>
      </div>
    </div>
  );
}
