import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    PORT: '5173',
  },
};

export default nextConfig;
