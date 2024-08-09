import GoogleAnalytics from "@/components/GoogleAnalytics";
import AboutUsSection from "@/containers/AboutUs";
import CostSection from "@/containers/CostSection";
import DownloadSection from "@/containers/DownloadSection";
import Embeded from "@/containers/Embeded";
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
      <Embeded />
      <GoogleAnalytics />
    </main>
  )
}
