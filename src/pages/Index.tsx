import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhatWeDo from "@/components/WhatWeDo";
import Achievements from "@/components/Achievements";
import TradingProcess from "@/components/TradingProcess";
import InvestmentTypes from "@/components/InvestmentTypes";
import Benefits from "@/components/Benefits";
import KeyTasks from "@/components/KeyTasks";
import RecommendedCrypto from "@/components/RecommendedCrypto";
import PricingPlans from "@/components/PricingPlans";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <Features />
      <WhatWeDo />
      <Achievements />
      <TradingProcess />
      <RecommendedCrypto />
      <InvestmentTypes />
      <Benefits />
      <KeyTasks />
      <PricingPlans />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;