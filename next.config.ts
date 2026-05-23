import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/aboutUs", destination: "/about-us", permanent: true },
      { source: "/contactUs", destination: "/contact-us", permanent: true },
      {
        source: "/privateLabels",
        destination: "/private-labels",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
