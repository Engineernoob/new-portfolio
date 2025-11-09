export interface PersonalProject {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string; // Optional live demo
}

// These are placeholders for personal/side projects, designed to complement the resume's skills.
export const PERSONAL_PROJECTS: PersonalProject[] = [
  {
    id: 1,
    title: "Local LLM Chat & Automation Desktop App",
    description:
      "A cross-platform desktop application extending my work on Ada, utilizing Tauri and Rust to manage local language model (LLM) inference and route complex system commands via a secure, local API.",
    techStack: ["Tauri", "Rust", "TypeScript", "Ollama", "WebSockets", "React"],
    githubLink: "https://github.com/Engineernoob/tauri-llm-automation",
    liveLink: undefined, // Desktop App, no live link
  },
  {
    id: 2,
    title: "Scalable E-commerce API in Go",
    description:
      "A personal project to master back-end performance. Developed a high-performance REST API for an e-commerce platform using Go, PostgreSQL, and Docker. Implements clean architecture and microservices principles.",
    techStack: ["Go", "PostgreSQL", "Docker", "Clean Architecture", "Redis"],
    githubLink: "https://github.com/Engineernoob/go-scalable-ecommerce",
    liveLink: undefined,
  },
  {
    id: 3,
    title: "Explainable AI Feature Dashboard",
    description:
      "A dedicated React application demonstrating explainable AI (XAI) features using a simulated model. It visualizes feature importance (SHAP values) to build user trust in ML-driven recommendations (a conceptual extension of work on AJNN).",
    techStack: ["React", "D3.js", "Python/Flask", "Scikit-learn", "SHAP"],
    githubLink: "https://github.com/Engineernoob/xai-feature-dashboard",
    liveLink: "https://xai-dashboard-demo.vercel.app",
  },
];
