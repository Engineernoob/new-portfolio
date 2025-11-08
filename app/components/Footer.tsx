import Link from "next/link";
import { SOCIAL_LINKS } from "../data/socials";

export function Footer() {
  return (
    // Set the ID for the navigation link (#connect)
    <footer id="connect" className="py-16 lg:py-24 max-w-7xl mx-auto px-4">
      {/* Main Connect Area - Central Call to Action */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Let&apos;s Build Something Great.
        </h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          I am currently available for new opportunities and collaborations.
          Feel free to reach out to me via any of the platforms below.
        </p>

        {/* Social Icons/Links */}
        <div className="flex justify-center space-x-6">
          {SOCIAL_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Connect on ${link.name}`}
                // Icon styling: large, hover effect using the accent color
                className="text-gray-400 hover:text-accent-dark transition-colors duration-300"
              >
                <Icon className="w-8 h-8" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Footer Divider and Copyright */}
      <div className="border-t border-gray-700/50 pt-8 text-center">
        <p className="text-sm text-gray-500">
          Built with Next.js and Tailwind CSS.
          <br />
          &copy; {new Date().getFullYear()} Taahirah Denmark. All rights
          reserved.
        </p>
        <div className="mt-2 text-xs text-gray-600">
          {/* Subtle link back to the top */}
          <Link href="#" className="hover:text-accent-dark transition-colors">
            Back to Top
          </Link>
        </div>
      </div>
    </footer>
  );
}
