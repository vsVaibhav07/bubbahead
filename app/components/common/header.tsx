"use client";

import { Phone, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/editedLogo.png"
            alt="logo"
            priority
            quality={95}
            height={80}
            width={310}
          />
        </Link>

        <nav className="hidden md:flex gap-6 font-medium text-[rgb(var(--charcoal))]">
          <Link href="/dui-defense" className="hover:text-[rgb(var(--gold))]">
            DUI Defense
          </Link>
          <Link href="/criminal-defense" className="hover:text-[rgb(var(--gold))]">
            Criminal Defense
          </Link>
          <Link href="/about" className="hover:text-[rgb(var(--gold))]">
            About
          </Link>
          <Link href="/reviews" className="hover:text-[rgb(var(--gold))]">
            Reviews
          </Link>
          <Link href="/blog" className="hover:text-[rgb(var(--gold))]">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-[rgb(var(--gold))]">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="tel:1234567890"
            className="hidden sm:flex items-center gap-1 text-sm font-medium text-[rgb(var(--navy))]"
          >
            <Phone size={16} />
            Call Now
          </Link>

          <Link
            href="/contact"
            className="bg-[rgb(var(--gold))] text-black px-4 py-2 rounded-md font-semibold hover:opacity-90 transition"
          >
            Free Consultation
          </Link>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-6 py-4 gap-4 font-medium">
            <Link href="/dui-defense" onClick={() => setOpen(false)}>
              DUI Defense
            </Link>
            <Link href="/criminal-defense" onClick={() => setOpen(false)}>
              Criminal Defense
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/reviews" onClick={() => setOpen(false)}>
              Reviews
            </Link>
            <Link href="/blog" onClick={() => setOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
