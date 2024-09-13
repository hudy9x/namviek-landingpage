import './style.css'
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from 'react-icons/hi2';
import OpenMenuBtn from './OpenMenuBtn';
import MenuBackdrop from './MenuBackdrop';

export default function Menu() {
  return <div className="menu-wrapper">
    <div className="flex justify-center">
      <nav id="menu" className='w-[200px] sm:w-auto'>
        <Link href="/"><img src={"/icon.png"} width={24} height={24} alt="Namviek Logo" /></Link>
        <nav className='hidden sm:block sm:space-x-8'>
          <Link href="#features">Features</Link>
          <Link href="#setup">Setup</Link>
          <Link href="https://docs.namviek.com" target="_blank">Doc</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#about">About</Link>
        </nav>

        <div className='flex items-center gap-4'>

          <OpenMenuBtn />

          <Link href={'https://github.com/hudy9x/namviek'} target="_blank">
            <FaGithub className="w-5 h-5" />
          </Link>

        </div>
      </nav>
    </div>

    <div className="mb-menu-wrapper">
      <MenuBackdrop />
      <nav id="mb-menu">
        <Link href="#features">Features</Link>
        <Link href="#setup">Setup</Link>
        <Link href="https://docs.namviek.com" target="_blank">Document</Link>
        <Link href="#pricing">Pricing</Link>
        <Link href="#about">About</Link>
      </nav>
    </div>
  </div >
}
