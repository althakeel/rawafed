export default function RentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full bg-gradient-to-r from-rose-600 to-orange-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <h1 className="mb-4 text-5xl font-bold text-white">Premium Rental Properties</h1>
            <p className="text-xl text-white/90">
              Find your perfect rental home with flexible lease options
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Introduction */}
        <div className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Discover Your Next Rental Home
          </h2>
          <p className="mb-4 text-lg text-slate-600">
            Whether you're looking for a cozy apartment, a spacious villa, or a luxury penthouse, 
            we have thousands of rental properties across the UAE. Our comprehensive listings 
            include detailed information, high-quality images, and virtual tours to help you 
            make the right choice.
          </p>
          <p className="text-lg text-slate-600">
            We simplify the rental process with transparent pricing, verified landlords, and 
            dedicated support throughout your search and tenancy.
          </p>
        </div>

        {/* Property Types */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">Popular Rental Categories</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Apartments",
                description: "Studio to 3-bedroom apartments in prime locations",
                icon: "🏢",
                priceRange: "AED 30,000 - 150,000/year"
              },
              {
                title: "Villas",
                description: "Spacious family villas with gardens and pools",
                icon: "🏠",
                priceRange: "AED 80,000 - 500,000/year"
              },
              {
                title: "Penthouses",
                description: "Luxury penthouses with stunning city views",
                icon: "🌆",
                priceRange: "AED 200,000 - 1M+/year"
              },
              {
                title: "Townhouses",
                description: "Modern townhouses in gated communities",
                icon: "🏘️",
                priceRange: "AED 60,000 - 250,000/year"
              },
              {
                title: "Studios",
                description: "Compact and affordable studio apartments",
                icon: "🛏️",
                priceRange: "AED 25,000 - 80,000/year"
              },
              {
                title: "Shared Rooms",
                description: "Budget-friendly shared accommodation options",
                icon: "👥",
                priceRange: "AED 12,000 - 40,000/year"
              }
            ].map((type, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 text-5xl">{type.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">{type.title}</h3>
                <p className="mb-3 text-slate-600">{type.description}</p>
                <p className="text-sm font-semibold text-rose-600">{type.priceRange}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Banner 1 */}
        <div className="mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-teal-600 to-cyan-600 p-12 text-white shadow-lg">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-4xl font-bold">Furnished Apartments</h2>
              <p className="mb-6 text-lg text-white/90">
                Move in ready! Browse our collection of fully furnished apartments with 
                modern amenities, utilities, and flexible lease terms.
              </p>
              <button className="rounded-lg bg-white px-8 py-3 font-semibold text-teal-600 transition hover:bg-slate-100">
                View Furnished
              </button>
            </div>
            <div className="relative h-64 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl">🛋️</div>
                  <p className="mt-4 text-sm text-white/80">Ready to Move In</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">Why Rent With Us?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "No Commission", description: "Direct listings from landlords with zero commission fees", icon: "💰" },
              { title: "Virtual Tours", description: "360° virtual tours and video walkthroughs", icon: "📱" },
              { title: "Verified Listings", description: "All properties verified and inspected", icon: "✅" },
              { title: "Flexible Terms", description: "Monthly, quarterly, or annual payment options", icon: "📅" },
              { title: "Quick Process", description: "Fast approval and move-in within 24 hours", icon: "⚡" },
              { title: "24/7 Support", description: "Dedicated support team always available", icon: "🤝" }
            ].map((feature, index) => (
              <div key={index} className="rounded-lg bg-slate-50 p-6">
                <div className="mb-3 text-4xl">{feature.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Banner 2 */}
        <div className="mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 p-12 text-white shadow-lg">
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold">Short-Term Rentals</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
              Flexible stays from 1 month to 1 year. Perfect for business travelers, 
              expats on assignment, or anyone looking for temporary accommodation.
            </p>
            <button className="rounded-lg bg-white px-8 py-3 font-semibold text-amber-600 transition hover:bg-slate-100">
              Explore Options
            </button>
          </div>
        </div>

        {/* Popular Locations */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">Popular Rental Areas</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {["Dubai Marina", "Downtown Dubai", "Jumeirah", "Business Bay", "Palm Jumeirah", "JBR", "Arabian Ranches", "Dubai Sports City"].map((location) => (
              <div
                key={location}
                className="rounded-lg border border-slate-200 bg-white p-4 text-center font-semibold text-slate-900 transition hover:bg-rose-50 hover:border-rose-300"
              >
                📍 {location}
              </div>
            ))}
          </div>
        </div>

        {/* Rental Process */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Simple Rental Process</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: "01", title: "Search", description: "Browse thousands of verified rental properties" },
              { step: "02", title: "Visit", description: "Schedule viewings or take virtual tours" },
              { step: "03", title: "Apply", description: "Submit your documents and get approved" },
              { step: "04", title: "Move In", description: "Sign the lease and receive your keys" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-600 text-2xl font-bold text-white">
                  {process.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">{process.title}</h3>
                <p className="text-sm text-slate-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-gradient-to-r from-rose-600 to-orange-600 p-12 text-center text-white">
          <h2 className="mb-4 text-4xl font-bold">Start Your Rental Search Today</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Browse thousands of rental properties and find your perfect home with our easy-to-use platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-lg bg-white px-8 py-3 font-semibold text-rose-600 transition hover:bg-slate-100">
              View All Properties
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
