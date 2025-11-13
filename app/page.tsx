import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <HeroSection />
      <div className="mx-auto max-w-7xl">
        <SkillsSection />
        <Footer />
      </div>
    </div>
  );
};

export default page;
