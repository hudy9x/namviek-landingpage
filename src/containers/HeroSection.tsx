import ListViewImage from "@/images/list-view.png";
import Image from "next/image";
import { Spotlight } from "@/components/ui/Spotlight";
import { fontJosefinSan } from "@/utils/fonts";
import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";
import Heading1 from "@/components/Heading1";
import { motion } from "framer-motion";
import AnimElement from "@/components/ui/AnimElement";
import FollowLight from "@/components/ui/FollowLight";
export default function HeroSection() {
  return <div className="hero">
    <div className="pt-[15rem] pb-[5rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-dot-white/[0.2] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      {/* Gradient */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <Heading1 delay={1} duration={6}>
          <span className={fontJosefinSan.className}>
            {"Don't mind the cost"}
          </span>
          <br />
          <span className={fontJosefinSan.className}>
            Just do the work
          </span>
        </Heading1>
        <AnimElement>
          <p className="mt-4 font-normal text-para1 text-neutral-400 max-w-lg text-center mx-auto">The open-source task manager for super tiny teams
            With a lot of built-in features</p>

          <div className="flex justify-center mt-8">
            <HoverBorderGradient
              containerClassName="rounded-xl"
              as="button"
              className="bg-black text-white flex items-center space-x-2"
            >
              <span>Clone it now</span>
            </HoverBorderGradient>

          </div>
        </AnimElement>
      </div>
    </div>
    <AnimElement
      className="hero-slider-container">
      <Image className=" w-[1216px] opacity-90 mx-auto" src={ListViewImage} alt="List view image" />
      {/* <div className="absolute top-[35%] z-40 left-1/2 -translate-x-1/2 rounded-xl border border-gray-500/50 px-8 py-6 text-white backdrop-blur-sm text-xl uppercase"></div> */}
    </AnimElement>
  </div>
}
