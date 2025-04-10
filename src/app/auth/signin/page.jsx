"use client";

import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Sign in to MinimalShop</h1>
          <p className="text-gray-600 mt-2">Continue with your preferred method</p>
        </div>

        <div className="space-y-4">
          {/* Google Sign-in Button */}
          <button
            onClick={() => signIn("google", )}
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg px-6 py-3 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FaGoogle className="text-red-500" />
            <span>Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or return to</span>
            </div>
          </div>

          {/* Return to home */}
          <div className="mt-6 text-center">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 