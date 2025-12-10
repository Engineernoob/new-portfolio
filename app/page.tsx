"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Download, FileText } from "lucide-react";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { EXPERIENCE_DATA } from "./data/experience";
import { SOCIAL_LINKS } from "./data/socials";
import { PERSONAL_PROJECTS } from "./data/projects";
import { SKILLS_DATA } from "./data/skills";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const accentColor = "#0aff99";
const navLinks = [
  { label: "proof-of-work", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "blogs", href: "/blog" },
  { label: "art", href: "#art" },
];

const heroSocials = SOCIAL_LINKS;
const HERO_IMAGE_URL =
  "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg";
const stackTechnologies = [
  "JavaScript",
  "TypeScript",
  "Java",
  "Python",
  "SQL",
  "React.js",
  "Next.js",
  "Express.js",
  "Node.js",
  "FastAPI",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Git",
  "Docker",
  "Azure",
  "AWS",
  "Google Cloud",
];
const PROFILE_IMAGE_POSITION = "50% 38%";

const ABOUT_PARAGRAPHS = [
  "I'm someone who loves exploring ideas through code, design, and whatever medium feels right that day. I spend most of my time building things that make life a bit simpler or spark curiosity, often blending structure with imagination.",
  "Outside of work, I'm a part-time artist and a full-time cinephile and audiophile. I enjoy stories in all forms, whether that's film, sound, or the small experiments that keep me inspired.",
];

const AVAILABILITY_TEXT =
  "Currently open to part‑time and contract roles. The kind that let me dive deep into interesting systems, build creative tools, or collaborate on experimental ideas.";

const GITHUB_USERNAME = "Engineernoob";
const GITHUB_CHART_URL = `https://ghchart.rshah.org/0aff99/${GITHUB_USERNAME}`;

const cardClass =
  "rounded-3xl border border-white/10 bg-[#0b0b0b]/80 shadow-[0_25px_80px_rgba(0,0,0,0.5)] backdrop-blur-sm";

const stripBold = (text: string) => text.replace(/\*\*/g, "");

const contributions = EXPERIENCE_DATA.map((experience) => ({
  title: `At ${experience.context},`,
  body: experience.responsibilities.slice(0, 2).map(stripBold).join(" "),
}));

