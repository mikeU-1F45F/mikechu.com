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
 */
export function EraNavigation({
  currentEra,
  onEraChange,
  className,
}: EraNavigationProps) {
  const eras: Era[] = ["past", "present", "future"];

  return (
    <div
      className={cn(
        "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50",
        "flex items-center justify-center gap-4 px-6 py-3 rounded-full",
        "bg-black/40 backdrop-blur-md shadow-lg",
        className
      )}
    >
      {eras.map((era) => (
        <button
          type="button"
          key={era}
          onClick={() => onEraChange(era)}
          className={cn(
            "w-4 h-4 rounded-full transition-all duration-300 block",
            "hover:scale-125 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50",
            currentEra === era
              ? "bg-white scale-125 shadow-glow"
              : "bg-white/50 hover:bg-white/80"
          )}
          aria-label={`Switch to ${era} era`}
          aria-current={currentEra === era ? "page" : undefined}
        />
      ))}
    </div>
  );
}
