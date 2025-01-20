import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Globe, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-neon-green to-neon-purple bg-clip-text text-transparent"
          >
            Revolutionizing Crypto Trading
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            We're building the future of cryptocurrency trading with cutting-edge technology and unparalleled security.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 border border-neon-green/20 rounded-lg backdrop-blur-sm">
            <h3 className="text-4xl font-bold text-neon-green mb-2">$10B+</h3>
            <p className="text-gray-400">Trading Volume</p>
          </div>
          <div className="text-center p-6 border border-neon-green/20 rounded-lg backdrop-blur-sm">
            <h3 className="text-4xl font-bold text-neon-green mb-2">1M+</h3>
            <p className="text-gray-400">Active Users</p>
          </div>
          <div className="text-center p-6 border border-neon-green/20 rounded-lg backdrop-blur-sm">
            <h3 className="text-4xl font-bold text-neon-green mb-2">50+</h3>
            <p className="text-gray-400">Countries Served</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-neon-green">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-neon-green/20 rounded-lg backdrop-blur-sm">
              <Shield className="w-12 h-12 text-neon-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Secure Platform</h3>
              <p className="text-gray-400">State-of-the-art security measures to protect your assets</p>
            </div>
            <div className="p-6 border border-neon-green/20 rounded-lg backdrop-blur-sm">
              <Globe className="w-12 h-12 text-neon-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Global Access</h3>
              <p className="text-gray-400">Trade from anywhere in the world, 24/7</p>
            </div>
            <div className="p-6 border border-neon-green/20 rounded-lg backdrop-blur-sm">
              <Cpu className="w-12 h-12 text-neon-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Advanced Technology</h3>
              <p className="text-gray-400">Cutting-edge trading algorithms and tools</p>
            </div>
            <div className="p-6 border border-neon-green/20 rounded-lg backdrop-blur-sm">
              <Users className="w-12 h-12 text-neon-green mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Support</h3>
              <p className="text-gray-400">24/7 customer support from trading experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-neon-green">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Alex Thompson", role: "CEO & Founder", image: "https://i.pravatar.cc/300?img=1" },
              { name: "Sarah Chen", role: "CTO", image: "https://i.pravatar.cc/300?img=5" },
              { name: "Michael Roberts", role: "Head of Trading", image: "https://i.pravatar.cc/300?img=3" }
            ].map((member) => (
              <div key={member.name} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-neon-green/50"
                />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;