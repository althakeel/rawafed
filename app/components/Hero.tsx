"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Banner from "../assets/banners/B1.webp";

const tabItems = [
  "Rent",
  "Buy",
  "New projects",
  "Commercial",
];

export function Hero() {
  const [activeTab, setActiveTab] = useState(tabItems[0]);
  const placeholders = useMemo(
    () => [
      "Try villa with a pool",
      "Search Dubai Marina apartments",
      "Find a 3BR townhouse",
      "Look for sea-view homes",
    ],
    []
  );
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const id = setInterval(() => {
      setPlaceholderIndex((idx) => (idx + 1) % placeholders.length);
    }, 2600);
    return () => clearInterval(id);
  }, [placeholders.length]);

  const submitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = query.trim() || placeholders[placeholderIndex];
    router.push(`/search?q=${encodeURIComponent(value)}`);
  };

  return (
    <section className="relative isolate overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Banner.src})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/55" aria-hidden />

      <div className="relative mx-auto flex min-h-[520px] max-w-6xl flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Your home search starts here
          </h1>
          <p className="mt-4 text-lg font-medium text-white/85">
            Find properties to rent, buy or invest.
          </p>
        </div>

        <div className="mt-10 w-full max-w-5xl">
          <div className="rounded-3xl bg-black/25 p-3 shadow-2xl ring-1 ring-white/15 backdrop-blur">
            <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold text-white">
              <div className="flex items-center gap-3 overflow-x-auto py-1">
                {tabItems.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    aria-pressed={tab === activeTab}
                    className={`rounded-full px-4 py-2 transition ${
                      tab === activeTab ? "bg-white text-rose-600" : "text-white/85 hover:bg-white/10"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <form
              onSubmit={submitSearch}
              className="mt-3 flex flex-col gap-3 rounded-2xl bg-white p-3 text-slate-700 shadow-lg sm:flex-row sm:items-center sm:px-4 sm:py-3"
            >
              <div className="flex w-full items-center gap-3 rounded-2xl bg-slate-100 px-3 py-3 sm:px-4 sm:py-3">
                <svg aria-hidden viewBox="0 0 20 20" className="h-5 w-5 text-slate-400">
                  <path
                    fill="currentColor"
                    d="m14.78 13.72 2.75 2.75a1 1 0 0 1-1.42 1.42l-2.75-2.75a7 7 0 1 1 1.42-1.42ZM9 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
                  />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={placeholders[placeholderIndex]}
                  className="w-full bg-transparent text-base text-slate-800 placeholder:text-slate-400 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-rose-500 to-orange-400 px-6 py-3 text-base font-semibold text-white shadow-md transition hover:shadow-lg sm:w-auto"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
