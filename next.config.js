/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "pdfjs-dist/build/pdf.mjs": "pdfjs-dist/legacy/build/pdf.js",
      "pdfjs-dist/build/pdf.worker.min.mjs": "pdfjs-dist/legacy/build/pdf.worker.min.js",
    };

    return config;
  },
}

module.exports = nextConfig
