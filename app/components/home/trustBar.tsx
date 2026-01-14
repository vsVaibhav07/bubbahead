import { Star, BadgeCheck, Gavel } from "lucide-react";

export default function TrustBar() {
  return (
    <section className="bg-white border-y">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <Star className="text-[rgb(var(--gold))]" />
          <p className="font-semibold text-[rgb(var(--charcoal))]">
            4.9 Google Rating
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <BadgeCheck className="text-[rgb(var(--gold))]" />
          <p className="font-semibold text-[rgb(var(--charcoal))]">
            47+ Years Experience
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Gavel className="text-[rgb(var(--gold))]" />
          <p className="font-semibold text-[rgb(var(--charcoal))]">
            Thousands of Cases
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <BadgeCheck className="text-[rgb(var(--gold))]" />
          <p className="font-semibold text-[rgb(var(--charcoal))]">
            Georgia Bar Member
          </p>
        </div>
      </div>
    </section>
  );
}
