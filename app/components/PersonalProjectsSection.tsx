import { PERSONAL_PROJECTS } from "../data/projects";
import { ExternalLink, Github } from "lucide-react";

export function PersonalProjectsSection() {
  return (
    <section id="personal-projects" className="mb-16">
      <h2 className="text-3xl font-bold text-accent-dark mb-6 border-b-2 pb-2 border-gray-200 dark:border-gray-800">
        Personal Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PERSONAL_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-accent-dark/10 text-accent-dark"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex space-x-4 pt-2 border-t border-gray-200 dark:border-gray-700">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-500 hover:text-accent-dark transition-colors text-sm"
              >
                <Github className="w-4 h-4 mr-1" /> Code
              </a>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-500 hover:text-accent-dark transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
