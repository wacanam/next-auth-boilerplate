/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "platform-lookaside.fbsbx.com"
      },
      {
        hostname: "avatars.githubusercontent.com"
      },
      {
        hostname: "lh3.googleusercontent.com"
      }
    ]
  }
}

module.exports = nextConfig
