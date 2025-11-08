import { Header } from "./components/Header";
import { HeroSection } from "./components/Hero";
import { ProjectsSection } from "./components/ProjectSection";
import { SkillsSection } from "./components/SkillSection";
import { GitHubGraph } from "./components/GitHubGraph";
import { Footer } from "./components/Footer"; // Import the new Footer component

// Simple placeholder for the About section (ID #about) - remains the same
const AboutSection = () => (
  // ... (AboutSection code from step 19)
  <section id="about" className="py-16 lg:py-24 max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-white mb-10 border-b-4 border-accent-dark inline-block pb-1">
      About Me
    </h2>
    <div className="text-lg text-gray-300 space-y-4 max-w-3xl">
      <p>
        I am a highly motivated AI Systems Engineer and Full Stack Developer. My
        passion lies in building and scaling complex applications, leveraging
        modern frameworks like Next.js and specialized tools for AI/ML. My
        experience is centered around delivering measurable results, from
        optimizing backend performance to deploying cross-platform desktop
        assistants.
      </p>
      <p>
        I hold a Bachelor of Science in Computer Science from Lewis University,
        where I built a strong foundation in algorithms, data structures, and
        system design. Currently, I&apos;m focused on contributing to projects
        that sit at the intersection of high-performance web development and
        cutting-edge machine learning.
      </p>
    </div>
  </section>
);

export default function Home() {
  return (
    <main>
      <Header />

      <div className="mt-8">
        <HeroSection />

        <AboutSection />

        <ProjectsSection />

        <SkillsSection />

        <GitHubGraph />
      </div>

      {/* 6. Footer/Connect section */}
      <Footer />
    </main>
  );
}
