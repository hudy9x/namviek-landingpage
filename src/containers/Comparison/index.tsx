import BgSpace from '@/components/Background/BgSpace'
import './style.css'
import Link from 'next/link'
import Calculator from './Calculator'

export default function Comparison() {
  return <section id="comparison" className="relative w-[1242px] mx-auto mt-[345px]">
    <div className="flex flex-col items-center">
      <h6 className="hl2">comparison</h6>
      <h2 className="h2 mt-[17px]">Reduce the cost<br />
        by over 90%</h2>
      <p className="pa1 mt-[37px]">We ultilizes the free tier of popular platforms such as<br />Vercel, Render, AWS to reduce the operational cost</p>

      <button className='cta-btn2 w-[300px] mt-[37px]'>Get it now</button>

      <Calculator />

      <Link href={'https://gekki'} className='mt-[35px]'>Why is this so affordable ?</Link>
    </div>

    <div className="absolute top-[342px] -left-[43%] -z-10">
      <BgSpace />

    </div>



  </section>
}
