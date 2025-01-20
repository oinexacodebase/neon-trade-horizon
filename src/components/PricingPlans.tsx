import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Basic",
    price: "$29",
    description: "Perfect for getting started",
    features: ["Basic market analysis", "5 trades per day", "Email support", "Basic tutorials"],
  },
  {
    name: "Premium",
    price: "$99",
    description: "Most popular choice",
    features: ["Advanced market analysis", "Unlimited trades", "24/7 support", "Premium tutorials", "Portfolio tracking"],
  },
  {
    name: "Elite",
    price: "$299",
    description: "For serious traders",
    features: ["Real-time market data", "API access", "Dedicated account manager", "Custom strategies", "Priority support"],
  },
];

const PricingPlans = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-black to-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-neon-green">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className="border border-neon-green/20 bg-black/50 backdrop-blur-sm hover:border-neon-green/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-3xl font-bold text-neon-green">
                  {plan.price}
                  <span className="text-sm text-gray-400">/month</span>
                </CardDescription>
                <p className="text-sm text-gray-400">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-neon-green" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-neon-green hover:bg-neon-green/80 text-black font-bold">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;