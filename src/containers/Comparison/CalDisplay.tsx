import Card from "@/components/Card";
import { IoIosArrowRoundDown } from "react-icons/io";
import { useCalculator } from "./context";

export default function CalDisplay() {
  const { price } = useCalculator()
  const anually = 12
  const productPrice = 15 * anually // $15 / month
  const saving = price - productPrice
  const percent = saving / price * 100
  return <Card type='sky' height="h-[345px]" className="w-[95%] sm:w-[291px] p-6">
    <h2 className="uppercase text-[11px] font-semibold">WE DID THE MATH FOR YOU</h2>

    <div className='mt-[17px] space-y-4'>
      <div className="cal-section">
        <h3>$ {price}</h3>
        <p>Your tools of choice today</p>
      </div>

      <div className="cal-section">
        <h3 className='hightlight'>$ {productPrice}</h3>
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
