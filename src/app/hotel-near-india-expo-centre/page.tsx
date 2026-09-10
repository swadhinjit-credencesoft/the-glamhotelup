import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CarFront, Clock, MapPin, MessageCircle, Navigation, Phone, Wifi } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { BreadcrumbSchema, FaqSchema } from "@/components/seo/Schema";
import { SITE, CONTACT, MAPS } from "@/lib/config/site";

const FAQS = [
  {
    q: "How far is The Glam from India Expo Centre & Mart?",
    a: "The Glam is roughly a 1.5 km walk and a 2.5 km drive from India Expo Centre & Mart, Greater Noida — a short ride for exhibition visitors and business delegates.",
  },
  {
    q: "Do you offer parking for guests attending an expo?",
    a: "Yes, The Glam provides complimentary private on-site parking, which is convenient for guests travelling by car to India Expo Centre & Mart events.",
  },
  {
    q: "Can I book a room for an exhibition or trade show visit?",
    a: "Absolutely. Call +91 8796321915, WhatsApp us, or book direct through our official website to arrange a stay around your event dates.",
  },
  {
    q: "What are the check-in and check-out times?",
    a: "Check-in is from 2:00 PM and check-out is by 12:00 PM, making it easy to plan around event schedules.",
  },
];

export const metadata: Metadata = {
  title: "Hotel Near India Expo Centre & Expo Mart, Greater Noida",
  description:
    "Hotel near India Expo Centre & Mart, Greater Noida — The Glam by Sandane Homes is ~1.5 km walk / ~2.5 km drive from the venue. Free Wi-Fi, parking, king beds and workspaces for exhibitors and business travellers. Book direct.",
  keywords: [
    "hotel near India Expo Centre",
    "hotel near India Expo Mart",
    "hotels near India Expo Centre Greater Noida",
    "accommodation for expo visitors Greater Noida",
    "hotel for exhibition visitors",
    "business hotel near India Expo Centre",
  ],
};

