import BgSpace from "@/components/Background/BgSpace";
import Card, { CardTitle } from "@/components/Card";
import { CgBoard } from "react-icons/cg";

export default function FeatureSection4() {
  const features = [
    {
      title: 'Filter by views',
      desc: <>From deployments to tasks, work with your team every step of the way.</>
    },
    {
      title: 'Tags',
      desc: <>From deployments to tasks, work with your team every step of the way.</>
    },
    {
      title: 'Data Import & Export',
      desc: <>From deployments to tasks, work with your team every step of the way.</>
    },
    {
      title: 'Sprint points',
      desc: <>From deployments to tasks, work with your team every step of the way.</>
    },
    {
      title: 'Custom Dashboard',
      desc: <>From deployments to tasks, work with your team every step of the way.</>
    },
    {
      title: 'Member & Project Report',
      desc: <>From deployments to tasks, work with your team every step of the way.</>
    },
  ]
  return <section id="feature-4" className="relative sm:w-[1242px] mx-auto mt-[200px] sm:mt-[345px]">
    <div className="flex flex-col items-center">
      <h6 className="hl1">app features</h6>
      <h2 className="h2 mt-[17px]">And many<br />
        more other ones</h2>
      <p className="pa1 mt-[37px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Duis euismod congue massa, ac pellentesque</p>

      <div className="mt-[50px] sm:mt-[115px] grid grid-cols-1 sm:grid-cols-3 gap-6">
        {features.map((feat, fIndex) => {

          return <Card type="darkblur" key={fIndex} border="bold" className="w-[386px] grid-cols-1" height={225}>
            <img src="/feature-view-custom-1.png" alt="Custom view" className="absolute top-[27px] left-[36px]" />
            <CardTitle
              title={feat.title}
              icon={<CgBoard className="w-6 h-6" />}
              desc={feat.desc} />
          </Card>
        })}
      </div>
    </div>

    <div className="absolute top-[342px] -left-[43%] -z-10">
      <BgSpace />

    </div>



  </section>
}
