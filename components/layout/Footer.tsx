import Link from "next/link";
import { Instagram, Youtube, Mail } from "lucide-react";
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors"
            >
              Veronika Karpiuk
            </Link>
            <p className="text-sm text-gray-600 max-w-sm">
              Helping women build confident, effortless style. Certified stylist
              in Vancouver & Online.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900">Menu</h3>
            <div className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal & Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-900">Legal</h3>
            <div className="space-y-2">
              <Link
                href="/privacy"
                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/refunds"
                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Refunds
              </Link>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <div className="flex space-x-4">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} Veronika Karpiuk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}