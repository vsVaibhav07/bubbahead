"use client";

import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[rgb(var(--navy))] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/">
          <Image 
            src="/logo.png" 
            height={80} 
            width={160} 
            alt="Bubba Head Law Logo" 
          unoptimized
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 font-medium text-white/90">
          <Link href="/dui-defense" className="hover:text-[rgb(var(--gold))] transition-colors">
            DUI Defense
          </Link>
          <Link href="/criminal-defense" className="hover:text-[rgb(var(--gold))] transition-colors">
            Criminal Defense
          </Link>
          <Link href="/about" className="hover:text-[rgb(var(--gold))] transition-colors">
            About
          </Link>
          <Link href="/reviews" className="hover:text-[rgb(var(--gold))] transition-colors">
            Reviews
          </Link>
          <Link href="/contact" className="hover:text-[rgb(var(--gold))] transition-colors">
            Contact
          </Link>
        </nav>

        {/* RIGHT CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="tel:1234567890"
            className="hidden sm:flex items-center gap-1 text-sm font-medium text-white hover:text-[rgb(var(--gold))] transition-colors"
          >
            <Phone size={16} />
            Call Now
          </Link>

          <Link
            href="/contact"
            className="bg-[rgb(var(--gold))] text-black px-4 py-2 rounded-md font-semibold hover:opacity-90 transition-all shadow-md"
          >
            Free Consultation
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[rgb(var(--navy))] border-t border-white/10">
          <nav className="flex flex-col px-6 py-8 gap-6 font-medium text-white">
            <Link href="/dui-defense" onClick={() => setOpen(false)} className="text-lg">
              DUI Defense
            </Link>
            <Link href="/criminal-defense" onClick={() => setOpen(false)} className="text-lg">
              Criminal Defense
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="text-lg">
              About
            </Link>
            <Link href="/reviews" onClick={() => setOpen(false)} className="text-lg">
              Reviews
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="text-lg">
              Contact
            </Link>
            <hr className="border-white/10" />
            <Link 
              href="tel:1234567890" 
              className="flex items-center gap-3 text-[rgb(var(--gold))] text-lg"
              onClick={() => setOpen(false)}
            >
              <Phone size={20} />
              Call Now: (XXX) XXX-XXXX
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}