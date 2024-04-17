
import { fontInter, fontJosefinSan } from "@/utils/fonts"
import { ReactNode } from "react"

export default function Para2({ className, children }: {
  className?: string
  children: ReactNode
}) {

  const classes = ["text-para2 text-white"]

  classes.push(fontInter.className)
  className && classes.push(className)

  return <p className={classes.join(' ')}>
    {children}
  </p>
}
