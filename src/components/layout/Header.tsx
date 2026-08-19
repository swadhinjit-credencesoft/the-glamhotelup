"use client";
import { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Search, Globe, Menu, X, ChevronDown } from "lucide-react";
import { NAVIGATION_ITEMS } from "@/lib/data/navigation";
import { SITE } from "@/lib/data/site";
import { RoomsMegaMenu } from "./MegaMenu";
import { SearchOverlay } from "./SearchOverlay";
import { AccessibilityBar } from "./AccessibilityBar";

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const headerBg = useTransform(bgOpacity, v => `rgba(255,255,255,${v})`);
  const headerShadow = useTransform(bgOpacity, v => v > 0.5 ? "0 1px 8px rgba(0,0,0,0.1)" : "none");
  const textColor = useTransform(bgOpacity, v => v > 0.5 ? "#000000" : "#ffffff");
  const logoMode = useTransform(bgOpacity, v => v > 0.5 ? "dark" : "light");
  const logoFilter = useTransform(logoMode, m => m === "dark" ? "none" : "brightness(0) invert(1)");

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
        style={{
          backgroundColor: mobileMenuOpen ? "rgba(255,255,255,1)" : headerBg,
          boxShadow: mobileMenuOpen ? "0 1px 8px rgba(0,0,0,0.1)" : headerShadow,
        }}
      >
        <div className="container flex items-center justify-between h-16 lg:h-24">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <motion.div style={{ filter: mobileMenuOpen ? "none" : logoFilter }}>
               <div className="text-2xl lg:text-3xl font-bold font-heading text-adani-blue">{SITE.logo}</div>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <NavigationMenu.Root className="hidden lg:flex flex-1 justify-center relative z-50">
            <NavigationMenu.List className="flex items-center gap-5 xl:gap-7">
              {NAVIGATION_ITEMS.map((item) => (
                <NavigationMenu.Item key={item.label}>
                  {item.children ? (
                    <>
                      <NavigationMenu.Trigger className="flex items-center gap-1 text-sm xl:text-base font-semibold transition-colors hover:text-adani-orange outline-none bg-transparent group">
                        <motion.span style={{ color: mobileMenuOpen ? "#000000" : textColor }} className="group-hover:!text-adani-orange transition-colors">
                          {item.label}
                        </motion.span>
                        <motion.span style={{ color: mobileMenuOpen ? "#000000" : textColor }} className="group-hover:!text-adani-orange transition-colors flex">
                          <ChevronDown className="w-4 h-4 text-inherit transition-transform group-data-[state=open]:rotate-180" />
                        </motion.span>
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="absolute top-full -left-20 lg:-left-40 mt-6 md:w-auto data-[state=open]:animate-[scaleIn_200ms_ease] data-[state=closed]:animate-[scaleOut_200ms_ease] origin-top">
                        {item.label === "Rooms & Suites" ? (
                          <RoomsMegaMenu />
                        ) : (
                          <div className="bg-white shadow-2xl rounded-b-xl border-t-4 border-adani-blue p-6 min-w-[280px]">
                            <ul className="flex flex-col gap-4 text-gray-800">
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className="hover:text-adani-orange hover:-translate-y-0.5 transition-all block font-bold"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </NavigationMenu.Content>
                    </>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenu.Link className="text-sm xl:text-base font-semibold hover:text-adani-orange transition-colors outline-none block group">
                         <motion.span style={{ color: mobileMenuOpen ? "#000000" : textColor }} className="group-hover:!text-adani-orange transition-colors">
                            {item.label}
                         </motion.span>
                      </NavigationMenu.Link>
                    </Link>
                  )}
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {/* Right Actions */}
          <div className="flex items-center gap-3 lg:gap-5 relative z-50">
            <Link
              href="/book-now"
              className="hidden md:inline-flex items-center bg-adani-blue hover:bg-adani-orange text-white text-sm font-bold uppercase tracking-wide px-5 py-2.5 rounded-full transition-colors shadow-md"
            >
              Book Now
            </Link>

            <AccessibilityBar iconColor={mobileMenuOpen ? "#000000" : textColor} />

            <button aria-label="Toggle Language" className="hidden lg:flex items-center gap-1 group">
              <motion.span style={{ color: mobileMenuOpen ? "#000000" : textColor }} className="group-hover:!text-adani-orange transition-colors flex">
                <Globe className="w-5 h-5" />
              </motion.span>
              <motion.span style={{ color: mobileMenuOpen ? "#000000" : textColor }} className="text-sm font-semibold group-hover:!text-adani-orange uppercase">ENG</motion.span>
            </button>

            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="group"
            >
              <motion.span style={{ color: mobileMenuOpen ? "#000000" : textColor }} className="group-hover:!text-adani-orange transition-colors flex">
                <Search className="w-5 h-5" />
              </motion.span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <motion.span style={{ color: mobileMenuOpen ? "#000000" : textColor }} className="group-hover:!text-adani-orange transition-colors flex">
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
         <div className="fixed inset-0 z-40 bg-white pt-20 px-4 overflow-y-auto lg:hidden">
            <ul className="flex flex-col gap-4 py-4">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.label} className="border-b border-gray-100 pb-4">
                  <Link href={item.href} className="text-lg font-bold text-adani-blue" onClick={() => setMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                  {item.children && item.children.length > 0 && (
                    <ul className="mt-2 pl-4 space-y-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="text-sm text-gray-600 font-semibold" onClick={() => setMobileMenuOpen(false)}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/book-now"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center bg-adani-blue text-white font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full"
                >
                  Book Now
                </Link>
              </li>
            </ul>
         </div>
      )}

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
