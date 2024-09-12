import './style.css'
export default function TopBackground() {

  return <div id="top-background" className='w-screen sm:w-[1024px] h-[70px] mx-auto -z-10 relative'>
    <div className='absolute -left-[400px] sm:-left-[127px] -top-[125px]'>
      <div className="top-bg-container">
        <div className="top-bg-1"></div>
        <div style={{ opacity: 0.45 }}>
          <div className="top-bg-2"></div>
          <div className="top-bg-3"></div>
        </div>
      </div>
    </div>
  </div>

}
