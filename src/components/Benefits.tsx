import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, Shield, Zap, Globe } from "lucide-react";

const benefits = [
  {
    title: "Innovation and Growth",
    icon: ArrowUp,
    description:
      "Be part of the future of finance with cutting-edge blockchain technology.",
  },
  {
    title: "Hedge Against Inflation",
    icon: Shield,
    description:
      "Protect your wealth with digital assets that are independent of traditional financial systems.",
  },
  {
    title: "24/7 Market Access",
    icon: Zap,
    description:
      "Trade anytime, anywhere with our round-the-clock cryptocurrency markets.",
  },
  {
    title: "Global Opportunities",
    icon: Globe,
    description:
      "Access worldwide investment opportunities without geographical restrictions.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-black">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-neon-green to-neon-purple bg-clip-text text-transparent">
            Benefits
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              className="bg-black/50 backdrop-blur-sm border-neon-green/20 hover:border-neon-green/40 transition-colors group animate-fade-in"
            >
              <CardContent className="p-6">
                <benefit.icon className="h-12 w-12 text-neon-green mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;