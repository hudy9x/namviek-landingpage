import Heading2 from "@/components/Heading2";
import Para2 from "@/components/Para2";
import React, { ReactNode } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import Bento from "@/components/ui/Bento";
import Image from "next/image";

import featListViewImg from "@/images/feat-list-view.png";
import featBoardViewImg from "@/images/feat-board-view.png";
import fCustomViewImg from "@/images/feat-custom-view.png";
import fGoalViewImg from "@/images/feat-goal-view.png";
import fCalendarViewImg from "@/images/feat-calendar-view.png";

export function FeatureBentoGrids() {
  return (
    <BentoGrid className="max-w-6xl pt-12 mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          // icon={item.icon}
          className={item.size === 2 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({ children }: { children?: ReactNode }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl relative bg-dot-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-white/[0.2] bg-black">{children}</div>
);

const items = [
  {
    title: "List and Board view",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton>
    </Skeleton>,
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Goal view",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Calendar view",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "View customization",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    size: 2,
    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Dashboard",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    // icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Notification",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    // icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Meeting",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Project & Member",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Data Export",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "App integrations",
    description: "Embark on exciting journeys and thrilling discoveries.",
    size: 2,
    header: <Skeleton />,
    // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];



export default function FeatureSection() {
  return <section className="features pt-[200px]">
    <header className="space-y-6">
      <Heading2 className="text-center">Essential features<br />for running your team</Heading2>
      <Para2 className="text-center">Provides built-in features like Views, Import, Export,<br /> Notification, Dashboard, Meeting, ...etc</Para2>
    </header>

    <div className="flex items-center gap-4 justify-center mt-12">
      <Bento title="List view" desc="some thing here" >

        <Image src={featListViewImg} alt="List view feature" />

      </Bento>
      <Bento title="Board view" desc="some thing here" >

        <Image src={featBoardViewImg} alt="Board view feature" />
      </Bento>
    </div>

    <div className="flex items-center gap-4 justify-center mt-4">
      <Bento title="View customization" desc="some thing here" >
        <Image src={fCustomViewImg} alt="Custom view feature" />
      </Bento>

      <Bento title="Goal view" desc="some thing here" >
        <Image src={fGoalViewImg} alt="Goal view feature" />
      </Bento>

      <Bento title="Calendar view" desc="some thing here" >
        <Image src={fCalendarViewImg} alt="Calendar view feature" />
      </Bento>
    </div>
  </section>
}
