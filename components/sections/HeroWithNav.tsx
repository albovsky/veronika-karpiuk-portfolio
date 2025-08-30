"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NAVIGATION_ITEMS } from "@/lib/constants";

export default function HeroWithNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <section id="hero" className="relative h-screen flex flex-col justify-between overflow-hidden snap-section">
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
        <div className="relative z-20 flex-1 flex items-start justify-center px-6 sm:px-6 lg:px-8" style={{paddingTop: '45vh'}}>
          <div className="text-center text-white max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-6"
              style={{ fontFamily: 'CMGeom, serif' }}
            >
              Veronika Karpiuk
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-lg sm:text-xl font-light mb-8"
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
                className="bg-white hover:bg-white/90 text-base rounded-xl font-light w-full sm:w-auto"
                style={{ color: '#495057', paddingLeft: '12px', paddingRight: '12px', paddingTop: '22px', paddingBottom: '22px' }}
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
          className="absolute bottom-20 left-0 right-0 z-20 hidden md:block"
        >
          <div className="flex items-center justify-center gap-8 lg:gap-16 px-8">
            {/* Navigation Links - Centered */}
            <a href="#hero" className="text-white hover:text-white/80 text-base font-light transition-colors duration-300 cursor-pointer">
              Home
            </a>
            <a href="#services" className="text-white hover:text-white/80 text-base font-light transition-colors duration-300 cursor-pointer">
              Services
            </a>
            <a href="#meet-me" className="text-white hover:text-white/80 text-base font-light transition-colors duration-300 cursor-pointer">
              Meet Me
            </a>
            <a href="#my-style" className="text-white hover:text-white/80 text-base font-light transition-colors duration-300 cursor-pointer">
              My Style
            </a>
            <a href="#contact" className="text-white hover:text-white/80 text-base font-light transition-colors duration-300 cursor-pointer">
              Contact
            </a>
            
            {/* Work With Me Button */}
            <Button
              asChild
              variant="ghost"
              className="btn-primary text-base"
              style={{ fontFamily: 'Satoshi, sans-serif', lineHeight: '24px' }}
            >
              <a href="#contact">Work With Me</a>
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
                  <a href="#hero" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
                    Home
                  </a>
                  <a href="#services" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
                    Services
                  </a>
                  <a href="#meet-me" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
                    Meet Me
                  </a>
                  <a href="#my-style" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
                    My Style
                  </a>
                  <Button asChild variant="ghost" className="btn-primary ml-4">
                    <a href="#contact">Work With Me</a>
                  </Button>
                </div>

                {/* Mobile menu button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle navigation menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isMobileMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </Button>
              </div>
              
              {/* Mobile Navigation Menu */}
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md"
                  >
                    <div className="px-4 py-6 space-y-4">
                      <a 
                        href="#hero" 
                        className="block text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Home
                      </a>
                      <a 
                        href="#services" 
                        className="block text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Services
                      </a>
                      <a 
                        href="#meet-me" 
                        className="block text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Meet Me
                      </a>
                      <a 
                        href="#my-style" 
                        className="block text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        My Style
                      </a>
                      <Button asChild variant="ghost" className="btn-primary w-full mt-4">
                        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                          Work With Me
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
}