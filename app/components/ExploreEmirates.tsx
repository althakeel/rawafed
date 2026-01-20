"use client";

import Image from "next/image";
import Link from "next/link";
import Dubai from '../assets/places/dubai.webp';
import Sharjah from '../assets/places/sharjah.webp';
import AbuDhabi from '../assets/places/abudhabi.webp';
import Ajman from '../assets/places/ajman.webp';
import UmmAlQuwain from '../assets/places/umalquwain.webp';
import RasAlKhaimah from '../assets/places/rasalkhaima.webp';
import Fujairah from '../assets/places/alain.webp';

const emirates = [
  {
    name: "Dubai",
    description: "The city of gold - Modern luxury, iconic landmarks, and world-class shopping",
    properties: "15,000+",
    image: Dubai,
    highlights: ["Burj Khalifa", "Palm Jumeirah", "Downtown Dubai"]
  },
  {
    name: "Abu Dhabi",
    description: "The capital - Rich culture, stunning architecture, and premium developments",
    properties: "8,500+",
    image: AbuDhabi,
    highlights: ["Sheikh Zayed Mosque", "Yas Island", "Saadiyat Island"]
  },
  {
    name: "Sharjah",
    description: "The cultural hub - Affordable living with rich heritage and modern amenities",
    properties: "6,200+",
    image: Sharjah,
    highlights: ["Al Noor Mosque", "Heritage Area", "Waterfront"]
  },
  {
    name: "Ajman",
    description: "Compact and charming - Coastal beauty with budget-friendly options",
    properties: "2,800+",
    image: Ajman,
    highlights: ["Ajman Corniche", "Beach Life", "Family Friendly"]
  },
  {
    name: "Umm Al Quwain",
    description: "The peaceful emirate - Serene living with pristine beaches and nature",
    properties: "1,500+",
    image: UmmAlQuwain,
    highlights: ["Mangroves", "Marina", "Quiet Living"]
  },
  {
    name: "Ras Al Khaimah",
    description: "The adventure destination - Mountains, beaches, and outdoor activities",
    properties: "3,200+",
    image: RasAlKhaimah,
    highlights: ["Jebel Jais", "Beaches", "Adventure Sports"]
  },
  {
    name: "Fujairah",
    description: "Hidden gem - Unspoiled beaches and mountain landscapes",
    properties: "1,800+",
    image: Fujairah,
    highlights: ["Sandy Beaches", "Mountain Views", "Nature Reserve"]
  }
];

export function ExploreEmirates() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900">
            Explore Properties Across the UAE
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Discover real estate opportunities in all 7 emirates. From luxury developments 
            in Dubai to serene coastal living in Fujairah, find your perfect property.
          </p>
        </div>

        {/* Emirates Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {emirates.map((emirate, index) => (
            <Link
              key={emirate.name}
              href={`/search?emirate=${emirate.name.toLowerCase()}`}
              className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-slate-200">
                <Image
                  src={emirate.image}
                  alt={emirate.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                  {emirate.name}
                </h3>
                <p className="mb-4 text-sm text-slate-600">
                  {emirate.description}
                </p>

                {/* Properties Count */}
                <div className="mb-4 rounded-lg bg-blue-50 px-3 py-2 text-center">
                  <span className="font-semibold text-blue-600">{emirate.properties}</span>
                  <span className="text-xs text-slate-600"> properties listed</span>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-slate-700 uppercase">Popular Areas:</p>
                  <div className="flex flex-wrap gap-2">
                    {emirate.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700">
                  Explore {emirate.name}
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* Statistics Banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-12 text-white">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold">50K+</div>
              <p className="text-lg text-white/90">Total Properties</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold">7</div>
              <p className="text-lg text-white/90">Emirates Covered</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold">100+</div>
              <p className="text-lg text-white/90">Areas & Communities</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold">24/7</div>
              <p className="text-lg text-white/90">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
