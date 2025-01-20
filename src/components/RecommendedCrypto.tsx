import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bitcoin, Wallet, CircleDollarSign } from "lucide-react";

const cryptoData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    description: "The original cryptocurrency, known for its security and widespread adoption.",
    icon: Bitcoin,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    description: "Smart contract platform enabling decentralized applications and DeFi.",
    icon: Wallet,
  },
  {
    name: "Binance Coin",
    symbol: "BNB",
    description: "Native token of Binance ecosystem, used for trading and payments.",
    icon: CircleDollarSign,
  },
];

const RecommendedCrypto = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-neon-green">
          Recommended Cryptocurrencies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cryptoData.map((crypto) => {
            const Icon = crypto.icon;
            return (
              <Card key={crypto.symbol} className="border border-neon-green/20 bg-black/50 backdrop-blur-sm hover:border-neon-green/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon className="w-8 h-8 text-neon-green" />
                    <div>
                      <CardTitle className="text-xl">{crypto.name}</CardTitle>
                      <CardDescription className="text-neon-green/60">{crypto.symbol}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{crypto.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecommendedCrypto;