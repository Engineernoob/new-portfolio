import type { Config } from "tailwindcss";

const config: Config = {
  // Use 'class' strategy for dark mode (required for next-themes)
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Define a custom accent color based on your existing site's blue/cyan
        accent: {
          light: "#06b6d4", // cyan-500
          DEFAULT: "#06b6d4",
          dark: "#06b6d4",
        },
        // Define primary background/text for dark mode aesthetic
        primary: {
          bg: "#121212", // A very dark gray/almost black
          text: "#f3f4f6", // Light gray text
        },
      },
      // You can also customize your font-family here if you use a specific one
    },
  },
  plugins: [],
};

export default config;
