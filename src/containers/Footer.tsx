import Heading2 from "@/components/Heading2";
import Para2 from "@/components/Para2";

export default function Footer() {
  // return <div className="footer text-white py-[400px] text-center">
  //   Made by @hudy9x
  // </div>
  const members = [
    { image: 'https://avatars.githubusercontent.com/u/95471659?v=4', name: 'hudy9x' },
    { image: 'https://avatars.githubusercontent.com/u/94043947?v=4', name: 'namnn9x' },
    { image: 'https://avatars.githubusercontent.com/u/37492649?v=4', name: 'huypl53' },
    { image: 'https://avatars.githubusercontent.com/u/44753130?v=4', name: 'vanbeonhv' },
  ]
  return <section className="contribute pt-[200px] pb-[300px]">
    <header className="space-y-6">
      <Heading2 className="text-center">About us</Heading2>
      <Para2 className="text-center">Here are our team who made this app<br />Wanna support us, join our discord channel</Para2>
      <div className="flex gap-3 text-white justify-center">
        {members.map((m, midx) => {
          return <div key={midx} className="member-item flex flex-col items-center gap-2">
            <img className="w-14 rounded-full border-2 grayscale hover:grayscale-0 transition-all" src={m.image} />
            <a href={`https://github.com/${m.name}`} target="_blank" className="text-[12px] text-gray-400">
              @{m.name}
            </a>
          </div>
        })}
      </div>
    </header>
  </section>
}
