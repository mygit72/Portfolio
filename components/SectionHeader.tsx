type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <div
      className={`mb-14 md:mb-20 ${
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"
      }`}
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-rosso mb-4 flex items-center gap-3">
        <span className="block w-8 h-px bg-rosso" />
        {eyebrow}
      </p>
      <h2 className="font-display font-black uppercase tracking-tightest leading-[0.95] text-4xl md:text-6xl lg:text-7xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-neutral-400 text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
