export interface PersonalProject {
  id: number;
  title: string;
  description: string;
  techStack: string[];

  githubLink: string;
  liveLink?: string;

  // NEW: portfolio conversion fields
  featured: boolean;          // show top 3 first
  role: string;               // "Solo build" etc.
  highlights: string[];        // 2–4 bullets max
  metrics?: string[];          // optional but strong
}

export const PERSONAL_PROJECTS: PersonalProject[] = [
  {
  id: 1,
  title: "OpsHub API (Production-grade CRUD + Auth + RBAC)",
  description:
    "A production-ready REST API with authentication, role-based access control, logging, and pagination built for real-world usage patterns.",
  techStack: [
    "TypeScript",
    "Node.js",
    "Express",
    "PostgreSQL",
    "JWT",
    "Docker",
  ],
  githubLink: "https://github.com/Engineernoob/production-api", // update if needed
  featured: true,
  role: "Solo build",
  highlights: [
    "Implemented JWT authentication with secure refresh token flow",
    "Designed role-based access control (RBAC) middleware",
    "Built paginated and filtered endpoints with proper indexing",
    "Structured logging + centralized error handling",
  ],
  metrics: ["RESTful API", "Dockerized", "Production-ready"],
},
  {
    id: 2,
    title: "AJNN — AI-Powered Job Matching",
    description:
      "Job matching platform that scores candidates to roles using ML-based signals from skills and experience.",
    techStack: ["Python", "TensorFlow", "Node.js", "Firebase"],
    githubLink: "https://github.com/Engineernoob/ajnn",
    liveLink: "https://ajnn.vercel.app",
    featured: true,
    role: "Solo build",
    highlights: [
      "Built candidate-to-job scoring pipeline using TensorFlow",
      "Created API + frontend workflow for match exploration",
      "Deployed a production demo with authentication-ready structure",
    ],
  },
  {
    id: 3,
    title: "Ratio — Microlearning & Memory Engine",
    description:
      "Learning platform focused on short lessons, retention, and review workflows using a modern full stack.",
    techStack: ["Next.js", "React", "Supabase", "Node.js"],
    githubLink: "https://github.com/Engineernoob/ratio",
    liveLink: "https://ratio.vercel.app",
    featured: true,
    role: "Solo build",
    highlights: [
      "Implemented lesson + review flows with a clean data model",
      "Built a responsive UI and integrated auth-ready backend patterns",
      "Deployed to production with scalable storage + DB",
    ],
  },

  // Optional: keep this slot for the next “hire-me” project you build
  // (auth + RBAC + tests + logging CRUD API). Right now you have a duplicate here,
  // so we’re removing it instead of hurting your credibility.
];