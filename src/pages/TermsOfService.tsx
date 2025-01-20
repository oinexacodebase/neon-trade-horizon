import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-neon-green mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neon-green mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300">
              By accessing and using CryptoTrade's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neon-green mb-4">2. Service Description</h2>
            <p className="text-gray-300">
              CryptoTrade provides a cryptocurrency trading platform that allows users to buy, sell, and trade various digital assets. Our services include market analysis, portfolio management, and educational resources.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neon-green mb-4">3. User Obligations</h2>
            <ul className="list-disc pl-6 text-gray-300">
              <li className="mb-2">You must be at least 18 years old to use our services</li>
              <li className="mb-2">You must provide accurate and complete information during registration</li>
              <li className="mb-2">You are responsible for maintaining the security of your account</li>
              <li>You agree to comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neon-green mb-4">4. Trading Risks</h2>
            <p className="text-gray-300">
              Cryptocurrency trading involves substantial risk of loss and is not suitable for all investors. You should carefully consider whether trading is appropriate for you in light of your circumstances, knowledge, and financial resources.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neon-green mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-300">
              CryptoTrade shall not be liable for any losses, damages, or injuries resulting from the use of our services. This includes but is not limited to direct, indirect, incidental, punitive, and consequential damages.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;