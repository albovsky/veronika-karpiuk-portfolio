"use client";

import { useCallback, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType } from 'embla-carousel';
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
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
    <section id="testimonials" className="min-h-screen flex flex-col justify-center py-8 bg-white pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl sm:text-6xl font-light text-gray-900 mb-2" style={{ fontFamily: 'CMGeom, serif' }}>
            In Their Words
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
                The best part of my work isn't just creating wardrobes - it's seeing the confidence
                and ease it brings to women's lives. Here are a few stories from clients who
                rediscovered their style and made getting dressed feel effortless again.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-[0_0_95%] sm:flex-[0_0_60%] lg:flex-[0_0_40%] xl:flex-[0_0_32%] min-w-0 pr-4"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-gray-100">
                  <CardContent className="px-6 py-2 h-full flex flex-col">
                    {/* Profile Photo */}
                    <div className="flex justify-start mb-6">
                      <img
                        src={`/images/testimonials/testimonial-${testimonial.id}.jpg`}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>

                    {/* Quote */}
                    <blockquote className="text-gray-700 leading-relaxed text-left flex-grow mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author */}
                    <div className="text-left mt-auto">
                      <div className="font-medium text-gray-900 text-2xl" style={{ fontFamily: 'Monumental, sans-serif' }}>
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                        {testimonial.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-2 mt-4">
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
        <div className="flex justify-center gap-2 mt-2">
          {Array.from({ length: Math.ceil(TESTIMONIALS.length / 3) }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(selectedIndex / 3) === index ? 'bg-gray-800' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}