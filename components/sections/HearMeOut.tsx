"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function HearMeOut(): JSX.Element {
  return (
    <section className="min-h-screen flex flex-col justify-center py-12 bg-white pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="flex flex-col items-center space-y-2">
            <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              I know you might still have questions about how this works, what to expect, 
              or if it's really for you - so...
            </p>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-light text-gray-900" style={{ fontFamily: 'CMGeom, serif' }}>
            Hear Me Out
          </h2>
          
          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="aspect-video rounded-lg flex items-center justify-center group cursor-pointer transition-all duration-300 shadow-lg relative overflow-hidden"
          >
            {/* Background Image */}
            <img
              src="/images/video-placeholder.jpeg"
              alt="Video placeholder"
              className="w-full h-full object-cover absolute inset-0"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
            {/* Play Button and Text Overlay */}
            <div className="text-center space-y-6 relative z-10">
              <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-md">
                <Play size={40} className="text-gray-700 ml-1" />
              </div>
              <p className="text-white font-medium text-xl drop-shadow-lg" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Watch My Story
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}