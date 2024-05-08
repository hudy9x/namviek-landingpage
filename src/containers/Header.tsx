import Image from "next/image";
import logoImg from "@/images/icon.png"
import { FaDiscord, FaGithub } from "react-icons/fa";
import Link from "next/link";
import AnimElement from "@/components/ui/AnimElement";

export default function Header() {
  return <header className="top-header absolute z-10 top-0 left-0 w-full">
    <AnimElement delay={0.5} duration={3}>
      <div className="w-[1024px] mx-auto flex items-center justify-between p-8">
        <Image src={logoImg} width={30} alt="Namviek icon" />
        <nav className="flex items-center gap-6 text-sm">
          <Link href={"#home"}>Home</Link>
          <Link href={"#features"}>Features</Link>
          <Link href={"#download"}>Setup</Link>
          <Link href={"#about"}>About</Link>
        </nav>
        <section className="flex items-center gap-3 text-white">
          <FaDiscord />
          <FaGithub />
        </section>

      </div>
    </AnimElement>
    {/* <TopNav /> */}

  </header>
}
