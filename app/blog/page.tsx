import { NewLayout } from "../components/NewLayout";
import { getSortedPostsData } from "@/lib/blog";
import Link from "next/link";

export default function BlogIndexPage() {
  const allPostsData = getSortedPostsData();

  return (
    <NewLayout>
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-accent-dark mb-8 border-b-2 pb-2 border-gray-200 dark:border-gray-800">
          Technical Blog ({allPostsData.length} Articles)
        </h2>

        <div className="space-y-6">
          {allPostsData.map(({ slug, title, date, summary, tags }) => (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="block p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700/50"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white hover:text-accent-dark transition-colors mb-1">
                {title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {date}
              </p>
              <p className="text-gray-700 dark:text-gray-300">{summary}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-accent-dark/10 text-accent-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {allPostsData.length === 0 && (
          <p className="text-lg text-gray-500 dark:text-gray-400">
            No blog posts found. Add your first Markdown file to `src/posts/`.
          </p>
        )}
      </section>
    </NewLayout>
  );
}
