/** @type {import('tailwindcss').Config} */
import { colors } from './src/tokens/colors';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: colors.background.light,
          dark: colors.background.dark,
          lighter: colors.background.light,
        },
        foreground: {
          DEFAULT: colors.foreground.light,
          dark: colors.foreground.dark,
          lighter: colors.foreground.light,
        },
        primary: {
          DEFAULT: colors.primary.light,
          dark: colors.primary.dark,
          lighter: colors.primary.lighter,
        },
        secondary: {
          DEFAULT: colors.secondary.light,
          dark: colors.secondary.dark,
          lighter: colors.secondary.lighter,
        },
        accent: {
          DEFAULT: colors.accent.light,
          dark: colors.accent.dark,
          lighter: colors.accent.lighter,
        },
        muted: {
          DEFAULT: colors.muted.light,
          dark: colors.muted.dark,
          lighter: colors.muted.lighter,
        },
        success: {
          DEFAULT: colors.success.light,
          dark: colors.success.dark,
          lighter: colors.success.lighter,
        },
        warning: {
          DEFAULT: colors.warning.light,
          dark: colors.warning.dark,
          lighter: colors.warning.lighter,
        },
        info: {
          DEFAULT: colors.info.light,
          dark: colors.info.dark,
          lighter: colors.info.lighter,
        }
      }
    },
  },
  plugins: [],
}