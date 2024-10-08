import BgSpace from '@/components/Background/BgSpace'
import './style.css'
import Link from 'next/link'
import Calculator from './Calculator'
import { IoIosArrowRoundForward } from 'react-icons/io'

export default function Comparison() {
  return <section id="comparison" className="relative w-full sm:w-[1242px] mx-auto mt-[200px] sm:mt-[345px]">
    <div className="flex flex-col items-center">
      <h6 className="hl2">comparison</h6>
      <h2 className="h2 mt-[17px]">Reduce the cost<br />
        by over 90%</h2>
      <p className="pa1 w-[350px] sm:w-[650px] mt-[37px]">{`Let's figure out how much money you can save by doing project management yourself`}</p>

      <button className='cta-btn2 w-[300px] mt-[37px]'>Get it now</button>

      <Calculator />

      {/* <Link href={'https://gekki'} className='mt-[35px] flex items-center gap-4 text-gray-400'> <IoIosArrowRoundForward className='w-12 h-7 text-white px-3 py-0.5 rounded-full bg-white/30' />Why is this so affordable ?</Link> */}
    </div>

    <div className="absolute top-[342px] -left-[43%] -z-10">
      <BgSpace />

    </div>



  </section>
}
