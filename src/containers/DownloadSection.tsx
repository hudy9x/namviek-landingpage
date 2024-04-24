import Heading2 from "@/components/Heading2";
import Para2 from "@/components/Para2";
import { TextRevealCard } from "@/components/ui/TextRevealCard";

export default function DownloadSection() {
  return <section className="contribute pt-[300px] pb-[50px]">
    <header className="space-y-6 text-white">
      <Heading2 className="text-center">Wanna use it ?<br /> Clone it now</Heading2>
      <Para2 className="text-center">Namviek is a completely open source project for your small team.<br /> It is free, but you guys need a developer to help you host it</Para2>

      <div className="flex items-center justify-center h-[40rem] rounded-2xl w-full">
        <TextRevealCard
          text="You know the business"
          revealText="I know the chemistry "
        />

      </div>
      <div className="flex justify-center">

        <div className="text-white text-2xl px-10 py-8 mt-8 border-2 border-gray-700  rounded-2xl">
          <span className="text-yellow-200">$</span> <span className="text-green-400">
            git clone git@github.com:hudy9x/namviek.git
          </span>
        </div>
      </div>
      <p className="text-center">Read to deploy step here</p>
    </header>
  </section>
}
