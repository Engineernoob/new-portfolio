export interface SkillCategory {
  category: string;
  skills: string;
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Core",
    skills: "TypeScript, JavaScript, Python, SQL",
  },
  {
    category: "Frontend",
    skills: "React, Next.js, Tailwind CSS, HTML, CSS, shadcn/ui",
  },
  {
    category: "Backend",
    skills: "Node.js, Express, FastAPI, REST APIs, Auth (JWT/session), Webhooks",
  },
  {
    category: "Data",
    skills: "PostgreSQL, MongoDB, Redis, Supabase",
  },
  {
    category: "AI Tooling",
    skills: "Embeddings, Semantic Search, Prompt Evaluation, TensorFlow (basic), Hugging Face (basic)",
  },
  {
    category: "Infra",
    skills: "Docker, Git, GitHub Actions, CI/CD",
  },
];