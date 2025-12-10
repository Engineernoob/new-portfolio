"use client";

import Link from "next/link";
import { getAllCaseStudies } from "@/app/data/case-studies";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { ArrowLeft, Calendar, ExternalLink, Code } from "lucide-react";
import { motion } from "framer-motion";

const cardClass =
  "rounded-3xl border border-white/10 bg-[#0b0b0b]/80 shadow-[0_25px_80px_rgba(0,0,0,0.5)] backdrop-blur-sm";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function CaseStudyPage() {
  const caseStudies = getAllCaseStudies();

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
    <div className="relative min-h-screen bg-[#050505] text-gray-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-20 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.04)_12px,rgba(255,255,255,0)_12px,rgba(255,255,255,0)_24px)] opacity-30" />
      <div className="absolute inset-y-0 right-0 w-20 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.04)_12px,rgba(255,255,255,0)_12px,rgba(255,255,255,0)_24px)] opacity-30" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-8 pb-24">
        <NavBar handleNavClick={handleNavClick} />
        
        <motion.div {...fadeInUp} className="mt-8 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Case Studies
          </h1>
          <p className="text-lg text-gray-400">
            Deep dives into systems I've built and problems I've solved
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/case-study/${study.slug}`}
                className={`${cardClass} block p-8 md:p-10 hover:border-[#0aff99]/50 transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#0aff99]/10 border border-[#0aff99]/30 text-[#0aff99]">
                        {study.category}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {study.date}
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3 hover:text-[#0aff99] transition-colors">
                      {study.title}
                    </h2>
                    <p className="text-base text-gray-300 leading-relaxed mb-4">
                      {study.description}
                    </p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-2">
                    Key Highlights
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-400 ml-2">
                    {study.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {study.technologies.slice(0, 6).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded text-xs font-medium bg-white/5 border border-white/10 text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {study.technologies.length > 6 && (
                    <span className="px-2 py-1 rounded text-xs font-medium bg-white/5 border border-white/10 text-gray-500">
                      +{study.technologies.length - 6} more
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-[#0aff99]">
                  <span>Read case study</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NavBar({ handleNavClick }: { handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void }) {
  const navLinks = [
    { label: "proof-of-work", href: "/#experience" },
    { label: "projects", href: "/#projects" },
    { label: "blogs", href: "/blog" },
    { label: "case-study", href: "/case-study" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 flex flex-col gap-4 md:flex-row md:items-center md:justify-between py-8 text-sm text-gray-300"
    >
      <Link href="/" className="text-lg font-semibold text-white hover:text-[#0aff99] transition-colors">
        Taahirah
      </Link>
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

