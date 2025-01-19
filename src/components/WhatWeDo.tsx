import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WhatWeDo = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-green to-neon-purple bg-clip-text text-transparent">
              What We Do
            </span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg leading-relaxed">
            We provide cutting-edge cryptocurrency trading solutions that empower traders
            to navigate the digital asset markets with confidence. Our platform
            combines advanced technology with user-friendly interfaces to deliver a
            seamless trading experience.
          </p>
          <Button
            className="group bg-neon-green hover:bg-neon-green/80 text-black font-bold"
          >
            Start Trading Now
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;