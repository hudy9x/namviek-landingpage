import BgSpace from "@/components/Background/BgSpace";
import Card, { CardTitle } from "@/components/Card";
import { CgBoard } from "react-icons/cg";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

export default function FeatureSection3() {
  return <section id="feature-3" className="relative sm:w-[1242px] mx-auto mt-[200px] sm:mt-[345px]">
    <div className="flex flex-col items-center">
      <h6 className="hl1">app features</h6>
      <h2 className="h2 mt-[17px]">Customize your view<br />
        with a few clicks</h2>
      <p className="pa1 w-[350px] sm:w-[650px] mt-[37px]">Customize your view effortlessly with our powerful filtering options. Easily tailor your experience to match your specific needs.</p>

      <div className="mt-[50px] sm:mt-[115px] w-full flex flex-col sm:flex-row items-center gap-6">
        <Card type="aurora" border="bold" className="w-[95%] sm:w-[1200px]" height={500}>
          <img src="/feature-view-custom-1.png" alt="Custom view" className="absolute top-[27px] left-[36px]" />
          <img src="/feature-view-custom-2.png" alt="Custom view" className="absolute top-[100px] left-[600px]" />
          <CardTitle
            title="View customization"
            icon={<HiOutlineSquares2X2 className="w-6 h-6" />}
            desc={<>Work your way. Design the perfect view to fit<br /> your specific needs.</>} />
        </Card>
      </div>
    </div>

    <div className="absolute top-[342px] -left-[43%] -z-10">
      <BgSpace />

    </div>



  </section>
}
