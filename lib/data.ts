export type Project = {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  stack: string[];
  metric: string;
  description: string;
  href: string;
  image: string;
  featured?: boolean;
};

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1568525208344-30be1d3a4ed5?w=2400&q=85&auto=format&fit=crop";

export const ABOUT_GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80&auto=format&fit=crop",
    label: "Models",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop",
    label: "Inference",
  },
  {
    src: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=1200&q=80&auto=format&fit=crop",
    label: "Signals",
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "f1-race-prediction",
    title: "F1 Race Prediction & Season Analytics Engine",
    category: "ML Engineering",
    tagline: "Predicting podiums, race by race.",
    stack: ["Python", "XGBoost", "Scikit-Learn", "FastAPI", "Monte Carlo"],
    metric: "82% podium accuracy",
    description:
      "Full ML pipeline — ingestion, feature engineering, XGBoost + Monte Carlo (10,000+ iterations), cross-validation, and real-time inference behind a FastAPI service. Modular, tested components catching regressions between pipeline stages.",
    href: "https://github.com/mygit72",
    image:
      "https://images.unsplash.com/photo-1541447271487-09612b3f49f7?w=1600&q=80&auto=format&fit=crop",
    featured: true,
  },
  {
    slug: "splm-india",
    title: "SPLM India — Satellite Parking Lot Momentum",
    category: "Applied ML",
    tagline: "Sentinel-2 imagery as alpha signal.",
    stack: ["Python", "YOLOv8", "NumPy", "Pandas", "FastAPI"],
    metric: "14% annualised alpha",
    description:
      "End-to-end intelligence pipeline predicting revenue surprises in Indian retail stocks from satellite imagery (10,000+ records). Owned data contracts, training, evaluation, and sub-second inference.",
    href: "https://github.com/mygit72",
    image:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1600&q=80&auto=format&fit=crop",
    featured: true,
  },
  {
    slug: "rag-chatbot",
    title: "Document Intelligence RAG Chatbot",
    category: "Generative AI",
    tagline: "Production-grade Q&A, with evals.",
    stack: ["LangChain", "ChromaDB", "OpenAI", "Gemini", "FastAPI"],
    metric: "Eval-driven RAG",
    description:
      "Full RAG architecture: ingestion → chunking → embeddings → vector store → retrieval (top-k + MMR) → generation. LLM-as-judge eval harness scores factuality, relevance, and groundedness.",
    href: "https://github.com/mygit72",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1600&q=80&auto=format&fit=crop",
  },
  {
    slug: "multi-tool-agent",
    title: "Multi-Tool AI Agent with LLMOps",
    category: "Agents",
    tagline: "ReAct loop, three tools, production deploy.",
    stack: ["LangChain", "OpenAI Assistants", "FastAPI", "SerpAPI"],
    metric: "Autonomous tool use",
    description:
      "ReAct agent with web search, calculator, and file reader. OpenAI Assistants API for thread state. LLMOps discipline: prompt versioning, tool-call logging, failure tracing, regression tests.",
    href: "https://github.com/mygit72",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&q=80&auto=format&fit=crop",
  },
  {
    slug: "lottery-ticket",
    title: "The Lottery Ticket Hypothesis",
    category: "Model Optimisation",
    tagline: "10× smaller, 99.2% accurate.",
    stack: ["Python", "Keras", "TensorFlow"],
    metric: "10× compression @ 99.2%",
    description:
      "Iterative pruning framework producing lightweight, deployment-ready models. Systematic regression tests at every sparsity threshold; eval-and-harden loop mirroring production LLM workflows.",
    href: "https://github.com/mygit72",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80&auto=format&fit=crop",
  },
  {
    slug: "oceanic-edge",
    title: "Oceanic Edge — AIS & NLP Port Congestion",
    category: "Multi-Modal AI",
    tagline: "NLP + computer vision on global shipping.",
    stack: ["Python", "NLP", "Computer Vision"],
    metric: "1.8 Sharpe ratio",
    description:
      "AI pipeline integrating NLP-style text processing and computer vision over AIS feeds and satellite imagery, deployed across 50+ global ports with continuous real-time inference.",
    href: "https://github.com/mygit72",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1600&q=80&auto=format&fit=crop",
  },
  {
    slug: "brain-tumour-detector",
    title: "Brain Tumour Detector",
    category: "Healthcare AI",
    tagline: "Clinical-grade classification pipeline.",
    stack: ["Python", "Keras", "TensorFlow", "FastAPI"],
    metric: "98.4% accuracy · 0.96 F1",
    description:
      "Owned the full preprocessing → training → evaluation → inference pipeline. Data augmentation, class balancing, FastAPI inference endpoint, rigorous eval rubric across accuracy, F1, precision, recall.",
    href: "https://github.com/mygit72",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1600&q=80&auto=format&fit=crop",
  },
];

export type SkillGroup = {
  label: string;
  number: string;
  items: string[];
};

export const SKILLS: SkillGroup[] = [
  {
    number: "01",
    label: "LLMs & Generative AI",
    items: [
      "RAG Pipelines",
      "LangChain",
      "ChromaDB / Vector DBs",
      "Prompt Engineering",
      "LLM Evals & Harnesses",
      "Hybrid Search",
      "Agent Patterns",
      "OpenAI / Gemini APIs",
    ],
  },
  {
    number: "02",
    label: "ML Engineering",
    items: [
      "End-to-End Pipelines",
      "Model Debugging",
      "Optimisation",
      "Production Deployment",
      "Regression Testing",
      "Eval Rubrics",
    ],
  },
  {
    number: "03",
    label: "Backend & APIs",
    items: [
      "FastAPI",
      "REST API Design",
      "AI Model Integration",
      "LLMOps",
      "Structured Inference",
    ],
  },
  {
    number: "04",
    label: "Frameworks & Languages",
    items: [
      "Python",
      "SQL",
      "C++",
      "TensorFlow / Keras",
      "Scikit-Learn",
      "XGBoost",
      "Pandas / NumPy",
      "Git / GitHub",
    ],
  },
];

export type Certification = {
  title: string;
  issuer: string;
  date: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "LangChain for LLM Application Development",
    issuer: "DeepLearning.AI · Andrew Ng",
    date: "Mar 2026",
  },
  {
    title: "Deep Learning — Neural Networks with TensorFlow",
    issuer: "Packt · Coursera",
    date: "Dec 2025",
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM · Coursera",
    date: "Nov 2025",
  },
  {
    title: "Introduction to Artificial Intelligence (AI)",
    issuer: "IBM · Coursera",
    date: "Nov 2025",
  },
  {
    title: "Python for Data Science and AI",
    issuer: "IBM · Coursera",
    date: "Sept 2025",
  },
];

export const PROFILE = {
  name: "Vansh Mahendru",
  role: "ML / AI Engineer",
  location: "Sonipat, India",
  email: "vanshmahendru85@gmail.com",
  phone: "+91-8810599936",
  github: "https://github.com/mygit72",
  linkedin: "https://www.linkedin.com/in/vansh-mahendru-ba00bb142",
  university: "SRM University Sonipat",
  degree: "B.Tech, Computer Science & Engineering",
  graduation: "2023 — 2027",
  gpa: "7.8 / 10.0",
};
