"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AccessibilityControlsProps {
  className?: string;
}

/**
 * AccessibilityControls - Provides user controls for accessibility preferences
 * 
 * Features:
 * - Reduced motion option for users who prefer minimal animations
 * - High contrast mode for better visibility
 * - Keyboard navigation support
 * - Screen reader compatibility with ARIA labels
 */
export function AccessibilityControls({ className }: AccessibilityControlsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState("medium");
  const controlsRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close panel
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (controlsRef.current && !controlsRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Apply accessibility settings from localStorage or system preferences
  useEffect(() => {
    // Check for system preferences first
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const prefersHighContrast = window.matchMedia("(prefers-contrast: more)").matches;
    
    // Then check for stored preferences (which override system preferences)
    const storedReducedMotion = localStorage.getItem("reducedMotion") === "true";
    const storedHighContrast = localStorage.getItem("highContrast") === "true";
    const storedFontSize = localStorage.getItem("fontSize") || "medium";
    
    // Set state based on preferences
    setReducedMotion(storedReducedMotion || prefersReducedMotion);
    setHighContrast(storedHighContrast || prefersHighContrast);
    setFontSize(storedFontSize);
    
    // Apply settings to document
    document.documentElement.classList.toggle("reduced-motion", storedReducedMotion || prefersReducedMotion);
    document.documentElement.classList.toggle("high-contrast", storedHighContrast || prefersHighContrast);
    document.documentElement.dataset.fontSize = storedFontSize;
  }, []);

  // Toggle reduced motion preference
  const toggleReducedMotion = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    localStorage.setItem("reducedMotion", String(newValue));
    document.documentElement.classList.toggle("reduced-motion", newValue);
  };

  // Toggle high contrast preference
  const toggleHighContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    localStorage.setItem("highContrast", String(newValue));
    document.documentElement.classList.toggle("high-contrast", newValue);
  };

  // Change font size preference
  const changeFontSize = (size: string) => {
    setFontSize(size);
    localStorage.setItem("fontSize", size);
    document.documentElement.dataset.fontSize = size;
  };

  // Handle keyboard navigation for accessibility panel
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div 
      className={cn(
        "fixed bottom-8 right-8 z-50", 
        className
      )}
      ref={controlsRef}
      onKeyDown={handleKeyDown}
    >
      {/* Accessibility button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center",
          "transition-all duration-300 ease-in-out",
          "focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2",
          isOpen 
            ? "bg-white text-black rotate-45" 
            : "bg-black/30 text-white backdrop-blur-md hover:bg-black/40"
        )}
        aria-label="Accessibility options"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <title>Accessibility Icon</title>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      </button>

      {/* Accessibility controls panel */}
      {isOpen && (
        <div 
          id="accessibility-panel"
          className={cn(
            "absolute bottom-16 right-0 p-5 rounded-lg w-72",
            "bg-black/30 backdrop-blur-md text-white",
            "border border-white/10 shadow-lg",
            "transition-all duration-300 ease-in-out",
            "animate-in fade-in slide-in-from-bottom-5 duration-300"
          )}
          aria-label="Accessibility controls"
        >
          <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m4.93 4.93 4.24 4.24" />
              <path d="m14.83 9.17 4.24-4.24" />
              <path d="m14.83 14.83 4.24 4.24" />
              <path d="m9.17 14.83-4.24 4.24" />
              <circle cx="12" cy="12" r="4" />
            </svg>
            Accessibility Options
          </h2>
          
          <div className="space-y-4">
            {/* Reduced motion toggle */}
            <div className="flex items-center justify-between">
              <label htmlFor="reduced-motion" className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
                Reduced Motion
              </label>
              <button
                type="button"
                id="reduced-motion"
                onClick={toggleReducedMotion}
                className={cn(
                  "w-12 h-7 rounded-full relative transition-colors",
                  reducedMotion ? "bg-white" : "bg-gray-600"
                )}
                aria-pressed={reducedMotion}
              >
                <span
                  className="absolute w-5 h-5 rounded-full"
                  style={{
                    top: '4px',
                    left: reducedMotion ? '28px' : '4px',
                    backgroundColor: reducedMotion ? 'black' : 'white',
                    transition: 'left 0.2s ease-in-out'
                  }}
                />
              </button>
            </div>
            
            {/* High contrast toggle */}
            <div className="flex items-center justify-between">
              <label htmlFor="high-contrast" className="text-sm flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2v20" />
                  <path d="M12 12h10" />
                  <path d="m4.93 4.93 14.14 14.14" />
                </svg>
                High Contrast
              </label>
              <button
                type="button"
                id="high-contrast"
                onClick={toggleHighContrast}
                className={cn(
                  "w-12 h-7 rounded-full relative transition-colors",
                  highContrast ? "bg-white" : "bg-gray-600"
                )}
                aria-pressed={highContrast}
              >
                <span
                  className="absolute w-5 h-5 rounded-full"
                  style={{
                    top: '4px',
                    left: highContrast ? '28px' : '4px',
                    backgroundColor: highContrast ? 'black' : 'white',
                    transition: 'left 0.2s ease-in-out'
                  }}
                />
              </button>
            </div>
            
            {/* Font size options */}
            <div className="pt-2">
              <label htmlFor="font-size" className="text-sm flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="4 7 4 4 20 4 20 7" />
                  <line x1="9" y1="20" x2="15" y2="20" />
                  <line x1="12" y1="4" x2="12" y2="20" />
                </svg>
                Font Size
              </label>
              <div className="flex gap-2 mt-1">
                <button
                  type="button"
                  onClick={() => changeFontSize("small")}
                  className={cn(
                    "px-3 py-1 text-xs rounded-md transition-colors",
                    fontSize === "small" ? "bg-white text-black" : "bg-white/20 hover:bg-white/30"
                  )}
                  aria-pressed={fontSize === "small"}
                >
                  Small
                </button>
                <button
                  type="button"
                  onClick={() => changeFontSize("medium")}
                  className={cn(
                    "px-3 py-1 text-sm rounded-md transition-colors",
                    fontSize === "medium" ? "bg-white text-black" : "bg-white/20 hover:bg-white/30"
                  )}
                  aria-pressed={fontSize === "medium"}
                >
                  Medium
                </button>
                <button
                  type="button"
                  onClick={() => changeFontSize("large")}
                  className={cn(
                    "px-3 py-1 text-base rounded-md transition-colors",
                    fontSize === "large" ? "bg-white text-black" : "bg-white/20 hover:bg-white/30"
                  )}
                  aria-pressed={fontSize === "large"}
                >
                  Large
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
