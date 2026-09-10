import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { CONTACT, CORPORATE, SOCIAL_LINKS, FOOTER_EXPLORE_LINKS, FOOTER_COMPANY_LINKS, LEGAL_LINKS } from "@/lib/config/site";

export function Footer() {
  return (
    <footer className="bg-adani-dark text-white relative mt-20">
      {/* Gradient Divider */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-adani-blue to-adani-orange" />

      <div className="container py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-12 mb-12 sm:mb-16">
          <div className="w-full lg:w-1/4">
            <Link href="/" className="inline-block mb-6 sm:mb-8">
              <Image src="/images/glamlogo.png" alt="The Glam" width={320} height={320} className="h-16 sm:h-24 lg:h-32 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
              Stylish and comfortable stays in Greater Noida — near India Expo Centre & Mart.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-adani-blue transition-colors"
                >
                  <SocialIcon type={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            <div>
              <h4 className="font-bold font-heading mb-4 sm:mb-6 text-gray-400 text-base sm:text-lg">Explore</h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {FOOTER_EXPLORE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-adani-orange transition-colors text-sm sm:text-base">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold font-heading mb-4 sm:mb-6 text-gray-400 text-base sm:text-lg">Company</h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {FOOTER_COMPANY_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-adani-orange transition-colors text-sm sm:text-base">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="font-bold font-heading mb-4 sm:mb-6 text-gray-400 text-base sm:text-lg">Contact</h4>
              <address className="not-italic space-y-2.5 sm:space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>{CONTACT.addressLines.map((line, i) => (<span key={i}>{line}<br /></span>))}</p>
                <p><a href={CONTACT.telephoneHref} className="hover:text-adani-orange transition-colors font-bold text-base">{CONTACT.telephone}</a></p>
                <p><a href={`mailto:${CORPORATE.email}`} className="hover:text-adani-orange transition-colors">{CORPORATE.email}</a></p>
                <p className="pt-2 text-gray-500 text-xs sm:text-sm">
                  <span className="font-bold text-gray-300">{CORPORATE.name}</span><br />
                  {CORPORATE.telephone} • {CORPORATE.email}
                </p>
              </address>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 text-xs sm:text-sm text-gray-400">
          <p>
            Designed &amp; Developed by{" "}
            <a href="https://www.credencesoft.in/" target="_blank" rel="noopener noreferrer" className="hover:text-adani-orange transition-colors underline-offset-2 hover:underline">
              CredenceSoft
            </a>
            , Powered by{" "}
            <a href="https://bookonepms.com/" target="_blank" rel="noopener noreferrer" className="hover:text-adani-orange transition-colors underline-offset-2 hover:underline">
              BookOne
            </a>
            .
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
