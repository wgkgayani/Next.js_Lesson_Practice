/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  /* use remote images from remotePatterns */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
/*export default nextConfig; */
