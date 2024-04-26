import AboutUsSection from "@/containers/AboutUs";
import CostSection from "@/containers/CostSection";
import DownloadSection from "@/containers/DownloadSection";
import FeatureSection from "@/containers/FeatureSection";
import Footer from "@/containers/Footer";
import Header from "@/containers/Header";
import HeroSection from "@/containers/HeroSection";

export default function Home() {
  return (
    <main className="main-container relative">
      <Header />
      <HeroSection />
      <FeatureSection />
      <CostSection />
      <DownloadSection />
      <AboutUsSection />
      <Footer />
    </main>
  )
}
