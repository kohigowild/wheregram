/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};

const withImages = require('next-images');

module.exports = nextConfig;
module.exports = withImages();
