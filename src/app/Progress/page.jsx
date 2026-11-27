
"use client";

import { useState } from "react";
import Link from "next/link";

export default function ComingSoon() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-5">
      <div className="max-w-2xl w-full text-center">

        {/* Animated Icon */}
        <div className="mx-auto mb-8 flex items-center justify-center 
          w-24 h-24 rounded-full bg-blue-100 animate-bounce">
          <span className="text-5xl">🚧</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5">
          Oops!
          <span className="text-blue-600"> Something's Coming.</span>
        </h1>

        {/* Main Message */}
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-4">
          Working on this page is still going on.
          Please stay tuned for future updates!
        </p>

        <p className="text-gray-500 mb-8">
          We are working hard to bring you something useful.
          Thank you for your patience!
        </p>

        {/* Interactive Button */}
        <button
          onClick={() => setShowMessage(!showMessage)}
          className="bg-blue-600 hover:bg-blue-700 text-white
          px-8 py-3 rounded-full font-semibold transition-all
          duration-300 hover:scale-105 shadow-lg"
        >
          {showMessage ? "Hide Message" : "Know More"}
        </button>

        {showMessage && (
          <div className="mt-6 p-5 bg-white rounded-xl shadow-md
            border border-blue-100 animate-pulse">
            <p className="text-gray-700">
              Our team is working to make your learning experience
              better. This page will be available soon!
            </p>
          </div>
        )}

        {/* Home Navigation */}
        <div className="mt-10">
          <Link
            href="/"
            className="text-blue-600 font-semibold hover:text-blue-800
            transition-colors"
          >
            ← Back to Homepage
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-16 text-sm text-gray-400">
          © 2026 Equation Learning Center. All rights reserved.
        </p>

      </div>
    </main>
  );
}
