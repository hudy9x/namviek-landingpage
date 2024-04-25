'use client'

import { Tabs } from "@/components/ui/Tabs";

function Step1() {
  const commands = [
    'git clone git@github.com:hudy9x/namviek.git',
    'cd namviek',
    'cp .env.example .env.local',
    'yarn frontend',
    'yarn backend'
  ]

  return <div className="text-white text-2xl">
    {commands.map((cmd, cmdindex) => {
      return <div key={cmdindex}>
        <span className="text-yellow-200 pr-2">$</span>
        <span className="text-green-400">{cmd}</span>
      </div>
    })}
  </div>
}

export function Installation() {
  const tabs = [
    {
      title: "1. Clone repo",
      value: "clone-repo",
      content: (
        <div className="w-full border-2 border-white/30 p-8 backdrop-blur-md rounded-xl">
          <Step1 />
        </div>
      ),
    },
    {
      title: "2. Configure .env",
      value: "configure-env",
      content: (
        <div className="w-full border-2 border-white/30 p-8 backdrop-blur-md rounded-xl">
          <Step1 />
        </div>
      ),
    },
    {
      title: "3. Setup Mongodb and Redis",
      value: "setup-mongodb-redis",
      content: (
        <div className="w-full border-2 border-white/30 p-8 backdrop-blur-md rounded-xl">
          <Step1 />
        </div>
      ),
    },
    {
      title: "4. Run the app",
      value: "run-app",
      content: (
        <div className="w-full border-2 border-white/30 p-8 backdrop-blur-md rounded-xl">
          <Step1 />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] top-10 md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

