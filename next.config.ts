const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  assetPrefix: "",
  basePath: "",
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  output: "export",
};

export default nextConfig;
