import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingPlans from "@/components/PricingPlans";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-neon-green to-neon-purple bg-clip-text text-transparent"
          >
            Choose Your Trading Plan
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Flexible plans designed to meet your trading needs
          </motion.p>
        </div>
      </section>

      {/* Pricing Plans */}
      <PricingPlans />

      {/* Features Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-neon-green">
            Full Feature Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-neon-green/20">
                  <th className="p-4 text-left">Features</th>
                  <th className="p-4 text-center">Basic</th>
                  <th className="p-4 text-center">Premium</th>
                  <th className="p-4 text-center">Elite</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Real-time market data",
                  "Portfolio tracking",
                  "API access",
                  "Custom alerts",
                  "Priority support",
                  "Advanced analytics",
                  "Mobile app access",
                  "Custom reports"
                ].map((feature, index) => (
                  <tr key={index} className="border-b border-neon-green/20">
                    <td className="p-4">{feature}</td>
                    <td className="p-4 text-center">
                      {index < 3 ? <Check className="w-5 h-5 text-neon-green mx-auto" /> : "-"}
                    </td>
                    <td className="p-4 text-center">
                      {index < 6 ? <Check className="w-5 h-5 text-neon-green mx-auto" /> : "-"}
                    </td>
                    <td className="p-4 text-center">
                      <Check className="w-5 h-5 text-neon-green mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-neon-green">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "Can I change plans anytime?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                q: "Is there a free trial?",
                a: "We offer a 14-day free trial on all plans so you can test our features risk-free."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and various cryptocurrencies."
              },
              {
                q: "Are there any hidden fees?",
                a: "No hidden fees. What you see is what you pay, with all features clearly listed."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 border border-neon-green/20 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;