import Heading2 from "@/components/Heading2";
import Para2 from "@/components/Para2";
import { FaAws } from "react-icons/fa";
import { MdOutlineEmail, MdSdStorage } from "react-icons/md";
import { HiOutlineServer } from "react-icons/hi";
import { IoLogoVercel } from "react-icons/io5";
import { SiGithub, SiMongodb, SiPusher } from "react-icons/si";
import "./style.css";

export default function CostSection() {
  return (
    <section className="cost pt-24 pb-24 md:pt-48 md:pb-48 px-3">
      <header className="space-y-6">
        <Heading2 className="text-center">Reduce the cost<br />to less than $10/month</Heading2>
        <Para2 className="text-center">Utilize free platforms and low budget AWS services<br />to host the app</Para2>
      </header>
      <section className="cost-services mt-14 flex flex-wrap items-center text-white justify-center gap-3">
        <div className="service-item flex items-center justify-center flex-1 min-w-[100px] md:flex-none"><FaAws className="sup-icon mr-2" /> <MdOutlineEmail /></div>
        <div className="service-item flex items-center justify-center flex-1 min-w-[100px] md:flex-none"><FaAws className="sup-icon mr-2" /> <MdSdStorage /></div>
        <div className="service-item flex items-center justify-center flex-1 min-w-[100px] md:flex-none"><FaAws className="sup-icon mr-2" /> <HiOutlineServer /></div>
        <div className="service-item flex items-center justify-center flex-1 min-w-[100px] md:flex-none"><IoLogoVercel /></div>
        <div className="service-item flex items-center justify-center flex-1 min-w-[100px] md:flex-none"><SiMongodb /></div>
        <div className="service-item flex items-center justify-center flex-1 min-w-[100px] md:flex-none"><SiPusher /></div>
        <div className="service-item flex items-center justify-center flex-1 min-w-[100px] md:flex-none"><SiGithub /></div>
      </section>
      <p className="mt-14 text-gray-400 leading-7 text-center w-11/12 md:w-[500px] mx-auto">
        Dramatically reduced team management costs from $10 to under $5/month. Achieved this by leveraging GitHub Actions for automated deployments and hosting the app on budget-friendly AWS Lightsail, ditching the previous Vercel plan.
      </p>
    </section>
  );
}
