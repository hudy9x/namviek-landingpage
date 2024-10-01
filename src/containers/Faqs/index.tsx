import BgSpace from "@/components/Background/BgSpace"
import Link from "next/link"
import { HiOutlineMail } from "react-icons/hi"

const faqs = [
  {
    question: 'Who is Namviek suitable for?',
    answer:
      `If you're a small startup with 20-30 employees and you only have a budget of $15 - $25 per month for a work management tool, then Namviek is a solution for you.`,
  },

  {
    question: 'Do I have to pay a monthly fee for each user like other management tools (Jira, Trello, Asana, Notion)?',
    answer:
      `Our solution allows you to operate the system yourself. Therefore, you will only have to pay a one-time software purchase cost. You will pay the monthly operating costs directly to the service provider (e.g., you will spend $15 per month to operate the system for 30 - 50 users).`,
  },
  {
    question: 'Are the installation steps complicated?',
    answer:
      `You can deploy the system yourself even if you don't have any related technical knowledge.`,
  },
  {
    question: `Can I continue to develop Namviek for commercialization after I've purchased it?`,
    answer:
      `You can absolutely commercialize your own version. Just one thing to note: you must comply with our License.`,
  },
]

export default function Faqs() {
  return <section id="feature-3" className="relative sm:w-[1242px] mx-auto mt-[200px] sm:mt-[345px]">
    <div className="flex flex-col items-center">
      <h6 className="hl1">FAQs</h6>
      <h2 className="h2 mt-[17px]">Frequently <br />
        Asked Question</h2>
      <p className="pa1 w-[300px] sm:w-[650px] mt-[37px]">
        Have a different question and can’t find the answer you’re looking for? Send us an <Link href={"/contact"}>
          <img src="/mailbox.png" className="inline-block w-6 h-6" />
        </Link> and we’ll get back to you as soon as we can.
      </p>

      <div className="mt-[50px] sm:mt-[115px] sm:w-[550px] space-y-4">
        {faqs.map((faq, faqIndex) => {
          return <div key={faqIndex} className="p-4 border border-white/20 rounded-lg bg-black/50 backdrop-blur-md">
            <h4>{faq.question}</h4>
            <p className="text-sm second-color mt-2">{faq.answer}</p>
          </div>
        })}
      </div>
    </div>

    <div className="absolute top-[342px] -left-[43%] -z-10">
      <BgSpace />
    </div>
  </section>
}

