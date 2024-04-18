import Heading2 from "@/components/Heading2";
import Para2 from "@/components/Para2";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
// import {
//   IconArrowWaveRightUp,
//   IconBoxAlignRightFilled,
//   IconBoxAlignTopLeft,
//   IconClipboardCopy,
//   IconFileBroken,
//   IconSignature,
//   IconTableColumn,
// } from "@tabler/icons-react";

export function FeatureBentoGrids() {
  return (
    <BentoGrid className="max-w-4xl pt-12 mx-auto">
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
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   bg-dot-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-white/[0.2] bg-black"></div>
);

const items = [
  {
    title: "List and Board view",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
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
    <FeatureBentoGrids />
  </section>
}
