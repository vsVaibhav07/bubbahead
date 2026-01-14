import { Car, Shield, AlertTriangle, Scale } from "lucide-react";

const services = [
  {
    title: "DUI Defense",
    desc: "Aggressive defense strategies to protect your license, freedom, and future after a DUI arrest.",
    icon: Car,
  },
  {
    title: "Criminal Defense",
    desc: "Skilled representation for misdemeanor and felony charges at every stage of the legal process.",
    icon: Shield,
  },
  {
    title: "License Suspension",
    desc: "Help fighting license suspensions and navigating administrative hearings after an arrest.",
    icon: AlertTriangle,
  },
  {
    title: "Felony & Misdemeanor",
    desc: "Strategic defense for serious charges with a focus on reducing or dismissing penalties.",
    icon: Scale,
  },
];

export default function PracticeAreas() {
  return (
    <section className="section bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold mb-10 text-center text-[rgb(var(--navy))]">
          Practice Areas
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div key={s.title} className="card p-6">
              <s.icon className="text-[rgb(var(--gold))] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2 text-[rgb(var(--navy))]">
                {s.title}
              </h3>
              <p className="text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
