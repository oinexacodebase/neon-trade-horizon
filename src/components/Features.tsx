import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const Features = () => {
  const features = [
    "Trading",
    "Mining",
    "Assets",
    "Security",
    "Analytics",
    "Portfolio",
    "Exchange",
    "Investments",
    "Staking",
    "DeFi",
  ];

  return (
    <section className="py-12 bg-black/50 backdrop-blur-sm">
      <div className="container">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-4 pb-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-neon-green/20 bg-black/40 backdrop-blur-sm hover:border-neon-green/40 transition-colors animate-fade-in"
              >
                <span className="text-neon-green font-medium">{feature}</span>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default Features;