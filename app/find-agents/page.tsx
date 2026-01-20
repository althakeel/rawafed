export default function FindAgentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <h1 className="mb-4 text-5xl font-bold text-white">Find Real Estate Agents</h1>
            <p className="text-xl text-white/90">
              Connect with experienced agents to help you buy, sell, or rent properties
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Introduction */}
        <div className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Expert Real Estate Agents at Your Service
          </h2>
          <p className="mb-4 text-lg text-slate-600">
            Our network of certified real estate professionals is dedicated to helping you 
            achieve your property goals. Whether you're a first-time buyer, seasoned investor, 
            or looking to sell, our agents provide expert guidance every step of the way.
          </p>
          <p className="text-lg text-slate-600">
            Browse through our team of experienced agents, read reviews, and connect with the 
            right professional for your needs.
          </p>
        </div>

        {/* Search Filter */}
        <div className="mb-16 rounded-2xl bg-slate-50 p-8">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Find Your Agent</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Specialty</label>
              <select className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900">
                <option>All Specialties</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Investment</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Area</label>
              <select className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900">
                <option>All Areas</option>
                <option>Dubai</option>
                <option>Abu Dhabi</option>
                <option>Sharjah</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Languages</label>
              <select className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900">
                <option>All Languages</option>
                <option>English</option>
                <option>Arabic</option>
                <option>Multiple</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full rounded-lg bg-green-600 px-6 py-2 font-semibold text-white transition hover:bg-green-700">
                Search Agents
              </button>
            </div>
          </div>
        </div>

        {/* Featured Agents */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">Featured Agents</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Ahmed Al Mansouri",
                specialty: "Residential Sales",
                experience: "15+ years",
                properties: "500+",
                rating: "4.9",
                image: "A"
              },
              {
                name: "Fatima Al Zahra",
                specialty: "Commercial Real Estate",
                experience: "12+ years",
                properties: "450+",
                rating: "4.8",
                image: "F"
              },
              {
                name: "Mohammed Hassan",
                specialty: "Off-Plan Investments",
                experience: "10+ years",
                properties: "380+",
                rating: "4.9",
                image: "M"
              },
              {
                name: "Sarah Johnson",
                specialty: "Luxury Properties",
                experience: "14+ years",
                properties: "520+",
                rating: "5.0",
                image: "S"
              },
              {
                name: "Ali Khan",
                specialty: "Rental Management",
                experience: "11+ years",
                properties: "420+",
                rating: "4.8",
                image: "A"
              },
              {
                name: "Noor Al Mansouri",
                specialty: "New Developments",
                experience: "9+ years",
                properties: "350+",
                rating: "4.9",
                image: "N"
              }
            ].map((agent, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 px-6 py-8 text-center">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-4xl font-bold text-white mx-auto">
                    {agent.image}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-lg font-bold text-slate-900">{agent.name}</h3>
                  <p className="mb-3 text-sm text-green-600 font-semibold">{agent.specialty}</p>
                  <div className="mb-4 space-y-2 text-sm text-slate-600">
                    <p>Experience: {agent.experience}</p>
                    <p>Transactions: {agent.properties}</p>
                    <p className="flex items-center gap-1">
                      Rating: <span className="font-bold text-amber-500">{agent.rating}</span> ⭐
                    </p>
                  </div>
                  <button className="w-full rounded-lg bg-green-600 px-4 py-2 font-semibold text-white transition hover:bg-green-700">
                    Contact Agent
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banner */}
        <div className="mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 p-12 text-white shadow-lg">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-4xl font-bold">Become an Agent</h2>
              <p className="mb-6 text-lg text-white/90">
                Join our network of successful real estate professionals. Get access to premium 
                listings, marketing support, and industry-leading training.
              </p>
              <button className="rounded-lg bg-white px-8 py-3 font-semibold text-green-600 transition hover:bg-slate-100">
                Apply Now
              </button>
            </div>
            <div className="relative h-64 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl">🤝</div>
                  <p className="mt-4 text-sm text-white/80">Join Our Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Our Agents */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Why Choose Our Agents?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Expert Knowledge", description: "In-depth market insights and local expertise", icon: "🧠" },
              { title: "Customer Service", description: "Dedicated support from listing to closing", icon: "💼" },
              { title: "Transparency", description: "Clear communication and honest dealings", icon: "🤝" },
              { title: "Technology", description: "Latest tools for property search and marketing", icon: "💻" },
              { title: "Network", description: "Access to exclusive off-market properties", icon: "🌐" },
              { title: "Results", description: "Proven track record of successful deals", icon: "✅" }
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

        {/* CTA */}
        <div className="rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 p-12 text-center text-white">
          <h2 className="mb-4 text-4xl font-bold">Need Help? Let's Connect</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Our agents are ready to help you find the perfect property or achieve your real estate goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-lg bg-white px-8 py-3 font-semibold text-green-600 transition hover:bg-slate-100">
              Browse All Agents
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
