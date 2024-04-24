import Heading2 from "@/components/Heading2";
import Para2 from "@/components/Para2";

export default function ContributeSection() {
  return <section className="contribute pt-[200px]">
    <header className="space-y-6">
      <Heading2 className="text-center">No features<br />match your needs</Heading2>
      <Para2 className="text-center">Feel free to build your own by contributing to our github<br />repository or join our channel to submit new feature</Para2>
    </header>
  </section>
}
