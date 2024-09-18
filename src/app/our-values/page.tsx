import { Metadata } from "next";
import './style.css'

export const metadata: Metadata = {
  title: 'Our values',
  description: 'Our mission is to provide a simple and effective project management tool for tiny teams',
}

export default function ContactPage() {
  return <>
    <section id="feature-3" className="relative sm:w-[1242px] mx-auto mt-[200px] sm:mt-[150px]">
      <div className="flex flex-col items-center">
        <h6 className="hl1">value</h6>
        <h2 className="h2 mt-[17px]">Meet our values</h2>
        <p className="pa1 w-[350px] sm:w-[650px] mt-[37px]">Our mission is to provide a simple and effective project management tool for tiny teams with low budget</p>

        <div className="w-[95%] sm:w-[500px] our-value-content mt-20">
          <h4>Essential Features</h4>
          <p>
            A robust project management tool for small teams should provide a core set of features to streamline workflows and enhance collaboration. These features could include:
            <ul>
              <li>Task Management: A central platform for creating, assigning, and tracking tasks, complete with due dates, priorities, and dependencies</li>
              <li>Time Tracking: Accurate time logging to measure project progress and identify potential bottlenecks.</li>
              <li>Project Planning: Tools for creating project timelines, setting milestones, and assigning resources.</li>
              <li>Reporting and Analytics: Customizable reports to monitor project performance, track key metrics, and identify areas for improvement.</li>
            </ul>

          </p>



          <h4>Cost-Effective Solution</h4>
          <p>Reducing operational costs is a critical concern for small teams. A project management tool should be designed to minimize expenses while providing essential functionality. Key strategies to achieve cost-effectiveness include:

            <ul>
              <li>One-time fee: You only have to pay once for the codebase and setup documentation.</li>
              <li>Open-Source Options: Exploring open-source project management tools that are freely available and customizable.</li>
            </ul>
          </p>

          <h4>User-Friendly Setup and Onboarding</h4>
          <p>A project management tool should be easy to set up and use, especially for teams with limited technical expertise. To ensure a smooth onboarding experience, consider the following factors:

            <ul>
              <li>Intuitive Interface: Designing a clean and user-friendly interface that is easy to navigate and understand.</li>
              <li>Comprehensive Documentation: Providing detailed user manuals, tutorials, and help guides to assist users in learning and using the tool effectively.</li>
              <li>Video Tutorials: Creating step-by-step video tutorials to visually demonstrate how to perform common tasks and troubleshoot issues. (comming soon)</li>
              <li>Personalized Support: Offering personalized support, such as live chat or email assistance, to help users get started and resolve any problems.</li>
            </ul>
          </p>
        </div>

      </div>

      <div className="absolute top-[342px] -left-[43%] -z-10">
        {/* <BgSpace /> */}

      </div>



    </section>
  </>
}
