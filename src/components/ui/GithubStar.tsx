'use client'

import Link from "next/link";
import { useEffect, useState } from "react"
import { FaStar } from "react-icons/fa";

export default function GithubStar() {
  const [star, setStar] = useState(0)
  useEffect(() => {
    fetch('https://api.github.com/repos/hudy9x/namviek').then(res => res.json()).then(res => {
      const starCounter = res.stargazers_count || 0
      setStar(starCounter)
    })
  }, [])
  return <Link href={"https://github.com/hudy9x/namviek"} target="_blank" className="text-white flex justify-center">
    <div className="group inline-flex relative items-center justify-center gap-1 mt-6">
      <FaStar className="text-yellow-500" />
      <span className="px-1 rounded bg-black  text-xs">
        {star}
      </span>
      <div className="absolute top-[20px] -right-2/3 bg-zinc-800 px-3 py-2 rounded-md text-white opacity-0 group-hover:opacity-100 transition-all w-[100px]">Vote me !</div>
    </div>

  </Link>
}
