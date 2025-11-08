export interface SkillCategory {
  category: string;
  skills: string;
}

// Data extracted from the Technical Skills section of the resume
export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Front End",
    skills:
      "React, NextJS, Javascript, TypeScript, NodeJS, CSS, HTML, ShadCN, Bootstrap",
  },
  {
    category: "Back End",
    skills: "Node.js, Express.js, Rust, Go, Ruby, Flask, Python",
  },
  {
    category: "AI/ML",
    skills:
      "TensorFlow, PyTorch, Keras, Scikit-learn, Natural Language Processing (NLP), Hugging Face Transformers, Generative AI, Reinforcement Learning, Advanced Algorithms & Optimization",
  },
  {
    category: "Cloud & Infrastructure",
    skills: "Docker, Kubernetes, Qdrant, Supabase, Graphviz, GitHub Actions",
  },
];
