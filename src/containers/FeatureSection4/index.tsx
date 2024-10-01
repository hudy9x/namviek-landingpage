import './style.css'
import BgSpace from "@/components/Background/BgSpace";
import Card, { CardTitle } from "@/components/Card";
import { HiOutlineChartPie, HiOutlineSquare2Stack, HiOutlineSquares2X2, HiOutlineTableCells, HiOutlineTag } from "react-icons/hi2";
import { TbNumber123 } from "react-icons/tb";

export default function FeatureSection4() {
  const features = [
    {
      icon: <HiOutlineSquares2X2 className="w-6 h-6" />,
      title: 'Filter by views',
      desc: <>Customize your view by filtering tasks by status, assignee, or date.</>
    },
    {
      icon: <HiOutlineTag className="w-6 h-6" />,
      title: 'Tags',
      desc: <>Easily filter and find specific tasks based on your tags.</>
    },
    {
      icon: <HiOutlineTableCells className="w-6 h-6" />,
      title: 'Data Import & Export',
      desc: <>Easily import/export data using .xlsx or .csv file formats.</>
    },
    {
      icon: <TbNumber123 className="w-6 h-6" />,
      title: 'Sprint points',
      desc: <>Assign sprint points to tasks to measure their complexity and quality.</>
    },
    {
      icon: <HiOutlineSquare2Stack className="w-6 h-6" />,
      title: 'Custom Dashboard',
      desc: <>Create a custom dashboard to visualize goals and team progress</>
    },
    {
      icon: <HiOutlineChartPie className="w-6 h-6" />,
      title: 'Member & Project Report',
      desc: <>View daily task completion rates by member and overdue tasks by project.</>
    },
  ]
  return <section id="feature-4" className="relative sm:w-[1242px] mx-auto mt-[200px] sm:mt-[345px]">
    <div className="flex flex-col items-center">
      <h6 className="hl1">app features</h6>
      <h2 className="h2 mt-[17px]">And many<br />
        more other ones</h2>
      <p className="pa1 w-[350px] sm:w-[650px] mt-[37px]">In addition to these features, Namviek offers many other functionalities.</p>

      <div className="px-3 mt-[50px] sm:mt-[115px] w-full grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-6">
        {features.map((feat, fIndex) => {

          return <Card type="darkblur" key={fIndex} border="bold" className="w-full sm:w-[386px] grid-cols-1" height="h-[180px] sm:h-[225px]">
            {/* <img src="/feature-view-custom-1.png" alt="Custom view" className="absolute top-[27px] left-[36px]" /> */}
            <CardTitle
              title={feat.title}
              icon={feat.icon}
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
