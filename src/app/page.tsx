import AboutUsSection from "@/containers/AboutUs";
import ContributeSection from "@/containers/ContributeSection";
import CostSection from "@/containers/CostSection";
import DownloadSection from "@/containers/DownloadSection";
import FAQSection from "@/containers/FAQSection";
import FeatureSection from "@/containers/FeatureSection";
import Footer from "@/containers/Footer";
import HeroSection from "@/containers/HeroSection";

export default function Home() {
  return (
    <main className="main-container relative">
      <HeroSection />
      <FeatureSection />
      <CostSection />
      <DownloadSection />
      <AboutUsSection />
      <Footer />
    </main>
  )
}
