import Link from 'next/link'
import './style.css'
import Terminal from './Terminal'
import { FaGithub } from 'react-icons/fa'

export default function Setup() {
  return <section id="setup" className='pt-[200px]'>
    <div className="flex flex-col items-center">
      <h6 className="hl3">deployments</h6>
      <h2 className="h2 mt-[17px]">Run Namviek on<br />
        your own local machine
      </h2>
      <p className="pa1 w-[350px] sm:w-[650px] mt-[37px]">If you are familiar with Docker
        run the following command to build and use the app</p>

      <div className="mt-[50px] sm:mt-[115px] w-[95%] sm:w-[1200px] flex justify-center ">
        <Terminal />
      </div>
      <p className='mt-14'>
        <Link className='flex items-center gap-2 bg-white/80 hover:bg-white transition-all text-black border border-white/10 px-3 py-2 rounded-full' target='_blank' href="https://github.com/hudy9x/namviek.git">
          <FaGithub className="w-5 h-5" />
          Clone it now
        </Link></p>
    </div>

  </section>
}
