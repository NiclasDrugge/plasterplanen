const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  assetPrefix: isProd ? "/plasterplanen/" : "",
  basePath: isProd ? "/plasterplanen" : "",
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  output: "export",
};

export default nextConfig;
