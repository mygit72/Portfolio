import { SKILLS } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 md:py-40 border-t border-white/5 bg-carbon-800"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="02 — Capabilities"
          title="The full stack of modern AI engineering."
          description="From the embedding layer to the FastAPI handler — built, tested, and shipped."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
          {SKILLS.map((group) => (
            <div
              key={group.label}
              className="group relative border-b border-white/10 lg:border-b-0 lg:border-r last:border-r-0
                         border-white/10 p-8 md:p-10 transition-colors hover:bg-carbon-700"
            >
              <div className="absolute top-0 left-0 h-px w-0 bg-rosso transition-all duration-500 group-hover:w-full" />

              <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-rosso">
                {group.number}
              </span>
              <h3 className="mt-4 font-display font-bold uppercase tracking-tight text-xl md:text-2xl leading-tight">
                {group.label}
              </h3>

              <ul className="mt-8 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-neutral-300"
                  >
                    <span className="mt-2 block w-1 h-1 bg-rosso flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
