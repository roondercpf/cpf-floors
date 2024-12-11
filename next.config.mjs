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
      {
        hostname: "cpfmainbucket.s3.us-east-1.amazonaws.com"
      }
    ],
  },
};

export default nextConfig;
