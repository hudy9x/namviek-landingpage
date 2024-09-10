export default async function GithubStar({ link }: { link: string }) {
  const res = await fetch(link, {
    headers: {
      'authorization': `Bearer ${process.env.GITHUB_TOKEN}`
    }
  })
  const data = await res.json()

  if (!data) return null
  if (data.status === '401') return null

  const starCounter = data.stargazers_count
  const starThousand = (starCounter / 1000).toPrecision(3)
  const starStr = +starThousand >= 1 ? `${starThousand}k` : starCounter

  return <>{starStr}</>

}
