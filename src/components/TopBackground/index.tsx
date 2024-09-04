import './style.css'
export default function TopBackground() {
  return <div className='w-[1024px] h-[70px] mx-auto -z-10 relative'>
    <div className='absolute -left-[127px] -top-[125px]'>
      <div
        className="relative"
        style={{ width: 813, height: 666 }}>
        <div className="top-bg-1"></div>
        <div style={{ opacity: 0.45 }}>
          <div className="top-bg-2"></div>
          <div className="top-bg-3"></div>
        </div>
      </div>
    </div>
  </div>
}
