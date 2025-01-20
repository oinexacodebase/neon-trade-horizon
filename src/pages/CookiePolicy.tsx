import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-neon-green mb-8">Cookie Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neon-green mb-4">1. What Are Cookies</h2>
            <p className="text-gray-300">
              Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and trading settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neon-green mb-4">2. Types of Cookies We Use</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Essential Cookies</h3>
                <p>Required for basic website functionality and security features.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Preference Cookies</h3>
                <p>Remember your settings and preferences for a better experience.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Analytics Cookies</h3>
                <p>Help us understand how visitors interact with our website.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Trading Cookies</h3>
                <p>Store your trading preferences and session information.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neon-green mb-4">3. Managing Cookies</h2>
            <p className="text-gray-300">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit our site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neon-green mb-4">4. Updates to This Policy</h2>
            <p className="text-gray-300">
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;