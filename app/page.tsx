import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

import { EXPERIENCE_DATA } from "./data/experience";
import { SOCIAL_LINKS } from "./data/socials";

const accentColor = "#0aff99";
const navLinks = [
  { label: "proof-of-work", href: "#experience" },
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
  "Jira",
  "Nix OS",
];
const PROFILE_IMAGE_POSITION = "50% 38%";

const ABOUT_PARAGRAPHS = [
  "I'm someone who loves exploring ideas. through code, design, and whatever medium feels right that day. I spend most of my time building things that make life a bit simpler or spark curiosity, often blending structure with imagination.",
  "Outside of work, I am a part-time artist and a full-time cinephile and audiophile. I enjoy stories in all forms, whether that's film, sound, or the small experiments that keep me inspired.",
];

const AVAILABILITY_TEXT =
  "Currently open to part‑time and contract roles, The kind that let me dive deep into interesting systems, build creative tools, or collaborate on experimental ideas.";

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
    <nav className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between py-8 text-sm text-gray-300">
      <div className="flex items-center gap-3">
        <span className="text-lg font-semibold text-white">Taahirah</span>
      </div>
      <div className="flex flex-wrap items-center gap-6">
        {navLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="hover:text-white transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
        <ThemeSwitcher />
      </div>
    </nav>
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
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
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
                27 • AI • Systems • Stories
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {heroSocials.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-400 transition hover:border-[#0aff99] hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
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
      <div className="mt-8 space-y-6">
        {EXPERIENCE_DATA.map((experience) => (
          <div
            key={experience.id}
            className="flex flex-col gap-4 md:flex-row md:items-start"
          >
            <div className="flex items-center gap-4 flex-1">
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
                <p className="text-sm text-gray-500">{experience.period}</p>
              </div>
            </div>
          </div>
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
        I've spent the past few years moving between startups, open-source, and
        R&D labs, where experimentation meets scale.
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
        {stackTechnologies.map((tech) => (
          <div
            key={tech}
            className="flex h-20 min-w-[120px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-gray-100 hover:border-[#0aff99] transition-colors"
          >
            {tech}
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
        <a
          href="mailto:taahirah.engineer@proton.me"
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:border-[#0aff99] hover:bg-[#0aff99] hover:text-black"
        >
          <Calendar className="h-5 w-5" />
          Book a Free Call
        </a>
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
