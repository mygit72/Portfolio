const STRIP = [
  "Python",
  "FastAPI",
  "LangChain",
  "ChromaDB",
  "RAG",
  "LLM Evals",
  "XGBoost",
  "TensorFlow",
  "Keras",
  "OpenAI",
  "Gemini",
  "YOLOv8",
  "Pandas",
  "NumPy",
  "Scikit-Learn",
  "FastAPI",
  "Vector Search",
];

export default function Marquee() {
  const items = [...STRIP, ...STRIP];
  return (
    <div className="relative border-y border-white/10 bg-carbon overflow-hidden py-5">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display font-bold uppercase tracking-tight text-2xl md:text-3xl text-neutral-700"
          >
            {item}
            <span className="text-rosso text-base">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
