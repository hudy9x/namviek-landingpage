"use client";
// import { CodeBlock } from 'geist/components';
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Heading2 from "@/components/Heading2";
import Para2 from "@/components/Para2";

function Terminal({ commands }: { commands: string[] }) {
  return <div className=" text-white">
    <div className=" px-4 flex items-center py-2 border-b-2 border-white/30">
      <span className="uppercase text-[11px] text-gray-400">Terminal</span>
    </div>
    <div className=" divide-y divide-white/10">
      {commands.map((cmd, cmdindex) => {
        return <div key={cmdindex} className="px-4 py-1 text-base">
          <span className="text-gray-500 pr-2">$</span>
          <span className="text-green-400" dangerouslySetInnerHTML={{ __html: cmd }}></span>
        </div>
      })}

    </div>
  </div>
}

const content = [
  {
    title: "Step 1: Clone the Repository",
    commands: [
      'git clone git@github.com:hudy9x/namviek.git',
      'cd namviek',
      'cp .env.example .env.local',
    ],
    description:
      "Clone the repository with git clone git@github.com:hudy9x/namviek.git, then navigate to the directory using cd namviek. Set up your environment by copying the example file with cp .env.example .env.local.",
    content:   (
      <Step1 />

    )
  },
    {
      title: "Step 2: Configure .env",
      description:
        "Copy the example environment file with cp .env.example .env.local, then edit it using notepad .env.local. Finally, visit the provided link to configure your environment variables.",
      content:  (
        <Step2 />

      ),
    },
    {
      title: "Step 3: Run the app",
      description:
        "Start the frontend with yarn frontend and the backend with yarn backend. This ensures real-time updates and keeps your project up to date without manual intervention.",
      content: (
        <Step3 />
      ),
    },
  ];

  function Step1() {
    const commands = [
      'git clone git@github.com:hudy9x/namviek.git',
      'cd namviek',
      'cp .env.example .env.local',
    ]
  
    return <div>
      <div className="w-full backdrop-blur-md rounded-xl"><Terminal commands={commands} /></div>
    </div>
  }
  
  
  function Step2() {
    const commands = [
      'cp .env.example .env.local',
      'notepad .env.local',
      'Now visit <a target="_blank" href="https://github.com/hudy9x/namviek/blob/main/DOCUMENTS.md#configure-environment-variables">here</a> to configure environment variables '
    ]
  
    return <div className="w-full backdrop-blur-md rounded-xl"><Terminal commands={commands} /></div>
  }
  
  function Step3() {
    const commands = [
      'yarn frontend',
      'yarn backend'
    ]
  
    return <div className="w-full backdrop-blur-md rounded-xl"><Terminal commands={commands} /></div>
  }

export default function Install() {
  return (
    <div id="download" className="p-10">
      <div className="py-10" >
       <Heading2 className="text-center whitespace-nowrap text-md">Wanna use it ?<br /> Clone it now</Heading2>
      <Para2 className="text-center">Namviek is a completely open source project for your small team.<br /> It is free, but you guys need a developer to help you host it</Para2>
      </div>

    <StickyScroll content={content}/>
  </div>
  )
}
