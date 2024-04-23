import { fontJosefinSan } from "@/utils/fonts";
import "./style.css";
import { ReactNode } from "react";
import FollowLight from "../FollowLight";

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
    <div className="bento-image [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-purple-500/10">
      <FollowLight>
        {children}
      </FollowLight>
    </div>
    <header className="bento-heading">
      <h2 className={`${fontJosefinSan.className} text-2xl font-bold`}>{title}</h2>
      <p>{desc}</p>
    </header>
  </section>
}
