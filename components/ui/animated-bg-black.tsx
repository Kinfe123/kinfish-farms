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

  useEffect(() => {
    setIsClient(true);
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();
    
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { ...windowSize, isClient };
};

export const Component = () => {
  const { width, height, isClient } = useWindowSize();

  // Don't render the UnicornScene until we're on the client
  if (!isClient) {
    return (
      <div className={cn("flex flex-col items-center justify-center min-h-screen")}>
        <div className="w-full h-screen bg-black" />
      </div>
    );
  }

  return (
    <div className={cn("flex relative flex-col items-center")}>
    
      <UnicornScene 
        production={true} 
        projectId="erpu4mAlEe8kmhaGKYe9" 
        width={width} 
        height={height} 
      />
    </div>
  );
};
