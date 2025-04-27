/** @type { import('@storybook/react').Preview } */
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import '../src/index.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
  },
  decorators: [
    withThemeByDataAttribute({
      defaultTheme: 'light',
      attribute: 'data-mode',
      themes: {
        light: 'light',
        dark: 'dark',
      },
    }),
  ],
  // 👇👇 This was missing, adding this will show the theme toolbar button
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
          // You can add more themes here later
        ],
      },
    },
  },
};

export default preview;
