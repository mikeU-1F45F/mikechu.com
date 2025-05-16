/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Past Era (Windows 95)
        past: {
          primary: '#00807E',    // classic teal blue
          secondary: '#C0C0C0',  // silver gray
          accent1: '#008080',    // windows teal
          accent2: '#FF0000',    // error red
          accent3: '#FFA500'     // warning orange
        },
        // Present Era (Modern)
        present: {
          primary: '#171C28',    // deep blue-gray
          secondary: '#0078D7',  // Windows 11 blue
          accent1: '#67E480',    // terminal green
          accent2: '#E83E8C',    // accent pink
          accent3: '#FF8A00'     // alert orange
        },
        // Future Era (AI Integration)
        future: {
          primary: '#080C24',    // deep space
          secondary: '#FFFFFF',  // pure white
          accent1: '#00F0FF',    // electric cyan
          accent2: '#FF00A0',    // neon magenta
          accent3: '#7B00FF'     // electric purple
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
