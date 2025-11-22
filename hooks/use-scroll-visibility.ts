"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface ScrollVisibilityOptions {
  threshold?: number;
  hideDelay?: number;
}

export const useScrollVisibility = (options: ScrollVisibilityOptions = {}) => {
  const { threshold = 50, hideDelay = 300 } = options;
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    const currentScrollY = typeof window !== "undefined" ? window.scrollY : 0;
    const isScrollingUp = currentScrollY < lastScrollYRef.current;
    const hasScrolledThreshold = Math.abs(currentScrollY - lastScrollYRef.current) > threshold;

    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }

    if (isScrollingUp || currentScrollY === 0) {
      setIsVisible(true);
    } else if (hasScrolledThreshold) {
      hideTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, hideDelay);
    }

    lastScrollYRef.current = currentScrollY;
  }, [threshold, hideDelay]);

  useEffect(() => {
    // Initialize with visible state on mount
    setIsVisible(true);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  return isVisible;
};
