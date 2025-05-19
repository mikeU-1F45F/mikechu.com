"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import type { Era } from "./EraContainer";

interface EraSectionProps {
  children: ReactNode;
  className?: string;
  era: Era;
  isActive?: boolean;
  style?: React.CSSProperties;
}

/**
 * EraSection - Container for a specific era's content
 * Handles vertical scrolling within each era
 */
export function EraSection({
  children,
  className,
  era,
  isActive = false,
  style,
}: EraSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

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
        // Responsive adjustments - ensure full width on all screens
        "md:min-w-full lg:min-w-full",
        // Mobile adjustments - stack vertically on small screens
        "md:flex-row",
        // Transition effects
        "transition-all duration-300 ease-in-out",
        // Default styling for each era section
        "p-8",
        className
      )}
      data-era={era}
      style={style}
    >
      <div className="min-h-screen w-full">
        {children}
      </div>
    </div>
  );
}
