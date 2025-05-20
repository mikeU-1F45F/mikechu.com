"use client";

import { cn } from "@/lib/utils";
import { useRef, useState, useEffect } from "react";
import type { ReactNode, CSSProperties } from "react";

interface ContainerLayoutProps {
  children: ReactNode;
  className?: string;
}

/**
 * ContainerLayout - The main responsive container layout for the portfolio website
 * Handles responsive behavior across all device sizes according to the layout specification
 * 
 * Grid System: 12-column for desktop, 8-column for tablet, 4-column for mobile
 * Spacing Scale: 4px base unit (4, 8, 16, 24, 32, 48, 64, 96)
 */
export function ContainerLayout({ children, className }: ContainerLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width < 768); // Set mobile breakpoint at 768px
    };

    // Set initial width
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        // Base container styles
        "overflow-x-hidden",
        // Grid system based on layout specification (4-col mobile, 8-col tablet, 12-col desktop)
        "grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12",
        // Spacing scale from layout specification (4px base unit)
        "gap-4 md:gap-6 lg:gap-8",
        // Performance optimization
        "will-change-transform",
        // Additional custom classes
        className
      )}
      style={{
        // CSS variables for spacing scale based on 4px base unit
        '--space-1': '4px',
        '--space-2': '8px',
        '--space-4': '16px',
        '--space-6': '24px',
        '--space-8': '32px',
        '--space-12': '48px',
        '--space-16': '64px',
        '--space-24': '96px',
        // Ensure full viewport coverage
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        position: 'relative',
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
