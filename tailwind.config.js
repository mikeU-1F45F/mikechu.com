/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 8px rgba(255, 255, 255, 0.7)',
      },
      colors: {
        // Past Era (Windows 95)
        past: {
          primary: 'var(--past-primary)',      // teal
          secondary: 'var(--past-secondary)',  // silver gray
          accent: 'var(--past-accent)'         // navy
        },
        // Present Era (Modern)
        present: {
          primary: 'var(--present-primary)',    // slate gray
          secondary: 'var(--present-secondary)', // blue
          accent: 'var(--present-accent)'        // green
        },
        // Future Era (AI Integration)
        future: {
          primary: 'var(--future-primary)',     // dark blue gray
          secondary: 'var(--future-secondary)',  // purple
          accent1: 'var(--future-accent1)',      // pink
          accent2: 'var(--future-accent2)'       // teal
        }
      },
      fontFamily: {
        // Past Era (Windows 95)
        'ms-sans': ['"MS Sans Serif"', 'Arial', 'sans-serif'],
        'vt323': ['VT323', 'monospace'],
        'courier-new': ['"Courier New"', 'monospace'],
        
        // Present Era (Modern)
        'roboto': ['Roboto', 'system-ui', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'sf-pro': ['"SF Pro Text"', 'system-ui', 'sans-serif'],
        'cascadia': ['"Cascadia Code"', '"Fira Code"', 'monospace'],
        
        // Future Era (AI Integration)
        'eurostile': ['Orbitron', 'Audiowide', 'sans-serif'],
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
