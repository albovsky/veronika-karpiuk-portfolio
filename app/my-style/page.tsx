"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/layout/Footer";
import { Instagram, Youtube, ExternalLink } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function MyStylePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
              My Style
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get to know the stylist behind the services. My approach blends body analysis, 
              creativity, and effortless styling to help you feel confident and authentic - 
              every time you get dressed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
              Style Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A curated collection of outfit inspiration, styling tips, and glimpses 
              into my everyday fashion moments.
            </p>
          </motion.div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {Array.from({ length: 12 }, (_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <p className="text-gray-500 text-sm">Style {i + 1}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button asChild size="lg" variant="outline">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Instagram size={20} />
                View Full Gallery
                <ExternalLink size={16} />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Social Platforms */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
              Follow me for more
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay inspired between sessions by following me on socials for style tips, 
              seasonal updates, and a closer look into my world of effortless styling.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Instagram Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Instagram className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium text-gray-900">Instagram Blog</h3>
                      <p className="text-gray-600">Daily inspiration & tips</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    A curated space where I share seasonal outfit inspiration, practical 
                    styling tips, and glimpses into everyday life moments.
                  </p>
                  
                  <Button asChild className="w-full">
                    <a
                      href={SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Explore Instagram
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* YouTube Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <Youtube className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium text-gray-900">YouTube Channel</h3>
                      <p className="text-gray-600">Style insights & trends</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    A hub of useful style insights and trend updates, designed to keep you 
                    inspired (Content available only in Ukrainian).
                  </p>
                  
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={SOCIAL_LINKS.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Watch on YouTube
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Style Inspiration */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
              Style Philosophy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              My approach to fashion and the brands that inspire my aesthetic.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">Clean Lines</h3>
                  <p className="text-gray-600">
                    I'm drawn to minimalist silhouettes and architectural shapes 
                    that create timeless, elegant looks.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">Bold Textures</h3>
                  <p className="text-gray-600">
                    Adding interest through fabric choices - from structured wools 
                    to flowing silks that create visual depth.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">Personal Style</h3>
                  <p className="text-gray-600">
                    Pieces that feel authentic to you, not just trendy - 
                    creating a wardrobe that tells your story.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Favorite Brands</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                HVOYA, Banana Republic, COS, Bevza, and a few more hidden Ukrainian gems. 
                I believe in balance - when masculinity is ideally combined with femininity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

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
              Let's Create Your Signature Style
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to build a wardrobe that feels authentically you?
            </p>
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
              <Link href="/contact">Work With Me</Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}