export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  highlights: string[];
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  date: string;
  category: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    slug: "ada-local-llm-orchestrator",
    title: "Ada - Local LLM Orchestrator",
    description:
      "Built a cross-platform desktop assistant integrating local LLM inference, speech recognition, and context memory using Rust, Tauri, and Python.",
    fullDescription:
      "Ada is a cross-platform desktop assistant that brings AI capabilities to your local machine. Built with privacy and performance in mind, Ada runs entirely offline, processing voice commands through Whisper.cpp and generating responses using local LLM models via Ollama. The system features a Rust-based orchestrator that manages async system commands and a Tauri-based desktop interface for seamless user interaction.",
    technologies: [
      "Rust",
      "Tauri",
      "Python",
      "Whisper.cpp",
      "Ollama",
      "TypeScript",
    ],
    highlights: [
      "Offline-first voice pipeline with <200ms latency",
      "Rust-based orchestrator for async system commands",
      "Real-time context recall and keyboard automation",
      "Cross-platform support (Windows, macOS, Linux)",
      "Zero cloud dependencies for complete privacy",
    ],
    challenges: [
      "Managing real-time audio processing with minimal latency",
      "Coordinating multiple async operations across Rust and Python",
      "Implementing efficient context memory without performance degradation",
    ],
    solutions: [
      "Used Whisper.cpp for optimized C++ audio processing",
      "Designed a message-passing architecture between Rust orchestrator and Python services",
      "Implemented a sliding window context management system",
    ],
    results: [
      "Achieved <200ms end-to-end latency for voice commands",
      "Reduced memory footprint by 40% through efficient context management",
      "Enabled complete offline operation with no API costs",
    ],
    date: "2025-01",
    category: "AI Systems",
  },
  {
    id: 2,
    slug: "ratio-microlearning-platform",
    title: "Ratio - Microlearning Platform",
    description:
      "Architected a MEMORIA pipeline for ingestion → embeddings → spaced repetition, improving user retention by 30% through adaptive difficulty scoring.",
    fullDescription:
      "Ratio is a microlearning platform that combines spaced repetition with AI-powered content understanding. The MEMORIA pipeline processes educational content, generates embeddings for semantic search, and schedules review sessions based on forgetting curves. The OIKOS dashboard provides daily learning sessions with adaptive difficulty that adjusts based on user performance.",
    technologies: [
      "Next.js 15",
      "Supabase",
      "Node.js",
      "React",
      "RAG",
      "Embeddings",
    ],
    highlights: [
      "Hybrid RAG + recall scheduling engine",
      "Reduced retrieval friction by 40%",
      "Daily learning dashboard with adaptive difficulty",
      "Real-time spaced repetition algorithm",
      "Semantic search across learning materials",
    ],
    challenges: [
      "Balancing retrieval speed with embedding quality",
      "Implementing efficient spaced repetition scheduling",
      "Creating adaptive difficulty algorithms that scale",
    ],
    solutions: [
      "Built hybrid search combining keyword and semantic matching",
      "Designed a priority queue system for review scheduling",
      "Used reinforcement learning to optimize difficulty curves",
    ],
    results: [
      "Improved user retention by 30%",
      "Reduced retrieval time by 40%",
      "Increased daily active users by 25%",
    ],
    date: "2025-02",
    category: "EdTech",
  },
  {
    id: 3,
    slug: "cortex-ai-knowledge-os",
    title: "Cortex - AI Knowledge OS",
    description:
      "Built an AI workspace with knowledge graph engine, featuring <200ms latency embedding pipeline for semantic search and real-time context-aware responses.",
    fullDescription:
      "Cortex is an AI-powered workspace that transforms how teams interact with their knowledge base. The system builds a real-time knowledge graph from documents, conversations, and interactions, enabling semantic search and context-aware AI responses. The embedding pipeline processes content in real-time, maintaining sub-200ms latency even with large document sets.",
    technologies: [
      "Next.js 15",
      "Supabase",
      "Node.js",
      "Embeddings",
      "Knowledge Graphs",
      "Vector DB",
    ],
    highlights: [
      "<200ms latency embedding pipeline",
      "Real-time knowledge graph construction",
      "Context-aware response system",
      "Multi-modal content processing",
      "Collaborative knowledge sharing",
    ],
    challenges: [
      "Maintaining low latency with large-scale embedding operations",
      "Building efficient knowledge graph structures",
      "Ensuring real-time updates across distributed systems",
    ],
    solutions: [
      "Implemented batch processing with streaming updates",
      "Used graph database for efficient relationship queries",
      "Built event-driven architecture for real-time synchronization",
    ],
    results: [
      "Achieved <200ms average latency for search queries",
      "Processed 10K+ documents in real-time",
      "Improved search relevance by 45%",
    ],
    date: "2025-03",
    category: "Knowledge Management",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return CASE_STUDIES.sort((a, b) => {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
    return 0;
  });
}
