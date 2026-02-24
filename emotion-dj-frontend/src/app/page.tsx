import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import TechPeekSection from "@/components/landing/TechPeekSection";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-void">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <TechPeekSection />
      <Footer />
    </main>
  );
}
