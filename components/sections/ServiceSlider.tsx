"use client";

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Clock, DollarSign, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";

export default function ServiceSlider(): JSX.Element {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: false,
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 1 }
    }
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
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%] min-w-0 pr-4"
              >
                <div className={`bg-white rounded-lg border-2 ${
                  index === 0 ? 'border-purple-500' : 'border-gray-200'
                } p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg`}>
                  
                  {/* Service Type Badges */}
                  <div className="flex gap-2 mb-6">
                    {service.formats.map((format) => (
                      <Badge
                        key={format}
                        variant="outline"
                        className="text-xs px-3 py-1 border-gray-300 text-gray-600"
                      >
                        {format}
                      </Badge>
                    ))}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl font-normal text-gray-900 mb-4" style={{ fontFamily: 'CMGeom, serif' }}>
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    {service.description}
                  </p>

                  {/* Price and Duration */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <DollarSign size={16} className="text-gray-500" />
                      <span className="text-lg font-medium text-gray-900">{service.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-600">{service.duration}</span>
                    </div>
                  </div>

                  {/* Explore Button */}
                  <Button
                    asChild
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg py-3 text-sm font-medium"
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
          {SERVICES.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === selectedIndex ? 'bg-purple-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}