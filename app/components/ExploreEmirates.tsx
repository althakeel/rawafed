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

        {/* Featured Dubai Card - Large */}
        <div className="mb-12 grid gap-6 md:grid-cols-3 lg:gap-8">
          <Link
            href={`/search?emirate=dubai`}
            className="group relative h-96 overflow-hidden rounded-2xl shadow-2xl transition hover:shadow-3xl md:col-span-2"
          >
            <Image
              src={emirates[0].image}
              alt="Dubai"
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-8">
              <div>
                <h3 className="text-5xl font-bold text-white mb-3">{emirates[0].name}</h3>
                <p className="text-white/90 text-lg max-w-md">{emirates[0].description}</p>
              </div>
              <div>
                <div className="mb-4 inline-block rounded-full bg-blue-600 px-4 py-2">
                  <span className="font-bold text-white">{emirates[0].properties}</span>
                  <span className="text-white/80 text-sm"> properties</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {emirates[0].highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <button className="w-full rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700">
                  Explore {emirates[0].name}
                </button>
              </div>
            </div>
          </Link>

          {/* Abu Dhabi Featured Card */}
          <Link
            href={`/search?emirate=abu-dhabi`}
            className="group relative h-96 overflow-hidden rounded-2xl shadow-2xl transition hover:shadow-3xl"
          >
            <Image
              src={emirates[1].image}
              alt="Abu Dhabi"
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <div className="text-right">
                <span className="inline-block rounded-full bg-amber-500/80 px-3 py-1 text-xs font-bold text-white">FEATURED</span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">{emirates[1].name}</h3>
                <p className="text-white/80 text-sm mb-3">{emirates[1].description}</p>
                <div className="mb-3 inline-block rounded-full bg-blue-600 px-3 py-1.5">
                  <span className="font-bold text-white text-sm">{emirates[1].properties}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {emirates[1].highlights.slice(0, 2).map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-0.5 text-xs text-white"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <button className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white text-sm transition hover:bg-blue-700">
                  Explore
                </button>
              </div>
            </div>
          </Link>
        </div>

        {/* Other Emirates Grid - 3 columns */}
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {emirates.slice(2).map((emirate) => (
            <Link
              key={emirate.name}
              href={`/search?emirate=${emirate.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group relative h-72 overflow-hidden rounded-xl shadow-lg transition hover:shadow-2xl"
            >
              <Image
                src={emirate.image}
                alt={emirate.name}
                fill
                className="object-cover group-hover:scale-125 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-5">
                <div className="text-right opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="inline-block rounded-full bg-purple-600/80 px-2.5 py-0.5 text-xs font-bold text-white">EXPLORE</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1.5">{emirate.name}</h3>
                  <p className="text-white/70 text-xs mb-2 line-clamp-2">{emirate.description}</p>
                  <div className="mb-2.5 inline-block rounded-full bg-blue-600 px-2.5 py-1">
                    <span className="font-bold text-white text-xs">{emirate.properties}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {emirate.highlights.slice(0, 2).map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-2 py-0.5 text-xs text-white"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <button className="w-full rounded-lg bg-blue-600 px-3 py-2 font-semibold text-white text-xs transition hover:bg-blue-700">
                    View {emirate.name}
                  </button>
                </div>
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
