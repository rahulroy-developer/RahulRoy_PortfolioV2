"use client";
import fluidCursor from "@/hooks/use-FluidCursor";
import { useEffect } from "react";

const AnimatedCursor = () => {
  useEffect(() => {
    fluidCursor();
  }, []);

  return (
    <div className="absolute z-0 h-full w-full">
      <canvas id="fluid" className="h-full w-full" />
    </div>
  );
};

export default AnimatedCursor;
