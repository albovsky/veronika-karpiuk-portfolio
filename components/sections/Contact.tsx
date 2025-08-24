"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import Footer from "@/components/layout/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    service: '',
    email: '',
    message: ''
  });
  const [isHuman, setIsHuman] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isHuman) {
      alert('Please confirm you are human!');
      return;
    }
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="min-h-screen bg-white py-12 pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h2 className="text-5xl sm:text-6xl font-light text-gray-900 mb-2" style={{ fontFamily: 'CMGeom, serif' }}>
            Contact
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
            <div className="flex-1 pl-8">
              <p className="text-lg text-gray-600 leading-relaxed text-right" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Tell me a little bit about yourself and service that you are looking to get. I&apos;ll make sure to reach out within next 24 hours so we could discuss our future collaboration. Can&apos;t wait to meet you!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Service
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent appearance-none"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type your message (optional)"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                />
              </div>

              {/* Human Verification */}
              <div className="flex items-center space-x-3 mt-3">
                <input
                  type="checkbox"
                  id="human"
                  checked={isHuman}
                  onChange={(e) => setIsHuman(e.target.checked)}
                  className="w-4 h-4 text-orange-400 bg-gray-50 border-gray-200 rounded focus:ring-orange-400"
                />
                <label htmlFor="human" className="text-sm text-gray-700" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  I am a human bean 🫘😊
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-t from-black text-white hover:from-neutral-800 hover:to-neutral-500 rounded-xl py-6 text-base transition-all duration-300"
                style={{ fontFamily: 'Satoshi, sans-serif', borderWidth: '1px', borderColor: '#3f3f3f', backgroundImage: 'linear-gradient(to top, black, #404040)' }}
              >
                Work With Me
              </Button>
            </form>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-[450px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden relative">
              <Image
                src="/images/contact-image.webp"
                alt="Contact Veronika Karpiuk"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Footer integrated into Contact section */}
      <Footer />
    </section>
  );
}