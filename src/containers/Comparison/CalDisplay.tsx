import Card from "@/components/Card";
import { IoIosArrowRoundDown } from "react-icons/io";
import { useCalculator } from "./context";
import { useState } from "react";

export default function CalDisplay() {
  const [selected, setSelected] = useState(1)
  const [prodPrice, setProdPrice] = useState(7)
  const [visible, setVisible] = useState(false)

  const hostings = [
    {
      name: 'Render.io',
      img: '/RenderIO.png',
      plan: [
        { name: 'Hobby', price: 0 },
        { name: 'Pro', price: 19 }
      ]
    },
    {
      name: 'AWS Lightsail',
      img: '/AWS.png',
      plan: [
        { name: '512MB', price: 5 },
        { name: '1GB', price: 7 },
        { name: '2GB', price: 12 }
      ]
    },
    {
      name: 'Digital Ocean',
      img: '/DigitalOcean.png',
      plan: [
        { name: '512MiB', price: 4 },
        { name: '1GiB', price: 6 },
        { name: '2GiB', price: 12 }
      ]
    },
    {
      name: 'Raspberry Pi',
      img: '/RaspberyPi.png',
      plan: [
        { name: 'Free', price: 0 },
      ]
    }
  ]

  const isSelected = selected !== -1
  const selectedHost = hostings[selected]

  const { price } = useCalculator()
  const anually = 12
  const productPrice = prodPrice * anually // $15 / month
  const saving = price - productPrice
  const percent = saving / price * 100

  return <Card type='sky' height="h-[345px]" className="w-[95%] sm:w-[291px] p-6">
    <h2 className="uppercase text-[11px] font-semibold">WE DID THE MATH FOR YOU</h2>

    <div className='mt-[17px] space-y-4'>
      <div className="cal-section">
        <h3>$ {price}</h3>
        <p>Your tools of choice today</p>
      </div>

      <div className="cal-section relative group">
        <h3 className='hightlight'>$ {productPrice}</h3>
        <p className="flex items-center gap-1">
          <span>Hosting Namviek on</span>
          {selectedHost ?
            <img
              title={selectedHost.name}
              onClick={() => {
                setVisible(true)
              }}
              className="w-5 h-5 rounded-full bg-white/80 hover:bg-white cursor-pointer" src={`${selectedHost.img}`} />
            : null
          }
        </p>

        <div className={`host-section ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {!isSelected ?
            <div className="host-container">
              {hostings.map((host, hindex) => {
                return <div
                  onClick={ev => setSelected(hindex)}
                  key={host.name} className="host-item">
                  <img src={`${host.img}`} />
                </div>
              })}
            </div>
            : null
          }

          {isSelected ?
            <div className="flex items-center h-full">
              <div className="space-y-2">
                <h2 className="flex items-center gap-1">
                  <img className="w-5 h-5 rounded-full bg-white/80" src={`${selectedHost.img}`} />
                  <span className="text-[9px]">{selectedHost.name}</span>
                </h2>
                <div className="flex items-center gap-1">
                  {selectedHost.plan.map(p => {
                    return <div key={p.name}
                      onClick={() => {
                        setProdPrice(p.price)
                        setVisible(false)
                      }}
                      title={p.name}
                      style={{ fontSize: 9 }}
                      className="cursor-pointer px-1 py-0.5 bg-black/70 hover:bg-black/40 rounded-md">
                      {p.price === 0 ? 'Free' : `$${p.price}/m`}
                    </div>
                  })}
                  <div
                    onClick={() => {
                      setSelected(-1)
                    }}
                    style={{ fontSize: 9 }}
                    className="cursor-pointer px-1 py-0.5 hover:bg-green-400/90 bg-green-400/70 rounded-md">
                    Edit
                  </div>

                </div>
              </div>
            </div>
            : null}
        </div>
      </div>
      <div className="cal-section">
        <h3 className='flex items-center justify-between'>
          <span>$ {saving}</span>
          <small className='flex items-center'><IoIosArrowRoundDown className='w-6 h-6' /> {Math.round(percent)}%</small>
        </h3>
        <p>Savings with Namviek</p>
      </div>
    </div>
  </Card>
}
