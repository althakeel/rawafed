export default function NewProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <h1 className="mb-4 text-5xl font-bold text-white">New Development Projects</h1>
            <p className="text-xl text-white/90">
              Invest in Dubai's latest residential and commercial developments
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Introduction */}
        <div className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Off-Plan Properties & New Developments
          </h2>
          <p className="mb-4 text-lg text-slate-600">
            Discover exclusive off-plan properties and new development projects across Dubai. 
            Benefit from attractive payment plans, pre-launch prices, and guaranteed returns 
            on your investment. Our portfolio includes luxury residences, waterfront developments, 
            and mixed-use communities.
          </p>
          <p className="text-lg text-slate-600">
            Get early access to the most sought-after projects from leading developers with 
            flexible payment schedules and investment opportunities.
          </p>
        </div>

        {/* Featured Developers */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">Leading Developers</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {["Emaar", "Damac", "Nakheel", "Dubai Properties", "Meraas", "Azizi", "Sobha Realty", "Deyaar"].map((developer, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
              >
                <div className="mb-3 flex h-20 items-center justify-center text-4xl font-bold text-indigo-600">
                  {developer[0]}
                </div>
                <h3 className="font-semibold text-slate-900">{developer}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Project Types */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">Project Categories</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Luxury Residences",
                description: "High-end apartments and penthouses with premium amenities",
                icon: "✨",
                features: ["Smart Home Tech", "Concierge Service", "Private Pools", "Gym & Spa"]
              },
              {
                title: "Waterfront Living",
                description: "Beachfront and marina developments with stunning views",
                icon: "🌊",
                features: ["Beach Access", "Marina Berths", "Water Sports", "Seafront Dining"]
              },
              {
                title: "Mixed-Use Developments",
                description: "Integrated communities with retail, dining, and entertainment",
                icon: "🏙️",
                features: ["Retail Spaces", "F&B Outlets", "Recreation Areas", "Community Centers"]
              }
            ].map((type, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 text-5xl">{type.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">{type.title}</h3>
                <p className="mb-4 text-slate-600">{type.description}</p>
                <div className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="text-indigo-600">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banner 1 */}
        <div className="mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 p-12 text-white shadow-lg">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="relative h-64 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl">🏗️</div>
                  <p className="mt-4 text-sm text-white/80">Under Construction</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-4 text-4xl font-bold">Pre-Launch Opportunities</h2>
              <p className="mb-6 text-lg text-white/90">
                Get exclusive access to pre-launch projects with special pricing and 
                payment plans. Limited units available at developer prices.
              </p>
              <button className="rounded-lg bg-white px-8 py-3 font-semibold text-violet-600 transition hover:bg-slate-100">
                Register Interest
              </button>
            </div>
          </div>
        </div>

        {/* Payment Plans */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">Flexible Payment Options</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                plan: "Post-Handover",
                down: "10% Down Payment",
                during: "40% During Construction",
                after: "50% After Handover",
                icon: "📅"
              },
              {
                plan: "80/20 Plan",
                down: "20% Down Payment",
                during: "60% During Construction",
                after: "20% On Completion",
                icon: "💰"
              },
              {
                plan: "Developer Financing",
                down: "25% Down Payment",
                during: "50% During Construction",
                after: "25% Over 3 Years",
                icon: "🏦"
              }
            ].map((plan, index) => (
              <div
                key={index}
                className="rounded-lg border-2 border-indigo-200 bg-indigo-50 p-6"
              >
                <div className="mb-4 text-4xl">{plan.icon}</div>
                <h3 className="mb-4 text-xl font-bold text-slate-900">{plan.plan}</h3>
                <div className="space-y-2 text-slate-700">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-indigo-600">→</span>
                    {plan.down}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-indigo-600">→</span>
                    {plan.during}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold text-indigo-600">→</span>
                    {plan.after}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banner 2 */}
        <div className="mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 p-12 text-white shadow-lg">
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold">Investment Benefits</h2>
            <div className="mx-auto mb-8 grid max-w-4xl gap-6 md:grid-cols-3">
              <div>
                <div className="mb-2 text-5xl font-bold">8-12%</div>
                <p className="text-lg text-white/90">Expected ROI</p>
              </div>
              <div>
                <div className="mb-2 text-5xl font-bold">0%</div>
                <p className="text-lg text-white/90">Property Tax</p>
              </div>
              <div>
                <div className="mb-2 text-5xl font-bold">100%</div>
                <p className="text-lg text-white/90">Foreign Ownership</p>
              </div>
            </div>
            <button className="rounded-lg bg-white px-8 py-3 font-semibold text-cyan-600 transition hover:bg-slate-100">
              Explore Projects
            </button>
          </div>
        </div>

        {/* Popular Areas */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">Trending Development Areas</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { area: "Dubai Creek Harbour", projects: "15+ Projects", icon: "🌉" },
              { area: "Dubai South", projects: "20+ Projects", icon: "✈️" },
              { area: "Mohammed Bin Rashid City", projects: "25+ Projects", icon: "🏞️" },
              { area: "Bluewaters Island", projects: "8+ Projects", icon: "🎡" },
              { area: "Dubai Marina Extension", projects: "12+ Projects", icon: "⛵" },
              { area: "Al Furjan", projects: "18+ Projects", icon: "🏘️" }
            ].map((area, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-white p-6 transition hover:border-indigo-300 hover:bg-indigo-50"
              >
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{area.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{area.area}</h3>
                    <p className="text-indigo-600">{area.projects}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Invest */}
        <div className="mb-16 rounded-2xl bg-slate-50 p-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
            Why Invest in Off-Plan?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-3 text-5xl">💎</div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Lower Prices</h3>
              <p className="text-slate-600">Up to 30% cheaper than ready properties</p>
            </div>
            <div className="text-center">
              <div className="mb-3 text-5xl">📈</div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Capital Appreciation</h3>
              <p className="text-slate-600">Value increases during construction phase</p>
            </div>
            <div className="text-center">
              <div className="mb-3 text-5xl">🎁</div>
              <h3 className="mb-2 text-xl font-bold text-slate-900">Developer Incentives</h3>
              <p className="text-slate-600">Special offers and waived fees</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 p-12 text-center text-white">
          <h2 className="mb-4 text-4xl font-bold">Ready to Invest?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Schedule a consultation with our investment specialists to explore the best 
            off-plan opportunities tailored to your budget and goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-lg bg-white px-8 py-3 font-semibold text-indigo-600 transition hover:bg-slate-100">
              Book Consultation
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10">
              Download Brochures
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
