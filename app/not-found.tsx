"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl"
      >
        <h1 className="text-7xl font-serif font-bold text-[rgb(var(--navy))] mb-4">
          404
        </h1>

        <h2 className="text-2xl font-semibold mb-3 text-gray-800">
          Page Not Found
        </h2>

        <p className="text-gray-600 mb-8">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="bg-[rgb(var(--gold))] text-black px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Go to Home
          </Link>

          <Link
            href="/contact"
            className="border border-[rgb(var(--navy))] text-[rgb(var(--navy))] px-6 py-3 rounded-md font-semibold  transition"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
