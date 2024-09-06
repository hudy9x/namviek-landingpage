import './style.css'

export default function SpinningCircle() {
  const rounds = new Array(20).fill(1)
  const offset = 40
  let width = 396
  let height = 396
  let rotate = 15

  return <div className="relative">
    <div className='sync-cycles-circles sync-cycles-circles-gradient'>
      {rounds.map((r, rindex) => {
        width += offset
        height += offset
        rotate += -15

        return <div className="circle" style={{
          width,
          height,
          top: `calc(50% - ${width / 2}px)`,
          left: `calc(50% - ${width / 2}px)`,
          transform: `rotate(${rotate})`

        }}></div>
      })}
    </div>
  </div>
}
