"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

export default function MyStyle() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Gallery photos
  const photos = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    src: `/images/gallery-photo-${i + 1}.webp`,
    alt: `Gallery photo ${i + 1}`
  }));

  return (
    <section id="my-style" className="relative bg-white">
      <div 
        className={`${
          isExpanded 
            ? 'min-h-screen max-h-none overflow-auto' 
            : 'h-screen overflow-hidden'
        } transition-all duration-500 ease-in-out`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-5xl sm:text-6xl font-light text-gray-900 mb-2" style={{ fontFamily: 'CMGeom, serif' }}>
              My Style
            </h2>
            <div className="flex items-start justify-between">
              {/* Left side: Line with arrow circle */}
              <div className="flex items-center w-2/5">
                <div className="flex-1 h-px bg-gray-300"></div>
                <div className="w-8 h-8 rounded-full border-2 border-orange-200 flex items-center justify-center ml-4 flex-shrink-0">
                  <ArrowRight size={14} className="text-orange-400" />
                </div>
              </div>
              
              {/* Right side: Text right-aligned */}
              <div className="w-3/5 pl-8">
                <p className="text-lg text-gray-600 leading-relaxed text-right" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Get to know the stylist behind the services. My approach blends body analysis, creativity, and effortless styling to help you feel confident and authentic - every time you get dressed.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Photo Grid */}
          <div className="relative">
            <div className="grid grid-cols-4 gap-4">
              {/* Column 1 */}
              <div className="flex flex-col gap-4 h-[500px]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex-[2] rounded-lg overflow-hidden relative"
                >
                  <Image
                    src={photos[0].src}
                    alt={photos[0].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex-[3] rounded-lg overflow-hidden relative"
                >
                  <Image
                    src={photos[1].src}
                    alt={photos[1].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </motion.div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-4 h-[500px]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex-[3] rounded-lg overflow-hidden relative"
                >
                  <Image
                    src={photos[2].src}
                    alt={photos[2].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex-[2] rounded-lg overflow-hidden relative"
                >
                  <Image
                    src={photos[3].src}
                    alt={photos[3].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </motion.div>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-4 h-[500px]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex-[1] rounded-lg overflow-hidden relative"
                >
                  <Image
                    src={photos[4].src}
                    alt={photos[4].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex-[2] rounded-lg overflow-hidden relative"
                >
                  <Image
                    src={photos[5].src}
                    alt={photos[5].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex-[2] rounded-lg overflow-hidden relative"
                >
                  <Image
                    src={photos[6].src}
                    alt={photos[6].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </motion.div>
              </div>

              {/* Column 4 */}
              <div className="flex flex-col gap-4 h-[500px]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="flex-[4] rounded-lg overflow-hidden relative"
                >
                  <Image
                    src={photos[7].src}
                    alt={photos[7].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="flex-[1] rounded-lg overflow-hidden relative"
                >
                  <Image
                    src={photos[8].src}
                    alt={photos[8].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </motion.div>
              </div>
            </div>

            {/* Gradient Overlay (only when collapsed) */}
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
            )}

            {/* Expand Button Overlay (only when collapsed) */}
            {!isExpanded && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                <button
                  onClick={() => setIsExpanded(true)}
                  className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors duration-300 shadow-lg"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
                  Expand
                  <ChevronDown size={16} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Collapse Button (only when expanded) */}
        {isExpanded && (
          <div className="flex justify-center py-8 pb-32">
            <button
              onClick={() => setIsExpanded(false)}
              className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors duration-300 shadow-lg"
              style={{ fontFamily: 'Satoshi, sans-serif' }}
            >
              Collapse
              <ChevronUp size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}