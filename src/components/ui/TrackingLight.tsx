'use client'
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { ReactNode } from "react";

export default function TrackingLight({ children }: { children: ReactNode }) {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

  }

  const maskImage = useMotionTemplate`radial-gradient(40px at ${mouseX}px ${mouseY}px, white, transparent)`;

  const style = { maskImage, WebkitMaskImage: maskImage };
  return <div onMouseMove={onMouseMove} className="relative">
    <motion.div
      className="absolute "
      style={style}
    />
    {children}
  </div>
}
