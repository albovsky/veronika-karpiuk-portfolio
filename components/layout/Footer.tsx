import Link from "next/link";
import { Instagram, Youtube, Send } from "lucide-react";
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-900 relative overflow-hidden pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Menu Section */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              Menu
            </h3>
            <div className="space-y-3">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-500 hover:text-gray-900 transition-colors text-base"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              Legal
            </h3>
            <div className="space-y-3">
              <Link
                href="/privacy"
                className="block text-gray-500 hover:text-gray-900 transition-colors text-base"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="block text-gray-500 hover:text-gray-900 transition-colors text-base"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                Terms
              </Link>
              <Link
                href="/refunds"
                className="block text-gray-500 hover:text-gray-900 transition-colors text-base"
                style={{ fontFamily: 'Satoshi, sans-serif' }}
              >
                Refunds
              </Link>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-gray-200 mt-8"></div>

        {/* Large Brand Text Watermark - Full Width */}
        <div 
          className="select-none pointer-events-none py-8 -mx-4 sm:-mx-6 lg:-mx-8"
          style={{ 
            fontSize: 'clamp(3rem, 15vw, 10rem)',
            lineHeight: '0.8',
            fontFamily: 'CMGeom, serif',
            color: 'rgba(0, 0, 0, 0.03)'
          }}
        >
          <div className="text-center overflow-hidden">
            <div className="whitespace-nowrap" style={{ letterSpacing: '0.02em' }}>
              Veronika Karpiuk
            </div>
          </div>
        </div>

        {/* Copyright and Social Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            © {currentYear} Veronika Karpiuk. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Email"
            >
              <Send size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}