import { NewLayout } from "./components/NewLayout";
import { ExperienceSection } from "./components/ExperienceSection";
import { SkillsSection } from "./components/SkillSection";
import { PersonalProjectsSection } from "./components/PersonalProjectsSection";
import { GitHubGraph } from "./components/GitHubGraph";
import { Footer } from "./components/Footer";

// NOTE: We don't need HeroSection anymore, the intro is in the Sidebar.
// The AboutSection needs to be simplified to match the content style.

const AboutSection = () => (
  <section id="about" className="mb-16">
    <h2 className="text-3xl font-bold text-accent-dark mb-6 border-b-2 pb-2 border-gray-200 dark:border-gray-800">
      About Me
    </h2>
    <div className="text-lg text-gray-700 dark:text-gray-300 space-y-4">
      <p>
        A dedicated **AI Systems Engineer** and Full Stack Developer, I
        specialize in building, optimizing, and deploying complex, real-time
        machine learning applications, from local LLM orchestrators to
        large-scale data pipelines. My focus is on creating scalable, efficient,
        and user-friendly systems.
      </p>
      <p>
        I hold a Bachelor of Science in Computer Science from Lewis University.
        I&apos;m currently seeking roles that challenge me to integrate
        high-performance web development with cutting-edge machine learning.
      </p>
      {/* Add the Education section here to fill out the About content */}
      <h3 className="text-xl font-semibold mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
        Education
      </h3>
      <p className="font-medium">
        Lewis University - Bachelors of Science, Computer Science
      </p>
    </div>
  </section>
);

export default function Home() {
  return (
    <NewLayout>
      <AboutSection />
      <ExperienceSection />{" "}
      {/* Renamed to 'Experience & Projects' in its component */}
      <PersonalProjectsSection />
      <SkillsSection /> {/* Renamed to 'Technical Skills' in its component */}
      <GitHubGraph />
      {/* The Footer can be a simplified connect section */}
      {/* We'll use the existing Footer but rename the ID to #connect */}
      <Footer />
    </NewLayout>
  );
}
