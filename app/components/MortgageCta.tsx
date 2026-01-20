export function MortgageCta() {
  return (
    <section className="bg-gradient-to-br from-white via-slate-50 to-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div className="flex-1 space-y-5 text-slate-900">
          <p className="text-sm font-semibold uppercase tracking-wide text-rose-600">Mortgage Finder</p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Get your mortgage pre-approved in minutes.
          </h2>
          <p className="text-lg text-slate-600">
            Get the best mortgage offers from our 20+ bank partners and move closer to homeownership now with our expert advice.
          </p>
          <div className="flex items-center gap-2 text-sm font-semibold text-rose-600">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600">%</span>
            <div>
              <div className="font-semibold text-slate-900">Mortgage Finder</div>
              <div className="text-xs text-slate-500">by Rawafed</div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <form className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:p-6">
            <label className="block text-sm font-medium text-slate-700">
              Enter your name
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-200"
                placeholder="Enter your name"
              />
            </label>

            <label className="block text-sm font-medium text-slate-700">
              Enter your phone number
              <div className="mt-1 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-3 focus-within:border-rose-500 focus-within:ring-2 focus-within:ring-rose-200">
                <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-sm font-semibold text-slate-700">
                  <span className="text-base">🇦🇪</span>
                  <span>+971</span>
                </div>
                <input
                  type="tel"
                  className="w-full bg-transparent text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                  placeholder="5x xxx xxxx"
                />
              </div>
            </label>

            <button
              type="button"
              className="w-full rounded-xl bg-rose-500 px-4 py-3 text-base font-semibold text-white shadow-md transition hover:bg-rose-600"
            >
              Get pre-approved
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
