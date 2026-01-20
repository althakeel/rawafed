export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-600">Last updated: January 20, 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-slate-700">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Rawafed Real Estate ("we," "us," or "our"). We are committed to protecting your personal 
              information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and 
              safeguard your information when you use our website and services.
            </p>
            <p>
              By using our Services, you consent to the data practices described in this policy. If you do not agree 
              with the terms of this Privacy Policy, please do not access our Services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.1 Personal Information</h3>
            <p className="mb-2">We collect personal information that you voluntarily provide to us, including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Account credentials (username and password)</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Property preferences and search history</li>
              <li>Communication preferences</li>
              <li>Profile information and photos</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.2 Automatically Collected Information</h3>
            <p className="mb-2">When you use our Services, we automatically collect certain information, including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (pages visited, time spent on pages, click data)</li>
              <li>Location data (with your permission)</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Log files and analytics data</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.3 Information from Third Parties</h3>
            <p className="mb-2">We may receive information from:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Social media platforms (when you connect your account)</li>
              <li>Property agents and brokers</li>
              <li>Public databases and government records</li>
              <li>Marketing partners and analytics providers</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <p className="mb-2">We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, operate, and maintain our Services</li>
              <li>To process your transactions and send related information</li>
              <li>To send you property recommendations and personalized content</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send administrative information, updates, and security alerts</li>
              <li>To improve and optimize our Services through analytics</li>
              <li>To detect, prevent, and address fraud and security issues</li>
              <li>To comply with legal obligations and enforce our terms</li>
              <li>To send marketing communications (with your consent)</li>
              <li>To facilitate agent and client connections</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. How We Share Your Information</h2>
            <p className="mb-4">We may share your information in the following circumstances:</p>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">4.1 With Real Estate Professionals</h3>
            <p className="mb-4">
              When you express interest in a property, we share your contact information with the listing agent or 
              property owner to facilitate communication.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">4.2 With Service Providers</h3>
            <p className="mb-4">
              We share information with third-party service providers who perform services on our behalf, such as 
              payment processing, data analysis, email delivery, hosting services, and customer service.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">4.3 For Legal Purposes</h3>
            <p className="mb-4">
              We may disclose your information if required by law, court order, or governmental authority, or if we 
              believe disclosure is necessary to protect our rights, your safety, or the safety of others.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">4.4 Business Transfers</h3>
            <p>
              In the event of a merger, acquisition, or sale of assets, your information may be transferred to the 
              acquiring entity.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to collect and store information. You can instruct your 
              browser to refuse all cookies or indicate when a cookie is being sent. However, some features of our 
              Services may not function properly without cookies.
            </p>
            <p className="mb-2">Types of cookies we use:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Necessary for the Services to function</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our Services</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Targeting Cookies:</strong> Deliver relevant advertisements to you</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational security measures to protect your personal 
              information. However, no method of transmission over the internet or electronic storage is 100% secure. 
              While we strive to use commercially acceptable means to protect your information, we cannot guarantee 
              its absolute security.
            </p>
            <p className="mb-2">Our security measures include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication requirements</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Your Privacy Rights</h2>
            <p className="mb-2">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to processing of your information</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
              <li><strong>Data Portability:</strong> Request transfer of your data</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for processing</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided at the end of this policy.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Data Retention</h2>
            <p className="mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in 
              this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            <p>
              When we no longer need your information, we will securely delete or anonymize it in accordance with our 
              data retention policies.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Children's Privacy</h2>
            <p>
              Our Services are not intended for children under 18 years of age. We do not knowingly collect personal 
              information from children. If you become aware that a child has provided us with personal information, 
              please contact us, and we will take steps to delete such information.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. International Data Transfers</h2>
            <p className="mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. 
              These countries may have data protection laws that are different from the laws of your country.
            </p>
            <p>
              We take appropriate safeguards to ensure that your personal information remains protected in accordance 
              with this Privacy Policy when transferred internationally.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Third-Party Links</h2>
            <p>
              Our Services may contain links to third-party websites. We are not responsible for the privacy practices 
              of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by 
              posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p>
              We encourage you to review this Privacy Policy periodically for any changes. Your continued use of our 
              Services after any modifications indicates your acceptance of the updated policy.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Contact Us</h2>
            <p className="mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
              please contact us:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <p className="font-semibold text-slate-900 mb-2">Rawafed Real Estate - Privacy Team</p>
              <p>Email: privacy@rawafed.ae</p>
              <p>Phone: +971 4 XXX XXXX</p>
              <p>Address: Dubai, United Arab Emirates</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
