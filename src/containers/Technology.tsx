import BgBrand from "@/components/Background/BgBrand";
import SpinningCircle from "@/components/SpinningCircle";

export default function Technology() {
  return <section id="technology" className="relative w-[1242px] mx-auto mt-[345px]">
    <div className="flex flex-col items-center">
      <h6 className="hl1">technology</h6>
      <h2 className="h2 mt-[17px]">We built it on popular<br />
        platforms and framework
      </h2>
      <p className="pa1 mt-[37px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Duis euismod congue massa, ac pellentesque</p>

      <div className="mt-[115px] w-[890px] h-[468px] relative overflow-hidden rounded-xl border border-white/20">
        <div className="w-full h-full opacity-80" style={{ backgroundColor: 'rgba(6, 2, 17, 1)' }}></div>
        <div className="flex items-center justify-center w-full h-full absolute top-0 left-0">
          <SpinningCircle />
        </div>
      </div>
    </div>

    <div className="absolute top-[350px] left-1/2 -translate-x-1/2 -z-10">
      <BgBrand />
    </div>



  </section>
}
