"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import UnicornScene from "unicornstudio-react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setWindowSize({ width, height });
      setIsMobile(width < 768); // Mobile breakpoint at 768px
    };

    // Set initial size
    handleResize();
    
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { ...windowSize, isClient, isMobile };
};

export const Component = () => {
  const { width, height, isClient, isMobile } = useWindowSize();

  // Don't render the UnicornScene until we're on the client
  if (!isClient) {
    return (
      <div className={cn("fixed inset-0 w-full h-full bg-black")}>
        <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black animate-pulse" />
      </div>
    );
  }

  return (
    <div className={cn(
      "fixed inset-0 w-full h-full overflow-hidden",
      "flex items-center justify-center"
    )}>
      <div className={cn(
        "w-full h-full",
        // Mobile optimizations
        isMobile && "min-h-screen"
      )}>
        <UnicornScene 
          production={true} 
          projectId="erpu4mAlEe8kmhaGKYe9" 
          width={width} 
          height={height}
        />
      </div>
    </div>
  );
};
