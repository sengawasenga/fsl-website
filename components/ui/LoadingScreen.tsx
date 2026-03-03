"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface LoadingScreenProps {
  isLoading: boolean;
  onLoadingComplete?: () => void;
}

export default function LoadingScreen({
  isLoading,
  onLoadingComplete,
}: LoadingScreenProps) {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // Wait for fade-out animation to complete before unmounting
      const timer = setTimeout(() => {
        setShouldRender(false);
        onLoadingComplete?.();
      }, 600); // Match the fade-out duration

      return () => clearTimeout(timer);
    }
  }, [isLoading, onLoadingComplete]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-custom-light transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative">
        {/* Animated logo */}
        <div className="animate-logo-pulse">
          <Image
            src="/img/fsl-logo.png"
            alt="Fondation Sylvain Lumbala"
            width={150}
            height={150}
            priority
            className="animate-logo-rotate"
          />
        </div>
      </div>
    </div>
  );
}
