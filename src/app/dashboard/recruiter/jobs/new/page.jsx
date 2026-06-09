"use client";

import { createJob } from "@/lib/actions/jobs";
import { useState } from "react";
import toast from "react-hot-toast";

const PostJobForm = () => {
  const [isRemote, setIsRemote] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const jobData = {
      title: form.get("title"),
      category: form.get("category"),
      type: form.get("type"),
      minSalary: form.get("minSalary"),
      maxSalary: form.get("maxSalary"),
      currency: form.get("currency"),
      location: isRemote ? "Remote" : form.get("location"),
      deadline: form.get("deadline"),
      responsibilities: form.get("responsibilities"),
      requirements: form.get("requirements"),
      benefits: form.get("benefits"),
    };

    console.log(jobData);
    const res = await createJob(jobData);
    toast.success("Job created successfully (UI only)");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 ">
      <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-8 ">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-6">
          Post a <span className="text-blue-500">Job</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* ================= JOB INFO ================= */}
          <div>
            <h2 className="text-lg font-semibold text-slate-300 mb-4">
              Job Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Title */}
              <input
                name="title"
                placeholder="Job Title"
                className="input bg-slate-800 border border-slate-700 w-full"
              />

              {/* Category */}
              <input
                name="category"
                placeholder="Job Category (e.g. IT, Marketing)"
                className="input bg-slate-800 border border-slate-700 w-full"
              />

              {/* Type */}
              <select
                name="type"
                className="select bg-slate-800 border border-slate-700 w-full"
              >
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Internship</option>
              </select>

              {/* Currency */}
              <select
                name="currency"
                className="select bg-slate-800 border border-slate-700 w-full"
              >
                <option>USD</option>
                <option>BDT</option>
                <option>EUR</option>
              </select>

              {/* Salary */}
              <input
                name="minSalary"
                placeholder="Min Salary"
                type="number"
                className="input bg-slate-800 border border-slate-700 w-full"
              />

              <input
                name="maxSalary"
                placeholder="Max Salary"
                type="number"
                className="input bg-slate-800 border border-slate-700 w-full"
              />

              {/* Location */}
              <input
                name="location"
                disabled={isRemote}
                placeholder="City, Country"
                className="input bg-slate-800 border border-slate-700 w-full disabled:opacity-40"
              />

              {/* Remote toggle */}
              <label className="flex items-center gap-2 text-slate-300">
                <input
                  type="checkbox"
                  checked={isRemote}
                  onChange={() => setIsRemote(!isRemote)}
                />
                Remote Job
              </label>

              {/* Deadline */}
              <input
                name="deadline"
                type="date"
                className="input bg-slate-800 border border-slate-700 w-full"
              />
            </div>
          </div>

          {/* ================= DESCRIPTION ================= */}
          <div>
            <h2 className="text-lg font-semibold text-slate-300 mb-4">
              Job Description
            </h2>

            <textarea
              name="responsibilities"
              placeholder="Responsibilities..."
              rows={4}
              className="textarea bg-slate-800 border border-slate-700 w-full mb-4"
            />

            <textarea
              name="requirements"
              placeholder="Requirements..."
              rows={4}
              className="textarea bg-slate-800 border border-slate-700 w-full mb-4"
            />

            <textarea
              name="benefits"
              placeholder="Benefits (optional)"
              rows={3}
              className="textarea bg-slate-800 border border-slate-700 w-full"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
          >
            Publish Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostJobForm;
