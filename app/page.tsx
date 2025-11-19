import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <HeroSection />
      <div className="mx-auto max-w-7xl">
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <Footer />
      </div>
    </div>
  );
};

export default page;
