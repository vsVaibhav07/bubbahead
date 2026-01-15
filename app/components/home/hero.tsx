"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[rgb(var(--navy))] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid gap-12 md:grid-cols-2 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* SEO H1 – COLOR EXPLICIT */}
          <h1 className="text-4xl text-center sm:text-left md:text-5xl font-serif font-bold mb-4 text-white">
            Atlanta’s Trusted DUI &amp; Criminal Defense Attorney
          </h1>

          <p className="text-lg text-justify text-gray-200 mb-6">
            Protecting Your Rights With Over 47 Years of Courtroom Experience
            Across Georgia.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 mb-8">
            {[
              "DUI & Drug Offense Defense",
              "Felony & Misdemeanor Charges",
              "License Suspension & Hearings",
              "Direct Attorney Access — No Middlemen",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check
                  size={20}
                  className="text-[rgb(var(--gold))] mt-1"
                />
                <span className="text-gray-100">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[rgb(var(--gold))] text-black font-semibold px-6 py-3 rounded-md hover:opacity-90 transition"
            >
              Get a Free Case Evaluation
            </a>

            <a
              href="tel:1234567890"
              className="inline-flex items-center justify-center border border-white/60 px-6 py-3 rounded-md font-semibold  hover:text-[rgb(var(--navy))] transition"
            >
              Call Now
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE PLACEHOLDER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="block"
        >
          
          <div className="h-[260px] sm:h-[420px] w-full rounded-xl bg-white/10 backdrop-blur-sm" >
          <Image src={"/heroImage.png"} alt="" fill className="rounded-xl opacity-90" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
