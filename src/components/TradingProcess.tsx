import { Card, CardContent } from "@/components/ui/card";
import { Brain, Building2, ArrowLeftRight } from "lucide-react";

const steps = [
  {
    title: "Understand Cryptocurrency",
    icon: Brain,
    description:
      "Learn the fundamentals of blockchain technology and digital assets to make informed decisions.",
  },
  {
    title: "Select Exchange",
    icon: Building2,
    description:
      "Choose from our curated list of secure and regulated cryptocurrency exchanges.",
  },
  {
    title: "Trade",
    icon: ArrowLeftRight,
    description:
      "Execute trades with confidence using our advanced trading platform and real-time analytics.",
  },
];

const TradingProcess = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-background">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-neon-green to-neon-purple bg-clip-text text-transparent">
            Trading Process
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Card
              key={step.title}
              className="bg-black/50 backdrop-blur-sm border-neon-green/20 hover:border-neon-green/40 transition-colors group relative overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 text-neon-green/20 font-bold text-4xl">
                  {index + 1}
                </div>
                <step.icon className="h-12 w-12 text-neon-green mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingProcess;