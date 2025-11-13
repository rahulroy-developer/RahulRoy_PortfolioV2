import React from "react";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";

const page = () => {
  return (
    <div className="max-w-7xl">
      <HeroSection />
      <SkillsSection />
    </div>
  );
};

export default page;
