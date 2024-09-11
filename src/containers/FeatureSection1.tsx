import Card, { CardTitle } from "@/components/Card";
import { CgBoard } from "react-icons/cg";

export default function FeatureSection1() {
  return <section id="feature-1" className="relative sm:w-[1242px] mx-auto">
    <div className="flex flex-col items-center">
      <h6 className="hl1">app features</h6>
      <h2 className="h2 mt-[17px]">Essential features<br />
        for running your team</h2>
      <p className="pa1 mt-[22px] sm:mt-[37px] w-[345px] sm:w-[628px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod congue massa, ac pellentesque</p>

      <div className="mt-[50px] w-full sm:mt-[115px] flex flex-col sm:flex-row items-center gap-6">
        <Card className="w-[95%] sm:w-[516px]">
          <img src="/feature-board.png" className="absolute top-[115px] left-[40px]" />
          <CardTitle
            title="Collaborate on everything."
            icon={<CgBoard className="w-6 h-6" />}
            desc="From deployments to tasks, work with your
team every step of the way." />
        </Card>
        <Card type="sky" className="w-[95%] sm:w-[700px]">
          <img src="/feature-list.png" className="absolute top-[60px] left-[66px]" />
          <CardTitle
            title="Collaborate on everything."
            icon={<CgBoard className="w-6 h-6" />}
            desc={<>From deployments to tasks, work with your<br />
              team every step of the way.</>} />
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
