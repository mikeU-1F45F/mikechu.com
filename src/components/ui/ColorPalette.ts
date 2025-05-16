/**
 * Color palette utility for Mike Chu's portfolio website
 * Provides easy access to era-specific color schemes
 * These values should match the ones defined in tailwind.config.js
 */
import type { Era } from '@/app/types';

// Past Era Colors (Windows 95)
export const PastColors = {
  primary: '#00807E',    // classic teal blue
  secondary: '#C0C0C0',  // silver gray
  accent1: '#008080',    // windows teal
  accent2: '#FF0000',    // error red
  accent3: '#FFA500'     // warning orange
};

// Present Era Colors (Modern)
export const PresentColors = {
  primary: '#171C28',    // deep blue-gray
  secondary: '#0078D7',  // Windows 11 blue
  accent1: '#67E480',    // terminal green
  accent2: '#E83E8C',    // accent pink
  accent3: '#FF8A00'     // alert orange
};

// Future Era Colors (AI Integration)
export const FutureColors = {
  primary: '#080C24',    // deep space
  secondary: '#FFFFFF',  // pure white
  accent1: '#00F0FF',    // electric cyan
  accent2: '#FF00A0',    // neon magenta
  accent3: '#7B00FF'     // electric purple
};

/**
 * Gets the color palette for a specific era
 * @param era - The era to get colors for ('past', 'present', or 'future')
 * @returns The color palette object for the specified era
 */
export function getEraColors(era: Era) {
  switch (era) {
    case 'past':
      return PastColors;
    case 'present':
      return PresentColors;
    case 'future':
      return FutureColors;
    default:
      return PresentColors; // Default to present era
  }
}

/**
 * Creates a CSS variable string for all color palettes
 * Useful for setting CSS variables at the root level
 */
export function getAllColorsCssVars() {
  return `
    /* Past Era Colors */
    --past-primary: ${PastColors.primary};
    --past-secondary: ${PastColors.secondary};
    --past-accent1: ${PastColors.accent1};
    --past-accent2: ${PastColors.accent2};
    --past-accent3: ${PastColors.accent3};
    
    /* Present Era Colors */
    --present-primary: ${PresentColors.primary};
    --present-secondary: ${PresentColors.secondary};
    --present-accent1: ${PresentColors.accent1};
    --present-accent2: ${PresentColors.accent2};
    --present-accent3: ${PresentColors.accent3};
    
    /* Future Era Colors */
    --future-primary: ${FutureColors.primary};
    --future-secondary: ${FutureColors.secondary};
    --future-accent1: ${FutureColors.accent1};
    --future-accent2: ${FutureColors.accent2};
    --future-accent3: ${FutureColors.accent3};
  `;
}
