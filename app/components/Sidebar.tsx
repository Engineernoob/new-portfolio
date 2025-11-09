"use client";

import { User, Briefcase, Code, Mail, Github, Linkedin, Book } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher"; // Reuse the existing theme switcher
import Image from "next/image";

const navItems = [
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#projects", icon: Book },
  { name: 'Personal Projects', href: '#personal-projects', icon: Briefcase },
  { name: "Skills", href: "#stack", icon: Code },
  { name: "Connect", href: "#connect", icon: Mail },
];

export function Sidebar() {
  return (
    <div className="flex flex-col h-full sticky top-0">
      {/* Avatar and Name */}
      <div className="flex flex-col items-center pb-6 border-b border-gray-200 dark:border-gray-800">
        <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-accent-dark">
          {/* Placeholder for an Avatar Image */}
          <Image
            src="/profile.png" // You will need to add an avatar image here
            alt="Taahirah Denmark"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <h1 className="text-2xl font-bold">Taahirah Denmark</h1>
        <p className="text-md text-gray-500 dark:text-gray-400">
          AI Systems Engineer
        </p>
      </div>

      <nav className="flex flex-col space-y-2 py-6 border-b border-gray-200 dark:border-gray-800">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center space-x-3 p-2 rounded-lg 
                   text-gray-600 dark:text-gray-300 
                   hover:bg-accent-dark/10 hover:text-accent-dark 
                   transition-all duration-300 ease-in-out // <-- ADD utility
                   hover:translate-x-1 // <-- ADD subtle movement on hover
                   focus:ring-2 focus:ring-accent-dark focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </a>
          );
        })}
      </nav>

      {/* Social Links and Theme Toggle */}
      <div className="flex justify-between items-center pt-6">
        <div className="flex space-x-4">
          {/* Reuse the social links from the Footer data */}
          <a
            href="https://github.com/Engineernoob"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent-dark"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/taahirah-denmark-4b1441196"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent-dark"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:taahirah.engineer@proton.me"
            className="text-gray-500 hover:text-accent-dark"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
