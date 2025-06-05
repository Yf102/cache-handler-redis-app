import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  cacheHandler:
      process.env.NODE_ENV === "production"
          ? "./utils/cache/cache-handler.js"
          : undefined,
  cacheMaxMemorySize: 0, // disable default in-memory caching
};

module.exports = nextConfig;