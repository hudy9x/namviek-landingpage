import Heading2 from "@/components/Heading2";
import Para2 from "@/components/Para2";
import { FaDiscord, FaGithub } from "react-icons/fa";

export default function Footer() {
  return <div className="border-t flex items-center border-gray-700 h-20 text-white">
    <div className="mx-auto w-[1024px] flex justify-between">
      <span>Copyright by @hudy9x</span>
      <div className="flex items-center gap-3">
        <FaDiscord />
        <FaGithub />
      </div>
    </div>
  </div>
}
