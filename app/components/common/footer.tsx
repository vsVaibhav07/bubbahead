import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" px-6 md:px-2 bg-[rgb(var(--navy))] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-start">
        <div className="sm:col-span-2  flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" className="mb-4">
            <Image
              src="/editedLogo.png"
              width={300}
              height={90}
              alt="Bubba Head Law Logo"
            />
          </Link>
          <p className="text-sm text-gray-300 max-w-md">
            Providing experienced DUI and criminal defense representation across
            Georgia for more than four decades.
          </p>
        </div>

        <div className="text-center  sm:text-left">
          <h4 className="font-semibold mb-4 text-white">Practice Areas</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link href="/dui-defense" className="hover:text-[rgb(var(--gold))]">
                DUI Defense
              </Link>
            </li>
            <li>
              <Link
                href="/criminal-defense"
                className="hover:text-[rgb(var(--gold))]"
              >
                Criminal Defense
              </Link>
            </li>
            <li>
              <Link
                href="/license-suspension"
                className="hover:text-[rgb(var(--gold))]"
              >
                License Suspension
              </Link>
            </li>
            <li>
              <Link
                href="/felony-misdemeanor"
                className="hover:text-[rgb(var(--gold))]"
              >
                Felony & Misdemeanor
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link href="/about" className="hover:text-[rgb(var(--gold))]">
                About Bubba Head
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:text-[rgb(var(--gold))]">
                Client Reviews
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-[rgb(var(--gold))]">
                Legal Resources
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[rgb(var(--gold))]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t  border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h4 className="font-semibold text-center sm:text-left mb-8 text-white">
            Contact
          </h4>

          <div className="grid  gap-8 sm:grid-cols-2 md:grid-cols-4 text-sm text-gray-300">
            <div className="text-center sm:text-left">
              <p className="font-semibold text-white mb-1">Downtown Atlanta</p>
              <p>235 Peachtree Street NE</p>
              <p>Suite 400 Atlanta, GA 30303</p>
              <Link href="tel:4045675515" className="hover:text-[rgb(var(--gold))]">
                (404) 567-5515
              </Link>
            </div>

            <div className="text-center sm:text-left">
              <p className="font-semibold text-white mb-1">Sandy Springs</p>
              <p>5600 Roswell Rd Building H</p>
              <p>#210 Sandy Springs, GA 30342</p>
              <Link href="tel:4045675515" className="hover:text-[rgb(var(--gold))]">
                (404) 567-5515
              </Link>
            </div>

            <div className="text-center sm:text-left">
              <p className="font-semibold text-white mb-1">Marietta</p>
              <p>55 Atlanta Street SE</p>
              <p>Suite 400 Marietta, GA 30060</p>
              <Link href="tel:8882746288" className="hover:text-[rgb(var(--gold))]">
                (888) 274-6288
              </Link>
            </div>

            <div className="text-center sm:text-left">
              <p className="font-semibold text-white mb-1">Alpharetta</p>
              <p>33 S Main St</p>
              <p>Suite 302 Alpharetta, GA 30009</p>
              <Link href="tel:8448672889" className="hover:text-[rgb(var(--gold))]">
                (844) 867-2889
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 py-6 text-center text-xs text-gray-300 px-6">
        <p>© {new Date().getFullYear()} Bubba Head Law Firm. All Rights Reserved.</p>
        <p className="mt-1">
          Results may vary. Past performance does not guarantee future outcomes.
        </p>
      </div>
    </footer>
  );
}
