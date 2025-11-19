import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "@/components/Footer";
import SkillsSection2 from "./components/SkillsSection2";

const page = () => {
  return (
    <div>
      <HeroSection />
      <div className="mx-auto max-w-7xl">
        <SkillsSection />
        <SkillsSection2 />
        <ProjectsSection />
        <ExperienceSection />
        <Footer />
      </div>
    </div>
  );
};

export default page;
