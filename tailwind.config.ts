import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#fbfcf8',
        navy: '#0c183e',
        ink: '#223156',
        muted: '#64708f',
        cobalt: '#284fc9',
        cobaltDark: '#173caa',
        line: '#d8e1ee',
        softLine: '#e7edf5',
        success: '#dff3e7',
        successText: '#2d8060',
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