const getInitials = (value: string) =>
  value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-gray-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-20 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.04)_12px,rgba(255,255,255,0)_12px,rgba(255,255,255,0)_24px)] opacity-30" />
      <div className="absolute inset-y-0 right-0 w-20 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.04)_12px,rgba(255,255,255,0)_12px,rgba(255,255,255,0)_24px)] opacity-30" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-8 pb-24">
        <NavBar />
        <motion.div {...fadeInUp}>
          <HeroBanner />
        </motion.div>
        <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
          <ProfileCard />
        </motion.div>
        <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
          <ExperienceSection />
        </motion.div>
        <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
          <ProjectsSection />
        </motion.div>
        <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
          <ContributionsSection />
        </motion.div>
        <motion.div {...fadeInUp} transition={{ delay: 0.5 }}>
          <GitHubSection />
        </motion.div>
        <motion.div {...fadeInUp} transition={{ delay: 0.6 }}>
          <StackSection />
        </motion.div>
        <motion.div {...fadeInUp} transition={{ delay: 0.7 }}>
          <CtaSection />
        </motion.div>
        <motion.div {...fadeInUp} transition={{ delay: 0.8 }}>
          <FooterSection />
        </motion.div>
      </div>
    </div>
  );
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`sticky top-0 z-50 flex flex-col gap-4 md:flex-row md:items-center md:justify-between py-8 text-sm text-gray-300 transition-all duration-300 ${
        scrolled ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/5" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <Link href="/" className="text-lg font-semibold text-white hover:text-[#0aff99] transition-colors">
          Taahirah
        </Link>
      </div>
      <div className="flex flex-wrap items-center gap-6">
        {navLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="hover:text-white transition-colors duration-200 relative group"
            aria-label={item.label}
          >
            {item.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0aff99] group-hover:w-full transition-all duration-300" />
          </Link>
        ))}
        <ThemeSwitcher />
      </div>
    </motion.nav>
  );
}

function HeroBanner() {
  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
      <Image
        src={HERO_IMAGE_URL}
        alt="Taahirah Denmark hero"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="relative flex h-full w-full flex-col justify-center items-center p-10">
        <h1 className="text-center text-4xl md:text-5xl font-light italic leading-snug text-white">
          Thoughts, pixels, and everything in between
        </h1>
      </div>
    </div>
  );
}

function ProfileCard() {
  return (
    <section
      className={`${cardClass} -mt-20 p-8 md:-mt-24 md:p-10`}
      aria-labelledby="profile-heading"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="relative h-32 w-32 shrink-0 rounded-full border-4 border-[#050505] bg-white/5 -mt-16 md:-mt-20">
            <Image
              src="/profile.png"
              alt="Taahirah Denmark"
              width={170}
              height={160}
              className="h-full w-full rounded-full object-cover"
              style={{ objectPosition: PROFILE_IMAGE_POSITION }}
              priority
            />
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <h2
                id="profile-heading"
                className="text-4xl md:text-5xl font-semibold text-white"
              >
                Taahirah Denmark
              </h2>
              <p className="mt-2 text-lg text-gray-400">
                21 • ideas • systems • stories
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {heroSocials.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-400 transition hover:border-[#0aff99] hover:text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
              <motion.a
                href="/resume.pdf"
                download
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-400 transition hover:border-[#0aff99] hover:text-white"
                aria-label="Download Resume"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Download Resume"
              >
                <Download className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-300">
          {ABOUT_PARAGRAPHS.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p className="text-gray-400 italic">{AVAILABILITY_TEXT}</p>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className={`${cardClass} mt-10 p-8 md:p-10`}>
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
        Professional Experience
      </h2>
      <div className="mt-8 space-y-8">
        {EXPERIENCE_DATA.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col gap-4 pb-6 border-b border-white/5 last:border-0"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white/80 shrink-0">
                {getInitials(experience.context)}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {experience.context}
                </h3>
                <p className="text-base text-gray-300 mb-1">
                  {experience.title}
                </p>
                <p className="text-sm text-gray-500 mb-3">{experience.period}</p>
                {experience.responsibilities.length > 0 && (
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-400 ml-4">
                    {experience.responsibilities.slice(0, 2).map((resp, idx) => (
                      <li key={idx}>{stripBold(resp)}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className={`${cardClass} mt-10 p-8 md:p-10`}>
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">
        Projects
      </h2>
      <p className="text-base text-gray-400 mb-8">
        Personal projects and experiments I've built
      </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PERSONAL_PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-[#0aff99]/50 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <div className="flex gap-2">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#0aff99] transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="h-5 w-5" />
                </a>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#0aff99] transition-colors"
                    aria-label={`View ${project.title} live`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 rounded text-xs font-medium bg-white/5 border border-white/10 text-gray-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ContributionsSection() {
  return (
    <section id="contributions" className={`${cardClass} mt-10 p-8 md:p-10`}>
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
        Contributions
      </h2>
      <p className="text-base text-gray-300 mb-6 leading-relaxed">
        I've spent the past few years moving between startups, open-source, and R&D labs, where experimentation meets scale.
      </p>
      <div className="mt-6 space-y-6 text-gray-300">
        {contributions.map((item, index) => (
          <p key={index} className="text-base leading-relaxed">
            <span className="font-semibold text-white">{item.title} </span>
            {item.body}
          </p>
        ))}
        <p className="text-base leading-relaxed mt-6">
          <span className="font-semibold text-white">0→100 </span>
          systems and ideas building what I want to see exist.
        </p>
      </div>
    </section>
  );
}

function GitHubSection() {
  return (
    <section id="github" className={`${cardClass} mt-10 p-8 md:p-10`}>
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
        GitHub Contributions • @{GITHUB_USERNAME}
      </h2>
      <div className="mt-6 rounded-2xl border border-white/5 bg-black/40 p-6">
        <div className="rounded-2xl bg-[#0d0d0d] p-4">
          <Image
            src={GITHUB_CHART_URL}
            alt={`${GITHUB_USERNAME} contribution chart`}
            width={900}
            height={180}
            unoptimized
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}

function StackSection() {
  return (
    <section id="stack" className={`${cardClass} mt-10 p-8 md:p-10`}>
      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">
        Stack I use
      </h2>
      <p className="text-base text-gray-400 mb-8">
        Technologies I work with to build products that solve real problems
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        {stackTechnologies.map((tech, index) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05, borderColor: "#0aff99" }}
            className="flex h-20 min-w-[120px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-gray-100 hover:border-[#0aff99] transition-colors cursor-default"
          >
            {tech}
          </motion.div>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {SKILLS_DATA.map((category) => (
          <div
            key={category.category}
            className="rounded-2xl border border-white/5 bg-black/20 p-4"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-2">
              {category.category}
            </p>
            <p className="text-sm text-gray-300">{category.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className={`${cardClass} mt-10 p-8 md:p-10`}>
      <div className="flex flex-col items-center text-center">
        <p className="text-lg text-gray-300 mb-6">
          If you've read this far, you might be interested in what I do.
        </p>
        <motion.a
          href="mailto:taahirah.engineer@proton.me"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:border-[#0aff99] hover:bg-[#0aff99] hover:text-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Calendar className="h-5 w-5" />
          Book a Free Call
        </motion.a>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="mt-12 border-t border-white/5 pt-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">
          Let's connect
        </h2>
        <p className="text-base text-gray-400 mb-6">
          Find me on these platforms
        </p>
        <div className="flex flex-wrap gap-4">
          {SOCIAL_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:border-[#0aff99] hover:text-white"
              >
                <Icon className="h-4 w-4" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Taahirah Denmark.</p>
      </div>
    </footer>
  );
}
