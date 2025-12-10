import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getSortedPostsData } from "@/lib/blog";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import { ArrowLeft, Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const cardClass =
  "rounded-3xl border border-white/10 bg-[#0b0b0b]/80 shadow-[0_25px_80px_rgba(0,0,0,0.5)] backdrop-blur-sm";

export async function generateStaticParams() {
  try {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  // Handle both Promise and direct params (Next.js 15+ uses Promise)
  const resolvedParams = params instanceof Promise ? await params : params;
  const slug = resolvedParams.slug;
  
  // Get the post
  const post = getPostBySlug(slug);
  
  // If post not found, show not found page
  if (!post) {
    notFound();
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
        
        <div className="mt-8 mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blogs
          </Link>
        </div>

        <article className={cardClass + " p-8 md:p-10"}>
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 flex-wrap mb-4">
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
            {post.summary && (
              <p className="text-lg text-gray-300 leading-relaxed italic">
                {post.summary}
              </p>
            )}
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => (
                  <h1 className="text-3xl font-semibold text-white mt-8 mb-4" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="text-2xl font-semibold text-white mt-6 mb-3" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-xl font-semibold text-white mt-5 mb-2" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-base text-gray-300 leading-relaxed mb-4" {...props} />
                ),
                ul: ({ node, ...props }) => (
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="text-base text-gray-300" {...props} />
                ),
                code: ({ node, className, ...props }: any) => {
                  const isInline = !className;
                  return isInline ? (
                    <code
                      className="px-1.5 py-0.5 rounded bg-white/10 text-[#0aff99] text-sm font-mono"
                      {...props}
                    />
                  ) : (
                    <code
                      className="block p-4 rounded-lg bg-black/40 border border-white/10 text-gray-300 text-sm font-mono overflow-x-auto mb-4"
                      {...props}
                    />
                  );
                },
                pre: ({ node, ...props }) => (
                  <pre className="mb-4" {...props} />
                ),
                a: ({ node, ...props }) => (
                  <a
                    className="text-[#0aff99] hover:text-[#0aff99]/80 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                  />
                ),
                blockquote: ({ node, ...props }) => (
                  <blockquote
                    className="border-l-4 border-[#0aff99] pl-4 italic text-gray-400 my-4"
                    {...props}
                  />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="font-semibold text-white" {...props} />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>

        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all blogs
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
    { label: "case-study", href: "/#case-study" },
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

