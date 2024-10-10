'use client'
import Card from '@/components/Card'
import './style.css'
import Link from 'next/link'
import { FaCircleCheck } from 'react-icons/fa6'
import { useState } from 'react'

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
  const [accessType, setAccessType] = useState<EAccessType>(EAccessType.ThreeMonth)
  const isThreeMonth = accessType === EAccessType.ThreeMonth

  const developmentDoc = 'Development document'
  const whatIncludes = [
    'Codebase',
    'Deploy document',
    'Email support',
    'Video tutorial',
    developmentDoc,
  ]

  const heading = accessType === EAccessType.ThreeMonth ? '3 Months Access' : 'Lifetime Access'
  const subheading = accessType === EAccessType.ThreeMonth ? '3 month access' : 'lifetime access'
  const priceHeading = isThreeMonth ? 'Pricing for 3 months' : 'Pricing for lifetime'
  const priceNumber = isThreeMonth ? 9 : 39;
  const cardType = isThreeMonth ? 'red' : 'sky'
  const priceFor3MonthLink = 'https://namviek.lemonsqueezy.com/buy/59488ac7-baea-4b24-b194-1d5aad3c2678'
  const priceForLifetimeLink = 'https://namviek.lemonsqueezy.com/buy/e284fa2d-3ce6-4887-9bae-c41f2d2afb1e'
  const productLink = isThreeMonth ? priceFor3MonthLink : priceForLifetimeLink


  return <section id="pricing" className='pt-[200px]'>
    <div className="flex flex-col items-center">
      <h6 className="hl3">pricing</h6>
      <h2 className="h2 mt-[17px]">Simple no-tricks<br />
        pricing plan
      </h2>
      <p className="pa1 w-[350px] sm:w-[650px] mt-[37px]">Pay a one-time fee for lifetime access to the codebase and documentation.</p>
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
          <p className='text-xs sm:text-[17px] leading-5 sm:leading-7 mt-6 second-color'>Enjoy {subheading} to our application documentation, tailored to your specific needs.</p>
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
          <div className='text-sm second-color mt-6'>{`See all what's in the pack`}</div>

        </Card>
        <Card
          type={cardType}
          className='w-[95%] sm:w-[320px] p-10 flex flex-col gap-6 justify-center text-center'
          height={"h-[400px]"}>
          <p className='uppercase text-sm font-semibold text-[#EDC6CC]'>{priceHeading}</p>
          <h2 className='uppercase text-5xl space-x-2 font-extrabold text-[#EEE9FC]'>
            <span>${priceNumber}</span>
            <small className='text-sm font-normal text-[#DCA9A9]'>{product.priceCurrency}</small>
          </h2>
          <Link href={productLink} target='_blank'>
            <button className='cta-btn2 w-full'>Get it now</button>
          </Link>
          <p className='text-[#ECE6FE] text-xs'>
            Ideal for small teams (10-30 members)<br /> with a low budget.
          </p>
        </Card>

      </div>
    </div >

    <div className="absolute top-[350px] left-1/2 -translate-x-1/2 -z-10">

    </div>



  </section >
}
