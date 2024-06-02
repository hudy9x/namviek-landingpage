"use client"
// import Image from "next/image";
// import logoImg from "@/images/icon.png"
// import { FaDiscord, FaGithub } from "react-icons/fa";
// import Link from "next/link";
// import AnimElement from "@/components/ui/AnimElement";
import logo from "../images/icon.png"

import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import { FaDiscord, FaGithub } from "react-icons/fa";


export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
 

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-5 sm:mx-auto z-50", className)}>
    <Menu setActive={setActive}>
      <div className="flex justify-between items-center w-full">
        <div className="sm:flex items-center hidden">
          <Link href="/">
            <Image src={logo} alt="Company Logo" width={25} />
          </Link>
        </div>
        <div className="flex items-center space-x-4 w-full text-center justify-center">
          <Link href="#home">Home</Link>
          <Link href="#features">Features</Link>
          <Link href="#download">Setup</Link>
          <Link href="#about">About</Link>
        </div>
        <div className="sm:flex items-center space-x-4 hidden">
          <Link href="https://discord.gg/XbYtDQYFPZ">
            <FaDiscord />
          </Link>
          <Link href="https://github.com/hudy9x/namviek">
            <FaGithub />
          </Link>
        </div>
      </div>
    </Menu>
  </div>
  );
}

