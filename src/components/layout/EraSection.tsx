"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import type { Era } from "./EraContainer";

export interface EraSectionProps {
  children: React.ReactNode;
  className?: string;
  era: "past" | "present" | "future";
  isActive?: boolean;
  style?: React.CSSProperties;
}

/**
 * EraSection - Container for a specific era's content
 * Handles vertical scrolling within each era
 * 
 * Features:
 * - Independent vertical scrolling within each era
 * - Sections arranged vertically
 * - Smooth scroll animations between sections
 * - Scroll-triggered animations
 * - Parallax scrolling effects for depth
 */
export function EraSection({
  children,
  className,
  era,
  isActive = false,
  style,
}: EraSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [opacity, setOpacity] = useState(isActive ? 1 : 0);

  // Track scroll position for scroll-triggered animations
  useEffect(() => {
    if (!isActive) return;

    const handleScroll = () => {
      if (sectionRef.current) {
        setScrollPosition(sectionRef.current.scrollTop);
      }
    };

    const currentSection = sectionRef.current;
    if (currentSection) {
      currentSection.addEventListener('scroll', handleScroll);
      return () => currentSection.removeEventListener('scroll', handleScroll);
    }
  }, [isActive]);

  // Handle fade transition when active state changes
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isActive) {
      // Short delay to allow background color to change first
      timer = setTimeout(() => {
        setOpacity(1);
      }, 100);
    } else {
      setOpacity(0);
    }
    
    return () => clearTimeout(timer);
  }, [isActive]);

  // Determine border radius based on era (from layout spec)
  const getBorderRadius = () => {
    switch (era) {
      case 'past':
        return '0px'; // Windows 95 has no rounded corners
      case 'present':
        return '0.5rem'; // 8px for modern UI
      case 'future':
        return '1rem'; // 16px for futuristic UI
      default:
        return '0.5rem';
    }
  };

  // Determine shadow style based on era (from layout spec)
  const getShadowStyle = () => {
    switch (era) {
      case 'past':
        return '1px 1px 0 #000'; // Hard pixel shadows with 1px offset
      case 'present':
        return '0 2px 4px rgba(0,0,0,0.1)'; // Subtle elevation shadows
      case 'future':
        return '0 0 16px rgba(255,255,255,0.2)'; // Glowing edges
      default:
        return 'none';
    }
  };

  return (
    <div
      ref={sectionRef}
      className={cn(
        // Base section styles
        "w-full h-full flex-shrink-0 flex-grow",
        // Handle visibility based on active state - always show on desktop for horizontal scrolling
        isActive ? "block" : "hidden md:block",
        // Vertical scrolling within each era
        "overflow-y-auto",
        // Smooth scrolling behavior
        "scroll-smooth",
        // Responsive adjustments - ensure full width on all screens
        "md:min-w-full lg:min-w-full",
        // Mobile adjustments - stack vertically on small screens
        "md:flex-row",
        // Transition effects
        "transition-all duration-500 ease-in-out",
        // Scroll snap for section navigation
        "snap-y snap-mandatory",
        // Default styling for each era section
        "p-4 md:p-6 lg:p-8",
        // Performance optimizations
        "will-change-scroll",
        className
      )}
      data-era={era}
      style={{
        ...style,
        // Apply era-specific styling
        '--border-radius': getBorderRadius(),
        '--shadow-style': getShadowStyle(),
        // Track scroll position for animations
        '--scroll-y': `${scrollPosition}px`,
        // Ensure proper display
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // Apply opacity transition
        opacity,
        transition: 'opacity 300ms ease-in-out',
      } as React.CSSProperties}
      aria-label={`${era} era content`}
    >
      <div className="min-h-screen w-full snap-start">
        {children}
      </div>
    </div>
  );
}
