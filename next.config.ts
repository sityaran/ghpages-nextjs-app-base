import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/ghpages-nextjs-app-base",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
