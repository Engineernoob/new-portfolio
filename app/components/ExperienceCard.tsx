"use client"; // <-- MUST be a client component for useState

import React, { useState } from "react"; // Import useState
import { JobExperience } from "../data/experience";
import { ChevronDown, ChevronUp } from "lucide-react";

// Helper function to render HTML (remains the same)
const renderHtml = (html: string) => {
  const boldedHtml = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  return <span dangerouslySetInnerHTML={{ __html: boldedHtml }} />;
};

export function ExperienceCard({ experience }: { experience: JobExperience }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine which list items to show (e.g., first 1-2 initially)
  const visibleResponsibilities = isExpanded
    ? experience.responsibilities
    : experience.responsibilities.slice(0, 1); // Show only the first point when collapsed

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-colors duration-300 border border-gray-200 dark:border-gray-700/50">
      {/* Title and Period (remains the same) */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {experience.title}{" "}
          <span className="text-accent-dark">| {experience.context}</span>
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-mono shrink-0">
          {experience.period}
        </p>
      </div>

      {/* Subtitle/Tech Stack Line (remains the same) */}
      <p className="text-md italic text-gray-500 dark:text-gray-400 mb-4">
        {experience.subTitle}
      </p>

      {/* Responsibilities List */}
      <ul className="space-y-3 list-disc pl-5 text-gray-700 dark:text-gray-300 transition-all duration-300 overflow-hidden">
        {visibleResponsibilities.map((resp, index) => (
          // We only need the key if we're showing all, but keep it for stability
          <li key={index} className="text-base leading-relaxed">
            {renderHtml(resp)}
          </li>
        ))}
      </ul>

      {/* Expansion Button */}
      {experience.responsibilities.length > 1 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center text-sm font-semibold text-accent-dark hover:text-accent-dark/80 transition-colors"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp className="w-4 h-4 ml-1" />
            </>
          ) : (
            <>
              Show More ({experience.responsibilities.length - 1} points){" "}
              <ChevronDown className="w-4 h-4 ml-1" />
            </>
          )}
        </button>
      )}
    </div>
  );
}
