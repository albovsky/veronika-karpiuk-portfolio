"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ServiceSlider from "@/components/sections/ServiceSlider";

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl"
          >
            <h1 className="text-5xl sm:text-6xl font-light text-gray-900 mb-8" style={{ fontFamily: 'CMGeom, serif' }}>
              Services
            </h1>
            <div className="flex items-start gap-16">
              <div className="w-8 h-8 rounded-full bg-orange-200 mt-2 flex-shrink-0" />
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Personalized styling experiences designed to make your wardrobe work for you.
                Whether it's a full reset, a seasonal refresh, or a look for a special occasion,
                each service is tailored to your lifestyle and unique style journey.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Slider */}
      <ServiceSlider />

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-light">
              Ready to Transform Your Style?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Let's find your vibe and build a wardrobe that finally feels like you.
            </p>
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
              <Link href="/contact">Start Your Style Journey</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

