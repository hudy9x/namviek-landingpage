import Heading2 from "@/components/Heading2";
import Para2 from "@/components/Para2";
import MotionElement from "@/components/ui/MotionElement";

export default function AboutUsSection() {
  const members = [
    { image: 'https://avatars.githubusercontent.com/u/95471659?v=4', name: 'hudy9x' },
    { image: 'https://avatars.githubusercontent.com/u/94043947?v=4', name: 'namnn9x' },
    { image: 'https://avatars.githubusercontent.com/u/37492649?v=4', name: 'huypl53' },
    { image: 'https://avatars.githubusercontent.com/u/44753130?v=4', name: 'vanbeonhv' },
  ]
  return <section id="about" className="contribute pt-[200px] pb-[200px]">
    <header className="space-y-6">
      <MotionElement>
        <Heading2 className="text-center">About us</Heading2>
      </MotionElement>
      <MotionElement>
        <Para2 className="text-center">Here are our team who made this app<br />Wanna support us, join our discord channel</Para2>
      </MotionElement>
      <MotionElement>
        <div className="flex gap-8 pt-12 text-white justify-center">
          {members.map((m, midx) => {
            let link = `https://github.com/${m.name}`
            if (m.name === 'hudy9x') {
              link = `https://hudy9x.com`
            }
            return <div
              key={midx}
              className="member-item">
              <a href={link} target="_blank" className="text-[12px] text-gray-400 flex flex-col items-center gap-3 group hover:scale-105 transition-all">
                <img className="w-16 rounded-full border-2 grayscale group-hover:grayscale-0 duration-700 transition-all" src={m.image} />
                @{m.name}
              </a>
            </div>
          })}
        </div>
      </MotionElement>
    </header>
  </section>
}
