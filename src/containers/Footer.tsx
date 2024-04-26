import Heading2 from "@/components/Heading2";
import Para2 from "@/components/Para2";
import Link from "next/link";
import { FaDiscord, FaGithub } from "react-icons/fa";

export default function Footer() {
  return <div className="border-t flex items-center border-gray-900 h-20 text-gray-400">
    <div className="mx-auto w-[1024px] flex justify-between">
      <span>Copyright by <Link target="_blank" href="https://hudy9x.com">@hudy9x</Link></span>
      <div className="flex items-center gap-3 text-white">
        <FaDiscord />
        <FaGithub />
      </div>
    </div>
  </div>
}
