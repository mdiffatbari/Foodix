"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const Page = () => {
  const handleGoogleLogin = () => {
    
    console.log("Google login clicked");
  };

  const handleSignin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signin form submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h1>

        {/* Sign In Form */}
        <form onSubmit={handleSignin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* Google Login */}
        <div className="mt-6">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 border py-2 rounded-lg hover:bg-gray-50 transition"
          >
            <FcGoogle size={22} /> Sign in with Google
          </button>
        </div>

        {/* Don't have account */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Don’t have an account?{" "}
          <Link href="/authentication/signup" className="text-red-600 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
