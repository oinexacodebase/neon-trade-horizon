import { Card, CardContent } from "@/components/ui/card";
import { Coins, BarChart2, Percent } from "lucide-react";

const investments = [
  {
    title: "Direct Cryptocurrency",
    icon: Coins,
    description:
      "Invest directly in popular cryptocurrencies like Bitcoin and Ethereum with our secure platform.",
  },
  {
    title: "ICOs and Token Sales",
    icon: BarChart2,
    description:
      "Participate in Initial Coin Offerings and token sales to access early-stage blockchain projects.",
  },
  {
    title: "Staking and Yield",
    icon: Percent,
    description:
      "Earn passive income through cryptocurrency staking and yield farming opportunities.",
  },
];

const InvestmentTypes = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-neon-green to-neon-purple bg-clip-text text-transparent">
            Investment Types
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {investments.map((investment) => (
            <Card
              key={investment.title}
              className="bg-black/50 backdrop-blur-sm border-neon-green/20 hover:border-neon-green/40 transition-colors group animate-fade-in"
            >
              <CardContent className="p-6">
                <investment.icon className="h-12 w-12 text-neon-green mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">
                  {investment.title}
                </h3>
                <p className="text-gray-400">{investment.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentTypes;