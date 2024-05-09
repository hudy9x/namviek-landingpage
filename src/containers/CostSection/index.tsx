import Heading2 from "@/components/Heading2";
import Para2 from "@/components/Para2";
import { FaAws } from "react-icons/fa";
import { MdOutlineEmail, MdSdStorage } from "react-icons/md";
import { HiOutlineServer } from "react-icons/hi";
import { IoLogoVercel } from "react-icons/io5";
import { SiGithub, SiMongodb, SiPusher } from "react-icons/si";
import "./style.css"
import MotionElement from "@/components/ui/MotionElement";
import MongoDbIcon from "@/icons/MongoDbIcon";
import PusherIcon from "@/icons/PusherIcon";
import AwsSesIcon from "@/icons/AwsSesIcon";
import AwsS3Icon from "@/icons/AwsS3Icon";
import AwsLightSailIcon from "@/icons/AwsLightSailIcon";

export default function CostSection() {
  return <section className="cost pt-[200px] pb-[200px]">
    <header className="space-y-6">
      <MotionElement>
        <Heading2 className="text-center">Reduce the cost<br />to less than $10/month</Heading2>
      </MotionElement>
      <MotionElement>
        <Para2 className="text-center">Ultilize free platforms and low budget aws services<br />to host the app</Para2>
      </MotionElement>
    </header>

    <MotionElement>
      <section className="cost-services mt-14 flex items-center text-white justify-center gap-3">
        <div className="service-item"><AwsSesIcon className="grayscale" /></div>
        <div className="service-item"><AwsS3Icon className="grayscale" /></div>
        <div className="service-item"><AwsLightSailIcon className="grayscale" /></div>
        {/* <div className="service-item"><FaAws className="sup-icon" /> <MdOutlineEmail /></div> */}
        {/* <div className="service-item"><FaAws className="sup-icon" /> <MdSdStorage /></div> */}
        {/* <div className="service-item"><FaAws className="sup-icon" /> <HiOutlineServer /></div> */}
        {/* <div>Namviek</div> */}
        <div className="service-item"><IoLogoVercel /></div>
        {/* <div className="service-item"><SiMongodb /></div> */}
        {/* <div className="service-item"><SiPusher /></div> */}
        {/* <div className="service-item"><SiGithub /></div> */}

        <div className="service-item"><SiMongodb /></div>
        {/* <div className="service-item"><MongoDbIcon /></div> */}
        <div className="service-item"><SiPusher /></div>
        <div className="service-item"><SiGithub /></div>
      </section>
    </MotionElement>
    <MotionElement>
      <p className="mt-14 text-gray-500 leading-7 text-center w-[500px] mx-auto">Dramatically reduced team management costs from $10 to under $5/month. Achieved this by leveraging GitHub Actions for automated deployments and hosting the app on budget-friendly AWS Lightsail, ditching the previous Vercel plan.</p>
    </MotionElement>
  </section>
}
