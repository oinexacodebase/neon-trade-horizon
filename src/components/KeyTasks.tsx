import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Briefcase, Target, Bell } from "lucide-react";

const tasks = [
  {
    title: "Market Analysis",
    icon: LineChart,
    description:
      "Advanced tools for technical and fundamental cryptocurrency market analysis.",
  },
  {
    title: "Portfolio Management",
    icon: Briefcase,
    description:
      "Track and manage your digital asset portfolio with real-time updates.",
  },
  {
    title: "Risk Management",
    icon: Target,
    description:
      "Set stop-loss orders and implement risk management strategies.",
  },
  {
    title: "Market Alerts",
    icon: Bell,
    description:
      "Receive instant notifications for price movements and market opportunities.",
  },
];

const KeyTasks = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-neon-green to-neon-purple bg-clip-text text-transparent">
            Key Tasks
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tasks.map((task, index) => (
            <Card
              key={task.title}
              className="bg-black/50 backdrop-blur-sm border-neon-green/20 hover:border-neon-green/40 transition-colors group animate-fade-in"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <CardContent className="p-6">
                <task.icon className="h-12 w-12 text-neon-green mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-2">
                  {task.title}
                </h3>
                <p className="text-gray-400 text-sm">{task.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyTasks;