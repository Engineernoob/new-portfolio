import Link from "next/link";
import { getSortedPostsData, type Post } from "@/lib/blog";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { ArrowLeft, Calendar } from "lucide-react";

const cardClass =
  "rounded-3xl border border-white/10 bg-[#0b0b0b]/80 shadow-[0_25px_80px_rgba(0,0,0,0.5)] backdrop-blur-sm";

export default function BlogPage() {
  let posts: Post[] = [];
  try {
    posts = getSortedPostsData();
  } catch (error) {
    console.error("Error loading blog posts:", error);
    posts = [];
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-gray-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_65%)] pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-20 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.04)_12px,rgba(255,255,255,0)_12px,rgba(255,255,255,0)_24px)] opacity-30" />
      <div className="absolute inset-y-0 right-0 w-20 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.04)_12px,rgba(255,255,255,0)_12px,rgba(255,255,255,0)_24px)] opacity-30" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-8 pb-24">
        <NavBar />
        <div className="mt-8 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Blogs
          </h1>
          <p className="text-lg text-gray-400">
            Thoughts, ideas, and everything in between
          </p>
        </div>

        <div className="space-y-6">
          {posts.length === 0 ? (
            <div className={cardClass + " p-8 md:p-10"}>
              <p className="text-gray-400 text-center">
                No blog posts yet. Check back soon!
              </p>
            </div>
          ) : (
            posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`${cardClass} block p-8 md:p-10 hover:border-[#0aff99]/50 transition-all duration-300`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3 hover:text-[#0aff99] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-base text-gray-300 leading-relaxed mb-4">
                      {post.summary}
                    </p>
                    <div className="flex items-center gap-4 flex-wrap">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.date)}
                      </div>
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
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
      <Link
        href="/"
        className="text-lg font-semibold text-white hover:text-[#0aff99] transition-colors"
      >
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
