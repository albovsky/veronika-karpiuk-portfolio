"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Testimonials from "@/components/sections/Testimonials";
import { Play, Award, Heart, Sparkles } from "lucide-react";

export default function MeetMePage() {
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
              Meet Me
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get to know the stylist behind the services. My approach blends body analysis, 
              creativity, and effortless styling to help you feel confident and authentic - 
              every time you get dressed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 text-lg">Veronika's Photo</p>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  I'm a certified stylist, trained in body analysis and corrective techniques.
                  My focus is simple: style that fits your shape, your life, and your energy.
                </p>
                
                <p>
                  I make styling feel easy, not intimidating. Think of it as creative play, 
                  not fashion rules.
                </p>
                
                <p>
                  I didn't always love my wardrobe. Getting dressed felt like guessing - 
                  not expressing. Finding my style became a mission. It taught me that 
                  confidence starts in your closet.
                </p>
                
                <p>
                  What began as self-discovery turned into something bigger: Helping other 
                  women feel at home in their clothes.
                </p>
                
                <p className="font-medium text-gray-900">
                  For me, it's about that mirror moment. When you look at yourself and say, 
                  "Yes. That's me."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
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
              My Approach
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                    <Award className="text-gray-600" size={24} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">Certified Expertise</h3>
                  <p className="text-gray-600">
                    Trained in body analysis and corrective techniques to create 
                    styles that truly flatter your unique shape.
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
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="text-gray-600" size={24} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">Personal Touch</h3>
                  <p className="text-gray-600">
                    Every recommendation is tailored to your lifestyle, preferences, 
                    and the energy you want to project.
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
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                    <Sparkles className="text-gray-600" size={24} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">Effortless Style</h3>
                  <p className="text-gray-600">
                    Making fashion feel like creative play, not intimidating rules. 
                    Style should be fun and expressive.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Style Philosophy */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900">
              My Style Philosophy
            </h2>
            
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                I'm drawn to clean lines, bold textures, and pieces that feel personal, 
                not just trendy. My favorites? HVOYA, Banana Republic, COS, Bevza, 
                and a few more hidden Ukrainian gems.
              </p>
              
              <p>
                I believe in balance - when masculinity is ideally combined with femininity. 
                You don't need a whole new wardrobe - just the right pieces, thoughtfully chosen.
              </p>
              
              <p className="text-xl font-medium text-gray-900">
                Let's find your vibe, and build a wardrobe that finally feels like you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900">
              Hear Me Out
            </h2>
            <p className="text-lg text-gray-600">
              I know you might still have questions about how this works, what to expect, 
              or if it's really for you - so...
            </p>
            
            {/* Video Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center group cursor-pointer hover:from-gray-300 hover:to-gray-400 transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Play size={32} className="text-gray-700 ml-1" />
                </div>
                <p className="text-gray-600 font-medium">Watch My Story</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Let's create a wardrobe that makes you feel confident and authentically you.
            </p>
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
              <Link href="/contact">Start Your Journey</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}