"use client";

import { useCallback, useEffect, useState } from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import { Clock, DollarSign, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";

export default function ServiceCards() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: false,
    slidesToScroll: 1,
  });
  
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="services" className="min-h-screen flex flex-col justify-center py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-light text-gray-900 mb-2" style={{ fontFamily: 'CMGeom, serif' }}>
            Services
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
                Personalized styling experiences designed to make your wardrobe work for you.
                Whether it's a full reset, a seasonal refresh, or a look for a special occasion,
                each service is tailored to your lifestyle and unique style journey.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-[0_0_95%] sm:flex-[0_0_60%] lg:flex-[0_0_40%] xl:flex-[0_0_32%] min-w-0 pr-4"
              >
                <div className="bg-gray-100 rounded-lg p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg">
                  
                  {/* Service Type Badges */}
                  <div className="flex gap-2 mb-6">
                    {service.formats.map((format) => (
                      <Badge
                        key={format}
                        variant="outline"
                        className="text-xs px-3 py-1 border-gray-400 text-gray-700 bg-transparent rounded-full"
                      >
                        {format}
                      </Badge>
                    ))}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl font-normal text-black mb-4" style={{ fontFamily: 'CMGeom, serif' }}>
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-8 flex-grow" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    {service.description}
                  </p>

                  {/* Price and Duration - Inline */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <DollarSign size={16} className="text-gray-600" />
                      <span className="text-xl font-normal text-black" style={{ fontFamily: 'Satoshi, sans-serif' }}>{service.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-gray-600" />
                      <span className="text-xl font-normal text-black" style={{ fontFamily: 'Satoshi, sans-serif' }}>{service.duration}</span>
                    </div>
                  </div>

                  {/* Explore Button */}
                  <Button
                    asChild
                    className="w-full bg-gradient-to-t from-black text-white hover:from-neutral-800 hover:to-neutral-500 rounded-xl py-3 text-sm transition-all duration-300"
                    style={{ fontFamily: 'Satoshi, sans-serif', borderWidth: '1px', borderColor: '#3f3f3f', backgroundImage: 'linear-gradient(to top, black, #404040)' }}
                  >
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      Explore This Service
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-2 mt-6">
          <button
            className={`p-3 rounded-full border ${
              prevBtnDisabled 
                ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            } transition-colors`}
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className={`p-3 rounded-full border ${
              nextBtnDisabled 
                ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed' 
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            } transition-colors`}
            onClick={scrollNext}
            disabled={nextBtnDisabled}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: Math.ceil(SERVICES.length / 2) }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(selectedIndex / 2) === index ? 'bg-gray-800' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}