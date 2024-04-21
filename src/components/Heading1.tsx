'use client'
import { fontJosefinSan } from "@/utils/fonts"
import { ReactNode } from "react"
import { delay, motion } from "framer-motion";

export default function Heading1({
  className,
  children,
  duration = 1,
  delay = 0,
}: {
  className?: string
  duration?: number
  delay?: number
  children: ReactNode
}) {

  const classes = ["text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"]

  classes.push(fontJosefinSan.className)

  className && classes.push(className)

  return <motion.h1
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ ease: "easeOut", duration, delay }}
    className={classes.join(' ')}>
    {children}
  </motion.h1>
}
