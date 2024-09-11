import './cal-input.css'
import Card from "@/components/Card";
import { FaCircleCheck } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { useCalculator } from './context';

export default function CalInput() {
  const { setPrice: setGlobalPrice } = useCalculator()
  const [member, setMember] = useState(30)
  const [selected, setSelected] = useState(0)
  const softwares = [
    {
      name: 'Jira',
      pricings: [
        { value: 7.16, title: 'Standard - $7.16/month' },
        { value: 12.48, title: 'Premium - $12.48/month' },
      ]
    },
    {
      name: 'Trello',
      pricings: [
        { value: 5, title: 'Standard - $5/month' },
        { value: 10, title: 'Pro - $10/month' },
      ]
    },
    {
      name: 'Linear',
      pricings: [
        { value: 8, title: 'Base - $8/month' },
        { value: 12, title: 'Business - $12/month' },
      ]
    },
    {
      name: 'Monday',
      pricings: [
        { value: 9, title: 'Basic - $9/month' },
        { value: 12, title: 'Standard - $12/month' },
      ]
    },
    {
      name: 'Clickup',
      pricings: [
        { value: 7, title: 'Unlimited - $7/month' },
        { value: 12, title: 'Business - $12/month' },
      ]
    },
  ]

  const pricingOptions = softwares[selected].pricings
  const selectSoftware = softwares[selected].name
  const [price, setPrice] = useState(pricingOptions[0].value)

  useEffect(() => {
    const pricingOptions = softwares[selected].pricings
    setPrice(pricingOptions[0].value)
  }, [selected])


  useEffect(() => {
    const annualPrice = price * 10 * member
    setGlobalPrice(Math.round(annualPrice))
  }, [member, price])

  console.log(price, member, 12)

  return <Card type='darkblur'
    className='w-[95%] sm:w-[620px] p-8 space-y-4' height={348} border='lighter'>
    <div className='cal-form-control'>
      <label>Number of members</label>
      <div className='flex items-center gap-4'>
        <input type='range' className='w-full'
          value={member}
          onChange={ev => {
            const newMember = parseInt(ev.target.value, 10)
            setMember(newMember)
          }} max={50} step={1} min={10} />
        <input className='cal-input w-[50px] text-center' value={member} />
      </div>
    </div>

    <div className='cal-form-control'>
      <label>Project management software</label>
      <div className='flex items-center gap-3 mt-3'>
        {softwares.map((item, index) => {
          const { name, pricings } = item
          const isSelected = index === selected

          return <div key={index} onClick={() => setSelected(index)} className={`bg-[#120C1F] transition-all hover:cursor-pointer hover:bg-[#1c152b] w-12 h-12 rounded-lg border-2 ${isSelected ? 'border-blue-500' : 'border-gray-700'}  relative flex items-center justify-center`}>
            <img src={`/tools/${name}.svg`} alt={name} />
            {isSelected ? <FaCircleCheck className='bg-[#120C1F] p-0.5 rounded-full text-blue-500 absolute -top-2 -right-2' /> : null}
          </div>
        })}
      </div>
    </div>



    <div className='grid grid-cols-2 gap-3'>
      <div className='cal-form-control'>
        <label>Pricing plan with {selectSoftware}</label>
        <select className='cal-input mt-3 w-full' value={price} onChange={ev => {
          console.log(ev.target.value)
          setPrice(parseFloat(ev.target.value))
        }}>
          {pricingOptions.map((option, oindex) => {
            return <option value={option.value} key={oindex} selected={option.value === price}>{option.title}</option>
          })}
        </select>
      </div>
      <div className='cal-form-control'>
        <label className='hidden sm:block'>Annual cost with Jira for {member} members</label>
        <label className='sm:hidden'>Annual cost</label>
        <input readOnly value={`$${Math.round(price * 10 * member)}`} className='cal-input mt-3 w-full' />
      </div>
    </div>
  </Card>
}
