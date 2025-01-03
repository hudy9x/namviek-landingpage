import './style.css'
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import OpenMenuBtn from './OpenMenuBtn';
import MenuBackdrop from './MenuBackdrop';

export default function Menu() {
  return <div className="menu-wrapper">
    <div className="flex justify-center">
      <nav id="menu" className='w-[300px] sm:w-auto'>
        <Link href="/" className='flex items-center gap-2'>
          <img src={"/icon.png"} width={24} height={24} alt="Namviek Logo" />
          <span className='sm:hidden'>Namviek</span>
        </Link>
        <nav className='hidden sm:block sm:space-x-8'>
          <Link href="/#features">Features</Link>
          <Link href="/#setup">Setup</Link>
          <Link href="https://docs.namviek.com" target="_blank">Doc</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/demo">Demo</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className='flex items-center gap-6'>

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
        <Link href="/#features">Features</Link>
        <Link href="/#setup">Setup</Link>
        <Link href="https://docs.namviek.com" target="_blank">Document</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/demo">Demo</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  </div >
}
