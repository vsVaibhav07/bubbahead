export default function Footer() {
  return (
    <footer className="bg-[rgb(var(--navy))] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
        {/* BRAND */}
        <div>
          <h3 className="text-xl font-serif font-bold mb-4 text-white">
            Bubba Head Law
          </h3>
          <p className="text-sm text-gray-300">
            Providing experienced DUI and criminal defense representation across
            Georgia for more than four decades.
          </p>
        </div>

        {/* PRACTICE AREAS */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Practice Areas</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">DUI Defense</a></li>
            <li><a href="#">Criminal Defense</a></li>
            <li><a href="#">License Suspension</a></li>
            <li><a href="#">Felony & Misdemeanor</a></li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">About Bubba Head</a></li>
            <li><a href="#">Client Reviews</a></li>
            <li><a href="#">Legal Resources</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Contact</h4>
          <p className="text-sm text-gray-300">📍 Georgia Offices</p>
          <p className="text-sm text-gray-300">📞 (XXX) XXX-XXXX</p>
          <p className="text-sm text-gray-300">✉ info@bubbahead.com</p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/20 py-4 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} Bubba Head Law Firm. All Rights Reserved.
        <br />
        Results may vary. Past performance does not guarantee future outcomes.
      </div>
    </footer>
  );
}
