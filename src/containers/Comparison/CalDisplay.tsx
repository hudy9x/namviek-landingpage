import Card from "@/components/Card";
import { IoIosArrowRoundDown } from "react-icons/io";
import { useCalculator } from "./context";

export default function CalDisplay() {
  const { price } = useCalculator()
  const saving = price - 100
  const percent = saving / price * 100
  return <Card type='sky' height={345} className="w-[291px] p-6">
    <h2 className="uppercase text-[11px] font-semibold">WE DID THE MATH FOR YOU</h2>

    <div className='mt-[17px] space-y-4'>
      <div className="cal-section">
        <h3>$ {price}</h3>
        <p>Your tools of choice today</p>
      </div>

      <div className="cal-section">
        <h3 className='hightlight'>$ 100</h3>
        <p>Price with Namviek</p>
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
