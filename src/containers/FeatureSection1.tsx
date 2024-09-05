import Card, { CardTitle } from "@/components/Card";
import { CgBoard } from "react-icons/cg";

export default function FeatureSection1() {
  return <section id="feature-1" className="relative w-[1242px] mx-auto">
    <div className="flex flex-col items-center">
      <h6 className="hl1">app features</h6>
      <h2 className="h2 mt-[17px]">Essential features<br />
        for running your team</h2>
      <p className="pa1 mt-[37px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Duis euismod congue massa, ac pellentesque</p>

      <div className="mt-[115px] flex items-center gap-6">
        <Card className="w-[516px]">
          <img src="/feature-board.png" className="absolute top-[115px] left-[40px]" />
          <CardTitle
            title="Collaborate on everything."
            icon={<CgBoard className="w-6 h-6" />}
            desc="From deployments to tasks, work with your
team every step of the way." />
        </Card>
        <Card type="sky" className="w-[700px]">
          <img src="/feature-list.png" className="absolute top-[60px] left-[66px]" />
          <CardTitle
            title="Collaborate on everything."
            icon={<CgBoard className="w-6 h-6" />}
            desc={<>From deployments to tasks, work with your<br />
              team every step of the way.</>} />
        </Card>
      </div>
    </div>


    <div className="absolute top-[80px] left-0">
      <div className="bg-gradient-1 opacity-20"></div>
    </div>
    <div className="absolute top-[150px] -right-[100px]">
      <div className="bg-gradient-2 opacity-20"></div>
    </div>

  </section>
}
