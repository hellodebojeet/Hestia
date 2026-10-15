/** @type {import("next").NextConfig} */
const nextConfig = {
  transpilePackages: ["@hestia/ui"],
  webpack: (config) => {
    // Repo convention: TypeScript files import each other with explicit
    // `.js` suffixes (same as apps/api under tsx). Teach webpack to
    // resolve those to their .tsx/.ts sources.
    config.resolve.extensionAlias = {
      ".js": [".tsx", ".ts", ".jsx", ".js"],
    };
    return config;
  },
};

export default nextConfig;
