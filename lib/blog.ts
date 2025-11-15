import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Define the type for the blog post metadata
export interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string; // The markdown content
}

// 1. Define the directory where your markdown files will live
const postsDirectory = path.join(process.cwd(), "posts");

/**
 * Reads all post files, parses the frontmatter and content, and returns a sorted list.
 */
export function getSortedPostsData(): Post[] {
  // Get file names under /src/posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id (slug)
    const slug = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the slug
    return {
      slug,
      content: matterResult.content,
      // Ensure all frontmatter properties exist
      title: matterResult.data.title || "Untitled Post",
      date: matterResult.data.date || new Date().toISOString().split("T")[0],
      summary: matterResult.data.summary || "No summary provided.",
      tags: matterResult.data.tags || [],
    } as Post;
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * Gets a single post by its slug
 */
export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      slug,
      content: matterResult.content,
      title: matterResult.data.title || "Untitled Post",
      date: matterResult.data.date || new Date().toISOString().split("T")[0],
      summary: matterResult.data.summary || "No summary provided.",
      tags: matterResult.data.tags || [],
    } as Post;
  } catch (error) {
    return null;
  }
}
