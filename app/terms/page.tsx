import Footer from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-light text-gray-900 mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              Terms of service content will be added here. This should include terms of use,
              service agreements, and legal disclaimers.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}