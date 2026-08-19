import type { Metadata } from "next";
import { poppins, openSans, barlow } from "@/lib/fonts";
import { SITE } from "@/lib/data/site";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { PageTransition } from "@/components/layout/PageTransition";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const ogImage = "/images/01.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    template: `%s | ${SITE.name}`,
    default: `${SITE.name} | Hotel Near India Expo Centre, Greater Noida`,
  },
  description: SITE.description,
  keywords: [
    "The Glam",
    "hotel near India Expo Centre Greater Noida",
    "hotels near India Expo Mart",
    "hotel in Ansal Golf Link Greater Noida",
    "hotel near Knowledge Park Greater Noida",
    "hotel near Pari Chowk",
    "business hotel Greater Noida",
    "rooms near India Expo Centre",
    "stay near India Expo Mart",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    url: SITE.url,
    title: `${SITE.name} | Stay in Style. Feel at Home.`,
    description: SITE.description,
    images: [{ url: ogImage, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Stay in Style. Feel at Home.`,
    description: SITE.description,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${openSans.variable} ${barlow.variable}`}>
      <body className="font-body antialiased bg-white text-gray-800">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScroll>
            <Header />
            <PageTransition>
              {children}
            </PageTransition>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
