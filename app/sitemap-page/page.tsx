import Link from "next/link";

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Sitemap</h1>
          <p className="text-lg text-slate-600">
            Navigate through all pages and sections of Rawafed Real Estate
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Main Pages */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-blue-600 pb-2">Main Pages</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  Search Properties
                </Link>
              </li>
              <li>
                <Link href="/buy" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  Buy Property
                </Link>
              </li>
              <li>
                <Link href="/rent" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  Rent Property
                </Link>
              </li>
              <li>
                <Link href="/new-projects" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  New Projects
                </Link>
              </li>
            </ul>
          </section>

          {/* Services */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-green-600 pb-2">Services</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/tools-insights" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  Tools & Insights
                </Link>
              </li>
              <li>
                <Link href="/find-agents" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  Find Agents
                </Link>
              </li>
              <li>
                <Link href="/mortgages" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  Mortgages
                </Link>
              </li>
            </ul>
          </section>

          {/* Search by Emirates */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-purple-600 pb-2">Search by Emirate</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/search?emirate=dubai" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  Dubai Properties
                </Link>
              </li>
              <li>
                <Link href="/search?emirate=abu dhabi" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  Abu Dhabi Properties
                </Link>
              </li>
              <li>
                <Link href="/search?emirate=sharjah" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  Sharjah Properties
                </Link>
              </li>
              <li>
                <Link href="/search?emirate=ajman" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  Ajman Properties
                </Link>
              </li>
              <li>
                <Link href="/search?emirate=umm al quwain" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  Umm Al Quwain Properties
                </Link>
              </li>
              <li>
                <Link href="/search?emirate=ras al khaimah" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  Ras Al Khaimah Properties
                </Link>
              </li>
              <li>
                <Link href="/search?emirate=fujairah" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  Fujairah Properties
                </Link>
              </li>
            </ul>
          </section>

          {/* Company */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-orange-600 pb-2">Company</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  Careers
                </Link>
              </li>
            </ul>
          </section>

          {/* Legal */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-red-600 pb-2">Legal</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link href="/sitemap-page" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  Sitemap
                </Link>
              </li>
            </ul>
          </section>

          {/* Resources */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 border-b-2 border-indigo-600 pb-2">Resources</h2>
            <ul className="space-y-3">
              <li>
                <span className="text-slate-400">Property Guides (Coming Soon)</span>
              </li>
              <li>
                <span className="text-slate-400">Market Reports (Coming Soon)</span>
              </li>
              <li>
                <span className="text-slate-400">Investment Tips (Coming Soon)</span>
              </li>
              <li>
                <span className="text-slate-400">Mortgage Calculator (Coming Soon)</span>
              </li>
              <li>
                <span className="text-slate-400">Area Guides (Coming Soon)</span>
              </li>
            </ul>
          </section>
        </div>

        {/* Additional Info */}
        <div className="mt-16 border-t border-slate-200 pt-8">
          <div className="bg-slate-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Need Help Finding Something?</h3>
            <p className="text-slate-600 mb-6">
              Can't find what you're looking for? Our team is here to help you navigate our website and find the perfect property.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Contact Support
              </Link>
              <Link 
                href="/search" 
                className="inline-block px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition"
              >
                Search Properties
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
