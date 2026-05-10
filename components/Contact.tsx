import { PROFILE } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-48 border-t border-white/5 overflow-hidden grain"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 60% at 50% 100%, rgba(220,0,0,0.22) 0%, rgba(10,10,10,1) 65%)",
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-rosso mb-6">
          // 05 — Let&apos;s build
        </p>

        <h2 className="font-display font-black uppercase tracking-tightest leading-[0.9] text-5xl md:text-7xl lg:text-[8vw]">
          Have a problem
          <br />
          <span className="text-stroke">worth shipping?</span>
        </h2>

        <p className="mt-8 max-w-xl mx-auto text-neutral-400 text-base md:text-lg leading-relaxed">
          Open to ML / AI engineering roles, internships, and collaborations on
          serious LLM tooling. The fastest way to reach me is email.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-rosso hover:bg-rosso-glow transition-colors text-white text-xs uppercase tracking-[0.22em] font-semibold"
          >
            {PROFILE.email}
            <span aria-hidden>→</span>
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 hover:border-white text-white text-xs uppercase tracking-[0.22em] font-semibold transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 hover:border-white text-white text-xs uppercase tracking-[0.22em] font-semibold transition-colors"
          >
            GitHub
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-[11px] uppercase tracking-[0.28em] text-neutral-500">
          <span>{PROFILE.location}</span>
          <span className="text-neutral-700">/</span>
          <span>{PROFILE.phone}</span>
        </div>
      </div>
    </section>
  );
}
