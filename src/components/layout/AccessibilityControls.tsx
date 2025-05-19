"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AccessibilityControlsProps {
  className?: string;
}

export function AccessibilityControls({ className }: AccessibilityControlsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  // Apply accessibility settings
  useEffect(() => {
    // Get stored preferences
    const storedReducedMotion = localStorage.getItem("reducedMotion") === "true";
    const storedHighContrast = localStorage.getItem("highContrast") === "true";
    
    setReducedMotion(storedReducedMotion);
    setHighContrast(storedHighContrast);
    
    // Apply settings to document
    document.documentElement.classList.toggle("reduced-motion", storedReducedMotion);
    document.documentElement.classList.toggle("high-contrast", storedHighContrast);
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

  return (
    <div className={cn("fixed bottom-8 right-8 z-50", className)}>
      {/* Accessibility button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center"
        aria-label="Accessibility options"
        aria-expanded={isOpen}
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
          className="text-white"
          aria-hidden="true"
        >
          <title>Accessibility Icon</title>
          <circle cx="12" cy="12" r="10" />
          <path d="m4.93 4.93 4.24 4.24" />
          <path d="m14.83 9.17 4.24-4.24" />
          <path d="m14.83 14.83 4.24 4.24" />
          <path d="m9.17 14.83-4.24 4.24" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      </button>

      {/* Accessibility controls panel */}
      {isOpen && (
        <div className="absolute bottom-12 right-0 bg-black/20 backdrop-blur-md p-4 rounded-lg w-64 text-white">
          <h2 className="text-lg font-medium mb-2">Accessibility</h2>
          
          <div className="space-y-2">
            {/* Reduced motion toggle */}
            <div className="flex items-center justify-between">
              <label htmlFor="reduced-motion" className="text-sm">
                Reduced Motion
              </label>
              <button
                type="button"
                id="reduced-motion"
                onClick={toggleReducedMotion}
                className={cn(
                  "w-10 h-6 rounded-full relative transition-colors",
                  reducedMotion ? "bg-white" : "bg-gray-600"
                )}
                aria-pressed={reducedMotion}
              >
                <span
                  className={cn(
                    "absolute top-1 w-4 h-4 rounded-full transition-transform",
                    reducedMotion ? "bg-black translate-x-5" : "bg-white translate-x-1"
                  )}
                />
              </button>
            </div>
            
            {/* High contrast toggle */}
            <div className="flex items-center justify-between">
              <label htmlFor="high-contrast" className="text-sm">
                High Contrast
              </label>
              <button
                type="button"
                id="high-contrast"
                onClick={toggleHighContrast}
                className={cn(
                  "w-10 h-6 rounded-full relative transition-colors",
                  highContrast ? "bg-white" : "bg-gray-600"
                )}
                aria-pressed={highContrast}
              >
                <span
                  className={cn(
                    "absolute top-1 w-4 h-4 rounded-full transition-transform",
                    highContrast ? "bg-black translate-x-5" : "bg-white translate-x-1"
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
