"use client";

import { useRef, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type Era = "past" | "present" | "future";

interface EraContainerProps {
  children: ReactNode;
  className?: string;
  initialEra?: Era;
  onEraChange?: (era: Era) => void;
}

/**
 * EraContainer - Manages horizontal scroll-locking between the three eras
 * Handles era transitions and keyboard/gesture navigation
 */
export function EraContainer({
  children,
  className,
  initialEra = "present",
  onEraChange,
}: EraContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentEra, setCurrentEra] = useState<Era>(initialEra);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect mobile viewport on client-side only
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Listen for resize events
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle keyboard navigation between eras
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        changeEra(getPreviousEra(currentEra));
      } else if (e.key === "ArrowRight") {
        changeEra(getNextEra(currentEra));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentEra]);

  // URL updates are now handled by EraContext

  // Handle era change
  const changeEra = (era: Era) => {
    setCurrentEra(era);
    if (onEraChange) {
      onEraChange(era);
    }
  };

  // Helper functions for era navigation
  const getPreviousEra = (era: Era): Era => {
    switch (era) {
      case "present":
        return "past";
      case "future":
        return "present";
      default:
        return "future"; // Cycle back to future if at past
    }
  };

  const getNextEra = (era: Era): Era => {
    switch (era) {
      case "past":
        return "present";
      case "present":
        return "future";
      default:
        return "past"; // Cycle back to past if at future
    }
  };

  // Touch gesture handlers for mobile swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;
    
    // Require a minimum swipe distance to trigger era change
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left, go to next era
        changeEra(getNextEra(currentEra));
      } else {
        // Swipe right, go to previous era
        changeEra(getPreviousEra(currentEra));
      }
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div 
        ref={containerRef}
        className={cn(
          "w-full h-full flex transition-transform duration-500 ease-in-out",
          className
        )}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: !isMobile
            ? `translateX(${currentEra === "past" ? "0%" : currentEra === "present" ? "-100%" : "-200%"})`
            : 'none',
          width: !isMobile ? '300%' : '100%' // Ensure container is 3x width on desktop
        }}
      >
        {children}
      </div>
    </div>
  );
}
