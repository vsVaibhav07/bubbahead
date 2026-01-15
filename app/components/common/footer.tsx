import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[rgb(var(--navy))] text-white">
      <div className="max-w-7xl text-center md:text-left px4 mx-auto px-6 py-6 grid lg:gap-10 md:grid-cols-4">
        <div className="flex flex-col justify-center text-center" >
          <Link className=" flex justify-center" href="/">
            <Image
              src="/logo.png"
              height={80}
              width={160}
              alt="Bubba Head Law Logo"
          
            />
          </Link>
          <p className="text-sm sm:text-justify text-gray-300">
            Providing experienced DUI and criminal defense representation across
            Georgia for more than four decades.
          </p>
        </div>

        <div className=" py-8 md:py-12">
          <h4 className="font-semibold mb-3 text-white">Practice Areas</h4>
          <ul className="space-y-2  text-sm text-gray-300">
            <li>
              <Link href="/dui-defense" className="hover:text-[rgb(var(--gold))] transition-colors">
                DUI Defense
              </Link>
            </li>
            <li>
              <Link href="/criminal-defense" className="hover:text-[rgb(var(--gold))] transition-colors">
                Criminal Defense
              </Link>
            </li>
            <li>
              <Link href="/license-suspension" className="hover:text-[rgb(var(--gold))] transition-colors">
                License Suspension
              </Link>
            </li>
            <li>
              <Link href="/felony-misdemeanor" className="hover:text-[rgb(var(--gold))] transition-colors">
                Felony & Misdemeanor
              </Link>
            </li>
          </ul>
        </div>

        <div className="py-4 md:py-12">
          <h4 className="font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/about" className="hover:text-[rgb(var(--gold))] transition-colors">
                About Bubba Head
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:text-[rgb(var(--gold))] transition-colors">
                Client Reviews
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-[rgb(var(--gold))] transition-colors">
                Legal Resources
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[rgb(var(--gold))] transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="py-4 md:py-12" >
          <h4 className="font-semibold mb-3 text-white">Contact</h4>
          <div className="space-y-2 text-sm text-gray-300">
            <p>📍 Georgia Offices</p>
            <Link href="tel:1234567890" className="block hover:text-[rgb(var(--gold))] transition-colors">
              📞 (XXX) XXX-XXXX
            </Link>
            <Link href="mailto:info@bubbahead.com" className="block hover:text-[rgb(var(--gold))] transition-colors">
              ✉ info@bubbahead.com
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t py-4 md:py-12 border-white/20 text-center text-xs text-gray-300 px-6">
        <p>© {new Date().getFullYear()} Bubba Head Law Firm. All Rights Reserved.</p>
        <p className="mt-1">
          Results may vary. Past performance does not guarantee future outcomes.
        </p>
      </div>
    </footer>
  );
}