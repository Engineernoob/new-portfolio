import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

// Define the navigation items
const navItems = [
  // Keeping Blogs/About/Connect from the original site's design
  { name: "Blogs", href: "#blogs" }, // Placeholder for a future blog section
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" }, // Using 'Projects' as a more fitting title for the resume entries
  { name: "Stack", href: "#stack" },
  { name: "Connect", href: "#connect" },
];

export function Header() {
  return (
    // Fixed header with a subtle background and border to separate it from the content
    <header className="sticky top-0 z-50 bg-primary-bg/90 backdrop-blur-sm border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white hover:text-accent-dark transition-colors">
              Taahirah Denmark
            </span>
          </Link>

          {/* Navigation Links and Theme Toggle */}
          <nav className="flex items-center space-x-6">
            <ul className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  {/* Using standard anchor tags for smooth scrolling to sections */}
                  <a
                    href={item.href}
                    className="text-sm font-medium text-gray-300 hover:text-accent-dark transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Theme Switcher */}
            <ThemeSwitcher />

            {/* TODO: Add a mobile menu button here for responsiveness */}
          </nav>
        </div>
      </div>
    </header>
  );
}
