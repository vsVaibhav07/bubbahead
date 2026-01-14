export default function FinalCTA() {
  return (
    <section className="section bg-[rgb(var(--navy))] text-white text-center">
      <h2 className="text-3xl font-serif font-bold mb-4 text-white">
        Charged With a DUI or Criminal Offense? Don’t Wait.
      </h2>

      <p className="mb-6 text-gray-200">
        The earlier you act, the more options you may have. Speak with an
        experienced defense attorney today.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="#contact"
          className="bg-[rgb(var(--gold))] text-black px-6 py-3 rounded-md font-semibold hover:opacity-90"
        >
          Free Consultation
        </a>

        <a
          href="tel:1234567890"
          className="border border-white/60 px-6 py-3 rounded-md font-semibold  hover:text-[rgb(var(--navy))]"
        >
          Call Now
        </a>
      </div>
    </section>
  );
}
