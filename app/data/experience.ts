export interface JobExperience {
  id: number;
  title: string;
  context: string; // The role/company line in the resume (e.g., Startup Company | Next.js)
  period: string;
  subTitle: string; // The supporting context line (e.g., AI-Powered Career Matching Platform)
  responsibilities: string[];
}

// Data extracted from the Taahirah Denmark resume
export const EXPERIENCE_DATA: JobExperience[] = [
  {
    id: 1,
    title: "Software Engineer Intern",
    context: "Series",
    period: "Sep 2024 – Mar 2025",
    subTitle:
      "Software Engineer Intern | Startup Company | Full-Stack Development | Next.js | Node.js | PostgreSQL | TypeScript",
    responsibilities: [
      "Increased user engagement **30%** by implementing AI-powered NLP recommendations for 1,500+ active users.",
      "Scaled Node.js/Python backend to handle **10K+ daily API calls** with <200ms latency.",
      "Reduced Firebase query response times **20%**, improving real-time data reliability.",
      "Authored documentation that cut new engineer onboarding time **50%**.",
    ],
  },
  {
    id: 2,
    title: "Software Engineer",
    context: "Adaptive Job Neural Network (AJNN)",
    period: "2025",
    subTitle:
      "AI-Powered Career Matching Platform | Python | TensorFlow | Node.js | Firebase",
    responsibilities: [
      "Delivered **92% accurate** job matching across **20K+ profiles**, improving candidate-role fit.",
      "Built real-time Node.js + Firebase recommendation pipeline serving **5K+ users** with <300ms latency.",
      "Integrated explainable AI features, raising user trust and satisfaction **35%**.",
      "Reduced model training time **40%** using GPU acceleration and optimized batch processing.",
    ],
  },
  {
    id: 3,
    title: "Software Engineer",
    context: "Cortex (AI Knowledge OS)",
    period: "2025",
    subTitle:
      "AI Workspace & Knowledge Graph Engine | Next.js 15 | Supabase | Node.js | Embeddings",
    responsibilities: [
      "Built **<200ms latency** embedding pipeline for semantic search and knowledge graph construction.",
      "Developed Node.js backend for real-time context-aware responses and knowledge graph updates.",
      "Created Next.js frontend with React and Tailwind CSS for user interface and interaction.",
    ],
  },
  {
    id: 4,
    title: "AI Systems Engineer",
    context: "Ada",
    period: "Jan 2025 – Jun 2025",
    subTitle:
      "Personal AI Assistant & Local LLM Orchestrator | Rust | Python | Whisper.cpp | Ollama | Tauri | TypeScript",
    responsibilities: [
      "Engineered a cross-platform desktop assistant integrating **local LLM inference**, **speech recognition**, and **context memory**.",
      "Designed offline-first voice pipeline using Whisper.cpp for transcription and Ollama for model reasoning.",
      "Implemented **Rust-based orchestrator** to route async system commands via local APIs.",
      "Built **Tauri desktop interface** with real-time context recall and keyboard automation.",
      "Developed Ada CLI for terminal-based agent control, enabling local automation without cloud APIs.",
    ],
  },
  {
    id: 5,
    title: "Software Engineer",
    context: "Ratio",
    period: "2025",
    subTitle:
      "Microlearning + Memory Engine Platform | Next.js 15 | Supabase | Node.js | React",
    responsibilities: [
      "Architected ingestion → embeddings → spaced repetition pipeline (MEMORIA).", // RAG pipeline
      "Built OIKOS daily learning dashboard integrating lectures, micro-lessons, and reasoning drills.", // Daily learning dashboard
      "Implemented adaptive difficulty scoring using reinforcement learning, improving user retention **30%**.", // Reinforcement learning
      "Reduced retrieval friction **40%** via hybrid RAG + recall scheduling engine.", // Hybrid RAG + recall scheduling engine
    ],
  },
  {
    id: 6,
    title: "Operations Systems Engineer",
    context: "Glass Light Hotel",
    period: "Jul 2021 – Jun 2024",
    subTitle: "Operations Systems Engineer | Glass Light Hotel",
    responsibilities: [
      "Reduced service delivery latency **20%** through process automation and workflow optimization.",
      "Developed adaptive procedures ensuring **100% compliance** with dietary and safety requirements.",
      "Created an internal order management system improving guest satisfaction **35%**.",
      "Managed **50+ daily high-volume tasks** while maintaining consistent operational quality.",
    ],
  },
];
