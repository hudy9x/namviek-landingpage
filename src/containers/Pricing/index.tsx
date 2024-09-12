
import Card from '@/components/Card'
import './style.css'
import Link from 'next/link'
import { FaCircleCheck } from 'react-icons/fa6'

export default function Pricing() {
  const whatIncludes = [
    'Codebase',
    'Usage document',
    'Deployment document',
    'Email support',
    'Online development document',
    'Video tutorial'
  ]
  return <section id="setup">
    <div className="flex flex-col items-center">
      <h6 className="hl3">pricing</h6>
      <h2 className="h2 mt-[17px]">Simple no-tricks<br />
        pricing plan
      </h2>
      <p className="pa1 w-[350px] sm:w-[650px] mt-[37px]">Pay a one-time fee for lifetime access to the codebase and documentation.</p>

      <div className="mt-14 sm:mt-28 flex flex-col sm:flex-row items-center gap-6">
        <Card type='darkblur' className='p-10 w-[95%] sm:w-[648px]' height={400}>
          <h2 className='font-semibold text-xl'>Lifetime membership</h2>
          <p className='text-[17px] mt-6 second-color'>Enjoy unlimited access to our codebase-based project management tool, tailored to your specific needs.</p>
          <h3 className='flex items-center gap-6 mt-6'>
            <span className='section-title whitespace-nowrap'>{`
              What's included
            `}</span>
            <span className='w-full h-[1px] bg-[#2F2351]'></span>

          </h3>
          <div className='grid grid-cols-2 gap-4 mt-6'>
            {whatIncludes.map((item, itemIndex) => {
              return <div key={itemIndex} className='flex items-center gap-2'>
                <FaCircleCheck className='text-[#5DD9F4] w-4 h-4' />
                <span className='text-sm'>{item}</span>
              </div>
            })}
          </div>
          <div className='text-sm second-color mt-6'>{`See all what's in the pack`}</div>

        </Card>
        <Card className='w-[95%] sm:w-[320px] p-10 flex flex-col gap-6 justify-center text-center' height={400}>
          <p className='uppercase text-sm font-semibold text-[#EDC6CC]'>pay once, own it forever</p>
          <h2 className='uppercase text-5xl space-x-2 font-extrabold text-[#EEE9FC]'><span>$99</span><small className='text-sm font-normal text-[#DCA9A9]'>USD</small></h2>
          <Link href={'https://polar.sh/namviek'}>
            <button className='cta-btn2 w-full'>Get it now</button>
          </Link>
          <p className='text-[#ECE6FE] text-xs'>
            Invoices and receipts available for easy<br />
            company reimbursement
          </p>
        </Card>

      </div>
    </div>

    <div className="absolute top-[350px] left-1/2 -translate-x-1/2 -z-10">

    </div>



  </section>
}
