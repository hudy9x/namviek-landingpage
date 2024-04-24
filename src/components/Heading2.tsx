import { fontJosefinSan } from "@/utils/fonts"
import { ReactNode } from "react"

export default function Heading2({ className, children }: {
  className?: string
  children: ReactNode
}) {

  const classes = ["text-h2 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-[58px]"]

  classes.push(fontJosefinSan.className)

  className && classes.push(className)

  return <h2 className={classes.join(' ')}>
    {children}
  </h2>
}
