import CTAButton from "@/components/CTAButton"
import GithubStar from "@/components/GithubStar"
import Link from "next/link"
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
  return <div className="trust-by mt-[22px] sm:mt-[32px] space-y-2">
    <div className="text-center ml-4">
      {images.map(userPhoto => {
        return <img key={userPhoto} className="w-7 h-7 sm:w-9 sm:h-9 inline-block -ml-3 sm:-ml-4 rounded-full border-4 border-black" src={userPhoto} alt="Avatar developer" />
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
  return <div className="mt-[32px] sm:mt-[63px] hero-background">
    <img src="/hero-section.png" alt="Hero image" />
  </div>
}

export default function HeroSection() {
  return <section id="hero" className="mt-[70px] sm:mt-[120px] flex flex-col items-center">
    <div className="mb-7">
      {/* <a href="" target="_blank"> */}
      {/*   <img src="https://trendshift.io/api/badge/repositories/10303" alt="hudy9x%2Fnamviek | Trendshift" style={{ height: 55, width: 250 }} width="250" height="55" /> */}
      {/**/}
      {/* </a> */}
      <a href="https://trendshift.io/repositories/10303" target="_blank" className="rounded-full px-4 py-2 bg-white/10 hover:border-pink-500/90 duration-500 text-white/70 active:bg-white/0 hover:text-white transition-all backdrop-blur-sm border-2 border-white/30 text-xs">
        #2 Repository of the day
      </a>
    </div>
    <h1 className="h1 text-center">
      {"Don't mind the cost"}<br />
      Just do the work
    </h1>
    <p className="pa1 w-[300px] sm:w-[600px] mt-[25px]">The open-source project management tool for super tiny teams with a lot of built in features</p>
    <TrustBy />
    <div className="flex items-center gap-2">
      <Link target="_blank" href={'https://docs.namviek.com/visual'} className="text-center mt-[32px]">
        <button className="rounded-lg transition-all px-5 py-3 text-xs uppercase font-bold border border-zinc-700 bg-zinc-800/80 hover:bg-zinc-800">setup your own</button>
      </Link>
      <Link href={'/demo'} className="text-center mt-[32px]">
        <button className="rounded-lg transition-all px-5 py-3 text-xs uppercase font-bold border border-zinc-800 bg-zinc-100/90 hover:bg-zinc-100 text-black">try it first</button>
        {/* <button className="cta-btn3 uppercase text-xs">{`try it first`}</button> */}
      </Link>
    </div>
    <HeroBackground />
  </section>
}

