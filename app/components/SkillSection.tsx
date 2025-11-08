import { SKILLS_DATA } from "../data/skills";
import { Terminal } from "lucide-react"; // Icon for visual flair

export function SkillsSection() {
  return (
    <section id="stack" className="py-16 lg:py-24 max-w-7xl mx-auto px-4">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-white mb-10 border-b-4 border-accent-dark inline-block pb-1">
        Technical Skills
      </h2>

      {/* Grid for Skills Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {SKILLS_DATA.map((item) => (
          <div key={item.category} className="space-y-2">
            {/* Category Title */}
            <h3 className="flex items-center text-xl font-semibold text-accent-dark mb-2">
              <Terminal className="w-5 h-5 mr-2" />
              {item.category}
            </h3>

            {/* Skills List - Using a subtle gray background for visual separation */}
            <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
              <p className="text-gray-300 leading-relaxed">{item.skills}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
