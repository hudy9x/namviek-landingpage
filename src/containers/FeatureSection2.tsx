import BgSpace from "@/components/Background/BgSpace";
import Card, { CardTitle } from "@/components/Card";
import { CgBoard } from "react-icons/cg";

export default function FeatureSection2() {
  return <section id="feature-2" className="relative sm:w-[1242px] mx-auto mt-[200px] sm:mt-[345px]">
    <div className="flex flex-col items-center">
      <h6 className="hl1">app features</h6>
      <h2 className="h2 mt-[17px]">Tracking your<br />
        goals with ease</h2>
      <p className="pa1 mt-[37px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Duis euismod congue massa, ac pellentesque</p>

      <div className="mt-[50px] sm:mt-[115px] w-full flex flex-col sm:flex-row items-center gap-6">
        <Card type="ocean" border="bold" className="w-[95%] sm:w-[700px]">
          <img src="/feature-goal.png" alt="Goal view" className="absolute top-[27px] left-[36px]" />
          <CardTitle
            title="Collaborate on everything."
            icon={<CgBoard className="w-6 h-6" />}
            desc={<>From deployments to tasks, work with your<br />
              team every step of the way.</>} />
        </Card>

        <Card type="hell" border="bold" className="w-[95%] sm:w-[516px]">
          <img src="/feature-calendar.png" alt="Calendar view" className="absolute top-[24px] -left-[396px]" />
          <CardTitle
            title="Collaborate on everything."
            icon={<CgBoard className="w-6 h-6" />}
            desc="From deployments to tasks, work with your
team every step of the way." />
        </Card>
      </div>
    </div>

    <div className="absolute top-[342px] -left-[43%] -z-10">
      <BgSpace />

    </div>



  </section>
}
