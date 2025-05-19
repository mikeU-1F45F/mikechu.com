import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and tailwind-merge
 * @param inputs - Class values to be combined
 * @returns Combined class string
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Determines if the current viewport is mobile
 * @returns Boolean indicating if viewport is mobile
 */
export function isMobileViewport(): boolean {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768; // md breakpoint in Tailwind
}

/**
 * Gets the appropriate spacing value based on viewport size
 * @param base Base spacing unit in pixels
 * @returns Responsive spacing value
 */
export function getResponsiveSpacing(base: number): string {
    const spacingMap = {
        4: "1rem",
        8: "2rem",
        16: "4rem",
        24: "6rem",
        32: "8rem",
        48: "12rem",
        64: "16rem",
        96: "24rem"
    };
    
    const key = base as keyof typeof spacingMap;
    return spacingMap[key] || `${base / 4}rem`;
}
