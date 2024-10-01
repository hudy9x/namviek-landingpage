
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Our team',
  description: 'Meet my team who help me build the app',
}

interface IContributor {
  name: string
  avatar: string
  url: string
  contributions: number
}

async function getContributors(page = 1) {
  let request = await fetch(`https://api.github.com/repos/hudy9x/namviek/contributors`, {
    method: 'GET',
    headers: {
      'accept': "application/vnd.github+json",
      'X-GitHub-Api-Version': '2022-11-28',
      'authorization': `Bearer ${process.env.GITHUB_TOKEN}`
    }
  });

  // print data from the fetch on screen
  let contributorsList = await request.json();
  const contributors: IContributor[] = []

  contributorsList.map((c: any) => {
    contributors.push({
      name: c.login,
      avatar: c.avatar_url,
      url: c.html_url,
      contributions: c.contributions
    })
  })

  return contributors;
};


export default async function ContributorPage() {
  const contributors = await getContributors()
  // console.log('contributor', contributors)
  return <>
    <section id="feature-3" className="relative sm:w-[1242px] mx-auto mt-[200px] sm:mt-[150px]">
      <div className="flex flex-col items-center">
        <h6 className="hl1">Team</h6>
        <h2 className="h2 mt-[17px]">Meet Contributors</h2>
        <p className="pa1 w-[350px] sm:w-[650px] mt-[37px]">A diverse group of passionate individuals dedicated to creating innovative solutions</p>

        <div className="mt-20 grid grid-cols-3 gap-8">
          {contributors.map(contri => {
            return <Link href={contri.url}
              key={contri.name}
              className="flex items-center flex-col gap-2 group">
              <img src={contri.avatar}
                className="w-20 h-20 ring-2 ring-offset-2 ring-offset-black ring-transparent group-hover:ring-blue-500 rounded-full grayscale group-hover:grayscale-0 transition-all" />
              <h5 className="text-sm group-hover:text-gray-300 text-gray-400">@{contri.name}</h5>
            </Link>
          })}
        </div>

      </div>

      <div className="absolute top-[342px] -left-[43%] -z-10">
        {/* <BgSpace /> */}

      </div>



    </section>
  </>
}
