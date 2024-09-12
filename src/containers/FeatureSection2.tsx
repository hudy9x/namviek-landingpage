import BgSpace from "@/components/Background/BgSpace";
import Card, { CardTitle } from "@/components/Card";
import { CgBoard } from "react-icons/cg";
import { HiOutlineCalendar, HiOutlineFlag } from "react-icons/hi2";

export default function FeatureSection2() {
  return <section id="feature-2" className="relative sm:w-[1242px] mx-auto mt-[200px] sm:mt-[345px]">
    <div className="flex flex-col items-center">
      <h6 className="hl1">app features</h6>
      <h2 className="h2 mt-[17px]">Tracking your<br />
        goals with ease</h2>
      <p className="pa1 w-[350px] sm:w-[650px] mt-[37px]">Namviek's goal and calendar views help you track tasks, manage deadlines, and stay organized.</p>

      <div className="mt-[50px] sm:mt-[115px] w-full flex flex-col sm:flex-row items-center gap-6">
        <Card type="ocean" border="bold" className="w-[95%] sm:w-[700px]">
          <img src="/feature-goal.png" alt="Goal view" className="absolute top-[27px] left-[36px]" />
          <CardTitle
            title="Goal view"
            icon={<HiOutlineFlag className="w-6 h-6" />}
            desc={<>Stay on target. See your progress at a glance<br /> and celebrate milestones.</>} />
        </Card>

        <Card type="hell" border="bold" className="w-[95%] sm:w-[516px]">
          <img src="/feature-calendar.png" alt="Calendar view" className="absolute top-[24px] -left-[396px]" />
          <CardTitle
            title="Calendar view"
            icon={<HiOutlineCalendar className="w-6 h-6" />}
            desc="Plan your days. Never miss a deadline with tasks scheduled on your calendar." />
        </Card>
      </div>
    </div>

    <div className="absolute top-[342px] -left-[43%] -z-10">
      <BgSpace />

    </div>



  </section>
}
