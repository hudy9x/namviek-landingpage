import Link from "next/link";
import { FaDiscord, FaGithub } from "react-icons/fa6";

export default function Footer() {
  const bottomMenus = [
    {
      title: 'Product', menus: [
        { title: 'Features', link: '#features' },
        { title: 'Integrations', link: '#features' },
        { title: 'Pricings', link: '#features' },
        { title: 'Change logs', link: '#features' },
      ]
    },

    {
      title: 'About', menus: [
        { title: 'Our team', link: '#features' },
        { title: 'Our value', link: '#features' },
        { title: 'Blog', link: '#features' },
      ]
    },

    {
      title: 'Resources', menus: [
        { title: 'Downloads', link: '#features' },
        { title: 'Documentation', link: '#features' },
        { title: 'Contact', link: '#features' },
      ]
    },

  ]
  return <footer className="w-[1100px] mt-[115px] mx-auto">
    <section className="flex items-start justify-between">
      <aside className="w-[375px] space-y-3">
        <div className="flex items-center gap-2">
          <img src="/Logo.svg" alt="Logo Namviek" />
          <span className="font-bold">Namviek</span>
        </div>
        <p className="second-color text-sm leading-6">The open-source solution for cost-effective Project management.</p>
        <div className="flex items-center gap-2 pt-2">
          <Link href="https://github.com/hudy9x/namviek" target="_blank" className="text-gray-200 hover:text-gray-400 transition-all">
            <FaGithub />
          </Link>
          <Link href="https://discord.gg/XbYtDQYFPZ" target="_blank" className="text-gray-200 hover:text-gray-400 transition-all">
            <FaDiscord />
          </Link>
        </div>
      </aside>

      <aside className="flex items-start gap-8">
        {bottomMenus.map((menu, mindex) => {
          const { menus } = menu
          return <div key={mindex} className="w-[120px]">
            <h4 className="font-semibold text-lg">{menu.title}</h4>
            <nav className="flex flex-col gap-2 mt-3">
              {menus.map((item, index) => {
                return <Link key={index}
                  className="second-color text-sm transition-all hover:text-gray-300"
                  href={item.link}>{item.title}</Link>
              })}
            </nav>
          </div>
        })}
      </aside>
    </section>
    <section className="py-10 border-t border-gray-900 mt-10">
      <p className="second-color">Copyright 2024 All rights reserved - Namviek</p>
    </section>
  </footer>
}
