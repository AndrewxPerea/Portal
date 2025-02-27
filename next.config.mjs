/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "guovckyv7e.ufs.sh",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
