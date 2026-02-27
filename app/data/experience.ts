export interface JobExperience {
  id: number;
  title: string;
  context: string; // Company / org
  period: string;
  subTitle: string; // Stack or scope
  responsibilities: string[];
}

export const EXPERIENCE_DATA: JobExperience[] = [
  {
    id: 1,
    title: "Software Engineer Intern",
    context: "Series",
    period: "July 2024 – July 2025",
    subTitle: "Full Stack • Next.js • Node.js • PostgreSQL • TypeScript",
    responsibilities: [
      "Increased user engagement **30%** by shipping AI-powered NLP recommendations for **1,500+** active users.",
      "Scaled Node.js/Python backend to handle **10K+ daily API calls** with **<200ms** latency.",
      "Reduced Firebase query response times **20%** by optimizing access patterns and caching hot reads.",
      "Authored onboarding + runbook documentation that cut new engineer ramp time **50%**.",
    ],
  },
  {
    id: 2,
    title: "Information Technology Trainee",
    context: "Year Up – National Capital Region",
    period: "Mar 2016 – Mar 2017",
    subTitle:
      "IT Fundamentals • Business Operations • Professional Development",
    responsibilities: [
      "Completed an intensive one-year IT training program combining technical coursework with corporate internship preparation.",
      "Focused on desktop support, software development fundamentals, and business operations workflows.",
      "Earned 22–28 transferable college credits through ACE CREDIT.",
      "Completed coursework in computer applications, business writing, public speaking, and career development.",
    ],
  },
  {
    id: 3,
    title: "Breakfast Cook",
    context: "Glass Light Hotel",
    period: "Jul 2021 – Jun 2024",
    subTitle:
      "High-Volume Service • Process Optimization • Guest-Facing Operations",
    responsibilities: [
      "Managed high-volume breakfast service in an open-kitchen environment, maintaining speed and quality under peak demand.",
      "Reduced service delays by standardizing prep workflows and optimizing station organization.",
      "Handled direct guest interaction daily, resolving issues in real-time and maintaining high satisfaction scores.",
      "Maintained strict food safety and compliance standards with consistent execution across 4 years.",
    ],
  },
  {
    id: 4,
    title:
      "Culinary Operations (Garde Manger, Sauté Chef, Pastry Prep, Line Cook)",
    context: "Harbor's Edge • Bonchon • Island View Casino • Fatsumo Sushi",
    period: "2019 – 2024",
    subTitle:
      "High-Volume Production • Inventory Control • Process Discipline • Guest-Facing Service",
    responsibilities: [
      "Executed high-volume service in fast-paced kitchens, producing 100+ dishes per shift with strict quality and timing standards.",
      "Controlled food costs through portion oversight, stock rotation, and waste inspection across multiple establishments.",
      "Maintained compliance with sanitation and safety standards in regulated food-handling environments.",
      "Managed prep, plating, and station readiness during peak rush periods while maintaining consistency and presentation quality.",
      "Processed inventory shipments, rotated stock, and reduced spoilage through disciplined storage protocols.",
      "Worked directly in open-kitchen environments, handling real-time customer interaction and issue resolution.",
    ],
  },
];
