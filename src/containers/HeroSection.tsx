import CTAButton from "@/components/CTAButton"
import GithubStar from "@/components/GithubStar"
import { TiStar } from "react-icons/ti"

function TrustBy() {
  const images = [
    'https://i.pravatar.cc/150?img=1',
    'https://i.pravatar.cc/150?img=2',
    'https://i.pravatar.cc/150?img=3',
    'https://i.pravatar.cc/150?img=4',
    'https://i.pravatar.cc/150?img=5',
    'https://i.pravatar.cc/150?img=6',

  ]
  return <div className="trust-by mt-[32px] space-y-2">
    <div className="text-center ml-4">
      {images.map(userPhoto => {
        return <img key={userPhoto} className="w-9 h-9 inline-block -ml-4 rounded-full border-4 border-black" src={userPhoto} alt="Avatar developer" />
      })}
    </div>

    <div className="flex justify-center items-center">
      {(new Array(5).fill(1)).map((item, index) => {
        return <TiStar key={index} className="text-yellow-500" />
      })}

    </div>
    <p className="text-center text-[12px] second-color">
      Loved by <GithubStar link="https://api.github.com/repos/hudy9x/namviek" /> developers
    </p>
  </div>
}

function HeroBackground() {
  return <div className="mt-[63px] hero-background">
    <img src="/hero-section.png" alt="Hero image" />
  </div>
}

export default function HeroSection() {
  return <section id="hero" className="mt-[94px] flex flex-col items-center">
    <h1 className="h1">
      {"Don't mind the cost"}<br />
      Just do the work
    </h1>
    <p className="pa1 mt-[25px]">The open-source project management tool for super<br />tiny teams with a lot of built in features</p>
    <TrustBy />
    <CTAButton />
    <HeroBackground />
  </section>
}

