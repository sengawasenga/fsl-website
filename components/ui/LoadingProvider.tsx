"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

interface LoadingProviderProps {
  children: React.ReactNode;
}

export default function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Ensure minimum loading time for smooth UX
    const minLoadingTime = 1500; // 1.5 seconds minimum
    const startTime = Date.now();

    // Wait for components to be ready
    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    // Check if document is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsReady(true);
  };

  return (
    <>
      <LoadingScreen
        isLoading={isLoading}
        onLoadingComplete={handleLoadingComplete}
      />
      <div className={isReady ? "animate-fade-in" : "opacity-0"}>
        {children}
      </div>
    </>
  );
}
