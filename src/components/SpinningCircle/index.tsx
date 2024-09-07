import './style.css'

function CircleContainer({ className }: { className?: string }) {

  const rounds = new Array(30).fill(1)
  const offset = 35
  let width = 87
  let height = 87
  let rotate = 15

  return <div className={className}>
    {rounds.map((r, rindex) => {
      width += offset
      height += offset
      rotate += -15

      return <div key={rindex} className="circle" style={{
        width,
        height,
        top: `calc(50% - ${width / 2}px)`,
        left: `calc(50% - ${width / 2}px)`,
        transform: `rotate(${rotate}deg)`

      }}></div>
    })}
  </div>
}

export default function SpinningCircle() {

  return <div className="relative">
    <CircleContainer className='w-full h-full' />
    <CircleContainer className="circle-gradient h-full w-full" />
    {/* <div className=''> */}
    {/*   {rounds.map((r, rindex) => { */}
    {/*     width += offset */}
    {/*     height += offset */}
    {/*     rotate += -15 */}
    {/**/}
    {/*     return <div key={rindex} className="circle" style={{ */}
    {/*       width, */}
    {/*       height, */}
    {/*       // top: `calc(50% - ${width / 2}px)`, */}
    {/*       // left: `calc(50% - ${width / 2}px)`, */}
    {/*       // transform: `rotate(${rotate})` */}
    {/**/}
    {/*     }}></div> */}
    {/*   })} */}
    {/* </div> */}
    {/* <div className='circle-gradient'> */}
    {/*   {rounds.map((r, rindex) => { */}
    {/*     width += offset */}
    {/*     height += offset */}
    {/*     rotate += -15 */}
    {/**/}
    {/*     return <div key={rindex} className="circle" style={{ */}
    {/*       width, */}
    {/*       height, */}
    {/*       // top: `calc(50% - ${width / 2}px)`, */}
    {/*       // left: `calc(50% - ${width / 2}px)`, */}
    {/*       // transform: `rotate(${rotate})` */}
    {/**/}
    {/*     }}></div> */}
    {/*   })} */}
    {/* </div> */}
  </div>
}
