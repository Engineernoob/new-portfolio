import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ElementType;
}

// Data extracted from the Taahirah Denmark resume
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Email",
    href: "mailto:taahirah.engineer@proton.me",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/taahirah-denmark-4b1441196",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/Engineernoob",
    icon: Github,
  },
  // You can add more, e.g., for Twitter, a personal blog, etc.
];
