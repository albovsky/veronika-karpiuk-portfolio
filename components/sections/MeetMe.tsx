"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const leftColumn1Boxes = [
  "I'm a certified stylist, trained in body analysis and corrective techniques.",
  "My focus is simple: style that fits your shape, your life, and your energy.",
  "I make styling feel easy, not intimidating. Think of it as creative play, not fashion rules."
];

const leftColumn2Boxes = [
  "Finding my style became a mission. It taught me that confidence starts in your closet.",
  "I believe in balance - when masculinity is ideally combined with femininity.",
  "What began as self-discovery turned into something bigger: Helping other women feel at home in their clothes."
];

const rightColumn1Boxes = [
  "I didn't always love my wardrobe. Getting dressed felt like guessing - not expressing.",
  "For me, it's about that mirror moment. When you look at yourself and say, \"Yes. That's me.\"",
  "I'm drawn to clean lines, bold textures, and pieces that feel personal, not just trendy."
];

const rightColumn2Boxes = [
  "My favorites? HVOYA, Banana Republic, COS, Bevza, and a few more hidden Ukrainian gems.",
  "You don't need a whole new wardrobe - just the right pieces, thoughtfully chosen.",
  "Let's find your vibe, and build a wardrobe that finally feels like you."
];

export default function MeetMe() {

  return (
    <section id="meet-me" className="min-h-screen flex flex-col justify-center py-8 md:py-12 bg-white pt-16 md:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-2" style={{ fontFamily: 'CMGeom, serif' }}>
            Meet Me
          </h2>
          <div className="flex items-start justify-between">
            {/* Left side: Line with arrow circle */}
            <div className="hidden sm:flex items-center sm:w-2/5">
              <div className="flex-1 h-px bg-gray-300"></div>
              <div className="w-8 h-8 rounded-full border-2 border-orange-200 flex items-center justify-center ml-4 flex-shrink-0">
                <ArrowRight size={14} className="text-orange-400" />
              </div>
            </div>
            
            {/* Right side: Text right-aligned */}
            <div className="w-full sm:w-3/5 sm:pl-8">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-left sm:text-right" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Get to know the stylist behind the services. My approach blends body analysis, creativity, and effortless styling to help you feel confident and authentic - every time you get dressed.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 items-center lg:h-[500px] max-w-full overflow-hidden">
          {/* Column 1 - Left Boxes */}
          <div className="flex flex-col justify-between w-full lg:h-[80%] gap-4 md:order-1">
            {leftColumn1Boxes.map((text, index) => (
              <motion.div
                key={`left1-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${index === 0 ? 'bg-gray-100' : 'bg-white'} p-4 rounded-lg shadow-sm border border-gray-100 w-full flex-1 flex items-center`}
              >
                <p className="text-base text-gray-700 leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Column 2 - Left Boxes */}
          <div className="flex flex-col justify-between w-full lg:h-[90%] gap-4 md:order-3">
            {leftColumn2Boxes.map((text, index) => (
              <motion.div
                key={`left2-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className={`${index === 2 ? 'bg-gray-100' : 'bg-white'} p-4 rounded-lg shadow-sm border border-gray-100 w-full flex-1 flex items-center`}
              >
                <p className="text-base text-gray-700 leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Column 3 - Central Photo */}
          <div className="flex justify-center w-full md:order-2 md:col-span-1 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full max-w-[280px] md:max-w-[300px] lg:max-w-[320px]"
            >
              <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/meet-me-image.jpeg"
                  alt="Veronika Karpiuk - Personal Stylist"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Column 4 - Right Boxes */}
          <div className="flex flex-col justify-between w-full lg:h-[90%] gap-4 md:order-4">
            {rightColumn1Boxes.map((text, index) => (
              <motion.div
                key={`right1-${index}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className={`${index === 0 ? 'bg-gray-100' : 'bg-white'} p-4 rounded-lg shadow-sm border border-gray-100 w-full flex-1 flex items-center`}
              >
                <p className="text-base text-gray-700 leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Column 5 - Right Boxes */}
          <div className="flex flex-col justify-between w-full lg:h-[80%] gap-4 md:order-5">
            {rightColumn2Boxes.map((text, index) => (
              <motion.div
                key={`right2-${index}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className={`${index === 2 ? 'bg-gray-100' : 'bg-white'} p-4 rounded-lg shadow-sm border border-gray-100 w-full flex-1 flex items-center`}
              >
                <p className="text-base text-gray-700 leading-relaxed" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}