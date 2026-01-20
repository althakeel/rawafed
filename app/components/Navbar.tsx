"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo/Rawafed logo black.png";
import { LoginModal } from "./LoginModal";

const links = [
  { name: "Buy", href: "/buy" },
  { name: "Rent", href: "/rent" },
  { name: "New Projects", href: "/new-projects" },
  { name: "Tools & Insights", href: "/tools-insights" },
  { name: "Find Agents", href: "/find-agents" },
  { name: "Mortgages", href: "/mortgages" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src={Logo} alt="Rawafed logo" className="h-10 w-auto" priority />
        </Link>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 shadow-sm transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                menuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${
                menuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="transition hover:text-rose-600">
              <span className="inline-flex items-center gap-1">
                {link.name}
                {link.name === "Mortgages" && (
                  <svg aria-hidden viewBox="0 0 16 16" className="h-3 w-3 text-slate-500">
                    <path d="M5 5h6v6" stroke="currentColor" strokeWidth="1.4" fill="none" />
                    <path d="M11 5 5 11" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                )}
              </span>
            </Link>
          ))}
        </div>

        <button
          onClick={() => setLoginOpen(true)}
          className="hidden md:inline-flex items-center justify-center rounded-lg border border-indigo-200 px-5 py-2 text-sm font-semibold text-indigo-700 shadow-sm transition hover:border-indigo-300 hover:bg-indigo-50"
        >
          Log in
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden">
          <div className="mx-4 mb-4 space-y-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <span className="inline-flex items-center gap-1">
                  {link.name}
                  {link.name === "Mortgages" && (
                    <svg aria-hidden viewBox="0 0 16 16" className="h-3 w-3 text-slate-500">
                      <path d="M5 5h6v6" stroke="currentColor" strokeWidth="1.4" fill="none" />
                      <path d="M11 5 5 11" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  )}
                </span>
                <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5 text-slate-400">
                  <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth="1.4" fill="none" />
                </svg>
              </Link>
            ))}
            <button
              onClick={() => setLoginOpen(true)}
              className="mt-3 flex w-full items-center justify-center rounded-lg border border-indigo-200 px-3 py-2 text-sm font-semibold text-indigo-700 transition hover:border-indigo-300 hover:bg-indigo-50"
            >
              Log in
            </button>
          </div>
        </div>
      )}

      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </nav>
  );
}
