'use client'

import { Tabs } from "@/components/ui/Tabs";
import Link from "next/link";

function Terminal({ commands }: { commands: string[] }) {
  return <div className="terminal text-white">
    <div className="terminal-header px-4 flex items-center py-2 border-b-2 border-white/30">
      <span className="uppercase text-[11px] text-gray-400">Terminal</span>
    </div>
    <div className="terminal-content divide-y divide-white/10">
      {commands.map((cmd, cmdindex) => {
        return <div key={cmdindex} className="px-4 py-1 text-base">
          <span className="text-gray-500 pr-2">$</span>
          <span className="text-green-400" dangerouslySetInnerHTML={{ __html: cmd }}></span>
        </div>
      })}

    </div>
  </div>
}

function Step1() {
  const commands = [
    'git clone git@github.com:hudy9x/namviek.git',
    'cd namviek',
    'cp .env.example .env.local',
  ]

  return <div>
    <div className="w-full border-2 border-white/30 backdrop-blur-md rounded-xl"><Terminal commands={commands} /></div>
  </div>
}


function Step2() {
  const commands = [
    'cp .env.example .env.local',
    'notepad .env.local',
    'Now visit <a target="_blank" href="https://github.com/hudy9x/namviek/blob/main/DOCUMENTS.md#configure-environment-variables">here</a> to configure environment variables '
  ]

  return <div className="w-full border-2 border-white/30 backdrop-blur-md rounded-xl"><Terminal commands={commands} /></div>
}

function Step4() {
  const commands = [
    'yarn frontend',
    'yarn backend'
  ]

  return <div className="w-full border-2 border-white/30 backdrop-blur-md rounded-xl"><Terminal commands={commands} /></div>
}

export function Installation() {

  const tabs = [
    {
      title: "1. Clone repo",
      value: "clone-repo",
      content: (
        <Step1 />
      ),
    },
    {
      title: "2. Configure .env",
      value: "configure-env",
      content: (
        <Step2 />
      ),
    },
    {
      title: "3. Run the app",
      value: "run-app",
      content: (
        <Step4 />
      ),
    },
  ];

  return (
    <div className="installation">
      <Tabs tabs={tabs} />
    </div>
  );
}

