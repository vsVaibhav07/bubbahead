import { CheckCircle } from "lucide-react";

const points = [
  "Over four decades of courtroom experience",
  "Former prosecutor insight applied to defense strategy",
  "Personalized case handling — no cookie-cutter approach",
  "Direct access to your attorney, not case managers",
  "Honest guidance focused on real outcomes",
];

export default function WhyChoose() {
  return (
    <section className="section bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center text-[rgb(var(--navy))]">
          Why Clients Choose Bubba Head
        </h2>

        <ul className="space-y-4">
          {points.map((point) => (
            <li key={point} className="flex gap-3">
              <CheckCircle className="text-[rgb(var(--gold))] mt-1" />
              <span className="text-lg text-gray-700">{point}</span>
            </li>
          ))}
        </ul>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-block bg-[rgb(var(--gold))] text-black px-6 py-3 rounded-md font-semibold hover:opacity-90"
          >
            Speak Directly With an Attorney
          </a>
        </div>
      </div>
    </section>
  );
}
