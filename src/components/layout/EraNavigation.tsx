"use client";

import { cn } from "@/lib/utils";
import type { Era } from "./EraContainer";

interface EraNavigationProps {
  currentEra: Era;
  onEraChange: (era: Era) => void;
  className?: string;
}

/**
 * EraNavigation - Provides UI controls for navigating between eras
 * 
 * Features:
 * - Visual indicators showing current era and navigation options
 * - Smooth transitions with animations when switching eras
 * - Keyboard accessibility for navigation
 * - Touch-friendly interface elements
 */
export function EraNavigation({
  currentEra,
  onEraChange,
  className,
}: EraNavigationProps) {
  const eras: Era[] = ["past", "present", "future"];
  
  // Handle era button click
  const handleEraClick = (era: Era) => {
    if (onEraChange) {
      onEraChange(era);
      
      // Update URL without page reload
      const params = new URLSearchParams(window.location.search);
      params.set("era", era);
      window.history.replaceState({}, "", `?${params.toString()}`);
    }
  };
  
  // Get era labels for better accessibility
  const getEraLabel = (era: Era): string => {
    switch (era) {
      case "past":
        return "Windows 95 Era";
      case "present":
        return "Modern Era";
      case "future":
        return "AI Integration Era";
      default:
        return era;
    }
  };

  return (
    <nav
      className={cn(
        // Base positioning and styling
        "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50",
        // Container styling
        "flex items-center justify-center gap-6 px-8 py-4 rounded-full",
        // Visual effects
        "bg-black/40 backdrop-blur-md shadow-lg",
        // Responsive adjustments
        "sm:gap-8 md:px-10",
        // Transition effects
        "transition-all duration-300 ease-in-out",
        // Hover effects - expand slightly on hover
        "hover:bg-black/50",
        className
      )}
      aria-label="Era navigation"
    >
      {/* Era navigation buttons */}
      {eras.map((era) => (
        <button
          type="button"
          key={era}
          onClick={() => handleEraClick(era)}
          className={cn(
            // Base button styling
            "w-4 h-4 rounded-full transition-all duration-300 block",
            // Focus states for accessibility
            "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50",
            // Hover effects
            "hover:scale-125",
            // Active/current era styling
            currentEra === era
              ? "bg-white scale-125 shadow-glow"
              : "bg-white/50 hover:bg-white/80",
            // Era-specific styling
            era === "past" && "border border-past-accent/30",
            era === "present" && "border border-present-accent/30",
            era === "future" && "border border-future-accent1/30"
          )}
          aria-label={`Switch to ${getEraLabel(era)}`}
          aria-current={currentEra === era ? "page" : undefined}
        />
      ))}      
    </nav>
  );
}
