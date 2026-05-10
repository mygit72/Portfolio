import { CERTIFICATIONS } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-28 md:py-40 border-t border-white/5 bg-carbon-800"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="04 — Credentials"
          title="Verified coursework & certifications."
          description="Continuous training across the modern AI/ML stack — from foundations to production frameworks."
        />

        <ol className="relative border-l border-white/10 ml-2 md:ml-4 space-y-10">
          {CERTIFICATIONS.map((c, i) => (
            <li key={c.title + i} className="pl-8 md:pl-12 relative group">
              <span className="absolute -left-[7px] top-2 w-3 h-3 bg-carbon-800 border border-rosso group-hover:bg-rosso transition-colors" />
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <div>
                  <h3 className="font-display font-bold text-lg md:text-xl tracking-tight">
                    {c.title}
                  </h3>
                  <p className="text-neutral-500 text-sm mt-1">{c.issuer}</p>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-rosso">
                  {c.date}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
