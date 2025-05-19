"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  className?: string;
}

export function ScrollIndicator({ className }: ScrollIndicatorProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      
      // Calculate scroll percentage
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(scrollPercentage);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Initial calculation
    handleScroll();
    
    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={cn(
        "fixed right-2 top-1/2 transform -translate-y-1/2 h-1/3 w-1 rounded-full bg-white/20",
        "hidden md:block", // Only show on tablet and larger screens
        className
      )}
    >
      <div 
        className="bg-white rounded-full w-full"
        style={{ 
          height: `${scrollProgress}%`,
          transition: "height 0.1s ease-out" 
        }}
        aria-hidden="true"
      />
    </div>
  );
}
