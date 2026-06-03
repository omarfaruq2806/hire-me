"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const SignInPage = () => {
  const handleSignIn = (e) => {
    // Handle sign-in logic here
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // Perform sign-in logic
    const { data, error } = authClient.signIn.email({
      email: email,
      password: password,
    });
    // if (data) {
    //   console.log(data);
    //   toast.success("Sign-in successful!");
    // }
    // if (error) {
    //   console.log(error);
    //   toast.error(error.message);
    // }
  };

  return (
    <div className="bg-black min-h-screen p-10">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-slate-400 mt-2">
            Sign in to your HireLoop account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignIn} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm text-slate-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input w-full bg-slate-800 border-slate-700 text-white focus:outline-none focus:border-primary"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input w-full bg-slate-800 border-slate-700 text-white focus:outline-none focus:border-primary"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-sm text-primary hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button className="btn btn-primary w-full">Login</button>
        </form>

        {/* Footer */}
        <p className="text-center text-slate-400 text-sm mt-6">
          Don't have an account?{" "}
          <Link href="/authentication/register">
            <span className="text-primary cursor-pointer hover:underline">
              Register
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
