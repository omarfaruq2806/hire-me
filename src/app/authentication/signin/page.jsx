"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const SignInPage = () => {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    if (data) {
      toast.success("Welcome back!");
      router.push("/");
    }

    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 relative px-4">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-3xl rounded-full top-[-150px] left-[-150px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full bottom-[-150px] right-[-150px]" />

      {/* Card */}
      <div className="relative w-full max-w-md bg-slate-900/60 backdrop-blur-2xl border border-slate-800 rounded-2xl p-8 shadow-2xl">

        {/* Header */}
        <div className="text-center mb-7">
          <h1 className="text-3xl font-bold text-white">
            Welcome Back to <span className="text-blue-500">HireLoop</span>
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            Sign in to continue your job journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">

          {/* Email */}
          <div>
            <label className="text-xs text-slate-400">Email</label>
            <input
              name="email"
              type="email"
              placeholder="you@email.com"
              className="mt-1 w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-xs text-slate-400">Password</label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium text-white shadow-lg shadow-blue-600/20">
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="h-px bg-slate-800 flex-1" />
          <span className="text-slate-500 text-xs">OR</span>
          <div className="h-px bg-slate-800 flex-1" />
        </div>

        {/* Google */}
        <button className="w-full py-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white transition">
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-slate-400 text-sm mt-6">
          Don’t have an account?{" "}
          <Link href="/authentication/register">
            <span className="text-blue-400 hover:text-blue-300">
              Create Account
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;