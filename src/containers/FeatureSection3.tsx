import BgSpace from "@/components/Background/BgSpace";
import Card, { CardTitle } from "@/components/Card";
import { CgBoard } from "react-icons/cg";

export default function FeatureSection3() {
  return <section id="feature-3" className="relative w-[1242px] mx-auto mt-[345px]">
    <div className="flex flex-col items-center">
      <h6 className="hl1">app features</h6>
      <h2 className="h2 mt-[17px]">Customize your view<br />
        with a few clicks</h2>
      <p className="pa1 mt-[37px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Duis euismod congue massa, ac pellentesque</p>

      <div className="mt-[115px] flex items-center gap-6">
        <Card type="aurora" border="bold" className="w-[1200px]" height={500}>
          <img src="/feature-view-custom-1.png" alt="Custom view" className="absolute top-[27px] left-[36px]" />
          <img src="/feature-view-custom-2.png" alt="Custom view" className="absolute top-[100px] left-[600px]" />
          <CardTitle
            title="Collaborate on everything."
            icon={<CgBoard className="w-6 h-6" />}
            desc={<>From deployments to tasks, work with your<br />
              team every step of the way.</>} />
        </Card>
      </div>
    </div>

    <div className="absolute top-[342px] -left-[43%] -z-10">
      <BgSpace />

    </div>



  </section>
}
