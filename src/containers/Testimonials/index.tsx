import './style.css'
import BgBrand from '@/components/Background/BgBrand'

export default function Testimonials() {
  return <section id="testimonials" className='relative'>
    <div className="flex flex-col items-center">
      <h6 className="hl2">testimonials</h6>
      <h2 className="h2 mt-[17px]">Here’s what developers<br />
        say about Namviek
      </h2>
      <p className="pa1 mt-[37px]">Easy to setup Namviek on local machine or<br />
        you can run it on your own server with a tiny budget</p>

      <div className="mt-28 flex items-center gap-6">


      </div>
    </div>

    <div className="absolute top-[350px] left-1/2 -translate-x-1/2 -z-10">
      <BgBrand />
    </div>



  </section>
}
