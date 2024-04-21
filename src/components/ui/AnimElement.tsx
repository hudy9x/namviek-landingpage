'use client'

import { motion } from "framer-motion";
import { ReactNode } from "react";
export default function AnimElement({
  children,
  className
}: {
  children?: ReactNode
  className?: string
}) {
  const classes = []

  className && classes.push(className)

  return <motion.div
    className={classes.join(' ')}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5, duration: 5 }}
  >
    {children}
  </motion.div>

}
