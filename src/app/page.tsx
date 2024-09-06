import TopBackground from "@/components/TopBackground";
import FeatureSection1 from "@/containers/FeatureSection1";
import FeatureSection2 from "@/containers/FeatureSection2";
import FeatureSection3 from "@/containers/FeatureSection3";
import HeroSection from "@/containers/HeroSection";
import Menu from "@/containers/Menu";

export default function Home() {
  return (
    <>
      <TopBackground />
      <Menu />
      <HeroSection />
      <FeatureSection1 />
      <FeatureSection2 />
      <FeatureSection3 />
    </>
  );
}
