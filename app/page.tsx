import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "@/components/Footer";
import SkillsSection from "./components/SkillsSection";
import AboutSection from "./components/AboutSection";

const page = () => {
  return (
    <div>
      <HeroSection />
      <div className="mx-auto max-w-7xl">
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
};

export default page;
