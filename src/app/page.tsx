import AboutUsSection from "@/containers/AboutUs";
import ContributeSection from "@/containers/ContributeSection";
import CostSection from "@/containers/CostSection";
import FAQSection from "@/containers/FAQSection";
import FeatureSection from "@/containers/FeatureSection";
import HeroSection from "@/containers/HeroSection";

export default function Home() {
  return (
    <main className="main-container relative">
      <HeroSection />
      <FeatureSection />
      <CostSection />
      <ContributeSection />
      <AboutUsSection />
      <FAQSection />
    </main>
  )
}
