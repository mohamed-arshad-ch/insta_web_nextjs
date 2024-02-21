/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "instagram.fblr4-1.fna.fbcdn.net",
        port: "",
        pathname: "/v/**",
      },
      {
        protocol: "https",
        hostname: "instagram.fblr4-5.fna.fbcdn.net",
        port: "",
        pathname: "/v/**",
      },
    ],
  },
};

export default nextConfig;
