import path from 'path';
import webpack from "webpack";
import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "shared": path.resolve(__dirname, "../src")
    };
    config.plugins = [
      ...config.plugins,
      new webpack.DefinePlugin({
        "WPEnv.ENVIRONMENT": JSON.stringify("development"),
        "WPEnv.PACKAGE_VERSION": JSON.stringify(process.env.npm_package_version),
        "WPEnv.RELEASE_HASH": "\"undefined\"",
        "WPEnv.BUILD_DATE": Date.now()
      })
    ]
    return config;
  },
};
export default config;
