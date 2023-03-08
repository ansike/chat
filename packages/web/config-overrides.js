const { overrideDevServer } = require("customize-cra");
const {
  override,
  addLessLoader,
  adjustStyleLoaders,
  addWebpackAlias,
} = require("customize-cra");
const path = require("path");

module.exports = {
  webpack: override(
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {},
      },
    }),
    adjustStyleLoaders(({ use: [, , postcss] }) => {
      const postcssOptions = postcss.options;
      postcss.options = { postcssOptions };
    }),
    addWebpackAlias({
      "@": path.resolve(__dirname, "src"),
    })
  ),
  devServer: overrideDevServer((config) => {
    return {
      ...config,
      proxy: {
        "/api": {
          target: "http://localhost:5000",
          changeOrigin: true,
          secure: false,
        },
      },
    };
  }),
};
