"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import UnicornScene with no SSR
const UnicornScene = dynamic(() => import("unicornstudio-react"), {
  ssr: false,
  loading: () => <div className="w-full h-screen bg-black animate-pulse" />
});

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
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

  return windowSize;
};

export const ComponentDynamic = () => {
  const { width, height } = useWindowSize();

  return (
    <div className={cn("flex flex-col items-center")}>
      <UnicornScene 
        production={true} 
        projectId="erpu4mAlEe8kmhaGKYe9" 
        width={width} 
        height={height} 
      />
    </div>
  );
};
