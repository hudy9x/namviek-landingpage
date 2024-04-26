'use client'
import { motion, useScroll } from "framer-motion";

export default function TopNav() {
  const { scrollYProgress } = useScroll()

  console.log('scroll y', scrollYProgress)
  return <motion.div
    className="fixed top-0 left-0 w-full z-10 text-white"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
  >
    <div>Hello</div>
  </motion.div>

}
