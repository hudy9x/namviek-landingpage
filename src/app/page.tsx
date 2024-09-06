import TopBackground from "@/components/TopBackground";
import FeatureSection1 from "@/containers/FeatureSection1";
import FeatureSection2 from "@/containers/FeatureSection2";
import FeatureSection3 from "@/containers/FeatureSection3";
import FeatureSection4 from "@/containers/FeatureSection4";
import HeroSection from "@/containers/HeroSection";
import Menu from "@/containers/Menu";
import Setup from "@/containers/Setup";
import Technology from "@/containers/Technology";

export default function Home() {
  return (
    <>
      <TopBackground />
      <Menu />
      <HeroSection />
      <FeatureSection1 />
      <FeatureSection2 />
      <FeatureSection3 />
      <FeatureSection4 />
      <Technology />
      <Setup />
    </>
  );
}
