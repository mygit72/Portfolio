"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Capabilities" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Credentials" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-carbon/85 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 group"
          aria-label="Home"
        >
          <span className="block w-2.5 h-6 bg-rosso group-hover:bg-rosso-glow transition-colors" />
          <span className="font-display tracking-tightest text-sm uppercase font-semibold">
            Vansh Mahendru
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.18em] text-neutral-300 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-rosso text-white text-xs uppercase tracking-[0.18em] font-semibold hover:bg-rosso-glow transition-colors"
        >
          Get in touch
          <span aria-hidden>→</span>
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden w-10 h-10 flex items-center justify-center"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block w-6 h-px bg-white" />
            <span className="block w-6 h-px bg-white" />
            <span className="block w-4 h-px bg-rosso ml-auto" />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-carbon/95 backdrop-blur-md">
          <div className="px-6 py-6 flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.18em] text-neutral-300"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 bg-rosso text-white text-xs uppercase tracking-[0.18em] font-semibold"
            >
              Get in touch →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
