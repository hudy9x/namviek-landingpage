import Heading2 from "@/components/Heading2";
import Para2 from "@/components/Para2";
import "./download.css"
import { TextRevealCard } from "@/components/ui/TextRevealCard";
import { Installation } from "./Installation";

export default function DownloadSection() {
  // const commands = [
  //   'git clone git@github.com:hudy9x/namviek.git',
  //   'cd namviek',
  //   'cp .env.example .env.local',
  //   'yarn frontend',
  //   'yarn backend'
  // ]

  return <section className="download pt-[200px] pb-[50px]">
    <header className="space-y-6 text-white">
      <Heading2 className="text-center">Wanna use it ?<br /> Clone it now</Heading2>
      <Para2 className="text-center">Namviek is a completely open source project for your small team.<br /> It is free, but you guys need a developer to help you host it</Para2>

      <Installation />
      {/* <div className="flex justify-center"> */}
      {/*   <div className="text-white text-2xl px-10 py-8 mt-8 border-2 border-gray-700  rounded-2xl"> */}
      {/*     {commands.map((cmd, cmdindex) => { */}
      {/*       return <div key={cmdindex}> */}
      {/*         <span className="text-yellow-200 pr-2">$</span> */}
      {/*         <span className="text-green-400">{cmd}</span> */}
      {/*       </div> */}
      {/*     })} */}
      {/*   </div> */}
      {/* </div> */}
    </header>
  </section>
}
