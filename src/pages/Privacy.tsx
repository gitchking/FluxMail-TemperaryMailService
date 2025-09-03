import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hidden SEO Meta Tags */}
      <div style={{ display: 'none' }}>
        <meta name="description" content="Privacy Policy for FluxMail temporary email service and fake credit card generator. Learn how we protect your privacy, handle data, and ensure complete anonymity." />
        <meta name="keywords" content="temporary email privacy, disposable email privacy policy, fake credit card generator privacy, tempmail privacy, anonymous email service, no registration email privacy" />
        <meta name="author" content="FluxMail Team" />
        <meta property="og:title" content="FluxMail Privacy Policy - Complete Privacy Protection" />
        <meta property="og:description" content="Learn how FluxMail protects your privacy with anonymous temporary email services and secure fake credit card generation. No personal data required." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fluxmail.dev/privacy" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="FluxMail Privacy Policy - Anonymous Email Service" />
        <meta name="twitter:description" content="Complete privacy protection with no personal data collection." />
        <link rel="canonical" href="https://fluxmail.dev/privacy" />
        <meta name="robots" content="index, follow" />
      </div>

      <Header />
      
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="card-premium animate-fade-in">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-lato mb-2">Privacy Policy</CardTitle>
              <p className="text-muted-foreground font-ubuntu">Last updated: {new Date().toLocaleDateString()}</p>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none dark:prose-invert">
              <div className="space-y-6 font-ubuntu">
                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">1. Our Commitment to Privacy</h2>
                  <p>At FluxMail, your privacy is our top priority. We provide temporary email services and fake credit card generation tools with complete anonymity. This Privacy Policy explains how we protect your privacy and handle any data that may be collected.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">2. No Personal Information Required</h2>
                  <p className="mb-3">We do not require or collect any personal information to use our services:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>No registration required</li>
                    <li>No email addresses collected</li>
                    <li>No names, phone numbers, or personal details needed</li>
                    <li>No account creation necessary</li>
                    <li>Completely anonymous usage</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">3. Temporary Email Data</h2>
                  <p className="mb-3">Our temporary email service operates with minimal data retention:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Emails are stored temporarily for access during the active period</li>
                    <li>All email data is permanently deleted after expiration (10 minutes to 24 hours)</li>
                    <li>No backup or archival of email content</li>
                    <li>Email addresses are recycled and reused</li>
                    <li>No metadata or headers are retained long-term</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">4. Fake Credit Card Generator</h2>
                  <p className="mb-3">Our credit card generator is completely anonymous:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Generates fake/test card numbers using algorithms</li>
                    <li>No real credit card data is processed or stored</li>
                    <li>Generated numbers are not linked to any user</li>
                    <li>No usage tracking or analytics</li>
                    <li>Numbers are for development/testing purposes only</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">5. Data We Do NOT Collect</h2>
                  <p className="mb-3">We explicitly do not collect:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Personal names or identities</li>
                    <li>Real email addresses</li>
                    <li>Phone numbers</li>
                    <li>Physical addresses</li>
                    <li>Payment information</li>
                    <li>Browsing history</li>
                    <li>Cookies or tracking data</li>
                    <li>Device fingerprints</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">6. Technical Data</h2>
                  <p className="mb-3">For security and service operation, we may temporarily collect:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP addresses (for rate limiting and abuse prevention)</li>
                    <li>Browser user agent strings (for compatibility)</li>
                    <li>Request timestamps (for service monitoring)</li>
                    <li>All technical data is automatically deleted within 24-48 hours</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">7. Third-Party Services</h2>
                  <p className="mb-3">We use third-party services with privacy considerations:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>1secmail.com API for email services (no personal data shared)</li>
                    <li>No third-party analytics or tracking services</li>
                    <li>No advertising networks or data brokers</li>
                    <li>No social media integrations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">8. Data Security</h2>
                  <p className="mb-3">We implement security measures to protect your privacy:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>HTTPS encryption for all communications</li>
                    <li>No permanent data storage</li>
                    <li>Automatic data deletion</li>
                    <li>No database of user information</li>
                    <li>Secure server infrastructure</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">9. Your Rights</h2>
                  <p className="mb-3">Since we collect no personal data, your privacy rights are inherently protected:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Right to anonymity - always maintained</li>
                    <li>Right to deletion - automatic and immediate</li>
                    <li>Right to access - no personal data to access</li>
                    <li>Right to portability - no personal data to transfer</li>
                    <li>Right to be forgotten - automatic upon service use</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">10. Children's Privacy</h2>
                  <p>Our services are designed to be safe for users of all ages. Since we collect no personal information, we comply with children's privacy requirements including COPPA and GDPR-K without additional measures.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">11. International Users</h2>
                  <p>Our privacy practices comply with major privacy regulations worldwide:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>GDPR (General Data Protection Regulation) - EU</li>
                    <li>CCPA (California Consumer Privacy Act) - California</li>
                    <li>PIPEDA (Personal Information Protection Act) - Canada</li>
                    <li>LGPD (Lei Geral de Proteção de Dados) - Brazil</li>
                    <li>And other regional privacy laws</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">12. Data Retention Policy</h2>
                  <p className="mb-3">Our data retention is minimal and automatic:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Temporary emails: 10 minutes to 24 hours maximum</li>
                    <li>Technical logs: 24-48 hours maximum</li>
                    <li>No long-term data storage</li>
                    <li>No backup systems for user data</li>
                    <li>Immediate deletion upon expiration</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">13. Changes to Privacy Policy</h2>
                  <p>We may update this Privacy Policy occasionally. Any changes will be posted on this page with an updated date. Since we collect no personal data, changes will not affect your privacy rights.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">14. Contact Us</h2>
                  <p>For privacy-related questions or concerns, please contact us:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Email: privacy@fluxmail.dev</li>
                    <li>Website: fluxmail.dev/contact</li>
                    <li>Response time: Within 24-48 hours</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-lato font-semibold mb-3">15. Privacy-First Design</h2>
                  <p>Our services are built with privacy-by-design principles:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Minimal data collection (none)</li>
                    <li>Automatic data deletion</li>
                    <li>No user tracking</li>
                    <li>No advertising</li>
                    <li>Anonymous service delivery</li>
                    <li>Transparent privacy practices</li>
                  </ul>
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

export default Privacy;
