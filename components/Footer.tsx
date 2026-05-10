import { PROFILE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] uppercase tracking-[0.28em] text-neutral-500">
        <div className="flex items-center gap-3">
          <span className="block w-2 h-5 bg-rosso" />
          <span>{PROFILE.name}</span>
        </div>
        <div className="flex items-center gap-6">
          <span>© {new Date().getFullYear()}</span>
          <span className="text-neutral-700">·</span>
          <span>Built with Next.js + Tailwind</span>
        </div>
        <div className="flex items-center gap-5">
          <a href={PROFILE.github} target="_blank" rel="noreferrer noopener" className="hover:text-white transition-colors">
            GH
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer noopener" className="hover:text-white transition-colors">
            IN
          </a>
          <a href={`mailto:${PROFILE.email}`} className="hover:text-white transition-colors">
            ✉
          </a>
        </div>
      </div>
    </footer>
  );
}
