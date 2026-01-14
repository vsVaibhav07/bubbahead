"use client";

import { Phone, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="text-xl font-serif font-bold text-[rgb(var(--navy))]">
          Bubba Head Law
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 font-medium text-[rgb(var(--charcoal))]">
          <a href="#" className="hover:text-[rgb(var(--gold))]">DUI Defense</a>
          <a href="#" className="hover:text-[rgb(var(--gold))]">Criminal Defense</a>
          <a href="#" className="hover:text-[rgb(var(--gold))]">About</a>
          <a href="#" className="hover:text-[rgb(var(--gold))]">Reviews</a>
          <a href="#" className="hover:text-[rgb(var(--gold))]">Contact</a>
        </nav>

        {/* RIGHT CTA */}
        <div className="flex items-center gap-4">
          <a
            href="tel:1234567890"
            className="hidden sm:flex items-center gap-1 text-sm font-medium text-[rgb(var(--navy))]"
          >
            <Phone size={16} />
            Call Now
          </a>

          <a
            href="#contact"
            className="bg-[rgb(var(--gold))] text-black px-4 py-2 rounded-md font-semibold hover:opacity-90 transition"
          >
            Free Consultation
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-6 py-4 gap-4 font-medium">
            <a href="#">DUI Defense</a>
            <a href="#">Criminal Defense</a>
            <a href="#">About</a>
            <a href="#">Reviews</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
