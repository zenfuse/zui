module.exports = {
  stories: [
    "../src/components/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/ui/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "storybook-addon-next-router",
    "@storybook/addon-essentials",
    "@storybook/addon-actions/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-docs/register",
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  webpackFinal: (config) => {
    // config.plugins.push(new MiniCssExtractPlugin());
    // config.module.rules.push({
    //   test: /\.css$/,
    //   // use: ["style-loader", "css-loader"],
    //   use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
    // });
    return {
      ...config,
      module: {
        rules: config.module.rules.filter((rule) => {
          if (!rule.use) return true;
          return !rule.use.find(
            (useItem) =>
              typeof useItem.loader === "string" &&
              useItem.loader.includes("eslint-loader")
          );
        }),
      },
    };
  },
};
