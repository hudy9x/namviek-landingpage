import { fontJosefinSan } from "@/utils/fonts";
import "./style.css";
import { ReactNode } from "react";
import TrackingLight from "../TrackingLight";

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

  return <section className={classes.join(" ")}>
    <div className="bento-image [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-blue-500/20">
      {/* <div className="bento-image"> */}
      <TrackingLight>
        {children}
      </TrackingLight>
    </div>
    <header className="bento-heading">
      <h2 className={`${fontJosefinSan.className} text-xl font-bold`}>{title}</h2>
      <p className="text-base text-gray-400 w-[330px]">{desc}</p>
    </header>
  </section>
}
