

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    // "../src/**/*.mdx",
    "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-storysource",
    "@storybook/experimental-addon-test",
    "@storybook/addon-a11y",
    "@storybook/addon-designs"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "docs": {
    "autodocs": 'tag',
  },
  "core": {
    "disableTelemetry": true
  }
};
export default config;
// addon-interactions are used to test component scenarios