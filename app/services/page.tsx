"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import { Clock, DollarSign, CheckCircle } from "lucide-react";

export default function ServicesPage() {
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
              Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Personalized styling experiences designed to make your wardrobe work for you.
              Whether it's a full reset, a seasonal refresh, or a look for a special occasion,
              each service is tailored to your lifestyle and unique style journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                id={service.id.replace("#", "")}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-gray-200">
                  <CardHeader className="space-y-4 pb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.formats.map((format) => (
                        <Badge
                          key={format}
                          variant={format === "Online" ? "default" : "secondary"}
                          className="text-sm px-3 py-1"
                        >
                          {format}
                        </Badge>
                      ))}
                    </div>
                    
                    <CardTitle className="text-2xl font-medium text-gray-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-8">
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {service.description}
                    </p>

                    {/* Pricing & Timeline */}
                    <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-gray-600">
                          <DollarSign size={20} />
                          <span className="font-medium">Investment</span>
                        </div>
                        <span className="font-semibold text-xl text-gray-900">
                          ${service.price}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-gray-600">
                          <Clock size={20} />
                          <span className="font-medium">Timeline</span>
                        </div>
                        <span className="font-semibold text-gray-900">
                          {service.duration}
                        </span>
                      </div>
                    </div>

                    {/* What's Included */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-900">What's Included:</h4>
                      <div className="space-y-2">
                        {getServiceIncludes(service.id).map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button asChild size="lg" className="w-full">
                      <Link href="/contact">Book This Service</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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

function getServiceIncludes(serviceId: string): string[] {
  const includes = {
    "wardrobe-audit": [
      "Comprehensive wardrobe analysis",
      "Body type and color consultation",
      "Detailed styling recommendations",
      "Shopping list with specific items",
      "Online or in-person session"
    ],
    "seasonal-capsule": [
      "Curated seasonal wardrobe",
      "Mix-and-match outfit combinations",
      "Shopping recommendations",
      "Styling guide and tips",
      "Digital lookbook delivery"
    ],
    "audit-capsule": [
      "Complete wardrobe audit",
      "Seasonal capsule creation",
      "Outfit formulas and styling rules",
      "Comprehensive shopping guide",
      "Follow-up styling session"
    ],
    "event-styling": [
      "Occasion-specific styling",
      "Outfit recommendations",
      "Shopping assistance",
      "Styling tips and tricks",
      "Quick consultation"
    ]
  };

  return includes[serviceId as keyof typeof includes] || [];
}