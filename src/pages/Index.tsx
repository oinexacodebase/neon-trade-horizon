import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhatWeDo from "@/components/WhatWeDo";
import Achievements from "@/components/Achievements";
import TradingProcess from "@/components/TradingProcess";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <Features />
      <WhatWeDo />
      <Achievements />
      <TradingProcess />
    </div>
  );
};

export default Index;