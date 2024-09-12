import Card, { CardTitle } from "@/components/Card";
import { CgBoard } from "react-icons/cg";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

export default function FeatureSection1() {
  return <section id="feature-1" className="relative sm:w-[1242px] mx-auto">
    <div className="flex flex-col items-center">
      <h6 className="hl1">app features</h6>
      <h2 className="h2 mt-[17px]">Essential features<br />
        for running your team</h2>
      <p className="pa1 mt-[22px] sm:mt-[37px] w-[345px] sm:w-[628px]">Provides built-in features like Views, Import, Export, Notification, Dashboard, Meeting, etc</p>

      <div className="mt-[50px] w-full sm:mt-[115px] flex flex-col sm:flex-row items-center gap-6">
        <Card className="w-[95%] sm:w-[516px]">
          <img src="/feature-board.png" className="absolute top-[115px] left-[40px]" />
          <CardTitle
            title="Board view"
            icon={<CgBoard className="w-6 h-6" />}
            desc="Visualize your workflow. Move tasks between stages for clear progress tracking." />
        </Card>
        <Card type="sky" className="w-[95%] sm:w-[700px]">
          <img src="/feature-list.png" className="absolute top-[60px] left-[66px]" />
          <CardTitle
            title="List view"
            icon={<HiOutlineBars3CenterLeft className="w-6 h-6" />}
            desc={<>See it all at once. Prioritize and manage your<br /> tasks in a simple list.</>} />
        </Card>
      </div>
    </div>


    <div className="absolute top-[121px] -left-[198px] -z-10">
      <div className="bg-gradient-1 opacity-20"></div>
    </div>
    <div className="absolute top-[150px] -right-[100px] -z-10">
      <div className="bg-gradient-2 opacity-20"></div>
    </div>

  </section>
}
