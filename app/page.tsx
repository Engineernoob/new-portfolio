import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { EXPERIENCE_DATA } from "./data/experience";
import { SKILLS_DATA } from "./data/skills";
import { SOCIAL_LINKS } from "./data/socials";

const accentColor = "#f4b17a";
const navLinks = [
  { label: "proof-of-work", href: "#experience" },
  { label: "blogs", href: "/blog" },
  { label: "stack", href: "#stack" },
];

const heroSocials = SOCIAL_LINKS;
const stackLogos = [
  "Java",
  "Python",
  "SQL",
  "React",
  "Next.js",
  "Express.js",
  "Rust",
  "Tauri",
];

const ABOUT_PARAGRAPHS = [
  "I love exploring ideas through code, design, and whatever medium feels right for the problem. Most of my time goes into building systems that make life simpler or spark curiosity—blending structure with imagination.",
  "I am currently open to part-time and full-time roles that let me dive into interesting systems, collaborate on experimental ideas, or ship thoughtful tools.",
];

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

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-gray-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-20 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.04)_12px,rgba(255,255,255,0)_12px,rgba(255,255,255,0)_24px)] opacity-30" />
      <div className="absolute inset-y-0 right-0 w-20 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.04)_12px,rgba(255,255,255,0)_12px,rgba(255,255,255,0)_24px)] opacity-30" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-8 pb-24">
        <NavBar />
        <HeroBanner />
        <ProfileCard />
        <AboutSection />
        <ExperienceSection />
        <ContributionsSection />
        <GitHubSection />
        <StackSection />
        <CtaSection />
        <FooterSection />
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <nav className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between py-8 text-[0.65rem] uppercase tracking-[0.4em] text-gray-500">
      <div className="flex items-center gap-3 text-gray-300">
        <span className="text-sm font-semibold tracking-[0.6em] text-white">
          TAHIRAH
        </span>
        <span className="h-px w-12 bg-white/20" />
        <span>portfolio</span>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        {navLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="hover:text-white transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function HeroBanner() {
  return (
    <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
      <Image
        src="/profile.png"
        alt="Taahirah Denmark hero"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
      <div className="relative flex h-full w-full flex-col justify-end p-10">
        <p className="text-xs uppercase tracking-[0.65em] text-gray-300">Taahirah Denmark</p>
        <h1 className="mt-4 max-w-xl text-3xl font-semibold leading-snug text-white md:text-4xl">
          Thoughts, systems, and everything in between.
        </h1>
      </div>
    </div>
  );
}

function ProfileCard() {
  return (
    <section
      className={`${cardClass} -mt-14 p-8 md:-mt-16 md:p-10`}
      aria-labelledby="profile-heading"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <div className="relative h-28 w-28 shrink-0 rounded-full border-4 border-[#050505] bg-white/5">
          <Image
            src="/profile.png"
            alt="Taahirah Denmark"
            width={112}
            height={112}
            className="h-full w-full rounded-full object-cover"
            priority
          />
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.6em] text-gray-400">
              AI systems • ideas • stories
            </p>
            <h2
              id="profile-heading"
              className="mt-3 text-3xl font-semibold text-white"
            >
              Taahirah Denmark
            </h2>
          </div>
          <p className="text-base text-gray-400">
            AI systems engineer & full-stack developer designing thoughtful
            tools, orchestration layers, and interfaces across the stack.
          </p>
        </div>
        <div className="flex w-full flex-wrap gap-3 md:w-auto md:justify-end">
          {heroSocials.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-gray-400 transition hover:border-(--accent-color) hover:text-white"
                style={{ ["--accent-color" as string]: accentColor }}
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className={`${cardClass} mt-10 p-8 md:p-10`}>
      <SectionHeader eyebrow="about" title="Curiosity-led, systems-minded" />
      <div className="mt-6 space-y-5 text-lg leading-relaxed text-gray-300">
        {ABOUT_PARAGRAPHS.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className={`${cardClass} mt-10 p-8 md:p-10`}>
      <SectionHeader eyebrow="professional experience" title="Proof-of-work" />
      <div className="mt-8 divide-y divide-white/5">
        {EXPERIENCE_DATA.map((experience) => (
          <div
            key={experience.id}
            className="flex flex-col gap-5 py-6 md:flex-row md:items-center"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-sm font-semibold text-white/80">
                {getInitials(experience.context)}
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
                  {experience.context}
                </p>
                <h3 className="text-lg font-semibold text-white">
                  {experience.title}
                </h3>
              </div>
            </div>
            <div className="flex-1 text-sm text-gray-400">
              {stripBold(experience.subTitle)}
            </div>
            <p className="text-sm text-gray-500 md:text-right">
              {experience.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContributionsSection() {
  return (
    <section id="contributions" className={`${cardClass} mt-10 p-8 md:p-10`}>
      <SectionHeader
        eyebrow="contributions"
        title="Where experiments met scale"
      />
      <div className="mt-6 space-y-6 text-gray-300">
        {contributions.map((item) => (
          <p key={item.title} className="text-base leading-relaxed">
            <span className="font-semibold text-white">{item.title} </span>
            {item.body}
          </p>
        ))}
      </div>
    </section>
  );
}

function GitHubSection() {
  return (
    <section id="github" className={`${cardClass} mt-10 p-8 md:p-10`}>
      <SectionHeader
        eyebrow="github"
        title={`Contributions @${GITHUB_USERNAME}`}
      />
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
        <p className="mt-3 text-xs text-gray-500">
          Data sourced directly from GitHub — less is calm, more is momentum.
        </p>
      </div>
    </section>
  );
}

function StackSection() {
  return (
    <section id="stack" className={`${cardClass} mt-10 p-8 md:p-10`}>
      <SectionHeader
        eyebrow="stack i use"
        title="Tools for shipping real systems"
      />
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {stackLogos.map((item) => (
          <div
            key={item}
            className="flex h-24 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold tracking-wide text-gray-100"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-4 text-sm leading-relaxed text-gray-400 sm:grid-cols-2">
        {SKILLS_DATA.map((category) => (
          <div
            key={category.category}
            className="rounded-2xl border border-white/5 bg-black/20 p-4"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
              {category.category}
            </p>
            <p className="mt-2 text-gray-300">{category.skills}</p>
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
        <SectionHeader
          eyebrow="collaborations"
          title="If you made it this far, let’s talk."
        />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300">
          I collaborate with people who want thoughtful systems—not more noise.
          I’m open to advising, rapid prototyping, and full-stack engagements.
        </p>
        <a
          href="mailto:taahirah.engineer@proton.me"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-(--accent-color) hover:bg-(--accent-color) hover:text-black"
          style={{ ["--accent-color" as string]: accentColor }}
        >
          Contact Me <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="mt-12 border-t border-white/5 pt-8 text-center text-sm text-gray-500">
      <p>
        &copy; {new Date().getFullYear()} Taahirah Denmark. Crafted with
        curiosity.
      </p>
      <div className="mt-4 flex justify-center gap-4">
        {SOCIAL_LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </a>
          );
        })}
      </div>
    </footer>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-[0.6rem] uppercase tracking-[0.5em] text-gray-500">
        {eyebrow}
      </p>
      <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
        {title}
      </h3>
      <div
        className="mt-3 h-px w-16"
        style={{ backgroundColor: accentColor }}
      />
    </div>
  );
}
