/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cpfmainbucket.s3.amazonaws.com",
      },
      {
        hostname: "cpffloors.com",
      },
    ],
  },
};

export default nextConfig;
