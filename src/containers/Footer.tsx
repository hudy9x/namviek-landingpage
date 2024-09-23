import Link from "next/link";
import { FaDiscord, FaGithub } from "react-icons/fa6";

export default function Footer() {
  const bottomMenus = [
    {
      title: 'Product', menus: [
        { title: 'Features', link: '/#features' },
        // { title: 'Integrations', link: '#features' },
        { title: 'Pricings', link: '/pricing' },
        { title: 'Change logs', link: '#features' },
      ]
    },

    {
      title: 'About', menus: [
        { title: 'Contributors', link: '/contributors' },
        { title: 'Our value', link: '/our-values' },
        // { title: 'Blog', link: '#features' },
      ]
    },

    {
      title: 'Resources', menus: [
        { title: 'Downloads', link: 'https://github.com/hudy9x/namviek' },
        { title: 'Documentation', link: 'https://docs.namviek.com' },
        { title: 'Contact', link: '/contact' },
      ]
    },

  ]
  return <footer className="px-3 sm:px-0 sm:w-[1100px] mt-[115px] mx-auto">
    <section className="flex flex-col sm:flex-row items-start justify-between">
      <aside className="sm:w-[375px] space-y-3 mb-8 sm:mb-0">
        <div className="flex items-center gap-3 sm:gap-2">
          <img src="/Logo.svg" alt="Logo Namviek" />
          <span className="font-bold">Namviek</span>
        </div>
        <p className="second-color text-sm leading-6">The open-source solution for cost-effective Project management.</p>
      </aside>

      <aside className="flex items-start gap-8 w-full sm:w-[400px] border-t border-gray-900 sm:border-none pt-6 sm:pt-0">
        {bottomMenus.map((menu, mindex) => {
          const { menus } = menu
          return <div key={mindex} className="sm:w-[120px]">
            <h4 className="uppercase font-normal sm:font-semibold text-xs text-gray-200">{menu.title}</h4>
            <nav className="flex flex-col gap-2 mt-3">
              {menus.map((item, index) => {
                return <Link key={index}
                  className="second-color text-xs sm:text-sm transition-all hover:text-gray-300"
                  href={item.link}>{item.title}</Link>
              })}
            </nav>
          </div>
        })}
      </aside>
    </section>
    <section className="py-5 sm:py-10 border-t border-gray-900 mt-3 sm:mt-10 flex flex-col sm:flex-row gap-3 items-start sm:items-center sm:justify-between">
      <p className="second-color text-xs sm:text-base">Copyright 2024 All rights reserved - Namviek</p>
      <div className="flex items-center gap-2">
        <Link href="https://github.com/hudy9x/namviek" target="_blank" className="text-gray-200">
          <FaGithub className="w-8 h-8 p-2 border rounded-md border-gray-700 bg-gray-900 hover:bg-gray-800 transition-all cursor-pointer" />
        </Link>
        <Link href="https://discord.gg/XbYtDQYFPZ" target="_blank" className="text-gray-200">
          <FaDiscord className="w-8 h-8 p-2 border rounded-md border-gray-700 bg-gray-900 hover:bg-gray-800 transition-all cursor-pointer" />
        </Link>
      </div>
    </section>
  </footer>
}
