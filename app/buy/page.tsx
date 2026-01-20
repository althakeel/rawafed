import Image from "next/image";

export default function BuyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <h1 className="mb-4 text-5xl font-bold text-white">Commercial Brokerage Services</h1>
            <p className="text-xl text-white/90">
              Expert guidance for buying premium commercial properties
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Introduction Section */}
        <div className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Why Choose Our Commercial Brokerage?
          </h2>
          <p className="mb-4 text-lg text-slate-600">
            With over 20 years of experience in the commercial real estate market, we provide 
            comprehensive brokerage services tailored to your business needs. Our team of expert 
            brokers specializes in office spaces, retail properties, warehouses, and mixed-use developments.
          </p>
          <p className="text-lg text-slate-600">
            We understand that purchasing commercial property is a significant investment. Our dedicated 
            professionals work tirelessly to ensure you find the perfect property that aligns with your 
            business objectives and financial goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Property Acquisition",
                description: "Expert assistance in identifying and acquiring the ideal commercial property for your business needs.",
                icon: "🏢"
              },
              {
                title: "Market Analysis",
                description: "In-depth market research and analysis to ensure you make informed investment decisions.",
                icon: "📊"
              },
              {
                title: "Investment Consulting",
                description: "Strategic advice on commercial property investments with maximum ROI potential.",
                icon: "💼"
              },
              {
                title: "Lease Negotiation",
                description: "Professional negotiation services to secure favorable lease terms and conditions.",
                icon: "📝"
              },
              {
                title: "Due Diligence",
                description: "Comprehensive property assessments including legal, financial, and structural evaluations.",
                icon: "🔍"
              },
              {
                title: "Portfolio Management",
                description: "Ongoing support to optimize and manage your commercial property portfolio.",
                icon: "📈"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 text-4xl">{service.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Banner Section 1 */}
        <div className="mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-12 text-white shadow-lg">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-4xl font-bold">Premium Office Spaces</h2>
              <p className="mb-6 text-lg text-white/90">
                Discover Grade-A office spaces in prime business districts. Modern amenities, 
                strategic locations, and flexible lease options.
              </p>
              <button className="rounded-lg bg-white px-8 py-3 font-semibold text-emerald-600 transition hover:bg-slate-100">
                Explore Offices
              </button>
            </div>
            <div className="relative h-64 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl">🏙️</div>
                  <p className="mt-4 text-sm text-white/80">Premium Business Locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Property Types Section */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">Commercial Property Types</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                type: "Office Buildings",
                description: "Corporate headquarters, business centers, and co-working spaces in strategic locations.",
                features: ["24/7 Security", "Parking Facilities", "High-Speed Internet", "Conference Rooms"]
              },
              {
                type: "Retail Spaces",
                description: "Shopping centers, malls, and standalone retail units with high foot traffic.",
                features: ["Prime Locations", "Display Windows", "Customer Parking", "Flexible Layouts"]
              },
              {
                type: "Industrial Warehouses",
                description: "Distribution centers, manufacturing facilities, and storage units.",
                features: ["Loading Docks", "High Ceilings", "Climate Control", "Security Systems"]
              },
              {
                type: "Mixed-Use Developments",
                description: "Integrated spaces combining commercial, residential, and retail elements.",
                features: ["Multi-Purpose", "Modern Design", "Community Spaces", "Sustainable Features"]
              }
            ].map((property, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="mb-3 text-2xl font-bold text-slate-900">{property.type}</h3>
                <p className="mb-4 text-slate-600">{property.description}</p>
                <div className="space-y-2">
                  {property.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-emerald-600">✓</span>
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banner Section 2 */}
        <div className="mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 p-12 text-white shadow-lg">
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold">Investment Opportunities</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
              Unlock lucrative commercial real estate investments with our expert guidance. 
              From high-yield retail spaces to prime office buildings, we have opportunities 
              that match your investment goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="rounded-lg bg-white px-8 py-3 font-semibold text-purple-600 transition hover:bg-slate-100">
                View Opportunities
              </button>
              <button className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">Our Buying Process</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: "01", title: "Consultation", description: "Initial meeting to understand your requirements and objectives" },
              { step: "02", title: "Property Search", description: "Curated selection of properties matching your criteria" },
              { step: "03", title: "Site Visits", description: "Guided tours of shortlisted properties with expert insights" },
              { step: "04", title: "Closing Deal", description: "Complete support through negotiation, documentation, and handover" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                  {process.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">{process.title}</h3>
                <p className="text-sm text-slate-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Banner Section 3 */}
        <div className="mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 p-12 text-white shadow-lg">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="relative h-64 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl">🏗️</div>
                  <p className="mt-4 text-sm text-white/80">Modern Industrial Spaces</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-4 text-4xl font-bold">Warehouse & Logistics</h2>
              <p className="mb-6 text-lg text-white/90">
                Strategic warehouse locations with excellent connectivity. Perfect for 
                distribution, manufacturing, and storage operations with state-of-the-art facilities.
              </p>
              <button className="rounded-lg bg-white px-8 py-3 font-semibold text-orange-600 transition hover:bg-slate-100">
                View Warehouses
              </button>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16 rounded-2xl bg-slate-50 p-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
            Why Businesses Trust Us
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-5xl font-bold text-blue-600">500+</div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">Successful Deals</h3>
              <p className="text-slate-600">Commercial transactions completed</p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-5xl font-bold text-blue-600">$2B+</div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">Transaction Value</h3>
              <p className="text-slate-600">Total property value facilitated</p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-5xl font-bold text-blue-600">98%</div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">Client Satisfaction</h3>
              <p className="text-slate-600">Happy clients and repeat business</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-900 to-slate-900 p-12 text-center text-white">
          <h2 className="mb-4 text-4xl font-bold">Ready to Find Your Perfect Property?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Let our expert brokers help you navigate the commercial real estate market. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-900 transition hover:bg-slate-100">
              Contact Us
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10">
              View Properties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
