export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms & Conditions</h1>
          <p className="text-slate-600">Last updated: January 20, 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-slate-700">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using Rawafed's website and services, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to these terms, please do not use our services.
            </p>
            <p>
              These Terms and Conditions govern your use of our website, mobile applications, and all associated 
              services (collectively, the "Services"). We reserve the right to update these terms at any time without 
              prior notice.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Use of Services</h2>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.1 Eligibility</h3>
            <p className="mb-4">
              You must be at least 18 years old to use our Services. By using our Services, you represent and 
              warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.2 Account Registration</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You may need to create an account to access certain features of our Services</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You agree to provide accurate, current, and complete information during registration</li>
              <li>You are responsible for all activities that occur under your account</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.3 Prohibited Activities</h3>
            <p className="mb-2">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Services for any illegal purpose or in violation of any local, state, national, or international law</li>
              <li>Post false, inaccurate, misleading, or fraudulent property listings</li>
              <li>Harass, abuse, or harm other users of the Services</li>
              <li>Attempt to gain unauthorized access to any portion of the Services</li>
              <li>Scrape, spider, or otherwise automatically collect information from the Services</li>
              <li>Transmit any viruses, malware, or other malicious code</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Property Listings</h2>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">3.1 Listing Accuracy</h3>
            <p className="mb-4">
              All property listings are provided by third-party agents, brokers, and property owners. While we strive 
              to ensure accuracy, Rawafed does not guarantee the accuracy, completeness, or reliability of any listing 
              information.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">3.2 No Guarantee of Availability</h3>
            <p className="mb-4">
              Property availability is subject to change without notice. Rawafed is not responsible for properties 
              that have been sold, rented, or otherwise become unavailable after being listed on our platform.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">3.3 Listing Submissions</h3>
            <p>
              If you submit property listings to our Services, you grant Rawafed a non-exclusive, worldwide, 
              royalty-free license to use, reproduce, and display such content in connection with our Services.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Fees and Payments</h2>
            <p className="mb-4">
              Certain features of our Services may require payment of fees. All fees are stated in UAE Dirhams (AED) 
              unless otherwise specified. You agree to pay all applicable fees in connection with your use of such 
              Services.
            </p>
            <p>
              Rawafed reserves the right to modify fees at any time. We will provide reasonable notice of any fee 
              changes through our Services or via email.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property Rights</h2>
            <p className="mb-4">
              The Services and their entire contents, features, and functionality (including but not limited to all 
              information, software, text, displays, images, video, and audio, and the design, selection, and 
              arrangement thereof) are owned by Rawafed, its licensors, or other providers of such material.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly 
              perform, republish, download, store, or transmit any of the material on our Services without prior 
              written consent.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Disclaimer of Warranties</h2>
            <p className="mb-4">
              THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, 
              EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, 
              FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p>
              Rawafed does not warrant that the Services will be uninterrupted, secure, or error-free, or that any 
              defects will be corrected.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
            <p className="mb-4">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, RAWAFED SHALL NOT BE LIABLE FOR ANY INDIRECT, 
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER 
              INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
            <p>
              IN NO EVENT SHALL RAWAFED'S TOTAL LIABILITY TO YOU FOR ALL DAMAGES EXCEED THE AMOUNT OF AED 1,000 OR 
              THE AMOUNT YOU HAVE PAID TO RAWAFED IN THE PAST TWELVE MONTHS, WHICHEVER IS GREATER.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Rawafed and its officers, directors, employees, 
              agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses arising 
              out of or in any way connected with your access to or use of the Services, your violation of these 
              Terms, or your violation of any rights of another person or entity.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. 
              Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of 
              Dubai, UAE.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision 
              is material, we will provide at least 30 days' notice prior to any new terms taking effect.
            </p>
            <p>
              By continuing to access or use our Services after any revisions become effective, you agree to be bound 
              by the revised terms.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Information</h2>
            <p className="mb-2">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mt-4">
              <p className="font-semibold text-slate-900 mb-2">Rawafed Real Estate</p>
              <p>Email: legal@rawafed.ae</p>
              <p>Phone: +971 4 XXX XXXX</p>
              <p>Address: Dubai, United Arab Emirates</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
