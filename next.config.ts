import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? "/creative-Point-Media" : "",
  assetPrefix: isGitHubPages ? "/creative-Point-Media/" : undefined,
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    unoptimized: isGitHubPages,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.coverr.co",
      },
      {
        protocol: "https",
        hostname: "player.vimeo.com",
      },
    ],
  },
};

export default nextConfig;
