const resources = [
  {
    title: "What to Do After a DUI Arrest in Georgia",
    desc: "Learn the critical steps that can protect your case and your license.",
  },
  {
    title: "Understanding Georgia DUI Laws",
    desc: "Penalties, blood alcohol limits, and what prosecutors must prove.",
  },
  {
    title: "License Suspension FAQs",
    desc: "What happens to your license and how to fight suspension hearings.",
  },
];

export default function Resources() {
  return (
    <section className="section bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold mb-10 text-center text-[rgb(var(--navy))]">
          Know Your Rights
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((r) => (
            <div key={r.title} className="card p-6">
              <h3 className="font-bold text-lg mb-2 text-[rgb(var(--navy))]">
                {r.title}
              </h3>
              <p className="mb-4 text-gray-700">{r.desc}</p>
              <a
                href="#"
                className="font-semibold underline text-[rgb(var(--gold))]"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
