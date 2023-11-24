/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    DB_LOCAL_URI: "mongodb://127.0.0.1:27017/bookit-nextjs",
    DB_URI: "",
    NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "ASDFGHJKLZXCVBNMQWERTYUIOP",
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
