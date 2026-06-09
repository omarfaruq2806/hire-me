"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const router = useRouter();
  const [role, setRole] = useState("seeker"); // default role

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const name = formData.get("name");
    const photoUrl = formData.get("photoUrl");
    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await authClient.signUp.email({
      name,
      image: photoUrl,
      email,
      password,
      autoSignIn: false,
      role, // ✅ role added here
    });

    if (data) {
      toast.success("Account created successfully!");
      router.push("/authentication/signin");
    }

    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Create <span className="text-blue-500">Account</span>
          </h1>
          <p className="text-slate-400 mt-2">
            Join HireLoop and start your journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-sm text-slate-300">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="mt-1 w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Photo */}
          <div>
            <label className="text-sm text-slate-300">Photo URL</label>
            <input
              type="text"
              name="photoUrl"
              placeholder="https://..."
              className="mt-1 w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-slate-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@email.com"
              className="mt-1 w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Role Selection 🔥 */}
          <div>
            <label className="text-sm text-slate-300 mb-2 block">
              Select Role
            </label>

            <div className="flex gap-6 text-white">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="seeker"
                  checked={role === "seeker"}
                  onChange={(e) => setRole(e.target.value)}
                  className="accent-blue-500"
                />
                Seeker
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={role === "recruiter"}
                  onChange={(e) => setRole(e.target.value)}
                  className="accent-blue-500"
                />
                Recruiter
              </label>
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-slate-300">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-medium">
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-slate-400 text-sm mt-6">
          Already have an account?{" "}
          <Link href="/authentication/signin">
            <span className="text-blue-400 hover:text-blue-300">Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
