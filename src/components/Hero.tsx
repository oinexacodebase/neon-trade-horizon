import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-neon-purple/20" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className="text-neon-green">Cryptocurrency </span>
          <span className="bg-gradient-to-r from-neon-green to-neon-purple bg-clip-text text-transparent">
            Traders
          </span>
        </h1>
        
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          Navigate the future of finance with our advanced trading platform.
          Start your journey into cryptocurrency trading today.
        </p>
        
        <div className="mt-10">
          <Button
            className="bg-neon-green hover:bg-neon-green/80 text-black font-bold text-lg px-8 py-6"
          >
            Start Now <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-neon-green/10 rounded-full filter blur-3xl animate-glow" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-neon-purple/10 rounded-full filter blur-3xl animate-glow" />
      </div>
    </div>
  );
};

export default Hero;