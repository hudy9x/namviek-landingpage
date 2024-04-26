import Heading2 from "@/components/Heading2";
import Para2 from "@/components/Para2";
import React from "react";
import Bento from "@/components/ui/Bento";
import Image from "next/image";

import featListViewImg from "@/images/feat-list-view.png";
import featBoardViewImg from "@/images/feat-board-view.png";
import fCustomViewImg from "@/images/feat-custom-view.png";
import fGoalViewImg from "@/images/feat-goal-view.png";
import fCalendarViewImg from "@/images/feat-calendar-view.png";

export default function FeatureSection() {
  return <section id="features" className="features pt-[200px]">
    <header className="space-y-6">
      <Heading2 className="text-center">Essential features<br />for running your team</Heading2>
      <Para2 className="text-center">Provides built-in features like Views, Import, Export,<br /> Notification, Dashboard, Meeting, ...etc</Para2>
    </header>

    <div className="flex items-center gap-4 justify-center mt-12">
      <Bento title="List view" desc="See it all at once. Prioritize and manage your tasks in a simple list." >
        <Image src={featListViewImg} alt="List view feature" />
      </Bento>
      <Bento title="Board view" desc="Visualize your workflow. Move tasks between stages for clear progress tracking." >

        <Image src={featBoardViewImg} alt="Board view feature" />
      </Bento>
    </div>

    <div className="flex items-center gap-4 justify-center mt-4">
      <Bento title="View customization" desc="Work your way. Design the perfect view to fit your specific needs." >
        <Image src={fCustomViewImg} alt="Custom view feature" />
      </Bento>

      <Bento title="Goal view" desc="Stay on target. See your progress at a glance and celebrate milestones." >
        <Image src={fGoalViewImg} alt="Goal view feature" />
      </Bento>

      <Bento title="Calendar view" desc="Plan your days. Never miss a deadline with tasks scheduled on your calendar." >
        <Image src={fCalendarViewImg} alt="Calendar view feature" />
      </Bento>
    </div>
  </section>
}
