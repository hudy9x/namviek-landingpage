'use client'
import { useEffect, useState } from "react"

interface ITechBrand {
  title: string
  src: string
  left: number
  top: number
}

export default function TechBrand() {
  const size = 300;
  const itemSize = 63;

  const [techBrands] = useState<ITechBrand[]>([
    { title: 'github', src: "/github.png", left: 0, top: 0 },
    { title: 'vercel', src: "/vercel.png", left: 0, top: 0 },
    { title: 'mongodb', src: "/mongodb.png", left: 0, top: 0 },
    { title: 'pusher', src: "/pusher.png", left: 0, top: 0 },
    { title: 'aws', src: "/aws.png", left: 0, top: 0 },
    { title: 'nextjs', src: "/nextjs.png", left: 0, top: 0 },
    { title: 'cloudflare', src: "/cloudflare.png", left: 0, top: 0 },
    { title: 'redis', src: "/redis.png", left: 0, top: 0 },
  ])

  useEffect(() => {
    const w = size;
    const h = size;
    const centerX = w / 2
    const centerY = h / 2

    const radius = Math.max(w, h) / 2;

    const haftSize = itemSize / 2
    const numberOfItems = techBrands.length

    for (let i = 0; i < numberOfItems; i++) {
      const angle = i / numberOfItems * 2 * Math.PI
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      const item = document.getElementById(`tech-item-${i}`)
      if (!item) continue

      item.style.top = `${y - haftSize}px`
      item.style.left = `${x - haftSize}px`
    }

  }, [])

  return <div className="absolute">
    <div className="tech-brand" style={{ width: size, height: size }}>
      {techBrands.map((brand, brandIndex) => {
        return <div key={brandIndex} id={`tech-item-${brandIndex}`} className={`tech-brand-item`} style={{ top: brand.top, left: brand.left }}>
          <div className="tech-item-container">
            <img src={`/tech-brands${brand.src}`} alt={brand.title} />
          </div>
        </div>
      })}
    </div>
  </div>
}
