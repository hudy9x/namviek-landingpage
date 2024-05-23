'use client'
import { fontInter } from "@/utils/fonts";
import "./style.css";
import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function Bento({
  title,
  desc,
  className,
  children
}: {
  title: string
  desc: string
  className?: string
  children: ReactNode
}) {

  const classes: string[] = ['bento-card ']

  className && classes.push(className)

  return <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 2 }}
    viewport={{ once: true }}
  >
    <section className={classes.join(" ")}>
      <div className="bento-image [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-blue-500/5 hover:bg-blue-500/20 transition-all duration-700">
        {/* <div className="bento-image"> */}
        {children}
      </div>
      <header className="bento-heading">
        <h2 className={`${fontInter.className} text-xl font-bold tracking-tight`}>{title}</h2>
        <p className="text-base text-gray-400 w-[330px] tracking-tight">{desc}</p>
      </header>
    </section>
  </motion.div>
}
