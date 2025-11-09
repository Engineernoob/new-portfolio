"use client";

import Image from "next/image";

// The GitHub username from the resume
const GITHUB_USERNAME = "Engineernoob";

// The fully customized URL for the dynamic SVG graph
const GRAPH_URL = `https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=dark&hide_border=true`;

export function GitHubGraph() {
  return (
    <section id="github" className="py-16 lg:py-24 max-w-7xl mx-auto px-4">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-white mb-10 border-b-4 border-accent-dark inline-block pb-1">
        GitHub Streak Stats
      </h2>

      {/* The main container for the graph */}
      <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 shadow-lg flex justify-center">
        <Image
          src={GRAPH_URL}
          alt={`${GITHUB_USERNAME}'s GitHub Streak Stats`}
          width={600}
          height={200}
          // CRITICAL FIX: Add unoptimized={true} for external SVGs
          unoptimized={true}
          // These classes keep it responsive but centered
          className="w-full max-w-xl h-auto"
          sizes="(max-width: 640px) 100vw, 600px"
          priority={false}
        />

        {/* Link to GitHub profile for credibility */}
        <div className="text-center mt-4">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-accent-dark transition-colors"
          >
            View full profile on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
