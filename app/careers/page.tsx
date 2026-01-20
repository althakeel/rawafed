"use client";

import { useState } from "react";

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior Real Estate Agent",
      department: "Sales",
      location: "Dubai, UAE",
      type: "Full-time",
      description: "We're seeking experienced real estate professionals to join our growing team."
    },
    {
      title: "Property Consultant",
      department: "Sales",
      location: "Abu Dhabi, UAE",
      type: "Full-time",
      description: "Help clients find their dream properties while building a rewarding career."
    },
    {
      title: "Commercial Broker",
      department: "Commercial",
      location: "Dubai, UAE",
      type: "Full-time",
      description: "Specialize in commercial real estate transactions and client relationships."
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Dubai, UAE",
      type: "Full-time",
      description: "Lead our marketing initiatives and drive brand awareness in the market."
    },
    {
      title: "Full Stack Developer",
      department: "Technology",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain our cutting-edge property platform and applications."
    },
    {
      title: "Customer Success Manager",
      department: "Support",
      location: "Dubai, UAE",
      type: "Full-time",
      description: "Ensure exceptional client experiences and build lasting relationships."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="mb-6 text-center text-5xl font-bold text-white">Join Our Team</h1>
          <p className="mx-auto max-w-3xl text-center text-xl text-white/90">
            Build your career with the region's leading real estate platform
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Why Join Us */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Why Work With Us?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Competitive Benefits",
                description: "Attractive salary packages, health insurance, and performance bonuses.",
                icon: "💰"
              },
              {
                title: "Career Growth",
                description: "Clear career progression paths and continuous learning opportunities.",
                icon: "📈"
              },
              {
                title: "Work-Life Balance",
                description: "Flexible working hours and a supportive work environment.",
                icon: "⚖️"
              },
              {
                title: "Innovative Culture",
                description: "Be part of a forward-thinking team that embraces new ideas.",
                icon: "💡"
              },
              {
                title: "Great Team",
                description: "Work alongside talented professionals who are passionate about real estate.",
                icon: "👥"
              },
              {
                title: "Modern Workspace",
                description: "State-of-the-art offices with the latest tools and technology.",
                icon: "🏢"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 text-5xl">{benefit.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">Open Positions</h2>
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="mb-2 text-2xl font-bold text-slate-900">{job.title}</h3>
                    <p className="mb-4 text-slate-600">{job.description}</p>
                    <div className="flex flex-wrap gap-3">
                      <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
                        {job.department}
                      </span>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                        📍 {job.location}
                      </span>
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <button className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Application Process</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: "01", title: "Apply Online", description: "Submit your application through our careers portal" },
              { step: "02", title: "Initial Review", description: "Our HR team reviews your qualifications" },
              { step: "03", title: "Interview", description: "Meet with our hiring managers and team members" },
              { step: "04", title: "Welcome Aboard", description: "Receive your offer and join our team" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-2xl font-bold text-white">
                  {process.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">{process.title}</h3>
                <p className="text-sm text-slate-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Culture Banner */}
        <div className="mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 p-12 text-white">
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold">Our Culture</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
              We believe in creating an environment where everyone can thrive. Our culture is built on 
              collaboration, innovation, and mutual respect. Join us and be part of something special.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div>✨ Inclusive</div>
              <div>🚀 Innovative</div>
              <div>🤝 Collaborative</div>
              <div>🎯 Results-Driven</div>
              <div>🌟 Empowering</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl bg-slate-50 p-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Don't See the Right Position?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600">
            We're always looking for talented individuals to join our team. Send us your resume 
            and let us know how you can contribute to our success.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-lg bg-purple-600 px-8 py-3 font-semibold text-white transition hover:bg-purple-700"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
