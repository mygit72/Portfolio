"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative py-28 md:py-40 border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeader
          eyebrow="03 — Selected Work"
          title="Pipelines, agents, and models — shipped."
          description="Every project below was owned end-to-end: data contracts, training, evaluation, and a working inference layer."
        />

        {/* Featured — large editorial cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((p, i) => (
            <FeaturedCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        {/* Rest — compact list */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noreferrer noopener"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative block overflow-hidden bg-carbon-800 border border-white/5 hover:border-rosso/60 transition-colors"
    >
      {/* Image surface */}
      <div className="relative aspect-[4/3] overflow-hidden bg-carbon">
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
        />

        {/* Cinematic overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.55) 60%, rgba(10,10,10,0.92) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-70 transition-opacity duration-500 group-hover:opacity-40"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 20%, rgba(220,0,0,0.28) 0%, transparent 60%)",
          }}
        />

        {/* Big metric */}
        <div className="absolute inset-x-0 bottom-0 px-6 pb-6">
          <span className="block font-display font-black uppercase tracking-tightest text-white text-3xl md:text-4xl lg:text-5xl leading-[0.9] drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            {project.metric}
          </span>
        </div>

        {/* Category tag */}
        <div className="absolute top-5 left-5 flex items-center gap-2">
          <span className="block w-1.5 h-1.5 bg-rosso" />
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-200">
            {project.category}
          </span>
        </div>

        {/* Featured ribbon */}
        <div className="absolute top-5 right-5 px-2 py-1 bg-rosso text-[9px] uppercase tracking-[0.28em] font-semibold">
          Featured
        </div>
      </div>

      {/* Content */}
      <div className="p-7 md:p-8 space-y-4">
        <h3 className="font-display font-bold uppercase tracking-tight text-xl md:text-2xl leading-tight group-hover:text-rosso transition-colors">
          {project.title}
        </h3>
        <p className="text-neutral-400 text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.stack.slice(0, 5).map((s) => (
            <span
              key={s}
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400 border border-white/10 px-2 py-1"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="pt-4 flex items-center justify-between border-t border-white/5">
          <span className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
            View on GitHub
          </span>
          <span
            aria-hidden
            className="text-rosso text-lg transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </div>
      </div>
    </motion.a>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noreferrer noopener"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative block bg-carbon-800 border border-white/5 hover:border-rosso/60 transition-colors overflow-hidden"
    >
      {/* Cover image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.5) 60%, rgba(10,10,10,0.9) 100%)",
          }}
        />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="block w-1.5 h-1.5 bg-rosso" />
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-200">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-7">
        <h3 className="font-display font-bold uppercase tracking-tight text-lg leading-tight mb-3 group-hover:text-rosso transition-colors min-h-[3.5rem]">
          {project.title}
        </h3>

        <div className="font-display font-black tracking-tightest text-3xl md:text-4xl text-white mb-4">
          {project.metric}
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-500 border border-white/10 px-1.5 py-0.5"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.22em] text-neutral-500">
            GitHub
          </span>
          <span
            aria-hidden
            className="text-rosso transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </div>
      </div>
    </motion.a>
  );
}
