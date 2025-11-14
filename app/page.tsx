import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <HeroSection />
      <div className="mx-auto max-w-7xl">
        <SkillsSection />
        <ExperienceSection />
        <Footer />
      </div>
    </div>
  );
};

export default page;
