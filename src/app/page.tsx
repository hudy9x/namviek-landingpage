import TopBackground from "@/components/TopBackground";
import FeatureSection1 from "@/containers/FeatureSection1";
import HeroSection from "@/containers/HeroSection";
import Menu from "@/containers/Menu";

export default function Home() {
  return (
    <>
      <TopBackground />
      <Menu />
      <HeroSection />
      <FeatureSection1 />
    </>
  );
}
