/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Past Era (Windows 95)
        'ms-sans': ['"MS Sans Serif"', 'Arial', 'sans-serif'],
        'fixedsys': ['Fixedsys', 'monospace'],
        'courier-new': ['"Courier New"', 'monospace'],
        
        // Present Era (Modern)
        'segoe': ['"Segoe UI"', 'system-ui', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'sf-pro': ['"SF Pro Text"', 'system-ui', 'sans-serif'],
        'cascadia': ['"Cascadia Code"', '"Fira Code"', 'monospace'],
        
        // Future Era (AI Integration)
        'eurostile': ['Eurostile', 'Industry', 'sans-serif'],
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
        'jetbrains': ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        // Custom font sizes if needed
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}
