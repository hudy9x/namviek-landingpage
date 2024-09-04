import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Menu() {
  return <div className="flex justify-center pb-[50px]">
    <nav id="menu">
      <Link href="/"><Image src={"/icon.png"} width={24} height={24} alt="Namviek Logo" /></Link>
      <Link href="/">Home</Link>
      <Link href="#features">Features</Link>
      <Link href="#setup">Setup</Link>
      <Link href="#about">About</Link>
      <Link href={'https://github.com/hudy9x/namviek'} target="_blank">
        <FaGithub className="w-5 h-5" />
      </Link>
    </nav>
  </div>
}
