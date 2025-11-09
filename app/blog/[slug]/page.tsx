import { NewLayout } from "../../components/NewLayout";
import { getSortedPostsData } from "@/lib/blog";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

// For rendering markdown to HTML
import { remark } from "remark";
import html from "remark-html";

// 1. Function to get all possible slugs (required for static generation in App Router)
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. Function to get the content of a single post
async function getPostData(slug: string) {
  const fullPath = path.join(process.cwd(), "src/posts", `${slug}.md`);

  // Check if file exists
  if (!fs.existsSync(fullPath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  // Convert markdown to HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
    tags: matterResult.data.tags || [],
  };
}

// 3. The main page component
export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const postData = await getPostData(params.slug);

  return (
    <NewLayout>
      <article className="max-w-4xl mx-auto py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
          {postData.title}
        </h1>

        <div className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          {new Date(postData.date).toLocaleDateString()}
          <span className="mx-2">•</span>
          {postData.tags.map(
            (
              tag: string // <-- FIX: Add ': string' to define the type
            ) => (
              <span
                key={tag}
                className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent-dark/10 text-accent-dark mr-1"
              >
                {tag}
              </span>
            )
          )}
        </div>

        {/* Dynamically render the HTML content */}
        <div
          className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </NewLayout>
  );
}
