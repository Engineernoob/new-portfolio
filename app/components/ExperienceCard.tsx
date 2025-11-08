import { JobExperience } from "../data/experience";
import React from "react";

// Helper function to dangerously set HTML for the bolded keywords from the resume
const renderHtml = (html: string) => {
  // Basic regex replacement for **text** to <strong>text</strong>
  const boldedHtml = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  return <span dangerouslySetInnerHTML={{ __html: boldedHtml }} />;
};

export function ExperienceCard({ experience }: { experience: JobExperience }) {
  return (
    // Card container
    <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-colors duration-300 shadow-lg border border-gray-700/50">
      {/* Title and Period (Aligned similar to the resume with date on the right) */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-white">
          {experience.title}{" "}
          <span className="text-accent-dark">| {experience.context}</span>
        </h3>
        <p className="text-sm text-gray-400 font-mono shrink-0">
          {experience.period}
        </p>
      </div>

      {/* Subtitle/Tech Stack Line */}
      <p className="text-md italic text-gray-400 mb-4">{experience.subTitle}</p>

      {/* Responsibilities List */}
      <ul className="space-y-3 list-disc pl-5 text-gray-300">
        {experience.responsibilities.map((resp, index) => (
          <li key={index} className="text-base leading-relaxed">
            {/* Use the helper to bold the keywords */}
            {renderHtml(resp)}
          </li>
        ))}
      </ul>
    </div>
  );
}
