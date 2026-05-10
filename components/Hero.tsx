"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PROFILE, HERO_IMAGE } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden grain"
    >
      {/* Background — full-bleed photograph + cinematic overlays */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Cinematic colour wash + bottom fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 70% 20%, rgba(220,0,0,0.22) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.92) 75%)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.45)_0%,rgba(10,10,10,0.55)_40%,rgba(10,10,10,0.95)_85%,#0a0a0a_100%)]" />

        {/* Diagonal red streak */}
        <div
          aria-hidden
          className="absolute -right-40 top-1/3 w-[120%] h-px diag-line rotate-[-12deg] opacity-70"
        />
        <div
          aria-hidden
          className="absolute -right-40 top-1/3 w-[120%] h-px diag-line rotate-[-12deg] translate-y-3 opacity-30"
        />
      </div>

      {/* Top meta bar */}
      <div className="absolute top-20 left-0 right-0">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-neutral-400">
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 bg-rosso animate-pulse" />
            <span>Open to opportunities · 2026</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>{PROFILE.location}</span>
            <span className="text-neutral-600">/</span>
            <span>SRM Sonipat</span>
          </div>
        </div>
      </div>

      {/* Main headline */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pb-24 md:pb-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-rosso mb-6">
            // ML / AI Engineer · Portfolio 2026
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-display font-black leading-[0.85] tracking-tightest uppercase
                     text-[18vw] sm:text-[14vw] md:text-[11vw] lg:text-[9.5vw]"
        >
          Vansh
          <br />
          <span className="text-stroke">Mahendru</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <p className="max-w-xl text-base md:text-lg text-neutral-300 leading-relaxed">
            I build production-grade{" "}
            <span className="text-white font-semibold">LLM systems</span>,{" "}
            <span className="text-white font-semibold">RAG pipelines</span>,
            and end-to-end ML — from data contracts to FastAPI inference,
            shipped with measurable evals.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-rosso hover:bg-rosso-glow transition-colors text-white text-xs uppercase tracking-[0.22em] font-semibold"
            >
              View work
              <span aria-hidden>→</span>
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-3 px-6 py-3.5 border border-white/20 hover:border-white text-white text-xs uppercase tracking-[0.22em] font-semibold transition-colors"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-neutral-500">
        <span>Scroll</span>
        <span className="block w-px h-8 bg-gradient-to-b from-rosso to-transparent animate-scroll-cue" />
      </div>
    </section>
  );
}
