"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";

interface ScrollIndicatorProps {
  className?: string;
}

/**
 * ScrollIndicator - Provides a visual indicator of vertical scroll progress
 * Based on the layout specification for scroll progress indicators
 */
export function ScrollIndicator({ className }: ScrollIndicatorProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("");
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Get scroll position for the main document
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      
      // Calculate scroll percentage
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(Math.min(scrollPercentage, 100));
      
      // Determine active section based on scroll position
      // This could be enhanced to detect actual sections in view
      const sections = document.querySelectorAll('[data-section]');
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= clientHeight / 2 && rect.bottom >= clientHeight / 2) {
          setActiveSection(section.getAttribute('data-section') || "");
        }
      }
    };

    // Add scroll event listener with passive option for performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial calculation
    handleScroll();
    
    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      ref={indicatorRef}
      className={cn(
        // Base positioning and styling
        "fixed right-4 top-1/2 transform -translate-y-1/2 h-1/3 w-1.5",
        // Rounded appearance
        "rounded-full bg-white/20",
        // Responsive visibility
        "hidden md:block", // Only show on tablet and larger screens
        // Additional styling
        "z-50 backdrop-blur-sm",
        className
      )}
      role="progressbar"
      aria-valuenow={scrollProgress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
      tabIndex={0}
    >
      {/* Progress indicator */}
      <div 
        className={cn(
          "bg-white rounded-full w-full",
          "transition-all duration-200 ease-out",
          "shadow-glow"
        )}
        style={{ 
          height: `${scrollProgress}%`,
        }}
        aria-hidden="true"
      />
      
      {/* Active section indicator (optional enhancement) */}
      {activeSection && (
        <div 
          className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-xs text-white/80 whitespace-nowrap"
          style={{ 
            opacity: scrollProgress > 5 ? 1 : 0,
            transition: "opacity 0.3s ease"
          }}
        >
          {activeSection}
        </div>
      )}
    </div>
  );
}
