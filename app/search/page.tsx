type SearchPageProps = {
  searchParams: {
    q?: string;
  };
};

const mockResults = [
  { id: 1, title: "3BR townhouse with pool", area: "Dubai Hills", price: "AED 240k / year" },
  { id: 2, title: "Sea-view apartment", area: "Dubai Marina", price: "AED 160k / year" },
  { id: 3, title: "Family villa", area: "Arabian Ranches", price: "AED 380k / year" },
  { id: 4, title: "Downtown skyline flat", area: "Downtown Dubai", price: "AED 220k / year" },
];

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = (searchParams.q || "").trim();
  const filtered = query
    ? mockResults.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.area.toLowerCase().includes(query.toLowerCase())
      )
    : mockResults;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-8">
          <p className="text-sm uppercase tracking-wide text-rose-600">Search results</p>
          <h1 className="mt-1 text-3xl font-semibold text-slate-900">
            {query ? `Results for "${query}"` : "Latest listings"}
          </h1>
          <p className="mt-2 text-slate-600">
            Showing {filtered.length} {filtered.length === 1 ? "home" : "homes"}
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
                  <p className="text-sm text-slate-600">{item.area}</p>
                </div>
                <span className="rounded-full bg-rose-50 px-3 py-1 text-sm font-semibold text-rose-600">
                  {item.price}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
