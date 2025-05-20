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
 * 
 * Features:
 * - Horizontal scroll-locking between three main eras
 * - Smooth transitions with animations when switching eras
 * - Visual indicators showing current era and navigation options
 * - Keyboard shortcuts: Arrow Left/Right to switch eras
 * - Touch gestures: Swipe left/right to navigate between eras
 * - URL tracking of current era for shareable deep links
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  
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
      // Prevent navigation during transitions
      if (isTransitioning) return;
      
      if (e.key === "ArrowLeft") {
        changeEra(getPreviousEra(currentEra));
      } else if (e.key === "ArrowRight") {
        changeEra(getNextEra(currentEra));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentEra, isTransitioning]);

  // URL updates are now handled by EraContext

  // Handle era change with transition state
  const changeEra = (era: Era) => {
    if (era === currentEra || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentEra(era);
    
    // Apply background color immediately
    const container = document.querySelector('.era-container-root');
    if (container instanceof HTMLElement) {
      container.style.backgroundColor = getEraBackgroundColor(era);
    }
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800); // Match duration with CSS transition
    
    if (onEraChange) {
      onEraChange(era);
    }
  };
  
  // Update local era state when initialEra prop changes
  useEffect(() => {
    if (initialEra !== currentEra) {
      setCurrentEra(initialEra);
    }
  }, [initialEra, currentEra]);

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
    if (isTransitioning) return;
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null || isTransitioning) return;
    
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

  // Calculate transform for era positioning
  const getEraTransform = () => {
    if (isMobile) return 'none';
    
    switch (currentEra) {
      case "past":
        return "translateX(0%)";
      case "present":
        return "translateX(-100%)";
      case "future":
        return "translateX(-200%)";
      default:
        return "translateX(-100%)"; // Default to present
    }
  };
  
  // Get background color based on era
  const getEraBackgroundColor = (targetEra: Era = currentEra) => {
    switch (targetEra) {
      case "past":
        return "#008080"; // Teal
      case "present":
        return "#2d3748"; // Slate Gray
      case "future":
        return "#1a202c"; // Dark Blue Gray
      default:
        return "#2d3748"; // Default to present
    }
  };

  return (
    <div className="w-full h-full relative overflow-hidden era-container-root" style={{ width: '100vw', height: '100vh', backgroundColor: getEraBackgroundColor() }}>
      <div 
        ref={containerRef}
        className={cn(
          "w-full h-full flex",
          // Enhanced transition based on layout spec (800-1200ms duration)
          "transition-transform duration-800 ease-custom",
          // Accessibility - respect reduced motion preferences
          "motion-reduce:duration-150 motion-reduce:ease-linear",
          // Additional classes
          className
        )}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: getEraTransform(),
          width: !isMobile ? '300%' : '100%', // Ensure container is 3x width on desktop
          // Custom easing function from layout spec
          '--tw-ease-custom': 'cubic-bezier(0.65, 0, 0.35, 1)',
          minHeight: '100vh', // Ensure full height
          height: '100vh',
          display: 'flex',
          flexDirection: 'row',
          position: 'absolute',
          top: 0,
          left: 0,
        } as React.CSSProperties}
        aria-live="polite"
        aria-atomic="true"
      >
        {children}
      </div>
    </div>
  );
}
