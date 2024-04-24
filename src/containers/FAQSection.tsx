import Heading2 from "@/components/Heading2";
import Para2 from "@/components/Para2";

export default function FAQSection() {
  return <section className="faq pt-[200px]">
    <header className="space-y-6">
      <Heading2 className="text-center">You have some<br />questions ?</Heading2>
      <Para2 className="text-center">Read the FAQ below to clarify your concerns<br />And feel free to tell us by joining our channel to give a question</Para2>
    </header>
  </section>
}
