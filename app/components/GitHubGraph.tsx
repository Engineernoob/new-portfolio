import Image from "next/image";

// The GitHub username from the resume
const GITHUB_USERNAME = "Engineernoob";

// The fully customized URL for the dynamic SVG graph
const GRAPH_URL = `https://github-readme-stats.vercel.app/api/activities?username=${GITHUB_USERNAME}&theme=transparent&title_color=06b6d4&icon_color=06b6d4&text_color=ffffff&hide_border=true&border_radius=10&show_icons=true`;

export function GitHubGraph() {
  return (
    <section id="github" className="py-16 lg:py-24 max-w-7xl mx-auto px-4">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-white mb-10 border-b-4 border-accent-dark inline-block pb-1">
        GitHub Activity
      </h2>

      {/* The main container for the graph */}
      <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 shadow-lg">
        {/*
          The dynamic SVG is embedded here. 
          We use a block style and a large width to make it responsive and fit the design.
        */}
        <Image
          src={GRAPH_URL}
          alt={`${GITHUB_USERNAME}'s GitHub Contribution Graph`}
          className="w-full h-auto"
          loading="lazy"
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
