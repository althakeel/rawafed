export default function ToolsInsightsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full bg-gradient-to-r from-slate-700 to-slate-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <h1 className="mb-4 text-5xl font-bold text-white">Tools & Insights</h1>
            <p className="text-xl text-white/90">
              Smart tools and data-driven insights to make informed property decisions
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Tools Section */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">Property Tools</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Mortgage Calculator",
                description: "Calculate your monthly mortgage payments and compare financing options",
                icon: "🧮",
                action: "Calculate Now"
              },
              {
                title: "ROI Calculator",
                description: "Estimate potential returns on your property investment",
                icon: "📊",
                action: "Check ROI"
              },
              {
                title: "Affordability Calculator",
                description: "Determine how much property you can afford based on your income",
                icon: "💵",
                action: "Find Out"
              },
              {
                title: "Rental Yield Calculator",
                description: "Calculate expected rental income and yield percentage",
                icon: "📈",
                action: "Calculate Yield"
              },
              {
                title: "Property Valuation",
                description: "Get instant market value estimates for any property",
                icon: "🏠",
                action: "Value Property"
              },
              {
                title: "Area Guide",
                description: "Explore neighborhoods with detailed area information and statistics",
                icon: "🗺️",
                action: "Explore Areas"
              }
            ].map((tool, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 text-5xl">{tool.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">{tool.title}</h3>
                <p className="mb-4 text-slate-600">{tool.description}</p>
                <button className="rounded-lg bg-slate-900 px-6 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                  {tool.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Banner 1 */}
        <div className="mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-12 text-white shadow-lg">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-4xl font-bold">Market Reports</h2>
              <p className="mb-6 text-lg text-white/90">
                Access comprehensive quarterly market reports with pricing trends, supply-demand 
                analysis, and future projections for all major areas in Dubai.
              </p>
              <button className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-slate-100">
                Download Reports
              </button>
            </div>
            <div className="relative h-64 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl">📑</div>
                  <p className="mt-4 text-sm text-white/80">Latest Q4 2025 Report</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Insights */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">Market Insights</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Price Trends",
                metric: "+12.5%",
                description: "Average property price growth in 2025",
                trend: "up"
              },
              {
                title: "Rental Yields",
                metric: "6.8%",
                description: "Average rental yield across Dubai",
                trend: "stable"
              },
              {
                title: "Transaction Volume",
                metric: "95,000+",
                description: "Property transactions in 2025",
                trend: "up"
              },
              {
                title: "Off-Plan Sales",
                metric: "45%",
                description: "Share of total market transactions",
                trend: "up"
              }
            ].map((insight, index) => (
              <div
                key={index}
                className="rounded-lg border-2 border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="mb-3 text-lg font-semibold text-slate-900">{insight.title}</h3>
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-4xl font-bold text-slate-900">{insight.metric}</span>
                  {insight.trend === "up" && <span className="text-2xl text-green-600">📈</span>}
                  {insight.trend === "stable" && <span className="text-2xl">➡️</span>}
                </div>
                <p className="text-slate-600">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Banner 2 */}
        <div className="mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-12 text-white shadow-lg">
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold">Investment Webinars</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
              Join our monthly webinars featuring industry experts, market analysts, and 
              successful investors sharing insights and strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="rounded-lg bg-white px-8 py-3 font-semibold text-emerald-600 transition hover:bg-slate-100">
                Register Now
              </button>
              <button className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10">
                View Past Webinars
              </button>
            </div>
          </div>
        </div>

        {/* Guides & Resources */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">Guides & Resources</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "First-Time Buyer Guide",
                description: "Complete guide for first-time property buyers in UAE",
                category: "Buying",
                icon: "📚"
              },
              {
                title: "Investment Strategies",
                description: "Proven strategies for maximizing property investment returns",
                category: "Investing",
                icon: "💡"
              },
              {
                title: "Rental Laws & Regulations",
                description: "Understanding tenant and landlord rights in Dubai",
                category: "Renting",
                icon: "⚖️"
              },
              {
                title: "Property Financing Options",
                description: "Compare mortgages and financing solutions",
                category: "Finance",
                icon: "🏦"
              },
              {
                title: "Moving to Dubai",
                description: "Everything you need to know about relocating to Dubai",
                category: "Lifestyle",
                icon: "✈️"
              },
              {
                title: "Property Management Tips",
                description: "Best practices for managing rental properties",
                category: "Management",
                icon: "🔧"
              }
            ].map((guide, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-white p-6 transition hover:border-slate-400"
              >
                <div className="mb-3 text-4xl">{guide.icon}</div>
                <span className="mb-2 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  {guide.category}
                </span>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{guide.title}</h3>
                <p className="mb-4 text-sm text-slate-600">{guide.description}</p>
                <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Market Comparison */}
        <div className="mb-16 rounded-2xl bg-slate-50 p-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
            Popular Area Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="pb-4 text-left text-slate-900">Area</th>
                  <th className="pb-4 text-right text-slate-900">Avg. Price/sqft</th>
                  <th className="pb-4 text-right text-slate-900">Rental Yield</th>
                  <th className="pb-4 text-right text-slate-900">Growth (YoY)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { area: "Dubai Marina", price: "AED 1,850", yield: "7.2%", growth: "+14%" },
                  { area: "Downtown Dubai", price: "AED 2,100", yield: "6.5%", growth: "+11%" },
                  { area: "Palm Jumeirah", price: "AED 2,400", yield: "5.8%", growth: "+16%" },
                  { area: "JBR", price: "AED 1,950", yield: "7.5%", growth: "+13%" },
                  { area: "Business Bay", price: "AED 1,650", yield: "8.1%", growth: "+12%" }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-slate-200">
                    <td className="py-4 font-semibold text-slate-900">{row.area}</td>
                    <td className="py-4 text-right text-slate-700">{row.price}</td>
                    <td className="py-4 text-right text-slate-700">{row.yield}</td>
                    <td className="py-4 text-right font-semibold text-green-600">{row.growth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-700 to-slate-900 p-12 text-center text-white">
          <h2 className="mb-4 text-4xl font-bold">Need Expert Advice?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Our team of real estate experts is here to help you make the right decision. 
            Book a free consultation today.
          </p>
          <button className="rounded-lg bg-white px-8 py-3 font-semibold text-slate-900 transition hover:bg-slate-100">
            Book Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
