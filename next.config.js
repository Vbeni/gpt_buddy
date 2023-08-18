/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    env: {
      OPENAI_API_KEY: process.env.API_KEY,
    },
  };
  