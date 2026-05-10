import Image from "next/image";
import { PROFILE, ABOUT_GALLERY } from "@/lib/data";
import SectionHeader from "./SectionHeader";

const STATS = [
  { value: "7", label: "Shipped ML Pipelines" },
  { value: "82%", label: "F1 Podium Accuracy" },
  { value: "10×", label: "Model Compression" },
  { value: "1.8", label: "Sharpe Ratio" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="01 — About"
          title="Engineering AI for production, not demos."
        />

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-7 space-y-6 text-neutral-300 text-base md:text-lg leading-relaxed">
            <p>
              I&apos;m a Computer Science undergrad at{" "}
              <span className="text-white">{PROFILE.university}</span>, focused
              on building <span className="text-white">LLM</span>,{" "}
              <span className="text-white">RAG</span>, and{" "}
              <span className="text-white">ML systems</span> that survive
              contact with real users — preprocessing, training, eval, and
              inference, all the way to a FastAPI endpoint.
            </p>
            <p>
              My work spans satellite-driven alpha signals, document
              intelligence agents, model pruning, and an F1 race-prediction
              engine. The common thread: clean, testable Python; measurable
              quality gates; and discipline about what &quot;production
              ready&quot; actually means.
            </p>
            <p className="text-neutral-500">
              Currently looking for ML / AI engineering roles and
              collaborations on serious LLM tooling.
            </p>
          </div>

          <aside className="md:col-span-5 md:pl-10 md:border-l md:border-white/10">
            <dl className="grid grid-cols-2 gap-y-10 gap-x-6">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="font-display font-black text-4xl md:text-5xl tracking-tightest">
                    {s.value}
                  </dt>
                  <dd className="mt-2 text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 pt-8 border-t border-white/10 space-y-4 font-mono text-xs text-neutral-400">
              <Row k="Education" v={PROFILE.degree} />
              <Row k="University" v={PROFILE.university} />
              <Row k="Period" v={PROFILE.graduation} />
              <Row k="GPA" v={PROFILE.gpa} />
              <Row k="Based in" v={PROFILE.location} />
            </div>
          </aside>
        </div>

        {/* Editorial image strip */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {ABOUT_GALLERY.map((item) => (
            <figure
              key={item.label}
              className="group relative aspect-[4/3] overflow-hidden bg-carbon-800 border border-white/5"
            >
              <Image
                src={item.src}
                alt=""
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover grayscale-[0.4] transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grayscale-0 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,10,10,0.0) 40%, rgba(10,10,10,0.85) 100%)",
                }}
              />
              <figcaption className="absolute bottom-4 left-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.32em] text-neutral-200">
                <span className="block w-1.5 h-1.5 bg-rosso" />
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span className="text-neutral-600 uppercase tracking-[0.2em]">{k}</span>
      <span className="text-neutral-200 text-right">{v}</span>
    </div>
  );
}
