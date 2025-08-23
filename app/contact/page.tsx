"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactPage() {
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
              Contact
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tell me a little bit about yourself and service that you are looking to get. 
              I'll make sure to reach out within next 24 hours so we could discuss our 
              future collaboration. Can't wait to meet you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-sm"
              >
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const faqs = [
  {
    question: "How does online styling work?",
    answer: "Online styling sessions are conducted via video call where we discuss your style goals, review your current wardrobe, and create personalized recommendations. You'll receive a detailed PDF with outfit suggestions, shopping links, and styling tips."
  },
  {
    question: "What's included in a wardrobe audit?",
    answer: "A comprehensive review of your current pieces, body type analysis, color consultation, and detailed recommendations for what to keep, donate, or shop for. You'll also get outfit formulas to maximize your wardrobe potential."
  },
  {
    question: "How long does the styling process take?",
    answer: "Depending on the service, timelines range from 1 day for event styling to 14-18 days for comprehensive audit + capsule services. I ensure quality over speed to deliver the best results."
  },
  {
    question: "Do you work with specific budgets?",
    answer: "Absolutely! I work with various budgets and always provide options at different price points. We can focus on high-impact pieces or work with what you already own to maximize your investment."
  },
  {
    question: "Can you help with special occasions?",
    answer: "Yes! I offer event styling for dates, interviews, special occasions, and professional events. We'll create looks that feel confident and authentically you for any occasion."
  }
];