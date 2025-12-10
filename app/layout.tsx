import type { Metadata } from "next";
import { Inter } from "next/font/google"; // 1. Import the font
import "./globals.css";
import { Providers } from "./providers";

// 2. Define the font object
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Create a CSS variable
});

// src/app/layout.tsx

export const metadata: Metadata = {
  title: "Taahirah Denmark | AI Systems Engineer & Full Stack Developer",
  description:
    "Portfolio of Taahirah Denmark, specializing in building and scaling complex AI-powered applications using Next.js, Rust, and modern ML/NLP technologies. Open to part-time and contract roles.",
  keywords: [
    "AI Systems Engineer",
    "Full Stack Developer",
    "Next.js",
    "Rust",
    "Tauri",
    "NLP",
    "TensorFlow",
    "React",
    "TypeScript",
    "Machine Learning",
    "Software Engineer",
  ],
  authors: [{ name: "Taahirah Denmark" }],
  creator: "Taahirah Denmark",
  openGraph: {
    title: "Taahirah Denmark | AI Systems Engineer & Full Stack Developer",
    description:
      "Portfolio of Taahirah Denmark. Building AI-powered systems, full-stack applications, and creative tools.",
    url: "https://taahirah-dev.vercel.app",
    siteName: "Taahirah Denmark Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taahirah Denmark | AI Systems Engineer",
    description: "Portfolio of Taahirah Denmark. Building AI-powered systems and full-stack applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 4. Apply the font variable to the HTML element
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
      <body>
        <Providers>
          {/* 
            5. Apply the font utility class. 
            The font-sans utility is automatically configured by Tailwind to use 
            the --font-inter variable when applied to the html tag above.
            We'll also keep the base styling.
          */}
          <div className="font-sans min-h-screen bg-black dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
