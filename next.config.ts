import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add the images configuration object here
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-streak-stats.herokuapp.com", // The domain of the image source
        // port: '', // No port needed for standard HTTPS
        // pathname: '/api/**', // Optional: restrict to specific paths if needed
      },
      {
        protocol: "https",
        hostname: "ghchart.rshah.org",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      // If you plan to display any GitHub profile images (avatars), add this one too:
      // {
      //   protocol: 'https',
      //   hostname: 'avatars.githubusercontent.com',
      // },
    ],
  },

  // NOTE: You may have other configurations here.
  // Make sure to merge this 'images' object with your existing config.
};

export default nextConfig;
