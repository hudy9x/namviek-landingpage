import { Metadata } from "next"
import Changelog from "./ChangeLog"

export const metadata: Metadata = {
  title: 'Change log',
  description: 'Where we update news and release new features',
}

export default function ChangelogPage() {
  return <>
    <section id="feature-3" className="relative sm:w-[1242px] mx-auto mt-[200px] sm:mt-[150px]">
      <div className="flex flex-col items-center">
        <h6 className="hl1">Change log</h6>
        <h2 className="h2 mt-[17px]">Where we update<br /> news and release features</h2>
        <p className="pa1 w-[350px] sm:w-[650px] mt-[37px]">Keep everthing up to dates for bug fixings, feature release and annoucements</p>

        <Changelog />
      </div>

      <div className="absolute top-[342px] -left-[43%] -z-10">
        {/* <BgSpace /> */}

      </div>



    </section>
  </>
}
