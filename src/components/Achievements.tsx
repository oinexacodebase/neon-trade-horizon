import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, BarChart3, Wallet } from "lucide-react";

const achievements = [
  {
    title: "Wealth Accumulation",
    value: "100%",
    icon: TrendingUp,
    description: "Success rate in portfolio growth",
  },
  {
    title: "Daily Trading Volume",
    value: "10k+",
    icon: BarChart3,
    description: "Active trading transactions",
  },
  {
    title: "Global Traders",
    value: "50k+",
    icon: Users,
    description: "Active users worldwide",
  },
  {
    title: "Managed Assets",
    value: "$100M+",
    icon: Wallet,
    description: "Total assets under management",
  },
];

const Achievements = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement) => (
            <Card
              key={achievement.title}
              className="bg-black/50 backdrop-blur-sm border-neon-green/20 hover:border-neon-green/40 transition-colors group"
            >
              <CardContent className="p-6">
                <achievement.icon className="h-12 w-12 text-neon-green mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {achievement.value}
                </h3>
                <p className="text-lg font-semibold text-neon-green mb-2">
                  {achievement.title}
                </p>
                <p className="text-gray-400">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;