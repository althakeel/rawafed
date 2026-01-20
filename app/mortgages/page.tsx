export default function MortgagesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full bg-gradient-to-r from-yellow-600 to-amber-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <h1 className="mb-4 text-5xl font-bold text-white">Mortgage Solutions</h1>
            <p className="text-xl text-white/90">
              Flexible financing options to make homeownership affordable
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Introduction */}
        <div className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Get the Right Mortgage for Your Home
          </h2>
          <p className="mb-4 text-lg text-slate-600">
            We partner with leading banks and financial institutions to offer competitive 
            mortgage rates and flexible terms. Whether you're a UAE resident or foreign buyer, 
            we'll help you find the right financing solution.
          </p>
          <p className="text-lg text-slate-600">
            Compare rates from multiple banks, get pre-approved, and start your home buying 
            journey with confidence.
          </p>
        </div>

        {/* Mortgage Types */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">Types of Mortgages</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Fixed Rate Mortgage",
                description: "Fixed interest rate throughout the loan term",
                icon: "📊",
                rate: "From 3.25%",
                term: "5-25 years"
              },
              {
                title: "Floating Rate Mortgage",
                description: "Interest rate varies based on market conditions",
                icon: "📈",
                rate: "From 2.99%",
                term: "5-25 years"
              },
              {
                title: "Hybrid Mortgage",
                description: "Fixed rate for initial period, then floating",
                icon: "🔄",
                rate: "From 3.15%",
                term: "5-25 years"
              }
            ].map((type, index) => (
              <div
                key={index}
                className="rounded-lg border-2 border-yellow-200 bg-yellow-50 p-6"
              >
                <div className="mb-4 text-5xl">{type.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">{type.title}</h3>
                <p className="mb-4 text-slate-600">{type.description}</p>
                <div className="space-y-2 text-sm font-semibold text-slate-700">
                  <p>Interest Rate: {type.rate}</p>
                  <p>Loan Term: {type.term}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mortgage Calculator */}
        <div className="mb-16 rounded-2xl bg-slate-50 p-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Mortgage Calculator</h2>
          <div className="mx-auto max-w-2xl">
            <div className="space-y-6 rounded-lg border border-slate-200 bg-white p-8">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Property Price (AED)
                </label>
                <input
                  type="number"
                  placeholder="Enter property price"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Down Payment (%)
                </label>
                <input
                  type="number"
                  placeholder="Enter down payment percentage"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  placeholder="Enter interest rate"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Loan Term (Years)
                </label>
                <input
                  type="number"
                  placeholder="Enter loan term"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900"
                />
              </div>
              <button className="w-full rounded-lg bg-yellow-600 px-6 py-3 font-semibold text-white transition hover:bg-yellow-700">
                Calculate Monthly Payment
              </button>
            </div>
          </div>
        </div>

        {/* Partner Banks */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Partner Banks</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {["Emirates NBD", "FAB", "DIB", "RAK Bank", "Mashreq", "Ahli Bank", "AD Islamic", "ENBD Home"].map((bank, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 flex h-16 items-center justify-center text-2xl font-bold text-yellow-600">
                  {bank[0]}
                </div>
                <h3 className="font-semibold text-slate-900">{bank}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Banner */}
        <div className="mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-orange-600 to-yellow-600 p-12 text-white shadow-lg">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="relative h-64 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl">💰</div>
                  <p className="mt-4 text-sm text-white/80">Competitive Rates</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-4 text-4xl font-bold">Get Pre-Approved Today</h2>
              <p className="mb-6 text-lg text-white/90">
                Get a pre-approval letter in just 24 hours. Know your buying power and 
                move forward confidently.
              </p>
              <button className="rounded-lg bg-white px-8 py-3 font-semibold text-orange-600 transition hover:bg-slate-100">
                Apply for Pre-Approval
              </button>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Mortgage Benefits</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Competitive Rates", description: "Get the best rates from our partner banks", icon: "📉" },
              { title: "Fast Processing", description: "Quick approval in 24-48 hours", icon: "⚡" },
              { title: "Flexible Terms", description: "Choose loan terms from 5 to 25 years", icon: "📅" },
              { title: "Low Down Payment", description: "Down payment as low as 10%", icon: "💳" },
              { title: "Expert Guidance", description: "Free consultation from mortgage specialists", icon: "👨‍💼" },
              { title: "Easy Documentation", description: "Hassle-free documentation process", icon: "📄" }
            ].map((benefit, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center"
              >
                <div className="mb-4 text-5xl">{benefit.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility */}
        <div className="mb-16 rounded-2xl bg-yellow-50 p-12 border border-yellow-200">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Eligibility Requirements</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: "UAE Nationals", items: ["Minimum age: 21 years", "Employment contract", "Valid Emirates ID", "Good credit history"] },
              { title: "Expatriates", items: ["Valid visa and passport", "Employment contract", "Bank statements", "Proof of income (2+ years)"] },
              { title: "Self-Employed", items: ["Business registration", "3 years financial statements", "Tax returns", "Business bank account"] },
              { title: "Foreign Nationals", items: ["Valid passport", "Job letter", "Bank statements", "Valid UAE residency"] }
            ].map((category, index) => (
              <div key={index}>
                <h3 className="mb-4 text-xl font-bold text-slate-900">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700">
                      <span className="text-yellow-600">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-gradient-to-r from-yellow-600 to-amber-600 p-12 text-center text-white">
          <h2 className="mb-4 text-4xl font-bold">Ready to Own Your Dream Home?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Let our mortgage specialists help you find the perfect financing solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-lg bg-white px-8 py-3 font-semibold text-yellow-600 transition hover:bg-slate-100">
              Apply Now
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10">
              Compare Rates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
