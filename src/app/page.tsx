import Comparison from "@/containers/Comparison";
import FeatureSection1 from "@/containers/FeatureSection1";
import FeatureSection2 from "@/containers/FeatureSection2";
import FeatureSection3 from "@/containers/FeatureSection3";
import FeatureSection4 from "@/containers/FeatureSection4";
import HeroSection from "@/containers/HeroSection";
import Pricing from "@/containers/Pricing";
import Setup from "@/containers/Setup";
import Technology from "@/containers/Technology";
import Testimonials from "@/containers/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection1 />
      <FeatureSection2 />
      <FeatureSection3 />
      <FeatureSection4 />
      <Technology />

      <Setup />
      <Pricing />

      <Testimonials />

      <Comparison />


    </>
  );
}
