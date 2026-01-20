"use client";

import { useState } from "react";

type SearchPageProps = {
  searchParams: {
    q?: string;
    emirate?: string;
  };
};

const allResults = [
  { id: 1, title: "3BR townhouse with pool", area: "Dubai Hills", price: "AED 240k / year", emirate: "Dubai", type: "Townhouse", beds: 3 },
  { id: 2, title: "Sea-view apartment", area: "Dubai Marina", price: "AED 160k / year", emirate: "Dubai", type: "Apartment", beds: 2 },
  { id: 3, title: "Family villa", area: "Arabian Ranches", price: "AED 380k / year", emirate: "Dubai", type: "Villa", beds: 4 },
  { id: 4, title: "Downtown skyline flat", area: "Downtown Dubai", price: "AED 220k / year", emirate: "Dubai", type: "Apartment", beds: 2 },
  { id: 5, title: "Modern apartment in Corniche", area: "Abu Dhabi Corniche", price: "AED 185k / year", emirate: "Abu Dhabi", type: "Apartment", beds: 2 },
  { id: 6, title: "Luxury villa on island", area: "Yas Island", price: "AED 420k / year", emirate: "Abu Dhabi", type: "Villa", beds: 5 },
  { id: 7, title: "Budget-friendly flat", area: "Al Nahda", price: "AED 85k / year", emirate: "Sharjah", type: "Apartment", beds: 1 },
  { id: 8, title: "Spacious family home", area: "Al Safa", price: "AED 145k / year", emirate: "Sharjah", type: "Townhouse", beds: 3 },
  { id: 9, title: "Coastal apartment", area: "Ajman Beach", price: "AED 95k / year", emirate: "Ajman", type: "Apartment", beds: 2 },
  { id: 10, title: "Peaceful villa", area: "Umm Al Quwain", price: "AED 110k / year", emirate: "Umm Al Quwain", type: "Villa", beds: 3 },
];

const propertyTypes = ["All", "Apartment", "Villa", "Townhouse"];
const emirates = ["All", "Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Umm Al Quwain", "Ras Al Khaimah", "Fujairah"];
const bedroomOptions = ["All", "1", "2", "3", "4", "5+"];

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = (searchParams.q || "").trim();
  const emirateParam = (searchParams.emirate || "").trim();
  
  const [selectedType, setSelectedType] = useState("All");
  const [selectedEmirate, setSelectedEmirate] = useState(emirateParam ? emirateParam.charAt(0).toUpperCase() + emirateParam.slice(1) : "All");
  const [selectedBedrooms, setSelectedBedrooms] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  let filtered = allResults;

  // Filter by search query
  if (query) {
    filtered = filtered.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.area.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Filter by emirate
  if (selectedEmirate !== "All") {
    filtered = filtered.filter((item) => item.emirate === selectedEmirate);
  }

  // Filter by property type
  if (selectedType !== "All") {
    filtered = filtered.filter((item) => item.type === selectedType);
  }

  // Filter by bedrooms
  if (selectedBedrooms !== "All") {
    const beds = parseInt(selectedBedrooms);
    filtered = filtered.filter((item) => {
      if (selectedBedrooms === "5+") return item.beds >= 5;
      return item.beds === beds;
    });
  }

  // Sort results
  if (sortBy === "price-low") {
    filtered.sort((a, b) => parseInt(a.price) - parseInt(b.price));
  } else if (sortBy === "price-high") {
    filtered.sort((a, b) => parseInt(b.price) - parseInt(a.price));
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm uppercase tracking-wide text-blue-600 font-semibold">Search results</p>
          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            {query ? `Results for "${query}"` : selectedEmirate !== "All" ? `Properties in ${selectedEmirate}` : "Find your perfect home"}
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            {filtered.length} {filtered.length === 1 ? "property" : "properties"} found
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6 rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">Filters</h3>
              </div>

              {/* Property Type Filter */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Property Type</label>
                <div className="space-y-2">
                  {propertyTypes.map((type) => (
                    <label key={type} className="flex items-center cursor-pointer hover:bg-slate-50 p-2 rounded">
                      <input
                        type="radio"
                        name="type"
                        value={type}
                        checked={selectedType === type}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="ml-3 text-sm text-slate-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Emirates Filter */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Emirates</label>
                <select
                  value={selectedEmirate}
                  onChange={(e) => setSelectedEmirate(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {emirates.map((emirate) => (
                    <option key={emirate} value={emirate}>
                      {emirate}
                    </option>
                  ))}
                </select>
              </div>

              {/* Bedrooms Filter */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Bedrooms</label>
                <div className="space-y-2">
                  {bedroomOptions.map((option) => (
                    <label key={option} className="flex items-center cursor-pointer hover:bg-slate-50 p-2 rounded">
                      <input
                        type="radio"
                        name="bedrooms"
                        value={option}
                        checked={selectedBedrooms === option}
                        onChange={(e) => setSelectedBedrooms(e.target.value)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="ml-3 text-sm text-slate-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              {/* Clear Filters Button */}
              <button
                onClick={() => {
                  setSelectedType("All");
                  setSelectedEmirate("All");
                  setSelectedBedrooms("All");
                  setSortBy("popular");
                }}
                className="w-full py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-lg transition"
              >
                Clear Filters
              </button>
            </div>
          </aside>

          {/* Results Grid */}
          <main className="lg:col-span-3">
            {filtered.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {filtered.map((item) => (
                  <article
                    key={item.id}
                    className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition hover:shadow-lg hover:-translate-y-1"
                  >
                    {/* Image Placeholder */}
                    <div className="relative h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center overflow-hidden">
                      <div className="text-white text-center">
                        <div className="text-5xl font-bold opacity-20">{item.id}</div>
                        <div className="text-sm mt-2 opacity-75">Property Image</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                            {item.title}
                          </h2>
                          <p className="text-sm text-slate-600 mt-1">{item.area}</p>
                        </div>
                        <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600 whitespace-nowrap">
                          {item.emirate}
                        </span>
                      </div>

                      {/* Property Details */}
                      <div className="flex gap-4 py-4 border-t border-b border-slate-200">
                        <div className="text-center flex-1">
                          <p className="text-lg font-bold text-slate-900">{item.beds}</p>
                          <p className="text-xs text-slate-600">Bedrooms</p>
                        </div>
                        <div className="border-l border-slate-200"></div>
                        <div className="text-center flex-1">
                          <p className="text-lg font-bold text-slate-900">{item.type}</p>
                          <p className="text-xs text-slate-600">Type</p>
                        </div>
                        <div className="border-l border-slate-200"></div>
                        <div className="text-center flex-1">
                          <p className="text-lg font-bold text-blue-600">{item.price}</p>
                          <p className="text-xs text-slate-600">Annual</p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button className="w-full mt-4 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
                        View Details
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">No properties found</h3>
                <p className="text-slate-600 mb-6">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={() => {
                    setSelectedType("All");
                    setSelectedEmirate("All");
                    setSelectedBedrooms("All");
                  }}
                  className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
