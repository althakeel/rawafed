export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="mb-6 text-center text-5xl font-bold text-white">About Us</h1>
          <p className="mx-auto max-w-3xl text-center text-xl text-white/90">
            Leading the way in real estate innovation and excellence since 2005
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Our Story */}
        <div className="mb-16">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">Our Story</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-lg text-slate-600">
                Founded in 2005, Rawafed has grown from a small real estate agency to one of 
                the region's most trusted property platforms. Our journey began with a simple 
                mission: to make property search and transactions easier, more transparent, 
                and more accessible for everyone.
              </p>
              <p className="mb-4 text-lg text-slate-600">
                Today, we serve thousands of clients across the UAE, helping them find their 
                dream homes, invest in commercial properties, and navigate the complex world 
                of real estate with confidence.
              </p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 p-8">
              <h3 className="mb-4 text-2xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-lg text-slate-700">
                To revolutionize the real estate experience by providing innovative solutions, 
                exceptional service, and unparalleled market expertise that empowers our clients 
                to make informed property decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Integrity",
                description: "We operate with complete transparency and honesty in all our dealings.",
                icon: "🤝"
              },
              {
                title: "Excellence",
                description: "We strive for the highest standards in everything we do.",
                icon: "⭐"
              },
              {
                title: "Innovation",
                description: "We continuously evolve to meet the changing needs of our clients.",
                icon: "💡"
              },
              {
                title: "Customer Focus",
                description: "Your satisfaction and success are at the heart of our business.",
                icon: "❤️"
              },
              {
                title: "Expertise",
                description: "Our team brings decades of combined real estate experience.",
                icon: "🎓"
              },
              {
                title: "Community",
                description: "We're committed to building stronger communities through real estate.",
                icon: "🏘️"
              }
            ].map((value, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 text-5xl">{value.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-white">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Impact</h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold">20+</div>
              <p className="text-lg text-white/90">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold">50K+</div>
              <p className="text-lg text-white/90">Properties Listed</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold">100K+</div>
              <p className="text-lg text-white/90">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold">500+</div>
              <p className="text-lg text-white/90">Expert Agents</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Leadership Team</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { name: "Ahmed Al Mansouri", role: "CEO & Founder", initial: "A" },
              { name: "Sarah Johnson", role: "Chief Operating Officer", initial: "S" },
              { name: "Mohammed Hassan", role: "Head of Commercial", initial: "M" }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-5xl font-bold text-white">
                  {member.initial}
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-slate-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-slate-50 p-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Join Our Journey</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600">
            Whether you're buying, selling, or investing, we're here to help you every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Contact Us
            </a>
            <a
              href="/careers"
              className="rounded-lg border-2 border-blue-600 px-8 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
