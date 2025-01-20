import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-neon-green mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neon-green mb-4">1. Information We Collect</h2>
            <p className="text-gray-300">
              We collect various types of information to provide and improve our services, including:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li className="mb-2">Personal identification information</li>
              <li className="mb-2">Trading history and preferences</li>
              <li className="mb-2">Device and usage information</li>
              <li>Communication records</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neon-green mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300">
              Your information is used to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li className="mb-2">Process your transactions</li>
              <li className="mb-2">Provide customer support</li>
              <li className="mb-2">Improve our services</li>
              <li>Comply with legal requirements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neon-green mb-4">3. Data Security</h2>
            <p className="text-gray-300">
              We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neon-green mb-4">4. Your Rights</h2>
            <p className="text-gray-300">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mt-2">
              <li className="mb-2">Access your personal data</li>
              <li className="mb-2">Request data correction</li>
              <li className="mb-2">Request data deletion</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;