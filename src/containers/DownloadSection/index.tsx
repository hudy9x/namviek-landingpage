import Heading2 from "@/components/Heading2";
import Para2 from "@/components/Para2";
import "./download.css"
import { Installation } from "./Installation";
import Link from "next/link";
import MotionElement from "@/components/ui/MotionElement";

export default function DownloadSection() {

  return <section id="download" className="download pt-[200px] pb-[50px]">
    <header className="space-y-6 text-white">
      <MotionElement>

        <Heading2 className="text-center">Wanna use it ?<br /> Clone it now</Heading2>
      </MotionElement>
      <MotionElement>
        <Para2 className="text-center">Namviek is a completely open source project for your small team.<br /> It is free, but you guys need a developer to help you host it</Para2>
      </MotionElement>

      <Installation />

      <div className="text-center relative z-10" style={{ marginTop: 50 }}>
        <Link target="_blank" className="hover:underline hover:text-gray-300 text-gray-400" href="https://docs.namviek.com/doc/installation">View full setup guide</Link>
      </div>
    </header>
  </section>
}
