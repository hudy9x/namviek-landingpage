import AboutUsSection from '@/containers/AboutUs'
import CostSection from '@/containers/CostSection'
import DownloadSection from '@/containers/DownloadSection'
import FeatureSection from '@/containers/FeatureSection'
import { FeatureSectionV2 } from '@/containers/FeatureSectionV2'
import Footer from '@/containers/Footer'
import Header from '@/containers/Header'
import HeroSection from '@/containers/HeroSection'
import { ProjectView } from '@/containers/ProjectView'

export default function Home() {
  return (
    <main className="main-container relative">
      <Header />
      <HeroSection />
      <FeatureSection />
      <FeatureSectionV2 />
      <CostSection />
      <DownloadSection />
      <AboutUsSection />
      <Footer />
    </main>
  )
}
