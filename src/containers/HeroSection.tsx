import { SpotlightPreview } from "@/components//SpotlightPreview";
import AppImage from '../images/app.png'
import Image from "next/image";
import { Spotlight } from "@/components/ui/Spotlight";
import { fontJosefinSan } from "@/utils/fonts";
import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";
export default function HeroSection() {
  return <>
    {/* <SpotlightPreview /> */}

    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-dot-white/[0.2] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      {/* Gradient */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <span className={fontJosefinSan.className}>
            {"Don't mind the cost"}
          </span>
          <br />
          <span className={fontJosefinSan.className}>
            Just do the work
          </span>
        </h1>
        <p className="mt-4 font-normal text-para1 text-neutral-300 max-w-lg text-center mx-auto">The open-source task manager for super tiny teams
          With extremely low budget</p>

        <div className="flex justify-center mt-8">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-black text-white flex items-center space-x-2"
          >
            <span>Clone it now</span>
          </HoverBorderGradient>

        </div>
      </div>
    </div>
    <Image className="grayscale w-[1024px] opacity-90 mx-auto" src={AppImage} alt="App image" />
  </>
}
