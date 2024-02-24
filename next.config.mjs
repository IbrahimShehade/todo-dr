/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Match images with "https" protocol
        hostname: "robohash.org", // Match images from "www.thecocktaildb.com" domain
      },
    ],
  },
};

export default nextConfig;
