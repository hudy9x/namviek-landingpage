'use client'
import Card from '@/components/Card'
import './style.css'
import Link from 'next/link'
import { FaCircleCheck } from 'react-icons/fa6'
import { useState } from 'react'
import PricingComparison from './PricingComparision'

enum EAccessType {
  ThreeMonth,
  Lifetime
}

// export const revalidate = 10
export default function PricingContainer(product: {
  priceAmount: number
  priceCurrency: string
  link: string
}) {
  const [accessType, setAccessType] = useState<EAccessType>(EAccessType.Lifetime)
  const isThreeMonth = accessType === EAccessType.ThreeMonth

  const developmentDoc = 'Development document'
  const whatIncludes = [
    'Codebase',
    'Setup document',
    'Integration document',
    'Email support',
    'Video tutorial',
    developmentDoc,
  ]

  const heading = accessType === EAccessType.ThreeMonth ? '3 Months Access' : 'Lifetime Access'
  const subheading = accessType === EAccessType.ThreeMonth ? '3 month access' : 'lifetime access'
  const priceHeading = isThreeMonth ? 'Pricing for 3 months' : 'Pricing for lifetime'
  const priceNumber = isThreeMonth ? 9 : 39;
  const textColor = isThreeMonth ? 'text-[#EDC6CC]' : 'text-[#d3edc6]';
  const cardType = isThreeMonth ? 'red' : 'sky'
  const priceFor3MonthLink = process.env.NEXT_PUBLIC_THREEMONTH_ACCESS || ''
  const priceForLifetimeLink = process.env.NEXT_PUBLIC_LIFETIME_ACCESS || ''
  const productLink = isThreeMonth ? priceFor3MonthLink : priceForLifetimeLink

  const saleOff = isThreeMonth ? 0 : 20;
  const discountCode = isThreeMonth ? '' : '100MEM'

  const threeMonthDesc = `Ideal for tech-savvy individuals hosting apps for their teams, offering a cost-effective solution for short-term projects and quick experimentation with basic features and documentation.`
  const lifetimeDesc = `Perfect for teams developing their own project management tools, providing long-term value and access to in-depth development documentation, including advanced customization options.`

  return <section id="pricing" className='pt-[200px]'>
    <div className="flex flex-col items-center">
      <h6 className="hl3">pricing</h6>
      <h2 className="h2 mt-[17px]">Simple no-tricks<br />
        pricing plan
      </h2>
      <p className="pa1 w-[350px] sm:w-[650px] mt-[37px]">You just have to pay for documentation access and feel free to download the codebase</p>
      <div className='mt-8'>
        <div className='pricing-group-btn'>
          <button
            onClick={() => setAccessType(EAccessType.ThreeMonth)}
            className={`pricing-btn ${accessType === EAccessType.ThreeMonth ? 'active' : ''}`}>3 Months</button>
          <button
            onClick={() => setAccessType(EAccessType.Lifetime)}
            className={`pricing-btn ${accessType === EAccessType.Lifetime ? 'active' : ''}`}>Lifetime</button>
        </div>
      </div>
      <div className="mt-10 sm:mt-28 flex flex-col sm:flex-row items-center gap-6">
        <Card type='darkblur' className='p-10 w-[95%] sm:w-[648px]' height="h-[460px] sm:h-[400px]">
          <h2 className='font-semibold text-xl'>{heading}</h2>
          <p className='text-xs sm:text-[14px] leading-5 sm:leading-7 mt-6 second-color'>{isThreeMonth ? threeMonthDesc : lifetimeDesc}</p>
          <h3 className='flex items-center gap-6 mt-6'>
            <span className='section-title whitespace-nowrap'>{`
              What's included
            `}</span>
            <span className='w-full h-[1px] bg-[#2F2351]'></span>

          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6'>
            {whatIncludes.map((item, itemIndex) => {
              let color = 'text-[#5DD9F4]'
              let textColor = ''
              if (isThreeMonth && item === developmentDoc) {
                color = 'text-gray-900'
                textColor = 'text-gray-700'
              }
              return <div key={itemIndex} className='flex items-center gap-2'>
                <FaCircleCheck className={`${color} w-4 h-4 shrink-0`} />
                <span className={`text-xs sm:text-sm ${textColor}`}>{item}</span>
              </div>
            })}
          </div>
          <div className='text-sm second-color mt-6'>
            <Link href={'/pricing#price-include'}>
              {`See all what's in the pack`}
            </Link>
          </div>
          {/* <div className='text-sm second-color mt-6'>{`You will be granted to access locked articles on `}<Link className='hover:underline transition-all' target='_blank' href="https://docs.namviek.com">https://docs.namviek.com</Link></div> */}

        </Card>
        <Card
          type={cardType}
          className='w-[95%] sm:w-[320px] relative p-10 flex flex-col gap-6 justify-center text-center'
          height={"h-[400px]"}>
          <p className={`uppercase text-sm font-semibold ${textColor}`}>{priceHeading}</p>
          <h2 className='uppercase text-5xl space-x-2 font-extrabold text-[#EEE9FC]'>
            {saleOff ? <span className='uppercase font-extrabold text-xl text-white/30'>$ {priceNumber}</span> : null}
            <span>${priceNumber - saleOff}</span>
            <small className={`text-sm font-normal ${textColor}`}>USD</small>
          </h2>


          <Link href={productLink} target='_blank'>
            <button className={`${isThreeMonth ? 'cta-btn2' : 'cta-btn3'} w-full`}>Get it now {saleOff ? `with code ${discountCode}` : ''}</button>
          </Link>
          <p className='text-[#ECE6FE] text-xs'>
            Ideal for small teams (10-20 members)<br /> with a low budget.
          </p>
          {saleOff > 0 ? <span style={{ textShadow: '#ba9918 0px 2px 3px' }} className='absolute -top-[10px] -right-[36px] pb-[5px] pt-[18px] bg-yellow-400 font-extrabold rotate-45 py-3 w-[100px]'>$ {saleOff}</span> : null}
        </Card>

      </div>
      <p className='mt-14'><Link className='underline underline-offset-4' href={"/#setup"}>I want to try it first !!</Link></p>
    </div >

    <div className="absolute top-[350px] left-1/2 -translate-x-1/2 -z-10">

    </div>


    {/* <PricingComparison /> */}

  </section >
}
