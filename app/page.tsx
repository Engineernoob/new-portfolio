"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, Menu, X, ExternalLink, Github } from "lucide-react";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { EXPERIENCE_DATA } from "./data/experience";
import { SOCIAL_LINKS } from "./data/socials";
import { PERSONAL_PROJECTS } from "./data/projects";
import { SKILLS_DATA } from "./data/skills";
import { getAllCaseStudies } from "./data/case-studies";

const navLinks = [
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "case studies", href: "#case-study" },
  { label: "blog", href: "/blog" },
];

const heroSocials = SOCIAL_LINKS;
const HERO_IMAGE_URL =
  "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg";

const stackTechnologies = [
  "TypeScript",
  "JavaScript",
  "Python",
  "SQL",
  "Next.js",
  "React",
  "Node.js",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Git",
  "Redis",
];

const PROFILE_IMAGE_POSITION = "50% 38%";

const ABOUT_PARAGRAPHS = [
  "I’m a software engineer focused on building reliable full stack applications and backend APIs. I care about measurable outcomes: performance, maintainability, and systems that are easy to evolve.",
  "I’m comfortable owning features end-to-end — from schema design and API contracts to UI, deployment, and iteration based on real usage.",
];

const AVAILABILITY_TEXT =
  "Currently seeking full-time software engineering roles (full stack, backend, or AI tooling). Open to remote or on-site.";

const GITHUB_USERNAME = "Engineernoob";
const GITHUB_CHART_URL = `https://ghchart.rshah.org/0aff99/${GITHUB_USERNAME}`;

const cardClass =
  "rounded-3xl border border-white/10 bg-[#0b0b0b]/80 shadow-[0_25px_80px_rgba(0,0,0,0.5)] backdrop-blur-sm";