export default function HotelNearIndiaExpoCentrePage() {
  const breadcrumbs = [
    { name: "Home", url: SITE.url },
    { name: "Hotel Near India Expo Centre", url: `${SITE.url}/hotel-near-india-expo-centre` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FaqSchema faqs={FAQS} />
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Hotel Near India Expo Centre" }]}
        title="Hotel Near India Expo Centre & Expo Mart"
        subtitle="The Glam by Sandane Homes is ~1.5 km walk / ~2.5 km drive from India Expo Centre & Mart — comfortable rooms for exhibitors, delegates and business travellers."
        height="h-[55vh] min-h-[450px]"
        bgImageStyle={{ backgroundImage: "url(/images/04.jpg)" }}
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-adani-dark mb-6">
              Staying Right for the Show
            </h2>
            <p className="text-xl text-gray-600 font-body leading-relaxed">
              India Expo Centre & Mart is one of Greater Noida&apos;s most important venues for
              exhibitions, trade fairs and business events. If you are visiting for a show, our
              location in Ansal Golf Link-1 keeps you close to the venue with all the essentials
              you need for a productive stay — high-speed Wi-Fi, work-friendly desks, king beds and
              daily housekeeping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
              <MapPin className="w-8 h-8 text-adani-blue mb-4" />
              <h3 className="text-xl font-bold font-heading text-adani-dark mb-2">Close to the Venue</h3>
              <p className="text-gray-600">
                Roughly 1.5 km on foot or 2.5 km by car from India Expo Centre &amp; Mart — a fast,
                stress-free journey on event mornings.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
              <CarFront className="w-8 h-8 text-adani-blue mb-4" />
              <h3 className="text-xl font-bold font-heading text-adani-dark mb-2">Free Private Parking</h3>
              <p className="text-gray-600">
                Complimentary on-site parking for guests travelling by car — ideal for exhibitors
                carrying display material or equipment.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
              <Clock className="w-8 h-8 text-adani-blue mb-4" />
              <h3 className="text-xl font-bold font-heading text-adani-dark mb-2">Expo-Friendly Timing</h3>
              <p className="text-gray-600">
                Check in from 2:00 PM and check out by 12:00 PM, so you can plan around exhibition
                schedules without rushing.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
              <Wifi className="w-8 h-8 text-adani-blue mb-4" />
              <h3 className="text-xl font-bold font-heading text-adani-dark mb-2">Stay Productive</h3>
              <p className="text-gray-600">
                Complimentary high-speed Wi-Fi and laptop-friendly desks in every room for replying
                to leads between sessions.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
              <MapPin className="w-8 h-8 text-adani-blue mb-4" />
              <h3 className="text-xl font-bold font-heading text-adani-dark mb-2">Near the Metro</h3>
              <p className="text-gray-600">
                Knowledge Park II Metro Station (Aqua Line) is only ~1.6 km away for easy access to
                Noida and Delhi.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
              <ArrowRight className="w-8 h-8 text-adani-blue mb-4" />
              <h3 className="text-xl font-bold font-heading text-adani-dark mb-2">Book Direct</h3>
              <p className="text-gray-600">
                Reserve direct for the best availability around event dates — call, WhatsApp or use
                our official booking flow.
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading text-adani-dark mb-12">Rooms for Your Stay</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { name: "Deluxe Room", href: "/rooms/deluxe-room", desc: "King bed, private bathroom, Wi-Fi, AC and a workspace." },
                { name: "Luxury Room", href: "/rooms/luxury-room", desc: "Generous space with king bed, sitting area, workspace and Wi-Fi." },
                { name: "Suite Room", href: "/rooms/suite-room", desc: "Spacious suite with king bed, private bathroom, TV, kettle and Wi-Fi." },
              ].map((room) => (
                <div key={room.href} className="bg-gray-50 rounded-2xl p-8 flex flex-col border border-gray-100">
                  <h3 className="text-2xl font-bold font-heading text-adani-dark mb-3">{room.name}</h3>
                  <p className="text-gray-600 mb-6 flex-1">{room.desc}</p>
                  <Link href={room.href} className="inline-flex items-center gap-2 text-adani-blue font-bold text-sm uppercase tracking-wide">
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-adani-dark text-white rounded-3xl p-6 sm:p-8 md:p-12 text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-4">Plan Your Event Stay</h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Tell us your event dates and we&apos;ll help you choose the right room. Call, WhatsApp or book direct.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <a href={CONTACT.telephoneHref} className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-adani-orange hover:bg-adani-blue text-white px-6 sm:px-8 py-3.5 sm:py-4 font-bold rounded-full transition-colors uppercase tracking-wide text-xs sm:text-sm shadow-md">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" /> {CONTACT.telephone}
              </a>
              <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-adani-green hover:bg-adani-dark text-white px-6 sm:px-8 py-3.5 sm:py-4 font-bold rounded-full transition-colors uppercase tracking-wide text-xs sm:text-sm shadow-md">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" /> WhatsApp Us
              </a>
              <a href="https://bookone.io/The-Glam?bookingEngine=true" className="inline-flex items-center justify-center gap-2 sm:gap-3 border-2 border-white text-white hover:bg-white hover:text-adani-dark px-6 sm:px-8 py-3.5 sm:py-4 font-bold rounded-full transition-colors uppercase tracking-wide text-xs sm:text-sm">
                <Navigation className="w-4 h-4 sm:w-5 sm:h-5" /> Book Direct
              </a>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-4">
            <h2 className="text-4xl font-bold font-heading text-adani-dark mb-12 text-center">Getting Here</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-adani-blue mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  <a href={MAPS.directionsUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-adani-blue hover:text-adani-orange">Get driving directions on Google Maps</a>
                  — The Glam, Plot No. AE-189, Block A, Ansal Golf Link-1, Greater Noida, UP 201315.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Navigation className="w-6 h-6 text-adani-blue mt-1 flex-shrink-0" />
                <p className="text-gray-600">
                  Prefer the metro? Knowledge Park II Metro Station (Aqua Line) is ~1.6 km away, with
                  a short cab or auto ride to the hotel.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/rooms" className="inline-flex items-center gap-3 bg-adani-blue hover:bg-adani-orange text-white px-8 py-4 font-bold rounded-full transition-colors uppercase tracking-wide text-sm">
              Explore All Rooms <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}