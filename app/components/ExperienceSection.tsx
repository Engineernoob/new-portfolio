// All code from the previous ExperienceSection is moved here,
// only the component name and the ID are changed.

import { EXPERIENCE_DATA } from "../data/experience";
import { ExperienceCard } from "./ExperienceCard"; // Keep the card name

export function ExperienceSection() {
  return (
    // Updated ID to match the navigation link
    <section id="projects" className="py-16 lg:py-24 max-w-7xl mx-auto px-4">
      {/* Updated Section Title */}
      <h2 className="text-4xl font-bold text-white mb-10 border-b-4 border-accent-dark inline-block pb-1">
        Experience & Projects
      </h2>

      {/* Grid Layout for Cards (now containing the resume data) */}
      <div className="grid grid-cols-1 gap-8">
        {EXPERIENCE_DATA.map((job) => (
          <ExperienceCard key={job.id} experience={job} />
        ))}
      </div>
    </section>
  );
}
