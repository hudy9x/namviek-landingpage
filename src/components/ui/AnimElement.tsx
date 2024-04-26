'use client'

import { motion } from "framer-motion";
import { ReactNode } from "react";
export default function AnimElement({
  children,
  className,
  delay = 1.5,
  duration = 5
}: {
  children?: ReactNode
  className?: string
  delay?: number
  duration?: number
}) {
  const classes = []

  className && classes.push(className)

  return <motion.div
    className={classes.join(' ')}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay, duration }}
  >
    {children}
  </motion.div>

}
