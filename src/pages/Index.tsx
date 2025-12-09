import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import VistaBuzzSection from "@/components/VistaBuzzSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Jai Prakash | Software Engineer & Frontend Developer";
  }, []);

  return (
    <div className="min-h-screen bg-background dark">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <VistaBuzzSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
