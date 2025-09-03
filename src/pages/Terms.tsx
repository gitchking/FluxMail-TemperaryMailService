import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hidden SEO Meta Tags */}
      <div style={{ display: 'none' }}>
        <meta name="description" content="Terms of Service for FluxMail temporary email service, fake credit card generator, and privacy tools. Learn about usage policies, limitations, and user responsibilities." />
        <meta name="keywords" content="temporary email terms, disposable email service terms, fake credit card generator terms, tempmail terms of service, privacy tools terms" />
        <meta name="author" content="FluxMail Team" />
        <meta property="og:title" content="FluxMail Terms of Service - Temporary Email & Privacy Tools" />
        <meta property="og:description" content="Read our comprehensive terms of service for temporary email, fake credit card generation, and privacy protection tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fluxmail.dev/terms" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="FluxMail Terms of Service" />
        <meta name="twitter:description" content="Terms of service for temporary email and privacy tools." />
        <link rel="canonical" href="https://fluxmail.dev/terms" />
        <meta name="robots" content="index, follow" />
      </div>

      <Header />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="card-premium animate-fade-in">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-lato mb-2">Terms of Service</CardTitle>
              <p className="text-muted-foreground font-ubuntu">Last updated: {new Date().toLocaleDateString()}</p>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none dark:prose-invert">
              <div className="space-y-6 font-ubuntu">
                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">1. Acceptance of Terms</h2>
                  <p>By accessing and using FluxMail services, including our temporary email service, fake credit card generator, and any related tools, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">2. Service Description</h2>
                  <p className="mb-3">FluxMail provides:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Temporary email address generation and inbox services</li>
                    <li>Fake/test credit card number generation for development purposes</li>
                    <li>Privacy-focused tools for testing and development</li>
                  </ul>
                  <p className="mt-3">All services are provided "as-is" without any warranties or guarantees.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">3. User Responsibilities</h2>
                  <p className="mb-3">You agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use our services only for lawful purposes</li>
                    <li>Not use our services for spam, harassment, or illegal activities</li>
                    <li>Understand that temporary emails expire and data will be lost</li>
                    <li>Not use fake credit card numbers for actual transactions</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">4. Service Limitations</h2>
                  <p className="mb-3">Our services have inherent limitations:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Temporary emails expire after 10 minutes (extendable to 24 hours)</li>
                    <li>All email data is permanently deleted upon expiration</li>
                    <li>Fake credit cards are for testing only and cannot process real transactions</li>
                    <li>Service availability is not guaranteed 100% of the time</li>
                    <li>We reserve the right to modify or discontinue services at any time</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">5. Privacy and Data</h2>
                  <p className="mb-3">We are committed to privacy:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>No personal information is required to use our services</li>
                    <li>All temporary email data is automatically deleted after expiration</li>
                    <li>We do not store or share your email content</li>
                    <li>IP addresses may be logged for security purposes only</li>
                    <li>See our Privacy Policy for detailed information</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">6. Prohibited Uses</h2>
                  <p className="mb-3">You may not use our services to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Engage in illegal activities or fraud</li>
                    <li>Send spam or unsolicited communications</li>
                    <li>Harass, threaten, or harm others</li>
                    <li>Attempt to bypass security measures</li>
                    <li>Use fake credit cards for actual purchases or fraud</li>
                    <li>Violate any laws or regulations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">7. Intellectual Property</h2>
                  <p>All content, features, and functionality of FluxMail services are owned by FluxMail and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without explicit permission.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">8. Disclaimer of Warranties</h2>
                  <p>Our services are provided "as-is" and "as-available" without any warranties, express or implied. We do not guarantee that our services will be uninterrupted, secure, or error-free. You use our services at your own risk.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">9. Limitation of Liability</h2>
                  <p>FluxMail shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, profits, or business opportunities, arising from the use or inability to use our services.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">10. Changes to Terms</h2>
                  <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes constitutes acceptance of the modified terms.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">11. Termination</h2>
                  <p>We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any reason, including violation of these Terms of Service.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">12. Governing Law</h2>
                  <p>These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction where FluxMail operates, without regard to conflict of law provisions.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">13. Contact Information</h2>
                  <p>For questions about these Terms of Service, please contact us through our support channels or email us at support@fluxmail.dev.</p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
