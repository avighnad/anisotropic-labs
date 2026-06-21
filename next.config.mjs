/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  async redirects() {
    return [
      { source: "/app", destination: "/projects", permanent: true },
      { source: "/app/:path*", destination: "/projects/:path*", permanent: true },
      { source: "/developers", destination: "/code", permanent: true },
      { source: "/developers/:path*", destination: "/code/:path*", permanent: true },
      { source: "/blog", destination: "/research", permanent: true },
      { source: "/blog/:slug", destination: "/research", permanent: true },
      { source: "/resources", destination: "/research", permanent: true },
      { source: "/resources/:path*", destination: "/research", permanent: true },
      { source: "/company", destination: "/contact", permanent: true },
      { source: "/company/:path*", destination: "/contact/:path*", permanent: true }
    ];
  }
};

export default nextConfig;
