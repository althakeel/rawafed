export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Cookies Policy</h1>
          <p className="text-slate-600">Last updated: January 20, 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-slate-700">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. What Are Cookies</h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to the site owners.
            </p>
            <p>
              Rawafed uses cookies to enhance your experience on our website, understand how you use our Services, and 
              deliver personalized content and advertisements.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.1 Essential Cookies</h3>
            <p className="mb-4">
              These cookies are necessary for the website to function properly. They enable core functionality such as 
              security, network management, and accessibility. Without these cookies, services you have asked for cannot 
              be provided.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="font-semibold text-blue-900 mb-2">Examples:</p>
              <ul className="list-disc pl-6 space-y-1 text-blue-800">
                <li>Authentication cookies (keep you logged in)</li>
                <li>Security cookies (detect authentication abuse)</li>
                <li>Session cookies (store temporary data during your visit)</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.2 Performance Cookies</h3>
            <p className="mb-4">
              These cookies collect information about how visitors use our website, such as which pages are visited most 
              often and if users receive error messages. These cookies help us improve the performance of our website.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="font-semibold text-green-900 mb-2">Examples:</p>
              <ul className="list-disc pl-6 space-y-1 text-green-800">
                <li>Google Analytics (visitor statistics and behavior)</li>
                <li>Page load time tracking</li>
                <li>Error reporting and diagnostics</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.3 Functional Cookies</h3>
            <p className="mb-4">
              These cookies allow our website to remember choices you make (such as your language preference or region) 
              and provide enhanced, more personalized features.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
              <p className="font-semibold text-purple-900 mb-2">Examples:</p>
              <ul className="list-disc pl-6 space-y-1 text-purple-800">
                <li>Language and location preferences</li>
                <li>Currency selection</li>
                <li>Search filters and saved preferences</li>
                <li>Property favorites and saved searches</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.4 Targeting/Advertising Cookies</h3>
            <p className="mb-4">
              These cookies are used to deliver advertisements more relevant to you and your interests. They also help 
              limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
              <p className="font-semibold text-orange-900 mb-2">Examples:</p>
              <ul className="list-disc pl-6 space-y-1 text-orange-800">
                <li>Facebook Pixel (track conversions and retargeting)</li>
                <li>Google Ads (display personalized advertisements)</li>
                <li>LinkedIn Insight Tag (professional audience targeting)</li>
                <li>Property recommendation algorithms</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Third-Party Cookies</h2>
            <p className="mb-4">
              In addition to our own cookies, we may use various third-party cookies to report usage statistics, deliver 
              advertisements, and provide social media features.
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border border-slate-300 rounded-lg overflow-hidden">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 px-4 py-2 text-left font-semibold">Service</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-semibold">Purpose</th>
                    <th className="border border-slate-300 px-4 py-2 text-left font-semibold">Privacy Policy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Google Analytics</td>
                    <td className="border border-slate-300 px-4 py-2">Website analytics</td>
                    <td className="border border-slate-300 px-4 py-2">
                      <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">View</a>
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2">Facebook</td>
                    <td className="border border-slate-300 px-4 py-2">Social features & ads</td>
                    <td className="border border-slate-300 px-4 py-2">
                      <a href="https://www.facebook.com/privacy" className="text-blue-600 hover:underline">View</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-2">Google Ads</td>
                    <td className="border border-slate-300 px-4 py-2">Advertising</td>
                    <td className="border border-slate-300 px-4 py-2">
                      <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">View</a>
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-2">LinkedIn</td>
                    <td className="border border-slate-300 px-4 py-2">Professional networking</td>
                    <td className="border border-slate-300 px-4 py-2">
                      <a href="https://www.linkedin.com/legal/privacy-policy" className="text-blue-600 hover:underline">View</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. How Long Do Cookies Last</h2>
            <p className="mb-4">Cookies can be either session cookies or persistent cookies:</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Session Cookies</h3>
                <p className="text-sm mb-2">
                  These are temporary cookies that expire when you close your browser. They are used to maintain your 
                  session as you navigate through our website.
                </p>
                <p className="text-xs text-slate-600 italic">Duration: Active browsing session only</p>
              </div>
              
              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Persistent Cookies</h3>
                <p className="text-sm mb-2">
                  These cookies remain on your device for a set period or until you manually delete them. They remember 
                  your preferences across multiple visits.
                </p>
                <p className="text-xs text-slate-600 italic">Duration: Up to 2 years (typically 30-365 days)</p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. How to Manage Cookies</h2>
            <p className="mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences 
              through our cookie consent banner when you first visit our website, or by adjusting your browser settings.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">5.1 Browser Settings</h3>
            <p className="mb-3">Most web browsers allow you to control cookies through their settings. To manage cookies:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
              <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">5.2 Opt-Out Tools</h3>
            <p className="mb-2">You can opt out of targeted advertising through:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Ads Settings: <a href="https://adssettings.google.com" className="text-blue-600 hover:underline">adssettings.google.com</a></li>
              <li>Facebook Ad Preferences: Account Settings → Ads</li>
              <li>Your Online Choices: <a href="https://www.youronlinechoices.com" className="text-blue-600 hover:underline">youronlinechoices.com</a></li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Impact of Disabling Cookies</h2>
            <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6">
              <p className="text-yellow-900 mb-3">
                ⚠️ <strong>Please Note:</strong> If you choose to disable cookies, some features of our website may not 
                function properly. You may experience:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-yellow-800">
                <li>Inability to stay logged in</li>
                <li>Loss of personalized content and preferences</li>
                <li>Reduced functionality of interactive features</li>
                <li>Less relevant property recommendations</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Do Not Track Signals</h2>
            <p>
              Some browsers incorporate a "Do Not Track" (DNT) feature that signals to websites you visit that you do 
              not want to have your online activity tracked. Currently, there is no industry standard for how to respond 
              to DNT signals, so our website does not respond to DNT signals at this time.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Updates to This Policy</h2>
            <p className="mb-4">
              We may update this Cookies Policy from time to time to reflect changes in technology, legislation, or our 
              business practices. We will notify you of any material changes by posting the updated policy on this page.
            </p>
            <p>
              We encourage you to review this policy periodically to stay informed about how we use cookies.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our use of cookies or this Cookies Policy, please contact us:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <p className="font-semibold text-slate-900 mb-2">Rawafed Real Estate - Cookie Policy Inquiries</p>
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
