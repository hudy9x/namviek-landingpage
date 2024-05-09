'use client'
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function MotionElement({ children, className }: { children: ReactNode, className?: string  }) {

  return <motion.div
    className={className}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 2 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
}
