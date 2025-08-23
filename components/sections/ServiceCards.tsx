"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import { Clock, DollarSign } from "lucide-react";

export default function ServiceCards() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
            Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Personalized styling experiences designed to make your wardrobe work for you.
            Whether it's a full reset, a seasonal refresh, or a look for a special occasion,
            each service is tailored to your lifestyle and unique style journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {service.formats.map((format) => (
                      <Badge
                        key={format}
                        variant={format === "Online" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {format}
                      </Badge>
                    ))}
                  </div>
                  
                  <CardTitle className="text-xl font-medium group-hover:text-gray-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-500">
                        <DollarSign size={16} />
                        <span>Price</span>
                      </div>
                      <span className="font-medium text-gray-900">
                        ${service.price}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Clock size={16} />
                        <span>Timeline</span>
                      </div>
                      <span className="font-medium text-gray-900">
                        {service.duration}
                      </span>
                    </div>
                  </div>

                  <Button 
                    asChild 
                    className="w-full mt-6"
                    variant="outline"
                  >
                    <Link href={service.href}>
                      Explore This Service
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}