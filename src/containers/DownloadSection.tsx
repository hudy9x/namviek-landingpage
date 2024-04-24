import Heading2 from "@/components/Heading2";
import Para2 from "@/components/Para2";

export default function DownloadSection() {
  return <section className="contribute py-[300px]">
    <header className="space-y-6">
      <Heading2 className="text-center">Clone it now</Heading2>
      <Para2 className="text-center">Run the following command to clone the repo</Para2>
      <div className="flex justify-center">
        <div className="text-white text-2xl px-10 py-8 mt-8 border-2 border-gray-700  rounded-xl">
          <span className="text-yellow-200">$</span> <span className="text-green-400">
            git clone git@github.com:hudy9x/namviek.git
          </span>
        </div>
      </div>
    </header>
  </section>
}
