"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const router = useRouter();
  const handleRegister = async (e) => {
    // Handle registration logic here
    e.preventDefault();
    const formData = new FormData(e.target);

    // Access form data
    const name = formData.get("name");
    const photoUrl = formData.get("photoUrl");
    const email = formData.get("email");
    const password = formData.get("password");

    // Perform registration logic
    const { data, error } = await authClient.signUp.email({
      name: name,
      image: photoUrl,
      email: email,
      password: password,
      autoSignIn: false,
    });
    if (data) {
      console.log(data);
      toast.success("Registration successful!");
      // Redirect to login page
      router.push("/authentication/signin");
    }
    if (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Create Account</h1>
          <p className="text-slate-400 mt-2">
            Join HireLoop and start your journey
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input w-full bg-slate-800 border-slate-700 text-white"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Photo URL
            </label>
            <input
              type="text"
              name="photoUrl"
              placeholder="Enter photo URL"
              className="input w-full bg-slate-800 border-slate-700 text-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-slate-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input w-full bg-slate-800 border-slate-700 text-white"
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
              placeholder="Create a password"
              className="input w-full bg-slate-800 border-slate-700 text-white"
            />
          </div>

          {/* Register Button */}
          <button className="btn btn-primary w-full mt-2">
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="divider text-slate-500">OR</div>

        {/* Google Login */}
        <button className="btn w-full bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-slate-400 text-sm mt-6">
          Already have an account?{" "}
          <Link href="/authentication/signin">
            <span className="text-primary">Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
