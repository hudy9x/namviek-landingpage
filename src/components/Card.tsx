import { ReactNode } from "react"

interface ICardTitle {
  title: string,
  desc: ReactNode,
  icon?: ReactNode
}
export const CardTitle = function({ title, desc, icon }: ICardTitle) {
  return <div className="card-title">
    <div className="px-5 pb-3 space-y-2">
      {icon}
      <h3 className="text-[18px]">{title}</h3>
      <p className="pa2">{desc}</p>
    </div>
  </div>
}

interface ICard {
  className?: string,
  type?: 'red' | 'sky' | 'ocean' | 'hell' | 'aurora'
  height?: number,
  children: ReactNode
}

export default function Card({ className, type = 'red', height = 450, children }: ICard) {
  const classes = ["card"]

  className && classes.push(className)

  switch (type) {
    case 'red':
      classes.push('card-bg-red')
      break;

    case 'sky':
      classes.push('card-bg-sky')
      break;

  }

  return <div className={classes.join(" ")} style={{ height }}>
    {children}
  </div>
}
