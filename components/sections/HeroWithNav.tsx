"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NAVIGATION_ITEMS } from "@/lib/constants";

export default function HeroWithNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're in the snap container or regular page scroll
      const snapContainer = document.querySelector('.snap-scroll-container');
      if (snapContainer) {
        // For snap container, use container scroll position
        const containerScrollY = snapContainer.scrollTop;
        const heroHeight = window.innerHeight;
        setIsScrolled(containerScrollY > heroHeight - 100);
      } else {
        // Fallback for regular page scroll
        const heroHeight = window.innerHeight;
        setIsScrolled(window.scrollY > heroHeight - 100);
      }
    };

    // Listen to both window scroll and container scroll
    const snapContainer = document.querySelector('.snap-scroll-container');
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (snapContainer) {
      snapContainer.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (snapContainer) {
        snapContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      {/* Fullscreen Hero Section */}
      <section className="relative h-screen flex flex-col justify-between overflow-hidden snap-section">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-image.jpg"
            alt="Veronika Karpiuk - Personal Stylist"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Light overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />

        {/* Main Content - Lower */}
        <div className="relative z-20 flex-1 flex items-start justify-center px-4 sm:px-6 lg:px-8" style={{paddingTop: '50vh'}}>
          <div className="text-center text-white max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-light tracking-wide mb-6"
              style={{ fontFamily: 'CMGeom, serif' }}
            >
              Veronika Karpiuk
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-lg font-light mb-8"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              Helping women build confident, effortless style.
              <br />
              In Vancouver & Online
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-6"
            >
              <Button
                asChild
                className="bg-white hover:bg-white/90 text-sm rounded-xl font-light"
                style={{ color: '#6C757D', paddingLeft: '12px', paddingRight: '12px', paddingTop: '22px', paddingBottom: '22px' }}
              >
                <Link href="/services" className="flex items-center gap-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Explore Services
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14m-7-7 7 7 7-7" />
                  </svg>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>


        {/* Bottom Navigation - Only visible when not scrolled */}
        <motion.nav
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-20 left-0 right-0 z-20"
        >
          <div className="flex items-center justify-center gap-16 px-8">
            {/* Navigation Links - Centered */}
            <Link href="/" className="text-white hover:text-white/80 text-base font-light transition-colors duration-300">
              Home
            </Link>
            <Link href="/services" className="text-white hover:text-white/80 text-base font-light transition-colors duration-300">
              Services
            </Link>
            <Link href="/meet-me" className="text-white hover:text-white/80 text-base font-light transition-colors duration-300">
              Meet Me
            </Link>
            <Link href="/my-style" className="text-white hover:text-white/80 text-base font-light transition-colors duration-300">
              My Style
            </Link>
            <Link href="/contact" className="text-white hover:text-white/80 text-base font-light transition-colors duration-300">
              Contact
            </Link>
            
            {/* Work With Me Button */}
            <Button
              asChild
              className="bg-gradient-to-t from-black text-white hover:from-neutral-800 hover:to-neutral-500 rounded-xl px-4 py-7 text-base transition-all duration-300"
              style={{ fontFamily: 'Satoshi, sans-serif', borderWidth: '1px', borderColor: '#3f3f3f', backgroundImage: 'linear-gradient(to top, black, #404040)' }}
            >
              <Link href="/contact">Work With Me</Link>
            </Button>
          </div>
        </motion.nav>
      </section>

      {/* Fixed Top Navigation - Appears on scroll */}
      <AnimatePresence>
        {isScrolled && (
          <motion.header
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm"
          >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                {/* Logo */}
                <Link
                  href="/"
                  className="text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors"
                  style={{ fontFamily: 'CMGeom, serif' }}
                >
                  Veronika Karpiuk
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                  {NAVIGATION_ITEMS.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button asChild className="ml-4">
                    <Link href="/contact">Work With Me</Link>
                  </Button>
                </div>

                {/* Mobile menu button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden"
                  aria-label="Toggle navigation menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </Button>
              </div>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
}