const stripBold = (text: string) => text.replace(/\*\*/g, "");

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

        {/* ✅ Was defined but never rendered — now it is */}
        <motion.div {...fadeInUp} transition={{ delay: 0.35 }}>
          <CaseStudySection />
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks
        .filter((link) => link.href.startsWith("#"))
        .map((link) => {
          const id = link.href.substring(1);
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            return { id, top: rect.top, bottom: rect.bottom };
          }
          return null;
        })
        .filter(Boolean) as Array<{ id: string; top: number; bottom: number }>;

      const currentSection = sections.find(
        (section) => section.top <= 120 && section.bottom >= 120,
      );

      if (currentSection) {
        setActiveSection(`#${currentSection.id}`);
      } else if (window.scrollY < 120) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (pathname !== "/") return pathname === href;
    return (
      activeSection === href || (href === "#experience" && activeSection === "")
    );
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        <div className="flex items-center justify-between py-4 md:py-6">
          <Link
            href="/"
            className="text-lg font-semibold text-white hover:text-[#0aff99] transition-colors relative z-10"
          >
            Taahirah
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative text-sm transition-colors duration-200 ${
                    active
                      ? "text-[#0aff99] font-medium"
                      : "text-gray-300 hover:text-white"
                  }`}
                  aria-label={item.label}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0aff99]"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
            <div className="ml-2">
              <ThemeSwitcher />
            </div>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4 border-t border-white/5">
                {navLinks.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`block py-2 text-sm transition-colors duration-200 ${
                        active
                          ? "text-[#0aff99] font-medium"
                          : "text-gray-300 hover:text-white"
                      }`}
                      aria-label={item.label}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />

      <div className="relative flex h-full w-full flex-col justify-center items-center p-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
          Software Engineer — Full Stack & AI Systems
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200 font-medium">
          I build production-ready web apps and backend APIs with TypeScript and
          Python. I care about performance, clean architecture, and shipping.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-[#0aff99] px-6 py-3 text-base font-bold text-black hover:opacity-90 transition"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            className="rounded-full border border-white/25 bg-white/5 px-6 py-3 text-base font-bold text-white hover:border-[#0aff99] transition"
          >
            Download Resume
          </a>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/25 bg-white/5 px-6 py-3 text-base font-bold text-white hover:border-[#0aff99] transition"
          >
            GitHub
          </a>
        </div>
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
                className="text-4xl md:text-5xl font-bold text-white"
              >
                Taahirah Denmark
              </h2>
              <p className="mt-3 text-xl md:text-2xl text-gray-300 font-medium">
                Full Stack • Backend • AI Tooling
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

        <div className="mt-6 space-y-5 text-lg md:text-xl leading-relaxed text-gray-200">
          {ABOUT_PARAGRAPHS.map((paragraph, index) => (
            <p key={index} className="font-medium">
              {paragraph}
            </p>
          ))}
          <p className="text-gray-300 italic text-base md:text-lg">
            {AVAILABILITY_TEXT}
          </p>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section
      id="experience"
      className={`${cardClass} mt-10 p-8 md:p-10 scroll-mt-20`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
        Experience
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
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {experience.context}
                </h3>
                <p className="text-lg md:text-xl font-semibold text-gray-200 mb-2">
                  {experience.title}
                </p>
                <p className="text-base text-gray-400 mb-4 font-medium">
                  {experience.period}
                </p>

                {experience.responsibilities.length > 0 && (
                  <ul className="list-disc list-inside space-y-3 text-lg md:text-xl text-gray-200 ml-4 font-medium leading-relaxed">
                    {experience.responsibilities
                      .slice(0, 4)
                      .map((resp, idx) => (
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
  const featured = PERSONAL_PROJECTS.filter((p) => p.featured);
  const more = PERSONAL_PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className={`${cardClass} mt-10 p-8 md:p-10 scroll-mt-20`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        Projects
      </h2>
      <p className="text-lg md:text-xl text-gray-300 mb-8 font-medium">
        A focused set of builds that show how I ship.
      </p>

      <div className="space-y-10">
        {/* Featured */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
            Featured
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-[#0aff99]/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h4 className="text-2xl font-bold text-white">
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">{project.role}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 shrink-0">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-gray-200 hover:border-[#0aff99] transition"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-gray-200 hover:border-[#0aff99] transition"
                        aria-label={`View ${project.title} live`}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-base md:text-lg text-gray-200 mb-4 leading-relaxed font-medium">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="mt-4 space-y-2 text-base text-gray-300 font-medium">
                  {project.highlights.slice(0, 3).map((h, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0aff99]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Metrics (optional) */}
                {project.metrics?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.metrics.slice(0, 3).map((m, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded text-xs font-medium bg-[#0aff99]/10 border border-[#0aff99]/30 text-[#0aff99]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                ) : null}

                {/* Tech stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 6).map((tech, idx) => (
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
        </div>

        {/* More Projects (only renders if exists) */}
        {more.length ? (
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              More Projects
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-90">
              {more.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-[#0aff99]/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h4 className="text-xl font-bold text-white">
                      {project.title}
                    </h4>

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

                  <p className="text-base text-gray-200 mb-4 leading-relaxed font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 5).map((tech, idx) => (
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
          </div>
        ) : null}
      </div>
    </section>
  );
}

function CaseStudySection() {
  const caseStudies = getAllCaseStudies().slice(0, 3);

  return (
    <section
      id="case-study"
      className={`${cardClass} mt-10 p-8 md:p-10 scroll-mt-20`}
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Case Studies
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-medium">
            Deep dives into systems I’ve built and problems I’ve solved.
          </p>
        </div>
        <Link
          href="/case-study"
          className="text-base md:text-lg text-gray-300 hover:text-[#0aff99] transition-colors font-medium"
        >
          View all →
        </Link>
      </div>

      <div className="space-y-6">
        {caseStudies.map((study, index) => (
          <Link key={study.id} href={`/case-study/${study.slug}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-[#0aff99]/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#0aff99]/10 border border-[#0aff99]/30 text-[#0aff99]">
                  {study.category}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 hover:text-[#0aff99] transition-colors">
                {study.title}
              </h3>

              <p className="text-base md:text-lg text-gray-200 mb-4 leading-relaxed font-medium">
                {study.description}
              </p>

              <div className="mb-4">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-2">
                  Highlights
                </p>
                <ul className="list-disc list-inside space-y-2 text-base text-gray-300 ml-2 font-medium">
                  {study.highlights.slice(0, 3).map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {study.technologies.slice(0, 5).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded text-xs font-medium bg-white/5 border border-white/10 text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
                {study.technologies.length > 5 && (
                  <span className="px-2 py-1 rounded text-xs font-medium bg-white/5 border border-white/10 text-gray-500">
                    +{study.technologies.length - 5}
                  </span>
                )}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ContributionsSection() {
  return (
    <section id="principles" className={`${cardClass} mt-10 p-8 md:p-10`}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        How I Build
      </h2>

      <p className="text-lg md:text-xl text-gray-300 mb-8 font-medium">
        My approach to engineering and system design.
      </p>

      <div className="space-y-6 text-lg md:text-xl text-gray-200 font-medium leading-relaxed">
        <p>• I define measurable success metrics before writing code.</p>

        <p>• I design APIs and data models before building UI.</p>

        <p>
          • I separate business logic from infrastructure to keep systems
          maintainable.
        </p>

        <p>
          • I prioritize performance, observability, and clean service
          boundaries.
        </p>

        <p>
          • I document decisions and tradeoffs to reduce onboarding friction.
        </p>

        <p>• I build with the assumption that systems will need to scale.</p>
      </div>
    </section>
  );
}

function GitHubSection() {
  return (
    <section id="github" className={`${cardClass} mt-10 p-8 md:p-10`}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
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
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Stack</h2>
      <p className="text-lg md:text-xl text-gray-300 mb-8 font-medium">
        The tools I use most often to ship production work.
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
            className="flex h-16 min-w-[120px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 text-base md:text-lg font-bold text-gray-100 hover:border-[#0aff99] transition-colors cursor-default"
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
            <p className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-3 font-semibold">
              {category.category}
            </p>
            <p className="text-base md:text-lg text-gray-200 font-medium leading-relaxed">
              {category.skills}
            </p>
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
        <p className="text-xl md:text-2xl text-gray-200 mb-8 font-medium leading-relaxed">
          Want someone who ships? Let’s talk.
        </p>
        <motion.a
          href="mailto:taahirah.engineer@proton.me"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-10 py-5 text-lg md:text-xl font-bold text-white transition hover:border-[#0aff99] hover:bg-[#0aff99] hover:text-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ExternalLink className="h-5 w-5" />
          Email me
        </motion.a>
        <p className="mt-3 text-sm text-gray-400 font-medium">
          taahirah.engineer@proton.me
        </p>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="mt-12 border-t border-white/5 pt-8">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Let’s build something great.
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 font-medium">
          Find me on these platforms.
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
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-base md:text-lg font-medium text-gray-200 transition hover:border-[#0aff99] hover:text-white"
              >
                <Icon className="h-4 w-4" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>

      <div className="mt-8 text-center text-base text-gray-400">
        <p className="font-medium">
          &copy; {new Date().getFullYear()} Taahirah Denmark.
        </p>
      </div>
    </footer>
  );
}
