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
    title: "Origin : Youtube but better",
    description:
      "A cross-platform desktop application extending my work on Ada, utilizing Tauri and Rust to manage local language model (LLM) inference and route complex system commands via a secure, local API.",
    techStack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Lucide React",
      "NextAuth",
      "Supabase",
      "Vercel",
      "Docker",
      "TypeScript",
    ],
    githubLink: "https://github.com/Engineernoob/origin",
  },
  {
    id: 2,
    title: "Adaptive Job Neural Network (AJNN)",
    description:
      "A job matching platform that uses a neural network to match users to jobs based on their skills and experience.",
    techStack: ["Python", "TensorFlow", "Node.js", "Firebase"],
    githubLink: "https://github.com/Engineernoob/ajnn",
    liveLink: "https://ajnn.vercel.app",
  },
  {
    id: 3,
    title: "Ratio",
    description: "A microlearning + memory engine platform.",
    techStack: ["Next.js", "Supabase", "Node.js", "React"],
    githubLink: "https://github.com/Engineernoob/ratio",
    liveLink: "https://ratio.vercel.app",
  },
  {
    id: 4,
    title: "AI-Powered Career Matching Platform",
    description:
      "A job matching platform that uses a neural network to match users to jobs based on their skills and experience.",
    techStack: ["Python", "TensorFlow", "Node.js", "Firebase"],
    githubLink:
      "https://github.com/Engineernoob/ai-powered-career-matching-platform",
    liveLink: "https://ai-powered-career-matching-platform.vercel.app",
  },
];
