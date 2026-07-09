import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        navy: 'rgb(var(--color-navy) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        cobalt: 'rgb(var(--color-cobalt) / <alpha-value>)',
        cobaltDark: 'rgb(var(--color-cobalt-dark) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        softLine: 'rgb(var(--color-soft-line) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
        successText: 'rgb(var(--color-success-text) / <alpha-value>)',
      },
      fontFamily: {
        display: ['Times New Roman', 'Georgia', 'serif'],
        ui: ['Inter', 'Avenir Next', 'Segoe UI', 'Arial', 'sans-serif'],
        mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        script: ['Segoe Print', 'Bradley Hand', 'Comic Sans MS', 'cursive'],
      },
      boxShadow: {
        panel: '0 18px 45px rgba(31, 55, 102, 0.10)',
        card: '0 12px 28px rgba(31, 55, 102, 0.06)',
        button: '0 10px 18px rgba(40, 79, 201, 0.20)',
      },
    },
  },
  plugins: [],
} satisfies Config;
