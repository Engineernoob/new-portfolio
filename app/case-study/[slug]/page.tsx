import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getAllCaseStudies } from "../../data/case-studies";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { ArrowLeft, Calendar, Code, CheckCircle, Lightbulb, TrendingUp } from "lucide-react";

const cardClass =
  "rounded-3xl border border-white/10 bg-[#0b0b0b]/80 shadow-[0_25px_80px_rgba(0,0,0,0.5)] backdrop-blur-sm";

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const study = getCaseStudyBySlug(resolvedParams.slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-[#050505] text-gray-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-20 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.04)_12px,rgba(255,255,255,0)_12px,rgba(255,255,255,0)_24px)] opacity-30" />
      <div className="absolute inset-y-0 right-0 w-20 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.04)_12px,rgba(255,255,255,0)_12px,rgba(255,255,255,0)_24px)] opacity-30" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-8 pb-24">
        <NavBar />
        
        <div className="mt-8 mb-8">
          <Link
            href="/case-study"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to case studies
          </Link>
        </div>

        <article className={cardClass + " p-8 md:p-10"}>
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#0aff99]/10 border border-[#0aff99]/30 text-[#0aff99]">
                {study.category}
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                {study.date}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {study.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium">
              {study.fullDescription}
            </p>
          </header>

          <div className="space-y-8">
            {/* Key Highlights */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-[#0aff99]" />
                Key Highlights
              </h2>
              <ul className="list-disc list-inside space-y-3 text-lg md:text-xl text-gray-200 ml-4 font-medium">
                {study.highlights.map((highlight, idx) => (
                  <li key={idx} className="leading-relaxed">{highlight}</li>
                ))}
              </ul>
            </section>

            {/* Challenges & Solutions */}
            {study.challenges && study.solutions && (
              <>
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-2">
                    <Lightbulb className="h-6 w-6 text-[#0aff99]" />
                    Challenges & Solutions
                  </h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Challenges</h3>
                      <ul className="list-disc list-inside space-y-3 text-lg md:text-xl text-gray-200 ml-4 font-medium">
                        {study.challenges.map((challenge, idx) => (
                          <li key={idx} className="leading-relaxed">{challenge}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Solutions</h3>
                      <ul className="list-disc list-inside space-y-3 text-lg md:text-xl text-gray-200 ml-4 font-medium">
                        {study.solutions.map((solution, idx) => (
                          <li key={idx} className="leading-relaxed">{solution}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              </>
            )}

            {/* Results */}
            {study.results && (
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-[#0aff99]" />
                  Results
                </h2>
                <ul className="list-disc list-inside space-y-3 text-lg md:text-xl text-gray-200 ml-4 font-medium">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="leading-relaxed">{result}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Technologies */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-2">
                <Code className="h-6 w-6 text-[#0aff99]" />
                Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {study.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-lg text-base md:text-lg font-semibold bg-white/5 border border-white/10 text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </article>

        <div className="mt-8">
          <Link
            href="/case-study"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all case studies
          </Link>
        </div>
      </div>
    </div>
  );
}

function NavBar() {
  const navLinks = [
    { label: "proof-of-work", href: "/#experience" },
    { label: "projects", href: "/#projects" },
    { label: "blogs", href: "/blog" },
    { label: "case-study", href: "/case-study" },
  ];

  return (
    <nav className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between py-8 text-sm text-gray-300">
      <Link href="/" className="text-lg font-semibold text-white hover:text-[#0aff99] transition-colors">
        Taahirah
      </Link>
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

