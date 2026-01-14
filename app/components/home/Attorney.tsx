export default function Attorney() {
  return (
    <section className="section bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Placeholder */}
        <div className="h-96 rounded-xl bg-gray-300" />

        <div>
          <h3 className="text-2xl font-serif font-bold mb-2 text-[rgb(var(--navy))]">
            William “Bubba” C. Head
          </h3>
          <p className="font-semibold mb-4 text-gray-700">
            Founder & Lead Defense Attorney
          </p>

          <p className="mb-6 text-gray-700">
            William “Bubba” Head has spent more than 47 years defending clients
            facing DUI and criminal charges across Georgia. Known for his
            courtroom experience, strategic approach, and straightforward
            counsel, he focuses on protecting his clients’ rights and futures.
          </p>

          <a
            href="#"
            className="font-semibold underline text-[rgb(var(--gold))]"
          >
            Read Full Attorney Bio
          </a>
        </div>
      </div>
    </section>
  );
}
