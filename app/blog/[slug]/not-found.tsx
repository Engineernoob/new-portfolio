import Link from "next/link";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { ArrowLeft } from "lucide-react";

const cardClass =
  "rounded-3xl border border-white/10 bg-[#0b0b0b]/80 shadow-[0_25px_80px_rgba(0,0,0,0.5)] backdrop-blur-sm";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-gray-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-20 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.04)_12px,rgba(255,255,255,0)_12px,rgba(255,255,255,0)_24px)] opacity-30" />
      <div className="absolute inset-y-0 right-0 w-20 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.04)_12px,rgba(255,255,255,0)_12px,rgba(255,255,255,0)_24px)] opacity-30" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-8 pb-24">
        <NavBar />
        
        <div className="mt-8 mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blogs
          </Link>
        </div>

        <div className={cardClass + " p-8 md:p-10 text-center"}>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Post Not Found
          </h1>
          <p className="text-lg text-gray-400 mb-6">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#0aff99] hover:text-[#0aff99]/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            View all blogs
          </Link>
        </div>
      </div>
    </div>
  );
}

function NavBar() {
  const navLinks = [
    { label: "proof-of-work", href: "/#experience" },
    { label: "blogs", href: "/blog" },
    { label: "art", href: "/#art" },
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

