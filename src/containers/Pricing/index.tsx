
import Card from '@/components/Card'
import './style.css'
import Link from 'next/link'
import { HiOutlineCheckCircle } from 'react-icons/hi'

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
      <h6 className="hl1">pricing</h6>
      <h2 className="h2 mt-[17px]">Simple no-tricks<br />
        pricing plan
      </h2>
      <p className="pa1 mt-[37px]">Namviek support to deploy to popular platforms<br /> such as AWS Lightsail, Digital Ocean, Render.com, Vercel, Netlify</p>

      <div className="mt-28 flex items-center gap-6">
        <Card type='transparent' className='p-10'>
          <h2>Lifetime membership</h2>
          <p>Enjoy unlimited access to our codebase-based project management tool, tailored to your specific needs.</p>
          <h3 className='flex items-center gap-6'>
            <span className='whitespace-nowrap'>
              What's included
            </span>
            <span className='w-full h-[1px] bg-red-500'></span>

          </h3>
          <div className='grid grid-cols-2'>
            {whatIncludes.map((item, itemIndex) => {
              return <div key={itemIndex} className='flex items-center gap-2'>
                <HiOutlineCheckCircle />
                <span>{item}</span>
              </div>
            })}
          </div>
          <div>See all what's in the pack</div>

        </Card>
        <Card className='p-10 flex flex-col justify-center text-center'>
          <p className='uppercase text-sm text-[#EDC6CC]'>pay once, own it forever</p>
          <h2 className='uppercase text-5xl font-extrabold text-[#EEE9FC]'>$99<small className='text-sm font-normal text-[#DCA9A9]'>USD</small></h2>
          <Link href={'https://polar.sh/namviek'}>
            <button className='btn'>Get it now</button>
          </Link>
          <p>
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
