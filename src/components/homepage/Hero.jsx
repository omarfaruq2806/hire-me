"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-4">
          <span className="px-4 py-1 text-sm rounded-full bg-blue-600/20 text-blue-400 border border-blue-800">
            🚀 The Modern Job Hunting Platform
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Find Your Dream Job with{" "}
          <span className="text-blue-500">HireLoop</span>
        </h1>

        {/* Sub text */}
        <p className="text-slate-400 mt-4 max-w-2xl">
          Smart job search, company profiles, and recruiter tools — everything
          in one platform for seekers and recruiters.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <Link href="/jobs">
            <button className="btn bg-blue-600 hover:bg-blue-700 text-white border-none">
              Search Jobs
            </button>
          </Link>

          <Link href="/authentication/register">
            <button className="btn btn-outline border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
              Post / Join Now
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 w-full max-w-4xl">
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
            <p className="text-2xl font-bold text-blue-400">10K+</p>
            <p className="text-sm text-slate-400">Active Jobs</p>
          </div>

          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
            <p className="text-2xl font-bold text-blue-400">2K+</p>
            <p className="text-sm text-slate-400">Companies</p>
          </div>

          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
            <p className="text-2xl font-bold text-blue-400">50K+</p>
            <p className="text-sm text-slate-400">Job Seekers</p>
          </div>

          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
            <p className="text-2xl font-bold text-blue-400">98%</p>
            <p className="text-sm text-slate-400">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
