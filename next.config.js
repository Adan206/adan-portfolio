const debug = process.env.NODE_ENV !== "production";

module.exports = {
  assetPrefix: !debug ? "/adan-portfolio/" : "",
  // images: { loader: "imgix" },
  // reactStrictMode: true,
};
