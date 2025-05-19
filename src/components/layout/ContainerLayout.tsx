"use client";

import { useEffect, useState, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerLayoutProps {
  children: ReactNode;
  className?: string;
}

/**
 * ContainerLayout - The main responsive container layout for the portfolio website
 * Handles responsive behavior across all device sizes
 */
export function ContainerLayout({ children, className }: ContainerLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
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
        "min-h-screen w-full overflow-x-hidden",
        // Grid system based on layout specification
        "grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12",
        // Spacing scale from layout specification
        "gap-4",
        // Additional custom classes
        className
      )}
    >
      {children}
    </div>
  );
}
