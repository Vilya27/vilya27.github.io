import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  allowedDevOrigins:   ['192.168.1.230', 'localhost', 'myapp.local'],
};

export default nextConfig;
